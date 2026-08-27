import React, { useState } from 'react';

const TopBar: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="relative bg-white h-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-360 mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="shrink-0">
          <img
            src="/LOGO.png"
            alt="Logo"
            className="w-24 h-10 sm:w-28 sm:h-13 md:w-28 md:h-13 object-contain"
          />
        </div>

        {/* Desktop - Full info */}
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

        {/* Tablet - Compact info */}
        <div className="hidden md:flex lg:hidden items-center gap-4">
          <img
            src="/Ellipse 26.png"
            alt="Expert"
            className="w-9 h-9 rounded-full border-2 border-[#D9D9D9] shrink-0"
          />
          <div className="text-right">
            <p className="font-['DM_Sans'] font-medium text-xs sm:text-sm leading-4 sm:leading-5 text-[#0C0920] whitespace-nowrap">
              +977 9840055491
            </p>
            <p className="font-['DM_Sans'] font-normal text-[10px] sm:text-xs leading-3 sm:leading-4 text-[#5E5858] whitespace-nowrap">
              Talk to an Expert
            </p>
          </div>
        </div>

        {/* Mobile - Message icon */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setShowMessage(!showMessage)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Contact us"
          >
            <svg
              className="w-5 h-5 text-[#0C0920]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile message box */}
      {showMessage && (
        <div className="md:hidden absolute top-full right-4 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-56">
          {/* Pointer arrow */}
          <div className="absolute -top-2 right-3 w-4 h-4 bg-white border-t border-l border-gray-200 transform rotate-45"></div>
          <div className="p-3 relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <img
                  src="/Ellipse 26.png"
                  alt="Expert"
                  className="w-8 h-8 rounded-full border-2 border-[#D9D9D9] shrink-0"
                />
                <div>
                  <p className="font-['DM_Sans'] font-semibold text-xs text-[#0C0920]">
                    Talk to Paul
                  </p>
                  <p className="font-['DM_Sans'] font-medium text-xs text-[#0C0920]">
                    +977 9840055491
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowMessage(false)}
                className="p-0.5 rounded hover:bg-gray-100"
                aria-label="Close"
              >
                <svg
                  className="w-3 h-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="border-t border-gray-100 pt-2">
              <p className="font-['DM_Sans'] font-normal text-[10px] text-[#5E5858]">
                Quick Question? Email Us
              </p>
              <p className="font-['DM_Sans'] font-medium text-xs text-[#0C0920] truncate">
                info@discoveryworldtrekking.com
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
