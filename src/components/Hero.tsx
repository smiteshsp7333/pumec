"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full flex items-center overflow-hidden bg-black"
    >
      {/* BACKGROUND SCENE: High-Quality 4K Image */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="/hero_highres.png"
          alt="Corporate Consulting Team"
          fill
          priority
          className="object-cover object-center"
          quality={100}
          style={{
            filter: "contrast(105%) brightness(95%)",
          }}
        />
        
        {/* EXACT GRADIENT OVERLAY (Left to Right ONLY) */}
        {/* Left: 80% -> Middle: 35% -> Right: 0% */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{
            background: "linear-gradient(to right, rgba(11, 31, 58, 0.8) 0%, rgba(11, 31, 58, 0.35) 50%, rgba(11, 31, 58, 0) 100%)"
          }}
        />
      </motion.div>

      {/* FOREGROUND CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-20">
        <div className="max-w-2xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="text-white/90 font-bold tracking-[0.2em] uppercase text-[12px] drop-shadow-md">
              CHARTERED ACCOUNTANTS &amp; CONSULTANTS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.05] tracking-tight text-white mb-6 drop-shadow-xl"
          >
            Your Trusted
            <br />
            Financial &amp;
            <br />
            <span className="text-[#60A5FA] font-black drop-shadow-[0_0_15px_rgba(96,165,250,0.2)]">
              Compliance
            </span> Partner.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-medium drop-shadow-lg"
          >
            PUMEC Consultants delivers expert CA services, strategic tax advisory, and full-spectrum business consulting — built on three decades of trust, precision, and deep regulatory expertise.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link 
              href="/contact" 
              className="bg-white text-[#0B1F3A] font-bold text-[13px] uppercase tracking-widest px-10 py-5 rounded-sm shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:bg-[#EAB308] hover:text-[#0B1F3A] transition-colors duration-300 flex items-center justify-center gap-2 group"
            >
              Get Consultation
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white/80 text-white font-bold text-[13px] uppercase tracking-widest px-10 py-5 rounded-sm hover:bg-white hover:text-[#0B1F3A] transition-colors duration-300 flex items-center justify-center drop-shadow-md"
            >
              Explore Services
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
