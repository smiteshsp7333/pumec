"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function CtaBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#050505] text-[#f2f2f2] relative overflow-hidden">
      {/* Subtle radial background glow to match template minimal style */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(5,5,5,0) 70%)" }} />
      
      <div className="container-custom relative z-10 px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center bg-white/[0.02] border border-white/5 rounded-[40px] p-12 lg:p-20 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
          
          <h2 className="text-4xl lg:text-7xl font-medium text-white leading-tight tracking-tight mb-8 relative z-10">
            Ready to Simplify <br/>
            <span className="text-white/50">Your Finances?</span>
          </h2>

          <p className="text-white/50 text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-light relative z-10">
            Schedule a free 30-minute consultation with our senior advisors. No obligations, just real answers to your most pressing financial questions.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full relative z-10"
          >
            <Link
              href="/contact"
              className="bg-white text-black font-medium text-sm px-10 py-5 rounded-full hover:scale-105 transition-transform active:scale-95 flex justify-center items-center"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:+9112345678" 
              className="bg-transparent text-white border border-white/20 font-medium text-sm px-10 py-5 rounded-full hover:bg-white/5 transition-colors flex justify-center items-center"
            >
              Call Us Now
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
