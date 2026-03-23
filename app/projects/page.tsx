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

const projects = [
  {
    name: "Industrial C&I Solar Program",
    location: "Gujarat",
    capacity: "18 MW",
    summary:
      "Delivered integrated EPC and contract support to reduce enterprise power cost exposure.",
  },
  {
    name: "Utility-Linked Solar Plant",
    location: "Rajasthan",
    capacity: "32 MW",
    summary:
      "Optimized generation using tracking architecture and structural performance controls.",
  },
  {
    name: "International Collaboration Case",
    location: "Italy",
    capacity: "10 MW",
    summary:
      "Cross-border standards alignment and delivery governance for project execution confidence.",
  },
];

const projectFlow = [
  "Feasibility and land pathway",
  "Grid and permitting strategy",
  "EPC design and construction",
  "Commissioning and performance validation",
  "Commercial closure and PPA support",
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)]">
      <SiteHeader />
      
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548613143-6c841bbceb0c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/90 to-[var(--primary)]/50"></div>
        <div className="site-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.p variants={fadeInUp} className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-6">Our Portfolio</motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-md">
              Infrastructure Delivery with Measurable Outcomes
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-light leading-relaxed text-white/90 drop-shadow-sm max-w-2xl">
              Selected project references demonstrating execution capability, commercial discipline, and generation performance focus.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <main className="pb-24">
        <section className="site-container pt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-16 md:mb-24 flex flex-col items-center text-center">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Execution Excellence</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-5xl max-w-4xl text-[var(--primary)]">
              Selected Engagements
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              Portfolio examples represent utility and industrial contexts where technical and financial alignment was critical.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.article key={project.name} variants={fadeInUp} className="group relative bg-[#ffffff] border border-[var(--border)] rounded-[32px] p-8 md:p-10 hover:shadow-[0_0_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20" />
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-bold">{project.location}</p>
                    <span className="bg-[var(--background)] border border-[var(--border)] px-4 py-1.5 rounded-full text-sm font-bold text-[var(--primary)]">{project.capacity}</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-[var(--primary)] mb-4">{project.name}</h3>
                  <p className="text-[var(--muted)] leading-relaxed font-medium">
                    {project.summary}
                  </p>
                </div>
                <div className="mt-10 h-12 w-12 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-transparent transition-colors group-hover:text-white text-[var(--primary)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="bg-[var(--background)] py-24 sm:py-32 mt-24 border-y border-[var(--border)]">
          <div className="site-container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 lg:gap-24 items-center">
              <div>
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold leading-tight md:text-5xl text-[var(--primary)]">
                  Project Process
                </motion.h2>
                <motion.p variants={fadeInUp} className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
                  We engineer projects for long-term performance, not short-term commissioning optics. Our execution philosophy connects commercial and technical risk.
                </motion.p>
              </div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative">
                <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-[var(--border)] hidden sm:block" />
                <ul className="space-y-6 sm:space-y-8 relative">
                  {projectFlow.map((step, index) => (
                    <motion.li key={step} variants={fadeInUp} className="flex gap-6 sm:gap-8 items-center group">
                      <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white border-2 border-[var(--border)] text-lg font-bold text-[var(--muted)] shadow-sm group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300">
                        0{index + 1}
                      </span>
                      <div className="bg-white flex-1 p-6 rounded-2xl border border-[var(--border)] shadow-sm group-hover:shadow-md transition-shadow">
                        <p className="text-[var(--primary)] font-semibold text-lg">{step}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="site-container mt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-[var(--primary)] rounded-[48px] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/15 to-transparent pointer-events-none" />
            <motion.p variants={fadeInUp} className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-6">Need a feasibility-first project assessment?</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-10 relative z-10 max-w-3xl mx-auto leading-tight">Discuss location, load profile, and commercial model with our project team.</motion.h2>
            <motion.div variants={fadeInUp} className="relative z-10">
              <Link href="/contact-us" className="inline-block bg-[var(--accent)] text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-[var(--primary)] transition-all hover:scale-[1.02] shadow-[0_0_30px_-5px_var(--accent)]">
                Contact Team
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
