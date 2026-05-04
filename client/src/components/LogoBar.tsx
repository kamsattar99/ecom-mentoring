export default function LogoBar() {
  const logos = [
    { name: "Forbes", style: "font-serif italic font-bold text-[28px] md:text-[34px]" },
    { name: "Business Insider", style: "font-sans font-extrabold text-[22px] md:text-[26px] tracking-tight" },
    { name: "Yahoo Finance", style: "font-sans font-black text-[22px] md:text-[26px]" },
    { name: "Entrepreneur", style: "font-serif italic font-bold text-[26px] md:text-[32px]" },
    { name: "THE SUN", style: "font-sans font-black text-[22px] md:text-[26px] uppercase tracking-wider" },
    { name: "LADbible", style: "font-sans font-black text-[22px] md:text-[26px] tracking-tight" },
  ];

  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 md:py-14 bg-white relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-[5%] right-[5%] h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(88,62,141,0.08) 50%, transparent 100%)" }}
      />
      <div className="absolute bottom-0 left-[5%] right-[5%] h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(88,62,141,0.08) 50%, transparent 100%)" }}
      />

      <p className="text-center text-[11px] text-[#999] font-medium tracking-[0.1em] uppercase mb-8">
        As featured in
      </p>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white 0%, transparent 100%)" }}
        />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white 0%, transparent 100%)" }}
        />

        {/* Scrolling track */}
        <div className="flex items-center animate-marquee">
          {allLogos.map((logo, i) => (
            <span
              key={`${logo.name}-${i}`}
              className={`text-[#17191c]/80 whitespace-nowrap mx-8 md:mx-14 select-none flex-shrink-0 ${logo.style}`}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
