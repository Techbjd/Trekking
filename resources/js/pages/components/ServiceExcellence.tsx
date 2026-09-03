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
        <section className="relative bg-[#F3F4F6] w-full py-10 px-4 md:py-14 md:px-8 xl:h-88.75 xl:py-0 xl:px-0">
            {/* Title */}
            <h2 className="xl:absolute text-[#394150] text-center font-['DM_Sans'] font-bold text-[18px] leading-6 md:text-[20px] md:leading-6.5 m-0 mb-8 xl:mb-0 xl:w-83.75 xl:left-138.5 xl:top-15.5">
                Our History in Service Excellence
            </h2>

            {/* Award Cards - Mobile/Tablet */}
            <div className="xl:hidden flex justify-center gap-4 md:gap-6 flex-wrap">
                {awards.map((award, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-[9px] w-43.5 h-43.5 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                    >
                        <img src={award.src} alt="Award" className="w-full h-full object-contain p-2" />
                    </div>
                ))}
            </div>

            {/* Award Cards - Desktop Absolute */}
            {awards.map((award, i) => (
                <div
                    key={i}
                    className={`hidden xl:block absolute bg-white rounded-[9px] w-43.5 h-43.5 top-28.75 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ${award.left}`}
                >
                    <img src={award.src} alt="Award" className="w-full h-full object-contain p-2" />
                </div>
            ))}

            {/* Arrows - Mobile/Tablet */}
            <div className="xl:hidden flex justify-center items-center gap-4 mt-6">
                <div className="flex items-center justify-center rounded-full bg-white w-8 h-8 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
                    <ChevronLeft className="w-5 h-5 text-black" />
                </div>
                <div className="flex items-center justify-center rounded-full bg-white w-8 h-8 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
                    <ChevronRight className="w-5 h-5 text-black" />
                </div>
            </div>

            {/* Arrows - Desktop Absolute */}
            <div className="hidden xl:flex absolute items-center justify-center rounded-full bg-white w-8.25 h-8.25 left-56 top-44.25 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
                <ChevronLeft className="w-5 h-5 text-black" />
            </div>
            <div className="hidden xl:flex absolute items-center justify-center rounded-full bg-white w-8.25 h-8.25 left-296 top-44.25 shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
                <ChevronRight className="w-5 h-5 text-black" />
            </div>
        </section>
    );
};

export default ServiceExcellence;
