import { COMPANY_INFO } from "@/data/companyData";
import { RevealText } from "@/components/animation/RevealText";

export function HowWeWorkSection() {
  return (
    <section className="relative border-b border-white/[0.08] bg-[#050505] py-28 sm:py-36 overflow-hidden">
      <div className="page-shell">
        {/* Header */}
        <div className="border-b border-white/[0.08] pb-8 mb-16 text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[11px] font-mono tracking-[0.25em] text-clout-red uppercase block">
            The Campaign Lifecycle
          </span>
          <RevealText>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E9] font-light tracking-tight leading-[1.05]">
              From first idea to{" "}
              <span className="font-serif-italic font-normal text-white text-[1.12em]">
                final execution.
              </span>
            </h2>
          </RevealText>
          <p className="text-sm text-[#AAA6A2] font-light leading-relaxed">
            A transparent, collaborative workflow engineered to eliminate creative guesswork and
            keep strategy anchored in real culture.
          </p>
        </div>

        {/* 4 Steps Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COMPANY_INFO.workflow.map((item, idx) => (
            <div
              key={item.step}
              className="group rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 transition-all duration-300 hover:border-clout-red/40 hover:bg-[#0E0E0E] flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                  <span className="font-mono text-sm text-clout-red font-semibold">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono text-[#827E7B] uppercase">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-[#F4F0E9] font-light tracking-tight group-hover:text-white transition-colors">
                  {item.name}
                </h3>

                <p className="mt-3 text-xs font-mono text-white/90 leading-snug">{item.summary}</p>

                <p className="mt-3 text-xs text-[#AAA6A2] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] text-[10px] uppercase font-mono text-[#827E7B]">
                Stage 0{idx + 1} / 04
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
