"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    alert("Consultation request received! Our partners will be in touch shortly.");
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#fcfcfc] text-[#050505] relative overflow-hidden">
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(5,5,5,0) 70%)" }} />
      <section className="container-custom px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-xs font-semibold tracking-widest uppercase mb-6">CONTACT US</span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-black">
              Let's Discuss Your <br /><span className="text-black/50">Strategic Growth</span>
            </h1>
            <p className="text-black/60 text-xl font-light">
              Whether you need end-to-end statutory compliance, rigorous financial audits, or CFO advisory—our partners are ready to assist you.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col gap-8">
            <div className="bg-black/[0.02] border border-black/5 rounded-3xl p-8 flex gap-6">
              <div className="w-12 h-12 rounded-full bg-black/5 shrink-0 flex items-center justify-center text-black/80 border border-black/10">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-medium text-black mb-2">Headquarters</h3>
                <p className="text-black/50 text-sm font-light">104, Plot 35, Ashoka Enclave,<br />Sector 11 Dwarka, New Delhi<br />110075, India</p>
              </div>
            </div>
            <div className="bg-black/[0.02] border border-black/5 rounded-3xl p-8 flex gap-6">
              <div className="w-12 h-12 rounded-full bg-black/5 shrink-0 flex items-center justify-center text-black/80 border border-black/10">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-medium text-black mb-2">Direct Lines</h3>
                <p className="text-black/70 text-sm font-light mb-1">+91 9811X XXXXX</p>
              </div>
            </div>
            <div className="bg-black/[0.02] border border-black/5 rounded-3xl p-8 flex gap-6">
              <div className="w-12 h-12 rounded-full bg-black/5 shrink-0 flex items-center justify-center text-black/80 border border-black/10">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <div>
                 <h3 className="text-xl font-medium text-black mb-2">Email Desks</h3>
                 <p className="text-black/70 text-sm font-light">info@pumec.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-black/[0.02] border border-black/5 rounded-[40px] p-8 sm:p-12 relative overflow-hidden">
             <h3 className="text-3xl font-medium text-black mb-10">Request Consultation</h3>
             <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm text-black/50 uppercase">Full Name *</label>
                    <input required type="text" className="w-full bg-transparent border-b border-black/10 py-3 text-black outline-none font-light" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm text-black/50 uppercase">Company</label>
                    <input type="text" className="w-full bg-transparent border-b border-black/10 py-3 text-black outline-none font-light" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm text-black/50 uppercase">Email *</label>
                    <input required type="email" className="w-full bg-transparent border-b border-black/10 py-3 text-black outline-none font-light" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm text-black/50 uppercase">Phone</label>
                    <input type="tel" className="w-full bg-transparent border-b border-black/10 py-3 text-black outline-none font-light" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm text-black/50 uppercase">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-black/10 py-3 text-black outline-none font-light resize-none" />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-white text-black font-medium disabled:opacity-70 px-10 py-5 rounded-full hover:scale-105 transition-transform mt-4">
                  {isSubmitting ? "Processing..." : "Submit Request"}
                </button>
             </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
