import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";
import { RevealText } from "@/components/animation/RevealText";
import { MagneticButton } from "@/components/animation/MagneticButton";

export function HomeCtaSection() {
  return (
    <section className="relative bg-[#050505] py-32 sm:py-44 overflow-hidden">
      {/* Immersive Deep Red Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[800px] rounded-full bg-[#A90012]/15 blur-[160px] animate-subtle-aura" />
      </div>

      <div className="page-shell relative z-10 text-center">
        <span className="text-[11px] font-mono tracking-[0.28em] text-clout-red uppercase block mb-4">
          {COMPANY_INFO.tagline}
        </span>

        <RevealText>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E9] font-light tracking-tight leading-[1.05] max-w-4xl mx-auto">
            Let's create something worth{" "}
            <span className="font-serif-italic font-normal text-white text-[1.12em] underline decoration-clout-red/40 underline-offset-8">
              talking about.
            </span>
          </h2>
        </RevealText>

        <p className="mt-8 mx-auto max-w-xl text-base sm:text-lg text-[#AAA6A2] font-light leading-relaxed">
          Have a campaign in mind, a brand to build or an experience to bring to life? Tell us what
          you're planning.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <MagneticButton strength={0.3}>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-clout-red bg-clout-red px-9 py-4 font-mono text-xs uppercase tracking-widest text-white shadow-[0_0_35px_rgba(229,9,32,0.4)] transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_50px_rgba(229,9,32,0.7)]"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </MagneticButton>
        </div>

        <div className="mt-12 text-xs text-[#827E7B] font-mono">
          Direct desk:{" "}
          <a
            href={`mailto:${COMPANY_INFO.generalEmail}`}
            className="text-[#AAA6A2] hover:text-white underline underline-offset-4"
          >
            {COMPANY_INFO.generalEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
