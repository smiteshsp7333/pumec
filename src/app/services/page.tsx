'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Calculator, 
  Globe2, 
  Briefcase, 
  TrendingUp, 
  Building,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import CTA from '../../components/CTA';

const servicesData = [
  {
    title: "India Entry & Investment Advisory",
    slug: "india-entry",
    icon: Globe2,
    desc: "End-to-end advisory for foreign companies establishing a presence in India, from market entry strategy to entity incorporation and post-setup compliance.",
    details: ["Market Entry Strategy", "Entity Incorporation", "Joint Ventures", "Regulatory Approvals"],
  },
  {
    title: "International Tax & Structuring",
    slug: "international-tax",
    icon: Calculator,
    desc: "Strategic tax planning and structuring for cross-border transactions, ensuring compliance with global tax treaties and optimizing tax outflows.",
    details: ["Cross-Border Tax Planning", "DTAA Advisory", "Expatriate Taxation", "15CA/15CB Certificates"],
  },
  {
    title: "Transfer Pricing Advisory",
    slug: "transfer-pricing",
    icon: TrendingUp,
    desc: "Comprehensive transfer pricing solutions including planning, documentation, benchmark studies, and representation before tax authorities.",
    details: ["TP Documentation (Master/Local)", "Benchmarking Analysis", "Advance Pricing Agreements", "TP Assessment & Litigation"],
  },
  {
    title: "FEMA & Regulatory Advisory",
    slug: "fema-advisory",
    icon: ShieldCheck,
    desc: "Navigating the complex landscape of the Foreign Exchange Management Act (FEMA) for inbound and outbound investments, ECB, and trade transactions.",
    details: ["FDI Compliance", "Overseas Direct Investment", "External Commercial Borrowings", "RBI Filings & Compounding"],
  },
  {
    title: "Transaction Advisory (M&A)",
    slug: "transaction-advisory",
    icon: Briefcase,
    desc: "Strategic guidance for mergers, acquisitions, and restructuring, providing tax due diligence and valuation services to maximize deal value.",
    details: ["Tax Due Diligence", "M&A Tax Structuring", "Business Valuation", "Post-Deal Integration"],
  },
  {
    title: "Corporate Law & Compliance",
    slug: "corporate-law",
    icon: Building,
    desc: "Comprehensive corporate secretarial support ensuring your business stays strictly compliant with the Companies Act and relevant corporate laws.",
    details: ["ROC Flings & Compliance", "Secretarial Audits", "Board Meetings Management", "Corporate Restructuring"],
  },
];

export default function ServicesPage() {
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
              OUR EXPERTISE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-8 leading-[1.1]">
              Tailored Solutions <br /> <span className="text-[#2FA4A9]">For Complex Needs</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-[19px] leading-relaxed mb-0 max-w-2xl font-medium">
              From startup compliance to multinational tax strategy — we provide the rigorous architecture your business needs to excel in the Indian market.
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

      {/* Services Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={service.slug}
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
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-1">
                      {service.desc}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[14px] text-gray-600 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-[#F57C00] shrink-0" />
                          <span className="mt-[2px]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-6 border-t border-gray-100 mt-auto">
                      <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-[#1c3359] text-[13px] font-bold tracking-wider hover:text-[#F57C00] transition-colors bg-transparent">
                        DEEP DIVE
                        <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform text-[#F57C00]" />
                      </Link>
                    </div>
                  </div>

                  {/* Bottom animated border line */}
                  <div className="absolute bottom-0 left-0 w-full h-[4px] bg-transparent group-hover:bg-[#F57C00] transition-colors duration-300"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 relative z-10">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 shadow-xl rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center"
            >
              {/* Background circular pattern */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#2FA4A9]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57C00]/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-[#1c3359] mb-8 relative z-10 leading-[1.2] tracking-tight">
                Looking for a Comprehensive <br /> <span className="text-[#2FA4A9]">Retainership Partner?</span>
              </h2>
              <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto relative z-10 font-medium">
                Join dozens of Indian and multinational firms who trust PUMEC for end-to-end accounting, payroll, and compliance outsourcing.
              </p>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-[#F57C00] text-white font-bold text-[14px] tracking-wider uppercase py-4 px-10 rounded-sm hover:bg-[#E65100] hover:shadow-lg hover:-translate-y-1 transition-all relative z-10"
              >
                Get a Retainership Quote
                <ChevronRight size={20} />
              </Link>
            </motion.div>
         </div>
      </section>

    </main>
  );
}