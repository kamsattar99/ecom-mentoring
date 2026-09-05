import { useEffect, useRef, useState } from "react";
import { HOME_FEATURES, useReducedMotion } from "@/hooks/useHomepageMotion";
import { homeAssets } from "@/lib/homeAssets";

/**
 * Homepage signature direction: an editorial copy stack suspended over a
 * cinematic commerce environment, anchored by one tactile Shopify proof card.
 */
const FINAL_SALES = 7_042_738.43;

const ArrowIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const PlayIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ShopifyIcon = () => (
  <svg
    width="44"
    height="50"
    viewBox="0 0 109.5 124.5"
    aria-hidden="true"
    className="h-[42px] w-[38px] sm:h-[50px] sm:w-[44px]"
  >
    <path
      fill="#95BF47"
      d="M95.9 23.9c-.1-.6-.6-1-1.1-1-.5 0-9.3-.2-9.3-.2s-7.4-7.2-8.1-7.9c-.7-.7-2.2-.5-2.7-.3 0 0-1.4.4-3.7 1.1-.4-1.3-1-2.8-1.8-4.4-2.6-5-6.5-7.7-11.1-7.7-.3 0-.6 0-1 .1-.1-.2-.3-.3-.4-.5C54.7 1 52.1-.1 49 0c-6 .2-12 4.5-16.8 12.2-3.4 5.4-6 12.2-6.7 17.5-6.9 2.1-11.7 3.6-11.8 3.7-3.5 1.1-3.6 1.2-4 4.5C9.3 40.4 0 112.3 0 112.3l75.6 13.1 32.8-8.1S96 24.5 95.9 23.9z"
    />
    <path
      fill="#5E8E3E"
      d="M94.8 22.9c-.5 0-9.3-.2-9.3-.2s-7.4-7.2-8.1-7.9c-.3-.3-.6-.4-1-.5v111.1l32.8-8.1S96 24.5 95.9 23.9c-.1-.6-.6-1-1.1-1z"
    />
    <path
      fill="#FFF"
      d="M58.1 39.6l-3.8 14.3s-4.3-1.9-9.3-1.6c-7.4.5-7.5 5.1-7.4 6.3.4 6.4 17.2 7.8 18.1 22.7.7 11.8-6.2 19.8-16.3 20.4-12.1.8-18.7-6.4-18.7-6.4l2.6-10.9s6.7 5 12 4.7c3.5-.2 4.8-3.1 4.6-5.1-.5-8.3-14.2-7.8-15.1-21.5-.7-11.5 6.8-23.1 23.5-24.2 6.5-.4 9.8 1.3 9.8 1.3z"
    />
  </svg>
);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  const [sales, setSales] = useState(FINAL_SALES);
  const reducedMotion = useReducedMotion();
  const motionEnabled = HOME_FEATURES.motion && !reducedMotion;

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!motionEnabled) {
      setSales(FINAL_SALES);
      return;
    }

    let animationFrame = 0;
    const timeout = window.setTimeout(() => {
      const start = performance.now();
      const duration = 1250;
      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setSales(FINAL_SALES * eased);
        if (progress < 1) animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
    }, 820);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [motionEnabled]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !motionEnabled) return;

    const target = { x: 0, y: 0, scroll: 0 };
    const current = { x: 0, y: 0, scroll: 0 };
    let frame = 0;

    const render = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      current.scroll += (target.scroll - current.scroll) * 0.12;

      const mobileFactor = window.innerWidth <= 860 ? 0.4 : 1;
      const pointerX = current.x * mobileFactor;
      const pointerY = current.y * mobileFactor;
      const scroll = current.scroll * mobileFactor;

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate3d(${pointerX * 3}px, ${scroll * 36}px, 0) scale(${1 + scroll * 0.08})`;
      }
      if (gridRef.current) {
        gridRef.current.style.transform = `translate3d(${pointerX * 5}px, ${scroll * 60}px, 0)`;
      }
      if (copyRef.current) {
        copyRef.current.style.transform = `translate3d(${pointerX * 2}px, ${scroll * 48}px, 0)`;
        copyRef.current.style.opacity = `${1 - scroll * 0.75}`;
      }
      if (bannerRef.current) {
        const tiltX =
          HOME_FEATURES.heroTilt && window.innerWidth > 860
            ? pointerY * -3.5
            : 0;
        const tiltY =
          HOME_FEATURES.heroTilt && window.innerWidth > 860
            ? pointerX * 4.5
            : 0;
        bannerRef.current.style.transform = `translate3d(0, ${scroll * -44}px, 0) scale(${1 + scroll * 0.06}) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        bannerRef.current.style.setProperty(
          "--highlight-x",
          `${50 + pointerX * 18}%`
        );
        bannerRef.current.style.setProperty(
          "--highlight-y",
          `${30 + pointerY * 18}%`
        );
      }
      section
        .querySelectorAll<HTMLElement>("[data-hero-object]")
        .forEach(object => {
          const depth = Number(object.dataset.depth ?? 8);
          object.style.transform = `translate3d(${pointerX * depth}px, ${pointerY * depth + scroll * depth * 1.2}px, 0)`;
        });

      const unsettled =
        Math.abs(target.x - current.x) > 0.002 ||
        Math.abs(target.y - current.y) > 0.002 ||
        Math.abs(target.scroll - current.scroll) > 0.002;
      frame = unsettled ? requestAnimationFrame(render) : 0;
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (window.innerWidth <= 860) return;
      const rect = section.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      schedule();
    };
    const onPointerLeave = () => {
      target.x = 0;
      target.y = 0;
      schedule();
    };
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      target.scroll = Math.min(
        Math.max(-rect.top / (section.offsetHeight * 0.95), 0),
        1
      );
      schedule();
    };

    section.addEventListener("pointermove", onPointerMove, { passive: true });
    section.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [motionEnabled]);

  const formattedSales = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(sales);

  return (
    <section
      ref={sectionRef}
      className="home-hero relative z-[3] flex min-h-[100svh] flex-col items-center overflow-hidden bg-[#0F0E13] px-0 pb-[clamp(56px,8vh,120px)] pt-[clamp(112px,12vh,140px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden bg-[#0F0E13]"
      >
        <div
          ref={backgroundRef}
          className="absolute -inset-[3%] will-change-transform"
        >
          <picture>
            <source
              media="(max-width: 860px)"
              srcSet={homeAssets.heroEnvironmentMobile}
            />
            <img
              src={homeAssets.heroEnvironment}
              alt=""
              width={1920}
              height={1072}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover [object-position:center_78%]"
            />
          </picture>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0F0E13_0%,rgba(15,14,19,0.9)_18%,rgba(15,14,19,0.35)_46%,rgba(15,14,19,0)_70%)]" />
        </div>
        <div
          ref={gridRef}
          className="home-grid-overlay absolute inset-0 will-change-transform"
        />
        <div className="absolute -bottom-[18%] -left-[10%] -right-[10%] h-[55%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(123,91,181,0.42)_0%,rgba(88,62,141,0.14)_40%,transparent_70%)] blur-2xl" />
        <div className="home-grain absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_45%,transparent_55%,rgba(15,14,19,0.7)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(242,238,248,0)_0%,rgba(242,238,248,0.35)_60%,#F2EEF8_100%)]" />
      </div>

      <div
        ref={copyRef}
        className="relative z-[4] flex w-[min(calc(100%-40px),900px)] max-w-[calc(100%-40px)] flex-col items-center text-center will-change-transform"
      >
        <div
          className={`hero-entry mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#B394F2]/30 bg-[#0F0E13]/55 py-2 pl-2.5 pr-3.5 backdrop-blur-md ${entered ? "is-entered" : ""}`}
          style={{ transitionDelay: "220ms" }}
        >
          <span className="home-status-pulse h-[7px] w-[7px] rounded-full bg-[#B394F2] shadow-[0_0_0_4px_rgba(179,148,242,0.18)]" />
          <span className="text-[11px] font-semibold tracking-[0.04em] text-white/80 sm:text-[12px]">
            6-week, hands-on AI ecommerce mentorship
          </span>
        </div>

        <h1 className="mb-6 font-serif text-[clamp(44px,6.8vw,86px)] font-normal leading-[0.96] tracking-[-0.035em] text-white [text-shadow:0_20px_60px_rgba(0,0,0,0.5)]">
          <span className="block overflow-hidden pb-[0.12em] -mb-[0.06em]">
            <span
              className={`hero-line ${entered ? "is-entered" : ""}`}
              style={{ transitionDelay: "320ms" }}
            >
              Stop Guessing
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.12em] -mb-[0.06em]">
            <span
              className={`hero-line ${entered ? "is-entered" : ""}`}
              style={{ transitionDelay: "410ms" }}
            >
              What To <em className="italic text-[#B394F2]">Test Next.</em>
            </span>
          </span>
        </h1>

        <p
          className={`hero-entry mb-3.5 max-w-[640px] text-[clamp(16px,1.4vw,19px)] leading-[1.6] text-white/80 ${entered ? "is-entered" : ""}`}
          style={{ transitionDelay: "500ms" }}
        >
          Get one-to-one feedback on your products, store, creatives and ads
          from Inder or Nail—former students who each built seven-figure
          dropshipping businesses.
        </p>
        <p
          className={`hero-entry mb-7 max-w-[560px] text-[14px] leading-[1.7] text-white/65 ${entered ? "is-entered" : ""}`}
          style={{ transitionDelay: "560ms" }}
        >
          Your mentor: Inder or Nail. Kamil Sattar designs the system, trains
          the mentors and oversees programme quality.
        </p>

        <div className="hero-support-strip" aria-label="Programme at a glance">
          <span>
            <strong>1-to-1</strong> Private mentor calls
          </span>
          <span>
            <strong>6 weeks</strong> A structured roadmap
          </span>
          <span>
            <strong>Your store</strong> Practical feedback
          </span>
        </div>

        <div
          className={`hero-entry flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center ${entered ? "is-entered" : ""}`}
          style={{ transitionDelay: "620ms" }}
        >
          <a
            href="/apply"
            className="btn-primary justify-center px-8 py-[17px] text-[15px] font-semibold"
          >
            Apply For A Fit Call <ArrowIcon />
          </a>
          <a
            href="#results"
            className="btn-ghost justify-center bg-[#0F0E13]/40 px-6 py-4 backdrop-blur-md"
          >
            <PlayIcon /> Watch Student Interviews
          </a>
        </div>
        <p
          className={`hero-entry mt-[18px] text-[12px] leading-[1.6] text-white/45 ${entered ? "is-entered" : ""}`}
          style={{ transitionDelay: "700ms" }}
        >
          Around 2 minutes to apply · Reviewed before a call is offered ·
          Results are not guaranteed
        </p>

        <div
          className={`hero-entry mt-5 grid w-full max-w-[520px] grid-cols-3 gap-3 border-t border-white/10 pt-4 ${entered ? "is-entered" : ""}`}
          style={{ transitionDelay: "760ms" }}
        >
          {[
            ["600K+", "YouTube community"],
            ["5", "Full student interviews"],
            ["2", "Seven-figure mentors"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="font-serif text-[22px] leading-none text-white sm:text-[26px]">
                {value}
              </p>
              <p className="mt-1.5 text-[9px] leading-[1.3] text-white/45 sm:text-[11px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-[3] mt-auto flex w-[min(calc(100%-32px),1180px)] justify-center pt-[clamp(36px,6vh,64px)]">
        {HOME_FEATURES.heroObjects && (
          <>
            <img
              data-hero-object
              data-depth="10"
              src={homeAssets.boxIcon}
              alt=""
              width={900}
              height={900}
              decoding="async"
              className="home-desktop-only pointer-events-none absolute bottom-[-8%] left-[2%] z-[2] w-[clamp(150px,16%,210px)] will-change-transform"
            />
            <img
              data-hero-object
              data-depth="12"
              src={homeAssets.adsIcon}
              alt=""
              width={480}
              height={480}
              decoding="async"
              className="home-desktop-only pointer-events-none absolute bottom-[-14%] left-[13%] z-[6] w-[clamp(80px,8%,110px)] will-change-transform"
            />
            <img
              data-hero-object
              data-depth="8"
              src={homeAssets.aiIcon}
              alt=""
              width={480}
              height={480}
              decoding="async"
              className="home-desktop-only pointer-events-none absolute right-[1%] top-[-4%] z-[6] w-[clamp(110px,13%,160px)] will-change-transform"
            />
          </>
        )}

        <div
          ref={bannerRef}
          className="w-[min(92vw,760px)] max-w-full [transform-style:preserve-3d] will-change-transform"
        >
          <div
            className={`hero-banner-entry ${entered ? "is-entered" : ""}`}
            style={{ transitionDelay: "560ms" }}
          >
            <a
              href="#results"
              aria-label="View the full student Shopify result: $7,042,738.43 total store sales over 365 days"
              className="home-glass group relative block overflow-hidden rounded-[26px] text-[#17131E] no-underline transition-[transform,background,box-shadow] duration-500 [transform:perspective(1400px)] hover:-translate-y-2 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#C4A8FF]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--highlight-x,30%)_var(--highlight-y,20%),rgba(255,255,255,0.76),transparent_56%)] opacity-50 transition-opacity duration-300 group-hover:opacity-80" />
              <div className="relative flex min-h-[140px] flex-wrap items-center gap-4 px-[clamp(18px,2.6vw,32px)] py-[clamp(18px,2.2vw,26px)] sm:gap-7">
                <div className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[18px] border border-[#17131E]/10 bg-white shadow-[0_10px_24px_rgba(23,19,30,0.1)] sm:h-[76px] sm:w-[76px] sm:rounded-[20px]">
                  <ShopifyIcon />
                  <span
                    aria-hidden="true"
                    className="home-status-pulse absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#95BF47]"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="m-0 text-[10px] font-bold uppercase tracking-[0.14em] text-[#6E6879] sm:text-[11px]">
                    Shopify · Student result
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-0">
                    <span
                      aria-label="$7,042,738.43"
                      className="whitespace-nowrap font-serif text-[clamp(28px,7vw,54px)] leading-none tracking-[-0.03em] text-[#17131E] tabular-nums"
                    >
                      {formattedSales}
                    </span>
                    <span className="whitespace-nowrap text-[14px] font-semibold text-[#3C3646] sm:text-[17px]">
                      Total Store Sales
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] leading-[1.3] text-[#6E6879] sm:text-[12px]">
                    Student-provided · 365 days
                  </p>
                </div>
                <span className="ml-auto inline-flex min-w-full items-center justify-end gap-1.5 whitespace-nowrap text-[11px] font-bold text-[#5E8E3E] opacity-80 transition-opacity duration-300 group-hover:opacity-100 sm:min-w-0 sm:self-end sm:text-[12px]">
                  View Full Student Result <ArrowIcon />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className={`hero-entry home-desktop-only absolute bottom-8 right-10 z-[5] flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45 ${entered ? "is-entered" : ""}`}
        style={{ transitionDelay: "1400ms" }}
      >
        <span className="home-scroll-pulse block h-11 w-px bg-[linear-gradient(180deg,transparent,#B394F2)]" />{" "}
        Scroll
      </div>
    </section>
  );
}
