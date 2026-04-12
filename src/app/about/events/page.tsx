"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EventsPage() {
  const events = [
    { type: "Webinar", title: "Navigating Global Transfer Pricing", date: "May 10, 2026", time: "10:00 AM - 11:30 AM EST", status: "Open" },
    { type: "Conference", title: "International Taxation Summit", date: "June 22, 2026", location: "London, UK", status: "Register Now" },
    { type: "Seminar", title: "Optimizing Remote Workforces", date: "August 05, 2026", location: "San Francisco, CA", status: "Filling Fast" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-[#050505] text-white pt-40 pb-32 px-4 md:px-8 text-center relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-purple-400 font-bold tracking-wider uppercase mb-4 block">Connect with us</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Events</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Join us at our upcoming webinars, seminars, and global conferences.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-4 md:px-8 w-full -mt-16 relative z-20 mb-20 space-y-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((evt, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">{evt.type}</span>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider">{evt.status}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{evt.title}</h3>
                
                <div className="space-y-3 mb-8 text-gray-600 font-medium">
                  <div className="flex flex-row items-center gap-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <span>{evt.date}</span>
                  </div>
                  {evt.time && (
                    <div className="flex flex-row items-center gap-3">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>{evt.time}</span>
                    </div>
                  )}
                  {evt.location && (
                    <div className="flex flex-row items-center gap-3">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      <span>{evt.location}</span>
                    </div>
                  )}
                </div>
              </div>
              <button className="w-full bg-[#050505] text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition">
                Register Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
