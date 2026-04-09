"use client";

import { motion } from "framer-motion";



const industries = [
  "Manufacturing",
  "FinTech & Banking",
  "E-commerce",
  "Real Estate",
  "SaaS & Tech",
  "Healthcare",
  "Logistics",
  "Renewable Energy",
];

export default function ClientsClient({ clientsData }: { clientsData: { name: string, logo_url: string }[] }) {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-slate-200/50">
      {/* Decorative Texture/Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10 px-4">
        {/* Top: Trust Text */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-slate-900 font-bold text-lg lg:text-xl tracking-tight max-w-2xl mx-auto"
          >
            Trusted by leading businesses across industries
          </motion.h2>
        </div>

        {/* Middle: Infinite Scroll Marquee with Edge Mask */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative max-w-[1400px] mx-auto mb-20"
        >
          {/* Edge Mask via CSS mask-image for true transparency fading */}
          <div 
            className="flex overflow-hidden py-6" 
            style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
          >
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-12 md:gap-16 lg:gap-20">
              {/* Double array for seamless loop */}
              {[...clientsData, ...clientsData].map((logo, i) => {
                // Ensure URLs from Laravel storage are absolute if they don't start with http or /
                const imgSrc = logo.logo_url?.startsWith("http") || logo.logo_url?.startsWith("/") 
                  ? logo.logo_url 
                  : `http://127.0.0.1:8000/storage/${logo.logo_url}`;

                return (
                  <div
                    key={`${logo.name}-${i}`}
                    className="flex items-center justify-center w-[160px] md:w-[200px] h-24 shrink-0 px-4"
                  >
                    <img
                      src={imgSrc}
                      alt={logo.name}
                      loading={i >= clientsData.length ? "lazy" : "eager"}
                      className="max-w-full max-h-[80px] w-auto object-contain pointer-events-none select-none text-slate-900 font-bold"
                      onError={(e) => {
                        // Dynamically replace broken image source with a high-quality placeholder logo
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/400x120/f8fafc/0f172a.png?text=${encodeURIComponent(logo.name)}&font=Montserrat`;
                        target.style.filter = 'none';
                        target.style.opacity = '1';
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom: Industry Tags */}
        <div className="text-center max-w-4xl mx-auto pt-6 border-t border-slate-200/30">
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.25em] mb-8"
          >
            Serving specialized sectors including
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 px-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-[11px] lg:text-xs font-semibold text-slate-600 shadow-sm hover:border-blue-200 hover:text-slate-800 hover:shadow-md hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
              >
                {ind}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.5rem)); /* Adjust for gap to loop perfectly */ }
        }
        @media (min-width: 768px) {
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 2rem)); }
          }
        }
        @media (min-width: 1024px) {
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 2.5rem)); }
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

