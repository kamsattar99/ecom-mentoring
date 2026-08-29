export default function CTASection() {
  return (
    <section className="relative overflow-hidden border-y border-white/6 bg-[#131118] py-[90px] md:py-[125px]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(123,91,181,0.23) 0%, transparent 65%)" }}
      />
      <div className="container relative z-10 max-w-[820px] text-center">
        <p className="eyebrow mb-5">Make an informed decision</p>
        <h2 className="font-serif text-[clamp(42px,6vw,72px)] leading-[1.01] tracking-[-0.03em] text-white">
          See If The Programme Fits <span className="italic text-[#B394F2]">Before You Decide.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[610px] text-[15px] leading-[1.75] text-white/56 md:text-[16px]">
          Tell us where you are, what you have already tried and what budget you have available. If the programme is not appropriate for your stage, the fit call should make that clear.
        </p>
        <a href="/apply" className="btn-primary mt-9 justify-center px-10 py-[18px] text-[15px]">
          Apply For A Fit Call
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <p className="mt-4 text-[12px] text-white/36">Around 2 minutes to apply · No guaranteed results · No pressure if it is not the right fit</p>
        <div className="mx-auto mt-10 grid max-w-[700px] gap-3 border-t border-white/8 pt-7 sm:grid-cols-3">
          {["Mentors named upfront", "Prices shown upfront", "Full interviews available"].map((item) => (
            <p key={item} className="text-[12px] font-medium text-white/47">{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
