'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Award, Users2, Building2 } from "lucide-react";

const values = [
  {
    title: "Unwavering Integrity",
    desc: "Ethics are at the core of everything we do. We maintain the highest standards of professional conduct and accuracy.",
    icon: <Award className="text-accent-blue" size={32} />,
  },
  {
    title: "Client-Centricity",
    desc: "We don't just provide services; we build relationships. Your business success is our ultimate deliverable.",
    icon: <Users2 className="text-accent-blue" size={32} />,
  },
  {
    title: "Precision & Rigor",
    desc: "In the world of finance, details matter. Our meticulous approach ensures zero room for error or ambiguity.",
    icon: <CheckCircle2 className="text-accent-blue" size={32} />,
  },
  {
    title: "Futuristic Compliance",
    desc: "We stay ahead of regulatory shifts, ensuring your business is compliant today and future-proof tomorrow.",
    icon: <Building2 className="text-accent-blue" size={32} />,
  },
];

const team = [
  {
    name: "CA P.U. Mehra",
    role: "Founding Partner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=PUMehra",
    bio: "With over 35 years of experience in statutory audit and direct taxation, Mr. Mehra is the visionary architect behind PUMEC.",
  },
  {
    name: "CA Sanjay Gupta",
    role: "Managing Partner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay",
    bio: "Sanjay leads our consulting and M&A advisory division, bringing deep expertise in corporate restructuring.",
  },
  {
    name: "CS Ritika Verma",
    role: "Partner - Corporate Law",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ritika",
    bio: "Ritika specializes in FEMA compliance and company law, helping over 500 startups achieve legal excellence.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#fcfcfc]">
      {/* Hero Section */}
      <section className="container-custom mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent-blue font-bold tracking-widest uppercase text-xs mb-4 block">
              Our Legacy
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#050505] leading-tight tracking-tight mb-8">
              Decades of Trust. <br /> Built on Precision.
            </h1>
            <p className="text-black/60 text-lg leading-relaxed mb-6">
              Founded in 1988, PUMEC Consultants has evolved from a boutique CA practice into a full-spectrum financial powerhouse. We serve as the strategic bridge between complex regulations and seamless business operations.
            </p>
            <p className="text-black/60 text-lg leading-relaxed">
              Based in India with a global footprint, we specialize in helping local enterprises and manropenational subsidiaries navigate the intricacies of the Indian economy with absolute confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-black/5 "
          >
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
              alt="Office" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/[0.04]/10 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-black/[0.02]/20 backdrop-blur-md border border-black/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/[0.02] flex items-center justify-center text-[#050505] border border-black/5 ">
                  <PlayIcon />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#fcfcfc] border-y border-black/5 overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-20 px-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#050505] tracking-tight mb-4">Our Core Values</h2>
            <p className="text-black/60 text-lg max-w-2xl mx-auto font-medium">
              These principles define our DNA and guide every advisory we offer and every audit we conduct.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black/[0.02] p-10 rounded-2xl border border-black/5/50 border border-black/5  hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-6">{v.icon}</div>
                <h3 className="text-xl font-bold text-[#050505] mb-4 tracking-tight">{v.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="container-custom py-24 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 px-4">
          <div className="max-w-2xl">
            <span className="text-accent-blue font-bold tracking-widest uppercase text-xs mb-3 block">
              Meet the Visionaries
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#050505] leading-tight tracking-tight">
              Leading with <br /> Accountability
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-8 border border-black/5  bg-[#fcfcfc]">
                <Image src={m.image} alt={m.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy to-transparent h-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-[#050505] mb-1">{m.name}</h3>
              <p className="text-accent-blue text-sm font-bold uppercase tracking-widest mb-4">{m.role}</p>
              <p className="text-black/60 text-sm leading-relaxed max-w-[280px]">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

function PlayIcon() {
  return (
    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

