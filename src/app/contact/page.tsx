"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { submitContact } from "@/lib/api";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormState("submitting");
    try {
      const data = {
        name: e.target[0].value,
        email: e.target[1].value,
        message: e.target[5]? e.target[5].value : e.target[2].value || "Contact Form Submission"
      };
      await submitContact(data);
      setFormState("success");
    } catch (err) {
      setFormState("error");
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent-blue font-bold tracking-widest uppercase text-xs mb-4 block">
                Connect With Us
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-navy leading-tight tracking-tight mb-8">
                Let&apos;s Start a <br /> Conversation.
              </h1>
              <p className="text-text-muted text-lg leading-relaxed mb-12 max-w-md">
                Whether you have a specific financial query or are looking for a long-term compliance partner, our senior consultants are ready to help.
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-bg-gray border border-border-subtle flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-1">Email Us</h4>
                    <a href="mailto:info@pumec.com" className="text-navy font-bold text-lg hover:text-accent-blue transition-colors">info@pumec.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-bg-gray border border-border-subtle flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-1">Call Us</h4>
                    <a href="tel:+919876543210" className="text-navy font-bold text-lg hover:text-accent-blue transition-colors">+91 98XXX XXXXX</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-bg-gray border border-border-subtle flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-1">Our Offices</h4>
                    <p className="text-navy font-bold text-lg leading-snug">New Delhi, Mumbai & <br /> Bangalore — India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl shadow-navy/5 border border-border-subtle relative overflow-hidden"
            >
              {/* Decorative background for form */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />

              {formState === "success" ? (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">Message Sent Successfully!</h3>
                  <p className="text-text-muted mb-8">Our advisors will contact you within the next 24 business hours. Check your inbox for a confirmation email.</p>
                  <button 
                    onClick={() => setFormState("idle")}
                    className="text-accent-blue font-bold tracking-widest uppercase text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy uppercase tracking-widest ml-1">Full Name</label>
                      <input name="inputfield" 
                        required
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-bg-gray border border-border-subtle rounded-xl px-5 py-4 text-navy placeholder:text-text-muted/50 focus:outline-none focus:border-navy focus:ring-4 focus:ring-navy/5 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy uppercase tracking-widest ml-1">Email Address</label>
                      <input name="inputfield" 
                        required
                        type="email" 
                        placeholder="john@company.com" 
                        className="w-full bg-bg-gray border border-border-subtle rounded-xl px-5 py-4 text-navy placeholder:text-text-muted/50 focus:outline-none focus:border-navy focus:ring-4 focus:ring-navy/5 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest ml-1">Service Interested In</label>
                    <select className="w-full bg-bg-gray border border-border-subtle rounded-xl px-5 py-4 text-navy focus:outline-none focus:border-navy transition-all appearance-none cursor-pointer">
                      <option>Auditing & Assurance</option>
                      <option>Taxation Services</option>
                      <option>NRI & International Taxation</option>
                      <option>Business Setup & Corporate Law</option>
                      <option>Other Advisory</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-widest ml-1">Your Message</label>
                    <textarea 
                      required
                      placeholder="How can we help your business today?"
                      rows={5}
                      className="w-full bg-bg-gray border border-border-subtle rounded-xl px-5 py-4 text-navy placeholder:text-text-muted/50 focus:outline-none focus:border-navy focus:ring-4 focus:ring-navy/5 transition-all resize-none"
                    />
                  </div>

                  <button 
                    disabled={formState === "submitting"}
                    className="w-full bg-navy text-white font-bold tracking-widest uppercase text-sm py-5 rounded-xl hover:bg-navy-light shadow-xl shadow-navy/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Processing...
                      </>
                    ) : (
                      <>
                        Request Consultation
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-text-muted uppercase tracking-widest font-medium">
                    By submitting, you agree to our Privacy Policy
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
