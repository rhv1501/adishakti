"use client";

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
    transition: { staggerChildren: 0.1 }
  }
};

const contactDetails = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "contact@aadishaktigreensystems.com"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+919363987964"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Coverage",
    value: "Pan India Presence"
  }
];

const nextSteps = [
  {
    title: "Inquiry Analysis",
    description: "Our strategic team reviews your current energy profile and business objectives."
  },
  {
    title: "Feasibility Review",
    description: "Initial techno-commercial assessment based on load requirements and geographical location."
  },
  {
    title: "Consultation Call",
    description: "A deep-dive discussion to outline a structured roadmap for your renewable energy transition."
  }
];

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)]">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[var(--primary)]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/contact_consultancy_hero_abstract_1778774249951.png" 
            alt="Contact Us" 
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/60 via-[var(--primary)] to-[var(--primary)]" />
        </div>

        <div className="site-container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.p variants={fadeInUp} className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-6">
              Strategic Engagement
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-8 text-white">
              Connect with Our<br />Strategic Team
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-2xl text-xl md:text-2xl font-light leading-relaxed text-white/80 mb-12">
              Share your current energy profile. We will return with a structured roadmap for execution certainty and long-horizon financial outcomes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <main className="site-container -mt-12 md:-mt-24 relative z-20 pb-32">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Contact Form */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="lg:col-span-7 bg-white p-8 md:p-16 rounded-[40px] shadow-2xl border border-[var(--border)]"
          >
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">Inquiry Form</h2>
            <form className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Full Name</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-2xl px-6 py-4 outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Company</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-2xl px-6 py-4 outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Monthly Power Bill (Approx INR)</label>
                <input 
                  type="number" 
                  required 
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-2xl px-6 py-4 outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Location</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-2xl px-6 py-4 outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10 transition-all font-medium"
                />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Primary Objective</label>
                <textarea 
                  rows={4}
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-3xl px-6 py-4 outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10 transition-all font-medium resize-none"
                ></textarea>
              </div>
              <div className="sm:col-span-2 pt-4">
                <button 
                  type="submit"
                  className="w-full sm:w-fit px-12 py-5 bg-[var(--accent)] text-white text-sm font-bold tracking-widest uppercase rounded-full hover:bg-[var(--primary)] transition-all shadow-xl shadow-[var(--accent)]/20"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </motion.div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Details Cards */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={staggerContainer}
              className="grid gap-4"
            >
              {contactDetails.map((detail, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="bg-white p-6 md:p-8 rounded-[32px] border border-[var(--border)] shadow-xl flex items-center gap-6 group hover:border-[var(--accent)] transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[var(--background)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-[var(--muted)] text-xs font-bold uppercase tracking-widest mb-1">{detail.label}</p>
                    <p className="text-[var(--primary)] font-bold text-lg">{detail.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pipeline Step Card */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="bg-[var(--primary)] p-8 md:p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <h3 className="text-2xl font-bold mb-8 relative z-10">What Happens Next</h3>
              <div className="space-y-8 relative z-10">
                {nextSteps.map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent)] text-white flex items-center justify-center font-black flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
