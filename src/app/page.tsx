import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "CLOUT ADDA® — Culture Meets Creativity | Official Website",
  description:
    "Clout Adda is a culture-driven brand influence and experiences agency connecting brands with modern audiences through social media marketing, PR & meme marketing, verified creators, and live experiences.",
  alternates: {
    canonical: "https://cloutadda.com",
  },
  openGraph: {
    title: "CLOUT ADDA® — YOUR EXPERIENCE ELEVATED.",
    description:
      "From social media and creators to PR, memes and real-world experiences, we help brands connect with people in ways they actually remember.",
    url: "https://cloutadda.com",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 01: Cinematic Hero */}
      <HeroSection />

      {/* 02: Brand Marquee */}
      <BrandMarquee />

      {/* 03: Brand Manifesto */}
      <ManifestoSection />

      {/* 04: Numbers that Speak */}
      <NumbersSection />

      {/* 05: Cinematic Red Architecture */}
      <ArchitecturalCultureSection />

      {/* 06: Our Services */}
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
    </>
  );
}
