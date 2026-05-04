export default function LogoBar() {
  const logos = [
    { name: "Forbes", style: "font-serif italic font-bold text-[26px] md:text-[32px]" },
    { name: "Business Insider", style: "font-sans font-extrabold text-[20px] md:text-[24px] tracking-tight" },
    { name: "Yahoo Finance", style: "font-sans font-black text-[20px] md:text-[24px]" },
    { name: "Entrepreneur", style: "font-serif italic font-bold text-[24px] md:text-[30px]" },
    { name: "The Sun", style: "font-sans font-black text-[20px] md:text-[24px] uppercase tracking-wide" },
    { name: "LADbible", style: "font-sans font-black text-[20px] md:text-[24px] tracking-tight" },
  ];

  // Duplicate for seamless infinite scroll
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-8 md:py-10 bg-white relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-[5%] right-[5%] h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.06) 50%, transparent 100%)" }}
      />
      <div className="absolute bottom-0 left-[5%] right-[5%] h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.06) 50%, transparent 100%)" }}
      />

      <p className="text-center text-[11px] text-[#999] font-medium tracking-[0.12em] uppercase mb-5">
        As Featured In
      </p>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white 0%, transparent 100%)" }}
        />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white 0%, transparent 100%)" }}
        />

        {/* Scrolling track */}
        <div className="flex items-center animate-marquee">
          {allLogos.map((logo, i) => (
            <span
              key={`${logo.name}-${i}`}
              className={`text-[#2a2a2a]/70 whitespace-nowrap mx-7 md:mx-12 select-none flex-shrink-0 ${logo.style}`}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
