import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, Sparkles } from "lucide-react";
import { useRef, useEffect } from "react";
import { AtmosphericScene } from "@/components/three/AtmosphericScene";
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
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1 },
      );

      // 02. Headline lines with mask reveal
      tl.fromTo(
        ".hero-headline-line",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.14, ease: "power4.out" },
        "-=0.25",
      );

      // 03. Supporting paragraph
      tl.fromTo(
        ".hero-description",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.45",
      );

      // 05. CTA buttons
      tl.fromTo(
        ".hero-cta-group",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4",
      );

      // 06. Right-side photography frame mask reveal & scale
      tl.fromTo(
        ".hero-image-frame",
        {
          opacity: 0,
          scale: 0.94,
          clipPath: "inset(8% 0% 8% 0% round 24px)",
        },
        {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0% round 24px)",
          duration: 1.2,
          ease: "expo.out",
        },
        "-=0.8",
      );

      // 07. Floating metadata cards
      tl.fromTo(
        ".hero-floating-card",
        { opacity: 0, y: 22, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15, ease: "back.out(1.4)" },
        "-=0.6",
      );
    }, containerRef);

    // Subtle desktop mouse parallax on hero image frame
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024 || !photoCardRef.current) return;
      const { innerWidth, innerHeight } = window;
      const xPercent = (e.clientX / innerWidth - 0.5) * 2;
      const yPercent = (e.clientY / innerHeight - 0.5) * 2;

      gsap.to(photoCardRef.current, {
        rotateY: xPercent * 4,
        rotateX: -yPercent * 4,
        transformPerspective: 1000,
        duration: 0.8,
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
    >
      {/* 3D Atmospheric Background */}
      <AtmosphericScene />

      {/* Cinematic Red Architectural Aura */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-[#A90012]/15 blur-[150px] animate-subtle-aura" />
        <div className="absolute bottom-10 right-1/4 h-[400px] w-[500px] rounded-full bg-[#FF5A1F]/10 blur-[140px]" />
      </div>

      <div className="page-shell relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Refined Editorial Copy */}
          <div className="lg:col-span-7 space-y-8">
            {/* Small Eyebrow Label */}
            <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0A0A]/80 px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-clout-red animate-pulse" />
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
              <MagneticButton strength={0.28}>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-clout-red bg-clout-red px-8 py-3.5 text-xs font-mono uppercase tracking-wider text-white shadow-[0_0_30px_rgba(229,9,32,0.35)] transition-all duration-300 hover:bg-white hover:border-white hover:text-black hover:shadow-[0_0_40px_rgba(229,9,32,0.6)]"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.18}>
                <a
                  href="#services-overview"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0A0A0A]/60 px-7 py-3.5 text-xs font-mono tracking-wider text-[#F4F0E9] transition-all duration-300 hover:border-white/30 hover:bg-[#151515]"
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
              className="hero-image-frame relative mx-auto max-w-[460px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A0A0A] group will-change-transform"
            >
              {/* Rich Orange-Red Ambient Backlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#A90012]/40 via-transparent to-[#FF5A1F]/20 mix-blend-overlay z-10 pointer-events-none" />

              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
                alt="Creative Director Portrait in Warm Red Light"
                className="h-full w-full object-cover object-center filter contrast-115 brightness-95 transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Floating Editorial Metadata Badge 1 */}
              <div className="hero-floating-card absolute top-5 right-5 z-20 rounded-xl border border-white/15 bg-[#050505]/75 p-3.5 backdrop-blur-md shadow-xl text-left transition-transform duration-300 hover:-translate-y-1">
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#AAA6A2] block">
                  Delivered Reach
                </span>
                <span className="font-display text-lg font-light text-white">500M+ Views</span>
              </div>

              {/* Floating Editorial Metadata Badge 2 */}
              <div className="hero-floating-card absolute bottom-5 left-5 right-5 z-20 rounded-2xl border border-white/15 bg-[#050505]/85 p-4 backdrop-blur-md shadow-xl flex items-center justify-between transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-clout-red block">
                    Pan-India Network
                  </span>
                  <div className="text-xs font-mono text-[#F4F0E9] mt-0.5 font-light">
                    500+ Verified Creators
                  </div>
                </div>
                <div className="h-7 w-7 rounded-full bg-clout-red/20 border border-clout-red/40 flex items-center justify-center text-clout-red">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
