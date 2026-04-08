"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Vikram Sethi",
    role: "CEO, TechVantage Solutions",
    quote: "PUMEC has been our strategic partner for over a decade. Their expertise in international taxation and compliance was pivotal during our global expansion. Truly a Big-4 level service with a personal touch.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
  },
  {
    name: "Ananya Maheswari",
    role: "CFO, Global Retail Corp",
    quote: "The team at PUMEC is incredibly proactive. They don't just solve problems; they anticipate them. Their audit reports are thorough, precise, and add genuine value to our decision-making process.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
  },
  {
    name: "Rajesh Khanna",
    role: "Founder, GreenEnergy Systems",
    quote: "As a startup, we needed more than just an accountant; we needed a financial architect. PUMEC helped us structure our series A funding and ensured every regulatory box was checked perfectly.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-border-subtle/30">
      {/* 3. SECTION ALTERNATION: white + subtle gradient tint */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.02),transparent_70%)] pointer-events-none z-0" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-navy font-bold tracking-widest uppercase text-xs mb-3 block">
              Voices of Trust
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-navy leading-tight tracking-tight">
              What Our Clients Say
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
             <div className="flex items-center gap-4">
               <div className="flex -space-x-3">
                 {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-bg-gray overflow-hidden">
                      <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="avatar" width={40} height={40} />
                    </div>
                 ))}
               </div>
               <span className="text-sm font-medium text-text-muted">
                 Trusted by <span className="font-bold text-navy">2,500+</span> global leaders
               </span>
             </div>
          </motion.div>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="relative bg-white border border-border-subtle/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 rounded-2xl p-8 lg:p-10 transition-all duration-500 group flex flex-col h-full overflow-hidden"
            >
              {/* 5. CARD BACKGROUNDS: Gradient edge highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              <div className="relative z-10 flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="relative z-10 text-navy text-lg leading-relaxed font-normal mb-8 flex-1 italic">
                &quot;{t.quote}&quot;
              </blockquote>

              <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-border-subtle/50">
                <div className="w-12 h-12 rounded-full bg-white overflow-hidden border border-border-subtle hover:border-accent-blue/40 transition-colors">
                  <Image src={t.image} alt={t.name} width={48} height={48} />
                </div>
                <div>
                  <h4 className="text-navy font-bold text-sm tracking-wide">{t.name}</h4>
                  <p className="text-text-muted text-xs font-medium uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
