"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ShieldCheck, Globe2, ArrowRightLeft, Briefcase, TrendingUp, Users2,
  CheckCircle2, ArrowRight
} from 'lucide-react';

// ── SERVICE DATA — restructured per spec ────────────────────────────────────
const localServices = [
  {
    id: 'india-entry',
    icon: Globe2,
    eyebrow: 'Corporate Finance & Investment',
    title: 'India Market Entry & Cross-Border Investment Advisory',
    description:
      'We assist international businesses, investors and global corporations in establishing and scaling operations in India through structured advisory and execution support.',
    bullets: [
      'India Entry Strategy & Structuring',
      'Foreign Subsidiary Incorporation & FDI Advisory',
      'Joint Venture & Strategic Alliance Structuring',
      'Regulatory Approvals & Corporate Structuring',
      'Business Expansion & Location Advisory',
    ],
    footerText: 'PUMEC acts as a strategic India partner for global enterprises entering one of the world\'s fastest-growing economies.',
    slug: 'india-entry',
  },
  {
    id: 'international-tax',
    icon: TrendingUp,
    eyebrow: 'Taxation & Regulatory Advisory',
    title: 'International Taxation, Transfer Pricing & Regulatory Advisory',
    description:
      'Our tax professionals provide cross-border tax advisory, international taxation, and India regulatory compliance services for multinational companies and global investors.',
    bullets: [
      'International Taxation & DTAA Advisory',
      'Transfer Pricing Documentation & Benchmarking',
      'GST Advisory & Litigation Support',
      'Corporate Tax Compliance & Tax Structuring',
      'FEMA, RBI & Expatriate Taxation',
    ],
    footerText: 'We help businesses manage complex Indian tax and regulatory frameworks with strategic and commercially practical solutions.',
    slug: 'international-tax',
  },
  {
    id: 'fema-advisory',
    icon: ShieldCheck,
    eyebrow: 'Regulatory Compliance',
    title: 'FEMA & Regulatory Advisory',
    description:
      'Navigating India\'s foreign exchange regulations requires expert guidance. Our FEMA compliance and RBI advisory services ensure seamless cross-border transactions and regulatory alignment.',
    bullets: [
      'FDI & ODI Structuring & Compliance',
      'RBI Approvals, Filings & Reporting',
      'Foreign Exchange Compliance Management',
      'Non-Compliance Resolution & Compounding',
      'Regulatory Transaction Structuring',
    ],
    footerText: 'Our proactive approach ensures regulatory alignment and risk mitigation for all cross-border operations.',
    slug: 'fema-advisory',
  },
  {
    id: 'transaction-advisory',
    icon: Briefcase,
    eyebrow: 'M&A Tax & Deal Advisory',
    title: 'Transaction Advisory & India Joint Ventures, M&A Strategic Partnerships',
    description:
      'PUMEC supports international organizations in identifying, structuring and managing strategic partnerships, mergers, and business expansion opportunities in India.',
    bullets: [
      'Tax Due Diligence & Transaction Risk Analysis',
      'M&A Tax Structuring & Deal Advisory',
      'Joint Venture & Strategic Alliance Advisory',
      'Commercial Due Diligence & Partner Identification',
      'Post-Acquisition Integration Advisory',
    ],
    footerText: 'We help businesses execute transactions with clarity, confidence, and maximum deal value.',
    slug: 'transaction-advisory',
  },
  {
    id: 'cfo-advisory',
    icon: Users2,
    eyebrow: 'Finance Transformation',
    title: 'Business Transformation & Strategic CFO Advisory',
    description:
      'PUMEC provides Virtual CFO, Finance Transformation, and Strategic Business Advisory Services for foreign subsidiaries, technology companies, manufacturing businesses and scaling enterprises in India.',
    bullets: [
      'Virtual CFO & MIS / Financial Analytics',
      'Cash Flow, Working Capital & Budgeting',
      'ERP & Finance Process Advisory',
      'Business Process Transformation',
      'Board & Investor Reporting',
    ],
    footerText: 'We support organizations in building scalable, compliance-driven finance functions aligned with global standards.',
    slug: 'india-entry',
  },
  {
    id: 'outsourcing',
    icon: ArrowRightLeft,
    eyebrow: 'Finance & Compliance Outsourcing',
    title: 'Finance, Accounting & Compliance Outsourcing Solutions',
    description:
      'PUMEC offers scalable Finance & Accounting Outsourcing Services designed for international businesses establishing or expanding operations in India.',
    bullets: [
      'Accounting Outsourcing & MIS Reporting',
      'Payroll & HR Compliance',
      'Accounts Payable, Receivable & Vendor Management',
      'Month-End Closing & Compliance Management',
      'India Back Office & Shared Services Support',
    ],
    footerText: 'Our outsourcing framework combines technology-enabled workflows, process controls, and regulatory compliance management.',
    slug: 'india-entry',
  },
];

