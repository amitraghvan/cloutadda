import { useState } from "react";
import { RefreshCw, Copy, Check, Share2, Maximize2, X, Sparkles } from "lucide-react";
import { CLOUT_MEMES, type MemeItem } from "@/data/memesData";
import { RevealText } from "@/components/animation/RevealText";
import { MagneticButton } from "@/components/animation/MagneticButton";

export function MemeWallSection() {
  const [activeMeme, setActiveMeme] = useState<MemeItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [spotlightMeme, setSpotlightMeme] = useState<MemeItem>(CLOUT_MEMES[0]!);

  const handleRandomMeme = () => {
    const currentIndex = CLOUT_MEMES.findIndex((m) => m.id === spotlightMeme.id);
    let nextIndex = Math.floor(Math.random() * CLOUT_MEMES.length);
    if (nextIndex === currentIndex) {
      nextIndex = (currentIndex + 1) % CLOUT_MEMES.length;
    }
    const next = CLOUT_MEMES[nextIndex];
    if (next) setSpotlightMeme(next);
  };

  const handleCopyCaption = (meme: MemeItem, e?: React.MouseEvent) => {
    e?.stopPropagation();
    navigator.clipboard.writeText(`"${meme.topText} ${meme.bottomText}" — ${meme.caption}`);
    setCopiedId(meme.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleShare = async (meme: MemeItem, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Clout Adda Meme — ${meme.category}`,
          text: `"${meme.topText} ${meme.bottomText}" — ${meme.caption}`,
          url: window.location.href,
        });
      } catch {
        // Cancelled
      }
    } else {
      handleCopyCaption(meme);
    }
  };

  return (
    <section className="relative border-b border-white/[0.08] bg-[#050505] py-28 sm:py-36 overflow-hidden">
      <div className="page-shell relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/[0.08] pb-8 mb-16">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-clout-red uppercase block">
              Internet Culture, With Strategy
            </span>
            <RevealText>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E9] font-light tracking-tight leading-[1.05]">
                We get the{" "}
                <span className="font-serif-italic font-normal text-white text-[1.12em]">
                  group chat.
                </span>
              </h2>
            </RevealText>
            <p className="mt-3 text-sm sm:text-base text-[#AAA6A2] font-light max-w-xl">
              Some ideas need a 40-slide presentation. Some just need the right meme at the right
              time. Here are original typographic concepts exploring common brand tensions.
            </p>
          </div>

          <div>
            <MagneticButton strength={0.25}>
              <button
                onClick={handleRandomMeme}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 font-mono text-xs uppercase tracking-wider text-white hover:border-clout-red hover:bg-clout-red transition-all duration-300"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Another One ↻</span>
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Spotlight Editorial Meme Card */}
        <div className="mb-14 rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 sm:p-14 relative overflow-hidden shadow-2xl transition-all duration-500">
          <div className="absolute top-0 right-0 h-48 w-48 bg-clout-red/10 blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-8">
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-clout-red" />
              <span className="font-mono text-[10px] tracking-widest text-clout-red uppercase">
                Spotlight Meme Concept
              </span>
            </div>
            <span className="font-mono text-xs text-[#AAA6A2]">{spotlightMeme.badge}</span>
          </div>

          <div className="my-10 text-center max-w-3xl mx-auto space-y-6">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#827E7B] block">
              [ The Brief ]
            </span>
            <div className="font-display text-2xl sm:text-4xl text-[#F4F0E9] font-light tracking-tight leading-snug">
              "{spotlightMeme.topText}"
            </div>

            <div className="h-4 flex items-center justify-center">
              <div className="h-[1px] w-16 bg-clout-red/60" />
            </div>

            <span className="text-[11px] uppercase font-mono tracking-widest text-clout-red block">
              [ The Reality ]
            </span>
            <div className="font-display text-2xl sm:text-4xl text-white font-normal tracking-tight leading-snug">
              "{spotlightMeme.bottomText}"
            </div>
          </div>

          <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-[#AAA6A2] font-light italic max-w-xl">
              {spotlightMeme.caption}
            </p>
            <div className="flex items-center gap-3 font-mono">
              <button
                onClick={(e) => handleCopyCaption(spotlightMeme, e)}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#151515] px-4 py-2 text-xs font-normal text-white hover:border-white/30 transition-colors"
              >
                {copiedId === spotlightMeme.id ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-green-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-[#AAA6A2]" />
                    <span>Copy Caption</span>
                  </>
                )}
              </button>
              <button
                onClick={(e) => handleShare(spotlightMeme, e)}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#151515] px-4 py-2 text-xs font-normal text-white hover:border-white/30 transition-colors"
              >
                <Share2 className="h-3.5 w-3.5 text-[#AAA6A2]" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLOUT_MEMES.map((meme) => (
            <div
              key={meme.id}
              onClick={() => setActiveMeme(meme)}
              className="group cursor-pointer rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-7 transition-all duration-300 hover:border-clout-red/40 hover:bg-[#0E0E0E] flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4 text-xs font-mono">
                  <span className="text-clout-red uppercase">{meme.category}</span>
                  <span className="text-[#827E7B]">{meme.badge.split("·")[0]}</span>
                </div>

                <div className="space-y-4 py-2">
                  <div className="font-display text-lg sm:text-xl text-[#F4F0E9] font-light leading-snug">
                    "{meme.topText}"
                  </div>
                  <div className="font-display text-lg sm:text-xl text-white font-normal leading-snug">
                    "{meme.bottomText}"
                  </div>
                </div>
              </div>

              <div className="border-t border-white/[0.08] pt-4 flex items-center justify-between text-xs text-[#827E7B]">
                <span className="truncate max-w-[180px] font-light">{meme.situation}</span>
                <span className="text-[11px] font-mono text-white flex items-center gap-1 group-hover:text-clout-red transition-colors">
                  EXPAND <Maximize2 className="h-3 w-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center font-mono text-xs text-[#827E7B] font-light">
          Note: These are original illustrative agency concepts exploring brand-audience dynamics,
          not client deliverables.
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeMeme && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveMeme(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-3xl border border-white/15 bg-[#0A0A0A] p-8 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveMeme(null)}
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#151515] text-[#AAA6A2] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
              {activeMeme.badge}
            </span>

            <div className="my-8 space-y-4 text-center py-6 border-y border-white/[0.08]">
              <div className="font-display text-xl sm:text-2xl text-[#F4F0E9] font-light">
                "{activeMeme.topText}"
              </div>
              <div className="h-px w-12 bg-clout-red/60 mx-auto" />
              <div className="font-display text-xl sm:text-2xl text-white font-medium">
                "{activeMeme.bottomText}"
              </div>
            </div>

            <p className="text-xs text-[#AAA6A2] leading-relaxed mb-6 font-light">
              {activeMeme.caption}
            </p>

            <div className="flex items-center justify-between gap-4 font-mono">
              <button
                onClick={() => handleCopyCaption(activeMeme)}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#151515] px-5 py-2 text-xs text-white hover:border-white/30"
              >
                {copiedId === activeMeme.id ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-green-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Caption</span>
                  </>
                )}
              </button>

              <button
                onClick={() => handleShare(activeMeme)}
                className="inline-flex items-center gap-2 rounded-full bg-clout-red px-5 py-2 text-xs uppercase text-white hover:bg-white hover:text-black transition-colors"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>Share Concept</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
