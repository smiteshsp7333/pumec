import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cookie Policy | PUMEC Consultants Pvt Ltd",
  description: "Cookie Policy for PUMEC Consultants Private Limited.",
};

export default function CookiePolicyPage() {
  return (
    <main className="flex-1 bg-[#F4F6F8]">
      {/* Hero Section */}
      <section className="bg-[#1F3A5F] text-white pt-24 pb-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#F57C00] font-bold tracking-widest uppercase text-sm mb-4 block">Legal & Compliance</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-4">
            Cookie Policy
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
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">1. Introduction</h2>
            <p className="mb-4">
              PUMEC Consultants Private Limited ("PUMEC", "we", "us", or "our") uses cookies and similar tracking technologies on its website (the "Website") to enhance user experience, analyze website performance, and improve our services.
            </p>
            <p className="mb-4">
              This Cookie Policy explains what cookies are, how we use them, and the choices available to you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">2. What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website.
            </p>
            <p className="mb-4">They help websites:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Recognize your device</li>
              <li>Store preferences</li>
              <li>Improve functionality and performance</li>
            </ul>
            <p className="mb-4">
              Cookies do not typically identify you personally unless you choose to provide Personal Information (for example, by submitting a contact form). In such cases, information you provide may be associated with cookie data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">3. How We Use Cookies</h2>
            <p className="mb-4">PUMEC uses cookies for the following purposes:</p>
            
            <h3 className="text-lg font-heading font-bold text-[#2FA4A9] mb-2 mt-6">Website Functionality</h3>
            <p className="mb-4">To ensure the Website operates effectively and delivers a consistent user experience.</p>
            
            <h3 className="text-lg font-heading font-bold text-[#2FA4A9] mb-2 mt-6">Performance and Analytics</h3>
            <p className="mb-4">To understand how users interact with the Website, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Navigation patterns</li>
            </ul>
            <p className="mb-4">This helps us improve content, structure, and usability.</p>
            
            <h3 className="text-lg font-heading font-bold text-[#2FA4A9] mb-2 mt-6">User Experience Enhancement</h3>
            <p className="mb-4">To remember user preferences and provide a more personalized browsing experience.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">4. Types of Cookies We May Use</h2>
            
            <h3 className="text-lg font-heading font-bold text-[#2FA4A9] mb-2 mt-4">Essential Cookies</h3>
            <p className="mb-4">Required for basic Website functionality. Without these, certain features may not work.</p>
            
            <h3 className="text-lg font-heading font-bold text-[#2FA4A9] mb-2 mt-4">Analytics Cookies</h3>
            <p className="mb-4">Used to collect aggregated, anonymous information about Website usage.</p>
            
            <h3 className="text-lg font-heading font-bold text-[#2FA4A9] mb-2 mt-4">Functional Cookies</h3>
            <p className="mb-4">Used to remember user preferences and enhance user experience.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">5. Cookies and Personal Information</h2>
            <p className="mb-4">Cookies themselves do not collect sensitive Personal Information.</p>
            <p className="mb-4">
              However, where you voluntarily provide Personal Information (e.g., through contact forms), such information may be linked with cookie data to improve service delivery and user experience.
            </p>
            <p className="mb-4">For more details, please refer to our Privacy Policy.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">6. Managing Cookies</h2>
            <p className="mb-4">Most web browsers automatically accept cookies.</p>
            <p className="mb-4">You can control or disable cookies through your browser settings. This allows you to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Block cookies</li>
              <li>Delete existing cookies</li>
              <li>Set preferences for certain websites</li>
            </ul>
            <p className="mb-4">Please note that disabling cookies may impact the functionality and performance of certain parts of the Website.</p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">7. Third-Party Cookies</h2>
            <p className="mb-4">
              PUMEC may use trusted third-party service providers (e.g., analytics tools) that place cookies on our behalf to help us understand Website usage.
            </p>
            <p className="mb-4">These third parties are required to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Use cookies only for specified purposes</li>
              <li>Maintain appropriate confidentiality and security standards</li>
            </ul>
            <p className="mb-4">
              PUMEC does not control third-party cookies and recommends reviewing their respective policies where applicable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">8. Updates to this Cookie Policy</h2>
            <p className="mb-4">PUMEC may update this Cookie Policy periodically to reflect:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Changes in technology</li>
              <li>Legal or regulatory requirements</li>
              <li>Updates to our practices</li>
            </ul>
            <p className="mb-4">
              The updated version will be posted on this page with a revised "Last Updated" date.
            </p>
          </div>

          <div className="bg-[#F4F6F8] p-8 rounded-lg border-t-4 border-[#F57C00]">
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">9. Contact Us</h2>
            <p className="mb-4">If you have any questions or concerns regarding this Cookie Policy, please contact:</p>
            <div className="text-gray-800">
              <p className="font-bold mb-1">PUMEC Consultants Private Limited</p>
              <p>📧 <a href="mailto:info@pumec.com" className="text-[#F57C00] hover:underline">info@pumec.com</a></p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4">10. Last Updated</h2>
            <p className="text-gray-600 font-bold">April 2026</p>
          </div>

        </div>
      </section>
    </main>
  );
}