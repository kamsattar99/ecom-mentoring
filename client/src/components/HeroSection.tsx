const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0F0E13] pb-12 pt-[104px] sm:pb-16 sm:pt-[128px] md:pt-[168px] md:pb-24">
      <div
        className="pointer-events-none absolute left-[-45%] top-[2%] h-[420px] w-[420px] rounded-full opacity-70 sm:left-[8%] sm:top-[8%] sm:h-[540px] sm:w-[540px]"
        style={{ background: "radial-gradient(circle, rgba(123,91,181,0.28) 0%, transparent 68%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-[-240px] right-[-80px] h-[650px] w-[650px] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, rgba(88,62,141,0.26) 0%, transparent 68%)" }}
      />

      <div className="container relative z-10 max-w-[1220px]">
        <div className="grid items-center gap-9 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 sm:mb-6 sm:px-4 sm:py-2"
              style={{ border: "1px solid rgba(179,148,242,0.32)", background: "rgba(88,62,141,0.16)" }}
            >
              <span className="h-2 w-2 rounded-full bg-[#B394F2]" />
              <span className="text-[10px] font-semibold tracking-[0.035em] text-white/75 min-[390px]:text-[11px] sm:text-[12px] sm:tracking-[0.04em]">
                6-week, hands-on AI ecommerce mentorship
              </span>
            </div>

            <h1 className="mb-4 max-w-[720px] font-serif text-[clamp(42px,12.5vw,52px)] leading-[0.93] tracking-[-0.04em] text-white sm:mb-6 sm:text-[clamp(48px,6.2vw,82px)] sm:leading-[0.98] sm:tracking-[-0.035em]">
              Stop Guessing What To <span className="italic text-[#B394F2]">Test Next.</span>
            </h1>

            <p className="mb-4 max-w-[640px] text-[15px] leading-[1.55] text-white/72 sm:mb-5 sm:text-[17px] sm:leading-[1.7] md:text-[19px]">
              Get one-to-one feedback on your products, store, creatives and ads from Inder or Nail—former students who each built seven-figure dropshipping businesses.
            </p>

            <p className="mb-6 max-w-[620px] text-[12px] leading-[1.55] text-white/48 sm:mb-9 sm:text-[14px] sm:leading-[1.7]">
              Kamil Sattar designs the system, trains the mentors and reviews their work. Your calls are delivered by the operators named above—not an anonymous junior coach.
            </p>

            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
              <a href="/apply" className="btn-primary w-full justify-center py-[15px] sm:w-auto sm:py-[17px]">
                Apply For A Fit Call <ArrowIcon />
              </a>
              <a href="#results" className="btn-ghost w-full justify-center border-transparent py-2.5 text-[13px] text-white/58 sm:w-auto sm:border-white/14 sm:py-[14px] sm:text-[15px] sm:text-[#F5F3F8]">
                Watch Student Interviews
              </a>
            </div>

            <p className="mt-3 text-center text-[10px] leading-[1.5] text-white/40 sm:mt-4 sm:text-left sm:text-[12px] sm:leading-[1.6]">
              Around 2 minutes to apply · Reviewed before a call is offered · Results are not guaranteed
            </p>

            <p className="mt-4 text-center text-[11px] font-medium text-white/54 sm:hidden">
              2 seven-figure mentors <span className="mx-1.5 text-[#B394F2]">·</span> 5 full student interviews
            </p>

            <div className="mt-10 hidden max-w-[620px] grid-cols-3 gap-3 border-t border-white/8 pt-6 sm:grid">
              {[
                ["600K+", "YouTube community"],
                ["5", "Full student interviews"],
                ["2", "Seven-figure mentors"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="font-serif text-[25px] leading-none text-white md:text-[30px]">{value}</p>
                  <p className="mt-2 text-[11px] leading-[1.35] text-white/40 md:text-[12px]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:mx-0 lg:ml-auto">
            <div
              className="absolute -inset-3 rounded-[28px] opacity-55 blur-2xl sm:-inset-5 sm:rounded-[34px] sm:opacity-70"
              style={{ background: "linear-gradient(145deg, rgba(123,91,181,0.32), transparent 65%)" }}
            />
            <div className="relative overflow-hidden rounded-[20px] border border-white/12 bg-[#17151E] p-2 shadow-[0_28px_70px_rgba(0,0,0,0.5)] sm:rounded-[26px] sm:p-3 sm:shadow-[0_36px_90px_rgba(0,0,0,0.55)]">
              <div className="flex items-center justify-between gap-3 px-2 pb-2 pt-1 sm:px-3 sm:pb-3">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#B394F2] sm:text-[10px]">Student proof</p>
                  <p className="mt-0.5 text-[10px] text-white/48 sm:mt-1 sm:text-[12px]">Student-provided Shopify dashboard</p>
                </div>
                <span className="shrink-0 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[9px] font-semibold text-emerald-300 sm:px-3 sm:text-[10px]">
                  365 days
                </span>
              </div>

              <div className="relative h-[320px] overflow-hidden rounded-[14px] bg-[#f3f3f3] min-[390px]:h-[350px] sm:h-[500px] sm:rounded-[18px]">
                <img
                  src="/proof/shopify-7m-case-study.jpeg"
                  alt="Student-provided Shopify dashboard showing sales, sessions and orders over the last 365 days"
                  className="h-full w-full object-cover [object-position:center_58%] sm:object-top"
                  width={848}
                  height={1600}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="absolute inset-x-2.5 bottom-2.5 rounded-[13px] border border-white/12 bg-[#0F0E13]/94 p-3 shadow-2xl backdrop-blur-xl sm:inset-x-3 sm:bottom-3 sm:rounded-[16px] sm:p-4">
                  <p className="font-serif text-[27px] leading-none text-white sm:text-[31px]">$7,042,738.43</p>
                  <p className="mt-1.5 text-[10px] text-white/58 sm:mt-2 sm:text-[12px]">Total store sales · 29 Jul 2024–29 Jul 2025</p>
                </div>
              </div>

              <p className="px-2 pb-1 pt-2 text-[9px] leading-[1.45] text-white/36 sm:px-3 sm:pt-3 sm:text-[10px] sm:leading-[1.5]">
                Shopify-reported sales are not the same as profit. Individual outcomes vary by product, budget, skill and execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
