"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function ClientPaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-[#050505] text-white pt-40 pb-32 px-4 md:px-8 text-center relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-emerald-400 font-bold tracking-wider uppercase mb-4 block">Secure & Fast</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Client Payment</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Make secure payments easily through our digital portal.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="flex-1 max-w-4xl mx-auto px-4 w-full -mt-16 relative z-20 mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-center border-t-8 border-emerald-500"
        >
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center mb-8">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Secure Online Payments</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-10 max-w-2xl mx-auto">
            Manage your invoices and process payments securely and efficiently through our dedicated platform. We support all major credit cards and direct bank transfers.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left shadow-sm">
              <div className="text-2xl mb-4">💳</div>
              <h3 className="font-bold text-gray-900 mb-2">Credit Card</h3>
              <p className="text-sm text-gray-500 mb-6">Pay instantly via Visa, Mastercard, or AMEX.</p>
              <button className="w-full bg-[#050505] text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                Pay by Card
              </button>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-left shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">PREFERRED</div>
              <div className="text-2xl mb-4">🏦</div>
              <h3 className="font-bold text-gray-900 mb-2">Bank Transfer</h3>
              <p className="text-sm text-gray-600 mb-6">Secure ACH or Wire transfer directly from your bank.</p>
              <button className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/30">
                Pay by Bank
              </button>
            </div>
          </div>
        </motion.div>
        
        <p className="text-center text-sm text-gray-400 mt-8 mt-4">
          By proceeding, you agree to our digital payment terms. All transactions are encrypted and secured.
        </p>
      </div>
    </div>
  );
}
