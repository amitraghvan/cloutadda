import { COMPANY_INFO } from "@/data/companyData";
import { RevealText } from "@/components/animation/RevealText";
import { ParallaxImage } from "@/components/animation/ParallaxImage";

export function ManifestoSection() {
  return (
    <section className="relative border-b border-white/[0.08] bg-[#050505] py-28 sm:py-36 overflow-hidden">
      <div className="page-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-[11px] font-mono tracking-[0.25em] text-clout-red uppercase block">
              Brand Manifesto
            </span>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E9] font-light leading-[1.08] tracking-tight">
              <RevealText delay={0.05}>People scroll past ads.</RevealText>
              <RevealText delay={0.15}>
                They remember what makes them{" "}
                <span className="font-serif-italic text-white text-[1.15em] font-normal underline decoration-clout-red/40 underline-offset-6">
                  feel something.
                </span>
              </RevealText>
            </h2>

            <RevealText delay={0.25}>
              <p className="text-base sm:text-lg text-[#AAA6A2] leading-relaxed font-light max-w-xl">
                {COMPANY_INFO.manifesto.copy}
              </p>
            </RevealText>

            {/* Keyword Pills */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              {COMPANY_INFO.manifesto.keywords.map((kw, i) => (
                <div
                  key={kw}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0A0A] px-4 py-1.5 font-mono text-xs font-normal tracking-wider text-[#AAA6A2] transition-colors hover:border-white/30 hover:text-white"
                >
                  <span className="text-clout-red text-[10px]">0{i + 1}</span>
                  <span>{kw}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Contrast Silhouette & Editorial Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/10 bg-[#0A0A0A] p-7 shadow-2xl overflow-hidden group">
              {/* Backlight */}
              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-clout-red/10 blur-3xl pointer-events-none" />

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/5">
                <ParallaxImage speed={0.08} className="h-full w-full">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
                    alt="Cinematic Stage Lighting & Atmospheric Silhouette"
                    className="h-full w-full object-cover filter contrast-120 grayscale brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                </ParallaxImage>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#AAA6A2] border-b border-white/[0.08] pb-2 font-mono">
                  <span className="text-[10px] text-clout-red uppercase tracking-widest">
                    The Creative Thesis
                  </span>
                  <span className="text-[10px]">01 / RELEVANCE</span>
                </div>
                <blockquote className="font-display text-xl sm:text-2xl text-[#F4F0E9] font-light leading-snug">
                  "Your audience doesn't care about your slogan until you make them care about your
                  story."
                </blockquote>
                <p className="text-xs text-[#827E7B] font-light leading-relaxed">
                  The internet rewards cultural resonance over corporate polish. When you align with
                  genuine subcultures, you don't interrupt conversations—you become the catalyst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
