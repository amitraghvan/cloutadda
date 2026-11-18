import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { EventTypeSelector } from "@/components/services/EventTypeSelector";
import { RevealText } from "@/components/animation/RevealText";
import { RevealImage } from "@/components/animation/RevealImage";
import { MagneticButton } from "@/components/animation/MagneticButton";

export const Route = createFileRoute("/services/social-events-marketing")({
  component: SocialEventsMarketingPage,
  head: () => ({
    meta: [
      { title: "Social Events Marketing | CLOUT ADDA® — Live Experiences & Culture" },
      {
        name: "description",
        content:
          "From college fests and campus activations to brand summits and creator meetups. We turn live gatherings into memorable brand moments with high digital impact.",
      },
      { property: "og:title", content: "Social Events Marketing — CLOUT ADDA®" },
      {
        property: "og:description",
        content:
          "Don't just host an event. Create a cultural moment. Explore event amplification with Clout Adda.",
      },
    ],
  }),
});

function SocialEventsMarketingPage() {
  const eventCapabilities = [
    {
      title: "Event Concept & Theme Development",
      desc: "Architecting narrative storylines, stage visual aesthetics, and audience journeys that leave lasting impressions.",
    },
    {
      title: "Audience Outreach & Ticketing Support",
      desc: "Campus ambassador networks, student activations, and digital hype campaigns that drive maximum footfall.",
    },
    {
      title: "Creator & Guest Management",
      desc: "Inviting, hospitality contracting, green-room management, and coordinating on-stage creator appearances.",
    },
    {
      title: "Sponsorship & Partner Alignment",
      desc: "Connecting compatible brands with premium event intellectual properties for reciprocal value.",
    },
    {
      title: "Live Social Coverage & Content Creation",
      desc: "On-site agile media squads streaming live clips, capturing high-res photo dumps, and pushing immediate reels.",
    },
    {
      title: "On-Ground Experience Design",
      desc: "Instagrammable photo installations, interactive brand booths, product sampling zones, and VIP hospitality lounges.",
    },
    {
      title: "Stage & Production Coordination",
      desc: "Audio engineering, intelligent lighting rigs, stage choreography, LED visual loops, and run-of-show synchronization.",
    },
    {
      title: "Post-Event Amplification",
      desc: "Sustaining momentum with post-show recap videos, attendee UGC curation, and press distribution.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F4F0E9] selection:bg-clout-red selection:text-white">
      <Navbar />

      <main>
        <PageHeader
          badge="SERVICE / 04"
          number="04"
          title="Don't just host an event. Create a"
          italicWord="moment."
          description="Great events bring people together. Great event marketing gives people a reason to know about them, attend them and remember them. We help bring brands and audiences together through social events, activations and experiences."
          backHref="/services"
          backLabel="Back to Services"
        />

        {/* What Social Events Marketing Means */}
        <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505] relative">
          <div className="page-shell">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
                  The Complete Arc
                </span>
                <RevealText>
                  <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em] leading-tight">
                    The value of an event happens{" "}
                    <span className="font-serif-italic font-normal text-white">
                      before, during and after.
                    </span>
                  </h2>
                </RevealText>
                <p className="text-base sm:text-lg text-[#AAA6A2] font-light leading-relaxed">
                  Too many brands treat events as simple room bookings. We see events as cultural
                  catalysts designed with three distinct phases:
                </p>
                <div className="space-y-4 pt-2">
                  <div className="rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-5">
                    <span className="font-mono text-xs uppercase text-clout-red block mb-1">
                      Phase 1 · Pre-Event Anticipation
                    </span>
                    <p className="text-xs sm:text-sm text-[#F4F0E9] font-light leading-relaxed">
                      Generating curiosity, student ambassadors, creator teasing, and ticket demand
                      that builds line-around-the-block anticipation.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-5">
                    <span className="font-mono text-xs uppercase text-clout-red block mb-1">
                      Phase 2 · The Live Energy
                    </span>
                    <p className="text-xs sm:text-sm text-[#F4F0E9] font-light leading-relaxed">
                      Flawless run-of-show synchronization, stadium-grade acoustics, VIP guest
                      hospitality, and photogenic set pieces.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-5">
                    <span className="font-mono text-xs uppercase text-clout-red block mb-1">
                      Phase 3 · The Digital Afterglow
                    </span>
                    <p className="text-xs sm:text-sm text-[#F4F0E9] font-light leading-relaxed">
                      Distributing cinematic recap reels, creator testimonials, and press coverage
                      that extend reach to millions off-site.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 relative overflow-hidden shadow-2xl">
                  <RevealImage className="rounded-xl overflow-hidden mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop"
                      alt="Live Stadium Concert Activation"
                      className="rounded-xl h-80 w-full object-cover object-center grayscale contrast-125"
                    />
                  </RevealImage>
                  <div className="flex items-center justify-between font-mono text-xs text-[#AAA6A2]">
                    <span>STADIUM-SCALE EXPERIENCE ARCHITECTURE</span>
                    <span className="text-clout-red font-medium">30,000+ AUDIENCES</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Capabilities Grid */}
        <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0A0A0A]">
          <div className="page-shell">
            <div className="max-w-2xl mb-16">
              <span className="font-mono text-xs uppercase tracking-widest text-clout-red">
                Execution Capabilities
              </span>
              <RevealText>
                <h2 className="mt-4 font-display font-light text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E9] tracking-[-0.03em]">
                  What we <span className="font-serif-italic font-normal text-white">deliver</span>
                </h2>
              </RevealText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventCapabilities.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-[#050505] p-6 flex flex-col justify-between hover:border-clout-red/40 transition-colors"
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

        {/* Interactive Element: Event Format Explorer */}
        <section className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#050505]">
          <div className="page-shell">
            <EventTypeSelector />
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-28 bg-[#050505] text-center relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#E50920]/5 to-transparent" />

          <div className="page-shell max-w-2xl mx-auto relative z-10">
            <RevealText>
              <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E9] tracking-[-0.03em] leading-tight">
                Planning your next brand{" "}
                <span className="font-serif-italic font-normal text-white">gathering?</span>
              </h2>
            </RevealText>
            <p className="mt-6 text-base text-[#AAA6A2] font-light leading-relaxed">
              Let's create an experience that fills seats, energizes attendees, and dominates
              digital feeds.
            </p>
            <div className="mt-10 flex justify-center">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-clout-red px-8 py-4 font-mono text-xs uppercase tracking-widest text-white shadow-[0_0_30px_rgba(229,9,32,0.35)] transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <span>Discuss Event Concept</span>
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
