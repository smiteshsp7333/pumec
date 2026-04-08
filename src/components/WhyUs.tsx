"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    id: "expertise",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Deep Expertise",
    desc: "Three decades of experience across taxation, audit, corporate law, and financial advisory. Our team includes ICAI-qualified CAs, company secretaries, and legal advisors.",
  },
  {
    id: "transparency",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Full Transparency",
    desc: "We operate with zero ambiguity. Clients receive clear fee structures, milestone updates, and direct access to partners — no hidden layers.",
  },
  {
    id: "compliance",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Compliance First",
    desc: "We never compromise on regulatory adherence. Every filing, every advisory recommendation is built around 100% legal and procedural compliance.",
  },
  {
    id: "proactive",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Proactive Advisory",
    desc: "We don't wait for problems to arise. Our team proactively monitors regulatory changes, deadline windows, and emerging risks to keep your business ahead.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* 3. SECTION ALTERNATION: white + subtle gradient tint for Section A */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.02),transparent_60%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            ref={ref}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <span className="text-accent-blue font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Difference
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-navy leading-tight tracking-tight mb-6">
              Why Leading Businesses Choose PUMEC
            </h2>
            <div className="w-24 h-1 bg-accent-blue rounded-full mb-8" />
            <p className="text-text-muted text-lg leading-relaxed font-medium">
              We combine the rigorous architecture of a Big-4 firm with the personal attention of a boutique practice — giving you the ultimate advantage at every stage.
            </p>
          </motion.div>
        </div>

        {/* 2x2 Storytelling Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-12">
          {pillars.map((p, i) => {
            const isFeatured = i === 0;

            return (
              <motion.div
                key={p.id}
                id={`pillar-${p.id}`}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className={`group relative p-10 lg:p-12 rounded-2xl cursor-pointer transition-all duration-400 ease-out hover:-translate-y-3 ${
                  i % 2 !== 0 ? "md:translate-y-12" : ""
                } ${
                  isFeatured 
                    ? "bg-white border text-navy border-accent-blue/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] z-10 hover:shadow-[0_12px_40px_rgb(59,130,246,0.06)]" 
                    : "bg-white border border-border-subtle/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                }`}
              >
                {/* 5. CARD BACKGROUNDS: Gradient edge highlight (very faint) */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/[0.015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl z-0" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-8 transition-colors duration-400 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] ${
                  isFeatured 
                    ? "bg-navy text-white shadow-md shadow-navy/20" 
                    : "bg-blue-50 text-accent-blue group-hover:bg-navy group-hover:text-white"
                }`}>
                  {p.icon}
                </div>
                
                <h3 className={`relative z-10 text-2xl font-bold mb-4 tracking-wide transition-colors duration-300 ${
                  isFeatured ? "text-navy" : "text-navy group-hover:text-accent-blue"
                }`}>
                  {p.title}
                </h3>
                
                <p className="relative z-10 text-text-muted text-base leading-relaxed font-medium max-w-[90%]">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
