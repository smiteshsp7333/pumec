"use client";

import React from "react";
import { motion } from "framer-motion";

export default function UniversityPage() {
  const steps = [
    { title: "Internships", desc: "Gain hands-on experience working alongside industry experts on real global projects.", color: "bg-blue-100 text-blue-600" },
    { title: "Mentorship", desc: "Receive one-on-one guidance from leaders dedicated to helping you shape your career path.", color: "bg-purple-100 text-purple-600" },
    { title: "Workshops", desc: "Participate in skill-building sessions tailored for early-career professionals.", color: "bg-emerald-100 text-emerald-600" },
    { title: "Graduate Roles", desc: "Transition from academia to a full-time role within our global network.", color: "bg-orange-100 text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-[#050505] text-white pt-40 pb-32 px-4 md:px-8 text-center relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-blue-400 font-bold tracking-wider uppercase mb-4 block">Early Careers</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">University Programs</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Cultivating the next generation of business leaders.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:-translate-y-2 transition-transform"
            >
              <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6 text-2xl ${step.color}`}>
                {i + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-white p-12 rounded-3xl border border-gray-100 shadow-sm max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Start Your Journey</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-10">
            We partner with leading universities worldwide. Students and recent graduates can kickstart their careers with hands-on experience in a dynamic, supportive, and globally connected environment.
          </p>
          <button className="bg-[#050505] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-black transition shadow-lg inline-flex items-center gap-3">
            Explore Opportunities
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
