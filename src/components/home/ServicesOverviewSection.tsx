import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_LIST } from "@/data/servicesData";
import { RevealText } from "@/components/animation/RevealText";
import { RevealImage } from "@/components/animation/RevealImage";
import { MagneticButton } from "@/components/animation/MagneticButton";

export function ServicesOverviewSection() {
  const serviceImages: Record<string, string> = {
    "social-media-marketing":
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    "pr-meme-marketing":
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    "influencer-marketing":
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    "social-events-marketing":
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
    podcasting:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop",
  };

  return (
    <section
      id="services-overview"
      className="relative border-b border-white/[0.08] bg-[#050505] py-28 sm:py-36 overflow-hidden"
    >
      <div className="page-shell">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8 mb-16">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-clout-red uppercase">
              Core Practices
            </span>
            <RevealText>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E9] font-light tracking-tight leading-[1.05]">
                Good ideas deserve{" "}
                <span className="font-serif-italic font-normal text-white text-[1.12em]">
                  great execution.
                </span>
              </h2>
            </RevealText>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-[#AAA6A2] font-light leading-relaxed">
              Whether you want to build social equity, engage niche creators, spark viral internet
              conversations, or host stadium-scale experiences, we provide integrated execution.
            </p>
            <Link
              to="/services"
              className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-white hover:text-clout-red transition-colors"
            >
              <span>View Full Services Matrix</span>
              <ArrowUpRight className="h-3 w-3 text-clout-red" />
            </Link>
          </div>
        </div>

        {/* Asymmetrical Editorial Services List */}
        <div className="space-y-12">
          {SERVICES_LIST.map((srv, index) => {
            const isEven = index % 2 === 0;
            const imgUrl = serviceImages[srv.id] || serviceImages["social-media-marketing"]!;

            return (
              <div
                key={srv.id}
                className="group rounded-3xl border border-white/[0.08] bg-[#0A0A0A] p-8 sm:p-12 transition-all duration-500 hover:border-clout-red/40 hover:bg-[#0E0E0E]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Visual Frame with Clip-Path Reveal */}
                  <div
                    className={`lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <RevealImage className="h-full w-full">
                      <img
                        src={imgUrl}
                        alt={srv.title}
                        className="h-full w-full object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
                      />
                    </RevealImage>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                      <span className="font-mono text-xs text-clout-red font-medium">
                        {srv.number}
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#AAA6A2]">
                        Practice {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Copy Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-clout-red">
                        Practice {srv.number}
                      </span>
                      <h3 className="font-display text-3xl sm:text-4xl text-[#F4F0E9] font-light tracking-tight group-hover:text-white transition-colors">
                        {srv.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-[#AAA6A2] font-light leading-relaxed">
                      {srv.shortDescription}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-white/[0.08]">
                      <span className="text-xs font-mono text-[#827E7B] font-light italic">
                        {srv.closingHeadline}
                      </span>
                      <MagneticButton strength={0.2}>
                        <Link
                          to={`/services/${srv.slug}` as string}
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 font-mono text-xs uppercase tracking-wider text-white hover:border-clout-red hover:bg-clout-red transition-all"
                        >
                          <span>Explore Practice</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
