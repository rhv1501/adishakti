"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { 
    label: "Services",
    children: [
      { href: "/services/ppa-consultancy", label: "PPA Consultancy" },
      { href: "/services/land-aggregation", label: "Land & Grid Connectivity" },
      { href: "/services/epc-contracting", label: "Turnkey EPC" },
    ]
  },
  { href: "/projects", label: "Projects" },
  { href: "/contact-us", label: "Contact" },
];

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparentMode = isHome && !isScrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        transparentMode
          ? "bg-transparent py-2"
          : "bg-white/90 backdrop-blur-md shadow-sm border-b border-[#E2E8F0] py-0"
      }`}
    >
      <div className="site-container flex h-20 items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Adishakti Green Logo" 
            className={`h-10 w-auto -translate-y-1.5 transition-all duration-300 ${
              transparentMode ? "brightness-0 invert" : ""
            }`}
          />
          <span className={`text-xl font-bold tracking-tight uppercase transition-colors ${
            transparentMode ? "text-white" : "text-[var(--primary)]"
          }`}>
            Adishakti<span className="text-[var(--accent)]">Green</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              link.children ? (
                <div 
                  key={link.label}
                  className="relative group py-8"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-bold transition-colors hover:text-[var(--accent)] uppercase tracking-wider ${
                      transparentMode ? "text-white/90" : "text-[var(--foreground)]"
                    }`}
                  >
                    {link.label}
                    <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-[var(--border)] overflow-hidden py-2"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-6 py-3 text-sm font-bold text-[var(--primary)] hover:bg-[var(--background)] hover:text-[var(--accent)] transition-all"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold transition-colors hover:text-[var(--accent)] uppercase tracking-wider ${
                    transparentMode ? "text-white/90" : "text-[var(--foreground)]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>
          <Link
            href="/contact-us"
            className={`inline-flex items-center px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 rounded-full ${
              transparentMode
                ? "bg-white text-[var(--primary)] hover:bg-[var(--accent)] hover:text-white"
                : "bg-[var(--primary)] text-white hover:bg-[var(--accent)]"
            }`}
          >
            Talk to Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${
            transparentMode ? "text-white" : "text-[var(--primary)]"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[60] overflow-y-auto"
          >
            <div className="flex h-20 items-center justify-between site-container border-b border-[var(--border)]">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                <img src="/logo.png" alt="Adishakti Green Logo" className="h-10 w-auto -translate-y-1.5" />
                <span className="text-xl font-bold text-[var(--primary)] uppercase tracking-tight">
                  Adishakti<span className="text-[var(--accent)]">Green</span>
                </span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="text-[var(--primary)] p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <nav className="flex flex-col p-8 space-y-6">
              {links.map((link) => (
                link.children ? (
                  <div key={link.label} className="space-y-4">
                    <p className="text-xs font-bold text-[var(--muted)] uppercase tracking-widest">{link.label}</p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-2xl font-bold text-[var(--primary)] hover:text-[var(--accent)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-[var(--primary)] hover:text-[var(--accent)]"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="pt-8 border-t border-[var(--border)]">
                <Link
                  href="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex w-full justify-center items-center bg-[var(--primary)] text-white px-8 py-5 text-lg font-bold uppercase tracking-widest rounded-full"
                >
                  Talk to Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
