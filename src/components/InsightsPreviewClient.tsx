"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function InsightsPreviewClient({ blogsData }: { blogsData: any[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const latestNews = blogsData[0];
  const latestBlogs = blogsData.slice(1, 4);

  const getImageUrl = (imagePath: string, fallbackIndex: number) => {
    if (imagePath && imagePath.trim() !== '') {
      return imagePath.startsWith('http') || imagePath.startsWith('/') 
        ? imagePath 
        : `http://127.0.0.1:8000/storage/${imagePath}`;
    }
    // Fallback images located in the public folder
    const fallbacks = [
      "/photo-1554224155-6726b3ff858f.avif",
      "/photo-1460925895917-afdab827c52f.avif",
      "/photo-1507679799987-c73779587ccf.avif"
    ];
    return fallbacks[fallbackIndex % fallbacks.length];
  };

  return (
    <section className="py-20 lg:py-28 bg-white text-[#050505] relative overflow-hidden font-sans">
      <div className="container-custom px-4 md:px-8 max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16">
          
          {/* Latest News Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#081836] mb-8">
              Latest News
            </h2>
            {latestNews ? (
              <div className="group relative w-full rounded-sm overflow-hidden bg-[#081836] text-white flex-1 min-h-[400px]">
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
                  <img 
                    src={getImageUrl(latestNews.image, 0)}
                    alt={latestNews.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <div className="relative z-10 flex flex-col h-full p-8 md:p-10 justify-end pb-8">
                  <div className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center absolute top-8 right-8">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white ml-0.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                  <span className="inline-block px-4 py-1.5 bg-[#f04a43] text-white text-[11px] font-bold uppercase tracking-wider mb-6 w-max rounded-full shadow-sm">
                    {latestNews.category || "PUMEC Consultant"}
                  </span>
                  <h3 className="text-2xl md:text-[26px] font-bold leading-tight mb-4">
                    <Link href={`/insights/${latestNews.slug || ''}`} className="hover:underline decoration-white/30 underline-offset-4 line-clamp-3">
                      {latestNews.title}
                    </Link>
                  </h3>
                  <p className="text-white/70 text-sm font-medium uppercase tracking-widest mt-4">
                    {new Date(latestNews.created_at || Date.now()).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </p>
                </div>
              </div>
            ) : (
               <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center text-gray-400 text-sm">No news available</div>
            )}
          </motion.div>

          {/* Latest Blogs Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#081836] mb-8">
              Latest Blogs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1">
              {latestBlogs.map((p, i) => (
                <article key={i} className="flex flex-col group h-full">
                  <div className="relative w-full aspect-square md:aspect-[4/3] mb-4 overflow-hidden rounded-sm bg-gray-100 relative">
                    <img 
                      src={getImageUrl(p.image, i + 1)}
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
                        {/* H&CO logo removed */}
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-1 pt-1">
                    <div className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2.5 flex items-center gap-2">
                       <span>5 MIN READ</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#081836] leading-snug mb-3 line-clamp-3 group-hover:text-blue-600 transition-colors">
                      <Link href={`/insights/${p.slug || ''}`}>
                        {p.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 text-[11px] leading-relaxed mt-auto font-medium">
                        {new Date(p.created_at || Date.now()).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} by PUMEC
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
          
        </div>
        
        {/* Footer Text */}
        <div className="mt-20 text-center flex flex-col items-center">
             <div className="border border-[#081836]/10 rounded-full px-5 py-1.5 inline-block mb-8 text-[#081836] font-bold text-sm shadow-sm tracking-wide">
                 Why PUMEC
             </div>
             <h2 className="text-2xl md:text-3xl lg:text-[40px] font-extrabold text-[#081836] max-w-4xl mx-auto leading-tight mb-4">
               <span className="text-[#f04a43]">Empowering</span> people and organizations to conquer new frontiers.
             </h2>
        </div>

      </div>
    </section>
  );
}
