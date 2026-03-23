"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";
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
  { label: "Installed and managed capacity", value: "500+ MW" },
  { label: "Aggregated utility land", value: "13,500+ acres" },
  { label: "Operational presence", value: "9 states" },
  { label: "PPA tenure capability", value: "12-25 years" },
];

const processSteps = [
  "Developer capital planning",
  "Land aggregation and approvals",
  "EPC engineering and commissioning",
  "Generation performance optimization",
  "Industrial offtake via PPA",
];

const services = [
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
  {
    title: "PPA Consultancy",
    detail:
      "Industry-developer alignment, tariff modelling, and contract structuring designed for long-term cost predictability and risk control.",
    href: "/services/ppa-consultancy",
  },
];

const caseMetrics = [
  { label: "Before", value: "INR 2 Cr/month" },
  { label: "After", value: "INR 82.5 Lakhs/month" },
  { label: "Annual Savings", value: "INR 14.1 Cr" },
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
    value: "500+",
    unit: "MW",
    label: "solar capacity across delivered and managed scope",
  },
  {
    value: "13,500+",
    unit: "acres",
    label: "land aggregated for utility and C&I pathways",
  },
  {
    value: "14.1",
    unit: "Cr",
    label: "annual savings benchmark in industrial case model",
  },
  {
    value: "9",
    unit: "states",
    label: "execution footprint with local project governance",
  },
];

const insightCards = [
  {
    title: "Grid-Linked Solar Program for Industrial Clusters",
    text: "How integrated land, EPC, and PPA planning reduces decision delays and improves cost outcomes.",
  },
  {
    title: "Designing Contracts for 12-25 Year Cost Visibility",
    text: "Commercial frameworks that align risk allocation, tariff certainty, and long-term offtake reliability.",
  },
  {
    title: "Engineering Controls for Higher Generation Reliability",
    text: "Why anti-sagging structures, coatings, and tracking architecture matter in lifecycle performance.",
  },
];

