import Hero from '../components/Hero';
import ServicesClient from '../components/ServicesClient';
import WhyChooseUs from '../components/WhyChooseUs';
import Industries from '../components/Industries';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import ClientsClient from '../components/ClientsClient';
import InsightsPreview from '../components/InsightsPreview';
import AnimatedSection from '../components/AnimatedSection';

export default async function HomePage() {
  // Attempt to fetch services; fall back to local data in ServicesClient if API unavailable
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';
  let services: any[] = [];
  try {
    const res = await fetch(`${baseUrl}/services`, { next: { revalidate: 60 } });
    if (res.ok) services = await res.json();
  } catch {
    // ServicesClient has its own fallback data
  }

  const sectionDivider = (from: string, via: string, to: string) => (
    <div
      className={`w-full h-px bg-gradient-to-r from-transparent ${from} ${via} ${to} to-transparent opacity-30`}
    />
  );

  return (
    <main className="flex-1 bg-white w-full">

      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Trusted Advisory Statement — Clients logos */}
      <AnimatedSection>
        <ClientsClient />
      </AnimatedSection>

      {/* 3. Services Grid */}
      <AnimatedSection>
        <ServicesClient servicesData={services} />
      </AnimatedSection>

      {/* 4. Industries */}
      <AnimatedSection>
        <Industries />
      </AnimatedSection>

      {/* 5. Why PUMEC — Global trust section */}
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>

      {/* 6. Insights / Thought Leadership */}
      <AnimatedSection>
        <InsightsPreview />
      </AnimatedSection>

      {/* 7. FAQ */}
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>

      {/* 8. Global Client Contact CTA */}
      <AnimatedSection>
        <CTA />
      </AnimatedSection>

    </main>
  );
}
