import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { CloutAddaLogo } from "./CloutAddaLogo";
import { COMPANY_INFO } from "@/data/companyData";
import { SERVICES_LIST } from "@/data/servicesData";
import { PORTFOLIO_LIST } from "@/data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#292424] bg-[#050505] pt-24 pb-14 text-[#F4F0E9] overflow-hidden">
      {/* Subtle Red Architectural Ambient Light */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-[800px] rounded-full bg-[#A90012]/10 blur-[150px]" />

      <div className="page-shell relative z-10">
        {/* Top Statement Row */}
        <div className="mb-20 border-b border-[#292424] pb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-3">
            <span className="text-[11px] font-mono tracking-[0.25em] text-clout-red uppercase">
              Brand Positioning
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight max-w-2xl leading-[1.08]">
              Your presence needs to be{" "}
              <span className="font-serif-italic font-normal text-[1.12em] text-[#F4F0E9]">
                elevated.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#AAA6A2] font-mono tracking-wider max-w-lg mt-2">
              {COMPANY_INFO.story}
            </p>
          </div>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-clout-red bg-clout-red px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(229,9,32,0.3)] transition-all duration-300 hover:bg-transparent hover:text-clout-red"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Multi-column Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 pb-16 border-b border-[#292424]">
          {/* Col 1 & 2: Brand Info & Documented Contacts */}
          <div className="lg:col-span-2 space-y-5">
            <CloutAddaLogo />
            <p className="text-xs text-[#AAA6A2] font-light leading-relaxed max-w-sm">
              Clout Adda is a culture-driven brand influence and experiences agency connecting
              brands with modern audiences through social media marketing, PR & meme campaigns,
              verified creator partnerships, and stadium-grade live events.
            </p>
            <div className="pt-1 text-[11px] font-mono tracking-[0.22em] text-clout-red uppercase">
              {COMPANY_INFO.tagline}
            </div>

            {/* Documented Contacts */}
            <div className="pt-4 space-y-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#827E7B] block">
                Documented Leadership Desk
              </span>
              {COMPANY_INFO.contacts.map((contact) => (
                <div
                  key={contact.name}
                  className="rounded-xl border border-white/5 bg-[#0A0A0A] p-3.5 text-xs"
                >
                  <div className="font-medium text-white">{contact.name}</div>
                  <div className="text-[11px] text-[#827E7B]">{contact.role}</div>
                  <div className="mt-2 flex flex-wrap gap-4 text-[11px] font-mono">
                    <a
                      href={`mailto:${contact.email}`}
                      className="inline-flex items-center gap-1.5 text-clout-red hover:underline"
                    >
                      <Mail className="h-3 w-3" />
                      <span>{contact.email}</span>
                    </a>
                    <a
                      href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-1.5 text-[#AAA6A2] hover:text-white"
                    >
                      <Phone className="h-3 w-3" />
                      <span>{contact.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Practices */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#F4F0E9] border-b border-[#292424] pb-3 mb-4">
              Practices
            </h4>
            <ul className="space-y-2.5 text-xs text-[#AAA6A2] font-light">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services/${srv.slug}` as string}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{srv.title}</span>
                    <span className="font-mono text-[10px] text-[#827E7B] group-hover:text-clout-red">
                      {srv.number}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/services" className="text-xs font-normal text-clout-red hover:underline">
                  Services Matrix →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Documented Work */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#F4F0E9] border-b border-[#292424] pb-3 mb-4">
              Selected Work
            </h4>
            <ul className="space-y-2.5 text-xs text-[#AAA6A2] font-light">
              {PORTFOLIO_LIST.map((proj) => (
                <li key={proj.id}>
                  <Link
                    to={`/work/${proj.slug}` as string}
                    className="hover:text-white transition-colors block truncate"
                  >
                    {proj.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/work" className="text-xs font-normal text-clout-red hover:underline">
                  All Case Studies →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Agency Navigation & Direct Inquiries */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#F4F0E9] border-b border-[#292424] pb-3 mb-4">
              Agency
            </h4>
            <ul className="space-y-2.5 text-xs text-[#AAA6A2] font-light">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Clout Adda
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  All Capabilities
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors">
                  Work & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Start an Engagement
                </Link>
              </li>
            </ul>

            <div className="mt-8 pt-4 border-t border-[#292424]">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#827E7B] block">
                General Inquiries
              </span>
              <a
                href={`mailto:${COMPANY_INFO.generalEmail}`}
                className="mt-1 block text-sm font-medium text-white hover:text-clout-red transition-colors"
              >
                {COMPANY_INFO.generalEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#827E7B] font-light">
          <div>
            © {currentYear} {COMPANY_INFO.name}®. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] tracking-wider uppercase text-[#AAA6A2]">
            <span>YOUR EXPERIENCE ELEVATED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
