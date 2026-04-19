'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-24 bg-[#162945] overflow-hidden flex items-center justify-center min-h-[600px]">
      {/* Background Overlay to simulate the dark blue image feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#182c4a]/90 to-[#0c1a2e]/95 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Ready to scale subtitle */}
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#F57C00] text-[11px] font-bold tracking-[0.2em] uppercase mb-6 block"
        >
          READY TO SCALE?
        </motion.span>
        
        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white mb-6 leading-[1.1]"
        >
          Looking for expert business<br className="hidden md:block"/> consulting services in India?
        </motion.h2>
        
        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-[17px] md:text-[18px] mb-10 max-w-3xl leading-relaxed"
        >
          Partner with PUMEC Consultants Pvt Ltd for reliable tax advisory, FEMA<br className="hidden md:block"/> compliance, transfer pricing, and corporate advisory services in India.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/contact" className="bg-[#F57C00] hover:bg-[#E65100] text-white font-bold py-4 px-8 rounded-sm transition-colors duration-300 flex items-center gap-2 group text-[13px] tracking-wider uppercase">
            SCHEDULE A CONSULTATION TODAY
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Bottom separator and text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-xl mt-16"
        >
          <div className="h-px bg-white/10 w-full mb-8"></div>
          <span className="text-[#2FA4A9] text-[11px] font-bold tracking-[0.2em] uppercase">
            ACCELERATE YOUR INDIA GROWTH JOURNEY
          </span>
        </motion.div>
      </div>
    </section>
  );
}
