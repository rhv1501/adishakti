"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

// Base animation variants
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
  { 
    label: "Renewable Energy Opportunities", 
    value: "800+ MW",
    detail: "Looking to reduce your electricity costs? Through our partnered network of reputed renewable energy developers, we help industries procure competitively priced solar and wind power via Open Access and Captive models. With access to 800+ MW of active renewable capacity, we enable faster, reliable, and commercially optimized power sourcing solutions."
  },
  { 
    label: "Execution-Ready Opportunities", 
    value: "300+ MW",
    detail: "We provide developers access to renewable energy opportunities with land, GO approvals, LFS availability, and project development components bundled into structured package deals. Through direct owner connectivity and a transparent transaction process, we help developers evaluate and acquire execution-ready projects efficiently without unnecessary intermediary layers."
  },
  { 
    label: "Land for Development", 
    value: "13,500+ Acres",
    detail: "We help solar and wind developers secure large-scale land opportunities across Tamil Nadu through our extensive network of landowners and regional partners. With access to over 13,500 acres across multiple renewable energy zones, we support developers in identifying, evaluating, aggregating, and structuring land acquisitions for utility-scale project deployment."
  },
  { 
    label: "Operational Presence", 
    value: "9 States",
    detail: "Aadishakti Green Systems currently operates across Madhya Pradesh, Gujarat, Rajasthan, Maharashtra, Odisha, Tamil Nadu, Andhra Pradesh, Telangana, and Karnataka through its renewable energy development and partner network ecosystem. Our growing regional presence enables us to support solar and wind opportunities across multiple high-potential markets."
  },
];

const industryProcessSteps = [
  {
    title: "Understanding Your Power Requirement",
    description: "We analyze your power consumption patterns, operational requirements, and electricity tariff structure to identify the most suitable renewable energy procurement model."
  },
  {
    title: "Identifying Suitable Renewable Energy Projects",
    description: "Based on your location and power demand, we connect you with suitable solar or wind projects from our partnered developer network."
  },
  {
    title: "Commercial Structuring & PPA Facilitation",
    description: "We help structure Open Access or Captive Power agreements aligned with your commercial and operational objectives."
  },
  {
    title: "Power Supply & Long-Term Savings",
    description: "Once operational, renewable power is supplied through the grid, enabling long-term electricity cost savings and sustainability benefits."
  }
];

const developerProcessSteps = [
  {
    title: "Share Your Project Requirement",
    description: "Developers share requirements including state, capacity, technology, land size, and grid preference."
  },
  {
    title: "Opportunity Identification",
    description: "We identify land parcels, development-stage opportunities, or package deals from our network."
  },
  {
    title: "Preliminary Details Sharing",
    description: "We share location, land extent, status of aggregation, grid connectivity stage, and transaction structure."
  },
  {
    title: "Direct Stakeholder Discussion",
    description: "We facilitate transparent discussions with relevant landowners or project owners for direct evaluation."
  },
  {
    title: "Due Diligence Support",
    description: "We coordinate technical, legal, and financial due diligence to ensure smooth progress toward closure."
  },
  {
    title: "Development or Acquisition",
    description: "The developer proceeds with acquisition or execution depending on the nature of the opportunity."
  }
];

const services = [
  {
    title: "PPA Consultancy",
    detail:
      "Industry-developer alignment, tariff modelling, and contract structuring designed for long-term cost predictability and risk control.",
    href: "/services/ppa-consultancy",
  },
  {
    title: "Land Aggregation and Grid Connectivity",
    detail:
      "Substation identification, land acquisition support, load-flow studies, and statutory approvals for bankable project readiness.",
    href: "/services/land-aggregation",
  },
  {
    title: "Turnkey EPC Contracting",
    detail:
      "End-to-end solar plant construction (2-50 MW) with in-house execution, anti-sagging structures, hydrophobic coatings, and tracking systems.",
    href: "/services/epc-contracting",
  },
];

const whyRenewableData = [
  {
    title: "Lower & Predictable Power Costs",
    description: "Renewable energy through Open Access and Captive Power models helps industries significantly reduce electricity expenses compared to conventional grid tariffs. Long-term PPAs also provide greater tariff stability."
  },
  {
    title: "Improve Sustainability & ESG Goals",
    description: "Switching to solar and wind energy helps industries reduce their carbon footprint and move towards cleaner operations. Renewable power adoption also strengthens ESG compliance and sustainability reporting."
  },
  {
    title: "Long-Term Competitive Advantage",
    description: "Power is one of the largest operating costs for many industries. Access to competitively priced renewable energy improves long-term operational efficiency and enhances profitability."
  },
  {
    title: "Flexible Procurement Structures",
    description: "Open Access and Captive Power models allow industries to procure renewable energy directly from large-scale solar and wind projects without investing heavily into infrastructure themselves."
  }
];



