import React from 'react';

const ExperienceNepal: React.FC = () => {
  const treks = [
    {
      id: 1,
      image: '/experience_Nepal1.png',
      rating: 5.0,
      reviews: 547,
      price: 1350,
      name: 'Everest Base Camp Trek',
      days: 14,
    },
    {
      id: 2,
      image: '/experience_Nepal2.png',
      rating: 5.0,
      reviews: 420,
      price: 1200,
      name: 'Annapurna Circuit Trek',
      days: 14,
    },
  ];

  return (
    <section className="py-16 bg-gray-100 relative pt-12 ">
      <div className="container mx-auto px-4 text-center ">
        <h2 className="font-['DM_Sans'] font-semibold text-[36px] leading-11.75 text-black">
          Experience Nepal
        </h2>

        <p className="mx-auto mt-4 max-w-2xl font-['DM_Sans'] font-light text-[14px] leading-4.5 text-black">
          These treks have won the hearts of many trekkers. We are sure you will appreciate
          these adventurous hikes, including treks to Mount. Everest - the highest mountain on earth.
        </p>

        <div className="relative mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
              {treks.map((trek) => (
                <div key={trek.id} className="bg-white rounded-[13px] shadow-md overflow-hidden">
                  <div className="relative">
                    <img src={trek.image} alt={trek.name} className="w-full h-86.75 object-fit rounded-t-[13px]" loading="eager" decoding="async" />
                    {/* Best Seller badge
                    <span className="absolute top-4 right-4 bg-[#FF6B35] text-white text-xs font-semibold px-2 py-1 rounded">Best Seller</span>
                     */}
                    {/* Price tag */}
                    {/* <div className="absolute bottom-4 right-4 bg-[#4594B3] text-white text-sm font-medium px-3 py-1 rounded-l">
                      US$ {trek.price}
                    </div> */}
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-[24px] font-semibold text-[#5E5858] mb-1">{trek.name} - {trek.days} Days</h3>
                    <div className="flex items-center justify-center gap-1 text-[#FACC15]">
                      <span>★</span>
                      <span className="text-white text-sm font-medium">{trek.rating} ({trek.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceNepal;