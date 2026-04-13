import AnimatedSection from '@/components/AnimatedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | PUMEC Consultants Pvt Ltd",
  description: "Privacy Policy for PUMEC Consultants Private Limited.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-[#F4F6F8]">
      {/* Hero Section */}
      <AnimatedSection className="bg-[#1F3A5F] text-white pt-24 pb-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#F57C00] font-bold tracking-widest uppercase text-sm mb-4 block">Legal & Compliance</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300 font-sans">
            PUMEC Consultants Private Limited
          </p>
        </div>
      </AnimatedSection>

      {/* Content Section */}
      <AnimatedSection className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-gray-700 font-sans leading-relaxed space-y-10">

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">1. Introduction</h2>
            <p className="mb-4">
              PUMEC Consultants Private Limited ("PUMEC", "we", "us", or "our") is committed to protecting the privacy and confidentiality of personal information entrusted to us.
            </p>
            <p className="mb-4">
              This Privacy Policy explains how we collect, use, process, store, and protect personal information ("Personal Information") obtained through:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Our website (the "Website")</li>
              <li>Client engagements and professional services</li>
              <li>Communications via email, phone, events, or other channels</li>
            </ul>
            <p className="mb-4">
              We process Personal Information in accordance with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Applicable data protection laws in India</li>
              <li>International privacy principles, including those aligned with the General Data Protection Regulation (GDPR), where applicable</li>
              <li>Professional confidentiality obligations applicable to advisory firms</li>
            </ul>
            <p className="mb-4">
              By accessing or using our Website, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">2. Scope</h2>
            <p className="mb-4">This Privacy Policy applies to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Personal Information provided directly by you</li>
              <li>Information collected through your interaction with our Website</li>
              <li>Information collected in the course of providing professional services</li>
            </ul>
            <p className="mb-4">This Policy does not apply to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Aggregated or anonymized data that does not identify individuals</li>
              <li>Third-party websites or services not controlled by PUMEC</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">3. Collection of Personal Information</h2>
            <p className="mb-4">You may access our Website without providing Personal Information.</p>
            <p className="mb-4">However, we may collect Personal Information when you:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Contact us via forms, email, or phone</li>
              <li>Request information about our services</li>
              <li>Subscribe to insights or updates</li>
              <li>Engage with us professionally</li>
            </ul>
            <p className="mb-4">Types of Personal Information collected may include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Organization and designation</li>
              <li>Any other information voluntarily provided</li>
            </ul>
            <p className="mb-4">We may also collect limited technical data such as:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Website usage patterns (via cookies or similar technologies)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">4. Use of Personal Information</h2>
            <p className="mb-4">We process Personal Information for legitimate business purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Responding to inquiries and service requests</li>
              <li>Delivering professional advisory services</li>
              <li>Managing client relationships</li>
              <li>Improving Website functionality and user experience</li>
              <li>Sharing insights, updates, and relevant service information (subject to applicable laws)</li>
              <li>Complying with legal and regulatory obligations</li>
            </ul>
            <p className="mb-4">We do not use Personal Information for purposes incompatible with those stated above.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">5. Confidentiality and Disclosure</h2>
            <p className="mb-4">PUMEC maintains strict confidentiality standards consistent with professional advisory practices.</p>
            <p className="mb-4">We do not disclose Personal Information except:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>To employees, partners, or affiliates on a need-to-know basis</li>
              <li>To trusted service providers bound by confidentiality obligations</li>
              <li>Where required by law, regulation, or competent authority</li>
            </ul>
            <p className="mb-4">All recipients of Personal Information are required to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Maintain confidentiality</li>
              <li>Use information solely for authorized purposes</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">6. Cross-Border Data Transfers</h2>
            <p className="mb-4">
              As an international advisory firm, PUMEC may process or transfer Personal Information across jurisdictions.
              Where such transfers occur, we implement appropriate safeguards to ensure that Personal Information remains protected in accordance with applicable data protection laws.
            </p>
            <p className="mb-4">
              By providing your Personal Information, you acknowledge and consent to such transfers, where permitted by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">7. Data Security</h2>
            <p className="mb-4">We implement appropriate technical, administrative, and physical safeguards to protect Personal Information against:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Unauthorized access</li>
              <li>Loss or misuse</li>
              <li>Alteration or disclosure</li>
            </ul>
            <p className="mb-4">
              While we strive to protect Personal Information, no system can be guaranteed to be completely secure. Accordingly, we cannot provide absolute assurance of security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">8. Data Retention</h2>
            <p className="mb-4">We retain Personal Information only for as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Fulfill the purposes outlined in this Policy</li>
              <li>Comply with legal, regulatory, or professional requirements</li>
            </ul>
            <p className="mb-4">Thereafter, data is securely deleted or anonymized.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">9. Your Rights</h2>
            <p className="mb-4">Subject to applicable laws, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Access your Personal Information</li>
              <li>Request correction or update</li>
              <li>Request deletion (where applicable)</li>
              <li>Object to or restrict processing</li>
              <li>Withdraw consent (where processing is based on consent)</li>
            </ul>
            <p className="mb-4">To exercise your rights, please contact us using the details below.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">10. Cookies and Website Tracking</h2>
            <p className="mb-4">Our Website may use cookies or similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Enhance user experience</li>
              <li>Analyze website traffic</li>
              <li>Improve functionality</li>
            </ul>
            <p className="mb-4">You may control cookie preferences through your browser settings.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">11. Third-Party Links</h2>
            <p className="mb-4">Our Website may contain links to third-party websites.</p>
            <p className="mb-4">
              PUMEC is not responsible for the privacy practices or content of such websites. We recommend reviewing their privacy policies before providing any Personal Information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">12. Communications and Opt-Out</h2>
            <p className="mb-4">We may send you updates or insights relevant to our services.</p>
            <p className="mb-4">You may opt out of such communications at any time by:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Using the unsubscribe link (if available), or</li>
              <li>Contacting us directly</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">13. Updates to this Privacy Policy</h2>
            <p className="mb-4">PUMEC may update this Privacy Policy periodically to reflect:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Changes in legal or regulatory requirements</li>
              <li>Updates to our practices</li>
            </ul>
            <p className="mb-4">The updated version will be posted on this page with a revised "Last Updated" date.</p>
          </div>

          <div className="bg-[#F4F6F8] p-8 rounded-lg border-t-4 border-[#F57C00]">
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">14. Contact Us</h2>
            <p className="mb-4">For any questions, requests, or concerns regarding this Privacy Policy or your Personal Information, please contact:</p>
            <div className="text-gray-800">
              <p className="font-bold mb-1">PUMEC Consultants Private Limited</p>
              <p className="mb-1">📧 <a href="mailto:info@pumec.com" className="text-[#F57C00] hover:underline">info@pumec.com</a></p>
              <p>📍 India</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">15. Last Updated</h2>
            <p className="text-gray-600 font-bold">April 2026</p>
          </div>

        </div>
      </AnimatedSection>
    </main>
  );
}