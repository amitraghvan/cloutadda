import { COMPANY_INFO } from "@/data/companyData";
import { AnimatedCounter } from "@/components/animation/AnimatedCounter";

export function NumbersSection() {
  const numericStats = [
    {
      num: 500,
      suffix: "M+",
      label: COMPANY_INFO.metrics[0]?.label || "TOTAL VIEWS DELIVERED",
      desc: COMPANY_INFO.metrics[0]?.description || "",
    },
    {
      num: 50,
      suffix: "+",
      label: COMPANY_INFO.metrics[1]?.label || "COMPANIES SERVED",
      desc: COMPANY_INFO.metrics[1]?.description || "",
    },
    {
      num: 5000,
      suffix: "+",
      label: COMPANY_INFO.metrics[2]?.label || "INFLUENCER POOL",
      desc: COMPANY_INFO.metrics[2]?.description || "",
    },
    {
      num: 10,
      suffix: "+",
      label: COMPANY_INFO.metrics[3]?.label || "CORE VERTICALS",
      desc: COMPANY_INFO.metrics[3]?.description || "",
    },
  ];

  return (
    <section className="relative border-b border-white/[0.08] bg-[#050505] py-28 sm:py-36 overflow-hidden">
      <div className="page-shell relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8 mb-16">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-clout-red uppercase">
              Proven Footprint
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[#F4F0E9] font-light tracking-tight">
              Numbers that{" "}
              <span className="font-serif-italic text-white text-[1.15em] font-normal">speak.</span>
            </h2>
          </div>
          <p className="text-sm text-[#AAA6A2] max-w-sm font-light leading-relaxed">
            Attention delivered. Impact measured. Every campaign is engineered around outcomes that
            matter to real people.
          </p>
        </div>

        {/* Minimalist Editorial Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {numericStats.map((stat, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 transition-all duration-300 hover:border-clout-red/40 hover:bg-[#0E0E0E] flex flex-col justify-between min-h-[220px]"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#827E7B]">
                <span>0{idx + 1}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-clout-red/60" />
              </div>

              <div className="my-6">
                <div className="font-display text-5xl sm:text-6xl text-[#F4F0E9] font-extralight tracking-tight group-hover:text-white transition-colors">
                  <AnimatedCounter value={stat.num} suffix={stat.suffix} />
                </div>
                <div className="mt-2 font-mono text-xs font-normal tracking-wider text-[#AAA6A2] uppercase">
                  {stat.label}
                </div>
              </div>

              <p className="text-xs text-[#827E7B] font-light leading-relaxed border-t border-white/[0.06] pt-4">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Brochure Distinction Note */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#0A0A0A]/40 p-4 text-center">
          <p className="text-[11px] text-[#827E7B] font-light font-mono">
            <span className="text-[#AAA6A2] font-medium">Brochure Distinction Note:</span> The
            5,000+ creator pool represents our broader outreach network; the 500+ verified figure
            refers specifically to vetted, category-exclusive partners across 10+ core verticals.
          </p>
        </div>
      </div>
    </section>
  );
}
