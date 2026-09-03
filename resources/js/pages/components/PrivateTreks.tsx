import { MapPin, UserCheck, Calendar, Shield, Heart } from 'lucide-react';
import React from 'react';

// Shared content — used by both desktop and mobile layouts
const title = 'Exclusive Private Treks in Nepal';
const description = "Discover Nepal's breathtaking trails at your own pace with our exclusive private treks. No strangers, no rushed schedules—just you, your adventure, and complete flexibility.";
const ctaText = 'Learn More About Private Treks';

// Card data — left/top are desktop-only positions (used in absolute layout)
const cards = [
  { icon: MapPin, title: 'Personalized Itineraries', desc: 'Tailor your trek to fit your schedule and preferences.', left: 'left-[626px]', top: 'top-[212px]' },
  { icon: UserCheck, title: 'Dedicated Guide & Porter', desc: 'Experience expert guidance with personalized attention.', left: 'left-[833px]', top: 'top-[212px]' },
  { icon: Heart, title: 'Safety & Health Benefits', desc: 'Custom acclimatization and emergency support.', left: 'left-[416px]', top: 'top-[359px]' },
  { icon: Calendar, title: 'Flexible Schedule', desc: 'Trek at your pace without the pressure of a group.', left: 'left-[626px]', top: 'top-[359px]' },
  { icon: Shield, title: 'Privacy & Comfort', desc: 'Perfect for couples, families, and small groups.', left: 'left-[833px]', top: 'top-[359px]' },
];

const PrivateTreks: React.FC = () => {
  return (
    <section className="bg-[#F3F4F6]">
      {/* Desktop layout — hidden below lg breakpoint (1024px) */}
      <div className="hidden lg:block relative max-w-[1440px] h-158.5 mx-auto overflow-x-auto">
        <div className="relative w-full h-full mx-auto">
        {/* Heading */}
        <h2 className="absolute text-black text-center w-138.75 left-110.75 top-18.75 font-['DM_Sans'] font-bold text-[36px] leading-11.75 m-0">
          {title}
        </h2>

        {/* Subheading */}
        <p className="absolute text-[#666666] text-center w-170.25 left-95 top-32.5 font-['DM_Sans'] font-medium text-[14px] leading-4.5 m-0">
          {description}
        </p>

        {/* Section title */}
        <p className="absolute text-[#888E97] left-104 top-59 font-['DM_Sans'] font-medium text-[20px] leading-6.5 m-0">
          Why Choose A
        </p>
        <h3 className="absolute text-[#394150] left-104 top-64 font-['DM_Sans'] font-semibold text-[32px] leading-10.5 m-0">
          Private Trek?
        </h3>

        {/* Feature cards — positioned via left/top from cards array */}
        {cards.map((card, i) => (
          <div
            key={i}
            className={`absolute bg-[#F9FAFB] rounded-[10px] w-48.75 h-33 ${card.left} ${card.top} shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}
          >
            <div className="absolute left-5.75 top-7.5">
              <card.icon className="w-9 h-9 text-[#1B293A]" strokeWidth={1.5} />
            </div>
            <div className="absolute text-[#394150] left-20 top-7 w-26.25 font-['DM_Sans'] font-medium text-[14px] leading-4.5">
              {card.title}
            </div>
            <div className="absolute text-[#394150] left-5.75 top-20 w-39.25 font-['DM_Sans'] font-medium text-[11px] leading-3.5">
              {card.desc}
            </div>
          </div>
        ))}

        {/* CTA button */}
        <button className="absolute bg-white text-[#3B86CB] rounded-[3px] border border-[#1F9DD9] text-center w-67.25 h-9.5 left-146.25 top-130.75 font-['DM_Sans'] font-medium text-[14px] leading-4.5">
          {ctaText}
        </button>
        </div>
      </div>

      {/* Mobile/Tablet layout — hidden at lg breakpoint and above */}
      <div className="lg:hidden px-4 py-10 md:px-8 md:py-14">
        {/* Heading */}
        <h2 className="text-black text-center font-['DM_Sans'] font-bold text-2xl md:text-[36px] leading-tight mb-3">
          {title}
        </h2>

        {/* Subheading */}
        <p className="text-[#666666] text-center font-['DM_Sans'] font-medium text-sm md:text-[14px] leading-relaxed mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        {/* Section title */}
        <p className="text-[#888E97] text-center font-['DM_Sans'] font-medium text-base md:text-[20px]">
          Why Choose A
        </p>
        <h3 className="text-[#394150] text-center font-['DM_Sans'] font-semibold text-xl md:text-[32px] mb-8">
          Private Trek?
        </h3>

        {/* Feature cards — CSS grid: 1 col on mobile, 2 cols on tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-[95%] mx-auto justify-center items-center">
          {cards.map((card, i) => (
            <div key={i} className="bg-[#F9FAFB] rounded-[10px] p-5 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <card.icon className="w-9 h-9 text-[#1B293A] mb-3" strokeWidth={1.5} />
              <h4 className="text-[#394150] font-['DM_Sans'] font-medium text-sm mb-1">{card.title}</h4>
              <p className="text-[#394150] font-['DM_Sans'] font-medium text-xs">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center">
          <button className="bg-white text-[#3B86CB] rounded-[3px] border border-[#1F9DD9] px-6 py-2.5 font-['DM_Sans'] font-medium text-sm">
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PrivateTreks;
