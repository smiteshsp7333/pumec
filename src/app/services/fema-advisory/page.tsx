import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Shield, FileSignature, Landmark, RefreshCcw, FileWarning } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: "FEMA & Regulatory Compliance Services in India | RBI, FDI & Cross-Border Compliance Experts | PUMEC Consultants Pvt Ltd",
  description: "Expert FEMA and regulatory compliance services in India. Ensure RBI, FDI, and cross-border compliance with end-to-end FEMA advisory, reporting, and approval support for multinational companies.",
  keywords: "FEMA compliance India, FEMA advisory India, RBI compliance India, foreign exchange compliance India, FDI compliance India, regulatory compliance India, cross-border compliance India, FEMA regulations India, FEMA reporting India, RBI approvals India, foreign investment compliance India, ODI compliance India, inbound outbound investment India, FEMA consultant India, corporate regulatory compliance India",
};

export default function FEMAAdvisoryPage() {
  // Schema for Service and FAQ as requested by technical SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is FEMA compliance in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FEMA compliance in India refers to adhering to the rules and regulations under the Foreign Exchange Management Act for all foreign exchange transactions, cross-border investments, and business operations to ensure legality and avoid penalties."
        }
      },
      {
        "@type": "Question",
        "name": "When is RBI approval required in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RBI approval is required for specific cross-border transactions, certain inbound and outbound investments (FDI/ODI) that fall under the approval route, and other specialized foreign exchange remittances not covered under the automatic route."
        }
      },
      {
        "@type": "Question",
        "name": "What are FDI reporting requirements in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FDI reporting requirements in India include timely filings of forms like FC-GPR, FC-TRS, and annual returns on foreign liabilities and assets to the RBI, ensuring fully documented foreign direct investment compliance."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "FEMA & Regulatory Compliance Services in India",
    "provider": {
      "@type": "Organization",
      "name": "PUMEC Consultants Pvt Ltd"
    },
    "description": "Expert FEMA and regulatory compliance services in India. Ensure RBI, FDI, and cross-border compliance with end-to-end FEMA advisory, reporting, and approval support for multinational companies.",
    "areaServed": "India"
  };

  return (
    <main className="flex-1 bg-white">
      {/* Inject SEO Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero Section */}
      <AnimatedSection className="bg-[#1F3A5F] text-white pt-24 pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#F57C00] font-bold tracking-widest uppercase text-sm mb-4 block">FEMA & Regulatory Compliance</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
            FEMA & Regulatory Compliance Services in India
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed">
            End-to-end FEMA advisory, RBI compliance, and cross-border regulatory solutions for multinational companies
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
            India’s foreign exchange and regulatory environment is governed by a structured framework that requires strict adherence to FEMA compliance in India, RBI regulations, and foreign investment policies. As cross-border transactions increase, businesses must ensure seamless alignment with foreign exchange compliance in India to avoid regulatory risks.
          </p>
          <p>
            For multinational companies, FEMA advisory in India plays a crucial role in managing inbound and outbound investments, ensuring proper reporting, and securing necessary approvals. Non-compliance with FEMA regulations in India can lead to heavy penalties, transaction delays, and operational disruptions.
          </p>
          <p className="font-semibold text-[#1F3A5F] text-lg mt-4 border-l-4 border-[#2FA4A9] pl-6 py-2 bg-[#F4F6F8]">
            At PUMEC Consultants Pvt Ltd, we provide specialized FEMA & regulatory compliance services in India, enabling businesses to navigate complex RBI compliance requirements, manage FDI compliance in India, and execute cross-border transactions with confidence.
          </p>
        </div>
      </AnimatedSection>

      {/* Key Challenges */}
      <AnimatedSection className="py-20 px-6 lg:px-12 bg-[#F4F6F8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Key Challenges in FEMA & Regulatory Compliance</h2>
            <div className="w-16 h-1 bg-[#2FA4A9] mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "1. Complex FEMA Regulations in India",
                desc: "Understanding and implementing FEMA regulations in India across various transaction types is highly complex and continuously evolving.",
                icon: <Shield className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "2. RBI Compliance & Approvals",
                desc: "Obtaining timely RBI approvals in India for cross-border transactions requires accurate documentation and regulatory alignment.",
                icon: <Landmark className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "3. FDI & ODI Compliance",
                desc: "Managing FDI compliance in India and ODI compliance (Overseas Direct Investment) involves strict reporting and adherence to sectoral caps and guidelines.",
                icon: <RefreshCcw className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "4. FEMA Reporting Requirements",
                desc: "Timely and accurate FEMA reporting in India is mandatory for all foreign transactions, including filings with RBI.",
                icon: <FileSignature className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "5. Risk of Non-Compliance",
                desc: "Failure in foreign exchange compliance in India can lead to penalties, compounding proceedings, and reputational risks.",
                icon: <FileWarning className="w-8 h-8 text-[#F57C00] mb-4" />
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
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Our Comprehensive FEMA & Regulatory Solutions</h2>
            <p className="text-gray-600 font-sans max-w-2xl mx-auto">
              We deliver integrated FEMA advisory and regulatory compliance services in India designed for multinational businesses:
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "a. FEMA Advisory Services",
                points: [
                  "Expert FEMA advisory in India for inbound and outbound transactions",
                  "Structuring cross-border investments under FEMA regulations in India",
                  "Advisory on capital account and current account transactions",
                  "Strategic guidance on foreign exchange compliance in India"
                ]
              },
              {
                title: "b. RBI Compliance & Approvals",
                points: [
                  "End-to-end support for RBI approvals in India",
                  "Liaison with regulatory authorities",
                  "Preparation and submission of approval applications",
                  "Advisory on regulatory pathways for faster approvals"
                ]
              },
              {
                title: "c. FDI & ODI Compliance",
                points: [
                  "Complete FDI compliance services in India",
                  "Advisory on sectoral caps, entry routes, and pricing guidelines",
                  "ODI compliance in India for outbound investments",
                  "Structuring inbound and outbound investment transactions"
                ]
              },
              {
                title: "d. FEMA Reporting & Filings",
                points: [
                  "Timely FEMA reporting in India including FC-GPR, FC-TRS, ODI filings",
                  "Annual return filings and event-based compliance",
                  "Documentation and certification support",
                  "Compliance tracking and reporting systems"
                ]
              },
              {
                title: "e. Regulatory Risk Management",
                points: [
                  "Identification of regulatory compliance risks in India",
                  "FEMA compliance audits and health checks",
                  "Compounding and regularization support",
                  "Implementation of sustainable compliance frameworks"
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
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Why Choose Our FEMA & Regulatory Advisory</h2>
            <div className="w-16 h-1 bg-[#F57C00] mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Specialized FEMA Expertise",
                desc: "Deep experience in FEMA compliance and advisory in India"
              },
              {
                title: "Strong RBI Interface",
                desc: "Proven track record in securing RBI approvals in India"
              },
              {
                title: "End-to-End Compliance",
                desc: "From structuring to reporting and audit support"
              },
              {
                title: "Risk-Focused Approach",
                desc: "Proactive management of foreign exchange compliance risks in India"
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
                   <span className="font-sans text-gray-200">Singapore-based investment company entering India</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Challenge:</strong>
                   <span className="font-sans text-gray-200">Delays and compliance risks due to improper FEMA reporting and RBI approval processes in India</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Solution:</strong>
                   <div className="font-sans text-gray-200 w-full">
                     <ul className="list-disc pl-5 mt-2 space-y-1">
                       <li>Provided end-to-end FEMA advisory services in India</li>
                       <li>Streamlined FDI compliance and RBI approval process</li>
                       <li>Implemented robust FEMA reporting framework</li>
                     </ul>
                   </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Outcome:</strong>
                   <div className="font-sans text-white font-semibold w-full">
                     <ul className="list-disc pl-5 mt-2 space-y-1">
                       <li>Achieved full FEMA compliance in India</li>
                       <li>Secured approvals without delays</li>
                       <li>Established a scalable and compliant cross-border structure</li>
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
            <Link href="/services/india-entry" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Market Entry & Expansion Advisory</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/international-tax" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">International Tax & Structuring Advisory</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/transfer-pricing" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Transfer Pricing Advisory</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/insights/fema-compliance-checklist-india" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Insights: FEMA Compliance Checklist India</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/insights/rbi-approval-process-guide" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Insights: RBI Approval Process Guide</Link>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="bg-gradient-to-br from-[#1F3A5F] to-[#0D1B2A] text-white py-24 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-6 text-white">Ensure complete FEMA and regulatory compliance in India.</h2>
          <p className="text-xl text-gray-300 mb-10 font-sans">
             Connect with our experts for reliable FEMA advisory and RBI compliance services in India tailored to your business.
          </p>
          <Link href="/contact" className="inline-flex items-center bg-[#F57C00] hover:bg-[#E65100] text-white px-10 py-5 rounded-md font-bold text-lg transition-transform hover:-translate-y-1">
            Connect With Our Experts <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
}
