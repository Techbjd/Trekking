import { Trophy, Sparkles, PersonStanding, HandHeart } from 'lucide-react';
import React from 'react';

const stats = [
  { icon: Trophy, value: '30,000+', label: 'Clients Satisfied' },
  { icon: Sparkles, value: '16+ Years', label: 'Experience' },
  { icon: PersonStanding, value: '100%', label: 'Private Treks' },
  { icon: HandHeart, value: 'Transparent Costs', label: 'No Hidden Fees' },
];

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        minHeight: 'clamp(400px, 80vh, 900px)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[inherit] px-[5%] py-16 md:py-20">
        {/* Title */}
        <h1
          className="text-white text-center mb-8 md:mb-12 drop-shadow-lg font-['DM_Sans'] font-bold m-0"
          style={{
            fontSize: 'clamp(1.75rem, 5vw, 3.75rem)',
            lineHeight: 'clamp(1.2, 3vw, 1.5)',
            maxWidth: 'clamp(300px, 70%, 790px)',
          }}
        >
          Explore the Nepal Himalayas
        </h1>

        {/* Search bar */}
        <div className="w-full max-w-2xl">
          <div className="w-full bg-white rounded-full border border-gray-300 flex items-center px-2"
            style={{ height: 'clamp(48px, 8vw, 65px)' }}
          >
            <button className="flex items-center justify-center w-10 md:w-12 h-full rounded-l-full shrink-0">
              <img src="/search.svg" alt="Search" className="h-4 w-4 md:h-5 md:w-5 object-cover bg-white" />
            </button>
            <input
              type="text"
              placeholder="Search by trek name"
              className="flex-1 h-full px-3 md:px-4 text-black bg-white focus:outline-none rounded-r-full"
              style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="w-full mt-12 md:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 font-['DM_Sans'] font-medium text-white px-4">
            {stats.map((stat, i) => (
              <p key={i} className="text-center flex flex-col items-center gap-2">
                <stat.icon
                  className="text-white"
                  style={{ width: 'clamp(24px, 5vw, 40px)', height: 'clamp(24px, 5vw, 40px)' }}
                  strokeWidth={2}
                />
                <span style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>{stat.value}</span>
                <span className="text-white/80" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>
                  {stat.label}
                </span>
              </p>
            ))}
          </div>
        </div>

        {/* Mountaineer */}
        <div className="absolute z-20 left-1/2 -translate-x-1/2 bottom-15 md:bottom-28 translate-y-[40%] md:translate-y-[45%]">
          <img
            src="/mountaineer 1.png"
            alt="mountainer"
            className="object-contain"
            style={{
              width: 'clamp(140px, 28vw, 246px)',
              height: 'clamp(110px, 22vw, 204px)',
            }}
          />
        </div>
      </div>

      {/* White oval */}
      <div className="absolute z-30 left-0 -bottom-8 md:-bottom-12 w-full h-16 md:h-24">
        <svg viewBox="0 0 1440 96" className="w-full h-full" preserveAspectRatio="none">
          <ellipse cx="720" cy="48" rx="720" ry="48" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
