export default function CTASection() {
  return (
    <section className="py-[80px] md:py-[120px] relative overflow-hidden section-alt">
      {/* Large radial glow */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(123,91,181,0.2) 0%, transparent 60%)" }}
      />

      <div className="container relative z-10">
        <div className="text-center max-w-[640px] mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7"
            style={{
              border: "1px solid rgba(155,126,219,0.35)",
              background: "rgba(88,62,141,0.15)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-[#B394F2] animate-pulse" />
            <span className="text-[12px] font-semibold text-[rgba(255,255,255,0.8)] tracking-wide">Limited Mentor Capacity</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-[clamp(36px,5vw,60px)] leading-[1.08] tracking-[-0.02em] text-white mb-5">
            Ready To Build With AI And{" "}
            <span className="italic text-[#B394F2]">Scale Faster?</span>
          </h2>

          {/* Subheading */}
          <p className="text-[15px] md:text-[16px] leading-[1.65] text-[rgba(255,255,255,0.6)] mb-10 max-w-[520px] mx-auto">
            Apply to work 1:1 with experienced ecommerce mentors who integrate AI into every stage — product research, store setup, ads, creatives and scaling.
          </p>

          {/* CTA Button */}
          <a
            href="/curriculums"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white text-[15px] font-semibold px-11 py-[18px] rounded-full transition-all duration-300 hover:-translate-y-[2px]"
            style={{
              background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
              boxShadow: "0 16px 48px rgba(123,91,181,0.5), 0 4px 12px rgba(123,91,181,0.2)",
            }}
          >
            Apply For 1-on-1 Mentorship
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Microcopy */}
          <p className="text-[13px] text-[rgba(255,255,255,0.4)] mt-5 leading-[1.5]">
            Applications are reviewed before calls are booked. No pressure if it is not the right fit.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-10 pt-7" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {["AI-powered frameworks", "Direct mentor access", "Store & ad reviews"].map((label) => (
              <span key={label} className="text-[12px] font-medium text-[rgba(255,255,255,0.5)]">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
