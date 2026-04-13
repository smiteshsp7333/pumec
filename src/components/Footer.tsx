import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1F3A5F] text-white">
      {/* Top Main Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 border-b border-white/10">
        
        {/* Block 1: Firm Overview (Takes up 2 cols) */}
        <div className="lg:col-span-2 pr-0 lg:pr-8">
          <Link href="/" className="inline-block mb-6 bg-white p-3 rounded shadow-sm">
            <h2 className="font-heading font-extrabold text-2xl tracking-tight leading-none mb-1">
              <span className="text-[#1F3A5F]">P</span>
              <span className="text-[#2FA4A9]">U</span>
              <span className="text-[#F57C00]">M</span>
              <span className="text-[#4A5A6A]">E</span>
              <span className="text-[#0D1B2A]">C</span>
            </h2>
            <div className="flex flex-col">
               <span className="text-[9px] font-bold text-[#1F3A5F] uppercase tracking-wider leading-tight">Consultants</span>
               <span className="text-[8px] font-semibold text-[#4A5A6A] leading-tight">Pvt Ltd</span>
            </div>
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans pr-4">
            International advisory firm specializing in India entry strategy, international taxation, cross-border structuring, transfer pricing, and regulatory advisory.
            <br className="mb-3" />
            We support multinational companies and investors in establishing and managing compliant, tax-efficient operations in India.
          </p>
          <div className="mt-8 border-t border-white/10 pt-6">
            <h4 className="text-xs uppercase tracking-widest text-[#2FA4A9] font-bold mb-3">Global Reach</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Serving clients across:<br/>
              USA <span className="mx-1 opacity-50">|</span> UK <span className="mx-1 opacity-50">|</span> Europe <span className="mx-1 opacity-50">|</span> UAE <span className="mx-1 opacity-50">|</span> Singapore <span className="mx-1 opacity-50">|</span> Global Markets
            </p>
          </div>
        </div>

        {/* Block 2: Services */}
        <div>
          <h3 className="font-heading font-semibold text-[15px] mb-6 text-white tracking-wide">Services</h3>
          <ul className="space-y-3 md:space-y-4 text-sm text-gray-300 font-sans">
            <li><Link href="/services/india-entry" className="hover:text-[#F57C00] transition-colors leading-tight block">India Entry & Investment Advisory</Link></li>
            <li><Link href="/services/business-setup" className="hover:text-[#F57C00] transition-colors leading-tight block">Business Setup in India</Link></li>
            <li><Link href="/services/international-tax" className="hover:text-[#F57C00] transition-colors leading-tight block">International Tax Advisory</Link></li>
            <li><Link href="/services/cross-border" className="hover:text-[#F57C00] transition-colors leading-tight block">Cross-Border Structuring</Link></li>
            <li><Link href="/services/transfer-pricing" className="hover:text-[#F57C00] transition-colors leading-tight block">Transfer Pricing Advisory</Link></li>
            <li><Link href="/services/fema-advisory" className="hover:text-[#F57C00] transition-colors leading-tight block">FEMA & RBI Compliance</Link></li>
            <li><Link href="/services/transaction-advisory" className="hover:text-[#F57C00] transition-colors leading-tight block">Transaction Advisory (M&A Tax)</Link></li>
          </ul>
        </div>

        {/* Block 3: Solutions */}
        <div>
          <h3 className="font-heading font-semibold text-[15px] mb-6 text-white tracking-wide">Solutions</h3>
          <ul className="space-y-3 md:space-y-4 text-sm text-gray-300 font-sans">
            <li><Link href="/solutions/india-entry" className="hover:text-[#F57C00] transition-colors leading-tight block">India Entry Strategy Framework</Link></li>
            <li><Link href="/solutions/investment-structuring" className="hover:text-[#F57C00] transition-colors leading-tight block">Investment Structuring & FDI Advisory</Link></li>
            <li><Link href="/solutions/transfer-pricing" className="hover:text-[#F57C00] transition-colors leading-tight block">Transfer Pricing Compliance Framework</Link></li>
            <li><Link href="/solutions/fema" className="hover:text-[#F57C00] transition-colors leading-tight block">FEMA Regulatory Compliance System</Link></li>
            <li><Link href="/solutions/cross-border" className="hover:text-[#F57C00] transition-colors leading-tight block">Cross-Border Transaction Structuring</Link></li>
            <li><Link href="/solutions/tax" className="hover:text-[#F57C00] transition-colors leading-tight block">Tax Due Diligence & Deal Structuring</Link></li>
          </ul>
        </div>

        {/* Block 4: Industries & Insights */}
        <div>
          <h3 className="font-heading font-semibold text-[15px] mb-6 text-white tracking-wide">Industries</h3>
          <ul className="space-y-3 text-sm text-gray-300 font-sans mb-8">
            <li><Link href="/industries/tech" className="hover:text-[#F57C00] transition-colors">Technology & IT Services</Link></li>
            <li><Link href="/industries/manufacturing" className="hover:text-[#F57C00] transition-colors">Manufacturing</Link></li>
            <li><Link href="/industries/ecommerce" className="hover:text-[#F57C00] transition-colors">E-commerce & Digital</Link></li>
            <li><Link href="/industries/professional" className="hover:text-[#F57C00] transition-colors">Professional Services</Link></li>
            <li><Link href="/industries/investments" className="hover:text-[#F57C00] transition-colors">Investment & Holding Companies</Link></li>
          </ul>

          <h3 className="font-heading font-semibold text-[15px] mb-5 text-white tracking-wide">Insights</h3>
          <ul className="space-y-3 text-sm text-gray-300 font-sans mb-5">
            <li><Link href="/insights/india-entry" className="hover:text-[#2FA4A9] transition-colors">India Entry Strategy</Link></li>
            <li><Link href="/insights/international-tax" className="hover:text-[#2FA4A9] transition-colors">International Tax</Link></li>
            <li><Link href="/insights/transfer-pricing" className="hover:text-[#2FA4A9] transition-colors">Transfer Pricing</Link></li>
          </ul>
          <Link href="/insights" className="text-[#F57C00] hover:text-white transition-colors text-[13px] font-bold uppercase tracking-wider flex items-center group">
            View All Insights <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Block 5: Contact */}
        <div className="bg-[#152B4A] -mt-6 p-6 rounded-b border-t-4 border-[#F57C00] shadow-lg">
          <h3 className="font-heading font-semibold text-[15px] mb-6 text-[#2FA4A9] tracking-wide">Contact Us</h3>
          
          <ul className="space-y-5 text-sm font-sans mb-8">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-[#F57C00] mr-3 mt-0.5 shrink-0" />
              <span className="text-gray-300 leading-snug">India</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-[#F57C00] mr-3 shrink-0" />
              <a href="mailto:info@pumec.com" className="text-gray-300 hover:text-white transition-colors">info@pumec.com</a>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-[#F57C00] mr-3 shrink-0" />
              <a href="tel:+91XXXXXXXXXX" className="text-gray-300 hover:text-white transition-colors">+91-XXXXXXXXXX</a>
            </li>
          </ul>
          
           <Link href="/contact" className="w-full bg-[#F57C00] hover:bg-[#E65100] text-white px-5 py-3 rounded text-[14px] font-semibold transition-all flex items-center justify-between shadow-md hover:shadow-lg">
              Speak to a Partner 
              <span className="text-lg leading-none translate-y-[1px]">→</span>
           </Link>
        </div>
      </div>

      {/* Bottom Bar: Legal / Compliance */}
      <div className="bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-sans gap-4 md:gap-0">
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
          <div className="text-center md:text-right text-[#4A5A6A] hidden md:block">
            &copy; {new Date().getFullYear()} PUMEC Consultants Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
      
      {/* Final Tagline Strip */}
      <div className="bg-gradient-to-r from-[#2FA4A9] via-[#F57C00] to-[#1F3A5F]">
         <div className="py-[1px] opacity-80" />
      </div>
      <div className="bg-[#09131e]">
         <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 text-center">
            <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.15em] font-semibold">
              India Entry <span className="mx-2 opacity-50">|</span> International Tax <span className="mx-2 opacity-50">|</span> Cross-Border Structuring <span className="mx-2 opacity-50">|</span> Transfer Pricing <span className="mx-2 opacity-50">|</span> Regulatory Advisory
            </p>
         </div>
      </div>
    </footer>
  );
}