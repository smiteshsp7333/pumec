'use client';
import AnimatedSection from '../../components/AnimatedSection';
import { Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const insights = [
  {
    date: 'OCT 12, 2023',
    category: 'TAX',
    title: 'Navigating the Complexities of Cross-Border Taxation',
    excerpt: 'An in-depth look at recent Double Taxation Avoidance Agreements (DTAA) updates and how they impact multinational enterprises.',
  },
  {
    date: 'OCT 12, 2023',
    category: 'TAX',
    title: 'Navigating the Complexities of Cross-Border Taxation',
    excerpt: 'An in-depth look at recent Double Taxation Avoidance Agreements (DTAA) updates and how they impact multinational enterprises.',
  },
  {
    date: 'OCT 12, 2023',
    category: 'TAX',
    title: 'Navigating the Complexities of Cross-Border Taxation',
    excerpt: 'An in-depth look at recent Double Taxation Avoidance Agreements (DTAA) updates and how they impact multinational enterprises.',
  },
  {
    date: 'OCT 12, 2023',
    category: 'TAX',
    title: 'Navigating the Complexities of Cross-Border Taxation',
    excerpt: 'An in-depth look at recent Double Taxation Avoidance Agreements (DTAA) updates and how they impact multinational enterprises.',
  },
  {
    date: 'OCT 12, 2023',
    category: 'TAX',
    title: 'Navigating the Complexities of Cross-Border Taxation',
    excerpt: 'An in-depth look at recent Double Taxation Avoidance Agreements (DTAA) updates and how they impact multinational enterprises.',
  },
  {
    date: 'OCT 12, 2023',
    category: 'TAX',
    title: 'Navigating the Complexities of Cross-Border Taxation',
    excerpt: 'An in-depth look at recent Double Taxation Avoidance Agreements (DTAA) updates and how they impact multinational enterprises.',
  }
];

export default function InsightsPage() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center py-24 bg-white">
      <AnimatedSection>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#1F3A5F] mb-8 text-center flex items-center gap-2">
          <Calendar className="w-8 h-8 text-[#F57C00]" /> Insights
        </h1>
        <p className="text-gray-500 text-[15px] max-w-xl leading-relaxed">
          Explore articles, news, and insights directly from our partners on regulatory changes, audit standards, and corporate growth strategies.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: i * 0.1 }} 
              className="bg-white border border-gray-100 rounded-[20px] overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-transparent hover:-translate-y-1 relative"
            >
              {/* Image Placeholder with dark gradient like screenshot */}
              <div className="h-[220px] bg-gradient-to-b from-[#e5e5e5] to-[#f4f4f4] relative overflow-hidden">
                 <div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-1 bg-white">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider mb-4">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <Calendar size={12} className="text-gray-400" /> 
                    {insight.date}
                  </span>
                  <span className="text-[#2FA4A9]">{insight.category}</span>
                </div>
                
                <h3 className="text-lg md:text-[20px] tracking-tight font-medium text-[#1c3359] mb-4 leading-[1.3] group-hover:text-[#2FA4A9] transition-colors">
                  {insight.title}
                </h3>
                
                <p className="text-gray-500 text-[13px] leading-relaxed mb-6 flex-1">
                  {insight.excerpt}
                </p>
                
                <Link href="#" className="inline-flex items-center gap-2 text-black text-[12px] font-bold tracking-wider hover:text-[#F57C00] transition-colors">
                  Read Article 
                  <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </main>
  );
}