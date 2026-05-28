'use client';

import { motion } from 'framer-motion';
import {
  Globe, Users, ArrowRightLeft, Cpu, TrendingUp, ShieldCheck,
  Building2, Layers, Handshake
} from 'lucide-react';

// ── "Why Global Companies Choose PUMEC" — per spec ──────────────────────────
const trustPoints = [
  {
    id: 'india-entry',
    icon: Globe,
    title: 'India Entry & Expansion Expertise',
    desc: 'Deep, hands-on experience structuring market entry for multinationals across sectors including technology, manufacturing, FinTech, and healthcare.',
  },
  {
    id: 'multidisciplinary',
    icon: Users,
    title: 'Multi-Disciplinary Advisory Team',
    desc: 'A unified team of tax, regulatory, finance, and legal specialists working as a single strategic partner — not siloed consultants.',
  },
  {
    id: 'cross-border',
    icon: ArrowRightLeft,
    title: 'Cross-Border Compliance Capability',
    desc: 'Comprehensive understanding of FEMA, RBI, DTAA treaties, and OECD frameworks ensures zero-defect cross-border compliance.',
  },
  {
    id: 'cfo',
    icon: TrendingUp,
    title: 'CFO & Finance Transformation Expertise',
    desc: 'From Virtual CFO services to full finance function outsourcing, we help international subsidiaries build scalable, audit-ready finance operations.',
  },
  {
    id: 'technology',
    icon: Cpu,
    title: 'Technology-Driven Delivery Processes',
    desc: 'Our technology-enabled workflows, real-time compliance monitoring, and digital reporting frameworks reduce errors and turnaround times significantly.',
  },
  {
    id: 'regulatory',
    icon: ShieldCheck,
    title: 'Strong Regulatory & Tax Knowledge',
    desc: 'Decades of experience navigating India\'s complex regulatory landscape including GST, transfer pricing, corporate law, and foreign exchange.',
  },
  {
    id: 'operational',
    icon: Building2,
    title: 'India Operational Support',
    desc: 'End-to-end operational support including company incorporation, banking setup, payroll, HR compliance, and back-office operations.',
  },
  {
    id: 'outsourcing',
    icon: Layers,
    title: 'Scalable Outsourcing Framework',
    desc: 'A modular, technology-backed outsourcing model that scales with your growth — from startup operations to large shared service centres.',
  },
  {
    id: 'partner',
    icon: Handshake,
    title: 'Strategic Partner-Led Engagement Model',
    desc: 'Senior partner-led engagement on every mandate. No hand-offs to junior teams — our partners are personally accountable for outcomes.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white relative block w-full">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1300px] relative z-10 w-full">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#2FA4A9] font-bold tracking-[0.12em] uppercase text-[12px] mb-3"
          >
            THE PUMEC ADVANTAGE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[36px] md:text-[42px] font-heading font-extrabold text-[#1F3A5F] leading-tight tracking-tight"
          >
            Why Global Companies Choose PUMEC
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-[16px] mt-5 max-w-2xl mx-auto leading-relaxed"
          >
            International businesses trust PUMEC for our specialized India advisory expertise, partner-led model, and commitment to regulatory excellence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-14 h-[2px] bg-[#2FA4A9] mx-auto mt-6"
          />
        </div>

        {/* 3-column grid of trust points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {trustPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group relative flex flex-col bg-white border border-gray-100 pt-8 px-8 pb-10 rounded-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_50px_rgba(0,0,0,0.07)] cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[#F0FBFC] rounded-full flex items-center justify-center mb-6 border border-[#2FA4A9]/15 group-hover:bg-[#1F3A5F] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#2FA4A9] group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-heading font-bold text-[#1F3A5F] mb-3 leading-[1.3] group-hover:text-[#2FA4A9] transition-colors">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-gray-500 leading-[1.8] flex-1">
                  {point.desc}
                </p>

                {/* Orange accent line on hover */}
                <div className="w-6 h-[3px] bg-[#F57C00] mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Trust numbers strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-[#1F3A5F] rounded-sm p-10 lg:p-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: '30+', label: 'Years of Excellence' },
            { value: '500+', label: 'Global Clients' },
            { value: '15+', label: 'Countries Served' },
            { value: '100%', label: 'Compliance Success Rate' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-[36px] font-extrabold text-white leading-none">{stat.value}</span>
              <span className="text-[12px] text-[#2FA4A9] font-bold mt-2 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
