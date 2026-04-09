"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-navy border-b border-transparent"
          : "bg-navy/90 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="container-custom">
        <div className={`flex items-center justify-between transition-all duration-400 ${scrolled ? 'h-20' : 'h-24'}`}>
          {/* Logo (Left) */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center">
              <div className="bg-white px-3 py-1.5 rounded border border-white/10 transition-">
                <Image 
                  src="/pu_logo.png" 
                  alt="PUMEC Logo" 
                  width={140} 
                  height={45} 
                  className="h-8 w-auto"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Nav (Center) */}
          <div className="hidden md:flex flex-none items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/80 font-medium text-sm tracking-wide hover:text-white transition-colors relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA (Right) */}
          <div className="hidden md:flex flex-1 justify-end items-center">
            <Link
              href="/contact"
              className="bg-white text-slate-900 font-semibold text-sm py-3 px-7 rounded hover:-translate-y-0.5 hover:bg-slate-100 transition-all duration-300 border border-transparent"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-white ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-navy border-t border-white/10"
          >
            <div className="container-custom py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white/80 hover:text-white text-base font-medium py-2 border-b border-white/10 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex justify-center bg-white text-slate-900 font-semibold text-base py-3.5 px-6 rounded hover:bg-slate-100 transition-colors border border-transparent"
              >
                Get Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

