"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, MapPin } from "lucide-react";

const Linkedin = ({ size = 18, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>);
const Twitter = ({ size = 18, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>);
const Youtube = ({ size = 18, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1A1.7 1.7 0 0 1 4.2 5.5h15.6a1.7 1.7 0 0 1 1.7 1.6v9.8a1.7 1.7 0 0 1-1.7 1.6H4.2A1.7 1.7 0 0 1 2.5 16.9V7.1z"/><path d="m9.5 14.5 6-4-6-4v8z"/></svg>);

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-[#f2f2f2] overflow-hidden border-t border-white/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none md:w-[1200px] max-w-full"
           style={{ background: "radial-gradient(ellipse at top, rgba(255,255,255,0.05) 0%, rgba(5,5,5,0) 70%)" }} />

      <div className="container-custom px-4 md:px-8 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          {/* Main Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image src="/pu_logo.png" alt="PUMEC Logo" width={150} height={40} unoptimized />
            </Link>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-sm mb-8">
              Empowering ambitious organizations with strategic financial audits, taxation intelligence, and corporate growth advisory.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:scale-105 transition-all">
                 <Linkedin size={18} strokeWidth={1.5} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:scale-105 transition-all">
                 <Twitter size={18} strokeWidth={1.5} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:scale-105 transition-all">
                 <Youtube size={18} strokeWidth={1.5} />
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/services" className="text-white/50 hover:text-white transition-colors">Statutory Audit</Link></li>
              <li><Link href="/services" className="text-white/50 hover:text-white transition-colors">Direct Taxation</Link></li>
              <li><Link href="/services" className="text-white/50 hover:text-white transition-colors">GST Compliance</Link></li>
              <li><Link href="/services" className="text-white/50 hover:text-white transition-colors">Corporate Advisory</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Firm</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/about" className="text-white/50 hover:text-white transition-colors">Our Legacy</Link></li>
              <li><Link href="/careers" className="text-white/50 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/insights" className="text-white/50 hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="text-white/50 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
             <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Reach Out</h4>
             <ul className="space-y-4 text-sm font-light">
               <li className="flex items-start gap-3 text-white/50">
                  <MapPin size={16} className="shrink-0 mt-0.5 opacity-60" />
                  <span>104, Plot 35, Sector 11<br />Dwarka, New Delhi 110075</span>
               </li>
               <li className="flex items-center gap-3 text-white/50">
                  <Phone size={16} className="shrink-0 opacity-60" />
                  <a href="tel:+919811XXXXX" className="hover:text-white transition-colors">+91 9811X XXXXX</a>
               </li>
               <li className="flex items-center gap-3 text-white/50">
                  <Mail size={16} className="shrink-0 opacity-60" />
                  <a href="mailto:info@pumec.com" className="hover:text-white transition-colors">info@pumec.com</a>
               </li>
             </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 lg:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
             <h4 className="text-white font-medium mb-2">Join our network</h4>
             <p className="text-white/50 text-sm font-light">Sign up for monthly tax updates and exclusive briefings.</p>
          </div>
          <form className="flex w-full md:w-auto relative group" onSubmit={(e)=>e.preventDefault()}>
             <input type="email" placeholder="Your best email" className="w-full md:w-[320px] bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors font-light" />
             <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-black px-5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors">
                Subscribe
             </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-white/40">
           <p>&copy; {new Date().getFullYear()} PUMEC Consultants. All rights reserved.</p>
           <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
