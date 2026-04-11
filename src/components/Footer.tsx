"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Linkedin = ({ size = 18, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>);
const Twitter = ({ size = 18, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>);
const Youtube = ({ size = 18, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1A1.7 1.7 0 0 1 4.2 5.5h15.6a1.7 1.7 0 0 1 1.7 1.6v9.8a1.7 1.7 0 0 1-1.7 1.6H4.2A1.7 1.7 0 0 1 2.5 16.9V7.1z"/><path d="m9.5 14.5 6-4-6-4v8z"/></svg>);

const faqs = [
  {
    question: "What is PUMEC's core consulting mission?",
    answer: "PUMEC Consultants is dedicated to empowering ambitious organizations with strategic financial audits, striving to make a positive impact in the business trajectories of our clients through precision and deep regulatory expertise."
  },
  {
    question: "How can I partner with your advisory team?",
    answer: "You can reach out to us via our Contact Options or book a direct consultation online. We typically begin with a discovery call to understand your organization's unique challenges."
  },
  {
    question: "What sectors do you specialize in?",
    answer: "We carry three decades of trust across multiple sectors, especially focusing on corporate enterprises, international startups, and domestic manufacturing compliant with GST."
  },
  {
    question: "How does the statutory audit process work?",
    answer: "Our statutory audit process begins with comprehensive risk assessments. We meticulously review financial statements, adhering strictly to the latest national and international compliance frameworks."
  },
  {
    question: "Do you offer dedicated international tax support?",
    answer: "Yes, our team holds deep regulatory expertise in handling international taxation, transfer pricing, and cross-border financial strategies to significantly reduce compliance friction."
  }
];

export default function Footer() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <footer className="relative bg-[#050505] text-[#f2f2f2] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none md:w-[1200px] max-w-full"
           style={{ background: "radial-gradient(ellipse at top, rgba(255,255,255,0.05) 0%, rgba(5,5,5,0) 70%)" }} />

      <div className="container-custom px-4 md:px-8 pt-24 pb-12 relative z-10 max-w-6xl mx-auto">
        
        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          <div>
            <span className="inline-block text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Questions your might<br />love to ask, we have<br />answered
            </h2>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-md">
              Delve into the Details with Our Frequently Asked Questions Section — Your Comprehensive Guide to Understanding PUMEC Mission, Contributions, and Ways to Get Involved.
            </p>
          </div>

          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/20">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className={`text-sm font-medium ${openFaq === index ? 'text-white' : 'text-white/80 hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={16} 
                    className={`text-white/50 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-white/50 text-sm font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-column Links */}
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-8 mb-20">
          
          {/* Logo & Social Setup */}
          <div className="min-w-[240px]">
            <Link href="/" className="inline-block mb-6">
              <Image src="/pu_logo.png" alt="PUMEC Logo" width={140} height={40} unoptimized className="h-8 w-auto" />
            </Link>
            <div className="flex items-center gap-4 mt-4">
               <a href="#" className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors">
                 <Linkedin size={16} strokeWidth={1.5} />
               </a>
               <a href="#" className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors">
                 <Twitter size={16} strokeWidth={1.5} />
               </a>
               <a href="#" className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors">
                 <Youtube size={16} strokeWidth={1.5} />
               </a>
            </div>
          </div>

          <div className="flex flex-wrap md:justify-end gap-16 lg:gap-32 w-full">
            {/* Website Links */}
            <div>
              <h4 className="text-white font-medium mb-6 text-sm">Website</h4>
              <ul className="space-y-4 text-xs font-medium tracking-wide">
                <li><Link href="/services" className="text-white/50 hover:text-white transition-colors block">Services</Link></li>
                <li><Link href="/insights" className="text-white/50 hover:text-white transition-colors block">Insights</Link></li>
                <li><Link href="/careers" className="text-white/50 hover:text-white transition-colors block">Team</Link></li>
                <li><Link href="/contact" className="text-white/50 hover:text-white transition-colors block">Pricing</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-medium mb-6 text-sm">Company</h4>
              <ul className="space-y-4 text-xs font-medium tracking-wide">
                <li><Link href="/contact" className="text-white/50 hover:text-white transition-colors block">Contact</Link></li>
                <li><Link href="/about" className="text-white/50 hover:text-white transition-colors block">About</Link></li>
                <li><Link href="#" className="text-white/50 hover:text-white transition-colors block">FAQ</Link></li>
                <li><Link href="/careers" className="text-white/50 hover:text-white transition-colors block">Career</Link></li>
              </ul>
            </div>

            {/* Others */}
            <div>
              <h4 className="text-white font-medium mb-6 text-sm">Others</h4>
              <ul className="space-y-4 text-xs font-medium tracking-wide">
                <li><Link href="#" className="text-white/50 hover:text-white transition-colors block">Terms of service</Link></li>
                <li><Link href="#" className="text-white/50 hover:text-white transition-colors block">Privacy</Link></li>
                <li><Link href="#" className="text-white/50 hover:text-white transition-colors block">404 page</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex items-center justify-center text-[11px] font-medium tracking-widest text-white/40 uppercase text-center">
           <p>(c) {new Date().getFullYear()} PUMEC Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
