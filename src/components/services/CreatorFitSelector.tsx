import { useState } from "react";
import { CREATOR_CATEGORIES } from "@/data/servicesData";

export function CreatorFitSelector() {
  const [selectedCategory, setSelectedCategory] = useState(CREATOR_CATEGORIES[0]!);

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 sm:p-12 relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 mb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
            Creator Strategy Matrix
          </span>
          <h3 className="mt-3 font-display font-light text-2xl sm:text-3xl text-[#F4F0E9] tracking-[-0.03em]">
            Creator Fit <span className="font-serif-italic font-normal text-white">Selector</span>
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#AAA6A2] font-light max-w-sm">
          Select a vertical to inspect our vetted category network and tailored collaboration
          methodology.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {CREATOR_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory.id === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2.5 font-mono text-xs tracking-wider transition-all duration-200 ${
                isSelected
                  ? "bg-clout-red text-white shadow-[0_0_20px_rgba(229,9,32,0.35)]"
                  : "bg-white/[0.03] text-[#AAA6A2] border border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Detail Showcase */}
      <div className="rounded-xl border border-clout-red/30 bg-[#050505] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.08] pb-4 mb-6 gap-3">
          <div className="font-display font-light text-2xl sm:text-3xl text-white tracking-[-0.02em]">
            {selectedCategory.name}
          </div>
          <span className="font-mono rounded-full border border-clout-red/30 bg-clout-red/10 px-3.5 py-1 text-xs text-clout-red font-medium">
            {selectedCategory.stat}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-lg border border-white/[0.08] bg-[#0A0A0A] p-5">
            <span className="font-mono text-[10px] uppercase text-[#AAA6A2] block mb-2 tracking-wider">
              Ideal Brand Categories:
            </span>
            <p className="text-xs sm:text-sm text-[#F4F0E9] font-light">
              {selectedCategory.idealFor}
            </p>
          </div>
          <div className="rounded-lg border border-white/[0.08] bg-[#0A0A0A] p-5">
            <span className="font-mono text-[10px] uppercase text-[#AAA6A2] block mb-2 tracking-wider">
              Primary KPI Focus:
            </span>
            <p className="text-xs sm:text-sm text-[#F4F0E9] font-light">
              {selectedCategory.kpiFocus}
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-white/[0.08] bg-[#0E0E0E] p-5">
          <div className="font-mono text-[11px] uppercase tracking-wider text-clout-red mb-2">
            Conceptual Campaign Approach:
          </div>
          <p className="text-xs sm:text-sm text-[#AAA6A2] leading-relaxed font-light">
            {selectedCategory.approach}
          </p>
        </div>

        <div className="mt-4 font-mono text-[10px] text-[#AAA6A2]/70 text-right italic">
          *Illustrative campaign approach. Creator availability, licensing and deliverables are
          scoped upon specific campaign brief.
        </div>
      </div>
    </div>
  );
}
