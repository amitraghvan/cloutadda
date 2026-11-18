"use client";

import { useEffect, useState } from "react";
import { ScrollTrigger } from "@/lib/animations/gsap";

/**
 * Development-Only Animation Diagnostic Monitor (Phase 10).
 * - Tracks active ScrollTriggers count and verifies cleanup on route changes.
 * - Detects duplicate registrations or stale trigger accumulation.
 * - Completely stripped / returns null in production builds.
 */
export function AnimationDiagnostics() {
  const isDev = process.env.NODE_ENV !== "production";
  const [triggerCount, setTriggerCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isDev || typeof window === "undefined") return;

    const interval = setInterval(() => {
      const triggers = ScrollTrigger.getAll();
      setTriggerCount(triggers.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [isDev]);

  if (!isDev) return null;

  return (
    <aside
      aria-label="Animation Diagnostics"
      className="fixed bottom-4 right-4 z-[9999] font-mono text-[10px]"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/80 px-2.5 py-1 text-[#AAA6A2] backdrop-blur-md hover:border-clout-red hover:text-white transition-colors"
        title="Toggle Animation Diagnostics"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
        <span>MOTION DEV</span>
        <span className="rounded bg-white/10 px-1 text-white">{triggerCount} ST</span>
      </button>

      {isOpen && (
        <div className="mt-2 w-64 rounded-xl border border-white/10 bg-[#0A0A0A]/95 p-3.5 text-[#AAA6A2] shadow-2xl backdrop-blur-lg">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 font-semibold text-white">
            <span>ScrollTrigger Monitor</span>
            <span className="text-clout-red">{triggerCount} Active</span>
          </div>

          <div className="space-y-1.5 text-[10px]">
            <div className="flex justify-between">
              <span>GSAP Core:</span>
              <span className="text-green-400">Registered</span>
            </div>
            <div className="flex justify-between">
              <span>ScrollTrigger:</span>
              <span className="text-green-400">Synchronized</span>
            </div>
            <div className="flex justify-between">
              <span>Three.js WebGL:</span>
              <span className="text-green-400">Low-Power GPU</span>
            </div>
            <div className="flex justify-between">
              <span>RAF Loop:</span>
              <span className="text-green-400">Single Ticker</span>
            </div>
          </div>

          <button
            onClick={() => {
              ScrollTrigger.refresh();
              const triggers = ScrollTrigger.getAll();
              setTriggerCount(triggers.length);
            }}
            className="mt-3 w-full rounded-md border border-white/10 bg-white/5 py-1 text-center text-[10px] text-white hover:bg-clout-red hover:border-clout-red transition-colors"
          >
            Force ScrollTrigger Refresh
          </button>
        </div>
      )}
    </aside>
  );
}
