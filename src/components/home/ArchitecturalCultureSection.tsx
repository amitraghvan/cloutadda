"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Compass,
  Sparkles,
  Users2,
  MessageSquareText,
  Flame,
  type LucideIcon,
} from "lucide-react";
import { ArchitecturalScene3D } from "@/components/three/ArchitecturalScene3D";
import { RevealText } from "@/components/animation/RevealText";
import { cn } from "@/lib/utils";

type PillarId = "strategy" | "content" | "creators" | "culture" | "experiences";

interface Pillar {
  readonly id: PillarId;
  readonly number: string;
  readonly name: string;
  readonly subtitle: string;
  readonly description: string;
  readonly link: string;
  readonly metric: string;
  readonly icon: LucideIcon;
  readonly silhouette: string;
}

/**
 * Static pillar configuration — declared at module scope to eliminate
 * redundant re-allocations on every render / hover state change.
 */
const PILLARS: readonly Pillar[] = [
  {
    id: "strategy",
    number: "01",
    name: "Strategy",
    subtitle: "Cultural Whitespace & Positioning",
    description:
      "Before generating creative concepts, we map your category's narrative whitespace and identify the authentic cultural tension your brand can own.",
    link: "/services/social-media-marketing",
    metric: "Pillar 01",
    icon: Compass,
    silhouette:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "content",
    number: "02",
    name: "Content",
    subtitle: "Platform-Native Storytelling",
    description:
      "High-velocity production of Reels, swipeable carousels, and conversational formats designed to be voluntarily forwarded to group chats.",
    link: "/services/social-media-marketing",
    metric: "Pillar 02",
    icon: Sparkles,
    silhouette:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "creators",
    number: "03",
    name: "Creators",
    subtitle: "500+ Vetted Category Voices",
    description:
      "Connecting your proposition with trusted voices whose followers respect their genuine recommendations, bypassing vanity follower metrics.",
    link: "/services/influencer-marketing",
    metric: "Pillar 03",
    icon: Users2,
    silhouette:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "culture",
    number: "04",
    name: "Culture",
    subtitle: "Internet Lore & Brand-Safe Wit",
    description:
      "Translating real-time internet moments into strategic brand conversations that generate effortless organic recall and community love.",
    link: "/services/pr-meme-marketing",
    metric: "Pillar 04",
    icon: MessageSquareText,
    silhouette:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "experiences",
    number: "05",
    name: "Experiences",
    subtitle: "Stadium Activations & Summits",
    description:
      "From amphitheaters with 30,000+ students to intimate executive roundtables, creating visceral real-world memories that live on digital feeds.",
    link: "/services/social-events-marketing",
    metric: "Pillar 05",
    icon: Flame,
    silhouette:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
  },
] as const;

