import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

const awards = [
  { src: '/award1.png', left: 'left-[267px]' },
  { src: '/award2.png', left: 'left-[450px]' },
  { src: '/award3.png', left: 'left-[633px]' },
  { src: '/award4.png', left: 'left-[816px]' },
  { src: '/award5.png', left: 'left-[999px]' },
];

const ServiceExcellence: React.FC = () => {
  return (
    <section className="relative bg-[#F3F4F6] w-360 h-88.75">
      {/* Title */}
      <h2 className="absolute text-[#394150] text-center w-83.75 left-138.5 top-15.5 font-['DM_Sans'] font-bold text-[20px] leading-6.5 m-0">
        Our History in Service Excellence
      </h2>

      {/* Award Cards */}
      {awards.map((award, i) => (
        <div
          key={i}
          className={`absolute bg-white rounded-[9px] w-43.5 h-43.5 top-28.75 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ${award.left}`}
        >
          <img src={award.src} alt="Award" className="w-full h-full object-contain p-2" />
        </div>
      ))}

      {/* Left Arrow */}
      <div className="absolute flex items-center justify-center rounded-full bg-white w-8.25 h-8.25 left-56 top-44.25 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
        <ChevronLeft className="w-5 h-5 text-black" />
      </div>

      {/* Right Arrow */}
      <div className="absolute flex items-center justify-center rounded-full bg-white w-8.25 h-8.25 left-296 top-44.25 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
        <ChevronRight className="w-5 h-5 text-black" />
      </div>
    </section>
  );
};

export default ServiceExcellence;
