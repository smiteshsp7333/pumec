import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden px-6 lg:px-12 pt-32 pb-20"
      style={{ background: 'linear-gradient(135deg, #143553 0%, #20456B 40%, #0B2136 100%)' }}
    >
      <div className="relative z-10 flex flex-col items-start text-left w-full max-w-[1240px] mx-auto">
        {/* Top Badge */}
        <div className="mb-10 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#F57C00]" />
          <span className="text-[11px] font-bold tracking-[0.15em] text-white/70p  uppercase opacity-90">
            India Business Consulting Services
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-[48px] md:text-[64px] lg:text-[74px] font-bold leading-[1.15] tracking-tight mb-8 text-white">
          Leading Business Consulting<br />
          Firm<br />
          in India for <span className="text-[#F57C00]">Global Companies</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-[18px] md:text-[22px] leading-relaxed max-w-[650px] mb-12 font-medium opacity-90">
          End-to-end advisory in Tax, FEMA, Transfer Pricing, and<br className="hidden md:block" />
          Corporate Strategy, architected for multinational growth<br className="hidden md:block" />
          and compliance.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-sm bg-[#F57C00] text-white font-bold text-[15px] hover:bg-[#e66c00] transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Schedule a Consultation <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 rounded-sm border border-white/20 text-white font-bold text-[15px] hover:bg-white/10 transition-colors w-full sm:w-auto justify-center text-center"
          >
            Explore Our Expertise
          </Link>
        </div>
      </div>
    </section>
  );
}
