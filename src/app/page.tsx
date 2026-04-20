import Hero from '../components/Hero';
import ServicesClient from '../components/ServicesClient';
import WhyChooseUs from '../components/WhyChooseUs';
import Industries from '../components/Industries';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import ClientsClient from '../components/ClientsClient';
import GlobalClients from '../components/GlobalClients';
import CaseStudies from '../components/CaseStudies';
import AnimatedSection from '../components/AnimatedSection';

export default async function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';
  let services = [];
  try {
    const res = await fetch(`${baseUrl}/services`, { cache: 'no-store' });
    services = await res.json();
  } catch (e) {
    console.error('Error fetching services', e);
  }

  return (
    <main className="flex-1 bg-white w-full">
      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      {/* Section Break */}
      <div className="w-full h-8 bg-gradient-to-r from-[#2FA4A9]/10 via-[#F57C00]/10 to-[#6C63FF]/10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#2FA4A9] mx-2 animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-[#F57C00] mx-2 animate-pulse delay-200" />
        <div className="w-2 h-2 rounded-full bg-[#6C63FF] mx-2 animate-pulse delay-400" />
      </div>

      <AnimatedSection>
        <ClientsClient />
      </AnimatedSection>

      {/* Section Break */}
      <div className="w-full h-8 bg-gradient-to-r from-[#F57C00]/10 via-[#2FA4A9]/10 to-[#6C63FF]/10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#F57C00] mx-2 animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-[#2FA4A9] mx-2 animate-pulse delay-200" />
        <div className="w-2 h-2 rounded-full bg-[#6C63FF] mx-2 animate-pulse delay-400" />
      </div>

      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>

      {/* Section Break */}
      <div className="w-full h-8 bg-gradient-to-r from-[#2FA4A9]/10 via-[#6C63FF]/10 to-[#F57C00]/10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#2FA4A9] mx-2 animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-[#6C63FF] mx-2 animate-pulse delay-200" />
        <div className="w-2 h-2 rounded-full bg-[#F57C00] mx-2 animate-pulse delay-400" />
      </div>

      <AnimatedSection>
        <GlobalClients />
      </AnimatedSection>

      {/* Section Break */}
      <div className="w-full h-8 bg-gradient-to-r from-[#F57C00]/10 via-[#6C63FF]/10 to-[#2FA4A9]/10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#F57C00] mx-2 animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-[#6C63FF] mx-2 animate-pulse delay-200" />
        <div className="w-2 h-2 rounded-full bg-[#2FA4A9] mx-2 animate-pulse delay-400" />
      </div>

      <AnimatedSection>
        <CaseStudies />
      </AnimatedSection>

      <AnimatedSection>
        <ServicesClient servicesData={services} />
      </AnimatedSection>

      {/* Section Break */}
      <div className="w-full h-8 bg-gradient-to-r from-[#6C63FF]/10 via-[#F57C00]/10 to-[#2FA4A9]/10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#6C63FF] mx-2 animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-[#F57C00] mx-2 animate-pulse delay-200" />
        <div className="w-2 h-2 rounded-full bg-[#2FA4A9] mx-2 animate-pulse delay-400" />
      </div>

      <AnimatedSection>
        <Industries />
      </AnimatedSection>

      {/* Section Break */}
      <div className="w-full h-8 bg-gradient-to-r from-[#F57C00]/10 via-[#2FA4A9]/10 to-[#6C63FF]/10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#F57C00] mx-2 animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-[#2FA4A9] mx-2 animate-pulse delay-200" />
        <div className="w-2 h-2 rounded-full bg-[#6C63FF] mx-2 animate-pulse delay-400" />
      </div>

      <AnimatedSection>
        <FAQ />
      </AnimatedSection>

      {/* Section Break */}
      <div className="w-full h-8 bg-gradient-to-r from-[#6C63FF]/10 via-[#F57C00]/10 to-[#2FA4A9]/10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#6C63FF] mx-2 animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-[#F57C00] mx-2 animate-pulse delay-200" />
        <div className="w-2 h-2 rounded-full bg-[#2FA4A9] mx-2 animate-pulse delay-400" />
      </div>

      <AnimatedSection>
        <CTA />
      </AnimatedSection>
    </main>
  );
}
