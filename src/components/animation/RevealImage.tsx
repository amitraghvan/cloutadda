import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface RevealImageProps {
  children?: ReactNode;
  src?: string;
  alt?: string;
  className?: string;
  delay?: number;
}

/**
 * Editorial Image Reveal with Progressive Enhancement.
 * - Animates scale and clip-path smoothly on viewport entry.
 * - Does not trap images in an invisible or clipped state.
 * - Stays visible once revealed (never hides content during fast or reverse scrolling).
 * - Full visibility on reduced-motion or WebGL/JS bypass.
 */
export function RevealImage({
  children,
  src,
  alt = "",
  className = "",
  delay = 0,
}: RevealImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (prefersReduced) {
      gsap.set(el, { opacity: 1, scale: 1, clipPath: "none", clearProps: "all" });
      return;
    }

    const rect = el.getBoundingClientRect();
    const isAlreadyInView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

    let anim: gsap.core.Tween;

    if (isAlreadyInView) {
      anim = gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: 0.96,
          clipPath: "inset(5% 0% 5% 0% round 16px)",
        },
        {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0% round 16px)",
          duration: 0.9,
          delay: delay || 0.05,
          ease: "power3.out",
        },
      );
    } else {
      anim = gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: 0.96,
          clipPath: "inset(6% 0% 6% 0% round 16px)",
        },
        {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0% round 16px)",
          duration: 1.0,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
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
  }, [delay, prefersReduced]);

  return (
    <div ref={containerRef} className={`will-change-transform ${className}`}>
      {children ? (
        children
      ) : src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : null}
    </div>
  );
}
