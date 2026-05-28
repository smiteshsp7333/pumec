"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AlumniPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#050505] text-white pt-40 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="text-blue-400 font-bold tracking-wider uppercase mb-4 block">Our Network</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Alumni Program</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Once you are part of our family, you are always part of our network. Connect, learn, and grow together.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">A Global Community</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Our Alumni Program connects former employees, fostering lifelong professional relationships and networking opportunities across the globe. 
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-10">
              Join our alumni community to stay updated on company news, gain access to exclusive events, and continue collaborating with industry experts and peers.
            </p>
            
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/30 flex items-center gap-3">
              Join the Network
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2 opacity-60"></div>
            
            <div className="relative z-10 grid gap-6">
              {[
                { title: "Networking Events", icon: "🤝" },
                { title: "Industry Insights", icon: "📈" },
                { title: "Career Opportunities", icon: "💼" },
                { title: "Mentorship", icon: "🎓" }
              ].map((perk, i) => (
                <div key={i} className="flex items-center gap-6 bg-white p-5 rounded-2xl shadow-sm border border-gray-50 hover:-translate-y-1 transition">
                  <div className="text-4xl">{perk.icon}</div>
                  <div className="text-xl font-bold text-gray-900">{perk.title}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
