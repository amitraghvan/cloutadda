import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Target, Compass, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { COMPANY_INFO } from "@/data/companyData";
import { SERVICES_LIST } from "@/data/servicesData";
import { AnimatedCounter } from "@/components/animation/AnimatedCounter";
import { RevealText } from "@/components/animation/RevealText";
import { MagneticButton } from "@/components/animation/MagneticButton";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | CLOUT ADDA® — Culture, Influence & Experiences" },
      {
        name: "description",
        content:
          "Clout Adda brings together brands, creativity, creators and culture. Through social media, influencer collaborations, PR, meme marketing, podcasts and experiences, we help brands connect with people in relevant and memorable ways.",
      },
      { property: "og:title", content: "About CLOUT ADDA® — Culture Meets Creativity" },
      {
        property: "og:description",
        content:
          "Clout Adda is a culture-driven brand influence and experiences agency connecting brands with modern audiences.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F4F0E9] selection:bg-clout-red selection:text-white">
      <Navbar />

      <main>
        <PageHeader
          badge="AGENCY PERSPECTIVE"
          title="We get the culture. We get the brief. We get to"
          italicWord="work."
          description="Clout Adda brings together brands, creativity, creators and culture. Through social media, influencer collaborations, PR, meme marketing, podcasts and experiences, we help brands connect with people in relevant and memorable ways."
          backHref="/"
          backLabel="Back to Home"
        />

        {/* Section 01: The Cultural Philosophy — Asymmetrical Editorial Layout */}
        <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505] relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#E50920]/10 to-transparent blur-[140px]" />

          <div className="page-shell">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-8">
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-clout-red">
                  <span className="w-1.5 h-1.5 rounded-full bg-clout-red" />
                  Our Perspective
                </div>
                <RevealText>
                  <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em] leading-[1.15]">
                    Attention cannot be bought with{" "}
                    <span className="font-serif-italic font-normal text-white">noise alone.</span>
                  </h2>
                </RevealText>
                <div className="space-y-5 text-base sm:text-lg text-[#AAA6A2] font-light leading-relaxed">
                  <p>
                    Traditional advertising treats audiences as passive spectators waiting to be
                    interrupted. But modern internet culture has fundamentally shifted. Today's
                    consumers curate their own feeds, participate in real-time memes, and rally
                    around trusted creator voices.
                  </p>
                  <p>
                    At Clout Adda, we believe a brand's presence needs to be elevated. That doesn't
                    mean speaking louder; it means speaking with sharper cultural insight, relatable
                    wit, and genuine human relevance.
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-8 border-t border-white/[0.08]">
                  <div>
                    <div className="font-display font-light text-3xl text-white">
                      <AnimatedCounter value={500} suffix="M+" />
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#AAA6A2] mt-1">
                      Verified Views
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <div className="font-display font-light text-3xl text-white">
                      <AnimatedCounter value={50} suffix="+" />
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#AAA6A2] mt-1">
                      Brand Collaborations
                    </div>
                  </div>
                </div>
              </div>

              {/* Reference 02 Architecture Inset Panel */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#121212] via-[#0A0A0A] to-[#050505] p-8 sm:p-12 overflow-hidden shadow-2xl">
                  {/* Subtle red ambient lighting */}
                  <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 bg-clout-red/20 blur-3xl" />
                  <div className="pointer-events-none absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
                      The Clout Formula
                    </span>
                    <span className="font-mono text-[10px] text-white/40 tracking-wider">
                      CLOUT-FOUNDATION-01
                    </span>
                  </div>

                  <blockquote className="font-display font-light text-2xl sm:text-3xl text-[#F4F0E9] mb-8 leading-[1.25] tracking-[-0.02em]">
                    "{COMPANY_INFO.story}"
                  </blockquote>

                  <p className="text-sm text-[#AAA6A2] font-light leading-relaxed border-t border-white/[0.08] pt-6">
                    By uniting these six cultural pillars under one coordinated strategy, we remove
                    the friction between internet trends and bottom-line brand goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Core Pillars — Architectural Cards */}
        <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0A0A0A] relative">
          <div className="page-shell">
            <div className="max-w-2xl mb-16">
              <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
                Agency Principles
              </span>
              <RevealText>
                <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em] leading-tight">
                  How we think about brands &amp;{" "}
                  <span className="font-serif-italic font-normal text-white">audiences</span>
                </h2>
              </RevealText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group rounded-2xl border border-white/[0.08] bg-[#050505] p-8 transition-all duration-300 hover:border-clout-red/40 hover:-translate-y-1">
                <div className="h-12 w-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-clout-red mb-8 transition-colors group-hover:border-clout-red/40 group-hover:bg-clout-red/10">
                  <Target className="h-5 w-5" />
                </div>
                <div className="font-mono text-[11px] text-clout-red uppercase tracking-wider mb-2">
                  01. Principle
                </div>
                <h3 className="font-display font-light text-2xl text-white tracking-[-0.02em]">
                  Strategy Precedes Content
                </h3>
                <p className="mt-4 text-sm text-[#AAA6A2] font-light leading-relaxed">
                  We don't chase trends for the sake of an ephemeral view count. Every meme, creator
                  partnership, and live event is grounded in a specific business objective and
                  audience truth.
                </p>
              </div>

              <div className="group rounded-2xl border border-white/[0.08] bg-[#050505] p-8 transition-all duration-300 hover:border-clout-red/40 hover:-translate-y-1">
                <div className="h-12 w-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-clout-red mb-8 transition-colors group-hover:border-clout-red/40 group-hover:bg-clout-red/10">
                  <Compass className="h-5 w-5" />
                </div>
                <div className="font-mono text-[11px] text-clout-red uppercase tracking-wider mb-2">
                  02. Principle
                </div>
                <h3 className="font-display font-light text-2xl text-white tracking-[-0.02em]">
                  Cultural Fluency
                </h3>
                <p className="mt-4 text-sm text-[#AAA6A2] font-light leading-relaxed">
                  The internet changes hourly. Our creative strategists live where your audiences
                  spend time: in discord channels, group chats, short-form feeds, and campus quads.
                </p>
              </div>

              <div className="group rounded-2xl border border-white/[0.08] bg-[#050505] p-8 transition-all duration-300 hover:border-clout-red/40 hover:-translate-y-1">
                <div className="h-12 w-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-clout-red mb-8 transition-colors group-hover:border-clout-red/40 group-hover:bg-clout-red/10">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="font-mono text-[11px] text-clout-red uppercase tracking-wider mb-2">
                  03. Principle
                </div>
                <h3 className="font-display font-light text-2xl text-white tracking-[-0.02em]">
                  Brand Safety First
                </h3>
                <p className="mt-4 text-sm text-[#AAA6A2] font-light leading-relaxed">
                  Humour is powerful, but brand reputation is paramount. Every asset undergoes
                  thorough brand alignment checks, copyright vetting, and cultural safety screening
                  before publication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Capability Suite */}
        <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505]">
          <div className="page-shell">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-10 mb-14">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
                  Our Practices
                </span>
                <RevealText>
                  <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em]">
                    The Full Clout Adda Capability{" "}
                    <span className="font-serif-italic font-normal text-white">Suite</span>
                  </h2>
                </RevealText>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-clout-red hover:text-white transition-colors"
              >
                <span>View Detailed Services Matrix</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES_LIST.map((srv) => (
                <Link
                  key={srv.id}
                  to={`/services/${srv.slug}` as string}
                  className="group rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 transition-all duration-300 hover:border-clout-red/50 hover:bg-[#121212] flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-clout-red font-semibold tracking-wider">
                      {srv.number}
                    </span>
                    <h3 className="mt-3 font-display font-light text-2xl text-white group-hover:text-clout-red transition-colors duration-200">
                      {srv.title}
                    </h3>
                    <p className="mt-4 text-xs sm:text-sm text-[#AAA6A2] font-light leading-relaxed">
                      {srv.shortDescription}
                    </p>
                  </div>
                  <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-clout-red tracking-wider uppercase">
                    <span>Explore Practice</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 04: Next Step CTA */}
        <section className="py-28 bg-[#050505] text-center relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#E50920]/5 to-transparent" />

          <div className="page-shell max-w-2xl mx-auto relative z-10">
            <RevealText>
              <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E9] tracking-[-0.03em] leading-tight">
                Ready to elevate your{" "}
                <span className="font-serif-italic font-normal text-white">presence?</span>
              </h2>
            </RevealText>
            <p className="mt-6 text-base text-[#AAA6A2] font-light leading-relaxed">
              Connect with our strategists to discuss an upcoming campaign, creator activation or
              experiential event.
            </p>
            <div className="mt-10 flex justify-center">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-clout-red px-8 py-4 font-mono text-xs uppercase tracking-widest text-white shadow-[0_0_30px_rgba(229,9,32,0.35)] transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <span>Start a Conversation</span>
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
