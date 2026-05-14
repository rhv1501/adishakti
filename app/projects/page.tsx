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
      "Delivered integrated EPC and contract support to reduce enterprise power cost exposure through structured PPA models.",
  },
  {
    name: "Utility-Linked Solar Plant",
    location: "Rajasthan",
    capacity: "32 MW",
    summary:
      "Optimized generation performance using advanced tracking architecture and real-time structural performance controls.",
  },
  {
    name: "International Collaboration Case",
    location: "Italy",
    capacity: "10 MW",
    summary:
      "Technical advisory and cross-border standards alignment for project execution confidence in high-regulation environments.",
  },
];

const projectFlow = [
  {
    title: "Feasibility and Land Pathway",
    description: "Rigorous assessment of land viability, connectivity, and local regulatory requirements."
  },
  {
    title: "Grid and Permitting Strategy",
    description: "Structuring the approval pipeline and grid connectivity technical requirements."
  },
  {
    title: "EPC Design and Construction",
    description: "High-precision engineering and execution governed by international quality standards."
  },
  {
    title: "Commissioning and Performance Validation",
    description: "End-to-end testing and performance benchmarking for long-term generation certainty."
  },
  {
    title: "Commercial Closure and PPA Support",
    description: "Structuring the final power sale agreements for optimal financial yields."
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)]">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/projects_consultancy_hero_abstract_1778774348213.png" 
            alt="Our Projects" 
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/60 via-[var(--primary)] to-[var(--primary)]" />
        </div>
        
        <div className="site-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-5xl">
            <motion.p variants={fadeInUp} className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-6">Our Portfolio</motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-8 text-white">
              Infrastructure Delivery with<br className="hidden md:block" /> Measurable Outcomes
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-light leading-relaxed text-white/80 max-w-3xl">
              Selected project references demonstrating execution capability, commercial discipline, and generation performance focus across industrial and utility scales.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <main className="pb-32">
        {/* Selected Engagements */}
        <section className="site-container pt-24 sm:pt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-16 md:mb-24 flex flex-col items-center text-center">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Execution Excellence</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-4 text-4xl md:text-6xl font-bold leading-tight max-w-4xl text-[var(--primary)] tracking-tight">
              Selected Engagements
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.article key={project.name} variants={fadeInUp} className="group relative bg-white border border-[var(--border)] rounded-[40px] p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-between min-h-[420px]">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[var(--accent)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20" />
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-bold">{project.location}</p>
                    <span className="bg-[var(--background)] border border-[var(--border)] px-5 py-2 rounded-full text-sm font-bold text-[var(--primary)]">{project.capacity}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-6 group-hover:text-[var(--accent)] transition-colors">{project.name}</h3>
                  <p className="text-lg text-[var(--muted)] leading-relaxed font-light">
                    {project.summary}
                  </p>
                </div>
                <div className="mt-12 w-14 h-14 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-transparent transition-all group-hover:text-white text-[var(--primary)] shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Project Process - Vertical Timeline */}
        <section className="bg-[var(--primary)] py-24 sm:py-32 mt-32 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent pointer-events-none" />
          <div className="site-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
              <div>
                <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                  Strategic Project Architecture
                </motion.h2>
                <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-8 text-xl text-white/70 leading-relaxed font-light max-w-xl">
                  We engineer projects for long-term performance, not short-term commissioning optics. Our execution philosophy connects commercial yields with technical risk management.
                </motion.p>
              </div>
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative">
                <div className="absolute left-[31px] top-8 bottom-8 w-px bg-white/10 hidden sm:block" />
                <ul className="space-y-12 relative">
                  {projectFlow.map((step, index) => (
                    <motion.li key={step.title} variants={fadeInUp} className="flex gap-8 items-start group">
                      <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent)] text-xl font-black text-white shadow-lg shadow-[var(--accent)]/20">
                        {index + 1}
                      </span>
                      <div className="flex-1 pt-2">
                        <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
                        <p className="text-white/60 text-lg font-light leading-relaxed">{step.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="site-container mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-white border border-[var(--border)] rounded-[56px] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <motion.p variants={fadeInUp} className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-8">Ready to Build</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-7xl font-bold mb-12 relative z-10 max-w-4xl mx-auto leading-[1.1] text-[var(--primary)] tracking-tight">Discuss your load profile and commercial model with us.</motion.h2>
            <motion.div variants={fadeInUp} className="relative z-10">
              <Link href="/contact-us" className="inline-block bg-[var(--primary)] text-white px-12 py-6 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-[var(--accent)] transition-all hover:scale-[1.05] shadow-xl shadow-[var(--primary)]/10">
                Contact Project Team
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
