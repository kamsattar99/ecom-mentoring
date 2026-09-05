import { homeAssets } from "@/lib/homeAssets";

/** Homepage visual direction: return to the hero horizon for the final decision. */
export default function CTASection() {
  return (
    <section
      data-closing-cta
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#131118] py-[clamp(110px,14vw,180px)]"
    >
      <div
        aria-hidden="true"
        className="home-grid-overlay pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_100%,#000_10%,transparent_75%)]"
      />
      <img
        src={homeAssets.heroEnvironmentMobile}
        alt=""
        width={960}
        height={536}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] w-full object-cover object-[center_80%] opacity-70 [mask-image:linear-gradient(180deg,transparent_0%,#000_70%)]"
      />
      <div
        aria-hidden="true"
        className="home-cta-glow pointer-events-none absolute -bottom-[45%] left-1/2 aspect-[2/1] w-[min(1200px,150vw)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_65%,rgba(123,91,181,0.5)_0%,rgba(88,62,141,0.18)_38%,transparent_70%)] blur-[28px]"
      />
      <div className="home-grain pointer-events-none absolute inset-0" />

      <div className="relative z-[2] mx-auto w-[min(calc(100%-40px),880px)] max-w-[calc(100%-40px)] text-center">
        <p
          data-reveal
          className="mb-[26px] flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B394F2] before:h-px before:w-7 before:bg-[#B394F2]/50 after:h-px after:w-7 after:bg-[#B394F2]/50"
        >
          Make an informed decision
        </p>
        <h2 className="font-serif text-[clamp(44px,7.4vw,86px)] font-normal leading-[0.98] tracking-[-0.035em] text-white">
          <span className="block overflow-hidden pb-[0.12em] -mb-[0.06em]">
            <span data-reveal className="block">
              See If The Programme Fits
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.12em] -mb-[0.06em]">
            <span
              data-reveal
              style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
              className="block italic text-[#B394F2]"
            >
              Before You Decide.
            </span>
          </span>
        </h2>
        <p
          data-reveal
          style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          className="mx-auto mt-7 max-w-[600px] text-[16px] leading-[1.75] text-white/55"
        >
          Tell us where you are, what you have already tried and what budget you
          have available. If the programme is not appropriate for your stage,
          the fit call should make that clear.
        </p>
        <div
          data-reveal
          style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
          className="mt-[38px]"
        >
          <a
            href="/apply"
            className="btn-primary min-h-14 justify-center px-10 py-5 text-[16px] font-semibold"
          >
            Apply For A Fit Call{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="mt-[18px] text-[12px] text-white/40">
            Around 2 minutes to apply · No guaranteed results · No pressure if
            it is not the right fit
          </p>
        </div>
        <div
          data-reveal
          style={{ "--reveal-delay": "380ms" } as React.CSSProperties}
          className="mx-auto mt-11 grid max-w-[700px] gap-3 border-t border-white/10 pt-[26px] sm:grid-cols-3"
        >
          {[
            "Mentors named upfront",
            "Prices shown upfront",
            "Full interviews available",
          ].map(item => (
            <p key={item} className="text-[12.5px] font-medium text-white/50">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
