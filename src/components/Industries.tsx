'use client';

import { motion } from 'framer-motion';
import {
  Monitor, Landmark, Factory, HeartPulse, ShoppingCart,
  Cpu, Zap, Building2, Plane, Leaf, Truck, Rocket
} from 'lucide-react';

// ── ALL 12 INDUSTRIES per spec ───────────────────────────────────────────────
const industries = [
  { id: 'tech',         icon: Monitor,   title: 'Technology & SaaS' },
  { id: 'ites',         icon: Cpu,       title: 'IT / ITES & Global Capability Centers' },
  { id: 'manufacturing',icon: Factory,   title: 'Manufacturing & Industrial' },
  { id: 'engineering',  icon: Plane,     title: 'Engineering & Automotive' },
  { id: 'energy',       icon: Leaf,      title: 'Renewable Energy' },
  { id: 'realestate',   icon: Building2, title: 'Real Estate & Infrastructure' },
  { id: 'ecommerce',    icon: ShoppingCart, title: 'E-Commerce & Digital Businesses' },
  { id: 'healthcare',   icon: HeartPulse, title: 'Healthcare & Life Sciences' },
  { id: 'finance',      icon: Landmark,  title: 'Financial Services & FinTech' },
  { id: 'logistics',    icon: Truck,     title: 'Logistics & Supply Chain' },
  { id: 'retail',       icon: Zap,       title: 'Retail & Consumer Business' },
  { id: 'startups',     icon: Rocket,    title: 'Startups & Venture-Backed Companies' },
];

export default function Industries() {
  return (
    <section className="py-24 bg-[#0a1628] relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-[#0a1628] z-0" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1300px] relative z-10">

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-8">
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#F57C00] font-bold tracking-[0.12em] uppercase text-[12px] mb-3"
            >
              SECTOR SPECIALIZATION
            </motion.p>
            <div className="flex items-center gap-6">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[36px] md:text-[44px] font-heading font-extrabold text-white leading-tight tracking-tight"
              >
                Industries We Serve
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="hidden md:block w-16 h-[2px] bg-[#2FA4A9] mt-2 origin-left"
              />
            </div>
          </div>

          <div className="hidden lg:block w-px h-16 bg-white/10 mx-4" />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex-1 lg:max-w-[440px]"
          >
            <p className="text-[#8e9caf] text-[15px] leading-[1.8] font-medium">
              Providing highly specialized cross-border advisory, tax, and compliance consulting for fast-growing global industries operating in India.
            </p>
          </motion.div>
        </div>

        {/* 12-column grid — 4 cols on desktop, 3 on tablet, 2 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 w-full border border-white/[0.06] rounded-sm overflow-hidden">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex flex-col items-center justify-center text-center px-6 py-10 min-h-[180px] bg-transparent border border-white/[0.05] hover:bg-[#152744] hover:border-[#1c3359] transition-all duration-300 relative cursor-pointer"
              >
                <Icon className="w-8 h-8 text-[#2FA4A9] mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <span className="text-white text-[13px] font-medium leading-snug max-w-[140px]">
                  {ind.title}
                </span>
                {/* Bottom orange border on hover */}
                <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#F57C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#4a607a] text-[13px] mt-10 font-medium"
        >
          Don&apos;t see your industry? Our advisory framework adapts to any cross-border business complexity.{' '}
          <a href="/contact" className="text-[#2FA4A9] hover:underline">Talk to our team →</a>
        </motion.p>
      </div>
    </section>
  );
}
