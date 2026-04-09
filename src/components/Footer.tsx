"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowRight, Globe } from "lucide-react";

const Linkedin = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Twitter = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Youtube = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 108.4 108.4 0 0 1 19 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 108.4 108.4 0 0 1-19 0 2 2 0 0 1-2-2z"/><path d="m10 15 5-3-5-3z"/></svg>
);

const locations = [
  {
    region: "India Offices",
    places: [
      { name: "New Delhi (HQ)", info: "Sector 18, Gurugram" },
      { name: "Mumbai", info: "BKC, Bandra East" },
      { name: "Bangalore", info: "Indiranagar" },
      { name: "Ahmedabad", info: "Prahlad Nagar" },
    ]
  },
  {
    region: "Global Desk",
    places: [
      { name: "UAE / Dubai", info: "Strategic Partner" },
      { name: "USA / New York", info: "Associate Desk" },
      { name: "United Kingdom", info: "London Liaison" },
      { name: "Singapore", info: "Regional Hub" },
    ]
  }
];

const mainLinks = [
  { label: "About Firm", href: "/about" },
  { label: "Leadership", href: "/about#team" },
  { label: "Our Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const expertise = [
  "Statutory Audit",
  "Manropenational Tax",
  "Transfer Pricing",
  "FEMA Compliance",
  "M&A Advisory",
  "Startup Setup",
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-50 overflow-hidden border-t border-slate-800/50">
      {/* Background Depth & Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/40 via-transparent to-transparent pomanrope-events-none md:w-[1200px]"></div>

      {/* 1. Header Row: Brand & Direct Access */}
      <div className="relative z-10 container-custom pt-20 pb-12 border-b border-slate-800/50">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          
          {/* Brand */}
          <div className="max-w-md">
            <Link href="/" className="mb-8 block group w-max">
              <div className="bg-slate-50/95 backdrop-blur-sm px-6 py-4 rounded-xl inline-block transition-transform duration-500 group-hover:-translate-y-1 border border-slate-200/50">
                <Image 
                  src="/pu_logo.png" 
                  alt="PUMEC Logo" 
                  width={160} 
                  height={55} 
                  className="h-10 w-auto"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-[15px] font-light leading-relaxed mb-0">
              Providing rigorous financial architecture and strategic compliance for global enterprises navigating the Indian economy.
            </p>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:gap-12">
            <a href="mailto:info@pumec.com" className="flex items-center gap-4 group">
               <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                 <Mail size={16} className="text-slate-400 group-hover:text-slate-100 transition-colors" />
               </div>
               <div>
                 <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight mb-0.5">Email Connect</span>
                 <span className="text-slate-300 font-semibold text-sm group-hover:text-slate-100 transition-colors">info@pumec.com</span>
               </div>
            </a>
            
            <a href="tel:+919876543210" className="flex items-center gap-4 group">
               <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                 <Phone size={16} className="text-slate-400 group-hover:text-slate-100 transition-colors" />
               </div>
               <div>
                 <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight mb-0.5">Direct Line</span>
                 <span className="text-slate-300 font-semibold text-sm group-hover:text-slate-100 transition-colors">+91 98XXX XXXXX</span>
               </div>
            </a>

            <div className="h-10 w-px bg-slate-800/50 hidden sm:block"></div>

            <div className="flex gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-slate-100 hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      {/* 2. Middle Row: Mega-Directory 4-Column Grid */}
      <div className="relative z-10 container-custom pt-16 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-8 items-start">
          
          {/* Col 1: About & Quick Links */}
          <div>
            <h4 className="text-slate-100 font-bold text-[11px] tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
              Corporate
            </h4>
            <ul className="space-y-4">
              {mainLinks.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-slate-400 text-sm hover:text-slate-100 flex items-center group transition-all duration-300">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Domain Expertise */}
          <div>
            <h4 className="text-slate-100 font-bold text-[11px] tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
              Expertise
            </h4>
            <ul className="space-y-4">
              {expertise.map(l => (
                <li key={l}>
                  <Link href="/services" className="text-slate-400 text-sm hover:text-slate-100 flex items-center group transition-all duration-300">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{l}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: India Desk */}
          <div>
            <h4 className="text-slate-100 font-bold text-[11px] tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
              India Offices
            </h4>
            <ul className="space-y-6">
              {locations[0].places.map((place) => (
                <li key={place.name} className="group">
                  <span className="block text-slate-300 text-sm font-medium mb-1.5">{place.name}</span>
                  <span className="block text-slate-500 text-[11px] uppercase tracking-widest">{place.info}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Global Desk */}
          <div>
            <h4 className="text-slate-100 font-bold text-[11px] tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
              Global Desk
            </h4>
            <ul className="space-y-6">
              {locations[1].places.map((place) => (
                <li key={place.name} className="group">
                  <span className="block text-slate-300 text-sm font-medium mb-1.5">{place.name}</span>
                  <span className="block text-slate-500 text-[11px] uppercase tracking-widest">{place.info}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* 3. Bottom Row: Horizontal Newsletter & Legal */}
      <div className="relative z-10 border-t border-slate-800/50 bg-slate-900/20 backdrop-blur-sm">
        
        {/* Horizontal Newsletter */}
        <div className="container-custom py-10 border-b border-slate-800/50">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 lg:p-8">
            <div className="max-w-xl">
              <h4 className="text-slate-100 font-bold text-[13px] tracking-[0.15em] uppercase mb-2 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
                </span>
                Intelligence Updates
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-0">
                Stay compliant. Receive executive summaries on monthly regulatory shifts and Indian policy changes directly to your inbox.
              </p>
            </div>
            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Work Email Address" 
                className="w-full sm:w-[280px] bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 transition-all"
              />
              <button className="bg-slate-100 text-slate-900 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-[0.1em] hover:bg-white transition-all duration-300 flex items-center justify-center shrink-0">
                Subscribe <ArrowRight size={14} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-[11px] font-medium tracking-wide mb-0">
              © {new Date().getFullYear()} <span className="text-slate-300 font-bold">PUMEC Consultants Pvt Ltd.</span> Independent Member Firm.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              {["Privacy Policy", "Terms of Service", "Sitemap", "Disclaimer"].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  className="text-slate-500 hover:text-slate-300 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}


