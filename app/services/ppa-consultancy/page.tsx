"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function PPAConsultancy() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)]">
      <SiteHeader />
      
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/90 to-[var(--primary)]/60"></div>
        <div className="site-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.p variants={fadeInUp} className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-6">Service Vertical 03</motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-md">
              PPA Consultancy
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-light leading-relaxed text-white/90 drop-shadow-sm max-w-2xl">
              Our flagship competency. We bridge utility-scale power producers with high-energy industries, structuring 12-25 year procurement contracts that cut costs by up to 50%.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <main className="pb-24">
        <section className="site-container pt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-[var(--primary)] mb-6">Financial Transformation</motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-[var(--muted)] leading-relaxed mb-8">
                We design Power Purchase Agreements (PPAs) that convert erratic monthly energy expenses into controllable, long-term financial levers, isolating enterprises from volatile DISCOM rate hikes.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-4">
                {[
                  "Connect power producers precisely with industrial consumers",
                  "Align complex tariff modeling and risk allocation structures",
                  "Lock in predictable, low-rate structures extending 12 to 25 years",
                  "De-risk commercial delivery with bulletproof legal contracting"
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeInUp} className="flex items-start gap-4 text-[var(--foreground)] font-medium">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            <motion.div variants={fadeInUp} className="grid gap-6">
              <div className="bg-[#ffffff] p-8 md:p-10 rounded-[32px] border border-[var(--border)] shadow-xl relative overflow-hidden group hover:shadow-[0_0_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--accent)]" />
                <p className="text-sm uppercase tracking-widest text-[var(--muted)] font-bold mb-2">Cost Reduction Benchmark</p>
                <p className="text-5xl font-extrabold text-[var(--primary)]">Up To <span className="text-[var(--accent)]">50%</span></p>
                <p className="mt-4 text-[var(--muted)] font-medium">Radical reduction on enterprise electricity operating expenses.</p>
              </div>
              <div className="bg-[var(--primary)] p-8 md:p-10 rounded-[32px] shadow-2xl relative overflow-hidden text-white group hover:shadow-[0_0_40px_-15px_var(--primary)] hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-transparent"></div>
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-bold mb-2">Real Case Savings</p>
                  <p className="text-5xl font-extrabold">₹14.1 <span className="text-2xl text-white/70">Cr / Year</span></p>
                  <p className="mt-4 text-white/80 font-medium">Client successfully optimized bill from ₹2 Cr/month down to ₹82.5L/month.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="site-container mt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-[var(--primary)] rounded-[40px] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-transparent pointer-events-none" />
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-8 relative z-10 max-w-2xl mx-auto leading-tight">Secure Your Long-Horizon Cost Structure Today</motion.h2>
            <motion.div variants={fadeInUp} className="relative z-10">
              <Link href="/contact-us" className="inline-block bg-[var(--accent)] text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-[var(--primary)] transition-all hover:scale-105 shadow-[0_0_30px_-5px_var(--accent)]">
                Structure a PPA
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
