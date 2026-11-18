"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number; // Distance modifier, defaults to 0.25
}

/**
 * Editorial Magnetic Button Wrapper.
 * - Hardware-accelerated with direct GSAP spring physics.
 * - Zero React state updates / zero re-render overhead on pointer motion.
 * - Automatic touch device bypass.
 */
export function MagneticButton({ children, className = "", strength = 0.25 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !ref.current) return;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Small clamped pull (max 10px)
    const deltaX = Math.max(-10, Math.min(10, (e.clientX - centerX) * strength));
    const deltaY = Math.max(-10, Math.min(10, (e.clientY - centerY) * strength));

    gsap.to(ref.current, {
      x: deltaX,
      y: deltaY,
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    if (prefersReduced || !ref.current) return;

    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1.1, 0.45)",
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
