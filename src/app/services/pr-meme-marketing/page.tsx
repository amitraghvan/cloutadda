import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldAlert, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { MemeLabInteractive } from "@/components/services/MemeLabInteractive";
import { FaqAccordion } from "@/components/services/FaqAccordion";
import { MEME_MARKETING_CHECKS, MEME_MARKETING_BENEFITS } from "@/data/servicesData";
import { MagneticButton } from "@/components/animation/MagneticButton";

export const metadata: Metadata = {
  title: "PR & Meme Marketing | Culture, Wit & Earned Media",
  description:
    "From relatable memes and trending formats to brand storytelling and earned media, we help your brand join conversations people already care about.",
  alternates: {
    canonical: "https://cloutadda.com/services/pr-meme-marketing",
  },
  openGraph: {
    title: "PR & Meme Marketing — CLOUT ADDA®",
    description:
      "Your brand should be part of the conversation. Discover how strategic meme marketing and PR storytelling earn attention.",
    url: "https://cloutadda.com/services/pr-meme-marketing",
    type: "website",
  },
};

export default function PrMemeMarketingPage() {
  const serviceOfferings = [
    {
      code: "A",
      title: "Brand-Fit Meme Creation",
      desc: "Original custom meme concepts engineered around your brand's unique values, products, and customer personas—avoiding generic template fatigue.",
    },
    {
      code: "B",
      title: "Trend-Led Content & Real-Time Agility",
      desc: "Tracking live cultural micro-moments and rapid-fire production to join conversations within the peak 48-hour internet window.",
    },
    {
      code: "C",
      title: "Meme Campaign Planning",
      desc: "Sequenced narrative arcs for product launches, rebrands, and seasonal moments that build cumulative momentum across days or weeks.",
    },
    {
      code: "D",
      title: "Social-First Creative Formats",
      desc: "Adapting witty ideas into high-share formats: two-panel comparisons, fake charts, relatable dialogue cards, and Reels video skits.",
    },
    {
      code: "E",
      title: "Meme-Page & Creator Amplification",
      desc: "Coordinated distribution across curated regional and niche digital communities to multiply organic impressions without sounding like sponsored ads.",
    },
    {
      code: "F",
      title: "PR Storytelling & Earned Media",
      desc: "Transforming social chatter into broader business and press narratives, securing earned media validation that compounds credibility.",
    },
  ];

  const campaignProcess = [
    {
      step: "01",
      title: "Understand Your Brand",
      detail:
        "We learn what your brand offers, who you want to reach, what you stand for, and what you want people to remember.",
    },
    {
      step: "02",
      title: "Understand the Audience",
      detail:
        "We look at audience interests, relatable daily frictions, meme consumption habits, and specific cultural contexts.",
    },
    {
      step: "03",
      title: "Find the Right Idea",
      detail:
        "We explore suitable trends, narrative tensions, and creative formats that fit the brand without forcing.",
    },
    {
      step: "04",
      title: "Create the Content",
      detail:
        "We develop original meme copies, typographic treatments, captions, and platform-specific format adaptations.",
    },
    {
      step: "05",
      title: "Publish & Amplify",
      detail:
        "The approved content is published with precision timing across brand feeds and curated community channels.",
    },
    {
      step: "06",
      title: "Review the Response",
      detail:
        "We monitor shares, saves, comment sentiment, brand mentions, and agreed campaign performance indicators.",
    },
  ];

  const memeWorkFactors = [
    { name: "Relatability", text: "Roots the idea in a shared, unspoken human truth." },
    { name: "Good Timing", text: "Deploys while the cultural conversation is still alive." },
    {
      name: "Audience Dialect",
      text: "Speaks their exact dialect, not corporate marketing speak.",
    },
    {
      name: "Simplicity",
      text: "Understood in 2 seconds without requiring an instruction manual.",
    },
    { name: "Brand Hook", text: "The product is the natural solution or punchline." },
    { name: "Originality", text: "Brings a fresh angle instead of copying everyone else." },
    {
      name: "Platform Fit",
      text: "Designed specifically for how people scroll that channel.",
    },
  ];

  return (
    <>
      <PageHeader
        badge="SERVICE / 02"
        number="02"
        title="Your brand should be part of the"
        italicWord="conversation."
        description="People scroll past traditional promotions every day. But a relatable idea, a timely meme or a story worth sharing can make them stop. We help brands connect with internet culture through relevant meme content, creative campaigns and PR storytelling."
        backHref="/services"
        backLabel="Back to Services"
      />

      {/* Section 01: Explain Meme Marketing in Simple Language */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505] relative">
        <div className="page-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
                Clarity First
              </span>
              <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em] leading-tight">
                So, what exactly is{" "}
                <span className="font-serif-italic font-normal text-white">meme marketing?</span>
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#AAA6A2] font-light leading-relaxed">
                <p>
                  Meme marketing uses humour, relatable situations and familiar internet formats to
                  communicate a brand's message in a way people naturally enjoy.
                </p>
                <p>
                  Instead of making every post feel like an advertisement, a brand can participate in
                  conversations its audience already understands.
                </p>
                <p>
                  A good meme makes people smile. A well-planned brand meme also gives them a reason
                  to remember the brand behind it.
                </p>
              </div>
            </div>

            {/* Comparison Card: Old Promo vs Modern Relatable */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 sm:p-10 space-y-6">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#AAA6A2]">
                  The Difference in Action
                </span>

                {/* Traditional */}
                <div className="rounded-xl border border-red-900/30 bg-red-950/20 p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-red-400 block mb-2">
                    Traditional Promotion (Ignored)
                  </span>
                  <p className="font-display font-light text-lg text-white">
                    "Try our new product today for maximum productivity."
                  </p>
                  <p className="mt-2 text-xs text-[#AAA6A2] font-light">
                    Result: Feels like an ad. Zero emotion. Swiped past in 0.5 seconds.
                  </p>
                </div>

                {/* Modern Relatable */}
                <div className="rounded-xl border border-clout-red/40 bg-[#0E0E0E] p-5 shadow-[0_0_20px_rgba(229,9,32,0.15)]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-clout-red block mb-2">
                    A More Relatable Creative Direction (Shared)
                  </span>
                  <p className="font-display font-light text-lg text-white">
                    "When you spend 4 hours creating a spreadsheet only to realize our 1-click tool
                    existed the whole time."
                  </p>
                  <p className="mt-2 text-xs text-[#F4F0E9] font-light">
                    Result: A familiar everyday situation that naturally introduces the product
                    benefit with self-aware humour. Forwarded to 15 coworkers.
                  </p>
                </div>

                <p className="font-mono text-[11px] text-[#AAA6A2]/70 italic border-t border-white/[0.06] pt-4">
                  The aim is not simply to make people laugh. The content must fit the brand and its
                  communication goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Why Brands Use Memes */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0A0A0A]">
        <div className="page-shell">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
              Business Value
            </span>
            <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em]">
              A good meme does more than get a{" "}
              <span className="font-serif-italic font-normal text-white">laugh.</span>
            </h2>
            <p className="mt-4 text-base text-[#AAA6A2] font-light">
              Strategic meme marketing delivers tangible psychological and commercial advantages:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MEME_MARKETING_BENEFITS.map((benefit) => (
              <div
                key={benefit.number}
                className="rounded-2xl border border-white/[0.08] bg-[#050505] p-7 transition-all duration-300 hover:border-clout-red/50 hover:bg-[#0E0E0E]"
              >
                <span className="font-mono text-xs text-clout-red font-semibold">
                  {benefit.number}
                </span>
                <h3 className="mt-3 font-display font-light text-xl text-white tracking-[-0.02em]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#AAA6A2] font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center font-mono text-[11px] text-[#AAA6A2]/70">
            *Note: These represent strategic potential advantages grounded in consumer psychology,
            not guaranteed metric formulas.
          </div>
        </div>
      </section>

      {/* Section 03: The 5 Checks — Not Every Trend is Right */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505]">
        <div className="page-shell">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
              Strategic Restraint
            </span>
            <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em] leading-tight">
              Trending doesn't always mean{" "}
              <span className="font-serif-italic font-normal text-white">relevant.</span>
            </h2>
            <p className="mt-4 text-base text-[#AAA6A2] font-light leading-relaxed">
              Just because a meme is popular does not mean your brand should use it. The best
              creative idea is one that makes sense for your audience, your brand personality and the
              message you want to communicate.
            </p>
          </div>

          <div className="space-y-4">
            {MEME_MARKETING_CHECKS.map((check) => (
              <div
                key={check.number}
                className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:border-clout-red/40"
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono text-sm text-clout-red font-semibold">
                    {check.number}
                  </span>
                  <div>
                    <h3 className="font-display font-light text-xl text-white tracking-[-0.02em]">
                      {check.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-clout-red">"{check.question}"</p>
                  </div>
                </div>
                <div className="md:max-w-md">
                  <p className="text-xs sm:text-sm text-[#AAA6A2] font-light leading-relaxed">
                    {check.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-clout-red/30 bg-gradient-to-r from-clout-red/15 via-[#0A0A0A] to-[#050505] p-8 sm:p-12 text-center">
            <h3 className="font-display font-light text-2xl sm:text-4xl text-[#F4F0E9] tracking-[-0.02em] leading-tight">
              We don't force your brand into every meme.
              <br />
              <span className="font-serif-italic font-normal text-white">
                We find the right moment for your brand.
              </span>
            </h3>
          </div>
        </div>
      </section>

      {/* Section 04: What Clout Adda Helps With */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0A0A0A]">
        <div className="page-shell">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
              Agency Scope
            </span>
            <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em]">
              From internet moment to{" "}
              <span className="font-serif-italic font-normal text-white">brand moment.</span>
            </h2>
            <p className="mt-4 text-base text-[#AAA6A2] font-light">
              Six structured ways we connect your brand with internet culture without friction:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceOfferings.map((item) => (
              <div
                key={item.code}
                className="rounded-2xl border border-white/[0.08] bg-[#050505] p-7 transition-all duration-300 hover:border-clout-red/50 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-clout-red font-semibold">
                    {item.code}.
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

      {/* Section 05: Proposed Campaign Workflow */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505]">
        <div className="page-shell">
          <div className="border-b border-white/[0.08] pb-8 mb-16 text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
              Proposed Campaign Workflow
            </span>
            <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em]">
              There's a method behind the{" "}
              <span className="font-serif-italic font-normal text-white">meme.</span>
            </h2>
            <p className="mt-4 text-base text-[#AAA6A2] font-light">
              Memes appear spontaneous, but successful campaigns are engineered with disciplined
              process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaignProcess.map((proc) => (
              <div
                key={proc.step}
                className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-6 flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <span className="font-mono text-xs text-clout-red font-semibold">{proc.step}</span>
                  <h3 className="mt-3 font-display font-light text-xl text-white tracking-[-0.02em]">
                    {proc.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#AAA6A2] font-light leading-relaxed">
                    {proc.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 06: What Makes a Meme Work? */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0A0A0A]">
        <div className="page-shell">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
              Core Anatomy
            </span>
            <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em]">
              What makes a meme{" "}
              <span className="font-serif-italic font-normal text-white">work?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#AAA6A2] font-light">
              "The best memes feel natural. They connect a familiar situation with a message the
              audience understands without making the brand look like it is trying too hard."
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {memeWorkFactors.map((fac, i) => (
              <div
                key={fac.name}
                className="rounded-xl border border-white/[0.08] bg-[#050505] p-5 text-center flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-clout-red">0{i + 1}</span>
                  <div className="font-display font-light text-base text-white mt-2">
                    {fac.name}
                  </div>
                </div>
                <p className="font-mono text-[11px] text-[#AAA6A2] mt-3 leading-snug font-light">
                  {fac.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 07: The Meme Lab */}
      <section id="meme-lab" className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505]">
        <div className="page-shell">
          <MemeLabInteractive />
        </div>
      </section>

      {/* Section 08: Ethics & Brand Safety */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0A0A0A]">
        <div className="page-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-clout-red">
                <ShieldAlert className="h-3.5 w-3.5" />
                <span>Ethics &amp; Brand Safety</span>
              </div>
              <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em] leading-tight">
                Funny is good.{" "}
                <span className="font-serif-italic font-normal text-white">
                  Brand-safe is better.
                </span>
              </h2>
              <p className="text-base text-[#AAA6A2] font-light leading-relaxed">
                Humour is subjective. A joke that works for one audience may confuse or offend
                another. That's why meme content should be reviewed in the context of the brand, the
                audience and the current situation.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-white/[0.08] bg-[#050505] p-8 sm:p-10 space-y-5">
                <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
                  Clout Adda's Mandatory Campaign Safeguards:
                </span>
                <div className="space-y-4 pt-2">
                  {[
                    "Audience sensitivity and regional cultural nuances",
                    "Brand reputation and category regulatory standards",
                    "Copyright and image usage licensing verification",
                    "Current-event sensitivity and emergency pause protocols",
                    "100% formal brand approval prior to any public release",
                  ].map((safeguard, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-clout-red shrink-0" />
                      <span className="text-xs sm:text-sm text-[#F4F0E9] font-light">
                        {safeguard}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 09: Comprehensive FAQ */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505]">
        <div className="page-shell max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
              Common Questions
            </span>
            <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em]">
              Frequently Asked{" "}
              <span className="font-serif-italic font-normal text-white">Questions</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#AAA6A2] font-light">
              Everything you need to know about navigating internet culture and meme marketing with
              Clout Adda.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <section className="py-28 bg-[#050505] text-center relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#E50920]/5 to-transparent" />

        <div className="page-shell max-w-2xl mx-auto relative z-10">
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E9] tracking-[-0.03em] leading-tight">
            Your brand has a story.{" "}
            <span className="font-serif-italic font-normal text-white">
              Let's make people talk about it.
            </span>
          </h2>
          <p className="mt-6 text-base text-[#AAA6A2] font-light leading-relaxed">
            Whether you have a new product, a campaign idea or simply want your brand to communicate
            more naturally, let's explore the right creative direction.
          </p>
          <div className="mt-10">
            <MagneticButton strength={0.25}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-clout-red px-8 py-4 font-mono text-xs uppercase tracking-widest text-white shadow-[0_0_30px_rgba(229,9,32,0.35)] transition-all duration-300 hover:bg-white hover:text-black"
              >
                <span>Initiate Campaign Brief</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
