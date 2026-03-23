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

export default function LandAggregation() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)]">
      <SiteHeader />
      
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/90 to-[var(--primary)]/60"></div>
        <div className="site-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.p variants={fadeInUp} className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-6">Service Vertical 01</motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-md">
              Land Aggregation & Grid Connectivity
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-light leading-relaxed text-white/90 drop-shadow-sm max-w-2xl">
              We find ideal land near substations, aggregate parcels, and secure all statutory approvals for bankable project readiness.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <main className="pb-24">
        <section className="site-container pt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-[var(--primary)] mb-6">The Entry Point</motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-[var(--muted)] leading-relaxed mb-8">
                Before a single solar panel is installed, the foundation of every successful renewable project is secured land and grid connectivity. We handle the entire complex process from identification to approvals.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-4">
                {[
                  "Find ideal land near high-capacity substations",
                  "Aggregate contiguous land parcels efficiently",
                  "Secure statutory approvals and grid connectivity",
                  "Deliver fully compliant, ready-to-execute projects"
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
                <p className="text-sm uppercase tracking-widest text-[var(--muted)] font-bold mb-2">Available Scale</p>
                <p className="text-5xl font-extrabold text-[var(--primary)]">13,500+ <span className="text-2xl text-[var(--accent)]">Acres</span></p>
                <p className="mt-4 text-[var(--muted)] font-medium">Fully aggregated land ready for utility and C&I pathways.</p>
              </div>
              <div className="bg-[#ffffff] p-8 md:p-10 rounded-[32px] border border-[var(--border)] shadow-xl relative overflow-hidden group hover:shadow-[0_0_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--accent)]" />
                <p className="text-sm uppercase tracking-widest text-[var(--muted)] font-bold mb-2">Project Readiness</p>
                <p className="text-5xl font-extrabold text-[var(--primary)]">325+ <span className="text-2xl text-[var(--accent)]">MW</span></p>
                <p className="mt-4 text-[var(--muted)] font-medium">Ready-to-execute infrastructure cleared for development.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="site-container mt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-[var(--primary)] rounded-[40px] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-transparent pointer-events-none" />
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-8 relative z-10 max-w-2xl mx-auto leading-tight">Start Your Renewable Project with the Right Foundation</motion.h2>
            <motion.div variants={fadeInUp} className="relative z-10">
              <Link href="/contact-us" className="inline-block bg-[var(--accent)] text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-[var(--primary)] transition-all hover:scale-105 shadow-[0_0_30px_-5px_var(--accent)]">
                Talk to the Team
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
