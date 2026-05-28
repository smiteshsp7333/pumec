import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Risk & Compliance Framework | PUMEC Consultants Pvt Ltd",
  description: "Risk and Compliance Framework for PUMEC Consultants Private Limited.",
};

export default function RiskCompliancePage() {
  return (
    <main className="flex-1 bg-[#F4F6F8]">
      {/* Hero Section */}
      <section className="bg-[#1F3A5F] text-white pt-24 pb-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#F57C00] font-bold tracking-widest uppercase text-sm mb-4 block">Risk Management</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-4">
            Risk & Compliance Framework
          </h1>
          <p className="text-lg text-gray-300 font-sans">
            PUMEC Consultants Private Limited
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-gray-700 font-sans leading-relaxed space-y-10">
          
          <div className="text-center mb-12">
             <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] uppercase mb-4 flex items-center justify-center gap-3">
               <span className="text-2xl">🌐</span> RISK & COMPLIANCE FRAMEWORK
             </h2>
             <hr className="my-8 border-gray-200" />
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Overview
            </h2>
            <p className="mb-4">
              PUMEC has established a structured Risk and Compliance Framework to ensure that all services are delivered in a manner that is:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Legally compliant</li>
              <li>Professionally sound</li>
              <li>Risk-aware and defensible</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Risk Management Philosophy
            </h2>
            <p className="mb-4">We adopt a proactive approach to risk management, focusing on:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Early identification of risks</li>
              <li>Structured evaluation and mitigation</li>
              <li>Continuous monitoring and control</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-6 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Key Risk Areas Addressed
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">Regulatory Risk</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Compliance with Indian laws (Income Tax, FEMA, Companies Act, etc.)</li>
                  <li>Alignment with applicable international frameworks</li>
                </ul>
              </div>
              <hr className="my-4 border-gray-100" />

              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">Tax and Structuring Risk</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Exposure to tax disputes or reassessments</li>
                  <li>Transfer pricing and cross-border risk</li>
                </ul>
              </div>
              <hr className="my-4 border-gray-100" />

              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">Transaction Risk</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Risks in structuring investments and cross-border transactions</li>
                  <li>Due diligence gaps</li>
                </ul>
              </div>
              <hr className="my-4 border-gray-100" />

              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">Operational and Compliance Risk</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Non-compliance with statutory filings</li>
                  <li>Reporting and documentation gaps</li>
                </ul>
              </div>
              <hr className="my-4 border-gray-100" />

              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">Reputational Risk</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Alignment with ethical and professional standards</li>
                  <li>Avoidance of aggressive or non-defensible positions</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-6 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Compliance Framework
            </h2>
            <p className="mb-6 font-semibold">PUMEC ensures compliance through:</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">Regulatory Alignment</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Continuous monitoring of legal and regulatory changes</li>
                  <li>Updating advisory approaches accordingly</li>
                </ul>
              </div>
              <hr className="my-4 border-gray-100" />

              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">Internal Controls and Policies</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Defined internal policies and review mechanisms</li>
                  <li>Adherence to professional and ethical standards</li>
                </ul>
              </div>
              <hr className="my-4 border-gray-100" />

              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">Documentation and Audit Trail</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proper documentation of advisory positions</li>
                  <li>Maintenance of supporting analysis and working papers</li>
                </ul>
              </div>
              <hr className="my-4 border-gray-100" />

              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">Client Communication and Transparency</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clear articulation of risks and assumptions</li>
                  <li>Transparent advisory approach</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Risk Mitigation Approach
            </h2>
            <p className="mb-2">We mitigate risks through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Structured advisory frameworks</li>
              <li>Multi-level review (as per governance structure)</li>
              <li>Conservative and defensible positions</li>
              <li>Alignment with regulatory intent</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Integration with Services
            </h2>
            <p className="mb-2">Our Risk & Compliance Framework is embedded across all service lines:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>India Entry & Investment Structuring</li>
              <li>International Tax Advisory</li>
              <li>Transfer Pricing</li>
              <li>FEMA & Regulatory Advisory</li>
              <li>Transaction Advisory</li>
              <li>Accounting, Payroll, and Compliance Services</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Continuous Improvement
            </h2>
            <p className="mb-2">PUMEC continuously strengthens its risk and compliance systems through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Regulatory updates and training</li>
              <li>Internal reviews and refinements</li>
              <li>Alignment with evolving global standards</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Outcome
            </h2>
            <p className="mb-2">Our framework ensures that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Client solutions are compliant and defensible</li>
              <li>Risks are identified and mitigated proactively</li>
              <li>Advisory is aligned with both law and business objectives</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}