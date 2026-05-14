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

const whyMatters = [
  {
    title: "Land Is the Foundation of Every Utility-Scale Renewable Project",
    content: "For solar, wind, and hybrid energy projects, land selection is one of the most critical development decisions. The right land parcel affects project size, evacuation feasibility, execution timeline, project cost, approvals, and long-term operational viability."
  },
  {
    title: "Grid Connectivity Determines Project Viability",
    content: "A renewable energy project is only commercially viable when generated power can be evacuated efficiently. Grid connectivity, substation distance, available capacity, evacuation infrastructure, and approval status play a major role."
  },
  {
    title: "Aggregation Reduces Development Friction",
    content: "Utility-scale renewable projects often require large contiguous land parcels. Our land aggregation support helps developers engage with the right stakeholders, evaluate land availability, and structure opportunities more efficiently."
  },
  {
    title: "Ready & Semi-Ready Opportunities Save Time",
    content: "Many developers prefer to acquire renewable opportunities that already have land access, LFS, GO, or other development progress instead of beginning from zero. Through our ecosystem network, we help developers access structured opportunities."
  }
];

const whatWeSupport = [
  { title: "Land Identification & Sourcing", desc: "We help developers identify land opportunities suitable for solar, wind, and hybrid renewable energy projects across selected renewable energy zones." },
  { title: "Land Aggregation Support", desc: "We facilitate coordination with landowners, regional aggregators, and local stakeholders to help developers evaluate and aggregate land parcels." },
  { title: "Direct Stakeholder Connectivity", desc: "We believe in transparent transactions. Wherever possible, we support direct connectivity between developers, landowners, and relevant stakeholders." },
  { title: "Grid Connectivity Facilitation", desc: "We assist developers in evaluating grid connectivity possibilities, Load Flow Sanction (LFS) status, and Government Order (GO) availability." },
  { title: "Project Opportunity Structuring", desc: "We help structure renewable energy opportunities into clearer project packages by aligning land, connectivity, and development status." },
  { title: "Transaction Facilitation", desc: "For developers looking to acquire ready or semi-ready renewable projects, we support transparent transaction facilitation between parties." }
];

const processSteps = [
  { s: "Step 1", t: "Share Your Project Requirement", d: "Developers share their requirement including state, capacity, technology, and whether they need fresh land or package deals." },
  { s: "Step 2", t: "We Identify Suitable Opportunities", d: "Based on your requirement, we identify land parcels, development-stage opportunities, or package deals from our network." },
  { s: "Step 3", t: "Preliminary Details Are Shared", d: "We share available information such as project location, land extent, status of aggregation, and connectivity stage." },
  { s: "Step 4", t: "Direct Stakeholder Discussion Is Facilitated", d: "Once the opportunity is shortlisted, we facilitate transparent discussions with the relevant landowners or authorized stakeholders." },
  { s: "Step 5", t: "Due Diligence & Transaction Process Begins", d: "The developer can proceed with technical, legal, commercial, and financial due diligence with our coordination support." },
  { s: "Step 6", t: "Project Moves Toward Development or Acquisition", d: "Once the opportunity is validated and commercially aligned, the developer can proceed with land acquisition, development planning, or execution." }
];

const whoWeWorkWith = [
  { title: "Renewable Energy Developers", desc: "We support solar, wind, and hybrid project developers looking for land and connectivity-linked opportunities." },
  { title: "Independent Power Producers", desc: "We work with IPPs seeking to expand their project pipeline through land-backed or GO-ready opportunities." },
  { title: "Investors & Platforms", desc: "We support investors and renewable infrastructure platforms looking for scalable project development opportunities." },
  { title: "Landowners & Project Owners", desc: "We work with landowners who want to connect with serious renewable energy developers for project development or land sale." }
];

const opportunityTypes = [
  { title: "Fresh Land Opportunities", desc: "Suitable for developers who want to begin project development from the land identification and aggregation stage." },
  { title: "Land + Grid Connectivity", desc: "Suitable for locations where land access and grid connectivity evaluation have already progressed." },
  { title: "LFS-Ready Opportunities", desc: "Suitable for developers looking for projects where Load Flow Sanction-related progress is available." },
  { title: "GO-Ready Opportunities", desc: "Suitable for developers looking for opportunities where Government Order-related progress is available." },
  { title: "Complete Package Deals", desc: "Suitable for acquiring structured renewable project opportunities where land, GO, LFS, and components are bundled." }
];

const geographicStates = [
  "Madhya Pradesh", "Gujarat", "Rajasthan", "Maharashtra", "Odisha", "Tamil Nadu", "Andhra Pradesh", "Telangana", "Karnataka"
];

