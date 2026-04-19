import Hero from '../components/Hero';
import ServicesClient from '../components/ServicesClient';
import WhyChooseUs from '../components/WhyChooseUs';
import Industries from '../components/Industries';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

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
      <Hero />
      
      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 max-w-[900px] flex flex-col items-center relative z-10">
          
          {/* Top Divider */}
          <div className="w-px h-16 md:h-12 bg-gray-300 mb-8 opacity-70"></div>
          
          {/* Main Headline */}
          <h2 className="text-[28px] md:text-[38px] lg:text-[42px] font-heading font-bold text-[#1F3A5F] text-center leading-[1.4] tracking-tight mb-10">
            PUMEC Consultants Pvt Ltd is a premier<br className="hidden md:block"/> provider of <span className="text-[#F57C00]">business consulting services</span> in<br className="hidden md:block"/> India.
          </h2>
          
          {/* Main Paragraph */}
          <p className="text-[16px] md:text-[18px] text-gray-500 text-center leading-[1.7] max-w-[780px] font-sans mb-12">
            Offering highly specialized expertise in tax advisory, international tax, FEMA<br className="hidden md:block"/> compliance, transfer pricing, and corporate advisory services to multinational<br className="hidden md:block"/> companies, investors, and growing enterprises.
          </p>
          
          {/* Middle Decorative Element */}
          <div className="flex items-center justify-center w-full max-w-[140px] mb-11 opacity-80">
            <div className="h-px bg-gray-100 flex-1"></div>
            <div className="w-[5px] h-[5px] rounded-full border-2 border-gray-300 bg-white mx-2"></div>
            <div className="h-px bg-gray-100 flex-1"></div>
          </div>
          
          {/* Bottom Italic Text */}
          <p className="text-[13px] md:text-[14px] text-gray-400/80 font-medium max-w-[700px] text-center tracking-[0.05em] uppercase italic">
            NAVIGATING COMPLEX REGULATORY ENVIRONMENTS WHILE OPTIMIZING<br className="hidden md:block"/> PEFORMANCE, COMPLIANCE, AND GROWTH.
          </p>
        </div>
      </section>

      <ServicesClient servicesData={services} />
      <WhyChooseUs />
      <Industries />
      <FAQ />
      <CTA />
    </main>
  );
}
