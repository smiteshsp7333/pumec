"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function TestimonialsClient({ testimonialsData }: { testimonialsData: any[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-[#fcfcfc] text-[#050505] relative overflow-hidden border-b border-black/5">
      <div className="container-custom relative z-10 px-4 md:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-xs font-semibold tracking-widest uppercase mb-6">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl lg:text-[48px] font-medium leading-[1.2] tracking-tight text-black/90">
              Discover what our clients have to say about their experience partnering with PUMEC
            </h2>
          </motion.div>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonialsData.slice(0,3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-black/[0.02] border border-black/5 hover:bg-black/[0.04] rounded-3xl p-8 lg:p-10 transition-colors duration-500 flex flex-col h-full"
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-lg text-black mb-1">{t.name}</h4>
                  <p className="text-black/40 text-sm uppercase tracking-wider font-light">{t.designation}</p>
                </div>
              </div>

              <blockquote className="text-black/70 text-base leading-relaxed font-light mb-8 flex-1">
                {t.message}
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