export default function ServicesClient({ servicesData }: { servicesData?: any[] }) {
  // Use local data (remote API data doesn't carry the new structure yet)
  const displayServices = localServices;

  return (
    <section id="services" className="py-20 pb-28 bg-[#F9FAFB] relative block w-full">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1300px] relative z-10 w-full">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#2FA4A9] font-bold tracking-[0.15em] uppercase text-[13px] mb-3"
          >
            OUR EXPERTISE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-[40px] font-heading font-extrabold text-[#1F3A5F] leading-[1.2] tracking-tight"
          >
            Comprehensive Global Advisory Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-[16px] mt-5 max-w-2xl mx-auto leading-relaxed"
          >
            Specialized, cross-border advisory designed for international companies entering or operating in India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-14 h-1 bg-[#F57C00] mx-auto rounded-full mt-8"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full">
          {displayServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="group flex flex-col bg-white border border-gray-200 hover:border-[#2FA4A9] rounded-sm p-8 sm:p-10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-400 relative h-full text-left"
              >
                {/* Eyebrow */}
                <p className="text-[11px] font-bold tracking-[0.15em] text-[#F57C00] uppercase mb-5">
                  {service.eyebrow}
                </p>

                {/* Icon */}
                <div className="mb-5">
                  <Icon className="w-9 h-9 text-[#1F3A5F] group-hover:text-[#2FA4A9] transition-colors" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-[21px] md:text-[23px] font-heading font-bold text-[#1F3A5F] mb-4 leading-[1.3] group-hover:text-[#2FA4A9] transition-colors duration-300 pr-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-[15px] leading-relaxed mb-7 font-sans">
                  {service.description}
                </p>

                {/* Bullets */}
                <div className="bg-[#F8FAFC] group-hover:bg-[#F0FDFE] transition-colors duration-300 rounded-sm p-6 mb-7 border border-gray-100 group-hover:border-[#2FA4A9]/20">
                  <p className="text-[13px] font-bold text-[#F57C00] mb-4 uppercase tracking-wide">Key Capabilities:</p>
                  <ul className="space-y-3">
                    {service.bullets.map((point: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-[14px] font-medium text-gray-700">
                        <CheckCircle2 className="w-[17px] h-[17px] text-[#2FA4A9] mt-[2px] shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer text */}
                <p className="text-[13.5px] text-gray-400 italic leading-relaxed mb-6 flex-1">
                  {service.footerText}
                </p>

                {/* CTA — renamed from "Read More >>" per spec */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[13.5px] font-bold text-[#1F3A5F] group-hover:text-[#F57C00] transition-colors uppercase tracking-wide mt-auto"
                >
                  Explore Service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-[#1F3A5F] hover:bg-[#0D1B2A] text-white font-bold px-10 py-4 rounded-sm text-[14px] uppercase tracking-widest transition-all hover:-translate-y-0.5 shadow-lg"
          >
            View All Advisory Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
