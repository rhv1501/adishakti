import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Contact Us | Adishakti Green Systems Pvt. Ltd.",
  description:
    "Contact Adishakti Green Systems for renewable feasibility, EPC planning, and PPA advisory.",
};

const nextSteps = [
  "Consultation response within one business day",
  "Initial techno-commercial review call",
  "Feasibility direction based on load and location",
];

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#F7F9F8] text-[#111111]">
      <SiteHeader />
      <section className="hero-shell border-b border-[#E5E7EB] bg-[#111111]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/media/video-poster.svg"
          className="hero-media absolute inset-0 h-full w-full object-cover"
        >
          <source src="/media/adishakti-overview.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />
        <div className="site-container relative z-10 flex min-h-[66vh] items-end py-14 sm:py-16 md:py-20">
          <div className="max-w-3xl text-white">
            <p className="hero-kicker text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
              Contact Us
            </p>
            <h1 className="hero-heading mt-3 text-4xl font-semibold leading-[1.04] sm:text-5xl md:text-7xl">
              Discuss Your Renewable Energy Requirement
            </h1>
            <p className="hero-copy mt-5 max-w-2xl text-sm leading-6 text-white/85 md:text-base">
              Share your current electricity profile and business objective. We
              provide a structured response focused on feasibility, risk, and
              ROI.
            </p>
          </div>
        </div>
      </section>

      <main className="site-container section-stack py-8 sm:py-10 md:py-14">
        <section className="grid gap-8 border-t border-[#E5E7EB] pt-14 sm:pt-16 md:grid-cols-2 md:pt-20">
          <div className="border border-[#E5E7EB] bg-white p-6">
            <h2 className="text-2xl font-semibold md:text-3xl">Inquiry Form</h2>
            <form className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-[#374151] sm:col-span-1">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-2 w-full border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#1B5E20]"
                />
              </label>
              <label className="text-sm text-[#374151] sm:col-span-1">
                Company
                <input
                  type="text"
                  name="company"
                  required
                  className="mt-2 w-full border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#1B5E20]"
                />
              </label>
              <label className="text-sm text-[#374151] sm:col-span-1">
                Monthly electricity bill (INR)
                <input
                  type="number"
                  name="monthlyBill"
                  required
                  className="mt-2 w-full border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#1B5E20]"
                />
              </label>
              <label className="text-sm text-[#374151] sm:col-span-1">
                Location
                <input
                  type="text"
                  name="location"
                  required
                  className="mt-2 w-full border border-[#E5E7EB] px-3 py-2 text-sm outline-none focus:border-[#1B5E20]"
                />
              </label>
              <button
                type="submit"
                className="mt-2 cta-primary w-fit sm:col-span-2"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          <aside className="space-y-4">
            <div className="border border-[#E5E7EB] bg-white p-6">
              <h2 className="text-2xl font-semibold md:text-3xl">
                What Happens Next
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-[#374151]">
                {nextSteps.map((step) => (
                  <li
                    key={step}
                    className="border border-[#E5E7EB] bg-[#F7F9F8] p-3"
                  >
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#E5E7EB] bg-white p-6 text-sm text-[#374151] leading-6">
              <p>Email: business@adishaktigreensystems.com</p>
              <p>Phone: +91 90000 00000</p>
              <p>
                Coverage: Pan India with international collaboration support
              </p>
            </div>
          </aside>
        </section>

        <section className="border-t border-[#E5E7EB] pt-14 sm:pt-16 md:pt-20">
          <div className="impact-strip">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Ready to begin your renewable transition?
            </h2>
            <p className="mt-2 text-sm text-white/90">
              Share your current energy profile and we will provide a practical
              roadmap focused on ROI and execution certainty.
            </p>
          </div>
        </section>

        <section className="border-t border-[#E5E7EB] pt-14 sm:pt-16 md:pt-20">
          <div className="statement-block">
            <p className="eyebrow text-white/80">Strategic Engagement</p>
            <h2 className="mt-3 text-2xl font-semibold md:text-4xl">
              Bring your energy baseline. We will return with a structured
              roadmap.
            </h2>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
