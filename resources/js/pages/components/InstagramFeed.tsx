import React from 'react';

const InstagramFeed: React.FC = () => {
  const images = [
    '/insta1.png', '/insta2.jpg', '/insta3.jpg', '/insta4.png',
    '/insta5.jpg', '/insta6.jpg', '/insta7.jpg', '/insta2.jpg',
  ];

  return (
    <section className="bg-[#E9F3FC] w-full py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Instagram Icon & Username */}
        <div className="flex items-center gap-2 mb-10">
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
          <h2 className="font-['DM_Sans'] font-bold text-[20px] leading-6.5 text-[#394150] m-0">
            @discovery_world_trekking
          </h2>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
          {images.map((img, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg overflow-hidden bg-[#D4E8F5]"
            >
              <img src={img} alt="Instagram" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <button className="mt-10 bg-white text-[#3B86CB] rounded-[3px] border border-[#1F9DD9] text-center px-6 py-2 font-['DM_Sans'] font-medium text-[14px] leading-4.5">
          Load More
        </button>
      </div>
    </section>
  );
};

export default InstagramFeed;
