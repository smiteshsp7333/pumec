'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const trustPoints = [
  'India Market Entry Services',
  'Cross-Border Tax Advisory',
  'Virtual CFO & Finance Transformation',
];

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[95vh] flex flex-col justify-center overflow-hidden px-6 lg:px-12 pt-32 pb-20"
      style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1F3A5F 45%, #143553 100%)' }}
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#2FA4A9]/30 via-[#1F3A5F]/10 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#F57C00]/20 blur-[100px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-start text-left w-full max-w-[1240px] mx-auto">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#F57C00]/30 bg-[#F57C00]/10 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#F57C00] animate-pulse" />
          <span className="text-[11px] font-bold tracking-[0.18em] text-[#F57C00] uppercase">
            Bangalore-Based · Globally Positioned · India Advisory
          </span>
        </motion.div>

        {/* Main Headline — per spec: "India Entry, CFO & Global Business Advisory Services for International Companies" */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[42px] md:text-[60px] lg:text-[72px] font-extrabold leading-[1.1] tracking-tight mb-8 text-white"
        >
          India Entry, CFO &amp;{' '}
          <span className="text-[#2FA4A9]">Global Business</span>
          <br />
          Advisory Services for{' '}
          <span className="text-[#F57C00]">International Companies</span>
        </motion.h1>

        {/* Sub-Headline — per spec: full firm description with SEO keywords */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-300 text-[17px] md:text-[20px] leading-relaxed max-w-[700px] mb-10 font-medium"
        >
          PUMEC Consultants Pvt. Ltd. is a Bangalore-based professional advisory firm providing{' '}
          <strong className="text-white">India Market Entry Services</strong>,{' '}
          <strong className="text-white">Cross-Border Business Advisory</strong>,{' '}
          <strong className="text-white">Virtual CFO Services</strong>,{' '}
          <strong className="text-white">Global Tax &amp; Regulatory Compliance</strong>,{' '}
          <strong className="text-white">Foreign Subsidiary Support</strong>, and{' '}
          <strong className="text-white">Strategic Corporate Consulting</strong> for international businesses operating in India.
        </motion.p>

        {/* Trust Checkmarks */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-2 mb-12"
        >
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2 text-[14px] text-gray-300 font-medium">
              <CheckCircle className="w-4 h-4 text-[#2FA4A9] shrink-0" />
              {point}
            </li>
          ))}
        </motion.ul>

        {/* CTAs — per spec: "Schedule Consultation" and "Explore India Entry Solutions" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-4 rounded-sm bg-[#F57C00] text-white font-bold text-[15px] hover:bg-[#E65100] transition-all flex items-center gap-2 shadow-lg shadow-[#F57C00]/25 hover:-translate-y-0.5"
          >
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/services/india-entry"
            className="px-8 py-4 rounded-sm border border-white/20 text-white font-bold text-[15px] hover:bg-white/10 transition-all hover:-translate-y-0.5"
          >
            Explore India Entry Solutions
          </Link>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 pt-10 border-t border-white/10 flex flex-wrap gap-10"
        >
          {[
            { value: '30+', label: 'Years of Advisory Excellence' },
            { value: '500+', label: 'International Clients Served' },
            { value: '15+', label: 'Countries Advised' },
            { value: '100%', label: 'Compliance Track Record' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-[32px] font-extrabold text-white leading-none">{stat.value}</span>
              <span className="text-[12px] text-gray-400 font-medium mt-1 uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
