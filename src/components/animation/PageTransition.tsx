"use client";

import { useEffect, useState, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Editorial page transition overlay for Next.js App Router.
 * Emits a subtle architectural wipe with brand red ambient sheen,
 * resets scroll position gracefully, and refreshes ScrollTrigger instances
 * without transforming the children DOM tree (preventing coordinate displacement).
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const currentPath = pathname || "/";
  const previousPathRef = useRef(currentPath);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (previousPathRef.current !== currentPath) {
      previousPathRef.current = currentPath;

      if (!prefersReduced) {
        setIsTransitioning(true);
        // Scroll to top immediately on route change
        window.scrollTo({ top: 0, behavior: "instant" });

        const timer = setTimeout(() => {
          setIsTransitioning(false);
          // Refresh ScrollTrigger once DOM of new route has mounted and settled
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 80);
        }, 280);

        return () => {
          clearTimeout(timer);
          setIsTransitioning(false);
        };
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
        ScrollTrigger.refresh();
      }
    }
    return undefined;
  }, [currentPath, prefersReduced]);

  return (
    <div className="relative min-h-screen">
      {/* Editorial Wipe Curtain - Fixed overlay, zero interference with document layout */}
      <div
        className={`pointer-events-none fixed inset-0 z-[100] bg-[#050505] transition-opacity duration-300 ease-out ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        {/* Subtle luminous red streak */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-clout-red to-transparent shadow-[0_0_15px_#e50920]" />
        <div className="absolute inset-0 bg-radial-gradient from-clout-red/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main page content - normal document flow without transform overrides */}
      <div className="w-full">{children}</div>
    </div>
  );
}
