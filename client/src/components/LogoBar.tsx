export default function LogoBar() {
  const logos = [
    { name: "Forbes", style: "font-serif italic font-bold text-[26px] md:text-[32px]" },
    { name: "Business Insider", style: "font-sans font-extrabold text-[20px] md:text-[24px] tracking-tight" },
    { name: "Yahoo Finance", style: "font-sans font-black text-[20px] md:text-[24px]" },
    { name: "Entrepreneur", style: "font-serif italic font-bold text-[24px] md:text-[30px]" },
    { name: "THE SUN", style: "font-sans font-black text-[20px] md:text-[24px] uppercase tracking-wide" },
    { name: "LADbible", style: "font-sans font-black text-[20px] md:text-[24px] tracking-tight" },
  ];

  // Duplicate for seamless infinite scroll
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section
      className="py-8 md:py-10 relative overflow-hidden rounded-2xl mx-4 md:mx-8 lg:mx-12 my-4"
      style={{
        background: "linear-gradient(135deg, #4a2d8a 0%, #5b3a9e 25%, #6b47b2 50%, #5b3a9e 75%, #4a2d8a 100%)",
      }}
    >
      <p className="text-center text-[11px] text-white/60 font-medium tracking-[0.14em] uppercase mb-5">
        As Featured In
      </p>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #4a2d8a 0%, transparent 100%)" }}
        />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #4a2d8a 0%, transparent 100%)" }}
        />

        {/* Scrolling track */}
        <div className="flex items-center animate-marquee">
          {allLogos.map((logo, i) => (
            <span
              key={`${logo.name}-${i}`}
              className={`text-white whitespace-nowrap mx-7 md:mx-12 select-none flex-shrink-0 ${logo.style}`}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
