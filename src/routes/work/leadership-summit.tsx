import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LightboxModal } from "@/components/shared/LightboxModal";
import { PORTFOLIO_LIST } from "@/data/portfolioData";
import { RevealText } from "@/components/animation/RevealText";
import { ParallaxImage } from "@/components/animation/ParallaxImage";

export const Route = createFileRoute("/work/leadership-summit")({
  component: LeadershipSummitPage,
  head: () => ({
    meta: [
      { title: "Leadership Summit Case Study | CLOUT ADDA®" },
      {
        name: "description",
        content:
          "Case study: Leadership Summit convening national leaders Jaya Kishori, Khan Sir, Smriti Irani, Anurag Thakur, Suresh Prabhu and more.",
      },
      { property: "og:title", content: "Leadership Summit — CLOUT ADDA® Case Study" },
    ],
  }),
});

function LeadershipSummitPage() {
  const study = PORTFOLIO_LIST[0]!; // Leadership Summit
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const related = PORTFOLIO_LIST.filter((p) => p.id !== study.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F4F0E9] selection:bg-clout-red selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/[0.08] bg-[#050505] overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[850px] rounded-full bg-clout-red/10 blur-[160px]" />
          </div>

          <div className="page-shell relative z-10">
            <div className="mb-8">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#AAA6A2] hover:text-white transition-colors group"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1 text-clout-red" />
                <span>Back to All Work</span>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-[11px] uppercase tracking-widest text-clout-red">
                {study.category}
              </span>
            </div>

            <h1 className="mt-5 font-display font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E9] tracking-[-0.03em] leading-[1.05] max-w-5xl">
              {study.title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#AAA6A2] font-light leading-relaxed max-w-3xl">
              {study.heroTagline}
            </p>
          </div>
        </section>

        {/* Featured Big Stage Image */}
        <section className="border-b border-white/[0.08] bg-[#0A0A0A]">
          <div className="relative aspect-[21/9] w-full max-h-[640px] overflow-hidden">
            <ParallaxImage speed={0.1} className="h-full w-full">
              <img
                src={study.heroImage}
                alt={study.title}
                className="h-full w-full object-cover object-center grayscale contrast-125"
              />
            </ParallaxImage>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30 pointer-events-none" />
          </div>
        </section>

        {/* Overview & Metadata Grid */}
        <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505]">
          <div className="page-shell">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left: Deep Story */}
              <div className="lg:col-span-8 space-y-10">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-clout-red block mb-2">
                    Project Overview
                  </span>
                  <RevealText>
                    <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em] leading-tight">
                      Convening national thought-leaders on{" "}
                      <span className="font-serif-italic font-normal text-white">
                        governance, ethics &amp; disruption.
                      </span>
                    </h2>
                  </RevealText>
                  <p className="mt-6 text-base sm:text-lg text-[#AAA6A2] leading-relaxed font-light">
                    {study.overview}
                  </p>
                </div>

                {/* Documented Clout Adda Contribution */}
                <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 space-y-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
                    Documented Clout Adda Role
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {study.cloutAddaContribution.map((role, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-clout-red shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#F4F0E9] font-light">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="space-y-4">
                  <h3 className="font-display font-light text-2xl text-white tracking-[-0.02em]">
                    Key Execution Highlights
                  </h3>
                  <div className="space-y-3">
                    {study.keyHighlights.map((hl, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-4 text-xs sm:text-sm text-[#AAA6A2] font-light"
                      >
                        ✓ {hl}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Speaker Roster & Event Details */}
              <div className="lg:col-span-4 space-y-6">
                <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-6 sm:p-8 space-y-6">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-clout-red block">
                      Documented Speaker Roster
                    </span>
                    <p className="text-xs text-[#AAA6A2] mt-1 mb-4 font-light">
                      Brochure-confirmed dignitaries, policymakers &amp; spiritual leaders:
                    </p>
                    <div className="space-y-2">
                      {study.speakersOrArtists.map((spk, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-xs font-mono text-white"
                        >
                          <span>{spk}</span>
                          <span className="text-[10px] text-clout-red">0{idx + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/[0.08] pt-4 font-mono text-[11px] text-[#AAA6A2]">
                    Thematic Focus: Leadership, innovation, education, ethics, spirituality and
                    nation-building.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery / Visual Highlights */}
        <section className="py-24 border-b border-white/[0.08] bg-[#0A0A0A]">
          <div className="page-shell">
            <span className="font-mono text-xs uppercase tracking-widest text-clout-red block mb-8">
              Visual Documentation
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {study.gallery.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className="group relative aspect-video rounded-xl overflow-hidden border border-white/[0.08] bg-[#050505] cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Leadership Summit photo ${i + 1}`}
                    className="h-full w-full object-cover grayscale contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-mono text-xs text-white tracking-widest uppercase">
                    Click to Expand
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Work */}
        <section className="py-24 bg-[#050505]">
          <div className="page-shell">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-10">
              <span className="font-display font-light text-2xl text-white tracking-[-0.02em]">
                Related Portfolio Projects
              </span>
              <Link
                to="/work"
                className="font-mono text-xs text-clout-red uppercase hover:underline"
              >
                All Projects →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/work/${rel.slug}` as string}
                  className="group rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-7 flex flex-col justify-between transition-all hover:border-clout-red/40"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase text-clout-red">
                      {rel.category}
                    </span>
                    <h4 className="font-display font-light text-2xl text-white mt-2 group-hover:text-clout-red transition-colors">
                      {rel.title}
                    </h4>
                    <p className="mt-3 text-xs sm:text-sm text-[#AAA6A2] font-light line-clamp-2">
                      {rel.overview}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-clout-red">
                    <span>Read Case Study</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {activeImage && (
        <LightboxModal
          isOpen={!!activeImage}
          onClose={() => setActiveImage(null)}
          imageUrl={activeImage}
          caption="Leadership Summit Documented Moment"
        />
      )}
    </div>
  );
}
