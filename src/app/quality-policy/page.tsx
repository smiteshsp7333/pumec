import { Metadata } from 'next';
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Quality Policy | PUMEC Consultants Pvt Ltd",
  description: "Quality Policy for PUMEC Consultants Private Limited.",
};

export default function QualityPolicyPage() {
  return (
    <main className="flex-1 bg-[#F4F6F8]">
      {/* Hero Section */}
      <AnimatedSection className="bg-[#1F3A5F] text-white pt-24 pb-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#F57C00] font-bold tracking-widest uppercase text-sm mb-4 block">Compliance & Standards</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-4">
            Quality Policy & Governance Structure
          </h1>
          <p className="text-lg text-gray-300 font-sans">
            PUMEC Consultants Private Limited
          </p>
        </div>
      </AnimatedSection>

      {/* Content Section */}
      <AnimatedSection className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-gray-700 font-sans leading-relaxed space-y-10">
          
          <div className="text-center mb-12">
             <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] uppercase mb-4">Quality Policy</h2>
             <p className="text-[#F57C00] font-semibold text-lg">PUMEC Consultants Private Limited</p>
             <hr className="my-8 border-gray-200" />
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Our Commitment to Quality
            </h2>
            <p className="mb-4">
              At PUMEC Consultants Private Limited (“PUMEC”), quality is fundamental to the way we deliver professional advisory services. We are committed to providing consistent, reliable, and high-quality solutions across all our service lines, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>International Tax and Cross-Border Advisory</li>
              <li>India Entry and Business Setup</li>
              <li>Transfer Pricing</li>
              <li>FEMA and Regulatory Advisory</li>
              <li>Accounting and Financial Reporting Support</li>
              <li>Payroll and Compliance Services</li>
              <li>STPI / SEZ Advisory and Compliance</li>
            </ul>
            <p className="mb-4 text-[#1F3A5F] font-semibold">
              Our objective is to support clients with accurate, timely, and compliant solutions, aligned with both business objectives and regulatory requirements.
            </p>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-6 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Quality Principles
            </h2>
            <p className="mb-6 font-semibold">PUMEC’s approach to quality is guided by the following principles:</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">Client-Centric Delivery</h3>
                <p>We align our services with the specific needs of each client, ensuring solutions are practical, relevant, and outcome-focused.</p>
              </div>
              <hr className="my-4 border-gray-100" />
              
              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">Regulatory and Professional Compliance</h3>
                <p className="mb-2">We operate in accordance with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Applicable laws and regulations in India</li>
                  <li>International tax and regulatory frameworks</li>
                  <li>Professional standards and ethical obligations</li>
                </ul>
              </div>
              <hr className="my-4 border-gray-100" />

              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">Process-Driven Execution</h3>
                <p className="mb-2">We follow structured processes and review mechanisms to ensure:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Accuracy and consistency</li>
                  <li>Risk mitigation</li>
                  <li>Accountability at every stage of delivery</li>
                </ul>
              </div>
              <hr className="my-4 border-gray-100" />

              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">Continuous Improvement</h3>
                <p className="mb-2">We are committed to continuously enhancing our:</p>
                <ul className="list-disc pl-6 space-y-2 mb-2">
                  <li>Service methodologies</li>
                  <li>Internal processes</li>
                  <li>Knowledge and technical capabilities</li>
                </ul>
                <p>This includes adapting to evolving regulatory environments and incorporating best practices.</p>
              </div>
              <hr className="my-4 border-gray-100" />

              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">Technology and Innovation</h3>
                <p className="mb-2">We leverage appropriate technologies and tools to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Improve efficiency and turnaround time</li>
                  <li>Enhance data accuracy and reporting</li>
                  <li>Deliver scalable solutions to clients</li>
                </ul>
              </div>
              <hr className="my-4 border-gray-100" />

              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">Confidentiality and Integrity</h3>
                <p>We maintain strict confidentiality of client information and adhere to the highest standards of professional integrity, guided by our internal Code of Ethics.</p>
              </div>
            </div>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> ISO Alignment
            </h2>
            <p className="mb-4">
              PUMEC is in the process of aligning its quality systems with internationally recognized standards, including ISO quality management frameworks.
            </p>
            <p className="mb-2">Our objective is to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Establish a formalized quality management system</li>
              <li>Enhance process standardization and documentation</li>
              <li>Strengthen monitoring and continuous improvement mechanisms</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> People and Expertise
            </h2>
            <p className="mb-2">Our quality delivery is driven by:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Skilled professionals with domain expertise</li>
              <li>Ongoing training and development</li>
              <li>Partner-led oversight for critical engagements</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Our Commitment
            </h2>
            <p className="mb-2">We are committed to delivering services that are:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accurate and reliable</li>
              <li>Compliant with applicable laws and standards</li>
              <li>Delivered in a timely and efficient manner</li>
              <li>Aligned with client expectations and global best practices</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Continuous Evolution
            </h2>
            <p className="mb-2">PUMEC continuously reviews and enhances its quality framework to remain aligned with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Changing regulatory environments</li>
              <li>Client expectations</li>
              <li>Global advisory standards</li>
            </ul>
          </div>

          <div className="mt-16 text-center">
             <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] uppercase mb-4 flex items-center justify-center gap-3">
               <span className="text-2xl">🌐</span> QUALITY GOVERNANCE STRUCTURE
             </h2>
             <hr className="my-8 border-gray-200" />
          </div>

          <div>
            <p className="mb-4 font-semibold text-[#1F3A5F] text-lg">
              At PUMEC Consultants Private Limited, quality is governed through a structured framework that ensures accountability, consistency, and independent oversight across all engagements.
            </p>
            <p className="mb-2">Our governance model is designed to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Maintain high standards of professional delivery</li>
              <li>Mitigate risks proactively</li>
              <li>Ensure compliance with applicable regulations and internal policies</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Governance Philosophy
            </h2>
            <p className="mb-2">Our approach is based on three core principles:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Partner-led accountability</li>
              <li>Multi-level review mechanisms</li>
              <li>Continuous monitoring and improvement</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-6 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Internal Review Hierarchy
            </h2>
            <div className="space-y-8">
              <div className="bg-[#F4F6F8] p-6 rounded-lg border-l-4 border-[#1F3A5F]">
                <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">1. Engagement Execution Level</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700">
                  <li>Work is performed by qualified professionals with domain expertise</li>
                  <li>Standardized methodologies and checklists are applied</li>
                  <li>Initial validation of outputs and documentation</li>
                </ul>
                <p className="font-semibold text-[#F57C00] flex items-center gap-2">
                  <span>➡</span> Ensures accuracy and completeness at the execution stage
                </p>
              </div>

              <div className="bg-[#F4F6F8] p-6 rounded-lg border-l-4 border-[#2FA4A9]">
                <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">2. Managerial Review Level</h3>
                <p className="mb-2 text-gray-700">Detailed review of deliverables by experienced managers taking into account the verification of:</p>
                <ul className="list-disc pl-8 space-y-1 text-gray-700 mb-4">
                  <li>Technical correctness</li>
                  <li>Regulatory alignment</li>
                  <li>Documentation quality</li>
                </ul>
                <p className="font-semibold text-[#F57C00] flex items-center gap-2">
                  <span>➡</span> Ensures consistency and technical robustness
                </p>
              </div>

              <div className="bg-[#F4F6F8] p-6 rounded-lg border-l-4 border-[#F57C00]">
                <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">3. Partner / Director Oversight</h3>
                <p className="mb-2 text-gray-700">Final review and approval by senior leadership targeting a focus on:</p>
                <ul className="list-disc pl-8 space-y-1 text-gray-700 mb-4">
                  <li>Strategic alignment with client objectives</li>
                  <li>Risk exposure and advisory positioning</li>
                  <li>Quality of conclusions and recommendations</li>
                </ul>
                <p className="font-semibold text-[#F57C00] flex items-center gap-2">
                  <span>➡</span> Ensures high-level assurance and client relevance
                </p>
              </div>

              <div className="bg-[#F4F6F8] p-6 rounded-lg border-l-4 border-[#4A5A6A]">
                <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">4. Independent Quality Review</h3>
                <p className="mb-2 text-gray-700">Independent review for complex or high-risk engagements featuring an evaluation of:</p>
                <ul className="list-disc pl-8 space-y-1 text-gray-700 mb-4">
                  <li>Compliance with internal standards</li>
                  <li>Adherence to professional guidelines</li>
                </ul>
                <p className="font-semibold text-[#F57C00] flex items-center gap-2">
                  <span>➡</span> Ensures objectivity and quality assurance
                </p>
              </div>
            </div>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Standardization and Documentation
            </h2>
            <p className="mb-2">PUMEC maintains structured documentation and review protocols, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Standard operating procedures (SOPs)</li>
              <li>Engagement checklists</li>
              <li>Review notes and audit trails</li>
            </ul>
            <p className="font-medium text-[#1F3A5F]">
              This ensures traceability, accountability, and consistency across engagements.
            </p>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Continuous Monitoring
            </h2>
            <p className="mb-2">We continuously evaluate and improve our governance framework through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Internal feedback loops</li>
              <li>Periodic quality reviews</li>
              <li>Training and capability enhancement</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> Outcome
            </h2>
            <p className="mb-2">Our governance structure ensures that every engagement delivered by PUMEC is:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reviewed at multiple levels</li>
              <li>Technically sound</li>
              <li>Strategically aligned</li>
              <li>Consistent with professional standards</li>
            </ul>
          </div>
          
        </div>
      </AnimatedSection>
    </main>
  );
}