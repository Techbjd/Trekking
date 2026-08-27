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
    <section className="relative h-150 bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.png')" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Title */}
        <h1 className="text-white text-center mb-12 drop-shadow-lg w-[790px] h-[89px] font-['DM_Sans'] font-bold text-[60px] leading-none tracking-normal m-0">
          Explore the Nepal Himalayas
        </h1>

        {/* Search bar */}
        <div className="w-1/2">
          <div className="w-full max-w-2xl h-16.25 bg-white rounded-full border border-gray-300 flex items-center px-2">
            <button className="flex items-center justify-center w-12 h-full rounded-l-full">
              <img src="/search.svg" alt="Search" className="h-5 w-5 object-cover bg-white" />
            </button>
            <input
              type="text"
              placeholder="Search by trek name"
              className="flex-1 h-full px-4 text-black bg-white focus:outline-none text-lg rounded-r-full"
            />
          </div>
        </div>

        {/* Stats + Mountaineer */}
        <div className="relative w-full flex flex-col items-center justify-center h-full">
          <div className="absolute w-[90%] flex justify-between items-center font-['DM_Sans'] font-medium text-[16px] leading-5.25 text-white px-4">
            {stats.map((stat, i) => (
              <p key={i} className="text-center text-white flex items-center gap-2">
                <stat.icon size={40} strokeWidth={2} />
                {stat.value}<br />
                {stat.label}
              </p>
            ))}
          </div>
          <div className="absolute z-20 left-1/2 -translate-x-1/2 bottom-0">
            <img src="/mountaineer 1.png" alt="mountainer" className="object-cover w-61.5 h-51" />
          </div>
        </div>
      </div>

      {/* White oval */}
      <div className="absolute z-30 left-0 -bottom-12 w-full h-24">
        <svg viewBox="0 0 1440 96" className="w-full h-full" preserveAspectRatio="none">
          <ellipse cx="720" cy="48" rx="720" ry="48" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
