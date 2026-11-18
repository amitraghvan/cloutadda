import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { CreatorFitSelector } from "@/components/services/CreatorFitSelector";
import { AnimatedCounter } from "@/components/animation/AnimatedCounter";
import { RevealText } from "@/components/animation/RevealText";
import { MagneticButton } from "@/components/animation/MagneticButton";

export const Route = createFileRoute("/services/influencer-marketing")({
  component: InfluencerMarketingPage,
  head: () => ({
    meta: [
      { title: "Influencer Marketing | CLOUT ADDA® — Verified Voices & Cultural Fit" },
      {
        name: "description",
        content:
          "500+ verified influencers and a 5,000+ creator pool. Connect with creators whose audience, content and tone match your brand objectives.",
      },
      { property: "og:title", content: "Influencer Marketing — CLOUT ADDA®" },
      {
        property: "og:description",
        content:
          "The right creator can change the whole conversation. Discover vetted creator collaborations.",
      },
    ],
  }),
});

function InfluencerMarketingPage() {
  const whyFitMatters = [
    {
      title: "Audience Alignment",
      desc: "Checking follower demographics and geo-distribution to confirm actual prospective customers.",
    },
    {
      title: "Content Tone",
      desc: "Ensuring creator aesthetics and communication style naturally complement brand values.",
    },
    {
      title: "Genuine Connection",
      desc: "Partnering with creators who authentically consume or appreciate the brand category.",
    },
    {
      title: "Clear Communication",
      desc: "Collaborating with talent capable of articulating nuanced value propositions without robotic scripts.",
    },
    {
      title: "Realistic Expectations",
      desc: "Designing campaigns for authentic resonance and qualified interest rather than superficial vanity reach.",
    },
  ];

  const whatWeDoList = [
    {
      num: "01",
      title: "Creator Identification",
      desc: "Matching brand briefs with vetted profiles across our 500+ verified roster and 5,000+ creator pool.",
    },
    {
      num: "02",
      title: "Strategic Fit Evaluation",
      desc: "Screening audience authenticity, engagement health, brand safety records, and competitor conflict.",
    },
    {
      num: "03",
      title: "Campaign Creative Planning",
      desc: "Architecting narrative briefs and storyline concepts that allow creator authenticity to shine.",
    },
    {
      num: "04",
      title: "Contracting & Briefing",
      desc: "Comprehensive negotiation, usage rights licensing, timeline SLAs, and brand safety compliance.",
    },
    {
      num: "05",
      title: "Content Coordination",
      desc: "Rigorous quality reviews, brand safety checks, and collaborative feedback before publish approval.",
    },
    {
      num: "06",
      title: "Cross-Channel Distribution",
      desc: "Synchronized posting schedules, collaboration tags, and creator whitelisting management.",
    },
    {
      num: "07",
      title: "Performance Review",
      desc: "Compiling transparent reports on views, link clicks, saves, sentiment, and cost-per-reach metrics.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F4F0E9] selection:bg-clout-red selection:text-white">
      <Navbar />

      <main>
        <PageHeader
          badge="SERVICE / 03"
          number="03"
          title="The right creator can change the whole"
          italicWord="conversation."
          description="Finding an influencer is easy. Finding someone whose audience, content and personality actually fit your brand takes more thought. We help brands plan and execute creator campaigns with a focus on relevance and communication."
          backHref="/services"
          backLabel="Back to Services"
        />

        {/* Network Metrics Banner */}
        <section className="py-20 border-b border-white/[0.08] bg-[#0A0A0A]">
          <div className="page-shell">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl border border-clout-red/30 bg-[#050505] p-8 sm:p-10 relative overflow-hidden">
                <div className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 bg-clout-red/10 blur-2xl" />
                <span className="font-mono text-xs uppercase tracking-widest text-clout-red block mb-2">
                  Vetted Exclusive Partnerships
                </span>
                <div className="font-display font-light text-4xl sm:text-5xl text-white tracking-[-0.03em] flex items-baseline gap-1">
                  <AnimatedCounter value={500} suffix="+" />
                  <span>Verified Creators</span>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-[#AAA6A2] font-light leading-relaxed">
                  Exclusively vetted, high-integrity digital creators distributed across 10+
                  distinct vertical categories (Fintech, EdTech, Tech, Lifestyle, Fitness, Comedy,
                  and more).
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-[#050505] p-8 sm:p-10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#AAA6A2] block mb-2">
                  Broad Outreach Network
                </span>
                <div className="font-display font-light text-4xl sm:text-5xl text-[#F4F0E9] tracking-[-0.03em] flex items-baseline gap-1">
                  <AnimatedCounter value={5000} suffix="+" />
                  <span>Influencer Pool</span>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-[#AAA6A2] font-light leading-relaxed">
                  Pan-India talent roster accessed for broad reach activations, campus
                  ambassadorships, regional language campaigns, and micro-influencer swarms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Creator Fit Matters */}
        <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505]">
          <div className="page-shell">
            <div className="max-w-2xl mb-16">
              <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
                Strategic Foundation
              </span>
              <RevealText>
                <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em]">
                  Why creator fit{" "}
                  <span className="font-serif-italic font-normal text-white">matters</span>
                </h2>
              </RevealText>
              <p className="mt-4 text-base text-[#AAA6A2] font-light">
                A mismatch damages brand trust and burns budget. We evaluate creator partnerships
                across five essential pillars:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {whyFitMatters.map((item, idx) => (
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
                End-To-End Management
              </span>
              <RevealText>
                <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em]">
                  What we <span className="font-serif-italic font-normal text-white">deliver</span>
                </h2>
              </RevealText>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatWeDoList.map((item) => (
                <div
                  key={item.num}
                  className="rounded-2xl border border-white/[0.08] bg-[#050505] p-6 flex flex-col justify-between hover:border-clout-red/40 transition-colors"
                >
                  <div>
                    <span className="font-mono text-xs text-clout-red font-semibold">
                      {item.num}
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

        {/* Interactive Selector */}
        <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505]">
          <div className="page-shell">
            <CreatorFitSelector />
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-28 bg-[#050505] text-center relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#E50920]/5 to-transparent" />

          <div className="page-shell max-w-2xl mx-auto relative z-10">
            <RevealText>
              <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E9] tracking-[-0.03em] leading-tight">
                Let's find the right voices for your{" "}
                <span className="font-serif-italic font-normal text-white">brand.</span>
              </h2>
            </RevealText>
            <p className="mt-6 text-base text-[#AAA6A2] font-light leading-relaxed">
              Explore custom creator rosters tailored to your brand identity, target demographic,
              and quarterly KPIs.
            </p>
            <div className="mt-10 flex justify-center">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-clout-red px-8 py-4 font-mono text-xs uppercase tracking-widest text-white shadow-[0_0_30px_rgba(229,9,32,0.35)] transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <span>Request Creator Roster</span>
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
