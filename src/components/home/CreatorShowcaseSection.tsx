"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CREATORS_LIST } from "@/data/creatorsData";
import { RevealText } from "@/components/animation/RevealText";

export function CreatorShowcaseSection() {
  return (
    <section className="relative border-b border-white/[0.08] bg-[#050505] py-28 sm:py-36 overflow-hidden">
      <div className="page-shell relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8 mb-16">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-clout-red uppercase block">
              Creator Ecosystem
            </span>
            <RevealText>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E9] font-light tracking-tight leading-[1.05]">
                The right voice{" "}
                <span className="font-serif-italic font-normal text-white text-[1.12em]">
                  makes the difference.
                </span>
              </h2>
            </RevealText>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-[#AAA6A2] font-light leading-relaxed">
              Influence is more than a vanity follower count. It is about finding a voice that fits
              your brand, audience and message with uncompromising authenticity.
            </p>
            <Link
              href="/services/influencer-marketing"
              className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-white hover:text-clout-red transition-colors"
            >
              <span>Explore Influencer Practice</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-clout-red" />
            </Link>
          </div>
        </div>

        {/* 5 Documented Creator Cards — High-Fashion Editorial Framing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CREATORS_LIST.map((creator, i) => (
            <div
              key={creator.id}
              className="group rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-5 transition-all duration-500 hover:border-clout-red/40 hover:bg-[#0E0E0E] flex flex-col justify-between"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div>
                {/* Portrait with Rich Orange-Red Ambient Tone */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-5 border border-white/5 bg-[#151515]">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="h-full w-full object-cover object-center filter contrast-120 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2.5 right-2.5 rounded-full bg-black/60 px-2 py-0.5 text-[9px] font-mono tracking-wider text-white backdrop-blur-md flex items-center gap-1 border border-white/10">
                    <CheckCircle2 className="h-2.5 w-2.5 text-clout-red" />
                    <span>Verified</span>
                  </div>
                </div>

                <div className="font-display text-xl text-[#F4F0E9] font-light group-hover:text-white transition-colors">
                  {creator.name}
                </div>
                <div className="text-[11px] font-mono text-clout-red uppercase tracking-wider mt-0.5">
                  {creator.category}
                </div>

                <p className="mt-3 text-xs text-[#AAA6A2] font-light leading-relaxed line-clamp-3">
                  {creator.summary}
                </p>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <span className="text-[10px] font-mono uppercase text-[#827E7B] block">
                  {creator.metricLabel}
                </span>
                <span className="font-display text-2xl text-white font-light tracking-tight">
                  {creator.audienceMetric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#0A0A0A]/40 p-4 text-center">
          <p className="text-[11px] text-[#827E7B] font-light font-mono">
            Note: Listed audience metrics are documented brochure baselines subject to
            time-sensitive platform updates. Representation is collaborative on a
            campaign-by-campaign basis.
          </p>
        </div>
      </div>
    </section>
  );
}
