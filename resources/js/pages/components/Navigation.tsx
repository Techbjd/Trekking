import React from 'react';
import { Search } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="w-full bg-[#2D0B51]">
      <div className='max-w-360 h-18.75 mx-auto px-4 md:px-8 flex items-center relative'>
        {/* Nav items - centered */}
        <div className="flex items-center gap-4 md:gap-8 text-white text-sm md:text-base font-['DM_Sans'] mx-auto">
          <p className="text-[#A5CDF2] whitespace-nowrap">Nepal Trips</p>
          <span className="text-[#FFFFFF]">|</span>
          <p className="whitespace-nowrap">Travel Info</p>
          <p className="whitespace-nowrap">Company</p>
          <p className="whitespace-nowrap">Blog</p>
          <p className="whitespace-nowrap">Contact Us</p>
          <span className="text-[#FFFFFF]">|</span>
          <p className="text-[#A5CDF2] whitespace-nowrap">Top 5 Treks</p>
        </div>
        
        {/* Search - absolute positioned on right */}
        <Search
          className="text-white cursor-pointer p-2 md:p-4 absolute right-4 md:right-8 top-1/2 -translate-y-1/2"
          size={24}
        />
      </div>
    </nav>
  );
};

export default Navigation;