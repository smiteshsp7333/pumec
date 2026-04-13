import { Metadata } from 'next';
import Link from 'next/link';
import { 
import AnimatedSection from '@/components/AnimatedSection';
  ArrowRight, CheckCircle2, ChevronRight, Target, Compass, 
  Briefcase, Lightbulb, Users, Factory, Award, Building, Globe, Scale, LayoutGrid
} from 'lucide-react';

export const metadata: Metadata = {
  title: "About PUMEC Consultants Pvt Ltd | Leading Business Consulting Firm in India",
  description: "Learn about PUMEC Consultants Pvt Ltd, a leading business consulting firm in India offering tax advisory, FEMA compliance, transfer pricing, and corporate advisory services for global companies.",
  keywords: "about PUMEC Consultants, business consulting firm India, consulting firm India, tax consultants India, international tax advisory India, FEMA consultants India, transfer pricing consultants India, corporate advisory India, professional services firm India, cross-border advisory India, India consulting experts, financial advisory India",
};

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PUMEC Consultants Pvt Ltd",
    "url": "https://www.pumec.com",
    "logo": "https://www.pumec.com/logo.png",
    "description": "Leading business consulting firm in India offering tax advisory, FEMA compliance, transfer pricing, and corporate advisory services.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "PUMEC Consultants Pvt Ltd",
      "description": "Trusted Business Consulting Firm in India for Global and Domestic Enterprises",
      "areaServed": "India"
    }
  };

  return (
    <main className="flex-1 bg-white">
      {/* Inject SEO Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />

      {/* Hero Section */}
      <AnimatedSection className="bg-[#1F3A5F] text-white pt-24 pb-20 px-6 lg:px-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/4 opacity-20">
          <div className="w-80 h-80 bg-[#F57C00] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#F57C00] font-bold tracking-widest uppercase text-sm mb-4 block">About Our Firm</span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-6">
            About PUMEC Consultants Pvt Ltd
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed border-b border-gray-600 pb-8">
            Leading Business Consulting Firm in India
          </p>
        </div>
      </AnimatedSection>

      {/* Introduction / Overview */}
      <AnimatedSection className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-gray-700 font-sans leading-relaxed space-y-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-4 uppercase">
              Trusted Business Consulting Firm in India for Global and Domestic Enterprises
            </h2>
            <div className="w-16 h-1 bg-[#F57C00] mx-auto rounded"></div>
          </div>
          <p className="text-lg">
            <strong className="text-[#1F3A5F]">PUMEC Consultants Pvt Ltd</strong> is a leading business consulting firm in India, delivering specialized services in tax advisory, international tax advisory, FEMA compliance, transfer pricing, and corporate advisory services in India. We partner with multinational corporations, investors, and growing businesses to provide strategic, regulatory, and financial advisory solutions.
          </p>
          <p className="text-lg border-l-4 border-[#2FA4A9] pl-6 py-2 bg-[#F4F6F8]">
            With a strong focus on cross-border advisory in India and India market entry consulting, we help organizations navigate complex regulatory frameworks while ensuring compliance, efficiency, and long-term growth.
          </p>
        </div>
      </AnimatedSection>

      {/* Vision & Mission */}
      <AnimatedSection className="py-20 px-6 lg:px-12 bg-[#F4F6F8]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:border-[#1F3A5F] transition-all hover:shadow-lg group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
               <Target className="w-32 h-32 text-[#1F3A5F]" />
            </div>
            <div className="relative z-10">
              <Target className="w-12 h-12 text-[#F57C00] mb-6" />
              <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-6 uppercase">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be recognized as a trusted global consulting firm in India, delivering high-quality business consulting services in India that drive growth, ensure compliance, and create sustainable value for our clients.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-[#1F3A5F] p-10 rounded-2xl shadow-xl text-white relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
               <Compass className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10">
              <Compass className="w-12 h-12 text-[#F57C00] mb-6" />
              <h2 className="text-3xl font-heading font-bold text-white mb-6 uppercase">Our Mission</h2>
              <ul className="space-y-4">
                {[
                  "To provide best-in-class tax advisory and international tax advisory services in India",
                  "To deliver reliable FEMA compliance and regulatory advisory in India",
                  "To support businesses with expert transfer pricing advisory services in India",
                  "To enable strategic growth through corporate advisory and transaction advisory services in India"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#2FA4A9] mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Expertise */}
      <AnimatedSection className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2FA4A9] font-bold tracking-widest uppercase text-sm mb-2 block">What We Do</span>
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] uppercase mb-4">Our Core Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-sans">
              We offer a comprehensive suite of professional consulting services in India, including:
            </p>
            <div className="w-16 h-1 bg-[#F57C00] mx-auto rounded mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "1. Tax Advisory & International Tax",
                desc: "Our tax consultants in India provide expert guidance on international tax advisory, cross-border tax structuring, and tax compliance in India, helping businesses optimize tax efficiency.",
                icon: <Globe className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "2. Transfer Pricing Advisory",
                desc: "We specialize in transfer pricing advisory services in India, ensuring compliance with transfer pricing regulations in India through robust documentation and strategic planning.",
                icon: <Briefcase className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "3. FEMA & Regulatory Compliance",
                desc: "Our team provides end-to-end FEMA compliance services in India, including RBI compliance, FDI advisory, and foreign exchange compliance in India.",
                icon: <Building className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "4. Corporate & Transaction Advisory",
                desc: "We deliver expert corporate advisory services in India, including M&A advisory, due diligence services, and transaction structuring in India.",
                icon: <LayoutGrid className="w-8 h-8 text-[#F57C00] mb-4" />
              },
              {
                title: "5. Litigation & Dispute Resolution",
                desc: "We provide strategic litigation support and dispute resolution services in India, including tax litigation and regulatory dispute advisory.",
                icon: <Scale className="w-8 h-8 text-[#F57C00] mb-4" />
              }
            ].map((expertise, idx) => (
              <div key={idx} className="bg-[#F4F6F8] p-8 rounded-xl border border-gray-100 hover:shadow-lg hover:border-[#2FA4A9] transition-all">
                {expertise.icon}
                <h3 className="text-xl font-heading font-bold text-[#1F3A5F] mb-3">{expertise.title}</h3>
                <p className="text-gray-600 leading-relaxed font-sans">{expertise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Our Approach */}
      <AnimatedSection className="py-20 px-6 lg:px-12 bg-[#0D1B2A] text-white">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
             <span className="text-[#2FA4A9] font-bold tracking-widest uppercase text-sm mb-2 block">Methodology</span>
             <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white uppercase mb-6">Our Approach – Strategy + Execution</h2>
             <div className="w-16 h-1 bg-[#F57C00] rounded mb-8"></div>
             <p className="text-gray-300 text-lg leading-relaxed mb-6">
               At PUMEC Consultants Pvt Ltd, we follow a unique approach that combines strategic consulting with execution excellence. Unlike traditional advisory firms, we focus not only on providing recommendations but also on implementing solutions.
             </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <p className="font-semibold text-white mb-6 text-xl">Our approach includes:</p>
              <ul className="space-y-4">
                {[
                  "Deep understanding of India business regulations and compliance",
                  "Customized solutions aligned with client objectives",
                  "Integrated advisory across tax, regulatory, and corporate domains",
                  "Proactive risk management and compliance monitoring"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Lightbulb className="w-6 h-6 text-[#F57C00] mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us & Our Clients */}
      <AnimatedSection className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] uppercase mb-8">Why Choose PUMEC Consultants Pvt Ltd</h2>
            <div className="w-16 h-1 bg-[#2FA4A9] rounded mb-10"></div>
            <div className="space-y-6">
              {[
                {
                  title: "Expert Team",
                  desc: "Experienced professionals in business consulting, tax advisory, and regulatory compliance in India"
                },
                {
                  title: "Global Perspective",
                  desc: "Strong expertise in international tax and cross-border advisory in India"
                },
                {
                  title: "End-to-End Services",
                  desc: "Comprehensive solutions across all consulting areas"
                },
                {
                  title: "Client-Focused Approach",
                  desc: "Tailored advisory aligned with business goals"
                }
              ].map((reason, idx) => (
                <div key={idx} className="flex items-start bg-[#F4F6F8] p-5 rounded-lg border-l-4 border-[#F57C00]">
                   <Award className="w-6 h-6 text-[#1F3A5F] mr-4 flex-shrink-0" />
                   <div>
                     <strong className="text-[#1F3A5F] block mb-1 text-lg">{reason.title}</strong>
                     <span className="text-gray-600">{reason.desc}</span>
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Clients */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] uppercase mb-8">Our Clients</h2>
            <div className="w-16 h-1 bg-[#2FA4A9] rounded mb-10"></div>
            <div className="bg-white border rounded-2xl shadow-sm p-8">
              <p className="text-gray-600 mb-6 text-lg">We serve a diverse range of clients including:</p>
              <ul className="space-y-4 mb-8">
                {[
                  "Multinational corporations entering India",
                  "Foreign investors and private equity firms",
                  "Indian companies expanding globally",
                  "Startups and high-growth enterprises"
                ].map((client, idx) => (
                  <li key={idx} className="flex items-center text-lg text-gray-700 bg-[#F4F6F8] p-4 rounded-md">
                    <Users className="w-6 h-6 text-[#F57C00] mr-4 flex-shrink-0" />
                    {client}
                  </li>
                ))}
              </ul>
              <p className="text-[#1F3A5F] font-semibold italic border-l-4 border-[#F57C00] pl-4 py-2 bg-orange-50">
                Our expertise in India market entry consulting and cross-border advisory services enables us to deliver value across industries.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Industries We Serve */}
      <AnimatedSection className="py-20 px-6 lg:px-12 bg-[#F4F6F8]">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] uppercase mb-4">Industries We Serve</h2>
           <p className="text-gray-600 text-lg mb-8">We provide business consulting services in India across key sectors:</p>
           <div className="w-16 h-1 bg-[#F57C00] mx-auto rounded mb-12"></div>
           
           <div className="flex flex-wrap justify-center gap-4">
              {[
                "Technology & IT Services",
                "Financial Services & Fintech",
                "Manufacturing & Industrial",
                "Healthcare & Pharmaceuticals",
                "E-commerce & Retail"
              ].map((industry, idx) => (
                <div key={idx} className="bg-white border border-[#2FA4A9]/30 text-[#1F3A5F] font-bold px-6 py-4 rounded-full shadow-sm hover:bg-[#2FA4A9] hover:text-white transition-colors">
                  {industry}
                </div>
              ))}
           </div>
        </div>
      </AnimatedSection>

      {/* Commitment to Excellence */}
      <AnimatedSection className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] uppercase mb-6">Our Commitment to Excellence</h2>
           <div className="w-16 h-1 bg-[#2FA4A9] mx-auto rounded mb-8"></div>
           <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
             At <span className="font-bold text-[#1F3A5F]">PUMEC Consultants Pvt Ltd</span>, we are committed to delivering high-quality professional services in India with integrity, precision, and a client-centric approach. Our goal is to build long-term relationships by providing reliable consulting services in India that drive measurable results.
           </p>
        </div>
      </AnimatedSection>

      {/* Internal Linking / SEO Silo */}
      <AnimatedSection className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#4A5A6A] font-semibold mb-6 uppercase tracking-wider text-sm">Explore Our Consulting Frameworks:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Link href="/services/india-entry" className="text-[#1F3A5F] hover:text-[#F57C00] font-medium underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Market Entry & Expansion</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/international-tax" className="text-[#1F3A5F] hover:text-[#F57C00] font-medium underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Tax & Structuring Advisory</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/corporate-transaction" className="text-[#1F3A5F] hover:text-[#F57C00] font-medium underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Corporate & Transaction Advisory</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/transfer-pricing" className="text-[#1F3A5F] hover:text-[#F57C00] font-medium underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Transfer Pricing Compliance</Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action Section */}
      <AnimatedSection className="bg-gradient-to-br from-[#1F3A5F] to-[#0D1B2A] text-white py-24 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
            Looking for a trusted business consulting firm in India?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-sans leading-relaxed">
             Connect with PUMEC Consultants Pvt Ltd for expert tax advisory, FEMA compliance, transfer pricing, and corporate advisory services in India.
          </p>
          <div className="flex flex-col items-center">
             <Link href="/contact" className="inline-flex items-center bg-[#F57C00] hover:bg-[#E65100] text-white px-10 py-5 rounded-md font-bold text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-2 mb-6">
                Get in touch today
             </Link>
             <p className="text-[#2FA4A9] font-bold text-lg tracking-wide uppercase">
                To explore how we can support your business growth
             </p>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
