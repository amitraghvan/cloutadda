export function BrandMarquee() {
  const marqueeItems = ["BRANDS", "CULTURE", "CREATORS", "CONTENT", "CONVERSATIONS", "EXPERIENCES"];

  return (
    <div className="relative border-y border-[#292424] bg-[#0A0A0A] py-3.5 overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        {[...Array(4)].map((_, groupIdx) => (
          <div key={groupIdx} className="flex items-center shrink-0">
            {marqueeItems.map((item, idx) => (
              <span key={idx} className="flex items-center">
                <span className="mx-8 font-display text-xs font-light tracking-[0.28em] text-[#AAA6A2] transition-colors hover:text-[#F4F0E9]">
                  {item}
                </span>
                <span className="text-clout-red/60 text-[10px]">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
