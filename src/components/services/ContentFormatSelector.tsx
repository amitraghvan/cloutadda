"use client";

import { useState } from "react";
import { SOCIAL_CONTENT_FORMATS } from "@/data/servicesData";

export function ContentFormatSelector() {
  const [selectedFormat, setSelectedFormat] = useState(SOCIAL_CONTENT_FORMATS[0]!);

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 sm:p-12 relative overflow-hidden">
      {/* Subtle background red glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-clout-red/5 blur-3xl" />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 mb-8 relative z-10">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
            Interactive Exploration
          </span>
          <h3 className="mt-3 font-display font-light text-2xl sm:text-3xl text-[#F4F0E9] tracking-[-0.03em]">
            Content Format{" "}
            <span className="font-serif-italic font-normal text-white">Explorer</span>
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#AAA6A2] font-light max-w-sm">
          Select native social formats to inspect our strategic intent, production hooks, and
          demonstrative angles.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-8 relative z-10">
        {SOCIAL_CONTENT_FORMATS.map((fmt) => {
          const isSelected = selectedFormat.id === fmt.id;
          return (
            <button
              key={fmt.id}
              onClick={() => setSelectedFormat(fmt)}
              className={`rounded-full px-5 py-2.5 font-mono text-xs tracking-wider transition-all duration-200 ${
                isSelected
                  ? "bg-clout-red text-white shadow-[0_0_20px_rgba(229,9,32,0.35)]"
                  : "bg-white/[0.03] text-[#AAA6A2] border border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {fmt.title}
            </button>
          );
        })}
      </div>

      {/* Selected Format Detail Card */}
      <div className="rounded-xl border border-clout-red/30 bg-[#050505] p-6 sm:p-8 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 mb-6">
          <span className="font-mono text-xs text-clout-red tracking-wider">
            Primary Platform: {selectedFormat.platform}
          </span>
          <div className="flex gap-2">
            {selectedFormat.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/[0.04] border border-white/10 px-3 py-1 font-mono text-[10px] text-[#AAA6A2]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h4 className="font-display font-light text-2xl sm:text-3xl text-white tracking-[-0.02em] leading-snug">
          "{selectedFormat.headline}"
        </h4>

        <p className="mt-4 text-sm text-[#AAA6A2] font-light leading-relaxed max-w-2xl">
          {selectedFormat.description}
        </p>

        <div className="mt-6 rounded-lg border border-white/[0.08] bg-[#0A0A0A] p-5">
          <div className="font-mono text-[11px] uppercase tracking-wider text-clout-red mb-2">
            Illustrative Strategic Direction:
          </div>
          <p className="text-xs sm:text-sm text-[#F4F0E9] font-light leading-relaxed">
            {selectedFormat.exampleAngle}
          </p>
        </div>

        <div className="mt-4 font-mono text-[10px] text-[#AAA6A2]/70 text-right italic">
          *Illustrative creative direction for demonstrative reference.
        </div>
      </div>
    </div>
  );
}
