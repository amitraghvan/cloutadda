import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { MEME_MARKETING_FAQS } from "@/data/servicesData";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items = MEME_MARKETING_FAQS }: { items?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-clout-red/50 bg-[#0E0E0E]"
                : "border-white/[0.08] bg-[#050505] hover:border-white/20"
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-6 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-display font-light text-lg sm:text-xl text-[#F4F0E9] tracking-[-0.02em]">
                {item.question}
              </span>
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 border-clout-red/50 text-clout-red bg-clout-red/10"
                    : "text-[#AAA6A2]"
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-0 border-t border-white/[0.06]">
                <p className="text-sm sm:text-base text-[#AAA6A2] leading-relaxed font-light pt-4">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
