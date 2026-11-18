"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Luxury Desktop Custom Cursor.
 * - Hardware-accelerated with gsap.quickTo (zero React state updates / zero re-render overhead).
 * - Smooth trailing ambient ring with hover state scaling.
 * - Auto-disabled on mobile, tablet touch devices, and reduced-motion modes.
 * - Strict pointer-events-none so it never blocks clicks or link selections.
 */
export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || typeof window === "undefined") return;

    // Only run on desktop pointer devices
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024;
    if (isTouch) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // High performance quickTo setters
    const setDotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power2.out" });
    const setDotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power2.out" });
    const setRingX = gsap.quickTo(ring, "x", { duration: 0.3, ease: "power3.out" });
    const setRingY = gsap.quickTo(ring, "y", { duration: 0.3, ease: "power3.out" });

    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
        isVisible = true;
      }

      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      const isInteractive = !!(
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest("[role='button']") ||
        target?.closest("input") ||
        target?.closest("select") ||
        target?.closest("textarea") ||
        target?.closest("[data-cursor='hover']")
      );

      if (isInteractive) {
        gsap.to(ring, {
          scale: 1.6,
          borderColor: "rgba(229, 9, 32, 0.7)",
          backgroundColor: "rgba(229, 9, 32, 0.08)",
          duration: 0.25,
          overwrite: "auto",
        });
      } else {
        gsap.to(ring, {
          scale: 1,
          borderColor: "rgba(229, 9, 32, 0.3)",
          backgroundColor: "transparent",
          duration: 0.25,
          overwrite: "auto",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
      isVisible = false;
    };

    // Initially hide until first mouse movement
    gsap.set([dot, ring], { opacity: 0 });

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReduced]);

  if (prefersReduced) return null;

  return (
    <div
      className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {/* Outer trailing ambient ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed -top-4 -left-4 w-8 h-8 rounded-full border border-clout-red/30 will-change-transform"
      />
      {/* Center solid dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed -top-1 -left-1 w-2 h-2 rounded-full bg-clout-red shadow-[0_0_8px_#e50920] will-change-transform"
      />
    </div>
  );
}
