"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function InsightsPreviewClient({ blogsData }: { blogsData: any[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-[#fcfcfc] text-[#050505] relative overflow-hidden border-b border-black/5">
      <div className="container-custom px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-xs font-semibold tracking-widest uppercase mb-6">
              INSIGHTS & NEWS
            </span>
            <h2 className="text-4xl lg:text-[56px] font-medium leading-[1.1] tracking-tight text-black/90">
              Stay Updated with <br /> Regulatory Shifts
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             <Link 
               href="/insights" 
               className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-black/20 hover:bg-black/10 transition-colors text-sm font-medium"
             >
               Explore All Insights
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
             </Link>
          </motion.div>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {blogsData.slice(0, 3).map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group bg-black/[0.02] border border-black/5 hover:bg-black/[0.04] transition-colors duration-500 rounded-3xl overflow-hidden flex flex-col h-full"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/5">
                <Image 
                  src={p.image || ''} 
                  alt={p.title} 
                  fill 
                  className="object-cover" 
                  unoptimized
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-[#fcfcfc]/80 backdrop-blur-md rounded-full text-[10px] font-medium text-black uppercase tracking-widest border border-black/10">
                    {p.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <time className="text-black/40 text-[10px] font-medium uppercase tracking-widest mb-4 block">
                  {new Date(p.created_at || Date.now()).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
                <h3 className="text-2xl font-medium text-black mb-4 line-clamp-2 leading-snug group-hover:text-black/80 transition-colors">
                  <Link href={`/insights/${p.slug}`}>
                    {p.title}
                  </Link>
                </h3>
                <p className="text-black/50 text-sm leading-relaxed mb-8 line-clamp-3 font-light">
                  {p.excerpt}
                </p>
                <div className="mt-auto">
                  <Link 
                    href={`/insights/${p.slug}`}
                    className="inline-flex items-center text-sm font-medium uppercase tracking-widest text-[#050505] group-hover:text-black hover:underline underline-offset-8 transition-all"
                  >
                    Read full article
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
