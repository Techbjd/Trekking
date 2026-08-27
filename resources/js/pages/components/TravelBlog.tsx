import React from 'react';
import { MapPin } from 'lucide-react';

const TravelBlog: React.FC = () => {
  const recentPosts = [
    {
      image: '/dwt-exp1.jpg',
      category: 'Trekking /Hiking',
      date: 'Sep 2, 2025',
      title: 'Langtang Trek during Spring',
    },
    {
      image: '/dwt-exp2.jpg',
      category: 'Trekking /Hiking',
      date: 'Aug 2, 2025',
      title: 'Langtang Trek during Monsoon',
    },
    {
      image: '/pexels-sajal-niraula-2157392720-34775561.jpg',
      category: 'Trekking /Hiking',
      date: 'Aug 21, 2025',
      title: 'Langtang Trek during Summer',
    },
  ];

  return (
    <section className="bg-[#F3F4F6] py-16 px-4 md:px-8">
      <div className="max-w-fit mx-auto">
        <div className="w-full flex flex-row items-center text-center gap-4 mb-4 justify-between">
          <h2 className="font-['DM_Sans'] font-bold text-[32px] leading-10.5 text-black m-0">
            Explore our Travel Blog
          </h2>
          <button className="border border-[#1F9DD9] bg-white text-[#3B86CB] font-['DM_Sans'] font-medium text-[14px] leading-4.5 px-6 py-2 rounded-[3px] whitespace-nowrap">
            Explore more Blogs
          </button>
        </div>

        {/* Description */}
        <p className=" w-1/2 font-['DM_Sans'] font-medium text-[14px] leading-4.5 text-[#666666] max-w-136.75 mb-10 m-0 text-start ">
          Explore our blog for trusted trekking insights across Nepal: from
          beginner-friendly tips and route breakdowns to expert guidance for
          seasoned high-altitude adventurers
        </p>

        {/* Blog Grid */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Featured Post - 506x403 */}
          <article className="relative w-full  lg:w-126.5 h-100.75 shrink-0  justify-center rounded-2xl overflow-hidden group">
            <img
              src="/mountain-bg.png"
              alt="Langtang Trek during Winter"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2 mb-1">
                <MapPin size={25} className="text-white stroke-1" />
                <span className="font-['DM_Sans'] font-medium text-[10px] leading-3.25 text-white">
                  Trekking /Hiking | Sep 2, 2025
                </span>
              </div>
              <h3 className="font-['DM_Sans'] font-bold text-[20px] leading-6.5 text-white m-0">
                Langtang Trek during Winter
              </h3>
            </div>
          </article>

          {/* Recent Posts - 174x121 each, stacked */}
          <div className="flex flex-col justify-center gap-4">
            {recentPosts.map((post, index) => (
              <article key={index} className="flex items-start gap-4">
                {/* Thumbnail - 174x121 */}
                <div className="w-43.5 h-30.25 shrink-0 rounded-2xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text content */}
                <div className="flex flex-col justify-start pt-2 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <MapPin size={25} className="text-[#5E5858] stroke-1" />
                    <span className="font-['DM_Sans'] font-medium text-[10px] leading-3.25 text-[#535661]">
                      {post.category} | {post.date}
                    </span>
                  </div>
                  <h3 className="font-['DM_Sans'] font-medium text-[15px] leading-5 text-[#394150] m-0 w-45">
                    {post.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelBlog;