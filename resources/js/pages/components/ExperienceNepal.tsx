import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ExperienceNepal: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const treks = [
    {
      id: 1,
      image: '/experience_Nepal1.png',
      rating: 5.0,
      reviews: 547,
      price: 1350,
      name: 'Everest Base Camp Trek',
      days: 14,
    },
    {
      id: 2,
      image: '/experience_Nepal2.png',
      rating: 5.0,
      reviews: 420,
      price: 1200,
      name: 'Annapurna Circuit Trek',
      days: 14,
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-['DM_Sans'] font-semibold text-2xl md:text-[36px] leading-tight md:leading-11.75 text-black">
          Experience Nepal
        </h2>

        <p className="mx-auto mt-4 max-w-2xl font-['DM_Sans'] font-light text-sm md:text-[14px] leading-relaxed md:leading-4.5 text-black">
          These treks have won the hearts of many trekkers. We are sure you will appreciate
          these adventurous hikes, including treks to Mount. Everest - the highest mountain on earth.
        </p>

        <div className="relative mt-8 md:mt-12">
          {/* Arrow Left */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition-colors flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft size={20} className="text-[#0C0920] md:w-6 md:h-6" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 md:pb-0 px-8 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {treks.map((trek) => (
              <div
                key={trek.id}
                className="w-[70%] md:w-full snap-center bg-white rounded-[13px] shadow-md overflow-hidden flex-shrink-0"
              >
                <div className="relative">
                  <img
                    src={trek.image}
                    alt={trek.name}
                    className="w-full aspect-square object-cover rounded-t-[13px]"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <div className="p-3 md:p-4 text-center">
                  <h3 className="text-base md:text-[24px] font-semibold text-[#5E5858] mb-1">
                    {trek.name} - {trek.days} Days
                  </h3>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-[#FACC15]">★</span>
                    <span className="text-[#5E5858] text-xs md:text-sm font-medium">
                      {trek.rating} ({trek.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow Right */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition-colors flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight size={20} className="text-[#0C0920] md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceNepal;
