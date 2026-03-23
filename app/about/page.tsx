"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

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

const facts = [
  { value: "500+", unit: "MW", label: "Capacity across managed utility scope" },
  { value: "13,500+", unit: "Acres", label: "Aggregated for renewable pathways" },
  { value: "9", unit: "States", label: "Footprint with regional execution capability" },
  { value: "Global", unit: "Scale", label: "International project collaboration experience" },
];

const values = [
  {
    title: "Execution Discipline",
    text: "Every engagement is governed with milestone-based project controls and transparent reporting.",
  },
  {
    title: "Technical Rigor",
    text: "Engineering decisions are linked to generation outcomes, lifecycle durability, and maintainability.",
  },
  {
    title: "Commercial Clarity",
    text: "Financial modelling and contract structures are aligned to long-term enterprise energy strategy.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)]">
      <SiteHeader />
      
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/90 to-[var(--primary)]/50"></div>
        <div className="site-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.p variants={fadeInUp} className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-6">About Adishakti</motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-md">
              "From Nature comes Power,<br/>From Power comes Prosperity"
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-light leading-relaxed text-white/90 drop-shadow-sm max-w-2xl">
              We operate as the bridge between energy producers and industrial consumers — architecting the entire renewable value chain from land acquisition to final power sale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <main className="pb-24">
        {/* Foundation & Leadership */}
        <section className="site-container pt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-center">
            <motion.div variants={fadeInUp} className="bg-white p-8 md:p-12 rounded-[32px] border border-[var(--border)] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--accent)]" />
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">Corporate Facts</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-widest text-[var(--muted)] font-bold mb-1">Founded</p>
                  <p className="text-xl font-bold text-[var(--foreground)]">July 14, 2025</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-[var(--muted)] font-bold mb-1">Founder & CEO</p>
                  <p className="text-xl font-bold text-[var(--foreground)]">Ayush Parakh</p>
                  <p className="text-sm text-[var(--muted)] mt-1">Energy Systems Expert</p>
                </div>
              </div>
            </motion.div>
            
            <div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-[var(--primary)] mb-6">Real Estate Developers for Renewable Energy</motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-[var(--muted)] leading-relaxed mb-6">
                Adishakti Green Systems Pvt Ltd is a specialized renewable energy solutions company that provides true end-to-end services. We don't just build solar plants — we control the entire infrastructure lifecycle.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg text-[var(--muted)] leading-relaxed">
                By connecting grid-scale solar and wind developers directly with high-consumption industries, we eliminate friction and structure long-term financial victories for all stakeholders.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Impact Numbers */}
        <section className="site-container pt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {facts.map((item) => (
              <motion.article 
                variants={fadeInUp} 
                key={item.label} 
                className="group relative bg-[#ffffff] border border-[var(--border)] rounded-[32px] p-8 hover:shadow-[0_0_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20" />
                <div className="flex items-baseline gap-2 mb-4 relative z-10">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[var(--primary)]">{item.value}</span>
                  <span className="text-xl font-bold text-[var(--accent)]">{item.unit}</span>
                </div>
                <div className="h-px w-12 bg-[var(--border)] mb-4 group-hover:w-full group-hover:bg-[var(--accent)] transition-all duration-500 relative z-10" />
                <p className="text-sm font-medium leading-relaxed text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors duration-300 relative z-10">
                  {item.label}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Operating Principles */}
        <section className="site-container pt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-12 flex flex-col items-center text-center">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Our Philosophy</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-4 text-3xl font-bold leading-tight md:text-5xl max-w-2xl text-[var(--primary)]">
              Operating Principles
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <motion.article key={value.title} variants={fadeInUp} className="group flex flex-col justify-between p-8 md:p-10 rounded-[32px] bg-[var(--primary)] text-white hover:-translate-y-2 transition-all duration-300 shadow-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-transparent mix-blend-overlay"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 pr-8 text-white">{value.title}</h3>
                  <p className="text-white/80 leading-relaxed font-medium">
                    {value.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <section className="site-container mt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-[var(--primary)] rounded-[48px] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/15 to-transparent pointer-events-none" />
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-8 relative z-10 max-w-2xl mx-auto leading-tight">Partner with an execution-focused renewable team</motion.h2>
            <motion.div variants={fadeInUp} className="relative z-10">
              <Link href="/contact-us" className="inline-block bg-[var(--accent)] text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-[var(--primary)] transition-all hover:scale-[1.02] shadow-[0_0_30px_-5px_var(--accent)]">
                Discuss Your Framework
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