function formatInr(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function Home() {
  const [monthlyBill, setMonthlyBill] = useState(20000000);

  const roi = useMemo(() => {
    const optimizedMonthly = monthlyBill * 0.4125;
    const monthlySavings = monthlyBill - optimizedMonthly;
    const annualSavings = monthlySavings * 12;
    return { optimizedMonthly, monthlySavings, annualSavings };
  }, [monthlyBill]);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)]">
      <SiteHeader />

      <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-end pb-24 md:pb-32 bg-[#000000]">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/"
            className="h-full w-full object-cover opacity-80"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-[#000000]/20" />
        </div>

        <div className="site-container relative z-10 w-full text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.p variants={fadeInUp} className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              Building the Future of Power
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-8">
              Integrated Renewable Energy Solutions
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-2xl text-lg md:text-xl font-light leading-relaxed text-white/80 mb-10">
              From land acquisition to power generation and PPA structuring. Adishakti Green Systems delivers end-to-end renewable infrastructure for enterprise power users.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link href="#services" className="px-8 py-4 bg-[var(--accent)] text-white text-sm font-semibold tracking-wider uppercase hover:bg-[#0e9d6d] transition-colors">
                Explore Solutions
              </Link>
              <Link href="/contact-us" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold tracking-wider uppercase hover:bg-white hover:text-[var(--primary)] transition-all">
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <main className="section-stack pb-24 md:pb-32">
        <section className="site-container -mt-16 relative z-20">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] shadow-2xl rounded-[32px] border border-[var(--border)] overflow-hidden"
          >
            {trustMetrics.map((item) => (
              <motion.article 
                key={item.label} 
                variants={fadeInUp} 
                className="bg-white p-6 md:p-10 flex flex-col justify-center"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[var(--primary)]">
                  {item.value}
                </p>
                <p className="mt-3 text-xs sm:text-sm font-medium text-[var(--muted)]">{item.label}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="relative text-white py-16 px-6 md:py-28 md:px-12 lg:px-20 mt-32 rounded-[40px] mx-4 md:mx-8 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/95 to-[var(--primary)]/70"></div>
          
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center max-w-7xl mx-auto relative z-10">
            <motion.p 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="text-2xl md:text-4xl font-light leading-snug drop-shadow-sm"
            >
              India-focused renewable execution with enterprise governance,
              lifecycle engineering rigor, and <span className="text-[var(--accent)] font-semibold shadow-black/10">long-horizon savings outcomes</span>.
            </motion.p>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex md:justify-end">
              <Link
                href="/projects"
                className="inline-flex w-fit items-center bg-[var(--accent)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#0e9d6d] hover:scale-105 shadow-xl hover:shadow-[var(--accent)]/20"
              >
                View Projects
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="site-container pt-24 sm:pt-32">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="mb-16 md:mb-24 flex flex-col items-center text-center"
          >
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Global Impact Lens</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl max-w-4xl text-[var(--primary)]">
              Solving enterprise energy challenges with measurable infrastructure outcomes.
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              We combine infrastructure delivery discipline with commercial strategy to improve resilience, reduce carbon, and protect long-term energy economics.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 md:grid-cols-4"
          >
            {globalImpact.map((item) => (
              <motion.article 
                variants={fadeInUp} 
                key={item.label} 
                className="group relative bg-[#ffffff] border border-[var(--border)] rounded-[32px] p-8 md:p-10 hover:shadow-[0_0_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20" />
                <div className="flex items-baseline gap-2 mb-4 relative z-10">
                  <span className="text-5xl md:text-6xl font-extrabold tracking-tighter text-[var(--primary)]">{item.value}</span>
                  <span className="text-xl md:text-2xl font-bold text-[var(--accent)]">{item.unit}</span>
                </div>
                <div className="h-px w-12 bg-[var(--border)] mb-4 group-hover:w-full group-hover:bg-[var(--accent)] transition-all duration-500 relative z-10" />
                <p className="text-sm md:text-base font-medium leading-relaxed text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors duration-300 relative z-10">
                  {item.label}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="site-container pt-24 sm:pt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 lg:gap-24">
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold leading-tight md:text-5xl text-[var(--primary)]">
              Company Overview
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-[var(--muted)]">
              Discover how integrated site readiness, engineering execution, and
              long-horizon commercial structures reduce execution risk for enterprises.
            </motion.p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="rounded-[40px] overflow-hidden shadow-2xl relative bg-black/5 w-full aspect-video border border-[var(--border)]"
          >
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/QPzMYw3_LOw?rel=0" 
              title="Adishakti Green Systems Company Overview" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full absolute inset-0"
            ></iframe>
          </motion.div>
        </section>

        <section className="site-container pt-24 sm:pt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 lg:gap-24">
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold leading-tight md:text-4xl text-[var(--primary)]">
              Why Renewable Energy
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-[var(--muted)]">
              Enterprises are adopting renewable power for energy independence, lower emissions, and predictable long-term costs.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Energy independence from fuel-price linked volatility",
              "Lower carbon footprint with measurable ESG impact",
              "Long-horizon cost visibility through structured PPAs",
              "Resilient operating economics for energy-intensive sectors"
            ].map((text, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-6 border border-[var(--border)] rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-[var(--background)] flex items-center justify-center mb-4 border border-[var(--border)]">
                  <span className="text-[var(--accent)] text-sm font-bold">0{i+1}</span>
                </div>
                <p className="text-sm font-medium leading-relaxed text-[var(--foreground)]">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="bg-[var(--background)] py-24 sm:py-32 mt-24 sm:mt-32 border-t border-b border-[var(--border)]">
          <div className="site-container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 lg:gap-24">
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold leading-tight md:text-5xl text-[var(--primary)]">
                How It Works
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg leading-relaxed text-[var(--muted)]">
                We connect all stakeholders into one delivery pipeline, reducing handoff risk across infrastructure, engineering, and commercial stages.
              </motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative mt-8">
              <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-[var(--border)] hidden sm:block" />
              <ul className="space-y-6 sm:space-y-10 relative">
                {processSteps.map((step, index) => (
                  <motion.li key={step} variants={fadeInUp} className="flex gap-6 sm:gap-8 items-start">
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white shadow-md">
                      {index + 1}
                    </span>
                    <div className="pt-2 bg-white flex-1 p-6 rounded-2xl border border-[var(--border)] shadow-sm">
                      <p className="text-lg font-medium text-[var(--foreground)]">{step}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section id="services" className="site-container pt-24 sm:pt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-16 md:mb-24 flex flex-col items-center text-center">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Core Verticals</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-5xl max-w-4xl text-[var(--primary)]">
              Integrated Service Architecture
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              Three integrated service verticals designed for infrastructure certainty and financial outcomes.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link href={service.href} key={service.title} className="block">
                <motion.article variants={fadeInUp} className="group flex flex-col justify-between p-8 md:p-10 rounded-[32px] text-white hover:-translate-y-2 transition-all duration-300 shadow-xl overflow-hidden relative h-full">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ 
                      backgroundImage: `url('${
                        idx === 0 ? "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80" 
                        : idx === 1 ? "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80" 
                        : "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                      }')` 
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/90 to-[var(--primary)]/50 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-[var(--primary)] opacity-70 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 pr-8 text-white drop-shadow-md">{service.title}</h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base drop-shadow-sm font-medium">
                      {service.detail}
                    </p>
                  </div>
                  <div className="relative z-10 mt-12 h-14 w-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-transparent transition-colors backdrop-blur-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>
        </section>

        <section className="site-container pt-24 sm:pt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center border border-[var(--border)] rounded-[40px] p-8 md:p-16 bg-white shadow-[0_0_40px_-15px_rgba(0,0,0,0.1)]">
            <div>
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold leading-tight md:text-5xl text-[var(--primary)]">
                Case Study: Cost Transformation
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
                Example benchmark from industrial power optimization through structured PPA deployment. We convert monthly energy expense into a controllable financial lever.
              </motion.p>
            </div>
            <div className="grid gap-6">
              {caseMetrics.map((metric, i) => (
                <motion.article key={metric.label} variants={fadeInUp} className={`p-8 rounded-3xl ${i === 2 ? 'bg-[var(--accent)] text-white shadow-xl rotate-1 scale-[1.02]' : 'bg-[var(--background)] border border-[var(--border)]'}`}>
                  <p className={`text-sm tracking-widest uppercase font-bold ${i === 2 ? 'text-white/90' : 'text-[var(--muted)]'}`}>
                    {metric.label}
                  </p>
                  <p className={`mt-3 text-3xl font-extrabold ${i === 2 ? 'text-white' : 'text-[var(--primary)]'}`}>
                    {metric.value}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="site-container pt-24 sm:pt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-12 md:mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold leading-tight md:text-5xl text-[var(--primary)] text-center">
              ROI Calculator
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-center text-[var(--muted)] mt-4 max-w-2xl mx-auto">
              Indicative estimate based on current monthly electricity cost and benchmark optimization factors. Slide to visualize.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-5xl mx-auto bg-white border border-[var(--border)] rounded-[40px] p-8 md:p-16 shadow-[0_0_40px_-15px_rgba(0,0,0,0.1)]">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div variants={fadeInUp}>
                <label htmlFor="monthlyBill" className="block text-sm font-bold uppercase tracking-widest text-[var(--primary)] mb-6">
                  Current Monthly Electricity Bill
                </label>
                <div className="relative">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--muted)] font-medium text-2xl">₹</span>
                  <input
                    id="monthlyBill"
                    type="number"
                    min={1000000}
                    step={100000}
                    value={monthlyBill}
                    onChange={(event) => setMonthlyBill(Number(event.target.value) || 0)}
                    className="w-full bg-[var(--background)] border border-[var(--border)] rounded-2xl py-6 pl-14 pr-6 text-3xl font-bold text-[var(--primary)] outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] transition-all"
                  />
                </div>
                <input 
                  type="range" min={1000000} max={50000000} step={500000}
                  value={monthlyBill} onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full mt-10 accent-[var(--accent)] h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </motion.div>
              <div className="grid gap-4">
                <motion.div variants={fadeInUp} className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--border)] flex justify-between items-center group hover:border-[var(--accent)] transition-colors">
                  <p className="text-[var(--muted)] font-medium">Optimized Cost</p>
                  <p className="text-xl md:text-2xl font-bold text-[var(--primary)]">{formatInr(roi.optimizedMonthly)}</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--border)] flex justify-between items-center group hover:border-[var(--accent)] transition-colors">
                  <p className="text-[var(--muted)] font-medium">Monthly Savings</p>
                  <p className="text-xl md:text-2xl font-bold text-[var(--accent)]">{formatInr(roi.monthlySavings)}</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-[var(--primary)] text-white p-6 md:p-8 rounded-2xl shadow-xl flex justify-between items-center scale-[1.02]">
                  <p className="font-semibold text-white/90 text-lg">Annual Savings</p>
                  <p className="text-3xl md:text-4xl font-extrabold text-[var(--accent)]">{formatInr(roi.annualSavings)}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

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
