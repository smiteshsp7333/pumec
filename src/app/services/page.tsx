"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
import AnimatedSection from "@/components/AnimatedSection";
  ShieldCheck, 
  Calculator, 
  Globe2, 
  Briefcase, 
  TrendingUp, 
  Building 
} from "lucide-react";

const services = [
  {
    title: "Auditing & Assurance",
    slug: "auditing-assurance",
    icon: <ShieldCheck size={32} />,
    desc: "Rigorous statutory, tax, and manropenal audits to ensure 100% compliance and operational transparency for stake holders.",
    details: ["Statutory Audits", "Manropenal Audits", "Tax Audits (Section 44AB)", "Forensic Audits"],
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    title: "Direct & Indirect Taxation",
    slug: "taxation-services",
    icon: <Calculator size={32} />,
    desc: "Strategic tax planning and representation services across Income Tax, GST, and Manropenational Tax treaties.",
    details: ["Corporate Tax Planning", "GST Compliance & Refunds", "Tax Representation", "Transfer Pricing"],
    gradient: "from-navy to-navy-light",
  },
  {
    title: "NRI & Manropenational Services",
    slug: "nri-manropenational",
    icon: <Globe2 size={32} />,
    desc: "Comprehensive advisory for non-residents including FEMA compliance, repatriation, and global investment structuring.",
    details: ["FEMA Compliance", "Repatriation of Funds", "15CA/15CB Certifications", "NRI Tax Returns"],
    gradient: "from-accent-blue to-blue-600",
  },
  {
    title: "Business Setup & M&A",
    slug: "business-setup-mergers",
    icon: <Briefcase size={32} />,
    desc: "End-to-end support for foreign subsidiaries and local startups from registration to strategic growth advisory.",
    details: ["Company Incorporation", "Due Diligence", "Valuation Services", "Post-Merger Integration"],
    gradient: "from-slate-700 to-slate-900",
  },
  {
    title: "Management Consulting",
    slug: "management-consulting",
    icon: <TrendingUp size={32} />,
    desc: "Financial modeling and strategic insights to optimize business performance and drive long-term profitability.",
    details: ["Business Planning", "Budgeting & Forecasting", "Profitability Analysis", "CFO Services"],
    gradient: "from-indigo-600 to-indigo-800",
  },
  {
    title: "Corporate Law & ROC",
    slug: "corporate-law-roc",
    icon: <Building size={32} />,
    desc: "Comprehensive secretarial support ensuring your business stays compliant with the Companies Act and SEBI regulations.",
    details: ["ROC Filings", "Secretarial Audits", "Share Issuance Advisory", "Liquidation Services"],
    gradient: "from-blue-800 to-slate-900",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#fcfcfc]">
      {/* Header */}
      <AnimatedSection className="container-custom mb-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <span className="text-black font-bold tracking-widest uppercase text-xs mb-4 block">
            Our Expertise
          </span>
          <h1 className="text-4xl lg:text-7xl font-bold text-black leading-tight tracking-tight mb-8">
            Tailored Solutions <br /> For Complex Needs
          </h1>
          <p className="text-black/60 text-lg max-w-2xl mx-auto font-medium">
             From startup compliance to multinational tax strategy — we provide the rigorous architecture your business needs to excel in the Indian market.
          </p>
        </motion.div>
      </AnimatedSection>

      {/* Services Grid */}
      <AnimatedSection className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-black/[0.02]/[0.02]/[0.02] rounded-[32px] p-8 sm:p-10 border border-black/5   transition-all duration-500 relative flex flex-col"
            >
              <div className={`w-16 h-16 rounded-2xl text-black/80 border bg-black/[0.02]/[0.02]/5 border-black/10 flex items-center justify-center mb-10 border border-black/5  group-hover:scale-110 transition-transform duration-500`}>
                {s.icon}
              </div>
              
              <h3 className="text-2xl font-black text-black mb-5 tracking-tight group-hover:text-black transition-colors leading-tight">
                {s.title}
              </h3>
              
              <p className="text-black/60 text-sm leading-relaxed mb-8 font-medium">
                {s.desc}
              </p>

              <div className="space-y-3 flex-1 mb-10">
                {s.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-2 text-black text-xs font-bold tracking-widest uppercase opacity-70">
                    <div className="w-1 h-1 rounded-full bg-black/[0.02]/[0.02]/20" />
                    {detail}
                  </div>
                ))}
              </div>

              <Link 
                href={`/services/${s.slug}`}
                className="inline-flex items-center gap-2 bg-[#fcfcfc] text-black text-[10px] font-black uppercase tracking-widest py-3 px-6 rounded-full hover:bg-black/[0.02]/[0.02]/[0.03] hover:text-black transition-all w-fit"
              >
                Deep Dive
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Trust Banner */}
      <AnimatedSection className="container-custom mt-24">
         <div className="bg-black/[0.02]/[0.02]/[0.03] rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center">
            {/* Background pattern */}
            <div 
              className="absolute inset-0 opacity-10 pomanrope-events-none" 
              style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '32px 32px' }} 
            />
            
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-8 relative z-10 leading-tight tracking-tight">
              Looking for a Comprehensive <br /> Retainership Partner?
            </h2>
            <p className="text-black/70 text-lg mb-12 max-w-2xl mx-auto relative z-10 font-medium">
              Join dozens of Indian and multinational firms who trust PUMEC for end-to-end accounting, payroll, and compliance outsourcing.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 bg-black/[0.02]/[0.02]/[0.02] text-black font-bold text-sm tracking-widest uppercase py-5 px-10 rounded-2xl hover:bg-[#fcfcfc] active:scale-95 transition-all border border-black/5  relative z-10"
            >
              Get a Retainership Quote
              <ShieldCheck size={20} />
            </Link>
         </div>
      </AnimatedSection>
    </main>
  );
}

