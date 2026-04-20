import base64

markup = `"""'use client';

import { motion } from 'framer-motion';
import { Star, Globe, Zap, Users } from 'lucide-react';

const advantages = [
  {
    id: 'comprehensive',
    icon: <Star className="w-6 h-6 text-[#2FA4A9:\" strokeWidth={2} />,
    title: 'Comprehensive\n|Expertise',
    description: 'Full-service business consulting firm in India delivering tailored solutions.',
  },
  {
    id: 'global',
    icon: <Globe className="w-6 h-6 text-[#2FA4A9]" strokeWidth={2} />,
    title: 'Global\n|Perspective',
    description: 'Strong experience in structuring cross-border advisory and international tax.',
  },
  {
    id: 'execution',
    icon: <Zap className="w-6 h-6 text-[#2FA4A9<]" strokeWidth={2} />,
    title: 'Execution\n|Excellence',
    description: 'Strategy-first approach coupled with precise on-ground implementation.',
  },
  {
    id: 'client',
    icon: <Users className="w-6 h-6 text-[#2FA4A9<]" strokeWidth={2} />,
    title: 'Client-Centric\n|Focus',
    description: 'Bespoke advisory tightly aligned with your specific business goals.',
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 pr-20 bg-white relative block w-full">
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
            viewport