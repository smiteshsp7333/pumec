"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function CoreValuesPage() {
  const values = [
    { title: "Integrity", desc: "We conduct ourselves with the highest standards of professional behavior and ethics.", icon: "shield-check" },
    { title: "Excellence", desc: "We are committed to delivering exceptional quality in everything we do.", icon: "star" },
    { title: "Collaboration", desc: "We work together as one team to achieve the best outcomes for our clients.", icon: "users" },
    { title: "Innovation", desc: "We continuously seek new and better ways to serve our clients and improve our business.", icon: "light-bulb" },
    { title: "Respect", desc: "We value diversity and treat everyone with dignity and respect.", icon: "heart" },
    { title: "Accountability", desc: "We take responsibility for our actions and deliver on our commitments.", icon: "check-circle" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#050505] text-white pt-40 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Core Values</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              The foundational principles that guide our culture, our relationships, and the way we do business.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-[#050505] inline-block pb-2">{val.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
