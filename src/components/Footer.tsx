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
  "International Tax",
  "Transfer Pricing",
  "FEMA Compliance",
  "M&A Advisory",
  "Startup Setup",
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1F3A] text-white overflow-hidden border-t-2 border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
      {/* Background Depth & Gradients */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-blue/15 rounded-full blur-[120px] opacity-60 pointer-events-none md:w-[1200px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none"></div>

      {/* Top Footer Section: Brand & Locations */}
      <div className="relative z-10 container-custom pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="mb-10 block group">
              <div className="bg-white px-6 py-4 rounded-xl inline-block transition-transform duration-500 group-hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                <Image 
                  src="/pu_logo.png" 
                  alt="PUMEC Logo" 
                  width={160} 
                  height={55} 
                  className="h-10 w-auto"
                />
              </div>
            </Link>
            <p className="text-white/80 text-xl font-light leading-relaxed mb-12 max-w-md drop-shadow-sm">
              Providing rigorous financial architecture and strategic compliance for global enterprises navigating the Indian economy.
            </p>
            <div className="flex gap-5">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-[#0B1F3A] hover:border-white hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Locations Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {locations.map((loc) => (
              <div key={loc.region} className="relative group">
                <div className="absolute -inset-4 bg-white/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20">
                    <Globe className="text-accent-blue" size={16} />
                  </div>
                  <h4 className="text-white font-bold text-sm tracking-[0.15em] uppercase drop-shadow-sm">{loc.region}</h4>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {loc.places.map((place) => (
                    <div key={place.name} className="group/place cursor-default flex flex-col gap-1">
                      <span className="block text-white/90 font-medium group-hover/place:text-white transition-colors group-hover/place:translate-x-1 duration-300">{place.name}</span>
                      <span className="text-white/40 text-[11px] font-bold uppercase tracking-widest group-hover/place:text-accent-blue/80 transition-colors">{place.info}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Footer: 4-Column Grid */}
      <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-md pt-20 pb-20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
             
             {/* Col 1: Quick Links */}
             <div>
                <h4 className="text-white font-bold text-[11px] tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                  Quick Links
                </h4>
                <ul className="space-y-5">
                  {mainLinks.map(l => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-white/60 text-sm font-medium hover:text-white flex items-center gap-2 group transition-all duration-300">
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent-blue" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{l.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
             </div>

             {/* Col 2: Expertise */}
             <div>
                <h4 className="text-white font-bold text-[11px] tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                  Expertise
                </h4>
                <ul className="space-y-5">
                  {expertise.map(l => (
                    <li key={l}>
                      <Link href="/services" className="text-white/60 text-sm font-medium hover:text-white flex items-center gap-2 group transition-all duration-300">
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent-blue" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{l}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
             </div>

             {/* Col 3: Direct Access */}
             <div>
                <h4 className="text-white font-bold text-[11px] tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                  Direct Access
                </h4>
                <div className="space-y-8">
                   <a href="mailto:info@pumec.com" className="flex items-start gap-4 text-white/80 hover:text-white transition-colors group">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-blue/10 group-hover:border-accent-blue/30 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">
                        <Mail size={20} className="group-hover:text-accent-blue transition-colors" />
                      </div>
                      <div className="pt-1">
                        <span className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Email Connect</span>
                        <span className="font-semibold text-base tracking-wide">info@pumec.com</span>
                      </div>
                   </a>
                   <a href="tel:+919876543210" className="flex items-start gap-4 text-white/80 hover:text-white transition-colors group">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-blue/10 group-hover:border-accent-blue/30 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300">
                        <Phone size={20} className="group-hover:text-accent-blue transition-colors" />
                      </div>
                      <div className="pt-1">
                        <span className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Direct Line</span>
                        <span className="font-semibold text-base tracking-wide">+91 98XXX XXXXX</span>
                      </div>
                   </a>
                </div>
             </div>

             {/* Col 4: Newsletter (Premium Card) */}
             <div>
               <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:bg-white/[0.05] transition-colors relative overflow-hidden group h-full">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue/0 via-accent-blue to-accent-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 
                 <h4 className="text-white font-bold text-[11px] tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                   <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                   </span>
                   Newsletter
                 </h4>
                 
                 <p className="text-white/60 text-sm mb-8 leading-relaxed">
                   Stay updated with monthly regulatory shifts and crucial Indian policy changes.
                 </p>
                 
                 <div className="flex flex-col gap-4">
                   <input 
                     type="email" 
                     placeholder="Work Email Address" 
                     className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-blue/50 focus:bg-black/50 transition-all shadow-inner"
                   />
                   <button className="w-full bg-white text-[#0B1F3A] py-4 rounded-xl font-bold text-xs uppercase tracking-[0.15em] hover:bg-accent-blue hover:text-white transition-all duration-300 shadow-[0_4px_14px_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2">
                     Subscribe Now <ArrowRight size={16} />
                   </button>
                 </div>
               </div>
             </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar: Legal */}
      <div className="relative z-10 border-t border-white/5 py-8 bg-[#0B1F3A]">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[11px] font-medium tracking-wide">
            © {new Date().getFullYear()} <span className="text-white/80 font-bold">PUMEC Consultants Pvt Ltd.</span> Independent Member Firm.
          </p>
          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Service", "Sitemap", "Legal Disclaimer"].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="text-white/40 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-border-top {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </footer>
  );
}

