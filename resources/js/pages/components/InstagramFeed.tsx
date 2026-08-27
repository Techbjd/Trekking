import React from 'react';

const InstagramFeed: React.FC = () => {
  const images = [
    '/insta1.png', '/insta2.jpg', '/insta3.jpg', '/insta4.png',
    '/insta5.jpg', '/insta6.jpg', '/insta7.jpg', '/insta2.jpg',
  ];

  return (
    <section className="relative bg-[#E9F3FC] w-360 h-196.5">
      {/* Instagram Icon */}
      <div className="absolute left-[567px] top-15">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="11" fill="url(#insta-gradient)" />
          <rect x="4" y="4" width="14" height="14" rx="4" stroke="white" strokeWidth="1.5" fill="none" />
          <circle cx="11" cy="11" r="3.5" stroke="white" strokeWidth="1.5" fill="none" />
          <circle cx="15.5" cy="6.5" r="1" fill="white" />
          <defs>
            <radialGradient id="insta-gradient" cx="0%" cy="100%" r="150%">
              <stop offset="9%" stopColor="#FA8F21" />
              <stop offset="78%" stopColor="#D82D7E" />
              <stop offset="100%" stopColor="#8C3AAA" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Username */}
      <h2 className="absolute text-[#394150] left-[599px] top-15 font-['DM_Sans'] font-bold text-[20px] leading-6.5 m-0">
        @discovery_world_trekking
      </h2>

      {/* Row 1 - Images */}
      {images.slice(0, 4).map((img, i) => (
        <div
          key={`row1-${i}`}
          className="absolute rounded-lg overflow-hidden bg-[#D4E8F5] w-62 h-62"
          style={{ left: 197 + i * 266, top: 130 }}
        >
          <img src={img} alt="Instagram" className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Row 2 - Images */}
      {images.slice(4, 8).map((img, i) => (
        <div
          key={`row2-${i}`}
          className="absolute rounded-lg overflow-hidden bg-[#D4E8F5] w-62 h-62"
          style={{ left: 197 + i * 266, top: 393 }}
        >
          <img src={img} alt="Instagram" className="w-full h-full object-fit" />
        </div>
      ))}

      {/* Load More Button */}
      <button className="absolute bg-white text-[#3B86CB] rounded-[3px] border border-[#1F9DD9] text-center w-34.25 h-9.5 left-162.75 top-165.75 font-['DM_Sans'] font-medium text-[14px] leading-4.5">
        Load More
      </button>
    </section>
  );
};

export default InstagramFeed;
