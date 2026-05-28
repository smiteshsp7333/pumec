"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    letter: "A",
    title: "Evaluate Current Processes",
    img: "/logos/step1.png",
    desc: "Based on the evaluation, introduce streamlined procedures designed to enhance efficiency and reduce complexity."
  },
  {
    letter: "B",
    title: "Implement Streamlined Procedures",
    img: "/logos/step2.png",
    desc: "Based on the evaluation, introduce streamlined procedures designed to enhance efficiency and reduce complexity."
  },
  {
    letter: "C",
    title: "Incorporate Automation Solutions",
    img: "/logos/step3.png",
    desc: "Based on the evaluation, introduce streamlined procedures designed to enhance efficiency and reduce complexity."
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-[#fcfcfc] text-[#050505] relative overflow-hidden border-b border-black/5">
      <div className="container-custom relative z-10 px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20 md:mb-28">
          {/* Left Side text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.15] tracking-tight mb-8 max-w-2xl">
              Achieving growth relies on taking straightforward & automated measures.
            </h2>
          </motion.div>

          {/* Right Side Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-black/50 text-base md:text-lg leading-relaxed font-light">
              In the ever-changing terrain of business evolution, the relentless pursuit of growth requires a strategic mindset that seamlessly merges simplicity with automation. This subheader delves deep into the complexities inherent in achieving sustained expansion by shedding light on the transformative potential of streamlined processes and systems.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.letter}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
              className="group relative h-[450px] lg:h-[500px] rounded-[32px] overflow-hidden flex flex-col justify-end p-8 lg:p-10"
            >
              {/* Background Image */}
              <Image 
                src={step.img}
                alt={step.title}
                fill
                className="object-cover object-center z-0 transition-transform duration-[10s] group-hover:scale-105"
              />
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
              
              <div className="relative z-20 overflow-hidden">
                <div className="w-10 h-10 bg-white group-hover:bg-[#34d399] transition-colors duration-500 shadow-xl flex items-center justify-center text-sm font-semibold text-black tracking-wide mb-4 font-serif">
                  {step.letter}
                </div>
                <h3 className="text-2xl font-medium text-white tracking-tight mb-2">
                  {step.title}
                </h3>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                  <div className="min-h-0 overflow-hidden">
                    <p className="text-white/80 text-sm font-light leading-relaxed pt-2">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
