import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-white h-16 px-4 md:px-8">
      <div className="max-w-360 mx-auto h-full flex items-center">
        {/* Logo */}
        <div className='flex-1'>
        <img
          src="/LOGO.png"
          alt="Logo"
          className="w-28 h-13 object-contain shrink-0"
        />
        </div>
        
        {/* Right side container - straight to logo */}
        <div className="ml-8 md:ml-12 flex items-center gap-4 md:gap-6 text-right min-w-0">
          <div className="hidden md:block text-right">
            <p className="font-['DM_Sans'] font-normal text-xs leading-4.25 text-[#5E5858] whitespace-nowrap">
              Quick Question? Email Us
            </p>
            <p className="font-['DM_Sans'] font-medium text-sm leading-5.75 text-[#0C0920] whitespace-nowrap">
              info@discoveryworldtrekking.com
            </p>
          </div>

          <img
            src="/Ellipse 26.png"
            alt="Expert"
            className="w-10 h-10 rounded-full border-2 border-[#D9D9D9] shrink-0"
          />

          <div className="hidden md:block text-right">
            <p className="font-['DM_Sans'] font-normal text-xs leading-4.25 text-[#5E5858] whitespace-nowrap">
              Talk to an Expert (Paul)
            </p>
            <p className="font-['DM_Sans'] font-medium text-sm leading-5.75 text-[#0C0920] whitespace-nowrap">
              +977 9840055491
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;