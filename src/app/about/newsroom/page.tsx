"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function NewsroomPage() {
  const articles = [
    { date: "Oct 24, 2025", category: "Press Release", title: "Expansion into APAC Region Successful", desc: "A major milestone reached as we officially open three new offices in Singapore, Tokyo, and Sydney." },
    { date: "Sep 15, 2025", category: "Company News", title: "New Global Payroll Solution Launched", desc: "Our unified payroll software solution successfully launched globally, reducing cross-border complexity for enterprise clients." },
    { date: "Aug 02, 2025", category: "Awards", title: "Recognized as Top Global Employer", desc: "We are proud to have been recognized as a top employer in the professional services category by the Global Business Council." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#050505] text-white pt-40 pb-20 px-4 md:px-8 border-b-8 border-blue-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Newsroom</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Stay informed with the latest news, press releases, and announcements.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Latest Updates</h2>
          {articles.map((item, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 group hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4 text-sm font-semibold tracking-wide">
                <span className="text-blue-600 uppercase">{item.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                <a href="#">{item.title}</a>
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {item.desc}
              </p>
              <a href="#" className="font-bold text-blue-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                Read Full Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </motion.article>
          ))}
        </div>
        
        <div className="lg:col-span-1 border-l-2 border-gray-100 pl-0 lg:pl-12 space-y-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900 border-b-2 border-gray-900 inline-block pb-2">Media & PR</h3>
            <p className="text-gray-600 mb-6">For media inquiries, please connect with our public relations team.</p>
            <a href="mailto:pr@company.com" className="bg-[#050505] text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition block text-center shadow-lg">
              Contact PR Team
            </a>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Subscribe</h3>
            <p className="text-gray-600 mb-6">Get the latest news directly in your inbox.</p>
            <input type="email" placeholder="Your Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-200 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
