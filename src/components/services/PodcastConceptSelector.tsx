import { useState } from "react";
import { PODCAST_CONCEPTS } from "@/data/servicesData";
import { Mic } from "lucide-react";

export function PodcastConceptSelector() {
  const [selectedConcept, setSelectedConcept] = useState(PODCAST_CONCEPTS[0]!);

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 sm:p-12 relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6 mb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
            Sonic Branding &amp; Shows
          </span>
          <h3 className="mt-3 font-display font-light text-2xl sm:text-3xl text-[#F4F0E9] tracking-[-0.03em]">
            Podcast Concept{" "}
            <span className="font-serif-italic font-normal text-white">Selector</span>
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#AAA6A2] font-light max-w-sm">
          Explore tailored podcast architectures designed to turn company leaders into
          industry-defining hosts.
        </p>
      </div>

      {/* Concept Buttons */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {PODCAST_CONCEPTS.map((concept) => {
          const isSelected = selectedConcept.id === concept.id;
          return (
            <button
              key={concept.id}
              onClick={() => setSelectedConcept(concept)}
              className={`rounded-full px-5 py-2.5 font-mono text-xs tracking-wider transition-all duration-200 ${
                isSelected
                  ? "bg-clout-red text-white shadow-[0_0_20px_rgba(229,9,32,0.35)]"
                  : "bg-white/[0.03] text-[#AAA6A2] border border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {concept.title}
            </button>
          );
        })}
      </div>

      {/* Selected Concept Preview */}
      <div className="rounded-xl border border-clout-red/30 bg-[#050505] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.08] pb-4 mb-6 gap-3">
          <div>
            <span className="font-mono text-[10px] uppercase text-[#AAA6A2] block mb-1 tracking-wider">
              Suggested Show Title:
            </span>
            <div className="font-display font-light text-2xl sm:text-3xl text-white tracking-[-0.02em]">
              {selectedConcept.suggestedName}
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-clout-red/30 bg-clout-red/10 px-3.5 py-1 font-mono text-xs text-clout-red">
            <Mic className="h-3 w-3 animate-pulse" />
            <span>Tone: {selectedConcept.vibe}</span>
          </div>
        </div>

        <div className="mb-6 rounded-lg border border-white/[0.08] bg-[#0A0A0A] p-5">
          <span className="font-mono text-[10px] uppercase tracking-wider text-clout-red mb-2 block">
            Sample Episode Idea:
          </span>
          <p className="text-sm sm:text-base text-[#F4F0E9] leading-relaxed font-light">
            "{selectedConcept.sampleTopic}"
          </p>
        </div>

        <div className="rounded-lg border border-white/[0.08] bg-[#0E0E0E] p-5">
          <span className="font-mono text-[10px] uppercase text-[#AAA6A2] block mb-2 tracking-wider">
            Production &amp; Distribution Architecture:
          </span>
          <p className="text-xs sm:text-sm text-[#AAA6A2] leading-relaxed font-light">
            {selectedConcept.format}
          </p>
        </div>

        <div className="mt-4 font-mono text-[10px] text-[#AAA6A2]/70 text-right italic">
          *Illustrative concept proposal. Custom show identity, guest placement and studio locations
          are developed post-brief.
        </div>
      </div>
    </div>
  );
}
