"use client";

import { useEffect, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/**
 * Production-Grade Smooth Scroll & ScrollTrigger Synchronizer.
 * - Synchronizes scroll events with GSAP ScrollTrigger updates.
 * - Does not fight browser native hardware inertia scrolling.
 * - Full native touch preservation on mobile.
 * - Respects prefers-reduced-motion.
 * - Supports seamless internal hash anchor link transitions.
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Refresh ScrollTrigger once DOM layout is settled
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Sync ScrollTrigger on native scroll with throttle via GSAP ticker
    let isTicking = false;
    const handleScroll = () => {
      if (!isTicking) {
        requestAnimationFrame(() => {
          ScrollTrigger.update();
          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Handle smooth internal anchor clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const destination = document.querySelector(href);
        if (destination) {
          e.preventDefault();
          const targetY = destination.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({
            top: targetY,
            behavior: prefersReduced ? "auto" : "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // GSAP ticker lag smoothing configuration
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [prefersReduced]);

  return <>{children}</>;
}
