import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * High-Performance Scroll Progress Bar.
 * - Hardware-accelerated with CSS scaleX transform on direct DOM ref.
 * - Zero React state updates / zero re-render overhead on scroll.
 * - Respects prefers-reduced-motion.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || typeof window === "undefined") return;

    const bar = barRef.current;
    if (!bar) return;

    let isTicking = false;

    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        bar.style.transform = "scaleX(0)";
        return;
      }
      const progress = Math.min(1, Math.max(0, window.scrollY / scrollHeight));
      bar.style.transform = `scaleX(${progress})`;
      isTicking = false;
    };

    const handleScroll = () => {
      if (!isTicking) {
        requestAnimationFrame(updateProgress);
        isTicking = true;
      }
    };

    // Initial update
    updateProgress();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [prefersReduced]);

  if (prefersReduced) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-clout-red via-clout-bright to-clout-orange shadow-[0_0_8px_rgba(229,9,32,0.6)] will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
