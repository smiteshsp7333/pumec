"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";



export default function InsightsPreviewClient({ blogsData }: { blogsData: any[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#F1F5F9]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-accent-blue font-bold tracking-widest uppercase text-xs mb-3 block">
              Knowledge & Insights
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              Stay Updated with <br /> Regulatory Shifts
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
             <Link 
               href="/insights" 
               className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm tracking-wider uppercase hover:text-accent-blue transition-colors group"
             >
               Explore All Insights
               <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
             </Link>
          </motion.div>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {blogsData.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-slate-200 flex flex-col h-full"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden shrink-0 bg-slate-100 border-b border-slate-100">
                <Image 
                  src={p.image} 
                  alt={p.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  unoptimized
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-md text-[10px] font-bold text-slate-900 uppercase tracking-widest shadow-sm border border-slate-100/50">
                    {p.category}
                  </span>
                </div>
              </div>

              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <time className="text-accent-blue text-[10px] font-bold uppercase tracking-widest mb-3 block">
                  {new Date(p.created_at || Date.now()).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-accent-blue transition-colors line-clamp-2 leading-snug">
                  <Link href={`/insights/${p.slug}`}>
                    {p.title}
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {p.excerpt}
                </p>
                <div className="mt-auto pt-2">
                  <Link 
                    href={`/insights/${p.slug}`}
                    className="inline-flex items-center gap-2 text-slate-900 text-xs font-bold uppercase tracking-widest group-hover:gap-3 group-hover:text-accent-blue transition-all"
                  >
                    Read full article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

