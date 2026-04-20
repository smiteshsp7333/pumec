'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden px-6 lg:px-12 pt-32 pb-20"
      style={{ background: 'linear-gradient(135deg, #143553 0%, #20456B 40%, #0B2136 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.18, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#2FA4A9]/40 via-[#F57C00]/30 to-[#6C63FF]/30 blur-3xl"
        />
      </div>
      <div className="relative z-10 flex flex-col items-start text-left w-full max-w-[1240px] mx-auto">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#F57C00]" />
          <span className="text-[11px] font-bold tracking-[0.15em] text-white/70 uppercase opacity-90">
            India Business Consulting Services
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[44px] md:text-[62px] lg:text-[74px] font-extrabold leading-[1.12] tracking-tight mb-8 text-white drop-shadow-lg"
        >
          Empowering Global Ambitions.<br />
          <span className="text-[#F57C00]">PUMEC</span> is Your Trusted<br />
          Partner for <span className="text-[#2FA4A9]">Business Success</span> in India
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-300 text-[18px] md:text-[22px] leading-relaxed max-w-[650px] mb-12 font-medium opacity-90"
        >
          End-to-end advisory in Tax, FEMA, Transfer Pricing, and
          <br className="hidden md:block" />
          Corporate Strategy, architected for multinational growth
          <br className="hidden md:block" />
          and compliance. Experience seamless market entry, regulatory clarity, and sustainable expansion.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <Link
            href="/contact"
            className="px-8 py-4 rounded-sm bg-[#F57C00] text-white font-bold text-[15px] hover:bg-[#e66c00] transition-colors flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-[#F57C00]/20"
          >
            Schedule a Consultation <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 rounded-sm border border-white/20 text-white font-bold text-[15px] hover:bg-white/10 transition-colors w-full sm:w-auto justify-center text-center"
          >
            Explore Our Expertise
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
