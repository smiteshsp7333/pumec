"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EthicsHotlinePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-[#050505] text-white pt-40 pb-32 px-4 md:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Ethics Hotline</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Speak up. We are listening. Complete confidentiality guaranteed.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="flex-1 max-w-4xl mx-auto px-4 w-full -mt-16 relative z-20 mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-center border-t-8 border-red-600"
        >
          <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full mx-auto flex items-center justify-center mb-8">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Report a Concern</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-10 max-w-2xl mx-auto">
            We are dedicated to maintaining the highest ethical standards globally. Our Ethics Hotline provides a secure and confidential channel to report any concerns regarding unethical behavior, fraud, or violations of company policies.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:1-800-000-0000" className="inline-flex items-center justify-center gap-3 bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-red-700 transition-transform hover:-translate-y-1 shadow-lg shadow-red-600/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              1-800-ETHICS-1
            </a>
            <button className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-black transition-transform hover:-translate-y-1 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Submit Online Form
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