export function ArchitecturalCultureSection() {
  const [activePillar, setActivePillar] = useState<PillarId>("culture");

  // Constant lookup without non-null assertions
  const current = PILLARS.find((p) => p.id === activePillar) ?? PILLARS[3];

  return (
    <section
      className="relative py-28 sm:py-36 overflow-hidden red-architectural-scene text-[#F4F0E9]"
      aria-label="Integrated Cultural Architecture"
    >
      {/* 3D Monolithic Architectural Environment */}
      <ArchitecturalScene3D />

      {/* Background Architectural Red Ambience & Floor Grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1200px] bg-gradient-to-b from-[#E50920]/25 via-transparent to-[#050505]" />
        <div className="absolute bottom-0 inset-x-0 h-64 mirror-floor-gradient" />
      </div>

      <div className="page-shell relative z-10">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-clout-red animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#AAA6A2] uppercase">
              Five Dimensions · Architectural Space
            </span>
          </div>

          <RevealText>
            <h2 className="font-display text-4xl sm:text-6xl text-white font-light tracking-tight leading-[1.05]">
              Meet the{" "}
              <span className="font-serif-italic font-normal text-[1.12em] text-[#F4F0E9]">
                culture
              </span>{" "}
              behind the conversation.
            </h2>
          </RevealText>

          <p className="text-sm sm:text-base text-[#F4F0E9]/80 font-light max-w-xl mx-auto leading-relaxed">
            Five interconnected architectural disciplines bridging the gap between digital attention
            and tangible brand equity.
          </p>
        </div>

        {/* Central Floating Black Architectural Enclosure */}
        <div className="dark-architectural-panel rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden backdrop-blur-2xl">
          {/* Top Panel Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-clout-red block">
                Integrated Framework
              </span>
              <span className="font-display text-lg text-white font-normal mt-0.5 block">
                {current.name} — {current.subtitle}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-[#AAA6A2] font-mono">{current.metric} / 05</span>
              <Link
                href={current.link}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white hover:border-clout-red hover:bg-clout-red transition-all focus:outline-none focus:ring-1 focus:ring-clout-red"
              >
                <span>Explore Practice</span>
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* The Five Vertical Red Visual Pillars (Architectural Columns with Tab Accessibility) */}
          <div
            className="grid grid-cols-1 md:grid-cols-5 gap-3.5 mb-8"
            role="tablist"
            aria-label="Five Architectural Pillars"
          >
            {PILLARS.map((pillar) => {
              const isActive = activePillar === pillar.id;
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  id={`pillar-tab-${pillar.id}`}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  aria-controls={`pillar-panel-${pillar.id}`}
                  onClick={() => setActivePillar(pillar.id)}
                  onMouseEnter={() => setActivePillar(pillar.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActivePillar(pillar.id);
                    }
                  }}
                  className={cn(
                    "group cursor-pointer rounded-2xl relative overflow-hidden transition-all duration-500 flex flex-col justify-between p-5 min-h-[340px] border transform-gpu focus:outline-none focus:ring-2 focus:ring-clout-red/50",
                    isActive
                      ? "border-clout-red bg-[#151515] shadow-[0_0_40px_rgba(229,9,32,0.35)] scale-[1.02] z-10"
                      : "border-white/10 bg-[#0A0A0A] hover:border-white/30 scale-100",
                  )}
                >
                  {/* Subtle Background Silhouette with Next.js Image */}
                  <Image
                    src={pillar.silhouette}
                    alt={pillar.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className={cn(
                      "object-cover filter contrast-125 transition-all duration-700 pointer-events-none",
                      isActive
                        ? "opacity-35 grayscale-0 scale-105"
                        : "opacity-15 grayscale scale-100 group-hover:opacity-25",
                    )}
                  />

                  {/* Vertical Column Gradient */}
                  <div
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500 pointer-events-none",
                      isActive
                        ? "bg-gradient-to-t from-[#A90012]/80 via-transparent to-black/60 opacity-90"
                        : "bg-gradient-to-t from-black via-black/80 to-transparent opacity-85",
                    )}
                    aria-hidden="true"
                  />

                  {/* Pillar Top */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#AAA6A2]">{pillar.number}</span>
                    <Icon
                      className={cn(
                        "h-4 w-4 transition-colors",
                        isActive ? "text-white" : "text-[#827E7B] group-hover:text-white",
                      )}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Pillar Bottom */}
                  <div className="relative z-10 space-y-1">
                    <div className="font-display text-2xl text-white font-light tracking-tight">
                      {pillar.name}
                    </div>
                    <p className="text-[11px] text-[#AAA6A2] font-light line-clamp-2 leading-relaxed">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Detail Display */}
          <div
            id={`pillar-panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`pillar-tab-${current.id}`}
            className="rounded-2xl border border-white/10 bg-[#050505]/75 p-6 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-1 max-w-2xl">
              <span className="text-[10px] uppercase font-mono tracking-widest text-clout-red">
                Pillar Directive
              </span>
              <p className="text-sm text-[#F4F0E9] font-light leading-relaxed">
                {current.description}
              </p>
            </div>

            <Link
              href={current.link}
              className="inline-flex items-center gap-2 rounded-full border border-clout-red bg-clout-red px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-transparent hover:text-clout-red transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-clout-red"
            >
              <span>View {current.name} Practice</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
