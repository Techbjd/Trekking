import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: '1. Why choose Discovery World Trekking?', answer: 'Discovery World Trekking is a leading trekking company in Nepal.' },
  { question: '2. Can I get a Nepal visa on arrival at the airport?', answer: 'Yes, a visa on arrival is available for most nationalities.' },
  { question: '3. How do I book a trek with Discovery World Trekking?', answer: 'You can book directly through our website or contact us.' },
  { question: '4. Do I need travel insurance for trekking in Nepal?', answer: 'Yes, comprehensive travel insurance is highly recommended.' },
  { question: '5. Can I easily exchange money in Nepal?', answer: 'Yes, major currencies can be exchanged at airports and banks.' },
  { question: '6. What is your refund and cancellation policy?', answer: 'Please refer to our terms and conditions for details.' },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-white mb-3 w-360 h-162.5 pb-4">
      {/* Title */}
      <h2 className="absolute text-black text-center w-113 left-114.5 top-12.5 font-['DM_Sans'] font-bold text-[32px] leading-10.5 m-0">
        Frequently Asked Questions
      </h2>

      {/* FAQ Items */}
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-[5px] w-214 h-18.5 left-70.5 shadow-[1px_1px_5.7px_rgba(0,0,0,0.25)]"
          style={{ top: 150 + i * 90 }}
        >
          <button
            className="absolute text-left flex items-center justify-between w-full h-full px-8"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-['Inter'] font-bold text-[12px] leading-3.75 text-[#515865]">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-[#515865] transition-transform duration-200 ${openIndex === i ? '' : 'rotate-90'}`}
            />
          </button>
          {openIndex === i && (
            <div className="absolute top-11.25 px-8 bg-white font-['Inter'] text-[11px] leading-3.5 text-[#666]">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
