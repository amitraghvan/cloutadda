"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CLOUT_CHECK_OPTIONS, type ChallengeOption } from "@/data/cloutCheckData";
import { RevealText } from "@/components/animation/RevealText";
import { MagneticButton } from "@/components/animation/MagneticButton";

export function CloutCheckSection() {
  const [selectedChallenge, setSelectedChallenge] = useState<ChallengeOption>(
    CLOUT_CHECK_OPTIONS[1] || CLOUT_CHECK_OPTIONS[0]!,
  );

  return (
    <section className="relative border-b border-white/[0.08] bg-[#050505] py-28 sm:py-36 overflow-hidden">
      <div className="page-shell relative z-10">
        {/* Header */}
        <div className="border-b border-white/[0.08] pb-8 mb-16 text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[11px] font-mono tracking-[0.25em] text-clout-red uppercase block">
            Brand Diagnostic
          </span>
          <RevealText>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E9] font-light tracking-tight leading-[1.05]">
              What does your brand{" "}
              <span className="font-serif-italic font-normal text-white text-[1.12em]">
                need right now?
              </span>
            </h2>
          </RevealText>
          <p className="text-sm text-[#AAA6A2] font-light">
            Select your current growth friction below to inspect our strategic diagnosis and
            recommended capability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Challenge Selector Choices */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#827E7B] block mb-2">
              Select Your Current Challenge:
            </span>
            {CLOUT_CHECK_OPTIONS.map((opt) => {
              const isSelected = selectedChallenge.id === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedChallenge(opt)}
                  className={`w-full text-left rounded-2xl border p-5 transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? "border-clout-red bg-[#101010] shadow-[0_0_25px_rgba(229,9,32,0.15)] text-white"
                      : "border-white/5 bg-[#0A0A0A] text-[#AAA6A2] hover:border-white/20 hover:text-[#F4F0E9]"
                  }`}
                >
                  <span className="font-display text-base sm:text-lg font-light tracking-tight">
                    {opt.question}
                  </span>
                  <CheckCircle2
                    className={`h-4 w-4 shrink-0 transition-opacity ${
                      isSelected ? "text-clout-red opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Architectural Diagnosis Panel */}
          <div className="lg:col-span-6">
            <div className="sticky top-28 rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-clout-red/10 blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                <span className="text-[10px] uppercase font-mono tracking-widest text-clout-red">
                  Clout Adda Diagnosis
                </span>
                <span className="text-[11px] font-mono text-[#AAA6A2]">Recommended Strategy</span>
              </div>

              {/* Diagnosis */}
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] uppercase font-mono text-[#827E7B] block mb-1">
                    Identified Bottleneck:
                  </span>
                  <div className="font-display text-2xl sm:text-3xl text-[#F4F0E9] font-light leading-snug">
                    "{selectedChallenge.question}"
                  </div>
                </div>

                <div className="rounded-2xl border border-white/5 bg-[#121212] p-5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-clout-red block">
                    Strategic Reality
                  </span>
                  <p className="text-sm text-[#F4F0E9] font-light leading-relaxed">
                    {selectedChallenge.diagnosis}
                  </p>
                  <p className="text-xs text-[#827E7B] font-light leading-relaxed pt-2 border-t border-white/[0.06]">
                    {selectedChallenge.detail}
                  </p>
                </div>
              </div>

              {/* Recommendation Box */}
              <div className="border-t border-white/[0.08] mt-8 pt-6 space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#827E7B] block">
                    Recommended Practice:
                  </span>
                  <div className="font-display text-2xl sm:text-3xl text-white font-normal tracking-tight mt-1">
                    {selectedChallenge.recommendedService}
                  </div>
                </div>

                <MagneticButton strength={0.15} className="w-full">
                  <Link
                    href={`/services/${selectedChallenge.serviceSlug}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-clout-red bg-clout-red py-3.5 font-mono text-xs uppercase tracking-wider text-white shadow-[0_0_25px_rgba(229,9,32,0.3)] transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    <span>{selectedChallenge.actionText}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
