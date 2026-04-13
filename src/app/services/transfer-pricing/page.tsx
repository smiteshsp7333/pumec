import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Scale, Globe, FileText, AlertTriangle, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: "Transfer Pricing Advisory Services in India | Transfer Pricing Compliance & Documentation | PUMEC Consultants Pvt Ltd",
  description: "Expert transfer pricing advisory services in India. Ensure compliance, optimize intercompany pricing, and manage transfer pricing documentation with global standards and OECD guidelines.",
  keywords: "transfer pricing India, transfer pricing advisory India, transfer pricing compliance India, transfer pricing documentation India, intercompany pricing India, arm's length pricing India, transfer pricing regulations India, OECD transfer pricing India, transfer pricing audit India, transfer pricing consultant India, international transfer pricing services, BEPS compliance India, cross-border pricing India, TP study India",
};

export default function TransferPricingAdvisoryPage() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="bg-[#1F3A5F] text-white pt-24 pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#F57C00] font-bold tracking-widest uppercase text-sm mb-4 block">Transfer Pricing Advisory</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
            Transfer Pricing Advisory Services in India
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed">
            Comprehensive transfer pricing advisory, compliance, and documentation services for multinational companies
          </p>
        </div>
      </section>

      {/* Introduction / Market Context */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-gray-700 font-sans leading-relaxed space-y-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Introduction / Market Context</h2>
            <div className="w-16 h-1 bg-[#F57C00] mx-auto rounded"></div>
          </div>
          <p>
            With the rise of cross-border transactions, transfer pricing in India has become one of the most critical areas of international taxation. Multinational companies engaging in intercompany transactions must ensure that pricing aligns with the arm’s length principle in India, as mandated by Indian tax authorities and global standards.
          </p>
          <p>
            India has one of the most stringent transfer pricing regulations, requiring detailed transfer pricing documentation in India, benchmarking analysis, and compliance with OECD guidelines and BEPS initiatives. Non-compliance with transfer pricing compliance in India can lead to significant penalties, litigation, and reputational risks.
          </p>
          <p className="font-semibold text-[#1F3A5F] text-lg mt-4 border-l-4 border-[#2FA4A9] pl-6 py-2 bg-[#F4F6F8]">
            At PUMEC Consultants Pvt Ltd, we offer specialized transfer pricing advisory services in India, helping businesses design compliant intercompany pricing structures, maintain robust transfer pricing documentation, and manage audits effectively.
          </p>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-20 px-6 lg:px-12 bg-[#F4F6F8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Key Challenges in Transfer Pricing</h2>
            <div className="w-16 h-1 bg-[#2FA4A9] mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "1. Stringent Transfer Pricing Regulations in India",
                desc: "Indian tax authorities enforce strict transfer pricing regulations, requiring companies to maintain accurate and defensible pricing policies.",
                icon: <Scale className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "2. Transfer Pricing Documentation Requirements",
                desc: "Preparation of detailed transfer pricing documentation in India including TP studies, benchmarking reports, and FAR analysis is mandatory.",
                icon: <FileText className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "3. Risk of Transfer Pricing Audits",
                desc: "Companies face increasing scrutiny through transfer pricing audits in India, leading to potential tax adjustments and penalties.",
                icon: <AlertTriangle className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "4. Arm’s Length Pricing Compliance",
                desc: "Ensuring all intercompany transactions meet arm’s length pricing standards in India is complex and requires robust analysis.",
                icon: <Activity className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "5. Global Alignment with OECD & BEPS",
                desc: "Businesses must align their international transfer pricing policies with OECD guidelines and BEPS compliance requirements in India.",
                icon: <Globe className="w-8 h-8 text-[#F57C00] mb-4" />
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
      </section>

      {/* Comprehensive Solutions */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 md:text-center">
            <span className="text-[#2FA4A9] font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Our Comprehensive Transfer Pricing Solutions</h2>
            <p className="text-gray-600 font-sans max-w-2xl mx-auto">
              We provide end-to-end transfer pricing advisory services in India, covering compliance, planning, and dispute resolution:
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "a. Transfer Pricing Planning & Structuring",
                points: [
                  "Strategic transfer pricing planning in India for cross-border transactions",
                  "Design of compliant intercompany pricing structures in India",
                  "Alignment with global tax strategy and business models",
                  "Optimization of cross-border pricing in India"
                ]
              },
              {
                title: "b. Transfer Pricing Documentation",
                points: [
                  "Preparation of robust transfer pricing documentation in India",
                  "Development of TP study reports and benchmarking analysis in India",
                  "FAR (Functions, Assets, Risks) analysis",
                  "Master file and local file documentation as per regulations"
                ]
              },
              {
                title: "c. Transfer Pricing Compliance",
                points: [
                  "End-to-end transfer pricing compliance services in India",
                  "Filing of accountant’s reports and regulatory submissions",
                  "Ensuring compliance with transfer pricing regulations in India",
                  "Continuous compliance monitoring"
                ]
              },
              {
                title: "d. Transfer Pricing Audit Support",
                points: [
                  "Representation during transfer pricing audits in India",
                  "Handling tax authority queries and notices",
                  "Preparation of audit defense strategies",
                  "Risk mitigation and resolution support"
                ]
              },
              {
                title: "e. Litigation & Dispute Resolution",
                points: [
                  "Support in transfer pricing litigation in India",
                  "Assistance with appeals and dispute resolution",
                  "Advance Pricing Agreements (APA) advisory",
                  "Mutual Agreement Procedure (MAP) support"
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
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 lg:px-12 bg-[#F4F6F8]">
        <div className="max-w-4xl mx-auto">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Why Choose Our Transfer Pricing Advisory Services</h2>
            <div className="w-16 h-1 bg-[#F57C00] mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Deep Expertise in Transfer Pricing India",
                desc: "Specialized focus on transfer pricing advisory and compliance in India"
              },
              {
                title: "Global Standards",
                desc: "Alignment with OECD guidelines and BEPS compliance in India"
              },
              {
                title: "Strong Documentation Approach",
                desc: "Robust and defensible transfer pricing documentation"
              },
              {
                title: "End-to-End Support",
                desc: "From planning to audit and litigation"
              }
            ].map((reason, rIndex) => (
              <div key={rIndex} className="bg-white border-l-4 border-[#2FA4A9] p-6 shadow-sm">
                <h3 className="text-[#1F3A5F] font-bold text-xl mb-2">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed font-sans">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-6 lg:px-12 bg-white">
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
                   <span className="font-sans text-gray-200">Asia-Pacific technology company with operations in India</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Challenge:</strong>
                   <span className="font-sans text-gray-200">Exposure to high risk due to inadequate transfer pricing documentation in India</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Solution:</strong>
                   <div className="font-sans text-gray-200 w-full">
                     <ul className="list-disc pl-5 mt-2 space-y-1">
                       <li>Developed comprehensive transfer pricing study and benchmarking analysis in India</li>
                       <li>Implemented compliant intercompany pricing structure</li>
                       <li>Provided full transfer pricing audit support in India</li>
                     </ul>
                   </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Outcome:</strong>
                   <div className="font-sans text-white font-semibold w-full">
                     <ul className="list-disc pl-5 mt-2 space-y-1">
                       <li>Successfully defended transfer pricing position during audit</li>
                       <li>Achieved full transfer pricing compliance in India</li>
                       <li>Reduced risk of future disputes and penalties</li>
                     </ul>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Suggestions */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#4A5A6A] font-semibold mb-6">Explore more about our services and insights:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/services/international-tax" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">International Tax & Structuring Advisory</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/india-entry" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Market Entry & Expansion Advisory</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/fema-advisory" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Regulatory & FEMA Compliance</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/insights/transfer-pricing-documentation-guide" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Insights: Transfer Pricing Documentation Guide</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/insights/beps-and-oecd-guidelines-explained" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Insights: BEPS and OECD Guidelines Explained</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1F3A5F] to-[#0D1B2A] text-white py-24 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-6 text-white">Need expert support for transfer pricing compliance in India?</h2>
          <p className="text-xl text-gray-300 mb-10 font-sans">
             Connect with us for reliable transfer pricing advisory services in India tailored to your business.
          </p>
          <Link href="/contact" className="inline-flex items-center bg-[#F57C00] hover:bg-[#E65100] text-white px-10 py-5 rounded-md font-bold text-lg transition-transform hover:-translate-y-1">
            Connect With Our Experts <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>
    </main>
  );
}
