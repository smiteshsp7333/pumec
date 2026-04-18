"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [heroData, setHeroData] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/global-settings`)
      .then(res => res.json())
      .then(data => setHeroData(data))
      .catch(err => console.error("Error fetching hero settings:", err));
  }, []);

  const bgImage = heroData?.hero_image_url || "/hero_highres.png";
  const title = heroData?.hero_title || "Your Partner in <br /><span class=\"text-white/60\">Strategic Excellence</span>";
  const subtitle = heroData?.hero_subtitle || "PUMEC Consultants delivers expert CA services, strategic tax advisory, and full-spectrum business consulting — built on three decades of trust, precision, and deep regulatory expertise.";
  const btnText = heroData?.hero_button_text || "Get Consultation";
  const btnLink = heroData?.hero_button_link || "/contact";

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#050505] text-[#f2f2f2] px-6 lg:px-12 pt-32 pb-20">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        {/* We use a regular img tag here to avoid Next.js domain/hostname issues with backend uploads, 
            and fully control the object-fit & ratio perfectly across all screens. */}
        <img 
          src={bgImage}
          alt="Consulting Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Lighter overlay to make the image much more visible, while keeping text legible */}
        <div className="absolute inset-0 bg-black/30 sm:bg-gradient-to-r sm:from-black/60 sm:via-black/20 sm:to-transparent" />
      </div>

      <div className="absolute top-[-10%] left-0 w-[800px] h-[500px] opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(5,5,5,0) 70%)" }} />

      <div className="relative z-10 flex flex-col items-start text-left max-w-3xl w-full container-custom mr-auto">
        
        {/* Top Pill Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-white/80" />
            <span className="text-sm font-medium tracking-wide text-white/90">Strategy & Innovation</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-[84px] font-medium leading-[1.05] tracking-tight mb-8"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-light"
        >
          {subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Link
            href={btnLink}
            className="px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:scale-105 transition-transform duration-300"
          >
            {btnText}
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/5 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Explore Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
