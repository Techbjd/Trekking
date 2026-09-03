import { Menu, X, Mail, Search } from 'lucide-react';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Nepal Trips', highlight: true },
    { label: '|', highlight: true },
    { label: 'Travel Info', highlight: false },
    { label: 'Company', highlight: false },
    { label: 'Blog', highlight: false },
    { label: 'Contact Us', highlight: false },
    { label: '|', highlight: true },
    { label: 'Top 5 Treks', highlight: true },
  ];

  return (
    <header className="w-full">
      {/* ===== TOPBAR ===== */}
      <div className="bg-white h-16 px-4 md:px-8">
        <div className="max-w-360 mx-auto h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/LOGO.png"
              alt="Logo"
              className="w-24 h-10 md:w-28 md:h-13 object-contain"
            />
          </div>

          {/* Desktop - Contact info */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
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
            <div className="text-right">
              <p className="font-['DM_Sans'] font-normal text-xs leading-4.25 text-[#5E5858] whitespace-nowrap">
                Talk to an Expert (Paul)
              </p>
              <p className="font-['DM_Sans'] font-medium text-sm leading-5.75 text-[#0C0920] whitespace-nowrap">
                +977 9840055491
              </p>
            </div>
          </div>

          {/* Mobile - Hamburger only */}
          <div className="flex lg:hidden items-center relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#0C0920] p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== NAVIGATION - Desktop only ===== */}
      <nav className="hidden lg:block w-full bg-[#2D0B51]">
        <div className="max-w-360 h-18.75 mx-auto px-4 md:px-8 flex items-center">
          {/* Nav items - Centered */}
          <div className="flex-1 flex justify-center">
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
          </div>

          {/* Search - Far right with padding */}
          <div className="pr-4 xl:pr-8">
            <Search className="text-white cursor-pointer hover:opacity-80" size={24} />
          </div>
        </div>
      </nav>

      {/* ===== MOBILE DROPDOWN ===== */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Menu box - positioned from right edge */}
          <div className="absolute top-16 right-4 w-64 bg-white border border-gray-200 rounded-lg shadow-xl">
            {/* Pointer arrow */}
            <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-t border-l border-gray-200 transform rotate-45" />

            <div className="p-3 relative">
              {/* Nav Items */}
              <div className="space-y-1 mb-3">
                {navItems.map((item) => (
                  <p
                    key={item.label}
                    className={`font-['DM_Sans'] text-sm py-2 px-3 rounded-md hover:bg-gray-100 cursor-pointer transition-colors text-[#0C0920] ${
                      item.highlight ? 'text-[#2D0B51] font-medium' : ''
                    }`}
                  >
                    {item.label}
                  </p>
                ))}
              </div>

              {/* Contact Info */}
              <div className="border-t border-gray-100 pt-3 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#5E5858] shrink-0" />
                  <div>
                    <p className="font-['DM_Sans'] font-normal text-[10px] text-[#5E5858]">
                      Email Us
                    </p>
                    <p className="font-['DM_Sans'] font-medium text-xs text-[#0C0920]">
                      info@discoveryworldtrekking.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/Ellipse 26.png"
                    alt="Expert"
                    className="w-6 h-6 rounded-full border border-[#D9D9D9] shrink-0"
                  />
                  <div>
                    <p className="font-['DM_Sans'] font-normal text-[10px] text-[#5E5858]">
                      Talk to Paul
                    </p>
                    <p className="font-['DM_Sans'] font-medium text-xs text-[#0C0920]">
                      +977 9840055491
                    </p>
                  </div>
                </div>
              </div>

              {/* Search */}
              <div className="border-t border-gray-100 pt-3 mt-2">
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-md py-2 px-3">
                  <Search size={14} className="text-[#5E5858] shrink-0" />
                  <p className="font-['DM_Sans'] text-sm text-[#0C0920]">Search</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
