"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Tata Group", url: "/logos/tata.svg" },
  { name: "Infosys", url: "/logos/infosys.svg" },
  { name: "HDFC Bank", url: "/logos/hdfc.svg" },
  { name: "Wipro", url: "/logos/wipro.svg" },
  { name: "Mahindra", url: "/logos/mahindra.svg" },
  { name: "Aditya Birla", url: "/logos/aditya_birla.svg" },
  { name: "Reliance", url: "/logos/reliance.svg" },
  { name: "ICICI Bank", url: "/logos/icici.svg" },
];

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

export default function Clients() {
  return (
    <section className="py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden border-t border-border-subtle/40">
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
            className="text-navy font-bold text-lg lg:text-xl tracking-tight max-w-2xl mx-auto"
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
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex items-center justify-center w-[150px] lg:w-[180px] h-16 grayscale opacity-[0.7] blur-[0.5px] hover:grayscale-0 hover:opacity-100 hover:blur-0 transition-all duration-500 hover:scale-[1.05] hover:drop-shadow-[0_8px_16px_rgba(59,130,246,0.25)] cursor-pointer group shrink-0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    loading={i >= logos.length ? "lazy" : "eager"}
                    className="max-w-full max-h-[40px] w-auto h-auto object-contain pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      // Fallback logic handled gracefully by not showing broken icon
                      (e.target as HTMLImageElement).style.opacity = '0.1';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom: Industry Tags */}
        <div className="text-center max-w-4xl mx-auto pt-6 border-t border-border-subtle/30">
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-[10px] font-bold text-text-muted uppercase tracking-[0.25em] mb-8"
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
                className="px-5 py-2.5 bg-white border border-border-subtle/60 rounded-full text-[11px] lg:text-xs font-semibold text-text-muted shadow-sm hover:border-accent-blue/40 hover:text-navy hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-default"
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
