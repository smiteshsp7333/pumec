import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Use & Legal Disclaimer | PUMEC Consultants Pvt Ltd",
  description: "Terms of Use and Legal Disclaimer for PUMEC Consultants Private Limited.",
};

export default function TermsOfUsePage() {
  return (
    <main className="flex-1 bg-[#F4F6F8]">
      {/* Hero Section */}
      <section className="bg-[#1F3A5F] text-white pt-24 pb-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#F57C00] font-bold tracking-widest uppercase text-sm mb-4 block">Legal & Compliance</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-4">
            Terms of Use / Legal Disclaimer
          </h1>
          <p className="text-lg text-gray-300 font-sans">
            PUMEC Consultants Private Limited
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-gray-700 font-sans leading-relaxed space-y-10">

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using this website (the "Website"), you agree to be bound by these Terms of Use ("Terms").
              If you do not agree with these Terms, you should not access or use the Website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">2. Nature of Information</h2>
            <p className="mb-4">The content provided on this Website is for general informational purposes only.</p>
            <p className="mb-4">It is not intended to constitute, and should not be relied upon as:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Legal advice</li>
              <li>Tax advice</li>
              <li>Accounting advice</li>
              <li>Regulatory or professional advice</li>
            </ul>
            <p className="mb-4">
              Users should seek specific professional advice from qualified advisors at PUMEC Consultants Private Limited ("PUMEC") or other appropriate professionals before making any decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">3. No Professional Relationship</h2>
            <p className="mb-4">Use of this Website, including submission of inquiries or communications, does not create:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>A client–advisor relationship</li>
              <li>A fiduciary relationship</li>
              <li>Any form of professional engagement</li>
            </ul>
            <p className="mb-4">A formal engagement with PUMEC arises only upon execution of a written engagement letter.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">4. Accuracy and Completeness</h2>
            <p className="mb-4">
              While PUMEC endeavors to ensure that the information on the Website is accurate and up to date, the Website content is provided on an "as is" and "as available" basis.
            </p>
            <p className="mb-4">PUMEC makes no representations or warranties, express or implied, regarding:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Accuracy</li>
              <li>Completeness</li>
              <li>Reliability</li>
              <li>Timeliness</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">To the fullest extent permitted by applicable law, PUMEC, its:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Directors</li>
              <li>Partners</li>
              <li>Employees</li>
              <li>Affiliates</li>
              <li>Agents</li>
              <li>Service providers</li>
            </ul>
            <p className="mb-4">shall not be liable for any loss or damage of any kind arising from or in connection with:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Use of or reliance on the Website</li>
              <li>Any errors or omissions in the content</li>
              <li>Interruption or unavailability of the Website</li>
              <li>Any third-party content or links</li>
            </ul>
            <p className="mb-4">This includes, without limitation:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Direct, indirect, incidental, consequential, or punitive damages</li>
              <li>Loss of data, profits, or business opportunities</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">6. No Warranties</h2>
            <p className="mb-4">The Website and its content are provided without warranties of any kind, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Freedom from viruses or harmful components</li>
            </ul>
            <p className="mb-4">Users are responsible for implementing appropriate safeguards.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">7. Intellectual Property Rights</h2>
            <p className="mb-4">All content on this Website, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Text</li>
              <li>Graphics</li>
              <li>Logos</li>
              <li>Design</li>
              <li>Layout</li>
              <li>Documents</li>
            </ul>
            <p className="mb-4">is the property of PUMEC Consultants Private Limited, unless otherwise stated, and is protected under applicable intellectual property laws.</p>
            
            <p className="mb-2 font-bold text-gray-800">Permitted Use:</p>
            <p className="mb-4">Users may:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>View, download, and print content for personal, non-commercial use only</li>
            </ul>

            <p className="mb-2 font-bold text-gray-800">Restricted Use:</p>
            <p className="mb-4">Users may not:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Modify, reproduce, distribute, or exploit content</li>
              <li>Use content for commercial purposes</li>
              <li>Remove copyright or proprietary notices</li>
            </ul>
            <p className="mb-4">without prior written consent from PUMEC.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">8. Trademarks</h2>
            <p className="mb-4">"PUMEC Consultants Private Limited" and associated logos are proprietary marks of PUMEC.</p>
            <p className="mb-4">They may not be used, reproduced, or displayed without prior written authorization.</p>
            <p className="mb-4">All other trademarks appearing on the Website belong to their respective owners.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">9. Third-Party Links</h2>
            <p className="mb-4">This Website may contain links to external websites for user convenience.</p>
            <p className="mb-4">PUMEC:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Does not control such websites</li>
              <li>Is not responsible for their content, accuracy, or practices</li>
            </ul>
            <p className="mb-4">Accessing third-party websites is at the user's own risk.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">10. Website Availability and Security</h2>
            <p className="mb-4">PUMEC does not guarantee that the Website will be:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Uninterrupted</li>
              <li>Error-free</li>
              <li>Secure</li>
            </ul>
            <p className="mb-4">While reasonable measures are taken, users acknowledge that internet-based services inherently carry risks.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">11. User Conduct</h2>
            <p className="mb-4">Users agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Use the Website for unlawful purposes</li>
              <li>Attempt to gain unauthorized access to systems</li>
              <li>Interfere with Website functionality</li>
              <li>Upload malicious or harmful content</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">12. Indemnification</h2>
            <p className="mb-4">Users agree to indemnify and hold harmless PUMEC and its representatives from any claims, liabilities, damages, or expenses arising from:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Violation of these Terms</li>
              <li>Misuse of the Website</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">13. Governing Law and Jurisdiction</h2>
            <p className="mb-4">These Terms shall be governed by and construed in accordance with the laws of India.</p>
            <p className="mb-4">Any disputes arising shall be subject to the exclusive jurisdiction of the courts located in India.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">14. Changes to Terms</h2>
            <p className="mb-4">PUMEC reserves the right to modify these Terms at any time.</p>
            <p className="mb-4">Updated Terms will be posted on this page, and continued use of the Website constitutes acceptance of such changes.</p>
          </div>

          <div className="bg-[#F4F6F8] p-8 rounded-lg border-t-4 border-[#F57C00]">
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">15. Contact Us</h2>
            <p className="mb-4">For any questions regarding these Terms, please contact:</p>
            <div className="text-gray-800">
              <p className="font-bold mb-1">PUMEC Consultants Private Limited</p>
              <p>📧 <a href="mailto:info@pumec.com" className="text-[#F57C00] hover:underline">info@pumec.com</a></p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">16. Last Updated</h2>
            <p className="text-gray-600 font-bold">April 2026</p>
          </div>

        </div>
      </section>
    </main>
  );
}