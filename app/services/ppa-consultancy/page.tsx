"use client";

import Link from "next/link";
import { useState } from "react";
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

const trustMetrics = [
  { value: "175+ MWp", label: "Renewable Power Procurement Facilitation Experience" },
  { value: "800+ MW", label: "Partnered Developer Network Capacity" },
  { value: "9 States", label: "Operational Renewable Energy Presence" },
  { value: "Multi-Sector", label: "Industrial & Utility-Scale Renewable Ecosystem Network" },
];

const services = [
  {
    title: "Open Access Power Procurement",
    description: "We help industries procure renewable power directly from utility-scale solar and wind projects through Open Access frameworks, enabling long-term electricity cost optimization and sustainable energy sourcing."
  },
  {
    title: "Captive & Group Captive Structuring",
    description: "We assist businesses in evaluating and structuring Captive and Group Captive renewable energy models aligned with regulatory, operational, and commercial objectives."
  },
  {
    title: "Developer-Offtaker Matchmaking",
    description: "Through our network of renewable energy developers and industrial consumers, we facilitate strategic power procurement opportunities and long-term PPA partnerships."
  },
  {
    title: "Commercial & Transaction Facilitation",
    description: "We support transaction coordination, commercial alignment, and project-level facilitation between developers, industrial consumers, and associated stakeholders."
  }
];

const whyReasons = [
  {
    title: "Lower & Predictable Power Costs",
    description: "Renewable energy procurement through Open Access and Captive Power models can significantly reduce long-term electricity costs compared to conventional grid tariffs while offering greater pricing predictability."
  },
  {
    title: "Sustainability & ESG Alignment",
    description: "Solar and wind power procurement helps industries strengthen sustainability initiatives, reduce carbon emissions, and align with evolving ESG and environmental compliance objectives."
  },
  {
    title: "Long-Term Competitive Advantage",
    description: "Access to competitively priced renewable energy improves operational efficiency and creates long-term strategic advantages for energy-intensive industries."
  },
  {
    title: "Flexible Procurement Structures",
    description: "Open Access and Captive Power frameworks allow industries to procure renewable power without heavy infrastructure ownership while maintaining operational flexibility."
  }
];

const processSteps = [
  {
    step: "Step 1",
    title: "Understanding Power Requirement",
    description: "We evaluate your power consumption profile, operational requirements, tariff structure, and renewable energy objectives."
  },
  {
    step: "Step 2",
    title: "Identifying Suitable Renewable Energy Projects",
    description: "Based on your requirement, we connect you with suitable solar, wind, or hybrid renewable energy opportunities from our partnered developer ecosystem."
  },
  {
    step: "Step 3",
    title: "Commercial & Regulatory Structuring",
    description: "We support Open Access or Captive Power structuring, commercial alignment, and transaction facilitation between stakeholders."
  },
  {
    step: "Step 4",
    title: "Long-Term Renewable Power Procurement",
    description: "Once operational, renewable energy is supplied through the grid, enabling long-term electricity savings and sustainable power sourcing."
  }
];

const industries = [
  "Cement", "Steel", "Automotive", "Manufacturing", "Chemicals", "FMCG", "Data Centers", "Textiles", "Infrastructure & Industrial Parks"
];

const faqs = [
  {
    q: "What is Open Access Power Procurement?",
    a: "Open Access allows industries to procure electricity directly from large-scale renewable energy projects using existing transmission infrastructure instead of relying entirely on conventional utility supply."
  },
  {
    q: "What is Group Captive Power?",
    a: "Group Captive structures allow multiple consumers to collectively participate in renewable energy projects while benefiting from long-term renewable power procurement advantages."
  },
  {
    q: "Which industries benefit most from renewable PPAs?",
    a: "Industries with high electricity consumption such as cement, steel, manufacturing, automotive, chemicals, textiles, and data centers typically benefit significantly from renewable power procurement."
  },
  {
    q: "Can renewable power reduce electricity costs?",
    a: "Depending on location, consumption profile, and procurement structure, renewable power procurement can offer substantial long-term cost optimization compared to conventional tariffs."
  },
  {
    q: "Which states do you currently operate in?",
    a: "We currently have operational presence across Tamil Nadu, Andhra Pradesh, Telangana, Karnataka, Maharashtra, Gujarat, Rajasthan, Odisha, and Madhya Pradesh."
  }
];

