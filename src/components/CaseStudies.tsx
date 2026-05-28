'use client';

import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Building } from 'lucide-react';

const studies = [
  {
    icon: <Briefcase className="w-8 h-8 text-[#2FA4A9]" />,
    title: 'Market Entry for Global Tech Firm',
    desc: 'Enabled a US-based SaaS company to establish operations in India, handling all regulatory, tax, and compliance matters for a seamless launch.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#F57C00]" />,
    title: 'Cross-Border M&A Success',
    desc: 'Advised on a $50M cross-border acquisition, optimizing tax structure and ensuring full FEMA and RBI compliance.'
  },
  {
    icon: <Building className="w-8 h-8 text-[#6C63FF]" />,
    title: 'Transfer Pricing Optimization',
    desc: 'Helped a European manufacturing group reduce transfer pricing risk and achieve significant tax savings through robust documentation and strategy.'
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-white relative w-full">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1200px] relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F57C00] font-bold tracking-[0.10em] uppercase text-[12px] mb-3"
          >
            CASE STUDIES
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-[38px] font-heading font-extrabold text-[#1F3A5F] leading-tight tracking-tight"
          >
            Real Results for Global Clients
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-14 h-[2px] bg-[#F57C00] mx-auto mt-6"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">{study.icon}</div>
              <h3 className="text-lg font-bold text-[#1F3A5F] mb-3">{study.title}</h3>
              <p className="text-gray-600 text-[15px]">{study.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
