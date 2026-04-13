import os

code = """import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Briefcase, FileSearch, TrendingUp, Handshake, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "India Market Entry & Expansion Advisory for Multinational Companies | PUMEC Consultants Pvt Ltd",
  description: "Expert India market entry advisory for multinational companies. We provide end-to-end support for business setup, FEMA compliance, tax structuring, and regulatory approvals to ensure seamless expansion into India.",
  keywords: "India entry strategy, India market entry consulting, business setup India, foreign investment India, FEMA advisory, India corporate structuring, India business compliance, India expansion services, RBI compliance India, cross-border advisory India",
};

export default function MarketEntryAdvisoryPage() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="bg-[#1F3A5F] text-white pt-24 pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/path/to/hero-pattern.png')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#F57C00] font-bold tracking-widest uppercase text-sm mb-4 block">Market Entry & Expansion Advisory</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
            India Market Entry & Expansion Advisory for Multinational Companies
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed">
            Expert advisory for foreign companies on India entry strategy, business setup, regulatory compliance, and tax-efficient structuring
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
            India continues to be one of the fastest-growing major economies, offering significant opportunities for multinational companies across sectors such as technology, healthcare, manufacturing, and financial services. With a large consumer base, increasing digital adoption, and a strong policy push toward foreign investment, India remains a strategic destination for global expansion.
          </p>
          <p>
            However, entering the Indian market is not without challenges. Businesses must navigate a complex regulatory framework involving foreign exchange laws, corporate regulations, tax systems, and sector-specific policies. Without a structured approach, companies may face delays, compliance risks, and inefficiencies that can impact long-term success.
          </p>
          <p className="font-semibold text-[#1F3A5F] text-lg mt-4 border-l-4 border-[#2FA4A9] pl-6 py-2 bg-[#F4F6F8]">
            At PUMEC Consultants Pvt Ltd, we provide comprehensive Market Entry & Expansion Advisory Services designed to help multinational companies establish, operate, and scale efficiently in India. Our approach combines strategic planning with hands-on execution to minimize risks and maximize returns.
          </p>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-20 px-6 lg:px-12 bg-[#F4F6F8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Key Challenges for Multinational Companies</h2>
            <div className="w-16 h-1 bg-[#2FA4A9] mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "1. Regulatory Complexity",
                desc: "India’s regulatory environment includes multiple governing bodies and regulations such as FEMA, RBI guidelines, corporate laws, and sector-specific approvals. Understanding and complying with these requirements is critical for a successful market entry.",
                icon: <FileSearch className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "2. Entity Structure Decisions",
                desc: "Choosing the right business structure—whether a wholly owned subsidiary, branch office, liaison office, or joint venture—is a key strategic decision that impacts taxation, control, and compliance.",
                icon: <Briefcase className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "3. Tax and Compliance",
                desc: "India’s tax framework requires careful planning to ensure efficiency while maintaining full compliance. Misalignment can result in higher tax costs and regulatory scrutiny.",
                icon: <TrendingUp className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "4. Operational Challenges",
                desc: "Setting up banking relationships, hiring local talent, and establishing operational processes can be complex for foreign companies unfamiliar with the Indian ecosystem.",
                icon: <Handshake className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "5. Risk of Non-Compliance",
                desc: "Failure to comply with regulations may lead to penalties, delays in approvals, and reputational risks, impacting both local and global operations.",
                icon: <ShieldCheck className="w-8 h-8 text-[#F57C00] mb-4" />
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
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Our Comprehensive Solutions</h2>
            <p className="text-gray-600 font-sans max-w-2xl mx-auto">
              We offer end-to-end advisory services covering every stage of your India market entry and expansion journey:
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "a. Market Entry Strategy",
                points: [
                  "In-depth market analysis including sector opportunities and competitive landscape",
                  "Evaluation of entry options such as subsidiary, joint venture, or branch office",
                  "Strategic roadmap for compliant and efficient market entry"
                ]
              },
              {
                title: "b. Business Setup & Corporate Structuring",
                points: [
                  "Company incorporation and regulatory registrations",
                  "Structuring of shareholding and governance frameworks",
                  "Advisory on director responsibilities and compliance requirements",
                  "Seamless integration into India’s corporate ecosystem"
                ]
              },
              {
                title: "c. Tax-Efficient Structuring",
                points: [
                  "Advisory on corporate and indirect tax frameworks",
                  "Optimization of tax structures using applicable treaties",
                  "Cross-border tax planning for parent and subsidiary entities",
                  "Alignment of tax strategy with long-term business objectives"
                ]
              },
              {
                title: "d. Regulatory Approvals & Compliance",
                points: [
                  "Assistance with approvals from RBI and other regulatory authorities",
                  "FEMA compliance and reporting",
                  "Corporate secretarial services including filings and statutory reporting",
                  "Ongoing compliance monitoring and advisory"
                ]
              },
              {
                title: "e. Risk Mitigation",
                points: [
                  "Identification and mitigation of regulatory and operational risks",
                  "Audit readiness and compliance health checks",
                  "Implementation of sustainable compliance frameworks",
                  "Strategic guidance to ensure long-term operational stability"
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
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">Why Choose Our Advisory Services</h2>
            <div className="w-16 h-1 bg-[#F57C00] mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Global Expertise",
                desc: "Our team brings cross-border advisory experience comparable to leading global consulting firms"
              },
              {
                title: "Execution-Focused Approach",
                desc: "We go beyond strategy to ensure successful implementation"
              },
              {
                title: "Customized Solutions",
                desc: "Tailored advisory aligned with your industry, scale, and growth objectives"
              },
              {
                title: "Integrated Advisory",
                desc: "A holistic approach combining regulatory, tax, and operational expertise"
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
                   <span className="font-sans text-gray-200">Leading US-based fintech company</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Challenge:</strong>
                   <span className="font-sans text-gray-200">Navigating complex regulatory requirements under FEMA and RBI while establishing a compliant business structure</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Solution:</strong>
                   <span className="font-sans text-gray-200">Designed an optimal entity structure, obtained necessary approvals, and implemented a tax-efficient operational model</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline border-b border-gray-700 pb-4">
                   <strong className="text-[#2FA4A9] font-heading w-32 shrink-0">Outcome:</strong>
                   <span className="font-sans text-white font-semibold">Successful market entry within 90 days with full regulatory compliance and scalable operations</span>
                </div>
                
                <p className="pt-4 text-gray-400 italic">
                  This reflects our practical, results-driven approach to supporting multinational clients.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Suggestions */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#4A5A6A] font-semibold mb-6">Explore more about our services and insights:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/services/international-tax" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">International Tax & Structuring Services</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/transfer-pricing" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Transfer Pricing Advisory</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/insights/guide-to-india-business-setup" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Insights: Guide to India Business Setup</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/insights/fema-compliance-checklist" className="text-[#1F3A5F] hover:text-[#F57C00] underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Insights: FEMA Compliance Checklist</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1F3A5F] to-[#0D1B2A] text-white py-24 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-6 text-white">Ready to enter India with confidence?</h2>
          <p className="text-xl text-gray-300 mb-10 font-sans">
             Schedule a consultation with our experts to receive a tailored India market entry strategy aligned with your business goals.
          </p>
          <Link href="/contact" className="inline-flex items-center bg-[#F57C00] hover:bg-[#E65100] text-white px-10 py-5 rounded-md font-bold text-lg transition-transform hover:-translate-y-1">
            Schedule a Consultation <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>
    </main>
  );
}
"""

with open("c:/Users/smite/OneDrive/Desktop/client1/src/app/services/india-entry/page.tsx", "w", encoding="utf-8") as f:
    f.write(code)
print("Done")