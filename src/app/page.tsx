import AnimatedSection from '../components/AnimatedSection';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Building, Globe, 
  ArrowRightLeft, Shield, Briefcase, Scale, Laptop, Landmark, 
  Factory, HeartPulse, ShoppingCart, Star, Zap, Users, ShieldCheck, MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: "India Business Consulting Services | Tax, FEMA, Transfer Pricing & Advisory | PUMEC Consultants Pvt Ltd",
  description: "Leading business consulting firm in India offering tax advisory, FEMA compliance, transfer pricing, and corporate advisory services. Trusted partner for multinational companies entering and expanding in India.",
  keywords: "India business consulting, consulting firms India, tax advisory India, international tax India, FEMA compliance India, transfer pricing India, corporate advisory India, transaction advisory India, India market entry consulting, cross-border advisory India, regulatory compliance India, M&A advisory India, global consulting India, business setup India, foreign investment India, RBI compliance India, tax consultants India, professional services India",
};

export default function HomePage() {
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "PUMEC Consultants Pvt Ltd",
    "image": "https://www.pumec.com/logo.png",
    "description": "We are a premier provider of business consulting services in India, offering specialized expertise in tax advisory, international tax, FEMA compliance, transfer pricing, and corporate advisory services.",
    "areaServed": "India",
    "serviceType": "Business Consulting, Tax Advisory, FEMA Compliance, Transfer Pricing, Corporate Advisory"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are business consulting services in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Business consulting services in India include tax advisory, regulatory compliance, transfer pricing, and corporate advisory for companies operating or entering India."
        }
      },
      {
        "@type": "Question",
        "name": "What is FEMA compliance in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FEMA compliance in India refers to adherence to foreign exchange regulations governed by RBI for cross-border transactions."
        }
      },
      {
        "@type": "Question",
        "name": "Why is transfer pricing important in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Transfer pricing ensures intercompany transactions follow arm’s length standards and comply with Indian tax regulations."
        }
      }
    ]
  };

  return (
    <main className="flex-1 bg-white w-full">
      {/* Inject SEO Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <AnimatedSection className="bg-[#1F3A5F] text-white pt-32 pb-28 px-6 lg:px-12 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/photo-1460925895917-afdab827c52f.avif" alt="Business Consulting in India" fill className="object-cover opacity-30 mix-blend-luminosity" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F3A5F] via-[#1F3A5F]/95 to-[#1F3A5F]/80"></div>
        </div>

        {/* Abstract shapes for premium consulting look */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay z-0"></div>
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 opacity-20 z-0">
          <div className="w-[500px] h-[500px] bg-[#F57C00] rounded-full blur-[100px]"></div>
        </div>
        <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 opacity-20 z-0">
          <div className="w-[600px] h-[600px] bg-[#2FA4A9] rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F57C00] mr-2 animate-pulse"></span>
            <span className="text-white/90 text-xs font-semibold tracking-[0.15em] uppercase">
              India Business Consulting Services
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-heading font-extrabold leading-[1.1] mb-8 tracking-tight">
            Leading Business Consulting Firm <br className="hidden lg:block"/> in India for <span className="text-[#F57C00]">Global Companies</span>
          </h1>
          
          <h2 className="text-lg md:text-2xl text-gray-300 font-sans font-normal max-w-3xl lg:max-w-2xl leading-relaxed mb-12 border-l-2 border-[#2FA4A9]/50 pl-6 lg:ml-0">
            End-to-end advisory in Tax, FEMA, Transfer Pricing, and Corporate Strategy, architected for multinational growth and compliance.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full sm:w-auto">
            <Link href="/contact" className="group inline-flex justify-center items-center bg-[#F57C00] hover:bg-[#E65100] text-white px-8 py-[18px] rounded-[4px] font-semibold text-base transition-all duration-300 shadow-lg shadow-[#F57C00]/20 hover:shadow-[#F57C00]/40">
              Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#services" className="group inline-flex justify-center items-center bg-transparent border border-white/20 hover:border-white hover:bg-white/5 text-white px-8 py-[18px] rounded-[4px] font-semibold text-base transition-all duration-300 backdrop-blur-sm">
              Explore Our Expertise
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Intro / About Section */}
      <AnimatedSection className="pt-28 pb-32 px-6 lg:px-12 bg-white relative z-20">
        <div className="max-w-[72rem] mx-auto text-gray-700 font-sans leading-[1.8] space-y-8 flex flex-col items-center">
          <div className="w-[2px] h-16 bg-gradient-to-b from-[#1F3A5F]/5 to-[#1F3A5F]/40 mx-auto rounded mb-8 -mt-24 pointer-events-none"></div>
          
          <h3 className="text-2xl md:text-3xl lg:text-[40px] font-heading font-semibold text-[#1F3A5F] max-w-4xl text-center leading-[1.3] tracking-tight">
            PUMEC Consultants Pvt Ltd is a premier provider of <span className="text-[#F57C00]">business consulting services</span> in India.
          </h3>
          
          <p className="text-lg md:text-xl font-normal text-gray-500 max-w-3xl text-center leading-relaxed">
            Offering highly specialized expertise in tax advisory, international tax, FEMA compliance, transfer pricing, and corporate advisory services to multinational companies, investors, and growing enterprises.
          </p>
          
          <div className="h-px w-32 bg-gray-200 mt-12 mb-8 relative">
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full border-2 border-[#1F3A5F] bg-white"></div>
          </div>
          
          <p className="text-[17px] text-gray-400 font-medium max-w-2xl text-center tracking-wide uppercase italic">
            Navigating complex regulatory environments while optimizing performance, compliance, and growth.
          </p>
        </div>
      </AnimatedSection>

      {/* Core Services Grid */}
      <AnimatedSection id="services" className="py-24 px-6 lg:px-12 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2FA4A9] font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1F3A5F] uppercase">Comprehensive Advisory Services</h2>
            <div className="w-16 h-1 bg-[#F57C00] mx-auto rounded mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Service 1 */}
            <div className="bg-white p-8 lg:p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2FA4A9] transition-all group flex flex-col h-full">
              <Building className="w-12 h-12 text-[#F57C00] mb-6" />
              <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 group-hover:text-[#2FA4A9] transition-colors">
                India Market Entry & Expansion Experts
              </h2>
              <p className="text-gray-600 mb-6 flex-grow">
                Expanding into India requires a clear strategy, strong regulatory understanding, and efficient execution. Our India market entry consulting services are designed to help global companies establish and scale operations seamlessly.
              </p>
              <div className="bg-[#F4F6F8] p-5 rounded-lg mb-6">
                <p className="font-semibold text-[#1F3A5F] mb-3">We provide:</p>
                <ul className="space-y-2">
                  {["Strategic India entry strategy advisory", "End-to-end business setup in India", "Foreign investment advisory in India", "Regulatory and operational alignment"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#F57C00] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#4A5A6A] font-medium mb-6 italic">Our expertise ensures smooth entry and sustainable growth in the Indian market.</p>
              <Link href="/services/india-entry" className="mt-auto inline-flex items-center text-[#1F3A5F] font-bold hover:text-[#F57C00] group-hover:translate-x-2 transition-transform">
                Read More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 lg:p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2FA4A9] transition-all group flex flex-col h-full">
              <Globe className="w-12 h-12 text-[#F57C00] mb-6" />
              <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 group-hover:text-[#2FA4A9] transition-colors">
                Comprehensive Tax & International Tax Advisory in India
              </h2>
              <p className="text-gray-600 mb-6 flex-grow">
                Tax efficiency and compliance are critical for global businesses. Our tax advisory services in India and international tax advisory services in India help organizations manage complex tax structures and cross-border transactions.
              </p>
              <div className="bg-[#F4F6F8] p-5 rounded-lg mb-6">
                <p className="font-semibold text-[#1F3A5F] mb-3">Our services include:</p>
                <ul className="space-y-2">
                  {["International tax planning in India", "Cross-border tax structuring", "DTAA advisory and tax optimization", "Corporate and indirect tax advisory"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#F57C00] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#4A5A6A] font-medium mb-6 italic">We ensure compliance while maximizing tax efficiency.</p>
              <Link href="/services/international-tax" className="mt-auto inline-flex items-center text-[#1F3A5F] font-bold hover:text-[#F57C00] group-hover:translate-x-2 transition-transform">
                Read More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 lg:p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2FA4A9] transition-all group flex flex-col h-full">
              <ArrowRightLeft className="w-12 h-12 text-[#F57C00] mb-6" />
              <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 group-hover:text-[#2FA4A9] transition-colors">
                Transfer Pricing Advisory & Compliance in India
              </h2>
              <p className="text-gray-600 mb-6 flex-grow">
                We offer specialized transfer pricing advisory services in India, helping companies comply with regulations and optimize intercompany pricing structures in India.
              </p>
              <div className="bg-[#F4F6F8] p-5 rounded-lg mb-6">
                <p className="font-semibold text-[#1F3A5F] mb-3">Our solutions include:</p>
                <ul className="space-y-2">
                  {["Transfer pricing documentation in India", "Benchmarking and FAR analysis", "Transfer pricing compliance and audit support", "OECD and BEPS-aligned advisory"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#F57C00] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#4A5A6A] font-medium mb-6 italic">We minimize risk and ensure full compliance with transfer pricing regulations in India.</p>
              <Link href="/services/transfer-pricing" className="mt-auto inline-flex items-center text-[#1F3A5F] font-bold hover:text-[#F57C00] group-hover:translate-x-2 transition-transform">
                Read More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 lg:p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2FA4A9] transition-all group flex flex-col h-full">
              <Shield className="w-12 h-12 text-[#F57C00] mb-6" />
              <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 group-hover:text-[#2FA4A9] transition-colors">
                FEMA & Regulatory Compliance Services in India
              </h2>
              <p className="text-gray-600 mb-6 flex-grow">
                Navigating India’s foreign exchange regulations requires expert guidance. Our FEMA compliance services in India and RBI compliance advisory ensure seamless cross-border transactions.
              </p>
              <div className="bg-[#F4F6F8] p-5 rounded-lg mb-6">
                <p className="font-semibold text-[#1F3A5F] mb-3">We provide:</p>
                <ul className="space-y-2">
                  {["FEMA advisory services in India", "FDI and ODI compliance", "RBI approvals and filings", "Foreign exchange compliance in India"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#F57C00] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#4A5A6A] font-medium mb-6 italic">Our proactive approach ensures regulatory alignment and risk mitigation.</p>
              <Link href="/services/fema-advisory" className="mt-auto inline-flex items-center text-[#1F3A5F] font-bold hover:text-[#F57C00] group-hover:translate-x-2 transition-transform">
                Read More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 lg:p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2FA4A9] transition-all group flex flex-col h-full">
              <Briefcase className="w-12 h-12 text-[#F57C00] mb-6" />
              <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 group-hover:text-[#2FA4A9] transition-colors">
                Corporate & Transaction Advisory Services
              </h2>
              <p className="text-gray-600 mb-6 flex-grow">
                We deliver high-impact corporate advisory services in India and transaction advisory services, supporting mergers, acquisitions, and strategic investments.
              </p>
              <div className="bg-[#F4F6F8] p-5 rounded-lg mb-6">
                <p className="font-semibold text-[#1F3A5F] mb-3">Our expertise includes:</p>
                <ul className="space-y-2">
                  {["M&A advisory in India", "Due diligence services in India", "Transaction structuring and deal advisory", "Corporate restructuring and investment advisory"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#F57C00] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#4A5A6A] font-medium mb-6 italic">We help businesses execute transactions with confidence and efficiency.</p>
              <Link href="/services/corporate-transaction" className="mt-auto inline-flex items-center text-[#1F3A5F] font-bold hover:text-[#F57C00] group-hover:translate-x-2 transition-transform">
                Read More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 lg:p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2FA4A9] transition-all group flex flex-col h-full">
              <Scale className="w-12 h-12 text-[#F57C00] mb-6" />
              <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-4 group-hover:text-[#2FA4A9] transition-colors">
                Litigation & Dispute Resolution Advisory
              </h2>
              <p className="text-gray-600 mb-6 flex-grow">
                Our litigation and dispute resolution services in India provide strategic support in handling tax and regulatory disputes.
              </p>
              <div className="bg-[#F4F6F8] p-5 rounded-lg mb-6">
                <p className="font-semibold text-[#1F3A5F] mb-3">We offer:</p>
                <ul className="space-y-2">
                  {["Tax litigation advisory in India", "Transfer pricing litigation support", "FEMA and regulatory dispute resolution", "Tribunal representation and appeals"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#F57C00] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#4A5A6A] font-medium mb-6 italic">We focus on minimizing risks and achieving favorable outcomes.</p>
              <Link href="/services/litigation-dispute" className="mt-auto inline-flex items-center text-[#1F3A5F] font-bold hover:text-[#F57C00] group-hover:translate-x-2 transition-transform">
                Read More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute -left-40 top-20 w-96 h-96 bg-[#2FA4A9]/40 rounded-full blur-[120px] mix-blend-multiply opacity-20 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#2FA4A9] font-bold tracking-[0.2em] uppercase text-[11px] mb-4 block">The PUMEC Advantage</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#1F3A5F] tracking-tight">Why Choose PUMEC</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#1F3A5F] to-[#2FA4A9] mx-auto rounded mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              {
                icon: <Star className="w-7 h-7 text-[#2FA4A9]" strokeWidth={1.5} />,
                title: "Comprehensive Expertise",
                desc: "Full-service business consulting firm in India delivering tailored solutions."
              },
              {
                icon: <Globe className="w-7 h-7 text-[#2FA4A9]" strokeWidth={1.5} />,
                title: "Global Perspective",
                desc: "Strong experience in structuring cross-border advisory and international tax."
              },
              {
                icon: <Zap className="w-7 h-7 text-[#2FA4A9]" strokeWidth={1.5} />,
                title: "Execution Excellence",
                desc: "Strategy-first approach coupled with precise on-ground implementation."
              },
              {
                icon: <Users className="w-7 h-7 text-[#2FA4A9]" strokeWidth={1.5} />,
                title: "Client-Centric Focus",
                desc: "Bespoke advisory tightly aligned with your specific business goals."
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative bg-white p-10 border border-gray-100 hover:border-transparent rounded-sm hover:-translate-y-2 transition-all duration-300 z-10">
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-b from-[#2FA4A9]/20 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px] -z-10"></div>
                <div className="absolute inset-0 bg-white rounded-sm -z-10 pointer-events-none shadow-sm group-hover:shadow-2xl transition-shadow duration-300"></div>
                
                <div className="w-16 h-16 rounded-full bg-[#F2F5F8] flex items-center justify-center mb-8 border border-gray-200/50 group-hover:border-[#2FA4A9]/30 group-hover:bg-[#2FA4A9]/5 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-[19px] font-heading font-bold text-[#1F3A5F] mb-4 tracking-tight leading-snug">{feature.title}</h3>
                <p className="text-gray-500 font-sans text-[15px] leading-relaxed">{feature.desc}</p>
                <div className="h-0.5 w-0 bg-[#F57C00] group-hover:w-8 transition-all duration-300 mt-8 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Industries We Serve */}
      <AnimatedSection className="py-32 px-6 lg:px-12 bg-[#09131E] text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/photo-1554224155-6726b3ff858f.avif" alt="Industries We Serve" fill className="object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-[#09131E]/90 backdrop-blur-[2px]"></div>
        </div>

        {/* Abstract background */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none z-0"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#1F3A5F] rounded-full blur-[100px] opacity-50 translate-x-1/3 translate-y-1/3 pointer-events-none z-0"></div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col flex-wrap md:flex-row md:items-end justify-between font-heading mb-20 gap-8 border-b-2 border-white/5 pb-12">
            <div>
              <span className="text-[#F57C00] font-bold tracking-[0.2em] uppercase text-[11px] mb-4 block">Sector Specialization</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">Industries We Serve</h2>
            </div>
            <div className="w-10 h-1 bg-[#2FA4A9] rounded hidden md:block mb-3"></div>
            <p className="text-gray-400 text-[15px] font-sans max-w-sm md:text-right leading-relaxed border-l border-white/10 pl-5">
              Providing highly specialized consulting in India across distinct, fast-growing global industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mt-16">
            {[
              { name: "Technology & IT Services", icon: <Laptop className="w-8 h-8 text-[#2FA4A9]" strokeWidth={1} /> },
              { name: "Financial Services & Fintech", icon: <Landmark className="w-8 h-8 text-[#2FA4A9]" strokeWidth={1} /> },
              { name: "Manufacturing & Industrial", icon: <Factory className="w-8 h-8 text-[#2FA4A9]" strokeWidth={1} /> },
              { name: "Healthcare & Pharma", icon: <HeartPulse className="w-8 h-8 text-[#2FA4A9]" strokeWidth={1} /> },
              { name: "E-commerce & Retail", icon: <ShoppingCart className="w-8 h-8 text-[#2FA4A9]" strokeWidth={1} /> }
            ].map((industry, i) => (
              <div key={i} className="group relative border border-white/10 hover:border-white/20 bg-[#1F3A5F]/10 hover:bg-[#1F3A5F]/40 p-8 flex flex-col items-center justify-center text-center rounded-[2px] transition-all duration-500 overflow-hidden min-h-[220px]">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#2FA4A9]/20 to-transparent rounded-full blur-xl translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">{industry.icon}</div>
                <span className="text-sm tracking-wide font-sans font-medium text-gray-200 group-hover:text-white transition-colors leading-[1.4]">{industry.name}</span>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#F57C00] group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-32 px-6 lg:px-12 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 text-[#1F3A5F]">
             <span className="text-[#2FA4A9] font-bold tracking-[0.2em] uppercase text-[11px] mb-4 block">Knowledge Base</span>
             <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight">Frequently Asked Questions</h2>
             <div className="w-16 h-1 bg-gradient-to-r from-[#1F3A5F] to-[#2FA4A9] mx-auto rounded mt-8"></div>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "What are business consulting services in India?",
                a: "Business consulting services in India include tax advisory, regulatory compliance, transfer pricing, and corporate advisory for companies operating or entering India."
              },
              {
                q: "What is FEMA compliance in India?",
                a: "FEMA compliance in India refers to adherence to foreign exchange regulations governed by RBI for cross-border transactions."
              },
              {
                q: "Why is transfer pricing important in India?",
                a: "Transfer pricing ensures intercompany transactions follow arm’s length standards and comply with Indian tax regulations."
              }
            ].map((faq, i) => (
              <div key={i} className="group bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                {/* Accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2FA4A9] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                
                <h3 className="text-lg font-heading font-bold text-[#1F3A5F] mb-4 pr-8 leading-snug flex items-start">
                  <span className="text-[#F57C00] font-mono font-bold mr-4 text-xl opacity-70">0{i+1}.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-500 font-sans text-[15px] leading-relaxed pl-10 md:pl-12 border-l-2 border-gray-100 ml-2 group-hover:border-[#F57C00]/30 transition-colors">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Internal Linking Area */}
      <AnimatedSection className="py-16 bg-white border-y border-gray-100 relative overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <p className="text-gray-400 font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Explore Our Core Services Areas</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm md:text-[15px]">
            <Link href="/services/india-entry" className="text-[#1F3A5F] hover:text-[#2FA4A9] font-medium transition-colors border-b border-transparent hover:border-[#2FA4A9]">Market Entry & Expansion</Link>
            <span className="text-gray-300/50 hidden md:inline">/</span>
            <Link href="/services/international-tax" className="text-[#1F3A5F] hover:text-[#2FA4A9] font-medium transition-colors border-b border-transparent hover:border-[#2FA4A9]">International Tax & Structuring</Link>
            <span className="text-gray-300/50 hidden md:inline">/</span>
            <Link href="/services/transfer-pricing" className="text-[#1F3A5F] hover:text-[#2FA4A9] font-medium transition-colors border-b border-transparent hover:border-[#2FA4A9]">Transfer Pricing Advisory</Link>
            <span className="text-gray-300/50 hidden md:inline">/</span>
            <Link href="/services/fema-advisory" className="text-[#1F3A5F] hover:text-[#2FA4A9] font-medium transition-colors border-b border-transparent hover:border-[#2FA4A9]">FEMA & Regulatory Compliance</Link>
            <span className="text-gray-300/50 hidden md:inline">/</span>
            <Link href="/services/corporate-transaction" className="text-[#1F3A5F] hover:text-[#2FA4A9] font-medium transition-colors border-b border-transparent hover:border-[#2FA4A9]">Corporate & Transaction</Link>
            <span className="text-gray-300/50 hidden md:inline">/</span>
            <Link href="/services/litigation-dispute" className="text-[#1F3A5F] hover:text-[#2FA4A9] font-medium transition-colors border-b border-transparent hover:border-[#2FA4A9]">Litigation & Dispute</Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action Section */}
      <AnimatedSection className="bg-[#1F3A5F] text-white py-32 px-6 lg:px-12 text-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/photo-1507679799987-c73779587ccf.avif" alt="Partner with PUMEC" fill className="object-cover opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F] via-[#1F3A5F]/90 to-[#1F3A5F]/80"></div>
        </div>

        {/* Dynamic Background */}
        <div className="absolute w-[800px] h-[800px] bg-[#2FA4A9] rounded-full blur-[150px] opacity-30 -top-40 -left-40 pointer-events-none mix-blend-screen z-0"></div>
        <div className="absolute w-[800px] h-[800px] bg-[#F57C00] rounded-full blur-[150px] opacity-20 -bottom-40 -right-40 pointer-events-none mix-blend-screen z-0"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[#F57C00] font-bold tracking-[0.2em] uppercase text-[11px] mb-6 block">Ready to Scale?</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-8 text-white leading-[1.1] tracking-tight">
            Looking for expert business<br className="hidden md:block"/> consulting services in India?
          </h2>
          <p className="text-lg md:text-xl text-gray-300/90 mb-12 font-sans leading-relaxed max-w-3xl mx-auto">
             Partner with PUMEC Consultants Pvt Ltd for reliable tax advisory, FEMA compliance, transfer pricing, and corporate advisory services in India.
          </p>
          <div className="flex flex-col items-center">
             <Link href="/contact" className="group inline-flex items-center justify-center bg-[#F57C00] hover:bg-[#E65100] text-white px-10 py-4 font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(245,124,0,0.5)] hover:-translate-y-1 mb-8 rounded-[2px] overflow-hidden relative">
                <span className="relative z-10 flex items-center">
                  Schedule a consultation today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
             </Link>
             <p className="text-[#2FA4A9] font-bold text-[13px] tracking-widest uppercase border-t border-[#2FA4A9]/20 pt-8 mt-2 inline-block px-12">
                Accelerate your India growth journey
             </p>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
