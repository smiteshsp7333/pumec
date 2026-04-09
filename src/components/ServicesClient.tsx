"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function renderIcon(name: string) {
  switch (name) {
    case "ClipboardList": return <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case "Calculator": return <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>;
    case "Globe": return <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" /></svg>;
    case "Building": return <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>;
    case "TrendingUp": return <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>;
    default: return <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
  }
}


const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServicesClient({ servicesData }: { servicesData: any[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-[#F1F5F9] relative overflow-hidden border-y border-slate-200">
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mb-20"
          ref={ref}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-accent-blue" />
            <span className="text-slate-900 font-semibold tracking-widest uppercase text-xs">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-4">
            Comprehensive Services
            <br />
            For Every Need
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            From tax planning to cross-border transactions — we bring deep expertise
            to every financial challenge your business faces.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch"
        >
          {servicesData.map((s, i) => (
            <motion.div
              key={s.id}
              variants={cardVariants}
              id={`service-card-${s.id}`}
              className={`group flex flex-col h-full cursor-pointer rounded-2xl p-10 transition-all duration-300 relative overflow-hidden ${
                s.featured 
                  ? "bg-white border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(59,130,246,0.12)] -translate-y-1 z-10" 
                  : "bg-white border border-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1"
              }`}
            >
              {/* 5. CARD BACKGROUNDS: Gradient edge highlight (very faint) */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-400 relative z-10 ${
                s.featured ? "bg-blue-50 text-blue-600 border border-blue-100" : "bg-[#F8FAFC] text-slate-900 group-hover:text-blue-600 border border-slate-200"
              }`}>
                {renderIcon(s.icon)}
              </div>
              
              <h3 className={`text-xl font-bold mb-4 relative z-10 ${s.featured ? "text-slate-900" : "text-slate-900"}`}>
                {s.title}
                {s.featured && (
                  <span className="absolute -top-3 -right-2 bg-accent-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase shadow-sm">
                    Core
                  </span>
                )}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-8 relative z-10 font-medium flex-1">
                {s.description || s.desc}
              </p>
              
              <div className="flex items-center gap-2 text-slate-900 text-xs font-bold uppercase tracking-widest group-hover:text-accent-blue transition-colors duration-300">
                Learn more
                <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-20"
        >
          <a href="#contact" className="btn-secondary shadow-sm hover:shadow-md bg-white border-slate-200">
            View All Services
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

