import React, { useState, useRef, useEffect, useCallback } from 'react';

const desktopImages = [
  { src: '/Global_HappyFamily1.png', width: 'w-[177px]', height: 'h-[235px]', left: 'left-[66px]', top: 'top-[19px]' },
  { src: '/Bottom_left.jpg', width: 'w-[177px]', height: 'h-[261px]', left: 'left-[66px]', top: 'top-[280px]' },
  { src: '/ashokjkshetri-30347997.jpg', width: 'w-[177px]', height: 'h-[262px]', left: 'left-[274px]', top: 'top-[133px]' },
  { src: '/pexels-zomlien-neihsiel.jpg', width: 'w-[177px]', height: 'h-[91px]', left: 'left-[274px]', top: 'top-[19px]' },
  { src: '/thorong-la-pass-annapurna-circuit-trek-300x240.png', width: 'w-[177px]', height: 'h-[129px]', left: 'left-[274px]', top: 'top-[411px]' },
];

const carouselImages = [
  '/Global_HappyFamily1.png',
  '/Bottom_left.jpg',
  '/ashokjkshetri-30347997.jpg',
  '/pexels-zomlien-neihsiel.jpg',
  '/thorong-la-pass-annapurna-circuit-trek-300x240.png',
];

function useInView() {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    if (ref.current) {
observer.observe(ref.current);
}

    return () => observer.disconnect();
  }, []);

  return [ref, isIntersecting] as const;
}

const GlobalHappyFamily: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView();

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;

    if (!container) {
return;
}

    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const center = scrollLeft + containerWidth / 2;
    const children = container.children;
    let closestIndex = 0;
    let closestDistance = Infinity;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(center - childCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    }

    const realIndex = closestIndex % carouselImages.length;
    setActiveIndex(realIndex);

    // Infinite loop: reset scroll to start when reaching end
    const totalScrollWidth = container.scrollWidth - containerWidth;

    if (scrollLeft >= totalScrollWidth - 10) {
      container.scrollLeft = 0;
    }
  }, []);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) {
return;
}

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Duplicate images for infinite scroll effect
  const loopedImages = [...carouselImages, ...carouselImages, ...carouselImages];

  return (
    <section ref={ref} className="relative bg-white">
      {/* ===== DESKTOP — original positioning ===== */}
      <div className="hidden lg:block relative max-w-360 h-200 mx-auto">
        <div className="absolute bg-[#E9F3FC] rounded-[14px] max-w-259.5 h-140.75 left-50.5 top-26.25 z-1">
          {desktopImages.map((img, i) => (
            <div
              key={i}
              className={`absolute rounded-[10px] bg-cover bg-center z-2 ${img.width} ${img.height} ${img.left} ${img.top}`}
              style={{ backgroundImage: `url('${img.src}')` }}
            />
          ))}

          <h2 className="absolute text-black w-76 h-23.25 left-140 top-16.5 font-['DM_Sans'] font-bold text-[36px] leading-11.75 m-0">
            A Global Happy Family
          </h2>

          <p className="absolute text-[#666666] w-74.25 left-140 top-42 font-['DM_Sans'] font-medium text-[14px] leading-4.5 m-0">
            DWT believes that the world is a global family, and we treat each other accordingly. We believe in giving back more to society than taking. After all, we rise by lifting others.
          </p>

          <button className="absolute bg-white text-[#3B86CB] rounded-[3px] border border-[#1F9DD9] text-center w-50.5 h-10.25 left-140 top-66 font-['DM_Sans'] font-medium text-[14px] leading-4.5">
            Learn about our CSR
          </button>

          <div className="absolute w-259.5 h-57.75 left-0 bottom-0 z-0">
            <img src="/mountain-bg.png" alt="Mountains" className="w-full h-full object-fit object-bottom opacity-50" loading="lazy" />
          </div>
        </div>
      </div>

      {/* ===== MOBILE / TABLET — infinite horizontal carousel ===== */}
      <div className="lg:hidden relative bg-[#E9F3FC] rounded-[14px] max-w-[92%] my-3 mx-auto overflow-hidden">
        <img
          src="/mountain-bg.png"
          loading="lazy"
          className="absolute bottom-0 left-0 w-full h-[80px] md:h-[120px] object-cover object-bottom opacity-40 rounded-b-[14px]"
          alt="Mountains"
        />

        <div className="relative z-10 px-4 py-8 md:px-6 md:py-10">
          {/* Infinite scrollable carousel */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-hidden snap-x snap-mandatory pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {loopedImages.map((img, i) => {
              const isCenter = activeIndex === (i % carouselImages.length);

              return (
                <div key={i} className="shrink-0 snap-center flex items-center justify-center">
                  <img
                    src={img}
                    loading={i < 5 ? 'eager' : 'lazy'}
                    className={`rounded-[10px] object-cover transition-all duration-500 ${inView ? 'animate-scale-in' : 'opacity-0'} ${
                      isCenter
                        ? 'w-[140px] h-[180px] md:w-[180px] md:h-[240px] shadow-lg scale-105'
                        : 'w-[90px] h-[120px] md:w-[120px] md:h-[160px] opacity-70 scale-95'
                    }`}
                    alt={`Happy family ${(i % carouselImages.length) + 1}`}
                  />
                </div>
              );
            })}
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {carouselImages.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'bg-[#2D0B51] w-4' : 'bg-gray-300 w-2'
                }`}
              />
            ))}
          </div>

          {/* Text */}
          <div className={`text-center mt-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-black font-['DM_Sans'] font-bold text-xl md:text-2xl leading-tight mb-3">
              A Global Happy Family
            </h2>
            <p className="text-[#666666] font-['DM_Sans'] font-medium text-sm md:text-base leading-relaxed mb-4">
              DWT believes that the world is a global family, and we treat each other accordingly. We believe in giving back more to society than taking. After all, we rise by lifting others.
            </p>
            <button className="bg-white text-[#3B86CB] rounded-[3px] border border-[#1F9DD9] px-6 py-2.5 font-['DM_Sans'] font-medium text-sm hover:bg-[#E9F3FC] transition-colors duration-300">
              Learn about our CSR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalHappyFamily;
