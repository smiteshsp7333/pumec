"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { 
    value: 30, suffix: "+", 
    label: "Years of Excellence", 
    sub: "Est. in the early 1990s",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    )
  },
  { 
    value: 2500, suffix: "+", 
    label: "Clients Served", 
    sub: "Across India & globally",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    )
  },
  { 
    value: 20, suffix: "+", 
    label: "Industries Covered", 
    sub: "From FMCG to FinTech",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    )
  },
  { 
    value: 100, suffix: "%", 
    label: "Compliance Rate", 
    sub: "Zero regulatory penalties",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
];

function NumCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeOutQuint = 1 - Math.pow(1 - progress, 5);

        setCount(Math.floor(easeOutQuint * target));

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      <span className="text-accent-blue ml-0.5">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stats" className="pt-28 pb-24 bg-[#F8FAFC] relative overflow-hidden border-b border-border-subtle/50">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-50 absolute pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-x-10 sm:gap-y-16 lg:gap-0 lg:divide-x-2 lg:divide-border-subtle"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.2, 0.6, 0.2, 1] }}
              className="text-center lg:px-6 relative flex flex-col items-center group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-navy mb-6 group-hover:text-accent-blue transition-colors duration-300 border border-border-subtle/50">
                {s.icon}
              </div>
              
              <div className="text-5xl lg:text-6xl font-black text-navy mb-4 tracking-tighter transition-colors duration-300 group-hover:text-navy-light drop-shadow-sm">
                <NumCounter target={s.value} suffix={s.suffix} />
              </div>
              
              <div className="text-navy font-bold text-sm tracking-widest uppercase mb-2 relative">
                {s.label}
                <div className="absolute -bottom-2.5 mx-auto left-0 right-0 w-8 group-hover:w-16 h-[2px] bg-accent-blue/50 transition-all duration-400 ease-out" />
              </div>
              
              <div className="text-text-muted text-xs tracking-wider uppercase font-medium mt-4 opacity-80 group-hover:opacity-100 transition-opacity">
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
