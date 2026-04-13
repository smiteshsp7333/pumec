import AnimatedSection from '@/components/AnimatedSection';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: "M&A Tax Advisory & Transaction Structuring India",
  description: "Tax due diligence, deal structuring, and cross-border M&A advisory for investors and corporates.",
  keywords: "M&A tax India, transaction advisory, tax due diligence",
};

export default function TransactionAdvisoryPage() {
  return (
    <main className="flex-1 bg-white">
      <AnimatedSection className="bg-[#1F3A5F] text-white pt-24 pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#F57C00] font-bold tracking-widest uppercase text-sm mb-4 block">Transaction Advisory (M&A Tax)</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
            Tax Due Diligence & Cross-Border Structure Design
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed">
            Ensure maximum value and minimal risk through pre-deal tax diligence, optimized M&A structuring, and seamless post-transaction alignment.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-6 lg:px-12 bg-[#F4F6F8]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4">SERVICES</h2>
          <div className="w-16 h-1 bg-[#F57C00] mx-auto rounded"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {[
            'Tax due diligence', 
            'Deal structuring', 
            'Cross-border M&A advisory', 
            'Transaction risk analysis'
          ].map((service, i) => (
            <div key={i} className="flex items-center px-8 py-5 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-[#2FA4A9] transition-colors group">
              <CheckCircle2 className="text-[#2FA4A9] w-6 h-6 mr-3 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-800 text-[16px]">{service}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2FA4A9] font-bold tracking-widest uppercase text-sm mb-2 block">Frameworks</span>
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4">SOLUTIONS – HOW WE DELIVER</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              {
                title: "1. Tax Due Diligence Framework",
                desc: "Comprehensive review of: Tax exposures, Historical compliance, and Contingent liabilities.",
                outcome: "Clear visibility of tax risks before investment"
              },
              {
                title: "2. Deal Structuring Model",
                desc: "Design of: Acquisition structures, Funding mechanisms, and Exit strategies.",
                outcome: "Tax-efficient transaction structure"
              },
              {
                title: "3. Cross-Border Transaction Framework",
                desc: "Management of: Multi-jurisdiction tax implications, Treaty positioning, and Capital structuring.",
                outcome: "Optimized cross-border transaction"
              },
              {
                title: "4. Post-Transaction Optimization Model",
                desc: "Restructuring: Group structure, Tax positions, and Operational alignment.",
                outcome: "Enhanced post-deal efficiency"
              }
            ].map((sol, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 bg-white p-8 rounded-lg border border-gray-100 shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-2 h-full bg-[#1F3A5F] transition-all group-hover:w-full opacity-5"></div>
                <TrendingUp className="text-[#2FA4A9] w-10 h-10 shrink-0 z-10" />
                <div className="z-10">
                   <h3 className="text-xl font-heading font-bold text-[#1F3A5F] mb-3">{sol.title}</h3>
                   <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-[15px]">{sol.desc}</p>
                   <div className="px-4 py-2 border-l-4 border-[#F57C00] bg-[#F4F6F8] font-medium text-xs text-[#0D1B2A] inline-block">
                     ➡ Outcome: <span className="text-[#F57C00] font-bold">{sol.outcome}</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-gradient-to-br from-[#1F3A5F] to-[#0D1B2A] text-white py-20 px-6 lg:px-12 text-center">
        <h2 className="text-3xl font-heading font-bold mb-6">Execute transactions with clarity and control</h2>
        <Link href="/contact" className="inline-flex items-center bg-[#F57C00] hover:bg-[#E65100] text-white px-8 py-4 rounded-md font-bold transition-transform hover:-translate-y-1 mt-4 shadow-lg">
          Speak to a Partner <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </AnimatedSection>
    </main>
  );
}