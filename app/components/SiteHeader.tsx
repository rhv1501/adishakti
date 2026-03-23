"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact-us", label: "Contact" },
];

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // If we are on home page, header starts transparent over video
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
        <Link
          href="/"
          className={`text-xl font-bold tracking-tight uppercase transition-colors ${
            transparentMode ? "text-white" : "text-[var(--primary)]"
          }`}
        >
          Adishakti<span className="text-[var(--accent)]">Green</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--accent)] ${
                  transparentMode ? "text-white/90" : "text-[var(--foreground)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact-us"
            className={`inline-flex items-center px-6 py-2.5 text-sm font-semibold transition-all hover:scale-105 ${
              transparentMode
                ? "bg-white text-[var(--primary)] hover:bg-white/90"
                : "bg-[var(--primary)] text-white hover:bg-[#001D33]"
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
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-[#E2E8F0] shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-[var(--foreground)] hover:text-[var(--accent)]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 border-t border-[#E2E8F0] mt-6">
                <Link
                  href="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex w-full justify-center items-center bg-[var(--primary)] text-white px-5 py-4 text-base font-semibold transition-colors hover:bg-[#001D33]"
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
