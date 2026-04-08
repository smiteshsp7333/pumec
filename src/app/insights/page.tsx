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
            <h1 className="text-4xl lg:text-7xl font-bold text-navy leading-tight tracking-tight mb-8">
              Leadership & <br /> Regulatory Insights
            </h1>
            <p className="text-text-muted text-xl max-w-2xl font-medium leading-relaxed">
              In-depth analysis of the rapidly evolving financial and regulatory landscape in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="container-custom mb-12 border-y border-border-subtle py-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 px-2">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat, i) => (
              <button 
                key={cat} 
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  i === 0 
                  ? "bg-navy text-white shadow-lg shadow-navy/20" 
                  : "bg-bg-gray text-text-muted hover:bg-border-subtle hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative max-w-md w-full">
            <input 
              type="text" 
              placeholder="Search insights..." 
              className="w-full bg-bg-gray border border-border-subtle rounded-xl pl-12 pr-6 py-4 text-sm focus:outline-none focus:border-navy transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col h-full group"
            >
              <Link href={`/insights/${post.slug}`} className="block relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-md shadow-navy/5">
                 <Image 
                   src={post.image} 
                   alt={post.title} 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded text-[10px] font-bold text-navy uppercase tracking-widest shadow-sm">
                     {post.category}
                   </span>
                 </div>
              </Link>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 text-[10px] font-bold text-accent-blue uppercase tracking-widest mb-4">
                  <time>{post.date}</time>
                  <span className="w-1 h-1 rounded-full bg-border-subtle" />
                  <span>By {post.author}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-navy mb-4 leading-snug group-hover:text-accent-blue transition-colors">
                  <Link href={`/insights/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-text-muted text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              
              <Link 
                href={`/insights/${post.slug}`}
                className="inline-flex items-center gap-2 text-navy text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all"
              >
                Read deep-dive
                <ChevronRight size={16} className="text-accent-blue" />
              </Link>
            </motion.article>
          ))}
        </div>
        
        {/* Pagination placeholder */}
        <div className="mt-20 flex justify-center border-t border-border-subtle pt-12">
           <button className="bg-navy text-white font-bold tracking-widest uppercase text-xs px-10 py-5 rounded-2xl hover:bg-navy-light shadow-xl shadow-navy/20 active:scale-95 transition-all">
             Load More Articles
           </button>
        </div>
      </section>
    </main>
  );
}
