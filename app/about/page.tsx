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
  { value: "175+", unit: "MWp", label: "Renewable power procurement facilitation experience" },
  { value: "800+", unit: "MW", label: "Partnered developer network capacity across India" },
  { value: "13,500+", unit: "Acres", label: "Aggregated for renewable development in Tamil Nadu" },
  { value: "9", unit: "States", label: "Operational footprint across key energy corridors" },
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
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/about_consultancy_hero_abstract_1778774298588.png" 
            alt="About Adishakti" 
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/60 via-[var(--primary)] to-[var(--primary)]" />
        </div>
        
        <div className="site-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-5xl">
            <motion.p variants={fadeInUp} className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-6">About Adishakti</motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-8 text-white">
              "From Nature comes Power,<br className="hidden md:block" /> From Power comes Prosperity"
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-light leading-relaxed text-white/80 max-w-3xl">
              We operate as the strategic bridge between energy producers and industrial consumers — architecting the entire renewable value chain from land acquisition to final power sale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <main className="pb-32">
        {/* Foundation & Leadership */}
        <section className="site-container pt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <motion.div variants={fadeInUp} className="lg:col-span-5 bg-white p-10 md:p-16 rounded-[40px] border border-[var(--border)] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-[var(--accent)]" />
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-10">Corporate Facts</h2>
              <div className="space-y-8">
                <div className="group/fact">
                  <p className="text-xs uppercase tracking-widest text-[var(--muted)] font-bold mb-2 group-hover/fact:text-[var(--accent)] transition-colors">Founded</p>
                  <p className="text-2xl font-bold text-[var(--primary)]">July 14, 2025</p>
                </div>
                <div className="group/fact">
                  <p className="text-xs uppercase tracking-widest text-[var(--muted)] font-bold mb-2 group-hover/fact:text-[var(--accent)] transition-colors">Founder & CEO</p>
                  <p className="text-2xl font-bold text-[var(--primary)]">Ayush Parakh</p>
                  <p className="text-sm text-[var(--muted)] mt-2 font-medium">Energy Systems Expert</p>
                </div>
              </div>
            </motion.div>
            
            <div className="lg:col-span-7">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-[var(--primary)] mb-8 tracking-tight">Renewable Energy Development & Facilitation Experts</motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-[var(--muted)] leading-relaxed mb-8 font-light">
                Adishakti Green Systems Pvt Ltd is a specialized renewable energy solutions company that provides true end-to-end services. We don't just build solar plants — we control the entire infrastructure lifecycle.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-xl text-[var(--muted)] leading-relaxed font-light">
                By connecting grid-scale solar and wind developers directly with high-consumption industries, we eliminate friction and structure long-term financial victories for all stakeholders.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Impact Numbers */}
        <section className="site-container pt-24 sm:pt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {facts.map((item) => (
              <motion.article 
                variants={fadeInUp} 
                key={item.label} 
                className="group relative bg-white border border-[var(--border)] rounded-[40px] p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[var(--accent)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20" />
                <div className="flex items-baseline gap-2 mb-6 relative z-10">
                  <span className="text-5xl md:text-6xl font-extrabold tracking-tighter text-[var(--primary)]">{item.value}</span>
                  <span className="text-xl font-bold text-[var(--accent)]">{item.unit}</span>
                </div>
                <div className="h-px w-12 bg-[var(--border)] mb-6 group-hover:w-full group-hover:bg-[var(--accent)] transition-all duration-500 relative z-10" />
                <p className="text-base font-medium leading-relaxed text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors duration-300 relative z-10">
                  {item.label}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Operating Principles */}
        <section className="site-container pt-24 sm:pt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-16 flex flex-col items-center text-center">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Our Philosophy</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-4 text-4xl md:text-6xl font-bold leading-tight max-w-4xl text-[var(--primary)] tracking-tight">
              Operating Principles
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <motion.article key={value.title} variants={fadeInUp} className="group flex flex-col justify-between p-10 rounded-[40px] bg-[var(--primary)] text-white hover:-translate-y-2 transition-all duration-500 shadow-2xl overflow-hidden relative min-h-[320px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-transparent mix-blend-overlay"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 text-white">{value.title}</h3>
                  <p className="text-white/70 text-lg leading-relaxed font-light">
                    {value.text}
                  </p>
                </div>
                <div className="relative z-10 mt-12 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-transparent transition-all">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <section className="site-container mt-24 sm:mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-[var(--primary)] rounded-[56px] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent" />
            </div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-7xl font-bold mb-10 relative z-10 max-w-4xl mx-auto leading-[1.1] tracking-tight">Partner with an execution-focused renewable team</motion.h2>
            <motion.div variants={fadeInUp} className="relative z-10">
              <Link href="/contact-us" className="inline-block bg-[var(--accent)] text-white px-12 py-6 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-[var(--primary)] transition-all hover:scale-[1.05] shadow-[0_0_50px_-10px_var(--accent)]">
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