export default function PPAConsultancy() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)]">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/60 via-[var(--primary)] to-[var(--primary)]"></div>
        <div className="site-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.p variants={fadeInUp} className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-6">PPA Consultancy</motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-white">
              Strategic Open Access & Captive Power PPA Consultancy
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-light leading-relaxed text-white/80 mb-12 max-w-3xl">
              We help renewable energy developers and industrial power consumers structure long-term solar and wind power procurement solutions through Open Access and Captive Power models across India.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
              <Link href="/contact-us" className="px-8 py-4 bg-[var(--accent)] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#0e9d6d] transition-all rounded-full shadow-lg shadow-[var(--accent)]/20">
                Explore Power Procurement
              </Link>
              <Link href="/contact-us" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[var(--primary)] transition-all rounded-full">
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="site-container -mt-12 relative z-20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] shadow-2xl rounded-[32px] overflow-hidden border border-[var(--border)]"
        >
          {trustMetrics.map((item, i) => (
            <div key={i} className="bg-white p-10 flex flex-col justify-center">
              <p className="text-4xl font-extrabold text-[var(--primary)] mb-2">{item.value}</p>
              <p className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider leading-relaxed">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32">
        <div className="site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-[var(--primary)] mb-8 leading-tight">
                Bridging Renewable Energy Developers & Industrial Power Consumers
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-6 text-lg text-[var(--muted)] leading-relaxed">
                <p>
                  At Aadishakti Green Systems, we work at the intersection of renewable energy development and industrial power procurement. Our role is to help renewable energy developers secure reliable industrial offtakers while enabling commercial and industrial consumers to access competitively priced solar and wind power through Open Access and Captive Power structures.
                </p>
                <p>
                  Through our ecosystem-driven approach, we support project identification, commercial structuring, transaction facilitation, and long-term renewable power procurement strategies tailored to industrial energy requirements.
                </p>
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Consultancy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[var(--accent)] text-white p-8 rounded-[32px] shadow-xl max-w-xs">
                <p className="text-3xl font-bold mb-2">175+ MWp</p>
                <p className="text-sm font-medium opacity-90">Facilitation experience across India's key industrial hubs.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[var(--background)] py-24 md:py-32 border-t border-[var(--border)]">
        <div className="site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-4">Our Expertise</motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-[var(--primary)]">Our PPA Consultancy Services</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-10 rounded-[32px] border border-[var(--border)] shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-[var(--background)] flex items-center justify-center mb-8 border border-[var(--border)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-colors">
                  <svg className="w-7 h-7 text-[var(--accent)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">{service.title}</h3>
                <p className="text-[var(--muted)] leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 md:py-32">
        <div className="site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-[var(--primary)]">Why Renewable Energy & Open Access?</motion.h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyReasons.map((reason, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-8 rounded-[32px] border border-[var(--border)] shadow-sm">
                <div className="text-4xl font-black text-[var(--background)] mb-6">0{i+1}</div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--primary)] py-24 md:py-32 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent"></div>
        <div className="site-container relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold">How Renewable Power Procurement Works</motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative">
                <div className="text-sm font-bold text-[var(--accent)] uppercase tracking-widest mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-white/20"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 md:py-32">
        <div className="site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-[var(--primary)] mb-6">Industries We Serve</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[var(--muted)] max-w-2xl mx-auto">Renewable Power Solutions Across Multiple Industrial Sectors</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-wrap justify-center gap-4">
            {industries.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="px-8 py-4 bg-white border border-[var(--border)] rounded-full text-sm font-bold text-[var(--primary)] shadow-sm hover:shadow-md hover:border-[var(--accent)] transition-all cursor-default">
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Aadishakti Green Systems */}
      <section className="bg-[var(--background)] py-24 md:py-32 border-t border-b border-[var(--border)]">
        <div className="site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-[var(--primary)]">Why Aadishakti Green Systems</motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { t: "Strong Developer Network Access", d: "Access to renewable energy opportunities across multiple stages of development and execution." },
              { t: "Commercially Focused Approach", d: "Focused on practical, commercially viable, and execution-oriented renewable power procurement solutions." },
              { t: "Multi-State Renewable Ecosystem Presence", d: "Operational presence across key renewable energy markets including TN, AP, TS, KA, MH, GJ, RJ, OD, and MP." },
              { t: "Execution & Transaction Facilitation", d: "Supporting coordination across developers, industrial consumers, and ecosystem stakeholders for smoother project execution." }
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-10 rounded-[32px] border border-[var(--border)] flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 text-[var(--accent)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-2">{item.t}</h3>
                  <p className="text-[var(--muted)] leading-relaxed">{item.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transaction Experience */}
      <section className="py-24 md:py-32">
        <div className="site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="bg-[var(--primary)] rounded-[40px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10 grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-[var(--accent)]">175+ MWp</h2>
                <p className="text-xl font-bold uppercase tracking-widest text-white/80">Procurement Experience</p>
              </div>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>Aadishakti Green Systems has supported multiple renewable energy developers and industrial consumers in facilitating and structuring utility-scale renewable power procurement opportunities across India.</p>
                <p className="text-sm italic opacity-60">Due to confidentiality commitments and non-disclosure obligations, specific project counterparties and transaction details remain undisclosed.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="site-container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-[var(--primary)]">Frequently Asked Questions</motion.h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="border border-[var(--border)] rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-[var(--background)] transition-colors"
                >
                  <span className="font-bold text-[var(--primary)] pr-8">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[var(--accent)] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-[var(--muted)] leading-relaxed border-t border-[var(--border)] mx-6 mt-0">
                    <div className="pt-6">{faq.a}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32">
        <div className="site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-4xl mx-auto">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-6xl font-bold text-[var(--primary)] mb-8 leading-tight">
              Looking to Procure Renewable Power or Secure Industrial Offtake?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[var(--muted)] mb-12 leading-relaxed">
              Whether you are a renewable energy developer seeking industrial power buyers or an industrial consumer exploring long-term renewable power procurement, Aadishakti Green Systems can help structure commercially aligned and execution-focused solutions.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6">
              <Link href="/contact-us" className="px-10 py-5 bg-[var(--primary)] text-white text-sm font-bold tracking-widest uppercase rounded-full hover:bg-[var(--accent)] transition-all shadow-xl">
                Schedule a Consultation
              </Link>
              <Link href="/projects" className="px-10 py-5 border-2 border-[var(--primary)] text-[var(--primary)] text-sm font-bold tracking-widest uppercase rounded-full hover:bg-[var(--primary)] hover:text-white transition-all">
                Explore Renewable Opportunities
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
