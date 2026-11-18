import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { PodcastConceptSelector } from "@/components/services/PodcastConceptSelector";
import { RevealText } from "@/components/animation/RevealText";
import { MagneticButton } from "@/components/animation/MagneticButton";

export const Route = createFileRoute("/services/podcasting")({
  component: PodcastingPage,
  head: () => ({
    meta: [
      { title: "Podcasting | CLOUT ADDA® — Branded Audio-Visual Shows & Interviews" },
      {
        name: "description",
        content:
          "Some stories deserve more than a scroll. We develop, produce and distribute branded video podcasts and secure guest spots for leadership positioning.",
      },
      { property: "og:title", content: "Podcasting — CLOUT ADDA®" },
      {
        property: "og:description",
        content:
          "From concept and studio recording to viral shorts distribution and guest booking. Elevate your long-form presence.",
      },
    ],
  }),
});

function PodcastingPage() {
  const whyPodcastingPillars = [
    {
      title: "Deep Attention",
      desc: "Listeners spend 30 to 60 uninterrupted minutes with your ideas, building unprecedented brand intimacy.",
    },
    {
      title: "Stronger Authority",
      desc: "Positions company founders and leadership as undisputed, articulate industry authorities.",
    },
    {
      title: "High Content Efficiency",
      desc: "One 45-minute episode yields 15+ vertical Reels, quote carousels, audio snippets, and newsletter editions.",
    },
    {
      title: "Strategic Networking",
      desc: "Inviting prospective enterprise clients, partners, and creators to be featured guests on your show.",
    },
    {
      title: "Compounding Library",
      desc: "Episodes remain evergreen, accumulating passive reach and high-intent backlinks for months and years.",
    },
  ];

  const podcastOfferings = [
    {
      title: "Show Concept & Identity",
      desc: "Naming, sonic branding, set design styling, thumbnail identity, and comprehensive show formatting.",
    },
    {
      title: "Studio Production & Recording",
      desc: "Multi-cam 4K studio shoots, professional Shure/Rode audio capture, lighting director, and remote recording.",
    },
    {
      title: "Post-Production & Sound Design",
      desc: "Dynamic multi-cam switching, color grading, pacing edits, noise elimination, and custom intro/outro scoring.",
    },
    {
      title: "Shorts & Reels Repurposing",
      desc: "Extracting high-velocity viral hooks, animated kinetic subtitles, and platform-specific vertical reframing.",
    },
    {
      title: "Platform Distribution",
      desc: "RSS syndication across Spotify, Apple Podcasts, and full-episode 4K video mastery for YouTube.",
    },
    {
      title: "Guest Outreach & Booking",
      desc: "Researching, vetting, scheduling, and preparing briefing dossiers for high-profile industry guest luminaries.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F4F0E9] selection:bg-clout-red selection:text-white">
      <Navbar />

      <main>
        <PageHeader
          badge="SERVICE / 05"
          number="05"
          title="Some stories deserve more than a"
          italicWord="scroll."
          description="Podcasts give brands the space to explore ideas, share expertise and build meaningful conversations. We help bring branded podcast concepts to life through planning, production, guest placement and distribution."
          backHref="/services"
          backLabel="Back to Services"
        />

        {/* Why Podcasting */}
        <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505] relative">
          <div className="page-shell">
            <div className="max-w-2xl mb-16">
              <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
                Why Long-Form?
              </span>
              <RevealText>
                <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em]">
                  Why modern brands build{" "}
                  <span className="font-serif-italic font-normal text-white">podcasts</span>
                </h2>
              </RevealText>
              <p className="mt-4 text-base text-[#AAA6A2] font-light">
                While the rest of the feed races to 5-second attention spans, podcasts provide the
                rare sanctuary of undivided, high-trust human attention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {whyPodcastingPillars.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-6 flex flex-col justify-between hover:border-clout-red/40 transition-colors"
                >
                  <div>
                    <span className="font-mono text-xs text-clout-red font-semibold">
                      0{idx + 1}
                    </span>
                    <h3 className="mt-3 font-display font-light text-lg text-white tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs text-[#AAA6A2] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do Grid */}
        <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0A0A0A]">
          <div className="page-shell">
            <div className="max-w-2xl mb-16">
              <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
                End-To-End Production
              </span>
              <RevealText>
                <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em]">
                  What we <span className="font-serif-italic font-normal text-white">deliver</span>
                </h2>
              </RevealText>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {podcastOfferings.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-[#050505] p-7 transition-all duration-300 hover:border-clout-red/50 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-clout-red font-semibold">
                      0{idx + 1}
                    </span>
                    <h3 className="mt-3 font-display font-light text-xl text-white tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-[#AAA6A2] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Element: Concept Selector */}
        <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505]">
          <div className="page-shell">
            <PodcastConceptSelector />
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-28 bg-[#050505] text-center relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#E50920]/5 to-transparent" />

          <div className="page-shell max-w-2xl mx-auto relative z-10">
            <RevealText>
              <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E9] tracking-[-0.03em] leading-tight">
                Let's make your brand worth{" "}
                <span className="font-serif-italic font-normal text-white">listening to.</span>
              </h2>
            </RevealText>
            <p className="mt-6 text-base text-[#AAA6A2] font-light leading-relaxed">
              Have a podcast concept or want to place your executives on prominent existing shows?
              Let's discuss audio-visual strategy.
            </p>
            <div className="mt-10 flex justify-center">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-clout-red px-8 py-4 font-mono text-xs uppercase tracking-widest text-white shadow-[0_0_30px_rgba(229,9,32,0.35)] transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <span>Start a Podcast Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
