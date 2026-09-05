import { useRef } from "react";
import { homeAssets } from "@/lib/homeAssets";

/**
 * Homepage visual direction: one editorial light evidence section that places
 * full Shopify proof beside long-form student interviews rather than reviews.
 */
const caseStudies = [
  {
    outcome: "$886,513.93",
    timeframe: "in 10 months",
    name: "George",
    videoId: "ZfX9pP9USYc",
    duration: "29 min interview",
    featured: true,
  },
  {
    outcome: "$125,393.34",
    timeframe: "in 90 days",
    name: "Student case study",
    videoId: "bIjuWVoDh3c",
    duration: "30 min interview",
  },
  {
    outcome: "€10,183.44",
    timeframe: "in 30 days",
    name: "Kevin",
    videoId: "h1UJkS8wao0",
    duration: "20 min interview",
  },
  {
    outcome: "$5,906.88",
    timeframe: "in 16 days",
    name: "Student case study",
    videoId: "Iflz2wBStEE",
    duration: "14 min interview",
  },
  {
    outcome: "£615.05",
    timeframe: "in 9 days",
    name: "Student case study",
    videoId: "lCtricipmDk",
    duration: "11 min interview",
  },
];

const PlayIcon = ({ large = false }: { large?: boolean }) => (
  <span
    className={`flex items-center justify-center rounded-full bg-white text-[#17151E] shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105 ${large ? "h-16 w-16" : "h-10 w-10"}`}
    aria-hidden="true"
  >
    <svg
      width={large ? 20 : 14}
      height={large ? 20 : 14}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  </span>
);

const ShopifyMark = () => (
  <svg
    width="20"
    height="23"
    viewBox="0 0 109.5 124.5"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      fill="#95BF47"
      d="M95.9 23.9c-.1-.6-.6-1-1.1-1-.5 0-9.3-.2-9.3-.2s-7.4-7.2-8.1-7.9c-.7-.7-2.2-.5-2.7-.3 0 0-1.4.4-3.7 1.1-.4-1.3-1-2.8-1.8-4.4-2.6-5-6.5-7.7-11.1-7.7-.3 0-.6 0-1 .1-.1-.2-.3-.3-.4-.5C54.7 1 52.1-.1 49 0c-6 .2-12 4.5-16.8 12.2-3.4 5.4-6 12.2-6.7 17.5-6.9 2.1-11.7 3.6-11.8 3.7-3.5 1.1-3.6 1.2-4 4.5C9.3 40.4 0 112.3 0 112.3l75.6 13.1 32.8-8.1S96 24.5 95.9 23.9z"
    />
    <path
      fill="#5E8E3E"
      d="M94.8 22.9c-.5 0-9.3-.2-9.3-.2s-7.4-7.2-8.1-7.9c-.3-.3-.6-.4-1-.5v111.1l32.8-8.1S96 24.5 95.9 23.9c-.1-.6-.6-1-1.1-1z"
    />
  </svg>
);

