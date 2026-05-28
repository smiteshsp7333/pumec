"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] bg-white overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-32 flex items-center"
    >
      {/* 1. MAIN BACKGROUND: Soft radial top-left glow + subtle tint */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.06),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-blue-50/20 pointer-events-none z-0" />

      {/* 2. GRID BACKGROUND IMPROVEMENT: Faint lines + mask fade */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #0B1F3A 1px, transparent 1px), linear-gradient(to bottom, #0B1F3A 1px, transparent 1px)`, 
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
        }} 
      />

      {/* 4. HERO SECTION DEPTH: Glow near text area / background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_70%)] rounded-full blur-[80px] pointer-events-none z-0 mix-blend-multiply" />


      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – text */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[2px] bg-accent-blue relative">
                <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-accent-blue opacity-50" />
              </div>
              <span className="text-navy font-semibold tracking-widest uppercase text-xs">
                Chartered Accountants &amp; Consultants
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-navy mb-5 relative inline-block"
            >
              Your Trusted
              <br />
              Financial &amp;
              <br />
              <span className="text-accent-blue relative">
                Compliance
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent-blue/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span> Partner.
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-text-muted text-lg leading-relaxed max-w-xl mb-8 font-medium"
            >
              PUMEC Consultants delivers expert CA services, strategic tax
              advisory, and full-spectrum business consulting — built on three
              decades of trust, precision, and deep regulatory expertise.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact" className="btn-primary text-base px-8 py-4 shadow-lg shadow-navy/10">
                Get Consultation
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/services" className="btn-secondary text-base px-8 py-4 bg-white/50 backdrop-blur-sm">
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Right – abstract minimalist visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:flex justify-end relative pl-10"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/3] flex items-center justify-center">
              {/* Back Square (Faintest) */}
              <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-white border border-border-subtle rounded-xl shadow-sm rotate-3 origin-bottom-right transition-transform" />
              
              {/* Middle Square (Light Gray) */}
              <div className="absolute top-4 right-4 w-[85%] h-[85%] bg-[#F8FAFC] border border-border-subtle rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] rotate-1 origin-bottom-right transition-transform" />
              
              {/* Front Navy Square with Gradient */}
              <div className="absolute bottom-0 left-0 w-[90%] h-[90%] bg-gradient-to-br from-[#0B1F3A] to-[#0F2A4D] rounded-xl shadow-2xl p-10 flex flex-col justify-between overflow-hidden z-10 border border-white/10">
                <div className="w-16 h-1 bg-accent-blue rounded-full mb-8 opacity-80" />
                
                <div>
                  <h3 className="text-white text-2xl font-bold tracking-wide mb-2 flex items-center justify-between">
                    PUMEC
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                    </div>
                  </h3>
                  <p className="text-white/70 text-sm font-medium mb-6 max-w-[280px]">Navigating your business towards absolute compliance and financial clarity.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  <div>
                    <div className="text-white/50 text-[10px] uppercase tracking-widest font-semibold mb-1">Established</div>
                    <div className="text-white text-xl font-bold">1988</div>
                  </div>
                  <div>
                    <div className="text-white/50 text-[10px] uppercase tracking-widest font-semibold mb-1">Clients</div>
                    <div className="text-white text-xl font-bold">2,500+</div>
                  </div>
                </div>

                {/* Decorative elements inside Navy block */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border border-white/5 rounded-full translate-y-1/4 translate-x-1/4 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
