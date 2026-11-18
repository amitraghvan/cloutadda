"use client";

import { useState } from "react";
import { EVENT_TYPES } from "@/data/servicesData";

export function EventTypeSelector() {
  const [selectedEvent, setSelectedEvent] = useState(EVENT_TYPES[0]!);

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 sm:p-12 relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 mb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
            Experiential Formats
          </span>
          <h3 className="mt-3 font-display font-light text-2xl sm:text-3xl text-[#F4F0E9] tracking-[-0.03em]">
            Event Format <span className="font-serif-italic font-normal text-white">Explorer</span>
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#AAA6A2] font-light max-w-sm">
          Select an event scale to discover our on-ground coordination and digital amplification
          strategy.
        </p>
      </div>

      {/* Selectors */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {EVENT_TYPES.map((evt) => {
          const isSelected = selectedEvent.id === evt.id;
          return (
            <button
              key={evt.id}
              onClick={() => setSelectedEvent(evt)}
              className={`rounded-full px-5 py-2.5 font-mono text-xs tracking-wider transition-all duration-200 ${
                isSelected
                  ? "bg-clout-red text-white shadow-[0_0_20px_rgba(229,9,32,0.35)]"
                  : "bg-white/[0.03] text-[#AAA6A2] border border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {evt.title}
            </button>
          );
        })}
      </div>

      {/* Selected Card */}
      <div className="rounded-xl border border-clout-red/30 bg-[#050505] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.08] pb-4 mb-6 gap-3">
          <div className="font-display font-light text-2xl sm:text-3xl text-white tracking-[-0.02em]">
            {selectedEvent.title}
          </div>
          <span className="font-mono text-xs text-clout-red tracking-wider font-semibold">
            {selectedEvent.highlight}
          </span>
        </div>

        <div className="mb-6 rounded-lg border border-white/[0.08] bg-[#0A0A0A] p-5">
          <span className="font-mono text-[10px] uppercase text-[#AAA6A2] block mb-2 tracking-wider">
            Focus &amp; Scale:
          </span>
          <p className="text-xs sm:text-sm text-[#F4F0E9] font-light">{selectedEvent.focus}</p>
        </div>

        <div className="mb-6 rounded-lg border border-white/[0.08] bg-[#0E0E0E] p-5">
          <div className="font-mono text-[11px] uppercase tracking-wider text-clout-red mb-2">
            Strategic Direction:
          </div>
          <p className="text-xs sm:text-sm text-[#AAA6A2] leading-relaxed font-light">
            {selectedEvent.strategy}
          </p>
        </div>

        <div>
          <span className="font-mono text-[10px] uppercase text-[#AAA6A2] block mb-3 tracking-wider">
            Key Agency Deliverables:
          </span>
          <div className="flex flex-wrap gap-2">
            {selectedEvent.deliverables.map((item, i) => (
              <span
                key={i}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-[#F4F0E9]"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-white/[0.06] pt-4 font-mono text-[10px] text-[#AAA6A2]/70 text-right italic">
          *Illustrative creative direction. Actual venue access and talent curation are customized
          to client brief.
        </div>
      </div>
    </div>
  );
}
