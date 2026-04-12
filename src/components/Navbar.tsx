"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About", href: "/about", hasMegaMenu: true },
  { label: "Services", href: "/services", hasMegaMenu: true },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const aboutMegaMenu = [
  {
    title: "About Us",
    links: [
      { label: "Mission Statement / Vision", href: "/about/mission-vision" },
      { label: "Core Values", href: "/about/core-values" },
      { label: "Our Team", href: "/about/our-team" },
      { label: "Quality Policy", href: "/about/quality-policy" },
      { label: "Ethics Hotline", href: "/about/ethics-hotline" }
    ]
  },
  {
    title: "Programs",
    links: [
      { label: "Alumni", href: "/about/alumni" },
      { label: "University", href: "/about/university" }
    ]
  },
  {
    title: "News & Events",
    links: [
      { label: "Newsroom", href: "/about/newsroom" },
      { label: "Events", href: "/about/events" }
    ]
  },
  {
    title: "Pay Now",
    links: [
      { label: "Client Payment", href: "/about/client-payment" }
    ]
  }
];

const servicesMegaMenu = [
  {
    title: "Global Expansion",
    links: [
      { label: "Going Global", href: "/services/going-global" },
      { label: "Global Outsourcing", href: "/services/global-outsourcing" },
      { label: "Transfer Pricing", href: "/services/transfer-pricing" },
      { label: "International Desk", href: "/services/international-desk" }
    ]
  },
  {
    title: "International Taxes & Accounting",
    links: [
      { label: "International Taxes", href: "/services/international-taxes" },
      { label: "Real Estate", href: "/services/real-estate" },
      { label: "Family Office", href: "/services/family-office" },
      { label: "Audit & Assurance", href: "/services/audit-assurance" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { label: "SAP B1", href: "/services/sap-b1" },
      { label: "Creatio", href: "/services/creatio" },
      { label: "monday.com", href: "/services/monday-com" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions" },
      { label: "Our Software", href: "/services/our-software" },
      { label: "Partner Software", href: "/services/partner-software" }
    ]
  },
  {
    title: "Entity & Trust Management",
    links: [
      { label: "Expand your local business", href: "/services/expand-your-local-business" },
      { label: "Global Entity Incorporation", href: "/services/global-entity-incorporation" },
      { label: "Global Director Services", href: "/services/global-director-services" },
      { label: "Global Document Retrieval", href: "/services/global-document-retrieval" }
    ]
  },
  {
    title: "Human Capital",
    links: [
      { label: "Optimize your HR department", href: "/services/optimize-your-hr-department" },
      { label: "Staffing Solutions", href: "/services/staffing-solutions" },
      { label: "Payroll Services", href: "/services/payroll-services" },
      { label: "Human Resources", href: "/services/human-resources" }
    ]
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
        scrolled || hoveredItem
          ? "bg-[#050505] border-b border-transparent"
          : "bg-[#050505]/90 backdrop-blur-md border-b border-white/5"
      }`}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="container-custom relative">
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
          <div className="hidden md:flex flex-none items-center justify-center gap-10 h-full">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="h-full flex items-center relative"
                onMouseEnter={() => item.hasMegaMenu ? setHoveredItem(item.label) : setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className="text-white/80 flex items-center gap-1.5 font-medium text-sm tracking-wide hover:text-white transition-colors relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300 py-3"
                >
                  {item.label}
                  {item.hasMegaMenu && (
                    <svg className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-300 ${hoveredItem === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA (Right) */}
          <div className="hidden md:flex flex-1 justify-end items-center">
            <Link
              href="/contact"
              className="bg-white text-black font-semibold text-sm py-3 px-7 rounded hover:-translate-y-0.5 hover:bg-gray-200 transition-all duration-300 border border-transparent"
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

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {(hoveredItem === "Services" || hoveredItem === "About") && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white shadow-2xl border-t-4 border-[#050505] overflow-hidden rounded-b-lg z-50 text-left"
            >
              <div className={`grid gap-8 p-10 relative ${hoveredItem === "Services" ? "grid-cols-5" : "grid-cols-4"} max-w-7xl mx-auto`}>
                {(hoveredItem === "Services" ? servicesMegaMenu : aboutMegaMenu).map((column, idx) => (
                  <div key={idx} className="flex flex-col">
                    <h3 className="text-gray-900 font-bold mb-5 text-[15px] pr-2 tracking-tight">
                      {column.title}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {column.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          <Link
                            href={link.href}
                            className="text-gray-600 hover:text-gray-900 text-sm hover:translate-x-1 block transition-all duration-200 font-medium"
                            onClick={() => setHoveredItem(null)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#050505] border-t border-white/10 px-4"
          >
            <div className="container-custom py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white text-base font-medium py-2 border-b border-white/10 transition-colors flex items-center justify-between"
                    onClick={() => {
                      if (!item.hasMegaMenu) setMobileOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.hasMegaMenu && (
                    <div className="pl-4 py-3 border-l border-white/20 mt-2 space-y-6">
                      {(item.label === "Services" ? servicesMegaMenu : item.label === "About" ? aboutMegaMenu : []).map((col, idx) => (
                        <div key={idx}>
                          <div className="text-white font-semibold mb-3 text-[15px]">{col.title}</div>
                          <ul className="space-y-3 pl-2">
                            {col.links.map((link, i) => (
                              <li key={i}>
                                <Link 
                                  href={link.href} 
                                  onClick={() => setMobileOpen(false)} 
                                  className="text-white/60 text-sm hover:text-white transition-colors block"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex justify-center bg-white text-black font-semibold text-base py-3.5 px-6 rounded hover:bg-gray-200 transition-colors border border-transparent"
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