import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

interface PageHeaderProps {
  badge?: string;
  number?: string;
  title: string | ReactNode;
  italicWord?: string;
  description: string;
  backHref?: string;
  backLabel?: string;
}

export function PageHeader({
  badge = "CLOUT ADDA®",
  number,
  title,
  italicWord,
  description,
  backHref,
  backLabel = "Back",
}: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-white/[0.08] bg-[#050505] overflow-hidden">
      {/* Cinematic luminous red gradient & architecture lines */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[450px] w-[900px] rounded-full bg-gradient-to-b from-[#E50920]/15 via-[#FF5A1F]/5 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      {/* Subtle vertical architectural accent line */}
      <div className="pointer-events-none absolute top-0 right-12 md:right-24 w-px h-full bg-gradient-to-b from-white/10 via-clout-red/20 to-transparent" />

      <div className="page-shell relative z-10">
        {backHref && (
          <div className="mb-8">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#AAA6A2] hover:text-white transition-colors duration-200 group"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1 text-clout-red" />
              <span className="uppercase">{backLabel}</span>
            </Link>
          </div>
        )}

        <div className="flex items-center gap-3">
          {number && (
            <span className="font-mono text-xs text-clout-red tracking-widest font-semibold">
              {number}
            </span>
          )}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-[#AAA6A2] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-clout-red animate-pulse" />
            {badge}
          </span>
        </div>

        <h1 className="mt-5 font-display font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] text-[#F4F0E9] leading-[1.08] max-w-4xl">
          {title}
          {italicWord && (
            <>
              {" "}
              <span className="font-serif-italic font-normal text-white">{italicWord}</span>
            </>
          )}
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#AAA6A2] max-w-2xl font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
