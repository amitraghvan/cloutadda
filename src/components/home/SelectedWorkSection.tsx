"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin, Users } from "lucide-react";
import { PORTFOLIO_LIST } from "@/data/portfolioData";
import { RevealText } from "@/components/animation/RevealText";
import { RevealImage } from "@/components/animation/RevealImage";
import { MagneticButton } from "@/components/animation/MagneticButton";

export function SelectedWorkSection() {
  return (
    <section className="relative border-b border-white/[0.08] bg-[#050505] py-28 sm:py-36 overflow-hidden">
      <div className="page-shell">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8 mb-16">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-clout-red uppercase block">
              Selected Portfolio
            </span>
            <RevealText>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E9] font-light tracking-tight leading-[1.05]">
                Real moments.
                <br />
                <span className="font-serif-italic font-normal text-white text-[1.12em]">
                  Real execution.
                </span>
              </h2>
            </RevealText>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-[#AAA6A2] font-light leading-relaxed">
              We connect brands, talent and mass audiences through culturally resonant moments.
              Explore our documented activations, summits and entertainment productions.
            </p>
            <Link
              href="/work"
              className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-white hover:text-clout-red transition-colors"
            >
              <span>View Full Case Studies Archive</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-clout-red" />
            </Link>
          </div>
        </div>

        {/* Alternating Asymmetrical Showcase */}
        <div className="space-y-16">
          {PORTFOLIO_LIST.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project.id}
                className="group rounded-3xl border border-white/[0.08] bg-[#0A0A0A] overflow-hidden transition-all duration-500 hover:border-clout-red/40 hover:bg-[#0E0E0E]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px]">
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-7 relative min-h-[340px] lg:min-h-full overflow-hidden ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <RevealImage className="h-full w-full">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="h-full w-full object-cover object-center filter contrast-115 brightness-95 transition-transform duration-1000 group-hover:scale-105"
                        loading="lazy"
                      />
                    </RevealImage>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent lg:hidden pointer-events-none" />
                    <div className="absolute top-5 left-5 z-10">
                      <span className="rounded-full border border-white/20 bg-black/60 px-3.5 py-1 text-[10px] font-mono tracking-widest text-[#F4F0E9] backdrop-blur-md uppercase">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div
                    className={`lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#AAA6A2] font-mono">
                        {project.date && (
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-clout-red" />
                            {project.date}
                          </span>
                        )}
                        {project.venue && (
                          <span className="inline-flex items-center gap-1 truncate max-w-[200px]">
                            <MapPin className="h-3 w-3 text-clout-red" />
                            {project.venue.split("·")[0]}
                          </span>
                        )}
                        {project.audience && (
                          <span className="inline-flex items-center gap-1 text-white font-medium">
                            <Users className="h-3 w-3 text-clout-red" />
                            {project.audience}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-3xl sm:text-4xl text-[#F4F0E9] font-light tracking-tight leading-tight group-hover:text-white transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#AAA6A2] font-light leading-relaxed line-clamp-3">
                        {project.overview}
                      </p>

                      {/* Documented Role */}
                      <div className="pt-4 border-t border-white/[0.08] space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-clout-red block">
                          Documented Clout Adda Role:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.cloutAddaContribution.slice(0, 3).map((item, i) => (
                            <span
                              key={i}
                              className="rounded-md bg-[#151515] px-2.5 py-1 text-[11px] text-[#AAA6A2] border border-white/5 font-light"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[#827E7B]">0{idx + 1} / 05</span>
                      <MagneticButton strength={0.2}>
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 font-mono text-xs uppercase tracking-wider text-white hover:border-clout-red hover:bg-clout-red transition-all"
                        >
                          <span>View Story</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
