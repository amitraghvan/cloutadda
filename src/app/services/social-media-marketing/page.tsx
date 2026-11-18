import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Instagram, Youtube, Linkedin } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContentFormatSelector } from "@/components/services/ContentFormatSelector";
import { MagneticButton } from "@/components/animation/MagneticButton";

export const metadata: Metadata = {
  title: "Social Media Marketing | Strategic Presence & Growth",
  description:
    "Strategy, content creation and growth across Instagram, YouTube and LinkedIn. We help your brand build a social presence with a clear voice and a reason for people to engage.",
  alternates: {
    canonical: "https://cloutadda.com/services/social-media-marketing",
  },
  openGraph: {
    title: "Social Media Marketing — CLOUT ADDA®",
    description:
      "Your brand deserves more than another post. Elevate your feeds with platform-native storytelling.",
    url: "https://cloutadda.com/services/social-media-marketing",
    type: "website",
  },
};

export default function SocialMediaMarketingPage() {
  const offerings = [
    {
      title: "Social Media Strategy",
      description:
        "Defining your brand's unique narrative hook, tone of voice, visual identity pillars, and growth objectives.",
    },
    {
      title: "Audience & Competitor Research",
      description:
        "Analyzing subcultures, whitespace in your vertical, and audience friction points to uncover compelling content hooks.",
    },
    {
      title: "Content Planning & Calendaring",
      description:
        "Structuring a balanced publishing cadence of educational, entertaining, and conversion-focused assets.",
    },
    {
      title: "Content Creation & Production",
      description:
        "End-to-end studio video production, graphic design, motion assets, and copywriting tailored for engagement.",
    },
    {
      title: "Creative Direction",
      description:
        "Establishing elevated visual aesthetics, custom color grading, and memorable typography systems.",
    },
    {
      title: "Platform-Specific Storytelling",
      description:
        "Adapting single core ideas into platform-native executions across Instagram, YouTube, and LinkedIn.",
    },
    {
      title: "Social Media Growth Support",
      description:
        "Community engagement tactics, trend hijacking, proactive comment interactions, and follower nurturing.",
    },
    {
      title: "Content Performance Review",
      description:
        "Transparent, qualitative and quantitative monthly retrospectives analyzing reach, saves, sentiment, and conversions.",
    },
  ];

  const workflowSteps = [
    {
      num: "01",
      name: "Understand the Brand",
      desc: "Discover your voice, core audience, and strategic milestones.",
    },
    {
      num: "02",
      name: "Plan the Content",
      desc: "Architect monthly content pillars, shot lists, and distribution formats.",
    },
    {
      num: "03",
      name: "Create the Content",
      desc: "High-velocity scripting, recording, motion editing, and copywriting.",
    },
    {
      num: "04",
      name: "Publish & Engage",
      desc: "Platform-optimized scheduling, community management, and active conversation.",
    },
    {
      num: "05",
      name: "Review Performance",
      desc: "Evaluate save rates, reach velocity, and feedback to refine the next sprint.",
    },
  ];

  return (
    <>
      <PageHeader
        badge="SERVICE / 01"
        number="01"
        title="Your brand deserves more than another"
        italicWord="post."
        description="People are already spending time on social media. The challenge is giving them a reason to notice your brand. We bring strategy, creative content and consistent storytelling together to help your brand build a stronger social presence."
        backHref="/services"
        backLabel="Back to Services"
      />

      {/* The Real Challenge */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505] relative">
        <div className="page-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
                The Real Challenge
              </span>
              <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em] leading-tight">
                Posting every day is not the same as{" "}
                <span className="font-serif-italic font-normal text-white">
                  building a brand.
                </span>
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#AAA6A2] font-light leading-relaxed">
                <p>
                  An active social media page does not automatically create meaningful engagement.
                  Your content needs a clear direction, a consistent voice and a genuine
                  understanding of the audience you want to reach.
                </p>
                <p>
                  When every brand is publishing templated tips and generic announcements, audiences
                  tune out. We help you cut through algorithmic noise with sharp, intentional
                  storytelling that respects your audience's intelligence.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 sm:p-10 space-y-6">
                <h3 className="font-display font-light text-2xl text-white tracking-[-0.02em]">
                  What separates ordinary feeds from category leaders:
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-clout-red mt-2 shrink-0" />
                    <p className="text-sm text-[#AAA6A2] font-light leading-relaxed">
                      <strong className="text-white font-medium">Cultural Context:</strong> Creating
                      around real community conversations rather than isolated product self-praise.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-clout-red mt-2 shrink-0" />
                    <p className="text-sm text-[#AAA6A2] font-light leading-relaxed">
                      <strong className="text-white font-medium">Platform Fluency:</strong> Respecting
                      how a user consumes a LinkedIn post vs an Instagram Reel vs a YouTube Short.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-clout-red mt-2 shrink-0" />
                    <p className="text-sm text-[#AAA6A2] font-light leading-relaxed">
                      <strong className="text-white font-medium">Consistency of Voice:</strong>{" "}
                      Ensuring your brand sounds like a knowledgeable human team, never a robotic
                      marketing brochure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Grid */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0A0A0A]">
        <div className="page-shell">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
              Core Deliverables
            </span>
            <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em]">
              What we <span className="font-serif-italic font-normal text-white">deliver</span>
            </h2>
            <p className="mt-4 text-base text-[#AAA6A2] font-light">
              Comprehensive social infrastructure built for sustained, compounding brand presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-[#050505] p-6 transition-all duration-300 hover:border-clout-red/50 hover:bg-[#0E0E0E]"
              >
                <span className="font-mono text-xs text-clout-red font-semibold">0{idx + 1}</span>
                <h3 className="mt-3 font-display font-light text-xl text-white tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#AAA6A2] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Focus */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505]">
        <div className="page-shell">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
              Channel Mastery
            </span>
            <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em]">
              Our Documented Core{" "}
              <span className="font-serif-italic font-normal text-white">Platforms</span>
            </h2>
            <p className="mt-4 text-base text-[#AAA6A2] font-light">
              We specialize in the primary digital channels where Indian consumers and business
              decision-makers congregate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 text-center space-y-4 hover:border-white/20 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mx-auto">
                <Instagram className="h-6 w-6" />
              </div>
              <h3 className="font-display font-light text-2xl text-white tracking-[-0.02em]">
                Instagram
              </h3>
              <p className="text-xs sm:text-sm text-[#AAA6A2] font-light leading-relaxed">
                Visual aesthetic curation, vertical reels, relatable culture commentary, and direct
                community conversation.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 text-center space-y-4 hover:border-white/20 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 mx-auto">
                <Youtube className="h-6 w-6" />
              </div>
              <h3 className="font-display font-light text-2xl text-white tracking-[-0.02em]">
                YouTube
              </h3>
              <p className="text-xs sm:text-sm text-[#AAA6A2] font-light leading-relaxed">
                Algorithmic Shorts hooks, long-form episodic value, searchable video authority, and
                high-dwell engagement.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 text-center space-y-4 hover:border-white/20 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto">
                <Linkedin className="h-6 w-6" />
              </div>
              <h3 className="font-display font-light text-2xl text-white tracking-[-0.02em]">
                LinkedIn
              </h3>
              <p className="text-xs sm:text-sm text-[#AAA6A2] font-light leading-relaxed">
                Executive positioning, thought-leadership carousels, company culture spotlights, and
                B2B pipeline trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proposed Workflow */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0A0A0A]">
        <div className="page-shell">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
              Proposed Workflow
            </span>
            <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em]">
              Our <span className="font-serif-italic font-normal text-white">approach</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-white/[0.08] bg-[#050505] p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-clout-red font-semibold">{step.num}</span>
                  <h3 className="mt-3 font-display font-light text-lg text-white tracking-[-0.02em]">
                    {step.name}
                  </h3>
                  <p className="mt-3 text-xs text-[#AAA6A2] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Element: Content Format Selector */}
      <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505]">
        <div className="page-shell">
          <ContentFormatSelector />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-28 bg-[#050505] text-center relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#E50920]/5 to-transparent" />

        <div className="page-shell max-w-2xl mx-auto relative z-10">
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E9] tracking-[-0.03em] leading-tight">
            Let's give your brand a{" "}
            <span className="font-serif-italic font-normal text-white">better feed.</span>
          </h2>
          <p className="mt-6 text-base text-[#AAA6A2] font-light leading-relaxed">
            Ready to stop posting into the void? Tell us about your brand's growth goals.
          </p>
          <div className="mt-10">
            <MagneticButton strength={0.25}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-clout-red px-8 py-4 font-mono text-xs uppercase tracking-widest text-white shadow-[0_0_30px_rgba(229,9,32,0.35)] transition-all duration-300 hover:bg-white hover:text-black"
              >
                <span>Discuss Social Growth</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
