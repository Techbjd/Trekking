import React from 'react';
import { MapPin, UserCheck, Calendar, Shield, Heart } from 'lucide-react';

const cards = [
  { icon: MapPin, title: 'Personalized Itineraries', desc: 'Tailor your trek to fit your schedule and preferences.', left: 'left-[626px]', top: 'top-[212px]' },
  { icon: UserCheck, title: 'Dedicated Guide & Porter', desc: 'Experience expert guidance with personalized attention.', left: 'left-[833px]', top: 'top-[212px]' },
  { icon: Heart, title: 'Safety & Health Benefits', desc: 'Custom acclimatization and emergency support.', left: 'left-[416px]', top: 'top-[359px]' },
  { icon: Calendar, title: 'Flexible Schedule', desc: 'Trek at your pace without the pressure of a group.', left: 'left-[626px]', top: 'top-[359px]' },
  { icon: Shield, title: 'Privacy & Comfort', desc: 'Perfect for couples, families, and small groups.', left: 'left-[833px]', top: 'top-[359px]' },
];

const PrivateTreks: React.FC = () => {
  return (
    <section className="relative bg-[#F3F4F6] w-360 h-158.5">
      {/* Title */}
      <h2 className="absolute text-black text-center w-138.75 left-110.75 top-18.75 font-['DM_Sans'] font-bold text-[36px] leading-11.75 m-0">
        Exclusive Private Treks in Nepal
      </h2>

      {/* Description */}
      <p className="absolute text-[#666666] text-center w-170.25 left-95 top-32.5 font-['DM_Sans'] font-medium text-[14px] leading-4.5 m-0">
        Discover Nepal's breathtaking trails at your own pace with our exclusive private treks. No strangers, no rushed schedules—just you, your adventure, and complete flexibility.
      </p>

      {/* Why Choose A Private Trek? */}
      <p className="absolute text-[#888E97] left-104 top-59 font-['DM_Sans'] font-medium text-[20px] leading-6.5 m-0">
        Why Choose A
      </p>
      <h3 className="absolute text-[#394150] left-104 top-64 font-['DM_Sans'] font-semibold text-[32px] leading-10.5 m-0">
        Private Trek?
      </h3>

      {/* Feature Cards */}
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

      {/* Button */}
      <button className="absolute bg-white text-[#3B86CB] rounded-[3px] border border-[#1F9DD9] text-center w-67.25 h-9.5 left-146.25 top-130.75 font-['DM_Sans'] font-medium text-[14px] leading-4.5">
        Learn More About Private Treks
      </button>
    </section>
  );
};

export default PrivateTreks;
