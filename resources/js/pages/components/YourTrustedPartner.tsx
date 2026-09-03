import React from 'react';

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.4 15C18.1277 15.6171 17.7014 16.1523 17.1616 16.5521C16.6218 16.9519 15.9866 17.2026 15.32 17.28L14.76 17.34C14.5336 17.3665 14.3039 17.3788 14.075 17.3767C13.4525 17.3712 12.8394 17.2135 12.2792 16.9163C11.7189 16.6191 11.2247 16.1891 10.8338 15.6587C10.4428 15.1284 10.1655 14.5117 10.02 13.86L9.92 13.42C9.73212 12.6597 9.33379 11.9641 8.77175 11.4198C8.20968 10.8755 7.50804 10.5077 6.75999 10.36L6.19999 10.26C5.97212 10.2334 5.74241 10.221 5.51399 10.2231C4.89147 10.2286 4.27843 10.3863 3.71817 10.6835C3.15791 10.9807 2.66371 11.4107 2.27274 11.9411C1.88177 12.4714 1.60444 13.0881 1.45999 13.74L1.35999 14.18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    color: '#4594B3',
    title: 'Trusted Award-Winning Company',
    description: '13+ TripAdvisor Excellence Winner',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    color: '#FACC15',
    title: 'Local Experts',
    description: 'Over a decade of experience with global service standards',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7 8 17 8 17 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    color: '#FF6B35',
    title: 'Sustainable Travel',
    description: 'Eco-conscious treks that respect nature and uplift local communities',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    color: '#C084FC',
    title: 'Flexible itineraries',
    description: 'Tailored routes to match your time, interests, and fitness level',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    color: '#64BF85',
    title: 'Safe & Supported',
    description: 'Certified guides, 24/7 assistance from start to finish',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 9H9.01M15 9H15.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    color: '#FF8A5F',
    title: 'Happiness guaranteed',
    description: 'Joyful journeys designed with care—where every moment feels fulfilling',
  },
];

const YourTrustedPartner: React.FC = () => {
  return (
    <section className="bg-[#BADEF8] w-full py-10 px-4 md:py-14 md:px-8 xl:py-0 xl:px-0 xl:min-h-150">
      <div className="container mx-auto flex flex-col xl:flex-row items-center xl:justify-between xl:min-h-150 gap-10 xl:gap-0">
        {/* Left Side */}
        <div className="w-full xl:w-1/2 flex flex-col items-center text-center xl:items-start xl:text-left pt-0 xl:pt-7.5 pl-0 xl:pl-39.5">
          <h2 className="font-['DM_Sans'] font-bold text-black text-2xl leading-9 md:text-[40px] md:leading-13 w-full xl:w-108 mb-4 m-0">
            Your Trusted Partner <br className="hidden md:block" /> for Himalayan Adventures
          </h2>
          <p className="font-['DM_Sans'] font-normal text-[16px] leading-5.25 text-[#666] max-w-[466px] mb-8 m-0">
            We're a team of passionate adventurers, certified guides, and local experts dedicated to giving you the safest, most enriching journeys through the Nepali Himalayas and beyond.
          </p>
          <button className="flex items-center justify-center gap-2 w-60.75 h-12 bg-white border-2 border-[#4594B3] rounded-[5px] font-['DM_Sans'] font-semibold text-[16px] text-[#4594B3] cursor-pointer">
            Discover the DWT
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none"><path d="M2 18L8 8L14 14L26 2" stroke="#4594B3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 2H26V10" stroke="#4594B3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        {/* Right Side - Features Grid */}
        <div className="w-full xl:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 md:gap-x-12 md:gap-y-10 lg:pl-25 xl:pr-25 xl:pl-4">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="rounded-full shrink-0 flex items-center justify-center w-9.25 h-9.25" style={{ background: f.color }}>
                {f.icon}
              </div>
              <div className="text-left">
                <h3 className="font-['DM_Sans'] font-bold text-black text-[18px] leading-5.75 mb-1 m-0">{f.title}</h3>
                <p className="font-['DM_Sans'] font-medium text-[14px] leading-4.5 text-[#666] w-full xl:w-60.75 m-0">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Image */}
      <div className="w-full h-64 md:h-80 xl:h-98.5 mt-10 rounded-lg overflow-hidden">
        <img src="/yourtrusted_partner.png" alt="Full width image" className="w-full h-full object-contain xl:object-cover" />
      </div>
    </section>
  );
};

export default YourTrustedPartner;
