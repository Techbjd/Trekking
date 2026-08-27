import { Send } from 'lucide-react';

import React, { useEffect, useState, useRef } from 'react';


const FOOTER_W = 1440;
const FOOTER_H = 648;

const FooterInput = ({ label, left, width, type = 'text' }: { label: string; left: number; width: number; type?: string }) => (
  <div className="absolute" style={{ left, top: 151, width, height: 35, background: '#1B293A', borderRadius: 3 }}>
    <span className="absolute pointer-events-none text-white font-normal text-xs" style={{ left: 16, top: 8 }}>{label}</span>
    <input type={type} className="absolute inset-0 bg-transparent border-none outline-none text-white text-xs px-4" />
  </div>
);

const Footer: React.FC = () => {
  const [scale, setScale] = useState(1);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (footerRef.current) {
        const w = footerRef.current.parentElement?.clientWidth ?? window.innerWidth;
        setScale(Math.min(1, w / FOOTER_W));
      } else {
        setScale(Math.min(1, window.innerWidth / FOOTER_W));
      }
    };
    update();
    window.addEventListener('resize', update);

    return () => window.removeEventListener('resize', update);
  }, []);

  const linkColumns = [
    { title: 'Top 5 Treks', left: 197, titleLeft: 197, items: ['Everest Base Camp Trek', 'Annapurna Circuit Trek', 'Everest Base Camp Trek via Gokyo Lakes', 'Annapurna Base Camp Trek', 'Annapurna Circuit Trek with Tilicho Lake'] },
    { title: 'POPULAR REGIONS', left: 456, titleLeft: 453, items: ['Everest Region', 'Annapurna Region', 'Manaslu Region', 'Langtang Region', 'Mustang Region'] },
    { title: 'TRAVEL GUIDE', left: 627, titleLeft: 630, items: ['Everest Travel Guide', 'Annapurna Travel Guide', 'Manaslu Travel Guide', 'Langtang Travel Guide', 'Mustang Travel Guide'] },
    { title: 'COMPANY', left: 805, titleLeft: 805, items: ['About us', 'Our Team', 'Contact us', 'Responsible Tourism', 'Registrations & Affiliations'] },
    { title: 'USEFUL LINKS', left: 993, titleLeft: 994, items: ['Privacy Policy', 'Terms & Conditions', 'B2B Partner', 'Make a Payment', 'Make a Payment'] },
  ];

  const associateLogos = [
    { src: '/ntb%201.png', alt: 'NTB' },
    { src: '/nma%201.png', alt: 'NMA' },
    { src: '/nepal-gov%201.png', alt: 'Nepal Gov' },
    { src: '/taan%201.png', alt: 'TAAN' },
    { src: '/keep%201.png', alt: 'Keep' },
    { src: '/himalayan-rescue-association%201.png', alt: 'Himalayan Rescue' },
  ];

  const socialLinks = [
    { src: '/facebook%201.png', alt: 'Facebook' },
    { src: '/youtube%201.png', alt: 'YouTube' },
    { src: '/instagram%201.png', alt: 'Instagram' },
    { src: '/tiktok%201.png', alt: 'TikTok' },
  ];

  return (
    <div ref={footerRef} style={{ width: FOOTER_W * scale, height: FOOTER_H * scale }} className="mx-auto">
      <footer
        className="relative overflow-hidden"
        style={{ width: FOOTER_W, height: FOOTER_H, fontFamily: "'Inter', sans-serif", transform: `scale(${scale})`, transformOrigin: 'top left' }}
      >
        {/* Backgrounds */}
        <div className="absolute h-118  inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/footer-new-bg.jpg')" }} />
        <div
          className="absolute right-0 bottom-40 w-full h-100 bg-no-repeat bg-bottom skew-x-[-10deg] translate-x-20"
          style={{ backgroundImage: "url('/trekker-graphic 1.png')" }}
        />

        {/* Logo */}
        <div className="absolute" style={{ left: 197, top: 94, width: 165, height: 65 }}>
          <img src="/Vector.png" alt="Discovery World Trekking" className="w-full h-full object-contain" />
        </div>

        {/* Newsletter */}
        <p className="absolute m-0 text-white text-[20px] leading-6 font-normal" style={{ left: 449, top: 119, width: 250 }}>
          Subsctibe our Newsletter
        </p>
        <FooterInput label="Your Name" left={449} width={145} />
        <FooterInput label="Email Address" left={605} width={173} type="email" />
        <div className="absolute bg-[#A4A4A4]" style={{ left: 742, top: 155, width: 1, height: 26 }} />
        <Send className="absolute text-white" size={18} style={{ left: 751, top: 158 }} />
        <p className="absolute m-0 text-[10px] leading-3 italic font-medium text-[#707F92]" style={{ left: 453, top: 194, width: 309 }}>
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </p>

        {/* Link Columns */}
        {linkColumns.flatMap((col) => [
          <h3 key={col.title} className="absolute m-0 font-bold text-[13px] leading-4 text-white" style={{ left: col.titleLeft, top: 297 }}>{col.title}</h3>,
          ...col.items.map((text, i) => (
            <a key={`${col.title}-${i}`} href="#" className="absolute m-0 no-underline text-white text-[10px] leading-3 font-medium hover:text-[#9FD3E8]" style={{ left: col.left, top: 323 + i * 25 }}>{text}</a>
          )),
        ])}

        {/* We Accept */}
        <span className="absolute text-[14px] leading-4.5 font-medium text-[#666]" style={{ left: 264, top: 494 }}>We Accept</span>
        <div className="absolute" style={{ left: 264, top: 525 }}>
          <img src="/online-pay.png" alt="Payment Methods" className="h-6 w-auto object-contain" />
        </div>

        {/* Associated With */}
        <span className="absolute text-[14px] leading-4.5 font-medium text-[#666]" style={{ left: 701, top: 494 }}>We are associated with</span>
        <div className="absolute flex items-center gap-3" style={{ left: 701, top: 527 }}>
          {associateLogos.map((a) => (
            <img key={a.alt} src={a.src} alt={a.alt} className="h-6 w-6 object-contain" />
          ))}
        </div>

        {/* Social Links */}
        <span className="absolute text-[14px] leading-4.5 font-medium text-[#666]" style={{ left: 1062, top: 494 }}>Connect with us</span>
        <div className="absolute flex items-center gap-4" style={{ left: 1062, top: 524 }}>
          {socialLinks.map((s) => (
            <a key={s.alt} href="#" className="hover:opacity-80 transition-opacity">
              <img src={s.src} alt={s.alt} className="h-5 w-auto object-contain" />
            </a>
          ))}
        </div>

        {/* Copyright Bar */}
        <div className="absolute left-0 top-148.25 w-full h-13.75 bg-[#3D6376] flex flex-row justify-around items-start px-60">
          <p className="flex-1 m-0 text-[14px] leading-4.5 font-medium text-white w-full">
            &copy; Discovery World Trekking Pvt. Ltd 2026
          </p>
          <p className="m-0 text-[11px] leading-3.5 italic font-medium text-white max-w-[628px] ml-[160px]">
            The copyright to all content on this website, including photographs, belongs to Discovery World Trekking Pvt. Ltd. and cannot be reproduced without our permission. &copy; Discovery World Trekking Pvt. Ltd 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
