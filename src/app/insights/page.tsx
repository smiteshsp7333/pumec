"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, ChevronRight, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function InsightsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#fcfcfc] text-[#050505] relative overflow-hidden">
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(5,5,5,0) 70%)" }} />
      <AnimatedSection className="container-custom px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-xs font-semibold tracking-widest uppercase mb-6">INSIGHTS & NEWS</span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-black">
              Our Latest <br /><span className="text-black/50">Thoughts</span>
            </h1>
            <p className="text-black/60 text-xl font-light max-w-2xl">
              Explore articles, news, and insights directly from our partners on regulatory changes, audit standards, and corporate growth strategies.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-black/[0.02] border border-black/5 rounded-[32px] overflow-hidden group hover:bg-black/[0.04] transition-colors flex flex-col">
              <div className="h-48 bg-black/5 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-black/40 text-xs font-medium uppercase tracking-wider mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> Oct 12, 2023</span>
                  <span>Tax</span>
                </div>
                <h3 className="text-xl font-medium text-black mb-4 leading-snug group-hover:text-black/90 transition-colors">
                  Navigating the Complexities of Cross-Border Taxation
                </h3>
                <p className="text-black/50 text-sm font-light leading-relaxed mb-8 flex-1">
                  An in-depth look at recent Double Taxation Avoidance Agreements (DTAA) updates and how they impact multinational enterprises.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 text-black text-sm font-medium hover:gap-3 transition-all">
                  Read Article <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
}
