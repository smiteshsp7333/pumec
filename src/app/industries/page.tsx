'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, MonitorSmartphone, Factory, HeartPulse, ShoppingCart, Truck, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import CTA from '../../components/CTA';

const industriesData = [
  {
    id: 1,
    name: 'Financial Services & Fintech',
    icon: Landmark,
    description: 'Navigating complex RBI regulations, FEMA compliance, and cross-border structuring for banks, NBFCs, and emerging fintech startups.',
    highlights: ['Regulatory Licensing', 'FDI Structuring', 'Risk Management'],
  },
  {
    id: 2,
    name: 'Technology & IT Services',
    icon: MonitorSmartphone,
    description: 'Strategic tax planning, transfer pricing, and SEZ/STPI compliance to help tech companies optimize their global service delivery models.',
    highlights: ['Transfer Pricing', 'Intellectual Property Structuring', 'SEZ Compliance'],
  },
  {
    id: 3,
    name: 'Manufacturing & Industrial',
    icon: Factory,
    description: 'Optimizing supply chains, navigating GST compliances, and structuring India-entry strategies for heavy industries and manufacturing units.',
    highlights: ['Supply Chain Optimization', 'GST Advisory', 'India Entry Strategy'],
  },
  {
    id: 4,
    name: 'Healthcare & Pharma',
    icon: HeartPulse,
    description: 'Advisory on complex FDI norms, pricing regulations, and cross-border M&A in the highly regulated healthcare and pharmaceutical sectors.',
    highlights: ['FDI Regulations', 'M&A Structuring', 'Pricing Compliance'],
  },
  {
    id: 5,
    name: 'E-commerce & Retail',
    icon: ShoppingCart,
    description: 'Handling precise tax implications, consumer protection laws, and structuring multi-brand vs single-brand retail foreign investments.',
    highlights: ['E-commerce Taxation', 'Consumer Protection', 'Retail FDI Rules'],
  },
  {
    id: 6,
    name: 'Logistics & Infrastructure',
    icon: Truck,
    description: 'Structuring joint ventures, ensuring smooth tax compliances across state borders, and optimizing funding frameworks for infra projects.',
    highlights: ['Joint Ventures', 'Funding Frameworks', 'Multi-state Taxation'],
  }
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-[#1c3359] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 to-[#1c3359]/90 z-0"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2FA4A9]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <span className="text-[#F57C00] text-[12px] font-bold tracking-[0.2em] uppercase mb-6 block">
              SECTOR SPECIALIZATION
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-8 leading-[1.1]">
              Industries We <span className="text-[#2FA4A9]">Serve</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-[19px] leading-relaxed mb-0 max-w-2xl">
              We provide tailored business consulting, tax advisory, and compliance strategies adapted to the unique regulatory and operational challenges of each industry.
            </p>
          </motion.div>
        </div>
        
        {/* Slanted Bottom Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] fill-[#FAFAFA]">
            <path d="M1200 120L0 120 0 0 1200 120z"></path>
          </svg>
        </div>
      </section>

      {/* Main Industries Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div 
                  key={ind.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-[24px] border border-gray-100 p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden flex flex-col"
                >
                  <div className="absolute top-0 right-0 -mr-20 -mt-20 w-48 h-48 bg-[#2FA4A9]/5 rounded-full blur-3xl group-hover:bg-[#2FA4A9]/10 transition-colors duration-500"></div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-[#1c3359] transition-colors duration-300 shadow-sm relative z-10">
                    <Icon strokeWidth={1.5} className="w-8 h-8 text-[#1c3359] group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-[#1c3359] mb-4 leading-[1.3] group-hover:text-[#2FA4A9] transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-1">
                      {ind.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {ind.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[14px] text-gray-600 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-[#F57C00] shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-6 border-t border-gray-100 mt-auto">
                      <Link href="#" className="inline-flex items-center gap-2 text-[#1c3359] text-[13px] font-bold tracking-wider hover:text-[#F57C00] transition-colors bg-transparent">
                        EXPLORE SERVICES
                        <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform text-[#F57C00]" />
                      </Link>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-[4px] bg-transparent group-hover:bg-[#F57C00] transition-colors duration-300"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global CTA Integration */}
      <CTA />
    </main>
  );
}