import AnimatedSection from '@/components/AnimatedSection';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Scale, Globe, FileDiff, Network, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: "International Tax & Structuring Advisory Services in India | Cross-Border Tax Experts | PUMEC Consultants Pvt Ltd",
  description: "Expert international tax advisory and cross-border tax structuring services in India. Optimize global tax strategy, ensure DTAA compliance, and manage transfer pricing with PUMEC Consultants.",
  keywords: "international tax advisory India, cross-border tax structuring, international tax planning India, transfer pricing India, tax structuring services India, global tax advisory, double taxation avoidance India, DTAA India advisory, FEMA tax compliance, cross-border transactions India, corporate tax structuring India, inbound outbound tax India",
};

export default function InternationalTaxAdvisoryPage() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <AnimatedSection className="bg-[#1F3A5F] text-white pt-24 pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#F57C00] font-bold tracking-widest uppercase text-sm mb-4 block">International Tax & Structuring</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
            International Tax & Structuring Advisory Services in India
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed">
            Comprehensive cross-border tax structuring and international tax advisory for multinational companies
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
            In today’s globalized economy, multinational companies increasingly engage in cross-border transactions, making international tax advisory in India a critical component of business strategy. As India continues to attract foreign investment, companies must align their operations with evolving global tax regulations, local tax laws, and compliance requirements.
          </p>
          <p>
            Effective cross-border tax structuring is essential to ensure tax efficiency, regulatory compliance, and sustainable business growth. However, navigating international taxation involves complex challenges including transfer pricing regulations, double taxation risks, and alignment with global frameworks.
          </p>
          <p className="font-semibold text-[#1F3A5F] text-lg mt-4 border-l-4 border-[#2FA4A9] pl-6 py-2 bg-[#F4F6F8]">
            At PUMEC Consultants Pvt Ltd, we provide specialized international tax advisory services in India, helping businesses optimize their international tax planning, manage risks, and achieve efficient tax structuring for cross-border transactions in India.
          </p>
        </div>
      </AnimatedSection>

      {/* Key Challenges */}
      <AnimatedSection className="py-20 px-6 lg:px-12 bg-[#F4F6F8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Key Challenges in International Tax & Structuring</h2>
            <div className="w-16 h-1 bg-[#2FA4A9] mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "1. Complex International Tax Regulations",
                desc: "Multinational companies must comply with both Indian tax laws and global tax regulations, making international tax compliance in India highly complex.",
                icon: <Scale className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "2. Double Taxation Risks",
                desc: "Without proper cross-border tax planning, businesses may face taxation in multiple jurisdictions. Leveraging DTAA (Double Taxation Avoidance Agreements) in India is critical.",
                icon: <FileDiff className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "3. Transfer Pricing Compliance",
                desc: "Ensuring arm’s length pricing for intercompany transactions is essential to meet transfer pricing regulations in India and avoid penalties.",
                icon: <Network className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "4. Evolving Global Tax Frameworks",
                desc: "Global developments such as BEPS (Base Erosion and Profit Shifting) require businesses to continuously update their international tax structuring strategies.",
                icon: <Globe className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "5. FEMA and Regulatory Alignment",
                desc: "Cross-border transactions must comply with FEMA regulations and tax compliance in India, adding another layer of complexity.",
                icon: <ShieldAlert className="w-8 h-8 text-[#F57C00] mb-4" />
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
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Our Comprehensive International Tax Solutions</h2>
            <p className="text-gray-600 font-sans max-w-2xl mx-auto">
              We provide end-to-end international tax advisory and cross-border tax structuring services in India, tailored to your business model:
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "a. International Tax Planning",
                points: [
                  "Strategic international tax planning in India aligned with global operations",
                  "Optimization of tax positions across jurisdictions",
                  "Structuring inbound and outbound investments",
                  "Advisory on cross-border transactions and tax implications in India"
                ]
              },
              {
                title: "b. Cross-Border Tax Structuring",
                points: [
                  "Design of efficient cross-border tax structures in India",
                  "Structuring of holding companies and subsidiaries",
                  "Advisory on profit repatriation strategies",
                  "Minimizing tax leakage through optimized structuring"
                ]
              },
              {
                title: "c. DTAA & Tax Treaty Advisory",
                points: [
                  "Application of Double Taxation Avoidance Agreements (DTAA) in India",
                  "Withholding tax optimization",
                  "Treaty eligibility analysis and compliance",
                  "Advisory on permanent establishment (PE) risks"
                ]
              },
              {
                title: "d. Transfer Pricing Advisory",
                points: [
                  "Comprehensive transfer pricing advisory in India",
                  "Benchmarking analysis and documentation",
                  "Intercompany pricing strategy development",
                  "Litigation support and audit defense"
                ]
              },
              {
                title: "e. FEMA & Cross-Border Compliance",
                points: [
                  "Advisory on FEMA tax compliance in India",
                  "Structuring cross-border fund flows",
                  "Compliance with RBI regulations",
                  "Reporting and documentation support"
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
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Why Choose Our International Tax Advisory Services</h2>
            <div className="w-16 h-1 bg-[#F57C00] mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Specialized Expertise",
                desc: "Deep knowledge of international tax advisory in India and global tax frameworks"
              },
              {
                title: "Strategic Approach",
                desc: "Focus on long-term tax structuring and international tax planning"
              },
              {
                title: "Regulatory Alignment",
                desc: "Strong expertise in FEMA, DTAA, and transfer pricing compliance in India"
              },
              {
                title: "Integrated Solutions",
                desc: "Seamless integration of tax, regulatory, and operational advisory"
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
                   <span className="font-sans text-gray-200">European manufacturing group entering India</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Challenge:</strong>
                   <span className="font-sans text-gray-200">Inefficient global tax structure leading to high tax exposure and compliance risks</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Solution:</strong>
                   <div className="font-sans text-gray-200 w-full">
                     <ul className="list-disc pl-5 mt-2 space-y-1">
                       <li>Designed optimized cross-border tax structuring in India</li>
                       <li>Implemented international tax planning strategy using DTAA benefits</li>
                       <li>Established compliant transfer pricing framework in India</li>
                     </ul>
                   </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Outcome:</strong>
                   <div className="font-sans text-white font-semibold w-full">
                     <ul className="list-disc pl-5 mt-2 space-y-1">
                       <li>Reduced overall tax burden significantly</li>
                       <li>Achieved full international tax compliance in India</li>
                       <li>Improved operational efficiency and cash flow</li>
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
            <Link href="/services/transfer-pricing" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Transfer Pricing Advisory</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/fema-advisory" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Regulatory & FEMA Compliance Services</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/insights/international-tax-planning-guide" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Insights: International Tax Planning Guide</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/insights/dtaa-and-cross-border-taxation-in-india" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Insights: DTAA and Cross-Border Taxation in India</Link>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="bg-gradient-to-br from-[#1F3A5F] to-[#0D1B2A] text-white py-24 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-6 text-white">Looking to optimize your global tax strategy?</h2>
          <p className="text-xl text-gray-300 mb-10 font-sans">
             Connect with our experts for tailored international tax advisory and cross-border tax structuring services in India.
          </p>
          <Link href="/contact" className="inline-flex items-center bg-[#F57C00] hover:bg-[#E65100] text-white px-10 py-5 rounded-md font-bold text-lg transition-transform hover:-translate-y-1">
            Connect With Our Experts <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
}
