import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { NumbersSection } from "@/components/home/NumbersSection";
import { ArchitecturalCultureSection } from "@/components/home/ArchitecturalCultureSection";
import { ServicesOverviewSection } from "@/components/home/ServicesOverviewSection";
import { MemeWallSection } from "@/components/home/MemeWallSection";
import { CloutCheckSection } from "@/components/home/CloutCheckSection";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { CreatorShowcaseSection } from "@/components/home/CreatorShowcaseSection";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { HomeCtaSection } from "@/components/home/HomeCtaSection";

export const Route = createFileRoute("/")({
  component: IndexPage,
  head: () => ({
    meta: [
      { title: "CLOUT ADDA® — Culture Meets Creativity | Official Agency" },
      {
        name: "description",
        content:
          "Clout Adda is a culture-driven brand influence and experiences agency connecting brands with modern audiences through social media marketing, PR & meme marketing, verified creators, and live experiences.",
      },
      { property: "og:title", content: "CLOUT ADDA® — YOUR EXPERIENCE ELEVATED." },
      {
        property: "og:description",
        content:
          "From social media and creators to PR, memes and real-world experiences, we help brands connect with people in ways they actually remember.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function IndexPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F1EB] selection:bg-clout-red selection:text-white">
      {/* 01: Premium Navigation */}
      <Navbar />

      <main>
        {/* 02: Cinematic Hero */}
        <HeroSection />

        {/* 03: Brand Marquee */}
        <BrandMarquee />

        {/* 04: Brand Manifesto */}
        <ManifestoSection />

        {/* 05: Numbers that Speak */}
        <NumbersSection />

        {/* 06: Cinematic Red Architecture: Meet the Culture Behind the Conversation */}
        <ArchitecturalCultureSection />

        {/* 07: Our Services */}
        <ServicesOverviewSection />

        {/* 07: The Clout Wall */}
        <MemeWallSection />

        {/* 08: Clout Check (Diagnostic Quiz) */}
        <CloutCheckSection />

        {/* 09: Selected Work */}
        <SelectedWorkSection />

        {/* 10: Creator Showcase */}
        <CreatorShowcaseSection />

        {/* 11: How We Work */}
        <HowWeWorkSection />

        {/* 12: Final CTA */}
        <HomeCtaSection />
      </main>

      {/* 13: Footer */}
      <Footer />
    </div>
  );
}
