import Link from "next/link";

export function CloutAddaLogo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-85 ${className}`}
      aria-label="CLOUT ADDA Homepage"
    >
      <div className="relative flex h-7 w-7 items-center justify-center rounded-sm bg-[#0E0E0E] border border-white/10 text-xs font-medium text-[#F4F0E9] group-hover:border-clout-red/50 transition-colors">
        <span className="font-mono text-[10px] tracking-tight text-[#F4F0E9]">CA</span>
        <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-clout-red" />
      </div>
      <div className="flex flex-col text-left leading-none">
        <span className="font-display text-sm tracking-[0.2em] font-medium text-[#F4F0E9] uppercase">
          CLOUT ADDA<span className="text-clout-red ml-0.5 text-xs font-normal">®</span>
        </span>
        <span className="text-[8px] font-normal tracking-[0.28em] text-[#AAA6A2] uppercase mt-0.5">
          Creative Agency
        </span>
      </div>
    </Link>
  );
}
