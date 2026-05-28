"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OurTeamPage() {
  const leaders = [
    { name: "Alex Martinez", role: "Managing Partner", dept: "Executive" },
    { name: "Sarah Jenkins", role: "Head of Tax", dept: "Finance" },
    { name: "David Chen", role: "Global Operations", dept: "Operations" },
    { name: "Jessica Smith", role: "Chief HR Officer", dept: "Human Capital" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#050505] text-white pt-40 pb-32 px-4 md:px-8 bg-[url('/grid.svg')] bg-center">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Our team is comprised of diverse professionals with deep expertise in international business, tax, accounting, and human resources.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 -mt-24 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group"
            >
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">{leader.dept}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{leader.name}</h3>
                <p className="text-gray-500 mt-1 font-medium">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
