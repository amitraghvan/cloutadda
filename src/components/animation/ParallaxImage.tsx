import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ParallaxImageProps {
  children?: ReactNode;
  src?: string;
  alt?: string;
  speed?: number; // Parallax intensity (e.g. 0.12 = 12% travel)
  className?: string;
}

/**
 * Editorial Parallax Image container.
 * - Subtly translates image during vertical scroll.
 * - Automatically disabled on touch / mobile viewports (< 1024px) for 60fps touch smoothness.
 * - Safe ScrollTrigger cleanup on route transitions.
 */
export function ParallaxImage({
  children,
  src,
  alt = "",
  speed = 0.1,
  className = "",
}: ParallaxImageProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || typeof window === "undefined") return;

    // Disable heavy parallax on mobile / tablet viewports to preserve battery and touch physics
    if (window.innerWidth < 1024) return;

    const el = targetRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    const yDistance = 45 * speed;

    const anim = gsap.fromTo(
      el,
      { y: -yDistance },
      {
        y: yDistance,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.0,
        },
      },
    );

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, [speed, prefersReduced]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={targetRef} className="h-full w-full will-change-transform">
        {children ? (
          children
        ) : src ? (
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        ) : null}
      </div>
    </div>
  );
}
