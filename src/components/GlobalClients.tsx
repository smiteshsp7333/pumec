'use client';

import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';

const countries = [
  'USA', 'UK', 'Germany', 'Singapore', 'UAE', 'Japan', 'Australia', 'Canada', 'Netherlands', 'Switzerland', 'France', 'South Africa', 'India'
];

export default function GlobalClients() {
  return (
    <section className="py-24 bg-[#F8FAFC] relative w-full">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1200px] relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#6C63FF] font-bold tracking-[0.10em] uppercase text-[12px] mb-3"
          >
            GLOBAL PRESENCE
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-[38px] font-heading font-extrabold text-[#1F3A5F] leading-tight tracking-tight"
          >
            Trusted by Clients Worldwide
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-14 h-[2px] bg-[#6C63FF] mx-auto mt-6"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {countries.map((country, i) => (
            <motion.div
              key={country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100 text-[#1F3A5F] font-semibold text-[15px]"
            >
              <Globe2 className="w-5 h-5 text-[#2FA4A9] mr-1" />
              {country}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