export default function TestimonialsSection() {
  const proofDialog = useRef<HTMLDialogElement>(null);
  const featured = caseStudies[0];
  const remaining = caseStudies.slice(1);

  return (
    <section
      id="results"
      className="home-section relative overflow-hidden border-t border-[#6C4AA9]/20 bg-[#F2EEF8] text-[#17131E]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(108,74,169,0.6),transparent)]" />
      <dialog
        ref={proofDialog}
        className="home-proof-dialog"
        aria-labelledby="proof-title"
        onClick={event => {
          if (event.target === event.currentTarget)
            proofDialog.current?.close();
        }}
      >
        <div className="home-proof-dialog-content">
          <header>
            <div>
              <h2 id="proof-title">The complete student dashboard</h2>
              <p>
                Student-provided · 29 Jul 2024–29 Jul 2025 · Sales, not profit
              </p>
            </div>
            <button
              type="button"
              autoFocus
              onClick={() => proofDialog.current?.close()}
              aria-label="Close student dashboard"
            >
              ✕
            </button>
          </header>
          <img
            src={homeAssets.shopifyProof}
            alt="Full Shopify dashboard: $7,042,738.43 total sales over 365 days"
            width={848}
            height={1600}
            loading="lazy"
          />
        </div>
      </dialog>
      <div className="home-wrap">
        <div
          data-reveal
          className="mb-12 grid items-end gap-7 md:grid-cols-[1fr_0.7fr]"
        >
          <div>
            <p className="home-kicker !text-[#6C4AA9] before:!bg-[#6C4AA9]/50">
              Student evidence
            </p>
            <h2 className="home-section-title max-w-[720px] !text-[#17131E]">
              Watch The Students{" "}
              <em className="!text-[#6C4AA9]">Tell You Themselves.</em>
            </h2>
          </div>
          <p className="max-w-[470px] text-[15px] leading-[1.75] text-[#514A5B] md:justify-self-end">
            Not anonymous one-line reviews. These are long-form conversations
            with students at different stages—from their first sales to
            six-figure growth.
          </p>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-2">
          <figure
            data-reveal
            className="flex min-h-[430px] flex-col overflow-hidden rounded-[22px] border border-[#6C4AA9]/15 bg-white shadow-[0_24px_60px_rgba(31,22,45,0.14)]"
          >
            <figcaption className="flex items-center justify-between gap-3 border-b border-[#17131E]/[0.07] px-[18px] py-4">
              <div className="flex items-center gap-2.5">
                <ShopifyMark />
                <div>
                  <p className="text-[12px] font-bold text-[#17131E]">
                    Shopify dashboard · 365 days
                  </p>
                  <p className="mt-0.5 text-[11px] text-[#6E6879]">
                    Student-provided · 29 Jul 2024–29 Jul 2025
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => proofDialog.current?.showModal()}
                className="proof-expand-button"
                aria-haspopup="dialog"
              >
                Expand proof ↗
              </button>
            </figcaption>
            <div className="relative min-h-[340px] flex-1 bg-[#f6f6f7]">
              <img
                src={homeAssets.shopifyProof}
                alt="Student-provided Shopify dashboard showing $7,042,738.43 total sales over the last 365 days"
                width={848}
                height={1600}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
            <p className="border-t border-[#17131E]/[0.07] px-[18px] py-3 text-[11px] leading-[1.5] text-[#6E6879]">
              Sales are not profit. Individual outcomes vary by product, budget,
              skill and execution.
            </p>
          </figure>

          <a
            data-reveal
            href={`https://www.youtube.com/watch?v=${featured.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${featured.name}: ${featured.outcome} ${featured.timeframe}`}
            className="group relative min-h-[430px] overflow-hidden rounded-[22px] bg-[#17151E] text-white shadow-[0_24px_60px_rgba(31,22,45,0.14)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_36px_80px_rgba(31,22,45,0.24)]"
          >
            <img
              src={`https://i.ytimg.com/vi/${featured.videoId}/hqdefault.jpg`}
              alt=""
              width={480}
              height={360}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,21,30,0.1)_0%,rgba(23,21,30,0.25)_45%,#17151E_100%)]" />
            <span className="absolute left-[22px] top-[22px] rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-white/75 backdrop-blur-md">
              Full student interview
            </span>
            <span className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
              <PlayIcon large />
            </span>
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="text-[12px] font-medium text-white/55">
                {featured.name} · {featured.duration}
              </p>
              <p className="mt-2.5 font-serif text-[clamp(40px,4.4vw,56px)] leading-none tracking-[-0.02em]">
                {featured.outcome}
              </p>
              <p className="mt-2.5 text-[14px] font-medium text-[#C4A8FF]">
                {featured.timeframe}
              </p>
            </div>
          </a>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {remaining.map((study, index) => (
            <a
              key={study.videoId}
              data-reveal
              style={
                { "--reveal-delay": `${index * 60}ms` } as React.CSSProperties
              }
              href={`https://www.youtube.com/watch?v=${study.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${study.name}: ${study.outcome} ${study.timeframe}`}
              className="group relative aspect-[4/3] min-h-[230px] overflow-hidden rounded-[20px] bg-[#17151E] text-white shadow-[0_20px_50px_rgba(31,22,45,0.12)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(31,22,45,0.22)]"
            >
              <img
                src={`https://i.ytimg.com/vi/${study.videoId}/hqdefault.jpg`}
                alt=""
                width={480}
                height={360}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,21,30,0.1)_0%,rgba(23,21,30,0.3)_40%,#17151E_100%)]" />
              <span className="absolute right-4 top-4">
                <PlayIcon />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] font-medium text-white/55">
                  {study.name} · {study.duration}
                </p>
                <p className="mt-2 font-serif text-[clamp(28px,2.6vw,34px)] leading-none tracking-[-0.02em]">
                  {study.outcome}
                </p>
                <p className="mt-1.5 text-[13px] font-medium text-[#C4A8FF]">
                  {study.timeframe}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div
          data-reveal
          className="mt-7 flex flex-col gap-3 border-t border-[#6C4AA9]/15 pt-[22px] md:flex-row md:items-center md:justify-between md:gap-8"
        >
          <p className="max-w-[800px] text-[12px] leading-[1.7] text-[#645C6C]">
            These videos feature students from Kamil Sattar's ecommerce
            mentoring programmes. Programme structures have changed over time.
            Figures discussed are sales unless profit is explicitly stated, and
            they are not guarantees of future performance.
          </p>
          <a
            href="/earnings-disclaimer"
            className="inline-flex min-h-11 shrink-0 items-center border-b border-[#6C4AA9]/35 text-[12px] font-bold text-[#6C4AA9] hover:border-[#6C4AA9]"
          >
            Read earnings disclaimer →
          </a>
        </div>
      </div>
    </section>
  );
}
