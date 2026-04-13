"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
export default function CareersPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#fcfcfc] text-[#050505]">
      <div className="container-custom px-4 text-center mt-32">
         <h1 className="text-5xl font-medium text-black mb-6">Careers</h1>
         <p className="text-black/60 text-xl font-light max-w-2xl mx-auto">
           Join our team of experts in audit, taxation, and advisory.
           <br />Contact us at <strong>careers@pumec.com</strong>
         </p>
      </div>
    </main>
  );
}