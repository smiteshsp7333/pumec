import AnimatedSection from '@/components/AnimatedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Code of Ethics | PUMEC Consultants Pvt Ltd",
  description: "Code of Ethics for PUMEC Consultants Private Limited.",
};

export default function CodeOfEthicsPage() {
  return (
    <main className="flex-1 bg-[#F4F6F8]">
      {/* Hero Section */}
      <AnimatedSection className="bg-[#1F3A5F] text-white pt-24 pb-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#F57C00] font-bold tracking-widest uppercase text-sm mb-4 block">Corporate Governance</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-4">
            Code of Ethics
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
             <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] uppercase mb-4">Code of Ethics</h2>
             <p className="text-[#F57C00] font-semibold text-lg">PUMEC Consultants Private Limited</p>
             <hr className="my-8 border-gray-200" />
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> 1. Purpose and Commitment
            </h2>
            <p className="mb-4">
              PUMEC Consultants Private Limited (“PUMEC”, “we”, “our”) is committed to conducting its business with the highest standards of integrity, professionalism, and ethical responsibility.
            </p>
            <p className="mb-2">This Code of Ethics establishes the principles and expectations that guide the conduct of:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Directors and Partners</li>
              <li>Employees and consultants</li>
              <li>Vendors and service providers</li>
              <li>Associated professionals and representatives</li>
            </ul>
            <p className="font-semibold text-[#1F3A5F]">
              All stakeholders associated with PUMEC are expected to adhere to this Code in both letter and spirit.
            </p>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> 2. Compliance with Laws and Regulations
            </h2>
            <p className="mb-2">PUMEC operates in full compliance with:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Applicable laws and regulations in India, including corporate, tax, and foreign exchange laws</li>
              <li>Relevant international regulatory frameworks applicable to cross-border engagements</li>
              <li>Contractual obligations with clients, employees, and vendors</li>
            </ul>
            <p className="mb-2">We ensure that all professional services are delivered in accordance with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Statutory requirements</li>
              <li>Regulatory guidelines</li>
              <li>Professional standards</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> 3. Integrity and Ethical Conduct
            </h2>
            <p className="mb-4">We conduct our business with honesty, fairness, and transparency.</p>
            <p className="mb-2">PUMEC does not engage in:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Misrepresentation of facts or advisory positions</li>
              <li>Any form of unethical or unlawful conduct</li>
              <li>Practices that may compromise professional judgment</li>
            </ul>
            <p className="font-medium">All decisions are expected to reflect sound ethical judgment and professional responsibility.</p>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> 4. Professional Competence and Due Care
            </h2>
            <p className="mb-4">PUMEC is committed to maintaining a high level of technical competence and diligence.</p>
            <p className="mb-2">We ensure that:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Services are performed by qualified professionals</li>
              <li>Advice is based on appropriate analysis and applicable laws</li>
              <li>Deliverables meet quality and professional standards</li>
            </ul>
            <p className="font-medium">Continuous learning and professional development are encouraged to maintain expertise.</p>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> 5. Confidentiality and Data Protection
            </h2>
            <p className="mb-4">We maintain strict confidentiality of all client, employee, and business information.</p>
            <p className="mb-2">Personal and professional information:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Is used only for legitimate purposes</li>
              <li>Is not disclosed without authorization, unless required by law</li>
              <li>Is protected through appropriate safeguards</li>
            </ul>
            <p className="font-medium">This obligation continues even after the end of professional or contractual relationships.</p>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> 6. Independence and Objectivity
            </h2>
            <p className="mb-4">PUMEC maintains independence and objectivity in all professional engagements.</p>
            <p className="mb-2">We:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Avoid conflicts of interest</li>
              <li>Disclose any potential conflicts transparently</li>
              <li>Ensure that professional judgment is not influenced by external pressures</li>
            </ul>
            <p className="font-medium">Where independence may be impaired, appropriate safeguards or disengagement may be considered.</p>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> 7. Client Relationships and Professional Conduct
            </h2>
            <p className="mb-2">We are committed to building long-term client relationships based on:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Trust and transparency</li>
              <li>Clear communication</li>
              <li>Ethical advisory practices</li>
            </ul>
            <p className="mb-2">We:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide objective and well-reasoned advice</li>
              <li>Clearly communicate assumptions, risks, and limitations</li>
              <li>Avoid aggressive or non-defensible positions</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-6 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> 8. Fair Dealing with Employees and Vendors
            </h2>
            <p className="mb-6">PUMEC promotes a professional and respectful working environment.</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">For Employees:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Equal opportunity and non-discrimination</li>
                  <li>Respect, dignity, and professional growth</li>
                  <li>Compliance with employment agreements and policies</li>
                </ul>
              </div>
              <hr className="my-4 border-gray-100" />

              <div>
                <h3 className="text-xl font-bold text-[#4A5A6A] mb-2">For Vendors and Partners:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fair and transparent selection processes</li>
                  <li>Compliance with contractual terms</li>
                  <li>Ethical business practices</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> 9. Anti-Bribery and Anti-Corruption
            </h2>
            <p className="mb-4">PUMEC follows a zero-tolerance approach toward bribery and corruption.</p>
            <p className="mb-2">We prohibit:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Offering or accepting improper payments, gifts, or advantages</li>
              <li>Any activity that may influence business decisions unethically</li>
            </ul>
            <p className="font-medium text-[#1F3A5F]">All stakeholders must comply with applicable anti-corruption laws and standards.</p>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> 10. Use of Technology and Information Systems
            </h2>
            <p className="mb-4">All systems and digital resources must be used responsibly and securely.</p>
            <p className="mb-2">Users must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Protect confidential and sensitive data</li>
              <li>Avoid unauthorized access or misuse</li>
              <li>Comply with internal IT and data security policies</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> 11. Reporting Concerns and Ethical Violations
            </h2>
            <p className="mb-2">PUMEC encourages the reporting of any suspected:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Ethical violations</li>
              <li>Non-compliance with laws or policies</li>
              <li>Misconduct or inappropriate behavior</li>
            </ul>
            <p className="mb-2">Reports will be handled:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confidentially</li>
              <li>Without retaliation</li>
              <li>In accordance with internal review procedures</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> 12. Enforcement and Accountability
            </h2>
            <p className="mb-2">Failure to comply with this Code may result in:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Disciplinary action</li>
              <li>Termination of employment or engagement</li>
              <li>Legal action, where applicable</li>
            </ul>
            <p className="font-medium">PUMEC maintains appropriate mechanisms to monitor and enforce compliance.</p>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> 13. Continuous Improvement
            </h2>
            <p className="mb-2">PUMEC periodically reviews and updates this Code to ensure alignment with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Evolving legal and regulatory requirements</li>
              <li>Industry best practices</li>
              <li>Organizational growth and global standards</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> 14. Our Ethical Commitment
            </h2>
            <p className="mb-2">At PUMEC, we are committed to conducting our business in a manner that is:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ethical and transparent</li>
              <li>Compliant with laws and regulations</li>
              <li>Aligned with professional standards</li>
              <li>Respectful of all stakeholders</li>
            </ul>
          </div>
          <hr className="my-8 border-gray-200" />

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 flex items-center gap-2">
              <span className="text-[#F57C00]">🔷</span> 15. Effective Date
            </h2>
            <p className="font-bold text-[#4A5A6A]">April 2026</p>
          </div>
          
        </div>
      </AnimatedSection>
    </main>
  );
}