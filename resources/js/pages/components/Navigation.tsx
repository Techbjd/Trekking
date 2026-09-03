import { Menu, X, Mail, Search } from 'lucide-react';
import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Nepal Trips', highlight: true },
    { label: 'Travel Info', highlight: false },
    { label: 'Company', highlight: false },
    { label: 'Blog', highlight: false },
    { label: 'Contact Us', highlight: false },
    { label: 'Top 5 Treks', highlight: true },
  ];

  return (
    <nav className="w-full bg-[#2D0B51]">
      <div className="max-w-360 h-18.75 mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo - Always visible */}
        <div className="shrink-0">
          <img
            src="/LOGO.png"
            alt="Logo"
            className="w-24 h-10 md:w-28 md:h-13 object-contain"
          />
        </div>

        {/* Desktop - Nav items + Contact info + Search */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <div className="flex items-center gap-6 xl:gap-8 text-white text-sm xl:text-base font-['DM_Sans']">
            {navItems.map((item) => (
              <p
                key={item.label}
                className={`whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity ${
                  item.highlight ? 'text-[#A5CDF2]' : ''
                }`}
              >
                {item.label}
              </p>
            ))}
          </div>

          <div className="flex items-center gap-4 text-white text-xs font-['DM_Sans']">
            <div className="text-right">
              <p className="text-[#A5CDF2] whitespace-nowrap">
                Quick Question? Email Us
              </p>
              <p className="font-medium whitespace-nowrap">
                info@discoveryworldtrekking.com
              </p>
            </div>
            <img
              src="/Ellipse 26.png"
              alt="Expert"
              className="w-10 h-10 rounded-full border-2 border-[#D9D9D9] shrink-0"
            />
            <div className="text-right">
              <p className="text-[#A5CDF2] whitespace-nowrap">
                Talk to an Expert (Paul)
              </p>
              <p className="font-medium whitespace-nowrap">
                +977 9840055491
              </p>
            </div>
          </div>

          <Search className="text-white cursor-pointer hover:opacity-80" size={24} />
        </div>

        {/* Mobile - Hamburger only */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#3D1566] border-t border-[#4A1A7A] px-4 py-4">
          {/* Nav Items */}
          <div className="space-y-1 mb-4">
            {navItems.map((item) => (
              <p
                key={item.label}
                className={`text-white font-['DM_Sans'] text-sm py-3 px-3 rounded-md hover:bg-white/10 cursor-pointer transition-colors ${
                  item.highlight ? 'text-[#A5CDF2]' : ''
                }`}
              >
                {item.label}
              </p>
            ))}
          </div>

          {/* Contact Info */}
          <div className="border-t border-[#4A1A7A] pt-4 space-y-3">
            <div className="flex items-center gap-3 text-white">
              <Mail size={16} className="text-[#A5CDF2] shrink-0" />
              <div>
                <p className="font-['DM_Sans'] font-normal text-[10px] text-[#A5CDF2]">
                  Email Us
                </p>
                <p className="font-['DM_Sans'] font-medium text-xs">
                  info@discoveryworldtrekking.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <img
                src="/Ellipse 26.png"
                alt="Expert"
                className="w-8 h-8 rounded-full border-2 border-[#D9D9D9] shrink-0"
              />
              <div>
                <p className="font-['DM_Sans'] font-normal text-[10px] text-[#A5CDF2]">
                  Talk to an Expert (Paul)
                </p>
                <p className="font-['DM_Sans'] font-medium text-xs">
                  +977 9840055491
                </p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="border-t border-[#4A1A7A] pt-4">
            <div className="flex items-center gap-3 text-white">
              <Search size={16} className="text-[#A5CDF2] shrink-0" />
              <p className="font-['DM_Sans'] text-sm">Search</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
