"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    title: "Understanding FDI Policy Changes 2024",
    category: "Regulatory",
    date: "March 28, 2024",
    excerpt: "A deep dive into the recent amendments in India's Foreign Direct Investment policy and its impact on manufacturing...",
    image: "https://images.unsplash.com/photo-1586762522674-594dcd121470?auto=format&fit=crop&w=800&q=80",
    slug: "fdi-policy-changes-2024",
    author: "CA P.U. Mehra"
  },
  {
    title: "Strategic Tax Planning for NRIs",
    category: "Taxation",
    date: "March 15, 2024",
    excerpt: "Crucial tax savings strategies for non-resident Indians under the newly updated DTAA frameworks with GCC countries...",
    image: "https://images.unsplash.com/photo-1454165833767-12469440656d?auto=format&fit=crop&w=800&q=80",
    slug: "tax-planning-nri",
    author: "CA Sanjay Gupta"
  },
  {
    title: "The Future of Corporate Auditing",
    category: "Audit",
    date: "Feb 22, 2024",
    excerpt: "How AI and blockchain are transforming the audit landscape, ensuring higher precision and real-time fraud detection...",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    slug: "future-of-corporate-auditing",
    author: "CA P.U. Mehra"
  },
  {
    title: "GST Compliance Manual for Startups",
    category: "GST",
    date: "Feb 05, 2024",
    excerpt: "Everything you need to know about GST registration, filing periodicity, and input tax credit optimization for early-stage ventures...",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
    slug: "gst-compliance-startups",
    author: "CA Sanjay Gupta"
  },
  {
    title: "Navigating ROC Filings and MGT-7/AOC-4",
    category: "Compliance",
    date: "Jan 20, 2024",
    excerpt: "A step-by-step guide to annual filing requirements for private limited companies as per the latest MCA notifications...",
    image: "https://images.unsplash.com/photo-1507679799987-c7377bd5871f?auto=format&fit=crop&w=800&q=80",
    slug: "roc-filings-guide",
    author: "CS Ritika Verma"
  },
];

const categories = ["All", "Taxation", "Audit", "Regulatory", "GST", "Compliance", "Advisory"];

export default function InsightsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-white">
      {/* Header section */}
      <section className="container-custom mb-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent-blue font-bold tracking-widest uppercase text-xs mb-4 block">
              The PUMEC Lens
            </span>
            <h1 className="text-4xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight mb-8">
              Leadership & <br /> Regulatory Insights
            </h1>
            <p className="text-slate-600 text-xl max-w-2xl font-medium leading-relaxed">
              In-depth analysis of the rapidly evolving financial and regulatory landscape in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="container-custom mb-12 border-y border-slate-200 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          <div className="flex items-center overflow-x-auto pb-4 lg:pb-0 w-full lg:max-w-[70%] hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-2.5 w-max pr-4">
              {categories.map((cat, i) => (
                <button 
                  key={cat} 
                  className={`px-5 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300 ${
                    i === 0 
                    ? "bg-slate-900 text-white shadow-md" 
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 hover:shadow-sm"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="relative w-full lg:max-w-xs shrink-0">
            <input 
              type="text" 
              placeholder="Search insights..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-5 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all font-medium"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col h-full bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              <Link href={`/insights/${post.slug}`} className="block relative w-full aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100 shrink-0">
                 <Image 
                   src={post.image} 
                   alt={post.title} 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-700"
                   unoptimized
                 />
                 <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-md text-[10px] font-bold text-slate-900 uppercase tracking-widest shadow-sm border border-slate-100/50">
                     {post.category}
                   </span>
                 </div>
              </Link>
              
              <div className="flex flex-col flex-1 p-6 lg:p-8 shrink-0">
                <div className="flex items-center flex-wrap gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
                  <time className="text-accent-blue">{post.date}</time>
                  <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-300" />
                  <span>By {post.author}</span>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-accent-blue transition-colors line-clamp-3">
                  <Link href={`/insights/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-2">
                  <Link 
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center gap-2 text-slate-900 text-xs font-bold uppercase tracking-widest group-hover:gap-3 group-hover:text-accent-blue transition-all"
                  >
                    Read deep-dive
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {/* Pagination placeholder */}
        <div className="mt-20 flex justify-center border-t border-slate-200 pt-12">
           <button className="bg-navy text-white font-bold tracking-widest uppercase text-xs px-10 py-5 rounded-2xl hover:bg-navy-light shadow-xl shadow-navy/20 active:scale-95 transition-all">
             Load More Articles
           </button>
        </div>
      </section>
    </main>
  );
}

