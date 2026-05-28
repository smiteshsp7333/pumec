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
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 lg:mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-black/40 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl lg:text-[52px] font-medium leading-[1.1] tracking-tight text-black/90">
              Discover what our clients have to say about their experience partnering with PUMEC
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block mb-4"
          >
            <div className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <Image src="/pu_logo.png" alt="PUMEC" width={140} height={45} className="h-10 w-auto" unoptimized />
            </div>
          </motion.div>
        </div>

        <div 
          ref={ref}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-8 pb-8 no-scrollbar"
        >
          {testimonialsData.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-black/[0.02] border border-black/5 hover:bg-black/[0.04] transition-colors duration-500 rounded-3xl shrink-0 w-[90%] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] snap-center"
            >
              <div className="flex flex-col items-center text-center p-10 lg:p-12 h-full">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 shadow-sm border border-black/10 bg-white">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=random&color=fff&size=128`} 
                    alt={t.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h4 className="font-serif font-medium text-xl text-black mb-1">{t.name}</h4>
                <p className="text-black/50 text-[10px] sm:text-xs uppercase tracking-widest mb-4">{t.designation}</p>
                
                <div className="flex items-center gap-1 mb-6 text-[#fbbf24]">
                   {[...Array(5)].map((_, idx) => (
                     <svg key={idx} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   ))}
                </div>

                <blockquote className="text-black/70 text-sm leading-relaxed max-w-sm">
                  {t.message}
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>
      </div>
    </section>
  );
}
