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

    if (ref.current) observer.observe(ref.current);
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

    if (!container) return;

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

    setActiveIndex(closestIndex % carouselImages.length);

    const totalScrollWidth = container.scrollWidth - containerWidth;
    if (scrollLeft >= totalScrollWidth - 10) {
      container.scrollLeft = 0;
    }
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const loopedImages = [...carouselImages, ...carouselImages, ...carouselImages];

  return (
    <section ref={ref} className="relative bg-white m-auto  my-10 md:py-14 lg:py-0">
      {/* ===== SINGLE CONTAINER ===== */}
      <div className="relative bg-[#E9F3FC] rounded-[14px] max-w-[92%] lg:max-w-259.5 mx-auto my-3 lg:my-0 lg:mt-26.25 overflow-hidden ">

        {/* Desktop images - absolute */}
        <div className="hidden lg:block relative w-full h-140.75">
          {desktopImages.map((img, i) => (
            <div
              key={i}
              className={`absolute rounded-[10px] bg-cover bg-center z-2 ${img.width} ${img.height} ${img.left} ${img.top}`}
              style={{ backgroundImage: `url('${img.src}')` }}
            />
          ))}
        </div>

        {/* Mobile carousel images */}
        <div className="lg:hidden relative z-10 px-4 py-8 md:px-6 md:py-10">
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
        </div>

        {/* Title - shared */}
        <h2 className={`font-['DM_Sans'] font-bold text-black m-0 ${
          'text-center text-xl md:text-2xl leading-tight mb-3 px-4 lg:absolute lg:text-[36px] lg:leading-11.75 lg:text-left lg:w-76 lg:h-23.25 lg:left-140 lg:top-16.5 lg:mb-0'
        }`}>
          A Global Happy Family
        </h2>

        {/* Description - shared */}
        <p className={`font-['DM_Sans'] font-medium text-[#666666] m-0 ${
          'text-center text-sm md:text-base leading-relaxed mb-4 px-4 lg:absolute lg:text-[14px] lg:leading-4.5 lg:text-left lg:w-74.25 lg:left-140 lg:top-42 lg:mb-0'
        }`}>
          DWT believes that the world is a global family, and we treat each other accordingly. We believe in giving back more to society than taking. After all, we rise by lifting others.
        </p>

        {/* Button - shared */}
        <div className={`px-4 pb-6 lg:pb-0 ${'lg:absolute lg:left-140 lg:top-66'}`}>
          <button className={`bg-white text-[#3B86CB] rounded-[3px] border border-[#1F9DD9] font-['DM_Sans'] font-medium transition-colors duration-300 ${
            'w-full py-2.5 text-sm hover:bg-[#E9F3FC] lg:text-center lg:w-50.5 lg:h-10.25 lg:text-[14px] lg:hover:bg-white'
          }`}>
            Learn about our CSR
          </button>
        </div>

        {/* Mountain background - shared */}
        <div className="absolute w-full bottom-0 left-0 z-0">
          <img
            src="/mountain-bg.png"
            alt="Mountains"
            className="w-full  md:object-fill  object-bottom opacity-30 lg:opacity-50 h-1/2   md:h-57.75 rounded-b-[14px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalHappyFamily;
