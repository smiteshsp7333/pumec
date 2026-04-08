"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ChevronLeft, 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  Zap, 
  BarChart3, 
  CheckCircle2 
} from "lucide-react";

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  // Mock service data
  const service = {
    title: "Auditing & Assurance",
    icon: <ShieldCheck size={40} className="text-accent-blue" />,
    heroDesc: "Beyond compliance: Delivering transparency, precision, and actionable financial insights for global stakeholders.",
    longDesc: "At PUMEC, audit and assurance is more than a statutory requirement—it is a value-addition exercise. Our rigorous methodologies provide absolute clarity on your financial health while identifying risks and operational inefficiencies that often go unnoticed.",
    offerings: [
      {
        title: "Statutory & Tax Audit",
        desc: "Precision audits as per the Companies Act and Income Tax Act, ensuring 100% regulatory compliance and zero litigation risk.",
        icon: <FileText size={24} />
      },
      {
        title: "Internal & Management Audit",
        desc: "Evaluating internal controls and operational workflows to optimize resource allocation and prevent revenue leakage.",
        icon: <Zap size={24} />
      },
      {
        title: "Ind-AS & IFRS Convergence",
        desc: "Guiding global subsidiaries through complex international accounting standards for seamless global consolidation.",
        icon: <BarChart3 size={24} />
      }
    ],
    faqs: [
      { q: "What is your typical audit timeline?", a: "Statutory audits generally take 4-6 weeks depending on the complexity and volume of transactions." },
      { q: "Do you specialize in specific industries?", a: "Yes, we have deep domain expertise in Manufacturing, SaaS, FMCG, and Real Estate sectors." }
    ]
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white">
      <div className="container-custom">
        <Link 
          href="/services"
          className="inline-flex items-center gap-2 text-text-muted hover:text-navy font-bold text-xs uppercase tracking-widest mb-12 transition-colors"
        >
          <ChevronLeft size={16} />
          View All Services
        </Link>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
           >
              <div className="mb-6">{service.icon}</div>
              <h1 className="text-4xl lg:text-7xl font-bold text-navy leading-tight tracking-tight mb-8">
                {service.title}
              </h1>
              <p className="text-text-muted text-xl font-medium leading-relaxed mb-10">
                {service.heroDesc}
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-3 px-10 py-5">
                Request a Consultation
                <ArrowRight size={18} />
              </Link>
           </motion.div>
           
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="bg-bg-gray rounded-3xl p-10 lg:p-16 border border-border-subtle shadow-xl shadow-navy/5"
           >
              <h3 className="text-2xl font-bold text-navy mb-6">Why Trust PUMEC?</h3>
              <ul className="space-y-6">
                {[
                  "BIG-4 Pedigree with personalized focus",
                  "Zero compliance failure legacy (1988 - Present)",
                  "Proactive risk identification reporting",
                  "Tech-enabled data-driven audit process"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-navy font-medium">
                    <CheckCircle2 size={20} className="text-accent-blue shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
           </motion.div>
        </div>

        {/* Core Offerings */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-navy tracking-tight mb-4">Core Offerings</h2>
            <div className="h-1.5 w-24 bg-accent-blue mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {service.offerings.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group p-8 rounded-3xl border border-border-subtle bg-white hover:bg-navy hover:text-white transition-all duration-500 hover:shadow-2xl hover:shadow-navy/20"
              >
                <div className="w-14 h-14 rounded-2xl bg-bg-gray text-navy flex items-center justify-center mb-8 group-hover:bg-accent-blue group-hover:text-white transition-colors duration-500">
                  {o.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{o.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  {o.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Detailed Description */}
        <section className="bg-navy rounded-[3rem] p-12 lg:p-24 text-white overflow-hidden relative mb-32">
           <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold mb-10 leading-tight">Driving Transparency in a <br /> Volatile Economy.</h2>
              <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-12 italic">
                &quot;{service.longDesc}&quot;
              </p>
              <div className="flex flex-wrap gap-8 py-10 border-y border-white/10">
                 <div>
                    <span className="block text-4xl font-black mb-1">500+</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/50">Audits Completed</span>
                 </div>
                 <div className="w-px h-12 bg-white/10 hidden md:block" />
                 <div>
                    <span className="block text-4xl font-black mb-1">ZERO</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/50">Audit Failures</span>
                 </div>
                 <div className="w-px h-12 bg-white/10 hidden md:block" />
                 <div>
                    <span className="block text-4xl font-black mb-1">30+</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/50">Industry Domains</span>
                 </div>
              </div>
           </div>
           {/* Abstract visual */}
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/20 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
        </section>

        {/* FAQ Section Placeholder */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center underline decoration-accent-blue decoration-4 underline-offset-8">Common Inquiries</h2>
          <div className="space-y-6">
            {service.faqs.map((faq) => (
              <div key={faq.q} className="p-8 rounded-2xl bg-bg-gray border border-border-subtle">
                <h4 className="text-navy font-bold text-lg mb-3">Q: {faq.q}</h4>
                <p className="text-text-muted leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
