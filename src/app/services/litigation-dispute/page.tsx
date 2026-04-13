import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Scale, AlertTriangle, FileWarning, Clock, TrendingDown } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: "Litigation & Dispute Resolution Services in India | Tax Litigation, FEMA & Regulatory Disputes | PUMEC Consultants Pvt Ltd",
  description: "Expert litigation and dispute resolution services in India. Specialized in tax litigation, FEMA disputes, transfer pricing litigation, and regulatory dispute advisory.",
  keywords: "tax litigation India, dispute resolution India, tax dispute advisory India, FEMA litigation India, transfer pricing litigation India, regulatory disputes India, litigation support India, tax appeals India, tribunal representation India, tax controversy India, legal dispute advisory India, cross-border disputes India, corporate litigation India",
};

export default function LitigationDisputePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Litigation & Dispute Resolution Services in India",
    "provider": {
      "@type": "Organization",
      "name": "PUMEC Consultants Pvt Ltd"
    },
    "description": "Expert litigation and dispute resolution services in India. Specialized in tax litigation, FEMA disputes, transfer pricing litigation, and regulatory dispute advisory.",
    "areaServed": "India"
  };

  return (
    <main className="flex-1 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero Section */}
      <AnimatedSection className="bg-[#1F3A5F] text-white pt-24 pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#F57C00] font-bold tracking-widest uppercase text-sm mb-4 block">Litigation & Dispute Resolution</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
            Litigation & Dispute Resolution Services in India
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed">
            Strategic litigation support and dispute resolution advisory for tax, FEMA, and regulatory matters
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
            In an increasingly regulated business environment, disputes with tax authorities and regulatory bodies are becoming more frequent. Companies operating in India must be prepared to manage litigation and dispute resolution in India effectively to protect their financial and reputational interests.
          </p>
          <p>
            From tax litigation in India to FEMA disputes and transfer pricing litigation, businesses require expert advisory to navigate complex legal frameworks and achieve favorable outcomes.
          </p>
          <p className="font-semibold text-[#1F3A5F] text-lg mt-4 border-l-4 border-[#2FA4A9] pl-6 py-2 bg-[#F4F6F8]">
            At PUMEC Consultants Pvt Ltd, we provide specialized dispute resolution services in India, combining technical expertise with strategic litigation support to resolve disputes efficiently and minimize risks.
          </p>
        </div>
      </AnimatedSection>

      {/* Key Challenges */}
      <AnimatedSection className="py-20 px-6 lg:px-12 bg-[#F4F6F8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Key Challenges in Litigation & Dispute Resolution</h2>
            <div className="w-16 h-1 bg-[#2FA4A9] mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "1. Complex Tax Litigation in India",
                desc: "Handling tax litigation in India requires deep understanding of tax laws and judicial processes.",
                icon: <Scale className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "2. Transfer Pricing Disputes",
                desc: "Increasing scrutiny leads to frequent transfer pricing litigation in India.",
                icon: <AlertTriangle className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "3. FEMA & Regulatory Disputes",
                desc: "Non-compliance can result in FEMA litigation in India and regulatory proceedings.",
                icon: <FileWarning className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "4. Lengthy Dispute Resolution Process",
                desc: "Litigation can be time-consuming without proper dispute resolution strategy in India.",
                icon: <Clock className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "5. Financial & Reputational Risks",
                desc: "Unresolved disputes can impact financial stability and brand reputation.",
                icon: <TrendingDown className="w-8 h-8 text-[#F57C00] mb-4" />
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
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Our Comprehensive Litigation & Dispute Solutions</h2>
            <p className="text-gray-600 font-sans max-w-2xl mx-auto">
              We provide end-to-end litigation support and dispute resolution services in India:
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "a. Tax Litigation Advisory",
                points: [
                  "Expert tax litigation advisory in India",
                  "Representation before tax authorities",
                  "Handling tax disputes and appeals in India",
                  "Strategic litigation planning"
                ]
              },
              {
                title: "b. Transfer Pricing Litigation",
                points: [
                  "Specialized transfer pricing litigation services in India",
                  "Audit defense and dispute handling",
                  "Documentation and representation support",
                  "APA and MAP advisory"
                ]
              },
              {
                title: "c. FEMA & Regulatory Disputes",
                points: [
                  "Advisory on FEMA litigation in India",
                  "Representation in regulatory proceedings",
                  "Compounding and regularization support",
                  "Resolution of regulatory disputes in India"
                ]
              },
              {
                title: "d. Dispute Resolution Strategy",
                points: [
                  "Strategic dispute resolution advisory in India",
                  "Risk assessment and mitigation",
                  "Alternative dispute resolution mechanisms",
                  "Negotiation and settlement advisory"
                ]
              },
              {
                title: "e. Tribunal & Appellate Representation",
                points: [
                  "Representation before tribunals and appellate authorities",
                  "Handling tax appeals in India",
                  "Documentation and submission support",
                  "End-to-end litigation management"
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
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Why Choose Our Litigation Advisory</h2>
            <div className="w-16 h-1 bg-[#F57C00] mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Expert Litigation Team",
                desc: "Strong experience in tax litigation and dispute resolution in India"
              },
              {
                title: "Strategic Approach",
                desc: "Focus on fast and effective dispute resolution"
              },
              {
                title: "End-to-End Support",
                desc: "From advisory to representation"
              },
              {
                title: "Risk Mitigation",
                desc: "Proactive approach to minimize litigation exposure"
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
                   <span className="font-sans text-gray-200">Multinational company facing transfer pricing litigation in India</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Challenge:</strong>
                   <span className="font-sans text-gray-200">Significant tax exposure due to pricing adjustments</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Solution:</strong>
                   <div className="font-sans text-gray-200 w-full">
                     <ul className="list-disc pl-5 mt-2 space-y-1">
                       <li>Developed strong litigation strategy in India</li>
                       <li>Provided complete transfer pricing litigation support</li>
                       <li>Represented before tax authorities</li>
                     </ul>
                   </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Outcome:</strong>
                   <div className="font-sans text-white font-semibold w-full">
                     <ul className="list-disc pl-5 mt-2 space-y-1">
                       <li>Successfully reduced tax liability</li>
                       <li>Favorable dispute resolution outcome</li>
                       <li>Strengthened compliance framework</li>
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
            <Link href="/services/international-tax" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">International Tax & Structuring</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/fema-advisory" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Regulatory & FEMA Compliance</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/corporate-transaction" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Corporate & Transaction Advisory</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/transfer-pricing" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Transfer Pricing Advisory</Link>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="bg-gradient-to-br from-[#1F3A5F] to-[#0D1B2A] text-white py-24 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-6 text-white">Facing tax or regulatory disputes in India?</h2>
          <p className="text-xl text-gray-300 mb-10 font-sans">
             Connect with our experts for reliable litigation and dispute resolution services in India.
          </p>
          <Link href="/contact" className="inline-flex items-center bg-[#F57C00] hover:bg-[#E65100] text-white px-10 py-5 rounded-md font-bold text-lg transition-transform hover:-translate-y-1">
            Connect With Our Experts <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
}
