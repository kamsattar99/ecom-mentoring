import { homeAssets } from "@/lib/homeAssets";

/** Homepage visual direction: transparent pricing in tactile dark programme cards. */
const included = [
  "Direct mentor chat throughout the six-week programme",
  "Feedback on your actual products, store, creatives and advertising",
  "AI workflows, SOPs and decision-making frameworks",
  "Clear priorities after every live session",
];
const launchIncluded = [
  "1 private 1-to-1 review call at the end of every week",
  "Telegram mentor support throughout the six-week programme",
  "Clear priorities after every weekly review",
  "Structured video lessons and practical resources",
  "Live-call recordings",
  "AI workflows, SOPs and decision-making frameworks",
];
const Check = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.8"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function WhatYouGet() {
  return (
    <section
      id="program"
      className="home-section relative overflow-hidden border-y border-white/[0.06] bg-[#131118]"
    >
      <div className="home-wrap">
        <div
          data-reveal
          className="mx-auto mb-[52px] max-w-[760px] text-center"
        >
          <p className="home-kicker justify-center">Programme and pricing</p>
          <h2 className="home-section-title">
            Know Exactly What <em>You Are Buying.</em>
          </h2>
          <p className="mx-auto mt-[22px] max-w-[620px] text-[15px] leading-[1.75] text-white/55">
            Both options teach the same six-stage AI ecommerce system. The
            difference is how much live support you receive and how the material
            is delivered.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <article
            data-reveal
            className="relative flex flex-col overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#17151E] p-7 shadow-[0_26px_70px_rgba(0,0,0,0.3)] md:p-9"
          >
            <img
              src={homeAssets.analyticsIcon}
              alt=""
              width={480}
              height={480}
              loading="lazy"
              decoding="async"
              className="pointer-events-none absolute -right-7 -top-7 w-36 opacity-75"
            />
            <div className="relative z-10 flex h-full flex-col">
              <span className="w-fit rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#C4A8FF]">
                Guided launch
              </span>
              <h3 className="mt-6 max-w-[70%] text-[23px] font-bold text-white">
                AI Ecom Command: Launch
              </h3>
              <div className="mt-4 flex items-end gap-3">
                <p className="font-serif text-[44px] leading-none text-white">
                  $2,500
                </p>
                <p className="pb-1 text-[13px] font-medium text-white/65">
                  USD · 6 weeks
                </p>
              </div>
              <p className="mt-5 text-[14px] leading-[1.7] text-white/58">
                One private 1-to-1 review call at the end of every week, with
                Telegram support, structured video lessons and practical
                resources throughout the six-week roadmap.
              </p>
              <div className="programme-support-summary">
                <strong>6 private calls</strong>
                <span>Weekly review + video lessons</span>
              </div>
              <ul className="mb-8 mt-7 space-y-3 border-t border-white/[0.08] pt-6">
                {launchIncluded.map(item => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[13px] leading-[1.55] text-white/68"
                  >
                    <span className="mt-0.5 text-[#B394F2]">
                      <Check />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://form.typeform.com/to/p3VexUDU"
                className="mt-auto pt-4 inline-flex min-h-14 items-center justify-center rounded-full border border-[#B394F2]/30 px-6 text-[14px] font-bold text-[#C4A8FF] transition-colors hover:bg-[#7B5BB5] hover:text-white"
              >
                Apply For Launch
              </a>
            </div>
          </article>

          <article
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            className="relative flex flex-col overflow-hidden rounded-[26px] border border-[#B394F2]/45 bg-[linear-gradient(145deg,rgba(88,62,141,0.42),#17151E_58%)] p-7 text-white shadow-[0_30px_80px_rgba(88,62,141,0.2)] md:p-9"
          >
            <img
              src={homeAssets.mentorIcon}
              alt=""
              width={480}
              height={480}
              loading="lazy"
              decoding="async"
              className="pointer-events-none absolute -right-7 -top-7 w-36 opacity-80"
            />
            <div className="relative z-10 flex h-full flex-col">
              <span className="w-fit rounded-full border border-[#B394F2]/30 bg-[#B394F2]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#C4A8FF]">
                Maximum live support
              </span>
              <h3 className="mt-6 max-w-[72%] text-[23px] font-bold">
                1-to-1 AI Ecommerce Mentorship
              </h3>
              <div className="mt-4 flex items-end gap-3">
                <p className="font-serif text-[44px] leading-none">$5,000</p>
                <p className="pb-1 text-[13px] font-medium text-white/65">
                  USD · 6 weeks
                </p>
              </div>
              <p className="mt-5 text-[14px] leading-[1.7] text-white/58">
                Three live one-to-one calls every week with Inder or Nail. No
                passive video library—your time is focused on direct teaching,
                implementation and feedback.
              </p>
              <div className="programme-support-summary">
                <strong>18 private calls</strong>
                <span>3 calls per week + live teaching</span>
              </div>
              <ul className="mb-8 mt-7 space-y-3 border-t border-white/[0.08] pt-6">
                {[
                  "3 live 1-to-1 mentor calls every week",
                  "No passive video lessons",
                  ...included,
                ].map(item => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[13px] leading-[1.55] text-white/70"
                  >
                    <span className="mt-0.5 text-[#B394F2]">
                      <Check />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/apply"
                className="btn-primary mt-auto min-h-14 justify-center"
              >
                Apply For A Fit Call
              </a>
            </div>
          </article>
        </div>

        <div
          data-reveal
          className="mt-7 flex flex-col gap-4 rounded-[20px] border border-white/[0.08] bg-white/[0.035] p-5 md:flex-row md:items-center md:justify-between md:gap-8 md:px-7"
        >
          <div>
            <p className="text-[13px] font-bold text-white">
              Budget beyond tuition
            </p>
            <p className="mt-1 text-[12px] leading-[1.65] text-white/55">
              You should have at least $1,000 available for the business itself.
              Advertising, Shopify, software, samples and other operating costs
              are separate from programme tuition.
            </p>
          </div>
          <a
            href="/curriculums"
            className="inline-flex min-h-11 shrink-0 items-center text-[12px] font-bold text-[#B394F2] hover:underline"
          >
            Compare both programmes →
          </a>
        </div>
      </div>
    </section>
  );
}
