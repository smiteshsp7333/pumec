"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 30, suffix: "+", label: "Years of Excellence", sub: "Driving strategic growth globally" },
  { value: 2500, suffix: "+", label: "Clients Served", sub: "Across diverse industries" },
  { value: 20, suffix: "+", label: "Industries Covered", sub: "Deep sector expertise" },
  { value: 100, suffix: "%", label: "Commitment", sub: "Dedicated to your success" }
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
    <span ref={ref} className="tabular-nums inline-flex items-baseline">
      {count.toLocaleString()}
      <span className="text-white/50 ml-1">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stats" className="py-24 bg-[#050505] text-[#f2f2f2] relative overflow-hidden border-b border-white/5">
      <div className="container-custom relative z-10 px-4 md:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.2, 0.6, 0.2, 1] }}
              className="flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="text-5xl lg:text-7xl font-medium mb-4 tracking-tighter">
                <NumCounter target={s.value} suffix={s.suffix} />
              </div>
              
              <div className="text-white/90 font-medium text-sm tracking-widest uppercase mb-2">
                {s.label}
              </div>
              
              <div className="text-white/50 text-xs tracking-wider uppercase font-light">
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
