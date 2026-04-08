"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, UserPlus } from "lucide-react";
import Link from "next/link";

const jobs = [
  {
    title: "Senior Manager - Statutory Audit",
    location: "New Delhi",
    type: "Full-time",
    exp: "8-10 Years",
    desc: "Lead audit engagements for large corporate clients and multinational subsidiaries. Must be a qualified CA with deep Ind-AS knowledge.",
  },
  {
    title: "Assistant Manager - Direct Taxation",
    location: "Mumbai",
    type: "Full-time",
    exp: "4-6 Years",
    desc: "Oversee tax planning and representation for a diverse portfolio of HNI and corporate clients. Experience in Income Tax scrutiny preferred.",
  },
  {
    title: "Intern (Articled Assistant)",
    location: "New Delhi / Bangalore",
    type: "Internship",
    exp: "CA IPCC Cleared",
    desc: "Join our rigorous article-ship program covering Audit, Tax, and Corporate Law rotation. Looking for meritorious candidates.",
  },
  {
    title: "Associate - NRI Advisory",
    location: "Remote / Hybrid",
    type: "Full-time",
    exp: "2-4 Years",
    desc: "Provide tax and FEMA compliance advisory to NRIs across GCC and North American regions. Strong communication skills required.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-white">
      {/* Hero */}
      <section className="container-custom mb-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent-blue font-bold tracking-widest uppercase text-xs mb-4 block">
              Build the Future of Consulting
            </span>
            <h1 className="text-4xl lg:text-7xl font-bold text-navy leading-tight tracking-tight mb-8">
              Where Rigor Meets <br /> Innovation.
            </h1>
            <p className="text-text-muted text-xl max-w-2xl font-medium leading-relaxed">
              Join a team of elite financial advisors and compliance experts dedicated to excellence. 
              We don&apos;t just offer jobs; we offer career trajectories that redefine mentorship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks placeholder */}
      <section className="bg-bg-gray py-24 mb-24 border-y border-border-subtle">
        <div className="container-custom">
           <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-border-subtle">
                  <UserPlus className="text-accent-blue" size={28} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">Mentorship First</h3>
                <p className="text-text-muted text-sm leading-relaxed">Work directly with partners and gain exposure to complex cross-border cases.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-border-subtle">
                  <Clock className="text-accent-blue" size={28} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">Hybrid Culture</h3>
                <p className="text-text-muted text-sm leading-relaxed">We value performance over presence. Enjoy flexible working models designed for high output.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-border-subtle">
                  <Briefcase className="text-accent-blue" size={28} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">Wealth Creation</h3>
                <p className="text-text-muted text-sm leading-relaxed">Competitive remuneration combined with performance incentives and career growth milestones.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-navy leading-tight tracking-tight mb-4">
              Open Positions
            </h2>
            <p className="text-text-muted text-lg font-medium">Join us in our offices in New Delhi, Mumbai, or Bangalore.</p>
          </div>
        </div>

        <div className="space-y-6 lg:px-4">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-border-subtle rounded-3xl p-8 hover:border-navy hover:shadow-2xl hover:shadow-navy/5 transition-all duration-400"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-accent-blue text-[10px] font-black uppercase tracking-widest rounded leading-none border border-blue-100">
                      {job.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-text-muted text-[10px] font-bold uppercase tracking-widest">
                       <MapPin size={12} />
                       {job.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-text-muted text-[10px] font-bold uppercase tracking-widest">
                       <Clock size={12} />
                       {job.exp}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-accent-blue transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-text-muted text-sm font-medium leading-relaxed max-w-2xl">
                    {job.desc}
                  </p>
                </div>
                
                <div className="shrink-0">
                  <button className="bg-bg-gray text-navy font-bold tracking-widest uppercase text-xs py-4 px-8 rounded-xl hover:bg-navy hover:text-white transition-all flex items-center gap-3 active:scale-95">
                    Apply Now
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 lg:px-4">
          <div className="bg-bg-gray rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 border border-border-subtle/50">
             <div className="max-w-lg">
                <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-4">Don&apos;t see a perfect fit?</h3>
                <p className="text-text-muted font-medium">We are always looking for meritorious professionals across specialized domains. Send us your profile for our talent pool.</p>
             </div>
             <a href="mailto:careers@pumec.com" className="text-navy font-black text-lg border-b-2 border-navy hover:text-accent-blue hover:border-accent-blue transition-all pb-1">
               careers@pumec.com
             </a>
          </div>
        </div>
      </section>
    </main>
  );
}
