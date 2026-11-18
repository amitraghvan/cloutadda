"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { PORTFOLIO_LIST } from "@/data/portfolioData";
import { RevealText } from "@/components/animation/RevealText";
import { RevealImage } from "@/components/animation/RevealImage";
import { MagneticButton } from "@/components/animation/MagneticButton";

export function WorkArchiveClient() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "Conclave & Leadership", label: "Summits & Conclaves" },
    { id: "Creator Summit & Creator Economy", label: "Creator Economy" },
    { id: "Business & Entrepreneurship", label: "Entrepreneurship" },
    { id: "Fashion & Live Experience", label: "Fashion & Lifestyle" },
    { id: "Live Music & Brand Experience", label: "Live Stadium Music" },
  ];

  const filteredProjects =
    filter === "all" ? PORTFOLIO_LIST : PORTFOLIO_LIST.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        badge="PORTFOLIO ARCHIVE"
        title="Ideas are nice. Execution is"
        italicWord="better."
        description="Explore our documented activations, summits, stadium-scale concerts and creator gatherings. Every project is built around real culture, verified talent, and disciplined on-ground coordination."
        backHref="/"
        backLabel="Back to Home"
      />

      {/* Filter Pills */}
      <section className="py-8 border-b border-white/[0.08] bg-[#0A0A0A]">
        <div className="page-shell">
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`rounded-full px-5 py-2 font-mono text-xs tracking-wider transition-all duration-200 ${
                  filter === cat.id
                    ? "bg-clout-red text-white shadow-[0_0_20px_rgba(229,9,32,0.35)]"
                    : "bg-white/[0.03] text-[#AAA6A2] border border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505]">
        <div className="page-shell space-y-16">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-white/[0.08] bg-[#0A0A0A] overflow-hidden transition-all duration-500 hover:border-clout-red/50 hover:shadow-[0_0_50px_rgba(229,9,32,0.15)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[440px]">
                {/* Image Column */}
                <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-full overflow-hidden">
                  <RevealImage className="h-full w-full">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover object-center grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </RevealImage>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/30 lg:hidden" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="rounded-full border border-white/20 bg-black/60 px-3.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 font-mono text-xs text-[#AAA6A2] mb-4">
                      {project.date && (
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3 w-3 text-clout-red" />
                          {project.date}
                        </span>
                      )}
                      {project.venue && (
                        <span className="inline-flex items-center gap-1.5 truncate max-w-[200px]">
                          <MapPin className="h-3 w-3 text-clout-red" />
                          {project.venue.split("·")[0]}
                        </span>
                      )}
                      {project.audience && (
                        <span className="inline-flex items-center gap-1.5 text-white font-medium">
                          <Users className="h-3 w-3 text-clout-red" />
                          {project.audience}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl text-[#F4F0E9] tracking-[-0.03em] leading-tight group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-xs sm:text-sm text-[#AAA6A2] font-light leading-relaxed line-clamp-3">
                      {project.overview}
                    </p>

                    {/* Documented Role */}
                    <div className="mt-6 border-t border-white/[0.08] pt-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-clout-red block mb-2">
                        Documented Clout Adda Role:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.cloutAddaContribution.map((item, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-[#F4F0E9] border border-white/10"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="font-mono text-xs text-[#AAA6A2]">
                      Case Study 0{idx + 1}
                    </span>
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-clout-red px-5 py-2 font-mono text-xs uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
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
              Have a project to bring to{" "}
              <span className="font-serif-italic font-normal text-white">life?</span>
            </h2>
          </RevealText>
          <p className="mt-6 text-base text-[#AAA6A2] font-light leading-relaxed">
            Let's create your brand's next headline moment. Tell us what you're planning.
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-clout-red px-8 py-4 font-mono text-xs uppercase tracking-widest text-white shadow-[0_0_30px_rgba(229,9,32,0.35)] transition-all duration-300 hover:bg-white hover:text-black"
              >
                <span>Discuss a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
