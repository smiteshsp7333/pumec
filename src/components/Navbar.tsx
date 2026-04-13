"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-[#1F3A5F] text-white text-xs py-2 px-6 lg:px-12 flex justify-between items-center w-full">
        <div className="hidden md:flex space-x-4 items-center font-medium opacity-90 mx-auto max-w-7xl w-full justify-center">
          <span className="hover:text-[#F57C00] transition-colors cursor-default">India Entry</span> <span className="opacity-40">|</span>
          <span className="hover:text-[#F57C00] transition-colors cursor-default">International Tax</span> <span className="opacity-40">|</span>
          <span className="hover:text-[#F57C00] transition-colors cursor-default">Cross-Border Structuring</span> <span className="opacity-40">|</span>
          <span className="hover:text-[#F57C00] transition-colors cursor-default">Transfer Pricing</span> <span className="opacity-40">|</span>
          <span className="hover:text-[#F57C00] transition-colors cursor-default">FEMA Advisory</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex justify-between items-center px-6 lg:px-12 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          {/* Letter colors: P(#1F3A5F), U(#2FA4A9), M(#F57C00), E(#4A5A6A), C(#0D1B2A) */}
          <h1 className="font-heading font-extrabold text-[32px] tracking-tight leading-none">
            <span className="text-[#1F3A5F]">P</span>
            <span className="text-[#2FA4A9]">U</span>
            <span className="text-[#F57C00]">M</span>
            <span className="text-[#4A5A6A]">E</span>
            <span className="text-[#0D1B2A]">C</span>
          </h1>
          <div className="flex flex-col ml-2 border-l-2 border-gray-200 pl-3">
             <span className="text-[10px] font-bold text-[#1F3A5F] uppercase tracking-wider leading-tight">Consultants</span>
             <span className="text-[9px] font-semibold text-[#4A5A6A] leading-tight">Pvt Ltd</span>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-bold text-[#1F3A5F]">
          <Link href="/" className="hover:text-[#F57C00] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#F57C00] transition-colors">About</Link>
          
          <div className="group relative py-4">
            <Link href="/services" className="flex items-center hover:text-[#F57C00] transition-colors">
              Services <ChevronDown className="ml-1 w-[14px] h-[14px] opacity-70" />
            </Link>
            
            {/* MEGA MENU */}
            <div className="absolute top-full -left-64 mt-0 bg-white p-8 shadow-2xl rounded-b-lg border-t-2 border-[#F57C00] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[1000px] z-50">
              <div className="grid grid-cols-4 gap-10">
                {/* Column 1: Services */}
                <div>
                  <h3 className="font-bold text-[#2FA4A9] mb-4 border-b border-gray-100 pb-2 uppercase tracking-wide text-xs">Services</h3>
                  <ul className="space-y-3 text-[14px] font-normal text-gray-600">
                    <li><Link href="/services/india-entry" className="hover:text-[#F57C00] block leading-snug">India Entry & Investment Advisory</Link></li>
                    <li><Link href="/services/international-tax" className="hover:text-[#F57C00] block leading-snug">International Tax & Cross-Border Structuring</Link></li>
                    <li><Link href="/services/transfer-pricing" className="hover:text-[#F57C00] block leading-snug">Transfer Pricing Advisory</Link></li>
                    <li><Link href="/services/fema-advisory" className="hover:text-[#F57C00] block leading-snug">FEMA & Regulatory Advisory</Link></li>
                    <li><Link href="/services/transaction-advisory" className="hover:text-[#F57C00] block leading-snug">Transaction Advisory (M&A Tax)</Link></li>
                  </ul>
                </div>
                
                {/* Column 2: Solutions */}
                <div>
                  <h3 className="font-bold text-[#2FA4A9] mb-4 border-b border-gray-100 pb-2 uppercase tracking-wide text-xs">Solutions</h3>
                  <ul className="space-y-3 text-[14px] font-normal text-gray-600">
                    <li><Link href="/solutions/india-entry" className="hover:text-[#F57C00] block leading-snug">India Market Entry Framework</Link></li>
                    <li><Link href="/solutions/structuring" className="hover:text-[#F57C00] block leading-snug">Cross-Border Structuring Framework</Link></li>
                    <li><Link href="/solutions/transfer-pricing" className="hover:text-[#F57C00] block leading-snug">Transfer Pricing Compliance Framework</Link></li>
                    <li><Link href="/solutions/fema" className="hover:text-[#F57C00] block leading-snug">FEMA Compliance & Investment Structuring</Link></li>
                    <li><Link href="/solutions/transactions" className="hover:text-[#F57C00] block leading-snug">Transaction Structuring & Due Diligence</Link></li>
                  </ul>
                </div>

                {/* Column 3: Industries */}
                <div>
                  <h3 className="font-bold text-[#2FA4A9] mb-4 border-b border-gray-100 pb-2 uppercase tracking-wide text-xs">Industries</h3>
                  <ul className="space-y-3 text-[14px] font-normal text-gray-600">
                    <li><Link href="/industries/tech" className="hover:text-[#F57C00] block leading-snug">Technology & IT Services</Link></li>
                    <li><Link href="/industries/aerospace" className="hover:text-[#F57C00] block leading-snug">Aerospace and Defence</Link></li>
                    <li><Link href="/industries/manufacturing" className="hover:text-[#F57C00] block leading-snug">Manufacturing & Industrial</Link></li>
                    <li><Link href="/industries/ecommerce" className="hover:text-[#F57C00] block leading-snug">E-commerce & Digital Businesses</Link></li>
                    <li><Link href="/industries/professional" className="hover:text-[#F57C00] block leading-snug">Professional Services</Link></li>
                    <li><Link href="/industries/investments" className="hover:text-[#F57C00] block leading-snug">Investment & Holding Structures</Link></li>
                  </ul>
                </div>

                {/* Column 4: Featured Insights */}
                <div className="bg-gray-50 -my-8 -mr-8 p-8 border-l border-gray-100">
                  <h3 className="font-bold text-[#F57C00] mb-4 border-b border-gray-200 pb-2 uppercase tracking-wide text-xs">Featured Insights</h3>
                  <ul className="space-y-4 text-[14px] font-medium text-gray-800 mb-6">
                    <li>
                      <Link href="/insights/india-entry-guide" className="hover:text-[#2FA4A9] group/item flex items-start">
                        <span className="text-[#F57C00] mr-2 text-lg leading-none">•</span>
                        <span className="group-hover/item:underline underline-offset-2">India Entry Strategy Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/transfer-pricing" className="hover:text-[#2FA4A9] group/item flex items-start">
                        <span className="text-[#F57C00] mr-2 text-lg leading-none">•</span>
                        <span className="group-hover/item:underline underline-offset-2">Transfer Pricing in India</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/fema-compliance" className="hover:text-[#2FA4A9] group/item flex items-start">
                        <span className="text-[#F57C00] mr-2 text-lg leading-none">•</span>
                        <span className="group-hover/item:underline underline-offset-2">FEMA Compliance for Foreign Companies</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights/cross-border-tax" className="hover:text-[#2FA4A9] group/item flex items-start">
                        <span className="text-[#F57C00] mr-2 text-lg leading-none">•</span>
                        <span className="group-hover/item:underline underline-offset-2">Cross-Border Tax Planning</span>
                      </Link>
                    </li>
                  </ul>
                  <Link href="/insights" className="text-[#F57C00] text-[13px] font-bold flex items-center group/link mt-auto uppercase tracking-wide tracking-widest">
                    View All Insights 
                    <span className="ml-[6px] text-lg font-normal translate-y-[1px] group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/solutions" className="hover:text-[#F57C00] transition-colors">Solutions</Link>
          <Link href="/industries" className="hover:text-[#F57C00] transition-colors">Industries</Link>
          <Link href="/insights" className="hover:text-[#F57C00] transition-colors">Insights</Link>
          <Link href="/careers" className="hover:text-[#F57C00] transition-colors">Careers</Link>
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
          <button className="text-gray-400 hover:text-[#1F3A5F] transition-colors" aria-label="Search">
            <Search className="w-[18px] h-[18px]" strokeWidth={2.5} />
          </button>
          <Link href="/contact" className="bg-[#F57C00] hover:bg-[#E65100] text-white px-6 py-[12px] rounded-[5px] text-[14px] font-semibold transition-colors flex items-center shadow-sm">
            Speak to an Expert 
            <span className="ml-2 font-normal text-lg leading-none translate-y-[-1px]">→</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-[#1F3A5F]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu (simplified for brevity) */}
      {isOpen && (
        <div className="lg:hidden bg-[#1F3A5F] text-white px-6 py-4 space-y-4">
          <Link href="/" className="block text-xl border-b border-white/20 pb-2">Home</Link>
          <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full text-xl border-b border-white/20 pb-2">
            Services <ChevronDown className="w-5 h-5"/>
          </button>
          {servicesOpen && (
            <div className="pl-4 space-y-2 py-2">
               <Link href="/services/india-entry" className="block text-gray-300">India Entry & Investment Advisory</Link>
               <Link href="/services/international-tax" className="block text-gray-300">International Tax</Link>
               <Link href="/services/transfer-pricing" className="block text-gray-300">Transfer Pricing</Link>
               <Link href="/services/fema-advisory" className="block text-gray-300">FEMA Advisory</Link>
               <Link href="/services/transaction-advisory" className="block text-gray-300">Transaction Advisory</Link>
            </div>
          )}
          <Link href="/solutions" className="block text-xl border-b border-white/20 pb-2">Solutions</Link>
          <Link href="/industries" className="block text-xl border-b border-white/20 pb-2">Industries</Link>
          <Link href="/insights" className="block text-xl border-b border-white/20 pb-2">Insights</Link>
          <Link href="/contact" className="block text-[#F57C00] font-bold text-xl pt-2">Speak to an Expert →</Link>
        </div>
      )}
    </header>
  );
}