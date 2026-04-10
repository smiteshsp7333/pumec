"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#050505] text-[#f2f2f2] px-6 lg:px-12 pt-32 pb-20">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero_highres.png"
          alt="Consulting Banner"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        {/* Smooth gradient fading from left to ensure text legibility, leaving the right side clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/50 to-transparent sm:w-[80%]" />
        {/* Very light overall overlay to prevent glaring bright spots behind white text */}
        <div className="absolute inset-0 bg-black/10" />
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
        >
          Your Partner in <br />
          <span className="text-white/60">Strategic Excellence</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-light"
        >
          PUMEC Consultants delivers expert CA services, strategic tax advisory, and full-spectrum business consulting — built on three decades of trust, precision, and deep regulatory expertise.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:scale-105 transition-transform duration-300"
          >
            Get Consultation
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
