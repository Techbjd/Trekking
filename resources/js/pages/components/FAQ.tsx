import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const faqs = [
  { question: '1. Why choose Discovery World Trekking?', answer: 'Discovery World Trekking is a leading trekking company in Nepal.' },
  { question: '2. Can I get a Nepal visa on arrival at the airport?', answer: 'Yes, a visa on arrival is available for most nationalities.' },
  { question: '3. How do I book a trek with Discovery World Trekking?', answer: 'You can book directly through our website or contact us.' },
  { question: '4. Do I need travel insurance for trekking in Nepal?', answer: 'Yes, comprehensive travel insurance is highly recommended.' },
  { question: '5. Can I easily exchange money in Nepal?', answer: 'Yes, major currencies can be exchanged at airports and banks.' },
  { question: '6. What is your refund and cancellation policy?', answer: 'Please refer to our terms and conditions for details.' },
];

const topOffsets = [150, 240, 330, 420, 510, 600];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white w-full pb-4 flex flex-col items-center xl:relative xl:w-360 xl:h-162.5 xl:block xl:items-start">
      {/* Title */}
      <h2 className="text-black text-center font-['DM_Sans'] font-bold text-2xl md:text-[32px] leading-9 md:leading-10.5 m-0 mb-8 xl:absolute xl:mb-0 xl:text-[32px] xl:leading-10.5 xl:w-113 xl:left-114.5 xl:top-12.5">
        Frequently Asked Questions
      </h2>

      {/* FAQ Items */}
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`bg-white rounded-[5px] shadow-[1px_1px_5.7px_rgba(0,0,0,0.25)] w-full max-w-2xl mb-4 xl:absolute xl:mb-0 xl:w-214 xl:h-18.5 xl:left-70.5`}
          style={{ top: `${topOffsets[i]}px` }}
        >
          <button
            className="text-left flex items-center justify-between w-full px-6 py-4 xl:h-full xl:px-8"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-['Inter'] font-bold text-[12px] leading-3.75 text-[#515865]">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-[#515865] transition-transform duration-200 shrink-0 ${openIndex === i ? '' : 'rotate-90'}`}
            />
          </button>
          {openIndex === i && (
            <div className="px-6 pb-4 xl:absolute xl:top-11.25 xl:px-8 xl:pb-0 bg-white font-['Inter'] text-[11px] leading-3.5 text-[#666]">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
