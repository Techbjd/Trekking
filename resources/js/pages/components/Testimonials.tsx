import React from 'react';

const ratings = [
  {
    platform: 'Tripadvisor',
    rating: 'Rated "Excellent" on Tripadvisor',
    reviews: '2,100 + Reviews',
    date: 'Updated January 2026',
    stars: 5,
    starColor: '#70DDA5',
    starType: 'circle',
    logo: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#34E0A1"/>
        <circle cx="14" cy="24" r="5" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="26" cy="24" r="5" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="14" cy="24" r="2" fill="white"/>
        <circle cx="26" cy="24" r="2" fill="white"/>
        <path d="M20 14L23 20H17L20 14Z" fill="white"/>
      </svg>
    ),
  },
  {
    platform: 'Google',
    rating: '5.0/5.0 on Google',
    reviews: '775 + Reviews',
    date: 'Updated January 2026',
    stars: 5,
    starColor: '#F8BC06',
    starType: 'star',
    logo: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M36.64 20.61C36.64 19.34 36.53 18.06 36.31 16.82H20V23.88H29.18C28.74 26.14 27.46 28.12 25.51 29.42V34.04H31.39C34.82 30.88 36.64 26.16 36.64 20.61Z" fill="#4285F4"/>
        <path d="M20 38C24.95 38 29.12 36.36 31.94 33.64L25.98 28.68C24.38 29.76 22.32 30.42 20 30.42C15.17 30.42 11.08 27.22 9.61 22.84H3.54V27.72C6.35 33.28 12.72 38 20 38Z" fill="#34A853"/>
        <path d="M9.61 22.84C9.23 21.76 9.02 20.62 9.02 19.42C9.02 18.22 9.23 17.08 9.61 16V11.12H3.54C2.24 13.64 1.5 16.44 1.5 19.42C1.5 22.4 2.24 25.2 3.54 27.72L9.61 22.84Z" fill="#FBBC05"/>
        <path d="M20 8.42C22.46 8.42 24.64 9.28 26.34 10.94L32.08 5.2C29.12 2.48 24.95 0.8 20 0.8C12.72 0.8 6.35 5.52 3.54 11.12L9.61 16C11.08 11.62 15.17 8.42 20 8.42Z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    platform: 'Trustpilot',
    rating: '4.9/5.0 on Trustpilot',
    reviews: '206 + Reviews',
    date: 'Updated January 2026',
    stars: 5,
    starColor: '#00B67A',
    starType: 'star-filled',
    logo: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4L24.5 14.5L35 16.5L27.5 24L29.5 34.5L20 29L10.5 34.5L12.5 24L5 16.5L15.5 14.5L20 4Z" fill="#00B67A"/>
      </svg>
    ),
  },
  {
    platform: 'Facebook',
    rating: '100% Recommend',
    reviews: '428 + Reviews',
    date: 'Updated January 2026',
    stars: 5,
    starColor: '#E56574',
    starType: 'star',
    logo: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#3466FF"/>
        <path d="M25 8H22C19.79 8 18 9.79 18 12V16H14V22H18V32H24V22H28L29 16H24V12C24 11.45 24.45 11 25 11H29V8H25Z" fill="white"/>
      </svg>
    ),
  },
];

const StarIcon = ({ color, type }: { color: string; type: string }) => {
  if (type === 'circle') {
    return <div className="rounded-full w-3.5 h-3.5 m-1" style={{ background: color }} />;
  }

  if (type === 'star-filled') {
    return (
      <div className="flex items-center justify-center rounded w-5 h-5" style={{ background: color }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
      </div>
    );
  }

  return <svg width="22" height="22" viewBox="0 0 24 24" fill={color}><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>;
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Happy Trekkers */}
        <div className="flex flex-col items-center max-[507px]:items-center max-[507px]:text-center sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-6 mb-12">
          <div className="flex">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div
                key={num}
                className="w-10 h-10 md:w-12 md:h-12 xl:w-15 xl:h-15 rounded-full overflow-hidden border-[3px] border-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] -ml-2.5 md:-ml-3 xl:-ml-5 first:ml-0"
                style={{ zIndex: 7 - num }}
              >
                <img src="/Ellipse 26.png" alt={`Trekker ${num}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="max-[507px]:text-center">
            <h2 className="font-['DM_Sans'] font-bold text-[20px] leading-6.5 text-[#4594B3] m-0">
              30,000 + Happy Trekkers
            </h2>
            <p className="font-['DM_Sans'] font-medium text-[14px] leading-4.5 text-[#666] m-0">
              Explorations that last a lifetime.
            </p>
          </div>
        </div>

        {/* Rating Cards */}
        <div className="flex justify-center gap-5 flex-wrap">
          {ratings.map((r, i) => (
            <div key={i} className="flex flex-col justify-between w-65 min-h-50 bg-white rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {r.logo}
                  <span className="font-['DM_Sans'] font-bold text-[20px] leading-6.5 text-[#1B2B3A]">{r.platform}</span>
                </div>
                <div className="flex gap-2 mb-4">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <StarIcon key={j} color={r.starColor} type={r.starType} />
                  ))}
                </div>
                <p className="font-['DM_Sans'] font-medium text-[14px] leading-4.5 text-[#262324] mb-1.5 m-0">{r.rating}</p>
                <p className="font-['DM_Sans'] font-medium text-[14px] leading-4.5 text-black m-0">{r.reviews}</p>
              </div>
              <p className="font-['DM_Sans'] font-light text-[12px] leading-4 italic text-[#5E5858] mt-1.5 m-0">{r.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
