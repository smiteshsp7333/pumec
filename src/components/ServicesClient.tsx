
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, Globe, ArrowRightLeft, Shield, Briefcase, Scale, CheckCircle2, ArrowRight } from 'lucide-react';

const localServices = [
  {
    id: 'india-entry',
    icon: <Building2 className="w-8 h-8 text-[#F57C00] group-hover:text-[#2FA4A9] transition-colors" strokeWidth={1.5} />,
    title: 'India Market Entry & Expansion Experts',
    description: 'Expanding into India requires a clear strategy, strong regulatory understanding, and efficient execution. Our India market entry consulting services are designed to help global companies establish and scale operations seamlessly.',
    bulletTitle: 'We provide:',
    bullets: [
      'Strategic India entry strategy advisory',
      'End-to-end business setup in India',
      'Foreign investment advisory in India',
      'Regulatory and operational alignment'
    ],
    footerText: 'Our expertise ensures smooth entry and sustainable growth in the Indian market.'
  },
  {
    id: 'international-tax',
    icon: <Globe className="w-8 h-8 text-[#F57C00] group-hover:text-[#2FA4A9] transition-colors" strokeWidth={1.5} />,
    title: 'Comprehensive Tax & International Tax Advisory in India',
    description: 'Tax efficiency and compliance are critical for global businesses. Our tax advisory services in India and international tax advisory services in India help organizations manage complex tax structures and cross-border transactions.',
    bulletTitle: 'Our services include:',
    bullets: [
      'International tax planning in India',
      'Cross-border tax structuring',
      'DTAA advisory and tax optimization',
      'Corporate and indirect tax advisory'
    ],
    footerText: 'We ensure compliance while maximizing tax efficiency.'
  },
  {
    id: 'transfer-pricing',
    icon: <ArrowRightLeft className="w-8 h-8 text-[#F57C00] group-hover:text-[#2FA4A9] transition-colors" strokeWidth={1.5} />,
    title: 'Transfer Pricing Advisory & Compliance in India',
    description: 'We offer specialized transfer pricing advisory services in India, helping companies comply with regulations and optimize intercompany pricing structures in India.',
    bulletTitle: 'Our solutions include:',
    bullets: [
      'Transfer pricing documentation in India',
      'Benchmarking and FAR analysis',
      'Transfer pricing compliance and audit support',
      'OECD and BEPS-aligned advisory'
    ],
    footerText: 'We minimize risk and ensure full compliance with transfer pricing regulations in India.'
  },
  {
    id: 'fema-advisory',
    icon: <Shield className="w-8 h-8 text-[#F57C00] group-hover:text-[#2FA4A9] transition-colors" strokeWidth={1.5} />,
    title: 'FEMA & Regulatory Compliance Services in India',
    description: 'Navigating India\'s foreign exchange regulations requires expert guidance. Our FEMA compliance services in India and RBI compliance advisory ensure seamless cross-border transactions.',
    bulletTitle: 'We provide:',
    bullets: [
      'FEMA advisory services in India',
      'FDI and ODI compliance',
      'RBI approvals and filings',
      'Foreign exchange compliance in India'
    ],
    footerText: 'Our proactive approach ensures regulatory alignment and risk mitigation.'
  },
  {
    id: 'corporate-transaction',
    icon: <Briefcase className="w-8 h-8 text-[#F57C00] group-hover:text-[#2FA4A9] transition-colors" strokeWidth={1.5} />,
    title: 'Corporate & Transaction Advisory Services',
    description: 'We deliver high-impact corporate advisory services in India and transaction advisory services, supporting mergers, acquisitions, and strategic investments.',
    bulletTitle: 'Our expertise includes:',
    bullets: [
      'M&A advisory in India',
      'Due diligence services in India',
      'Transaction structuring and deal advisory',
      'Corporate restructuring and investment advisory'
    ],
    footerText: 'We help businesses execute transactions with confidence and efficiency.'
  },
  {
    id: 'litigation-dispute',
    icon: <Scale className="w-8 h-8 text-[#F57C00] group-hover:text-[#2FA4A9] transition-colors" strokeWidth={1.5} />,
    title: 'Litigation & Dispute Resolution Advisory',
    description: 'Our litigation and dispute resolution services in India provide strategic support in handling tax and regulatory disputes.',
    bulletTitle: 'We offer:',
    bullets: [
      'Tax litigation advisory in India',
      'Transfer pricing litigation support',
      'FEMA and regulatory dispute resolution',
      'Tribunal representation and appeals'
    ],
    footerText: 'We focus on minimizing risks and achieving favorable outcomes.'
  }
];

export default function ServicesClient({ servicesData }: { servicesData?: any[] }) {
  return (
    <section id="services" className="py-20 pb-28 bg-[#F9FAFB] relative block w-full">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1300px] relative z-10 w-full">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#2FA4A9] font-bold tracking-[0.15em] uppercase text-[13px] mb-3"
          >
            OUR EXPERTISE
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-[38px] font-heading font-extrabold text-[#1F3A5F] leading-[1.25] uppercase tracking-tight"
          >
            COMPREHENSIVE ADVISORY SERVICES
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-14 h-1 bg-[#F57C00] mx-auto rounded-full mt-8"
          />
        </div>

        {/* Services Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full">
          {localServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group flex flex-col bg-white border border-gray-200 hover:border-[#2FA4A9] rounded-[4px] p-8 sm:p-10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-400 relative h-full text-left"
            >
              {/* Icon Box */}
              <div className="mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-[22px] md:text-[24px] font-heading font-bold text-[#1F3A5F] mb-5 leading-[1.3] group-hover:text-[#2FA4A9] transition-colors duration-300 pr-4">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 text-[15.5px] leading-relaxed mb-8 font-sans pr-2">
                {service.description}
              </p>

              {/* Bullet Box */}
              <div className="bg-[#F8FAFC] group-hover:bg-[#F0FDFE] transition-colors duration-300 rounded-[4px] p-6 mb-8 mt-auto border border-gray-50 group-hover:border-[#2FA4A9]/20">
                <h4 className="text-[14.5px] font-bold text-[#F57C00] mb-4">
                   {service.bulletTitle}
                </h4>
                <ul className="space-y-3">
                  {service.bullets.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[14.5px] font-medium text-gray-600 leading-snug">
                      <CheckCircle2 className="w-[18px] h-[18px] text-[#F57C00] mt-[1px] shrink-0" strokeWidth={2} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Italic Text */}
              <p className="text-[14px] text-gray-500 font-medium italic leading-relaxed mb-6">
                {service.footerText}
              </p>
              
              {/* Action Link */}
              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center gap-2 text-[14.5px] font-bold text-[#1F3A5F] group-hover:text-[#F57C00] transition-colors group/btn uppercase tracking-wide mt-auto"
              >
                Read More 
                <ArrowRight className="w-4 h-4 text-[#1F3A5F] group-hover/btn:text-[#F57C00] group-hover/btn:translate-x-1 transition-all" strokeWidth={2.5} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
