import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import React from 'react';

const cards = [
  {
    img: '/dwt-exp1.jpg',
    title: 'A fun-filled journey to the Everest Base',
    subtitle: 'Everest Base Camp - 14 Days',
    titleAlign: '',
    subtitleAlign: '',
    width: 'w-[331px]',
    left: 'left-[199px]',
  },
  {
    img: '/dwt-exp2.jpg',
    title: 'Exclusive Private Treks in Nepal with Discovery World Trekking',
    subtitle: 'Private Trek in Nepal',
    titleAlign: 'text-center',
    subtitleAlign: 'text-center',
    width: 'w-[331px]',
    left: 'left-[555px]',
  },
  {
    img: '/dwt-exp3.jpg',
    title: 'Armed Forces Para-Snowsport Team (AFPST) Completes Everest Base Camp Trek',
    subtitle: 'Everest Base Camp - 12 Days',
    titleAlign: 'text-center',
    subtitleAlign: 'text-center',
    width: 'w-[334px]',
    left: 'left-[911px]',
  },
];

const DWTExperience: React.FC = () => {
  return (
    <section className="relative bg-white w-[95%] mx-auto xl:h-125 xl:flex xl:justify-center xl:items-center py-12 px-4 xl:py-0 xl:px-0">
      {/* Title */}
      <h2 className="xl:absolute text-black text-center font-['DM_Sans'] font-bold text-2xl leading-8 xl:text-[32px] xl:leading-10.5 xl:w-67.25 xl:left-146.25 xl:top-10 m-0 mb-4 xl:mb-0">
        DWT Experience
      </h2>

      {/* Description */}
      <p className="xl:absolute text-[#666666] text-center font-['DM_Sans'] font-medium text-sm leading-5 xl:text-[14px] xl:leading-4.5 xl:w-170.25 xl:left-97.25 xl:top-22.5 m-0 mb-8 xl:mb-0">
        Life is a collection of experiences. At Discovery World Trekking, we want to enrich your life through excellent trek experiences in the incredible Nepali terrain.
      </p>

      {/* Cards - Mobile/Tablet Flow */}
      <div className="xl:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div key={i} className="flex flex-col">
            <div className="relative rounded-lg overflow-hidden w-full h-48 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <img src={card.img} alt="Experience" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full p-2">
                  <Play className="w-5 h-5 text-black" fill="black" />
                </div>
              </div>
            </div>
            <h3 className={`text-[#1E1E1E] mt-2 font-['DM_Sans'] font-medium text-sm leading-5 m-0 ${card.titleAlign}`}>
              {card.title}
            </h3>
            <p className={`text-[#666666] font-['DM_Sans'] font-medium text-[14px] leading-4.5 m-0 ${card.subtitleAlign}`}>
              {card.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* Cards - Desktop Absolute */}
      {cards.map((card, i) => (
        <div key={i} className={`hidden xl:block absolute ${card.width} ${card.left} top-39`}>
          <div className="relative rounded-[9px] overflow-hidden w-full h-51.75 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <img src={card.img} alt="Experience" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full p-2">
                <Play className="w-5 h-5 text-black" fill="black" />
              </div>
            </div>
          </div>
          <h3 className={`text-[#1E1E1E] mt-2 font-['DM_Sans'] font-medium text-[15px] leading-5 m-0 ${card.titleAlign}`}>
            {card.title}
          </h3>
          <p className={`text-[#666666] font-['DM_Sans'] font-medium text-[14px] leading-4.5 m-0 ${card.subtitleAlign}`}>
            {card.subtitle}
          </p>
        </div>
      ))}

      {/* Arrows - Mobile/Tablet */}
      <div className="xl:hidden flex justify-center items-center gap-4 mt-8">
        <div className="flex items-center justify-center rounded-full bg-white w-9 h-9 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
          <ChevronLeft className="w-6 h-6 text-black" />
        </div>
        <div className="flex items-center justify-center rounded-full bg-white w-9 h-9 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
          <ChevronRight className="w-6 h-6 text-black" />
        </div>
      </div>

      {/* Arrows - Desktop Absolute */}
      <div className="hidden xl:flex absolute items-center justify-center rounded-full bg-white w-9.25 h-9.25 left-38.5 top-59.5 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
        <ChevronLeft className="w-6 h-6 text-black" />
      </div>
      <div className="hidden xl:flex absolute items-center justify-center rounded-full bg-white w-9.25 h-9.25 left-313.25 top-59.5 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
        <ChevronRight className="w-6 h-6 text-black" />
      </div>
    </section>
  );
};

export default DWTExperience;
