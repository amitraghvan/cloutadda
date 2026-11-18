import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { CloutAddaLogo } from "./CloutAddaLogo";
import { SERVICES_LIST } from "@/data/servicesData";
import { COMPANY_INFO } from "@/data/companyData";
import { MagneticButton } from "@/components/animation/MagneticButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#050505]/85 py-3.5 backdrop-blur-xl shadow-lg"
          : "border-b border-transparent bg-transparent py-6"
      }`}
    >
      <div className="page-shell flex items-center justify-between">
        {/* Brand Logo */}
        <CloutAddaLogo />

        {/* Center Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main Navigation">
          <Link
            to="/"
            className={`text-[13px] font-normal tracking-wide transition-colors duration-200 hover:text-[#F4F0E9] ${
              currentPath === "/" ? "text-[#F4F0E9] font-medium" : "text-[#AAA6A2]"
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`text-[13px] font-normal tracking-wide transition-colors duration-200 hover:text-[#F4F0E9] ${
              currentPath === "/about" ? "text-[#F4F0E9] font-medium" : "text-[#AAA6A2]"
            }`}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className={`flex items-center gap-1.5 text-[13px] font-normal tracking-wide transition-colors duration-200 hover:text-[#F4F0E9] focus:outline-none ${
                currentPath.startsWith("/services")
                  ? "text-[#F4F0E9] font-medium"
                  : "text-[#AAA6A2]"
              }`}
              aria-expanded={servicesOpen}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-3 w-3 text-[#AAA6A2] transition-transform duration-300 ${
                  servicesOpen ? "rotate-180 text-clout-red" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-1/2 mt-3 w-84 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0A0A0A]/95 p-3 shadow-2xl backdrop-blur-2xl transition-all animate-in fade-in zoom-in-95 duration-200"
              >
                <div className="mb-2 px-3 py-1.5 border-b border-white/[0.08] flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-clout-red">
                    Agency Practices
                  </span>
                  <Link
                    to="/services"
                    className="text-[11px] text-[#AAA6A2] hover:text-[#F4F0E9] transition-colors"
                  >
                    Overview →
                  </Link>
                </div>
                <div className="space-y-1">
                  {SERVICES_LIST.map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/services/${srv.slug}` as string}
                      className={`group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/[0.04] ${
                        currentPath === `/services/${srv.slug}`
                          ? "bg-white/[0.04] border-l-2 border-clout-red"
                          : ""
                      }`}
                    >
                      <span className="font-mono text-xs text-clout-red/70 mt-0.5">
                        {srv.number}
                      </span>
                      <div>
                        <div className="text-xs font-medium text-[#F4F0E9] group-hover:text-white flex items-center gap-1">
                          {srv.title}
                          <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-clout-red" />
                        </div>
                        <p className="mt-0.5 line-clamp-1 text-[11px] text-[#AAA6A2] font-light">
                          {srv.shortDescription}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/work"
            className={`text-[13px] font-normal tracking-wide transition-colors duration-200 hover:text-[#F4F0E9] ${
              currentPath.startsWith("/work") ? "text-[#F4F0E9] font-medium" : "text-[#AAA6A2]"
            }`}
          >
            Work
          </Link>

          <Link
            to="/contact"
            className={`text-[13px] font-normal tracking-wide transition-colors duration-200 hover:text-[#F4F0E9] ${
              currentPath === "/contact" ? "text-[#F4F0E9] font-medium" : "text-[#AAA6A2]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA with Magnetic Effect */}
        <div className="hidden items-center gap-4 md:flex">
          <MagneticButton strength={0.22}>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2 text-xs font-mono tracking-wider text-[#F4F0E9] backdrop-blur-sm transition-all duration-300 hover:border-clout-red hover:bg-clout-red hover:text-white hover:shadow-[0_0_25px_rgba(229,9,32,0.3)]"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#0A0A0A] text-[#F4F0E9] md:hidden focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] bottom-0 z-40 flex flex-col justify-between border-t border-white/10 bg-[#050505]/98 px-6 py-8 backdrop-blur-3xl md:hidden overflow-y-auto animate-in slide-in-from-top-4 duration-300">
          <div className="space-y-6">
            <Link
              to="/"
              className={`block font-display text-2xl tracking-tight ${
                currentPath === "/" ? "text-clout-red font-medium" : "text-[#F4F0E9] font-light"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`block font-display text-2xl tracking-tight ${
                currentPath === "/about"
                  ? "text-clout-red font-medium"
                  : "text-[#F4F0E9] font-light"
              }`}
            >
              About
            </Link>

            <div className="space-y-3 pt-2">
              <Link
                to="/services"
                className="text-xs uppercase font-mono tracking-widest text-clout-red block"
              >
                Services Overview →
              </Link>
              <div className="space-y-2 pl-2">
                {SERVICES_LIST.map((srv) => (
                  <Link
                    key={srv.id}
                    to={`/services/${srv.slug}` as string}
                    className="flex items-center gap-3 text-sm text-[#AAA6A2] hover:text-white"
                  >
                    <span className="font-mono text-xs text-clout-red">{srv.number}</span>
                    <span>{srv.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/work"
              className={`block font-display text-2xl tracking-tight ${
                currentPath.startsWith("/work")
                  ? "text-clout-red font-medium"
                  : "text-[#F4F0E9] font-light"
              }`}
            >
              Work
            </Link>

            <Link
              to="/contact"
              className={`block font-display text-2xl tracking-tight ${
                currentPath === "/contact"
                  ? "text-clout-red font-medium"
                  : "text-[#F4F0E9] font-light"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10">
            <Link
              to="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-clout-red py-3.5 text-center font-mono text-xs uppercase tracking-wider text-white"
            >
              <span>LET'S TALK ↗</span>
            </Link>
            <p className="mt-4 text-center font-mono text-xs text-[#AAA6A2] font-light">
              {COMPANY_INFO.tagline}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
