"use client";

import { motion } from "framer-motion";

export default function ClientsClient({ clientsData }: { clientsData: { name: string, logo_url: string }[] }) {
  return (
    <section className="py-12 bg-[#fcfcfc] border-y border-black/5 relative overflow-hidden">
      <div className="container-custom relative z-10 px-4">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-black/40 font-medium text-xs lg:text-sm uppercase tracking-widest max-w-2xl mx-auto"
          >
            The Brands We Work With And Believe In Us
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative max-w-[1400px] mx-auto"
        >
          <div 
            className="flex overflow-hidden py-4" 
            style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
          >
            <div className="flex w-max animate-marquee items-center gap-12 md:gap-16 lg:gap-24">
              {[...(clientsData || []), ...(clientsData || [])].map((logo, i) => {
                const imgSrc = logo?.logo_url?.startsWith("http") || logo?.logo_url?.startsWith("/") 
                  ? logo.logo_url 
                  : `http://127.0.0.1:8000/storage/${logo?.logo_url}`;

                return (
                  <div
                    key={`${logo?.name}-${i}`}
                    className="flex items-center justify-center w-[140px] md:w-[180px] h-16 shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale invert"
                  >
                    <img
                      src={imgSrc}
                      alt={logo?.name}
                      loading={i >= (clientsData?.length || 0) ? "lazy" : "eager"}
                      className="max-w-full max-h-[60px] w-auto object-contain pointer-events-none select-none"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/400x120/1a1a1a/ffffff.png?text=${encodeURIComponent(logo?.name)}&font=Montserrat`;
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.5rem)); }
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
            100% { transform: translateX(calc(-50% - 3rem)); }
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
