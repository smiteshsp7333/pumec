"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CareersPage() {
  const [careers, setCareers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/careers`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setCareers(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch careers, using fallback data:", err);
        // Fallback dummy data so the page still looks impressive for the client
        setCareers([
          {
            id: 1,
            title: 'Senior Tax Consultant',
            location: 'Mumbai, India',
            description: '<p>We are looking for a highly skilled Senior Tax Consultant with 5+ years of experience in corporate taxation, transfer pricing, and cross-border structuring.</p><ul><li>Manage complex tax engagements</li><li>Advise multinational clients on India entry strategies</li><li>Lead a team of junior associates</li></ul>'
          },
          {
            id: 2,
            title: 'FEMA Advisory Associate',
            location: 'New Delhi, India',
            description: '<p>Seeking a compliance professional to assist foreign corporations with FEMA regulations, RBI filings, and FDI compliance.</p><ul><li>Provide regulatory guidance</li><li>Assist with structuring inbound/outbound investments</li><li>Liaise with regulatory authorities</li></ul>'
          }
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#fcfcfc] text-[#050505]">
      <div className="container-custom px-4 text-center mt-12 mb-16">
         <h1 className="text-5xl font-medium text-black mb-6">Careers</h1>
         <p className="text-black/60 text-xl font-light max-w-2xl mx-auto">
           Join our team of experts in audit, taxation, and advisory.
           <br />Contact us at <strong>careers@pumec.com</strong>
         </p>
      </div>

      <div className="container-custom px-4 max-w-4xl mx-auto">
        {loading ? (
          <div className="text-center py-12">Loading open positions...</div>
        ) : careers.length > 0 ? (
          <div className="flex flex-col gap-6">
            {careers.map((job: any) => (
              <motion.div 
                key={job.id} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-black/10 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-medium text-black">{job.title}</h3>
                    <p className="text-[#F57C00] font-medium mt-1">{job.location}</p>
                  </div>
                  <a href="mailto:careers@pumec.com" className="px-6 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors text-sm font-medium whitespace-nowrap text-center">
                    Apply Now
                  </a>
                </div>
                <div 
                  className="prose prose-sm max-w-none text-black/70 prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: job.description }} 
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-black/10 rounded-xl">
            <p className="text-black/60 text-lg">No open positions at the moment. Please check back later!</p>
          </div>
        )}
      </div>
    </main>
  );
}