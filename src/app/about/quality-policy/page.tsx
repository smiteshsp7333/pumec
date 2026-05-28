"use client";

import React from "react";
import { motion } from "framer-motion";

export default function QualityPolicyPage() {
  const standards = [
    "Commitment to excellence in service delivery",
    "Continuous process improvement",
    "Strict adherence to international accounting standards",
    "Regular internal and external professional audits",
    "Ongoing team training and certification"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#050505] text-white pt-40 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Quality Policy</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Uncompromising standards for uncompromising global success.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-4">Our Commitment</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              We are committed to providing services that consistently meet or exceed our clients' expectations and comply with all applicable professional standards and regulatory requirements.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our quality management system is designed to ensure continuous improvement in our processes, empowering our team to deliver accurate, timely, and reliable solutions across all our service lines globally.
            </p>
          </div>
          
          <div className="flex-1 bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Key Pillars of Quality</h3>
            <ul className="space-y-4">
              {standards.map((std, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 text-gray-700 font-medium"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm mt-0.5">✓</span>
                  <span>{std}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
