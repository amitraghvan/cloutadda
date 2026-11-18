import { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "@/lib/animations/gsap";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Custom hook to safely isolate GSAP animations inside a React component scope.
 * Automatically reverts all created animations and ScrollTriggers when unmounting.
 */
export function useGSAPAnimation<T extends HTMLElement = HTMLDivElement>(
  animationCreator: (context: gsap.Context) => void,
  dependencies: React.DependencyList = [],
) {
  const scopeRef = useRef<T>(null);

  useIsomorphicLayoutEffect(() => {
    if (!scopeRef.current) return;

    const ctx = gsap.context(() => {
      animationCreator(ctx);
    }, scopeRef);

    return () => {
      ctx.revert();
    };
  }, dependencies);

  return scopeRef;
}
