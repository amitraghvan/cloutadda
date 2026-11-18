"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Clout Adda Application Error:", error);
  }, [error]);

  return (
    <div className="relative flex min-h-[85vh] items-center justify-center px-4 py-32 overflow-hidden bg-[#050505]">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-b from-[#E50920]/20 to-transparent blur-[140px]" />

      <div className="relative z-10 max-w-lg text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-clout-red/30 bg-clout-red/10 px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-clout-red backdrop-blur-sm">
          <span>System Interruption</span>
        </div>

        <h1 className="mt-6 font-display text-3xl sm:text-4xl font-light tracking-tight text-white">
          Unexpected Experience <span className="font-serif-italic">State</span>
        </h1>

        <p className="mt-4 text-sm text-[#AAA6A2] font-light leading-relaxed">
          An unexpected interruption occurred while rendering this view. You can reload the state
          or return to the primary navigation index.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="group inline-flex items-center gap-2 rounded-full border border-clout-red bg-clout-red px-6 py-3 text-xs font-mono uppercase tracking-wider text-white shadow-[0_0_25px_rgba(229,9,32,0.3)] transition-all duration-300 hover:bg-transparent hover:text-clout-red"
          >
            <RefreshCw className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-xs font-mono uppercase tracking-wider text-[#F4F0E9] transition-all duration-300 hover:border-white/40 hover:bg-white/[0.08]"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
