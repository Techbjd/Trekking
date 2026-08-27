import React from 'react';

const images = [
  { src: '/Global_HappyFamily1.png', width: 'w-[177px]', height: 'h-[235px]', left: 'left-[66px]', top: 'top-[19px]' },
  { src: '/Bottom_left.jpg', width: 'w-[177px]', height: 'h-[261px]', left: 'left-[66px]', top: 'top-[280px]' },
  { src: '/ashokjkshetri-30347997.jpg', width: 'w-[177px]', height: 'h-[262px]', left: 'left-[274px]', top: 'top-[133px]' },
  { src: '/pexels-zomlien-neihsiel.jpg', width: 'w-[177px]', height: 'h-[91px]', left: 'left-[274px]', top: 'top-[19px]' },
  { src: '/thorong-la-pass-annapurna-circuit-trek-300x240.png', width: 'w-[177px]', height: 'h-[129px]', left: 'left-[274px]', top: 'top-[411px]' },
];

const GlobalHappyFamily: React.FC = () => {
  return (
    <section className="relative bg-white w-360 h-200">
      {/* Main Container */}
      <div className="absolute bg-[#E9F3FC] rounded-[14px] w-259.5 h-140.75 left-50.5 top-26.25 z-1">
        {/* Images */}
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute rounded-[10px] bg-cover bg-center z-2 ${img.width} ${img.height} ${img.left} ${img.top}`}
            style={{ backgroundImage: `url('${img.src}')` }}
          />
        ))}

        {/* Title */}
        <h2 className="absolute text-black w-76 h-23.25 left-140 top-16.5 font-['DM_Sans'] font-bold text-[36px] leading-11.75 m-0">
          A Global Happy Family
        </h2>

        {/* Description */}
        <p className="absolute text-[#666666] w-74.25 left-140 top-42 font-['DM_Sans'] font-medium text-[14px] leading-4.5 m-0">
          DWT believes that the world is a global family, and we treat each other accordingly. We believe in giving back more to society than taking. After all, we rise by lifting others.
        </p>

        {/* Button */}
        <button className="absolute bg-white text-[#3B86CB] rounded-[3px] border border-[#1F9DD9] text-center w-50.5 h-10.25 left-140 top-66 font-['DM_Sans'] font-medium text-[14px] leading-4.5">
          Learn about our CSR
        </button>

        {/* Bottom Background Image */}
        <div className="absolute w-259.5 h-57.75 left-0 bottom-0 z-0">
          <img src="/mountain-bg.png" alt="Mountains" className="w-full h-full object-fit object-bottom opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default GlobalHappyFamily;
