"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  // Mock post data based on slug
  const post = {
    title: "Understanding FDI Policy Changes 2024",
    category: "Regulatory",
    date: "March 28, 2024",
    readTime: "8 min read",
    author: {
      name: "CA P.U. Mehra",
      role: "Founding Partner",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=PUMehra"
    },
    image: "https://images.unsplash.com/photo-1586762522674-594dcd121470?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p className="text-lg mb-6">The recent amendments to the Foreign Direct Investment (FDI) policy in 2024 mark a significant shift in India's approach to global capital, particularly in the manufacturing and space sectors. As the government continues its push for 'Atmanirbhar Bharat', these changes are designed to streamline entries and reduce compliance burdens.</p>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Key Policy Shifts</h2>
      <p className="mb-6">One of the most notable changes is the automatic approval for up to 100% FDI in certain components of the space sector. This was previously restricted and required government approval, often leading to long lead times for satellite launches and hardware manufacturing.</p>
      
      <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Impact on Manufacturing</h3>
      <p className="mb-6">The concept of 'manufacturing' has been broadened to include assembly and contract manufacturing, allowing foreign entities more flexibility in how they set up their supply chains within Indian borders. We've already seen an uptick in manropeest from European electronics giants looking to pivot their hubs to Bangalore and NCR.</p>
      
      <div className="bg-slate-100 border-l-4 border-accent-blue p-8 my-10 rounded-r-2xl">
        <p className="italic text-slate-900 text-lg">"The relaxation of FDI norms in the space sector is not just about capital; it's about technology transfer and putting India on the global aerospace map."</p>
      </div>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Compliance Checklist for Investors</h2>
      <ul className="list-disc pl-6 space-y-4 mb-8 text-slate-600">
        <li>Verification of Press Note 3 requirements for border-sharing nations.</li>
        <li>FDI reporting via the FIRMS portal within prescribed timelines.</li>
        <li>Annual Return on Foreign Liabilities and Assets (FLA) to the RBI.</li>
        <li>KYC verification of the ultimate beneficial owners.</li>
      </ul>
      
      <p>As we navigate these changes, businesses must remain vigilant about reporting timelines. A single day's delay can now trigger compound penalties that were previously negotiable.</p>
    `
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white">
      <div className="container-custom">
        {/* Back navigation */}
        <Link 
          href="/insights"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-bold text-xs uppercase tracking-widest mb-12 transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Insights
        </Link>
        
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-accent-blue text-white text-[10px] font-bold uppercase tracking-widest rounded">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                  <Clock size={12} />
                  {post.readTime}
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-8">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-between gap-8 py-8 border-y border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                    <Image src={post.author.image} alt={post.author.name} width={48} height={48} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm tracking-wide">{post.author.name}</h4>
                    <p className="text-slate-600 text-xs font-medium uppercase tracking-wider">{post.author.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-slate-600">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <Calendar size={14} className="text-accent-blue" />
                    {post.date}
                  </div>
                  <button className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 relative aspect-[16/9] rounded-3xl overflow-hidden border border-slate-200 "
          >
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </motion.div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg max-w-none prose-slate"
          >
             <div className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
          </motion.div>

          {/* Footer / CTA */}
          <div className="mt-20 pt-12 border-t border-slate-200">
             <div className="bg-slate-100 rounded-3xl p-10 lg:p-16 text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Need expert advice on FDI or Corporate Law?</h3>
                <p className="text-slate-600 mb-10 max-w-xl mx-auto font-medium">Schedule a confidential consultation with CA Mehra and our regulatory experts today.</p>
                <Link href="/contact" className="btn-primary text-base px-10 py-5">
                  Request Consultation
                </Link>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