const clients = [
  "Manufacturing",
  "Hospitals",
  "Malls",
  "Airports",
  "Institutional Investors",
  "Energy Developers",
];

const globalImpact = [
  {
    value: "175+",
    unit: "MWp",
    label: "Renewable Power Procurement Facilitation Experience",
  },
  {
    value: "800+",
    unit: "MW",
    label: "Partnered Developer Network Capacity",
  },
  {
    value: "13,500+",
    unit: "acres",
    label: "land aggregated for utility and C&I pathways",
  },
  {
    value: "9",
    unit: "states",
    label: "execution footprint with local project governance",
  },
];



export default function Home() {
  const [activeMetric, setActiveMetric] = useState<number | null>(null);
  const [processType, setProcessType] = useState<"industries" | "developers">("industries");

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)]">
      <SiteHeader />

      <section className="relative h-screen flex items-center overflow-hidden bg-[var(--primary)]">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="h-full w-full object-cover opacity-60"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent" />
        </div>

        <div className="site-container relative z-10 w-full text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.p variants={fadeInUp} className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-6">
              Strategic Renewable Energy Partners
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
              Facilitating India&apos;s Energy Transition
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-2xl text-xl md:text-2xl font-light leading-relaxed text-white/90 mb-12">
              Predominant consultants in Power Purchase Agreements (PPA), Land Aggregation, and Grid Connectivity. We bridge the gap between renewable energy developers and industrial power consumers.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
              <Link href="/services/ppa-consultancy" className="px-10 py-5 bg-[var(--accent)] text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[var(--primary)] transition-all rounded-full shadow-2xl shadow-[var(--accent)]/20">
                Explore Solutions
              </Link>
              <Link href="/contact-us" className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[var(--primary)] transition-all rounded-full">
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <main className="pb-24 md:pb-32">
        {/* Trust Metrics Section */}
        <section className="site-container -mt-16 relative z-20">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {trustMetrics.map((item, index) => (
              <motion.article 
                key={item.label} 
                variants={fadeInUp} 
                onClick={() => setActiveMetric(activeMetric === index ? null : index)}
                className={`cursor-pointer bg-white p-10 flex flex-col justify-center rounded-[32px] border border-[var(--border)] shadow-2xl transition-all duration-500 hover:shadow-3xl ${activeMetric === index ? 'ring-2 ring-[var(--accent)] scale-[1.02]' : ''}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <p className="text-4xl font-extrabold tracking-tighter text-[var(--primary)]">
                    {item.value}
                  </p>
                  <motion.div 
                    animate={{ rotate: activeMetric === index ? 180 : 0 }}
                    className="text-[var(--accent)]"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </motion.div>
                </div>
                <p className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider leading-relaxed">
                  {item.label}
                </p>
                
                <AnimatePresence>
                  {activeMetric === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-6 text-sm text-[var(--muted)] leading-relaxed border-t border-[var(--border)] pt-6">
                        {item.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Core Services Grid */}
        <section id="services" className="site-container pt-24 sm:pt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-16 md:mb-24 flex flex-col items-center text-center">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Core Verticals</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl max-w-4xl text-[var(--primary)]">
              Integrated Service Architecture
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              Three integrated service verticals designed for infrastructure certainty and financial outcomes.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link href={service.href} key={service.title} className="block">
                <motion.article variants={fadeInUp} className="group flex flex-col justify-between p-10 rounded-[40px] text-white hover:-translate-y-2 transition-all duration-300 shadow-xl overflow-hidden relative h-full min-h-[400px]">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ 
                      backgroundImage: `url('${
                        idx === 0 ? "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" 
                        : idx === 1 ? "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80" 
                        : "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80"
                      }')` 
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/80 to-transparent"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-6 text-white drop-shadow-md">{service.title}</h3>
                    <p className="text-white/90 leading-relaxed text-lg drop-shadow-sm font-light">
                      {service.detail}
                    </p>
                  </div>
                  <div className="relative z-10 mt-12 h-16 w-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-transparent transition-all backdrop-blur-sm shadow-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>
        </section>

        {/* Impact Metrics */}
        <section className="site-container pt-24 sm:pt-32">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="mb-16 md:mb-24 flex flex-col items-center text-center"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Global Impact Lens</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl max-w-4xl text-[var(--primary)]">
              Solving enterprise energy challenges with measurable infrastructure outcomes.
            </motion.h2>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 md:grid-cols-4"
          >
            {globalImpact.map((item) => (
              <motion.article 
                variants={fadeInUp} 
                key={item.label} 
                className="group relative bg-white border border-[var(--border)] rounded-[40px] p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[var(--accent)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20" />
                <div className="flex items-baseline gap-2 mb-6 relative z-10">
                  <span className="text-5xl md:text-6xl font-extrabold tracking-tighter text-[var(--primary)]">{item.value}</span>
                  <span className="text-xl md:text-2xl font-bold text-[var(--accent)]">{item.unit}</span>
                </div>
                <div className="h-px w-12 bg-[var(--border)] mb-6 group-hover:w-full group-hover:bg-[var(--accent)] transition-all duration-500 relative z-10" />
                <p className="text-base font-medium leading-relaxed text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors duration-300 relative z-10">
                  {item.label}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Why Section */}
        <section className="site-container py-24 md:py-32">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-4 text-center">Sustainability & Strategy</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-[var(--primary)] text-center leading-tight">
              Why Renewable Energy &<br className="hidden md:block" /> Open Access Power?
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyRenewableData.map((reason, i) => (
              <motion.div 
                key={i} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeInUp}
                className="bg-white p-10 rounded-[40px] border border-[var(--border)] shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--background)] flex items-center justify-center mb-8 border border-[var(--border)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-colors">
                  <svg className="w-7 h-7 text-[var(--accent)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-[var(--primary)] py-24 md:py-32 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent"></div>
          <div className="site-container relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={staggerContainer}
                className="max-w-2xl"
              >
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">How It Works</motion.h2>
                <motion.p variants={fadeInUp} className="text-xl text-white/70 font-light">We connect all stakeholders into one delivery pipeline, reducing handoff risk across infrastructure, engineering, and commercial stages.</motion.p>
              </motion.div>
              
              <div className="flex bg-white/5 p-1.5 rounded-full backdrop-blur-md border border-white/10 self-start md:self-auto">
                <button 
                  onClick={() => setProcessType('industries')}
                  className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all ${processType === 'industries' ? 'bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/20' : 'text-white/60 hover:text-white'}`}
                >
                  For Industries
                </button>
                <button 
                  onClick={() => setProcessType('developers')}
                  className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all ${processType === 'developers' ? 'bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/20' : 'text-white/60 hover:text-white'}`}
                >
                  For Developers
                </button>
              </div>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
              
              <div className="grid gap-12 relative">
                {(processType === 'industries' ? industryProcessSteps : developerProcessSteps).map((step, i) => (
                  <motion.div 
                    key={i} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    variants={fadeInUp}
                    className="flex gap-8 md:gap-16 items-start"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[var(--accent)] text-white flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-lg shadow-[var(--accent)]/20 relative z-10">
                      {i + 1}
                    </div>
                    <div className="max-w-3xl">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                      <p className="text-lg text-white/70 leading-relaxed font-light">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* Industry Credibility Section */}
        <section className="site-container pt-24 sm:pt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="text-2xl font-semibold md:text-3xl text-[var(--primary)]">Industry Credibility</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-wrap justify-center gap-4 py-8">
            {clients.map((client) => (
              <motion.div key={client} variants={fadeInUp} className="px-8 py-4 rounded-[100px] bg-white border border-[var(--border)] text-sm font-semibold tracking-wide text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all cursor-default shadow-sm hover:shadow-md">
                {client}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="my-24 sm:my-32 site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-[var(--primary)]/90 backdrop-blur-sm"></div>
            
            <div className="relative z-10">
              <motion.p variants={fadeInUp} className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-6 drop-shadow-md">Ready to Collaborate</motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mx-auto mb-12 drop-shadow-md text-white">
                Looking to reduce electricity costs with a structured solar strategy?
              </motion.h2>
              <motion.div variants={fadeInUp}>
                <Link href="/contact-us" className="inline-flex items-center px-10 py-5 bg-[var(--accent)] text-white text-lg font-bold tracking-widest uppercase rounded-full hover:bg-white hover:text-[var(--primary)] transition-all hover:scale-[1.02] shadow-[0_0_40px_-10px_var(--accent)]">
                  Talk to the Team
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
