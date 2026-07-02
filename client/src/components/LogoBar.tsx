export default function LogoBar() {
  const logos = [
    { name: "Forbes", style: "font-serif italic font-bold text-[26px] md:text-[32px]" },
    { name: "Business Insider", style: "font-sans font-extrabold text-[20px] md:text-[24px] tracking-tight" },
    { name: "Yahoo Finance", style: "font-sans font-black text-[20px] md:text-[24px]" },
    { name: "Entrepreneur", style: "font-serif italic font-bold text-[24px] md:text-[30px]" },
    { name: "THE SUN", style: "font-sans font-black text-[20px] md:text-[24px] uppercase tracking-wide" },
    { name: "LADbible", style: "font-sans font-black text-[20px] md:text-[24px] tracking-tight" },
  ];

  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section
      className="py-6 relative overflow-hidden bg-transparent"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Marquee container */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0F0E13 0%, transparent 100%)" }}
        />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0F0E13 0%, transparent 100%)" }}
        />

        {/* Scrolling track */}
        <div className="flex items-center animate-marquee">
          {allLogos.map((logo, i) => (
            <span
              key={`${logo.name}-${i}`}
              className={`text-[rgba(255,255,255,0.45)] whitespace-nowrap mx-7 md:mx-12 select-none flex-shrink-0 ${logo.style}`}
            >
              {i === 0 && (
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.35)] mr-8">As featured in</span>
              )}
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
