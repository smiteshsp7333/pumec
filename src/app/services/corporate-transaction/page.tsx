import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Target, Search, Network, Scale, RefreshCcw, Briefcase } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: "Corporate & Transaction Advisory Services in India | M&A, Due Diligence & Deal Structuring Experts | PUMEC Consultants Pvt Ltd",
  description: "Expert corporate and transaction advisory services in India. M&A advisory, due diligence, deal structuring, and investment advisory for seamless business transactions and growth.",
  keywords: "corporate advisory India, transaction advisory services India, M&A advisory India, mergers and acquisitions India, due diligence India, financial due diligence India, legal due diligence India, transaction structuring India, deal advisory India, business acquisition India, investment advisory India, corporate restructuring India, joint venture advisory India, private equity advisory India, deal structuring India",
};

export default function CorporateTransactionPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate & Transaction Advisory Services in India",
    "provider": {
      "@type": "Organization",
      "name": "PUMEC Consultants Pvt Ltd"
    },
    "description": "Expert corporate and transaction advisory services in India. M&A advisory, due diligence, deal structuring, and investment advisory for seamless business transactions and growth.",
    "areaServed": "India"
  };

  return (
    <main className="flex-1 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero Section */}
      <AnimatedSection className="bg-[#1F3A5F] text-white pt-24 pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#F57C00] font-bold tracking-widest uppercase text-sm mb-4 block">Corporate & Transaction Advisory</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
            Corporate & Transaction Advisory Services in India
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed">
            End-to-end corporate advisory, M&A advisory, and transaction structuring services for strategic business growth
          </p>
        </div>
      </AnimatedSection>

      {/* Introduction / Market Context */}
      <AnimatedSection className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-gray-700 font-sans leading-relaxed space-y-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Introduction / Market Context</h2>
            <div className="w-16 h-1 bg-[#F57C00] mx-auto rounded"></div>
          </div>
          <p>
            India’s rapidly evolving business ecosystem presents significant opportunities for mergers, acquisitions, joint ventures, and strategic investments. As companies pursue growth through corporate advisory in India and complex transactions, the need for expert transaction advisory services in India becomes critical.
          </p>
          <p>
            Whether it is M&A advisory in India, business acquisition, or corporate restructuring, each transaction involves multiple layers of financial, legal, tax, and regulatory considerations. Without proper due diligence in India and structured execution, companies face risks related to valuation, compliance, and integration.
          </p>
          <p className="font-semibold text-[#1F3A5F] text-lg mt-4 border-l-4 border-[#2FA4A9] pl-6 py-2 bg-[#F4F6F8]">
            At PUMEC Consultants Pvt Ltd, we provide integrated corporate and transaction advisory services in India, enabling businesses to execute transactions efficiently, mitigate risks, and maximize value through strategic deal structuring in India.
          </p>
        </div>
      </AnimatedSection>

      {/* Key Challenges */}
      <AnimatedSection className="py-20 px-6 lg:px-12 bg-[#F4F6F8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Key Challenges in Corporate & Transaction Advisory</h2>
            <div className="w-16 h-1 bg-[#2FA4A9] mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "1. Complex M&A Transactions in India",
                desc: "Executing mergers and acquisitions in India requires alignment of valuation, regulatory compliance, and strategic objectives.",
                icon: <Target className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "2. Due Diligence Risks",
                desc: "Incomplete financial due diligence in India or legal due diligence in India can expose businesses to hidden liabilities.",
                icon: <Search className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "3. Transaction Structuring Complexity",
                desc: "Designing efficient transaction structuring in India is critical for tax optimization and regulatory compliance.",
                icon: <Network className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "4. Regulatory and Tax Implications",
                desc: "Transactions must comply with corporate laws, tax regulations, and cross-border compliance requirements.",
                icon: <Scale className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "5. Integration and Execution Risks",
                desc: "Post-transaction integration challenges can impact operational efficiency and value realization.",
                icon: <RefreshCcw className="w-8 h-8 text-[#F57C00] mb-4" />
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:border-[#1F3A5F] transition-all hover:-translate-y-1">
                {item.icon}
                <h3 className="text-xl font-heading font-bold text-[#1F3A5F] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Comprehensive Solutions */}
      <AnimatedSection className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 md:text-center">
            <span className="text-[#2FA4A9] font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Our Comprehensive Corporate & Transaction Solutions</h2>
            <p className="text-gray-600 font-sans max-w-2xl mx-auto">
              We deliver end-to-end transaction advisory services in India, covering every stage of the deal lifecycle:
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "a. M&A Advisory Services",
                points: [
                  "Strategic M&A advisory in India for acquisitions, mergers, and divestitures",
                  "Target identification and valuation analysis",
                  "Negotiation support and deal execution",
                  "End-to-end mergers and acquisitions advisory in India"
                ]
              },
              {
                title: "b. Due Diligence Services",
                points: [
                  "Comprehensive due diligence services in India",
                  "Financial due diligence for risk identification",
                  "Legal due diligence in India for compliance review",
                  "Tax and operational due diligence"
                ]
              },
              {
                title: "c. Transaction Structuring",
                points: [
                  "Optimized transaction structuring in India",
                  "Tax-efficient deal structuring strategies",
                  "Advisory on cross-border transactions",
                  "Structuring for private equity and strategic investments"
                ]
              },
              {
                title: "d. Corporate Restructuring",
                points: [
                  "Strategic corporate restructuring in India",
                  "Business reorganization and optimization",
                  "Group restructuring for efficiency",
                  "Capital restructuring and advisory"
                ]
              },
              {
                title: "e. Investment & Joint Venture Advisory",
                points: [
                  "Investment advisory services in India",
                  "Joint venture advisory in India for strategic partnerships",
                  "Entry and exit strategy planning",
                  "Private equity and venture capital advisory"
                ]
              }
            ].map((sol, index) => (
              <div key={index} className="bg-[#1F3A5F] text-white p-8 rounded-xl shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <ChevronRight className="w-32 h-32 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#F57C00] mb-6 relative z-10">{sol.title}</h3>
                <ul className="space-y-4 relative z-10">
                  {sol.points.map((pt, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-[#2FA4A9] mr-4 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200 text-lg leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="py-20 px-6 lg:px-12 bg-[#F4F6F8]">
        <div className="max-w-4xl mx-auto">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Why Choose Our Corporate Advisory Services</h2>
            <div className="w-16 h-1 bg-[#F57C00] mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Strong Deal Expertise",
                desc: "Extensive experience in transaction advisory services in India"
              },
              {
                title: "Integrated Approach",
                desc: "Financial, tax, and regulatory alignment"
              },
              {
                title: "Value-Driven Strategy",
                desc: "Focus on maximizing deal value"
              },
              {
                title: "Execution Excellence",
                desc: "End-to-end deal support from planning to closure"
              }
            ].map((reason, rIndex) => (
              <div key={rIndex} className="bg-white border-l-4 border-[#2FA4A9] p-6 shadow-sm">
                <h3 className="text-[#1F3A5F] font-bold text-xl mb-2">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed font-sans">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Case Study */}
      <AnimatedSection className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0D1B2A] rounded-2xl p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden">
             
             {/* decorative blob */}
             <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/4">
               <div className="w-64 h-64 bg-[#F57C00] rounded-full blur-3xl opacity-20"></div>
             </div>

             <h2 className="text-3xl font-heading font-bold mb-8 text-[#F57C00] flex items-center">
                Case Study / Success Story 
             </h2>
             <div className="space-y-6 relative z-10 text-lg">
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Client:</strong>
                   <span className="font-sans text-gray-200">Global manufacturing group acquiring an Indian company</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Challenge:</strong>
                   <span className="font-sans text-gray-200">High transaction risk due to lack of structured due diligence in India</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Solution:</strong>
                   <div className="font-sans text-gray-200 w-full">
                     <ul className="list-disc pl-5 mt-2 space-y-1">
                       <li>Conducted detailed financial and legal due diligence in India</li>
                       <li>Designed efficient transaction structuring strategy</li>
                       <li>Provided end-to-end M&A advisory services in India</li>
                     </ul>
                   </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Outcome:</strong>
                   <div className="font-sans text-white font-semibold w-full">
                     <ul className="list-disc pl-5 mt-2 space-y-1">
                       <li>Successful acquisition with minimized risks</li>
                       <li>Optimized deal structure</li>
                       <li>Seamless post-transaction integration</li>
                     </ul>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Internal Linking Suggestions */}
      <AnimatedSection className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#4A5A6A] font-semibold mb-6">Explore more about our services and insights:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/services/international-tax" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">International Tax & Structuring Advisory</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/fema-advisory" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Regulatory & FEMA Compliance</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/litigation-dispute" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Litigation & Dispute Resolution</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/india-entry" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Market Entry & Expansion Advisory</Link>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="bg-gradient-to-br from-[#1F3A5F] to-[#0D1B2A] text-white py-24 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-6 text-white">Planning a merger, acquisition, or strategic investment in India?</h2>
          <p className="text-xl text-gray-300 mb-10 font-sans">
             Connect with our experts for trusted corporate advisory and transaction advisory services in India.
          </p>
          <Link href="/contact" className="inline-flex items-center bg-[#F57C00] hover:bg-[#E65100] text-white px-10 py-5 rounded-md font-bold text-lg transition-transform hover:-translate-y-1">
            Connect With Our Experts <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
}
