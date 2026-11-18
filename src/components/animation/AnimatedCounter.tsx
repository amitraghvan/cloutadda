import { useRef, useEffect, useState } from "react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * Editorial Metric Count-Up with Progressive Enhancement.
 * - Always displays the true value on SSR and before animation fires (never shows a stuck 0).
 * - Animates smoothly once on viewport entry.
 * - Respects prefers-reduced-motion.
 */
export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className = "",
}: AnimatedCounterProps) {
  // Initialize with the real value for immediate SSR readability
  const [displayValue, setDisplayValue] = useState(value);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || hasAnimatedRef.current) {
      setDisplayValue(value);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const counterObj = { count: 0 };

    const anim = gsap.to(counterObj, {
      count: value,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => {
          setDisplayValue(0);
        },
      },
      onUpdate: () => {
        setDisplayValue(Math.floor(counterObj.count));
      },
      onComplete: () => {
        setDisplayValue(value);
        hasAnimatedRef.current = true;
      },
    });

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, [value, duration, prefersReduced]);

  return (
    <span ref={containerRef} className={`tabular-nums ${className}`}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}
