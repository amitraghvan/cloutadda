"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";
import { MagneticButton } from "@/components/animation/MagneticButton";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const photoCardRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 01. Eyebrow badge
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.05 },
      );

      // 02. Headline lines with mask reveal
      tl.fromTo(
        ".hero-headline-line",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.12, ease: "power4.out" },
        "-=0.35",
      );

      // 03. Supporting description
      tl.fromTo(
        ".hero-description",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.65 },
        "-=0.5",
      );

      // 04. CTA buttons
      tl.fromTo(
        ".hero-cta-group",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55 },
        "-=0.4",
      );

      // 05. Hero photograph frame mask reveal
      tl.fromTo(
        ".hero-image-frame",
        {
          opacity: 0,
          scale: 1.03,
          clipPath: "inset(4% 0% 4% 0% round 20px)",
        },
        {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0% round 20px)",
          duration: 1.1,
          ease: "expo.out",
        },
        "-=0.7",
      );

      // 06. Editorial metadata panels
      tl.fromTo(
        ".hero-floating-card",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out" },
        "-=0.5",
      );
    }, containerRef);

    // Subtle desktop mouse parallax on hero image frame
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024 || !photoCardRef.current) return;
      const { innerWidth, innerHeight } = window;
      const xPercent = (e.clientX / innerWidth - 0.5) * 2;
      const yPercent = (e.clientY / innerHeight - 0.5) * 2;

      gsap.to(photoCardRef.current, {
        rotateY: xPercent * 2,
        rotateX: -yPercent * 2,
        transformPerspective: 1200,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, [prefersReduced]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#050505] pt-32 pb-20 lg:pt-36 lg:pb-28"
      aria-label="Clout Adda Introduction"
    >
      {/* Cinematic Ambient Lighting (Understated Red & Amber Glow) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Soft radial crimson backlight behind content */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-gradient-to-tr from-[#A90012]/12 to-transparent blur-[160px]" />

        {/* Warm amber studio fill behind photography */}
        <div className="absolute top-1/3 right-1/4 h-[500px] w-[600px] rounded-full bg-gradient-to-bl from-[#FF5A1F]/08 via-[#A90012]/06 to-transparent blur-[140px]" />

        {/* Subtle architectural floor gradient */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      <div className="page-shell relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Refined Editorial Copy */}
          <div className="lg:col-span-7 space-y-8">
            {/* Small Eyebrow Label */}
            <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0A0A]/80 px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-clout-red" />
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#AAA6A2] uppercase">
                CLOUT ADDA® · CULTURE &amp; BRAND INFLUENCE
              </span>
            </div>

            {/* Refined Headline with Instrument Serif Italic Accent */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[82px] text-[#F4F0E9] font-light leading-[1.04] tracking-tight">
              <div className="hero-headline-line overflow-hidden">
                <span className="hero-italic-accent font-serif-italic font-normal text-white mr-1 text-[1.12em] tracking-normal inline-block">
                  Culture
                </span>{" "}
                moves fast.
              </div>
              <div className="hero-headline-line overflow-hidden">
                Let's make your brand{" "}
                <span className="text-white font-normal underline decoration-clout-red/50 underline-offset-8">
                  matter.
                </span>
              </div>
            </h1>

            {/* Supporting Copy */}
            <p className="hero-description text-base sm:text-lg md:text-xl text-[#AAA6A2] font-light leading-relaxed max-w-xl">
              We connect brands with culture, creators and conversations through social media, PR,
              meme marketing and memorable real-world experiences.
            </p>

            {/* Minimalist CTAs with Magnetic Effect */}
            <div className="hero-cta-group pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <MagneticButton strength={0.25}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-clout-red bg-clout-red px-8 py-3.5 text-xs font-mono uppercase tracking-wider text-white shadow-[0_0_24px_rgba(229,9,32,0.3)] transition-all duration-300 hover:bg-white hover:border-white hover:text-black hover:shadow-[0_0_35px_rgba(229,9,32,0.5)] focus:outline-none focus:ring-2 focus:ring-clout-red"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.15}>
                <a
                  href="#services-overview"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0A0A0A]/60 px-7 py-3.5 text-xs font-mono tracking-wider text-[#F4F0E9] transition-all duration-300 hover:border-white/30 hover:bg-[#151515] focus:outline-none focus:ring-1 focus:ring-white/30"
                >
                  <span>Explore Our Work</span>
                  <ArrowDown className="h-3.5 w-3.5 text-clout-red" />
                </a>
              </MagneticButton>
            </div>

            {/* Tagline */}
            <div className="pt-4 flex items-center gap-3 text-[11px] font-mono tracking-[0.22em] text-[#827E7B] uppercase">
              <span className="text-clout-red">✳</span>
              <span>{COMPANY_INFO.tagline}</span>
            </div>
          </div>

          {/* Right Column: Large Cinematic Photography with Warm Studio Lighting */}
          <div className="lg:col-span-5 relative">
            <div
              ref={photoCardRef}
              className="hero-image-frame relative mx-auto max-w-[450px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A0A0A] group will-change-transform"
            >
              {/* Editorial Image with Native Next.js Optimization */}
              <Image
                src="/images/hero-creative-production.jpg"
                alt="Creative Director operating cinema camera in dark production studio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover object-center filter contrast-[1.06] brightness-[0.98] transition-transform duration-1000 group-hover:scale-[1.02]"
              />

              {/* Controlled Cinematic Amber/Red Rim Lighting & Shadow Falloff */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Top-Right Editorial Metadata */}
              <div className="hero-floating-card absolute top-4 right-4 z-20 rounded-lg border border-white/10 bg-[#050505]/80 px-3.5 py-2 backdrop-blur-md text-left shadow-lg">
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#AAA6A2] block">
                  Delivered Reach
                </span>
                <span className="font-display text-sm font-medium text-white tracking-tight">
                  500M+ Views
                </span>
              </div>

              {/* Bottom Editorial Metadata */}
              <div className="hero-floating-card absolute bottom-4 inset-x-4 z-20 rounded-xl border border-white/10 bg-[#050505]/85 p-3.5 backdrop-blur-md shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-clout-red block">
                    Pan-India Network
                  </span>
                  <div className="text-xs font-mono text-[#F4F0E9] font-light mt-0.5">
                    500+ Verified Creators
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#AAA6A2] uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-clout-red animate-pulse" />
                  <span>Active Roster</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
