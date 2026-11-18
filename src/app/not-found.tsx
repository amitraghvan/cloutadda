import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[85vh] items-center justify-center px-4 py-32 overflow-hidden bg-[#050505]">
      {/* Cinematic luminous red gradient & architecture lines */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-b from-[#E50920]/15 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="relative z-10 max-w-lg text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-clout-red backdrop-blur-sm">
          <span>Error 404</span>
        </div>

        <h1 className="mt-6 font-display text-7xl sm:text-8xl font-light tracking-tight text-white">
          404
        </h1>

        <h2 className="mt-4 font-display text-2xl sm:text-3xl font-light text-[#F4F0E9]">
          Page Not <span className="font-serif-italic">Found</span>
        </h2>

        <p className="mt-4 text-sm text-[#AAA6A2] font-light leading-relaxed">
          The requested coordinate does not exist or has been relocated within the Clout Adda
          archive.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 rounded-full border border-clout-red bg-clout-red px-6 py-3 text-xs font-mono uppercase tracking-wider text-white shadow-[0_0_25px_rgba(229,9,32,0.3)] transition-all duration-300 hover:bg-transparent hover:text-clout-red"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
