import AnimatedSection from '../../components/AnimatedSection';
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    alert("Consultation request received! Our partners will be in touch shortly.");
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white text-[#050505] relative overflow-hidden font-sans">
      <AnimatedSection className="container-custom px-4 md:px-8 relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          
          {/* Left Column - Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="flex flex-col text-sm text-gray-700 space-y-6 pt-12"
          >
            <p className="leading-relaxed font-medium">
              Our professionals have broad experience in helping local and national corporations manage their accounting and tax burdens as well as complying with today's complex reporting requirements.
            </p>
            <p className="leading-relaxed font-medium">
              We strongly believe in the value of relationships. We view every client relationship like a partnership, and truly believe that our success is a direct result of your success.
            </p>
            <p className="leading-relaxed font-medium">
              We want to hear from you. Our door is always open, and we're ready to listen and offer our expertise.
            </p>
            <p className="font-bold text-[#050505]">Let's CONNECT</p>

            <div className="pt-8">
              <p className="font-bold text-[#050505] mb-1">Specific inquiries:</p>
              <p>PUMEC Consultants</p>
              <p>Managing Director</p>
              <p>email: info@pumec.com</p>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-[34px] font-bold text-[#081836] tracking-tight mb-8">
              Start a Conversation
            </h1>
             
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Grid Inputs */}
              <div className="grid sm:grid-cols-2 gap-4">
                <input required type="text" placeholder="First Name*" className="w-full border border-gray-300 px-4 py-[11px] text-[13px] outline-none focus:border-[#081836] rounded-[2px] placeholder:text-gray-400" />
                <input required type="text" placeholder="Last name*" className="w-full border border-gray-300 px-4 py-[11px] text-[13px] outline-none focus:border-[#081836] rounded-[2px] placeholder:text-gray-400" />
                
                <input type="text" placeholder="Company Name" className="w-full border border-gray-300 px-4 py-[11px] text-[13px] outline-none focus:border-[#081836] rounded-[2px] placeholder:text-gray-400" />
                <select required defaultValue="" className="w-full border border-gray-300 px-4 py-[11px] text-[13px] outline-none focus:border-[#081836] rounded-[2px] text-gray-500 bg-white">
                  <option value="" disabled>Existing client*</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>

                <input required type="tel" placeholder="Phone Number*" className="w-full border border-gray-300 px-4 py-[11px] text-[13px] outline-none focus:border-[#081836] rounded-[2px] placeholder:text-gray-400" />
                <input required type="email" placeholder="Email*" className="w-full border border-gray-300 px-4 py-[11px] text-[13px] outline-none focus:border-[#081836] rounded-[2px] placeholder:text-gray-400" />

                <select defaultValue="" className="w-full border border-gray-300 px-4 py-[11px] text-[13px] outline-none focus:border-[#081836] rounded-[2px] text-gray-500 bg-white">
                  <option value="" disabled>Country where you currently reside *</option>
                  <option value="india">India</option>
                </select>

                <select defaultValue="" className="w-full border border-gray-300 px-4 py-[11px] text-[13px] outline-none focus:border-[#081836] rounded-[2px] text-gray-500 bg-white">
                  <option value="" disabled>Please select your preferred language*</option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                </select>
              </div>

              {/* Checkboxes Grid */}
              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                
                {/* Services */}
                <div>
                  <h3 className="text-[11px] font-bold text-gray-400 uppercase mb-3 tracking-wider">SERVICES YOU ARE INTERESTED IN <span className="text-red-500">*</span></h3>
                  <div className="space-y-[10px]">
                    {[
                      "Accounting & Tax Services",
                      "Audit & Assurance",
                      "Entity Formation or Management Services",
                      "Payroll Services",
                      "Staffing Services",
                      "Technology/SAP Services",
                      "Creatio",
                      "Global Expansion Services",
                      "None of the above"
                    ].map((service) => (
                      <label key={service} className="flex items-start gap-2.5 cursor-pointer group">
                        <input type="checkbox" className="mt-0.5 border-gray-300 rounded-[2px] text-[#081836] focus:ring-[#081836] w-3.5 h-3.5 cursor-pointer accent-[#081836]" />
                        <span className="text-[12px] text-gray-500 font-medium group-hover:text-gray-800 leading-tight">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Regions */}
                <div>
                  <h3 className="text-[11px] font-bold text-gray-400 uppercase mb-3 tracking-wider">REGION(S) WHERE YOU SEEK SERVICES <span className="text-red-500">*</span></h3>
                  <div className="space-y-[10px]">
                    {[
                      "North India",
                      "South India",
                      "East India",
                      "West India",
                      "Central India",
                      "Pan India"
                    ].map((region) => (
                      <label key={region} className="flex items-start gap-2.5 cursor-pointer group">
                        <input type="checkbox" className="mt-0.5 border-gray-300 rounded-[2px] text-[#081836] focus:ring-[#081836] w-3.5 h-3.5 cursor-pointer accent-[#081836]" />
                        <span className="text-[12px] text-gray-500 font-medium group-hover:text-gray-800 leading-tight">{region}</span>
                      </label>
                    ))}
                  </div>
                </div>

              </div>

              {/* Textarea */}
              <div className="pt-4">
                <h3 className="text-[11px] font-bold text-gray-400 uppercase mb-2 tracking-wider">MESSAGE OR ANY OTHER INFORMATION THAT MAY BE HELPFUL <span className="text-red-500">*</span></h3>
                <textarea 
                  required
                  rows={4} 
                  placeholder="Please provide any additional details or information that may be helpful"
                  className="w-full border border-gray-300 px-4 py-3 text-[13px] outline-none focus:border-[#081836] rounded-[2px] placeholder:text-gray-400 resize-none font-medium" 
                />
              </div>

              {/* State/City Input */}
              <div className="pt-2">
                 <h3 className="text-[11px] font-bold text-gray-400 uppercase mb-2 tracking-wider">CITY/STATE</h3>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 px-4 py-[11px] text-[13px] outline-none focus:border-[#081836] rounded-[2px]" 
                />
              </div>

              {/* Consent and Privacy */}
              <div className="space-y-4 pt-4 border-t border-gray-100 mt-6">
                <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                  PUMEC is dedicated to safeguarding and respecting your privacy. We will only use your personal information to manage your account and provide the products and services you have requested from us, as well as sharing other content that may be relevant to you. If you agree to be contacted for these purposes, please indicate your consent below.
                </p>
                
                <label className="flex items-start gap-2 cursor-pointer group my-3">
                  <input required type="checkbox" className="mt-0.5 border-gray-300 rounded-[2px] text-[#081836] focus:ring-[#081836] w-3.5 h-3.5 cursor-pointer accent-[#081836]" />
                  <span className="text-[12px] text-gray-500 font-medium group-hover:text-gray-800 leading-tight">I consent to receive communications from PUMEC.</span>
                </label>

                <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                  You may opt-out of these communications at any time. To unsubscribe, please email info@pumec.com. To learn more about our privacy practices and our commitment to protecting and respecting your privacy, we invite you to review our Privacy Policy.
                </p>
                <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                  By clicking submit below, you authorize PUMEC to store and process the personal information provided.
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="bg-[#081836] text-white font-bold text-[11px] tracking-widest px-8 py-3 rounded-[3px] hover:bg-[#112a4f] transition-colors disabled:opacity-70 uppercase"
                >
                  {isSubmitting ? "PROCESSING..." : "SUBMIT"}
                </button>
              </div>

            </form>
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  );
}
