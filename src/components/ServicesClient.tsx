"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesClient({ servicesData }: { servicesData: any[] }) {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#fcfcfc] text-[#050505] relative overflow-hidden">
      <div className="container-custom relative z-10 px-4 md:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-xs font-semibold tracking-widest uppercase mb-6">
              SERVICES
            </span>
            <h2 className="text-4xl lg:text-[56px] font-medium leading-[1.1] tracking-tight">
              Discover a range of services designed to empower your business
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-black/20 hover:bg-black/10 transition-colors text-sm font-medium"
            >
              Book a service
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {(servicesData || []).slice(0, 4).map((service, i) => (
            <motion.div
              key={service.id || i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="group relative bg-black/[0.02] border border-black/5 rounded-3xl p-10 hover:bg-black/[0.04] transition-colors duration-500 overflow-hidden flex flex-col"
            >
              {/* Accent Circle/Glow mapped to template */}
               <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-black/[0.03] blur-[100px] rounded-full pointer-events-none group-hover:bg-black/[0.05] transition-colors duration-700" />

              <h3 className="text-3xl font-medium mb-6 mt-auto">
                {service.title}
              </h3>
              
              <p className="text-black/50 text-base leading-relaxed font-light mb-12 max-w-xl group-hover:text-black/70 transition-colors duration-300">
                {service.description || "Optimizing operations for sustainable growth and streamlining intricate procedures within your industry."}
              </p>

              <div className="mt-auto">
                <Link
                  href={`/services#${service.slug || ''}`}
                  className="inline-flex items-center text-sm font-medium uppercase tracking-widest text-[#050505] group-hover:text-black hover:underline underline-offset-8"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
