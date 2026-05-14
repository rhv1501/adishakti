import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-[var(--primary)] text-white py-16 md:py-24">
      <div className="site-container grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 pr-8">
          <Link href="/" className="text-2xl font-bold tracking-tight uppercase">
            Adishakti<span className="text-[var(--accent)]">Green</span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
            End-to-end renewable energy solutions. From land aggregation to turnkey EPC and structured PPA consultancy, we control the entire value chain for enterprise success.
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Solutions</h4>
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            <li><Link href="/services/ppa-consultancy" className="hover:text-white transition-colors">PPA Consultancy</Link></li>
            <li><Link href="/services/land-aggregation" className="hover:text-white transition-colors">Land Aggregation & Grid Connectivity</Link></li>
            <li><Link href="/services/epc-contracting" className="hover:text-white transition-colors">Turnkey EPC Contracting</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Company</h4>
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="site-container mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/50">
        <p>© {new Date().getFullYear()} Adishakti Green Systems Pvt Ltd. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
