import { useState } from "react";
import { Sparkles, Wand2 } from "lucide-react";
import { getMemeLabCreativeIdea } from "@/data/memesData";

export function MemeLabInteractive() {
  const [personality, setPersonality] = useState("Smart & witty");
  const [objective, setObjective] = useState("Brand awareness");
  const [audience, setAudience] = useState("Working professionals");

  const [generatedIdea, setGeneratedIdea] = useState(() =>
    getMemeLabCreativeIdea("Smart & witty", "Brand awareness", "Working professionals"),
  );

  const handleGenerate = () => {
    const result = getMemeLabCreativeIdea(personality, objective, audience);
    setGeneratedIdea(result);
  };

  const personalities = [
    "Funny & playful",
    "Smart & witty",
    "Premium & subtle",
    "Bold & expressive",
  ];

  const objectives = [
    "Brand awareness",
    "Product launch",
    "Engagement",
    "Event promotion",
    "Brand storytelling",
  ];

  const audiences = [
    "Students & young adults",
    "Working professionals",
    "Entrepreneurs",
    "General consumers",
  ];

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 sm:p-12 relative overflow-hidden shadow-2xl">
      <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 bg-clout-red/10 blur-3xl" />

      {/* Lab Header */}
      <div className="border-b border-white/[0.08] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-clout-red">
            <Sparkles className="h-3 w-3" />
            <span>Interactive Concept Generator</span>
          </div>
          <h3 className="mt-3 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em] leading-tight">
            The Clout Meme <span className="font-serif-italic font-normal text-white">Lab</span>
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#AAA6A2] font-light max-w-sm">
          Where internet culture meets brand thinking. Choose your parameters to synthesize a custom
          creative campaign angle.
        </p>
      </div>

      {/* Selectors Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 relative z-10">
        {/* Selector 1: Personality */}
        <div className="space-y-3">
          <label className="font-mono text-xs uppercase tracking-widest text-clout-red block">
            01. Brand Personality
          </label>
          <div className="space-y-2">
            {personalities.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setPersonality(item)}
                className={`w-full text-left rounded-lg px-3.5 py-2.5 font-mono text-xs transition-all duration-200 ${
                  personality === item
                    ? "bg-clout-red text-white font-medium shadow-[0_0_15px_rgba(229,9,32,0.3)]"
                    : "bg-white/[0.03] text-[#AAA6A2] border border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Selector 2: Objective */}
        <div className="space-y-3">
          <label className="font-mono text-xs uppercase tracking-widest text-clout-red block">
            02. Campaign Objective
          </label>
          <div className="space-y-2">
            {objectives.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setObjective(item)}
                className={`w-full text-left rounded-lg px-3.5 py-2.5 font-mono text-xs transition-all duration-200 ${
                  objective === item
                    ? "bg-clout-red text-white font-medium shadow-[0_0_15px_rgba(229,9,32,0.3)]"
                    : "bg-white/[0.03] text-[#AAA6A2] border border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Selector 3: Audience */}
        <div className="space-y-3">
          <label className="font-mono text-xs uppercase tracking-widest text-clout-red block">
            03. Target Audience
          </label>
          <div className="space-y-2">
            {audiences.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setAudience(item)}
                className={`w-full text-left rounded-lg px-3.5 py-2.5 font-mono text-xs transition-all duration-200 ${
                  audience === item
                    ? "bg-clout-red text-white font-medium shadow-[0_0_15px_rgba(229,9,32,0.3)]"
                    : "bg-white/[0.03] text-[#AAA6A2] border border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="mb-10 text-center relative z-10">
        <button
          type="button"
          onClick={handleGenerate}
          className="inline-flex items-center gap-3 rounded-full bg-clout-red px-8 py-3.5 font-mono text-xs uppercase tracking-widest text-white shadow-[0_0_25px_rgba(229,9,32,0.35)] transition-all duration-300 hover:bg-white hover:text-black active:scale-95"
        >
          <Wand2 className="h-4 w-4" />
          <span>Synthesize Angle</span>
        </button>
      </div>

      {/* Generated Creative Angle Result Box */}
      <div className="rounded-xl border border-clout-red/30 bg-[#050505] p-6 sm:p-10 relative z-10">
        <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] pb-4 mb-6 gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
            Synthesized Campaign Angle
          </span>
          <span className="text-xs text-[#AAA6A2] font-mono">
            {personality} · {objective} · {audience}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="rounded-lg border border-white/[0.08] bg-[#0A0A0A] p-5">
            <span className="font-mono text-[10px] uppercase text-[#AAA6A2] block tracking-wider mb-1">
              Suggested Meme Tone:
            </span>
            <div className="font-mono text-sm text-white font-medium">
              {generatedIdea.suggestedTone}
            </div>
          </div>
          <div className="rounded-lg border border-white/[0.08] bg-[#0A0A0A] p-5">
            <span className="font-mono text-[10px] uppercase text-[#AAA6A2] block tracking-wider mb-1">
              Possible Content Format:
            </span>
            <div className="font-mono text-sm text-white font-medium">{generatedIdea.format}</div>
          </div>
        </div>

        <div className="my-6 rounded-lg border border-clout-red/30 bg-[#0E0E0E] p-6">
          <span className="font-mono text-[10px] uppercase tracking-wider text-clout-red block mb-2">
            Sample Headline Concept:
          </span>
          <div className="font-display font-light text-2xl sm:text-3xl text-white tracking-[-0.02em] leading-snug">
            "{generatedIdea.sampleHeadline}"
          </div>
        </div>

        <div>
          <span className="font-mono text-[10px] uppercase text-[#AAA6A2] block mb-2 tracking-wider">
            Why This Direction Works:
          </span>
          <p className="text-xs sm:text-sm text-[#AAA6A2] font-light leading-relaxed">
            {generatedIdea.explanation}
          </p>
        </div>

        <div className="mt-6 border-t border-white/[0.06] pt-4 font-mono text-[10px] text-[#AAA6A2]/70 italic">
          *Illustrative concept generator demonstrating how strategic messaging adapts to internet
          formats.
        </div>
      </div>
    </div>
  );
}
