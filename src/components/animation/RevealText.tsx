"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
  distance?: number;
  triggerHook?: string;
}

/**
 * Editorial Headline & Text Reveal with Progressive Enhancement.
 * - Content is visible by default (no permanent hiding).
 * - Enhances on entry with GSAP ScrollTrigger.
 * - Stays visible once revealed (never leaves reader with missing text on reverse scroll).
 * - Immediate full visibility when reduced-motion is requested.
 */
export function RevealText({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 24,
  triggerHook = "top 88%",
}: RevealTextProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (prefersReduced) {
      gsap.set(el, { opacity: 1, y: 0, clearProps: "all" });
      return;
    }

    // Check if element is already within viewport on mount
    const rect = el.getBoundingClientRect();
    const isAlreadyInView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

    let anim: gsap.core.Tween;

    if (isAlreadyInView) {
      // Smooth immediate entrance for above-the-fold content
      anim = gsap.fromTo(
        el,
        {
          opacity: 0,
          y: direction === "up" ? distance : 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: delay || 0.05,
          ease: "power3.out",
        },
      );
    } else {
      // Scroll-triggered entrance for below-the-fold content
      anim = gsap.fromTo(
        el,
        {
          opacity: 0,
          y: direction === "up" ? distance : 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: triggerHook,
            toggleActions: "play none none none",
            once: true,
          },
        },
      );
    }

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, [delay, direction, distance, triggerHook, prefersReduced]);

  return (
    <div ref={elementRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
