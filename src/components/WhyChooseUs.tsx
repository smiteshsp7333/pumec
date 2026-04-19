'use client';

import { motion } from 'framer-motion';
import { Star, Globe, Zap, Users } from 'lucide-react';

const advantages = [
  {
    id: 'comprehensive',
    icon: <Star className="w-6 h-6 text-[#2FA4A9]" strokeWidth={2} />,
    title: 'Comprehensive|Expertise',
    description: 'Full-service business consulting firm in India delivering tailored solutions.',
  },
  {
    id: 'global',
    icon: <Globe className="w-6 h-6 text-[#2FA4A9]" strokeWidth={2} />,
    title: 'Global|Perspective',
    description: 'Strong experience in structuring cross-border advisory and international tax.',
  },
  {
    id: 'execution',
    icon: <Zap className="w-6 h-6 text-[#2FA4A9]" strokeWidth={2} />,
    title: 'Execution|Excellence',
    description: 'Strategy-first approach coupled with precise on-ground implementation.',
  },
  {
    id: 'client',
    icon: <Users className="w-6 h-6 text-[#2FA4A9]" strokeWidth={2} />,
    title: 'Client-Centric|Focus',
    description: 'Bespoke advisory tightly aligned with your specific business goals.',
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white relative block w-full">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1300px] relative z-10 w-full">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#2FA4A9] font-bold tracking-[0.10em] uppercase text-[12px] mb-3"
          >
            THE PUMEC ADVANTAGE
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[36px] md:text-[40px] font-heading font-extrabold text-[#1F3A5F] leading-tight tracking-tight"
          >
            Why Choose PUMEC
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-14 h-[2px] bg-[#2FA4A9] mx-auto mt-6"
          />
        </div>

        {/* Cards Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-[1100px] mx-auto">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className="group relative flex flex-col bg-white border border-gray-100 pt-10 px-8 pb-12 rounded-[4px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] h-full cursor-pointer"
            >
              
              {/* Icon */}
              <div className="w-14 h-14 bg-[#F0FBFC] rounded-full flex items-center justify-center mb-8 border border-[#2FA4A9]/10">
                {adv.icon}
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-heading font-bold text-[#1F3A5F] mb-4 leading-[1.3]">
                {adv.title.split('|').map((chunk, idx) => (
                  <span key={idx} className="block">{chunk}</span>
                ))}
              </h3>
              
              {/* Description */}
              <p className="text-[14px] text-gray-500 leading-[1.8] flex-1">
                {adv.description}
              </p>
              
              {/* Orange Line on Hover */}
              <div className="w-6 h-[3px] bg-[#F57C00] mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