const faqs = [
  {
    q: "Do you own the land listed through your network?",
    a: "No. Aadishakti Green Systems does not own all land parcels or project opportunities available through its network. We facilitate access to landowners, project owners, aggregators, and stakeholders through our renewable energy ecosystem."
  },
  {
    q: "What kind of land opportunities do you support?",
    a: "We support land opportunities suitable for utility-scale solar, wind, and hybrid renewable energy projects. This may include fresh land, aggregated land, large land banks, and land linked to advanced-stage project development opportunities."
  },
  {
    q: "Do you provide direct owner connectivity?",
    a: "Yes. Wherever possible, we facilitate direct connectivity with landowners, project owners, or authorized stakeholders to maintain transparency and reduce unnecessary intermediary confusion."
  },
  {
    q: "Can developers acquire full project packages through you?",
    a: "Yes. We help developers access structured solar and wind project opportunities where land, GO, LFS, and related development components may be available as a package deal."
  },
  {
    q: "Which states do you currently operate in?",
    a: "We currently have operational presence across Madhya Pradesh, Gujarat, Rajasthan, Maharashtra, Odisha, Tamil Nadu, Andhra Pradesh, Telangana, and Karnataka."
  },
  {
    q: "Do you support only solar projects?",
    a: "No. We support solar, wind, and hybrid renewable energy opportunities depending on land suitability, resource availability, connectivity potential, and developer requirements."
  },
  {
    q: "Can you help with grid connectivity approvals?",
    a: "We support grid connectivity facilitation and project development coordination. Final approvals, sanctions, and statutory permissions depend on the concerned authorities, applicable regulations, and project eligibility."
  }
];

