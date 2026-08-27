import React from 'react';

const PrivateTreks: React.FC = () => {
  const benefits = [
    {
      icon: '📍', // Placeholder icon
      title: 'Personalized Itineraries',
      description: 'Tailor your trip to fit your schedule and preferences',
    },
    {
      icon: '🚶', // Placeholder icon
      title: 'Dedicated Guide & Porter',
      description: 'Experience expert guidance with personalized attention',
    },
    {
      icon: '⚕️', // Placeholder icon
      title: 'Safety & Health Benefits',
      description: 'Custom acclimatization and emergency support',
    },
    {
      icon: '⏰', // Placeholder icon
      title: 'Flexible Schedule',
      description: 'Trek at your own pace without the pressure of a group',
    },
    {
      icon: '🛡️', // Placeholder icon
      title: 'Privacy & Comfort',
      description: 'Perfect for couples, families, and small groups',
    },
  ];

  return (
    <section className="py-16 bg-[#F3F4F6]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Exclusive Private Treks in Nepal</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover Nepal's breathtaking trails at your own pace with our exclusive private treks. No strangers, no rushed schedules - just you, your adventure, and complete flexibility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4 text-left">
              <div className="text-4xl">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-colors">
          Learn More About Private Treks
        </button>
      </div>
    </section>
  );
};

export default PrivateTreks;
