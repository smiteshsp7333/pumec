'use client';

import { motion } from 'framer-motion';
import { Monitor, Landmark, Factory, HeartPulse, ShoppingCart } from 'lucide-react';

const industries = [
  {
    id: 'tech',
    icon: <Monitor className="w-8 h-8 text-[#2FA4A9] mb-4" strokeWidth={1.5} />,
    title: 'Technology & IT Services'
  },
  {
    id: 'finance',
    icon: <Landmark className="w-8 h-8 text-[#2FA4A9] mb-4" strokeWidth={1.5} />,
    title: 'Financial Services & Fintech'
  },
  {
    id: 'manufacturing',
    icon: <Factory className="w-8 h-8 text-[#2FA4A9] mb-4" strokeWidth={1.5} />,
    title: 'Manufacturing & Industrial'
  },
  {
    id: 'healthcare',
    icon: <HeartPulse className="w-8 h-8 text-[#2FA4A9] mb-4" strokeWidth={1.5} />,
    title: 'Healthcare & Pharma'
  },
  {
    id: 'ecommerce',
    icon: <ShoppingCart className="w-8 h-8 text-[#2FA4A9] mb-4" strokeWidth={1.5} />,
    title: 'E-commerce & Retail'
  }
];

export default function Industries() {
  return (
    <section className="py-24 bg-[#0a1628] relative w-full overflow-hidden">
      {/* Background dark overlay to ensure deep blue matches exactly */}
      <div className="absolute inset-0 bg-[#0a1628] z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-12 max-w-[1300px] relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-8">
          {/* Titles */}
          <div className="flex-1">
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#F57C00] font-bold tracking-[0.10em] uppercase text-[12px] mb-3"
            >
              SECTOR SPECIALIZATION
            </motion.h4>
            <div className="flex items-center gap-6">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[36px] md:text-[42px] font-heading font-extrabold text-white leading-tight tracking-tight"
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
          
          {/* Vertical divider line for large screens */}
          <div className="hidden lg:block w-px h-16 bg-white/10 mx-4"></div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex-1 lg:max-w-[400px]"
          >
            <p className="text-[#8e9caf] text-[14px] leading-[1.8] font-medium">
              Providing highly specialized consulting in India across distinct, fast-growing global industries.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid (5 Columns) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0 w-full">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col items-center justify-center text-center px-4 py-8 min-h-[240px] bg-transparent border-[1px] border-white/[0.04] hover:bg-[#152744] hover:border-[#1c3359] transition-all duration-300 relative cursor-pointer"
            >
              <div className="flex flex-col items-center">
                {ind.icon}
                <span className="text-white text-[13.5px] font-medium leading-snug max-w-[150px]">
                  {ind.title}
                </span>
              </div>
              
              {/* Bottom Orange Border on Hover */}
              <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#F57C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