export default function LandAggregation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)]">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/60 via-[var(--primary)] to-[var(--primary)]"></div>
        <div className="site-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.p variants={fadeInUp} className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-6">Land & Grid</motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-white">
              Land Aggregation & Grid Connectivity
            </motion.h1>
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-light text-white/80 mb-10">
              Strategic Renewable Project Development Support Across India
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-white/70 leading-relaxed max-w-3xl">
              <p>Aadishakti Green Systems supports renewable energy developers, IPPs, investors, and project owners with strategic land aggregation and grid connectivity facilitation for utility-scale solar, wind, and hybrid energy projects.</p>
              <p>We help convert raw project requirements into structured renewable energy opportunities by facilitating access to suitable land parcels, evaluating project development feasibility, and supporting grid connectivity coordination.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-[var(--background)] p-12 rounded-[40px] border border-[var(--border)] relative overflow-hidden group hover:border-[var(--accent)] transition-all"
            >
              <div className="relative z-10">
                <p className="text-sm font-bold text-[var(--accent)] uppercase tracking-widest mb-4">Availability</p>
                <h3 className="text-3xl md:text-5xl font-extrabold text-[var(--primary)] mb-6">13,500+ <span className="text-2xl text-[var(--muted)]">Acres</span></h3>
                <p className="text-lg text-[var(--muted)] leading-relaxed">
                  Renewable Energy Land Opportunities Across Tamil Nadu. Facilitating access through our network of landowners, aggregators, and regional associates.
                </p>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </div>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-[var(--background)] p-12 rounded-[40px] border border-[var(--border)] relative overflow-hidden group hover:border-[var(--accent)] transition-all"
            >
              <div className="relative z-10">
                <p className="text-sm font-bold text-[var(--accent)] uppercase tracking-widest mb-4">Readiness</p>
                <h3 className="text-3xl md:text-5xl font-extrabold text-[var(--primary)] mb-6">300+ <span className="text-2xl text-[var(--muted)]">MW</span></h3>
                <p className="text-lg text-[var(--muted)] leading-relaxed">
                  Execution-Ready Solar & Wind Opportunities Available for Acquisition. Structured package opportunities with land, GO, and LFS progress.
                </p>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Land Aggregation & Grid Connectivity Matter */}
      <section className="py-24 md:py-32 bg-[var(--background)] border-t border-b border-[var(--border)]">
        <div className="site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-[var(--primary)]">Why Land Aggregation & Grid Connectivity Matter</motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            {whyMatters.map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-bold">{i+1}</span>
                  <h3 className="text-xl font-bold text-[var(--primary)]">{item.title}</h3>
                </div>
                <p className="text-[var(--muted)] leading-relaxed pl-14">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 md:py-32 bg-[var(--background)]">
        <div className="site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-[var(--primary)]">Who We Work With</motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whoWeWorkWith.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-8 rounded-[32px] border border-[var(--border)] shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-4">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Types */}
      <section className="py-24 md:py-32">
        <div className="site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-[var(--primary)]">Key Opportunity Types</motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunityTypes.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-10 rounded-[32px] border border-[var(--border)] shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--accent)]/10 rounded-bl-full group-hover:bg-[var(--accent)] group-hover:text-white transition-all flex items-start justify-end p-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4 pr-10">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--primary)] py-24 md:py-32 text-white">
        <div className="site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-20">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">How It Works</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-white/70 max-w-2xl mx-auto">A transparent and execution-focused approach to renewable energy project development.</motion.p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {processSteps.map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative group">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[var(--accent)] font-black text-2xl mb-8 group-hover:bg-[var(--accent)] group-hover:text-white transition-all">
                  0{i+1}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.t}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="py-24 md:py-32 bg-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-[var(--primary)] mb-8">Our Geographic Presence</motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-[var(--muted)] leading-relaxed mb-10">
                Aadishakti Green Systems has operational presence across key renewable energy states, actively expanding our network across India.
              </motion.p>
              <div className="grid grid-cols-2 gap-4">
                {geographicStates.map((state, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3 text-[var(--primary)] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
                    {state}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="aspect-video bg-[var(--background)] rounded-[40px] border border-[var(--border)] overflow-hidden shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80" alt="Solar Farm" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <p className="text-white text-2xl font-black uppercase tracking-[0.3em] text-center px-8">National Network Ecosystem</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ideal For Developers */}
      <section className="py-24 md:py-32">
        <div className="site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[var(--primary)] p-12 md:p-20 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-12 relative z-10">Ideal For Developers Looking For</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {[
                "Large-scale renewable energy land parcels",
                "Solar project development land",
                "Wind project development land",
                "Hybrid project development opportunities",
                "Land with grid connectivity potential",
                "LFS-ready renewable energy opportunities",
                "GO-ready project opportunities",
                "Under-development project acquisition opportunities",
                "Ready and semi-ready package deals",
                "Direct owner or stakeholder connectivity",
                "Multi-state renewable project pipeline expansion"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/80">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0"></span>
                  <span className="text-lg font-light">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Developers Work With Aadishakti Green Systems */}
      <section className="py-24 md:py-32 bg-[var(--background)] border-t border-[var(--border)]">
        <div className="site-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-[var(--primary)]">Why Developers Work With Aadishakti Green Systems</motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Access to Large-Scale Land Resources", d: "Over 13,500 acres of identified renewable energy land resources in Tamil Nadu alone." },
              { t: "Development-Stage Project Access", d: "Access to ready and semi-ready opportunities including land-backed, LFS-ready, and package deals." },
              { t: "Transparent Transaction Facilitation", d: "Clean coordination with direct stakeholder connectivity, reducing unnecessary intermediary layers." },
              { t: "Multi-State Renewable Energy Network", d: "Presence across nine states allows support for opportunities across multiple corridors." },
              { t: "Practical Execution Understanding", d: "We understand that development requires land suitability, grid feasibility, local coordination, and approvals." },
              { t: "Developer-Focused Opportunity Structuring", d: "We convert scattered land and project information into structured opportunities for clearer evaluation." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-8 rounded-[32px] border border-[var(--border)] shadow-sm">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{item.t}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Clarification */}
      <section className="py-24 md:py-32">
        <div className="site-container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="bg-[var(--primary)] p-12 md:p-20 rounded-[40px] text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent"></div>
            <div className="relative z-10 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Role</h2>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>Aadishakti Green Systems acts as a renewable energy development facilitator and ecosystem enabler. We do not claim ownership of all land parcels or project opportunities shown through our network unless specifically stated.</p>
                <p>Our role is to identify, source, structure, coordinate, and facilitate transparent access between renewable energy developers, landowners, project owners, and other relevant stakeholders.</p>
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
      <section className="py-24 md:py-32 bg-[var(--background)]">
        <div className="site-container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-6xl font-bold text-[var(--primary)] mb-8">Ready to Scale Your Renewable Pipeline?</motion.h2>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6">
              <Link href="/contact-us" className="px-10 py-5 bg-[var(--accent)] text-white text-sm font-bold tracking-widest uppercase rounded-full hover:bg-[var(--primary)] transition-all shadow-xl">
                Start Discussion
              </Link>
              <Link href="/contact-us" className="px-10 py-5 border-2 border-[var(--primary)] text-[var(--primary)] text-sm font-bold tracking-widest uppercase rounded-full hover:bg-[var(--primary)] hover:text-white transition-all">
                Submit Requirement
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
