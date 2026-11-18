import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SERVICES_LIST } from "@/data/servicesData";
import { RevealText } from "@/components/animation/RevealText";
import { MagneticButton } from "@/components/animation/MagneticButton";

export const metadata: Metadata = {
  title: "Our Services | Creative, Creator & Culture Practices",
  description:
    "Explore Clout Adda's five specialized agency practices: Social Media Marketing, PR & Meme Marketing, Influencer Marketing, Social Events Marketing, and Branded Podcasting.",
  alternates: {
    canonical: "https://cloutadda.com/services",
  },
  openGraph: {
    title: "Agency Practices | CLOUT ADDA®",
    description:
      "Explore Clout Adda's five specialized agency practices for culture-driven brands.",
    url: "https://cloutadda.com/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="CAPABILITIES MATRIX"
        title="Good ideas deserve great"
        italicWord="execution."
        description="Whether you want to build cultural brand equity, engage verified creators, spark viral internet conversations, or host unforgettable campus activations, we provide full-stack creative execution."
        backHref="/"
        backLabel="Back to Home"
      />

      {/* Detailed Service Cards Grid */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505] relative">
        <div className="page-shell space-y-12">
          {SERVICES_LIST.map((srv) => (
            <div
              key={srv.id}
              className="group relative rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 sm:p-12 transition-all duration-300 hover:border-clout-red/50 hover:bg-[#0E0E0E] overflow-hidden"
            >
              {/* Subtle luminous red top accent on hover */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clout-red/0 to-transparent transition-all duration-500 group-hover:via-clout-red/60" />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
                <div className="space-y-6 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-clout-red font-semibold tracking-wider">
                      {srv.number}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#AAA6A2]">
                      Dedicated Practice
                    </span>
                  </div>

                  <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em] leading-tight group-hover:text-white transition-colors">
                    {srv.title}
                  </h2>

                  <p className="text-base text-[#AAA6A2] font-light leading-relaxed">
                    {srv.heroCopy}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/10 px-6 py-3 font-mono text-xs uppercase tracking-wider text-[#F4F0E9] transition-all duration-200 hover:bg-clout-red hover:border-clout-red hover:text-white"
                    >
                      <span>{srv.primaryCtaText}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-[#050505] p-6 lg:w-80 shrink-0 space-y-4">
                  <div className="font-mono text-[11px] uppercase text-clout-red tracking-wider">
                    Practice Snapshot
                  </div>
                  <p className="text-xs sm:text-sm text-[#AAA6A2] font-light leading-relaxed">
                    {srv.shortDescription}
                  </p>
                  <div className="pt-3 border-t border-white/[0.08]">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="font-mono text-xs uppercase tracking-wider text-[#F4F0E9] hover:text-clout-red flex items-center justify-between transition-colors"
                    >
                      <span>View Dedicated Page</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-clout-red" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-28 bg-[#050505] text-center relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#E50920]/5 to-transparent" />

        <div className="page-shell max-w-2xl mx-auto relative z-10">
          <RevealText>
            <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E9] tracking-[-0.03em] leading-tight">
              Not sure which practice you{" "}
              <span className="font-serif-italic font-normal text-white">need?</span>
            </h2>
          </RevealText>
          <p className="mt-6 text-base text-[#AAA6A2] font-light leading-relaxed">
            Our strategists analyze your business objective and assemble a customized
            multidisciplinary campaign blueprint.
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-clout-red px-8 py-4 font-mono text-xs uppercase tracking-widest text-white shadow-[0_0_30px_rgba(229,9,32,0.35)] transition-all duration-300 hover:bg-white hover:text-black"
              >
                <span>Request Strategy Blueprint</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
