import { Metadata } from 'next';
import Link from 'next/link';
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
      <section className="bg-[#1F3A5F] text-white pt-28 pb-24 px-6 lg:px-12 relative overflow-hidden">
        {/* Abstract shapes for premium consulting look */}
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 opacity-10">
          <div className="w-96 h-96 bg-[#F57C00] rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 opacity-10">
          <div className="w-96 h-96 bg-[#2FA4A9] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center lg:text-left">
          <span className="text-[#F57C00] font-bold tracking-widest uppercase text-sm md:text-base mb-6 block lg:inline-block">
            India Business Consulting Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6">
            Leading Business Consulting Firm in India for Global Companies
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 font-sans font-medium max-w-3xl lg:mx-0 mx-auto leading-relaxed mb-10 border-l-4 border-[#2FA4A9] pl-6 py-2">
            End-to-End Advisory in Tax, FEMA, Transfer Pricing, and Corporate Strategy
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/contact" className="inline-flex justify-center items-center bg-[#F57C00] hover:bg-[#E65100] text-white px-8 py-4 rounded-md font-bold text-lg transition-transform hover:-translate-y-1">
              Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="#services" className="inline-flex justify-center items-center bg-transparent border-2 border-white hover:bg-white hover:text-[#1F3A5F] text-white px-8 py-4 rounded-md font-bold text-lg transition-all">
              Explore Our Expertise
            </Link>
          </div>
        </div>
      </section>

      {/* Intro / About Section */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-gray-700 font-sans leading-relaxed space-y-6 text-center md:text-left">
          <p className="text-lg md:text-xl font-medium text-[#1F3A5F]">
            PUMEC Consultants Pvt Ltd is a premier provider of business consulting services in India, offering specialized expertise in tax advisory, international tax, FEMA compliance, transfer pricing, and corporate advisory services in India. We support multinational companies, investors, and growing enterprises with strategic, regulatory, and operational solutions.
          </p>
          <div className="w-24 h-1 bg-[#F57C00] mx-auto md:mx-0 rounded my-8"></div>
          <p className="text-gray-600">
            As a trusted partner for India market entry consulting and cross-border advisory services, we help businesses navigate India’s complex regulatory environment while optimizing performance, compliance, and growth.
          </p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section id="services" className="py-24 px-6 lg:px-12 bg-[#F4F6F8]">
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
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1F3A5F] uppercase">Why Choose PUMEC Consultants Pvt Ltd</h2>
            <div className="w-16 h-1 bg-[#2FA4A9] mx-auto rounded mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="w-10 h-10 text-[#F57C00] mb-4" />,
                title: "Comprehensive Expertise",
                desc: "Full-service business consulting firm in India"
              },
              {
                icon: <Globe className="w-10 h-10 text-[#F57C00] mb-4" />,
                title: "Global Perspective",
                desc: "Strong experience in cross-border advisory and international tax"
              },
              {
                icon: <Zap className="w-10 h-10 text-[#F57C00] mb-4" />,
                title: "Execution Excellence",
                desc: "Strategy + implementation approach"
              },
              {
                icon: <Users className="w-10 h-10 text-[#F57C00] mb-4" />,
                title: "Client-Centric Solutions",
                desc: "Tailored advisory aligned with business goals"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-[#0D1B2A] text-white p-8 rounded-xl shadow-lg border-b-4 border-[#2FA4A9] hover:-translate-y-2 transition-transform">
                {feature.icon}
                <h3 className="text-xl font-heading font-bold text-[#F4F6F8] mb-3">{feature.title}</h3>
                <p className="text-gray-400 font-sans">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 lg:px-12 bg-[#1F3A5F] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase">Industries We Serve</h2>
            <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">We provide consulting services in India across multiple industries:</p>
            <div className="w-16 h-1 bg-[#F57C00] mx-auto rounded mt-6"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {[
              { name: "Technology & IT Services", icon: <Laptop className="w-8 h-8" /> },
              { name: "Financial Services & Fintech", icon: <Landmark className="w-8 h-8" /> },
              { name: "Manufacturing & Industrial", icon: <Factory className="w-8 h-8" /> },
              { name: "Healthcare & Pharmaceuticals", icon: <HeartPulse className="w-8 h-8" /> },
              { name: "E-commerce & Retail", icon: <ShoppingCart className="w-8 h-8" /> }
            ].map((industry, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center bg-[#284877] p-6 rounded-lg w-48 hover:bg-[#F57C00] transition-colors shadow-lg">
                <div className="bg-white/10 p-4 rounded-full mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-center font-bold text-sm md:text-base leading-tight">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#F4F6F8]">
        <div className="max-w-4xl mx-auto">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1F3A5F] uppercase">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-[#2FA4A9] mx-auto rounded mt-6"></div>
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
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#F57C00]">
                <h3 className="text-xl font-bold text-[#1F3A5F] mb-3 flex items-start">
                  <ShieldCheck className="w-6 h-6 text-[#2FA4A9] mr-3 shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-gray-700 pl-9 font-sans">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking Area */}
      <section className="py-12 bg-white border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#4A5A6A] font-semibold mb-6 uppercase tracking-wider text-sm">Explore Our Core Services Areas:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <Link href="/services/india-entry" className="text-[#1F3A5F] hover:text-[#F57C00] font-medium underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Market Entry & Expansion Advisory</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/international-tax" className="text-[#1F3A5F] hover:text-[#F57C00] font-medium underline underline-offset-4 decoration-[#2FA4A9] transition-colors">International Tax & Structuring</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/transfer-pricing" className="text-[#1F3A5F] hover:text-[#F57C00] font-medium underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Transfer Pricing Advisory</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/fema-advisory" className="text-[#1F3A5F] hover:text-[#F57C00] font-medium underline underline-offset-4 decoration-[#2FA4A9] transition-colors">FEMA & Regulatory Compliance</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/corporate-transaction" className="text-[#1F3A5F] hover:text-[#F57C00] font-medium underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Corporate & Transaction Advisory</Link>
            <span className="text-gray-300 hidden md:inline">|</span>
            <Link href="/services/litigation-dispute" className="text-[#1F3A5F] hover:text-[#F57C00] font-medium underline underline-offset-4 decoration-[#2FA4A9] transition-colors">Litigation & Dispute Resolution</Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-[#1F3A5F] to-[#0D1B2A] text-white py-24 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
            Looking for expert business consulting services in India?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-sans leading-relaxed">
             Partner with PUMEC Consultants Pvt Ltd for reliable tax advisory, FEMA compliance, transfer pricing, and corporate advisory services in India.
          </p>
          <div className="flex flex-col items-center">
             <Link href="/contact" className="inline-flex items-center bg-[#F57C00] hover:bg-[#E65100] text-white px-10 py-5 rounded-md font-bold text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-2 mb-6">
                Schedule a consultation today
             </Link>
             <p className="text-[#2FA4A9] font-bold text-lg tracking-wide uppercase">
                And accelerate your India growth journey
             </p>
          </div>
        </div>
      </section>
    </main>
  );
}
