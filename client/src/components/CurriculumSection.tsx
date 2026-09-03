import { useEffect, useRef, useState } from "react";
import { curriculumIcons } from "@/lib/homeAssets";

/**
 * Homepage visual direction: a six-stage decision roadmap. Desktop readers get
 * a sticky visual navigator; mobile readers get the complete linear curriculum.
 */
const stages = [
  { title: "AI Product Research & Validation", week: "Week 01", description: "Use AI workflows, trend tools and competitor analysis to find products with real demand before spending money on ads.", bullets: ["AI-powered product validation", "Competitor analysis with AI tools", "Trend spotting & market timing", "Structured research frameworks"] },
  { title: "AI Store Build & Conversion", week: "Week 02", description: "Build high-converting Shopify stores faster using AI-assisted page building, copywriting and conversion frameworks.", bullets: ["AI-assisted store buildout", "Product page conversion structure", "Trust signals & checkout flow", "AI copywriting workflows"] },
  { title: "AI Creatives & Paid Ads", week: "Week 03", description: "Launch, test and scale campaigns using AI-assisted UGC scripts, static ad concepts, hook testing, Meta/TikTok ad angles and creative iteration.", bullets: ["AI-assisted UGC scripts & static ad concepts", "Hook testing & ad angle research with AI", "Budget allocation & testing rules", "When to kill, test or scale"] },
  { title: "Scaling & Optimisation", week: "Week 04", description: "Go from $100/day to $1,000+/day profitably with horizontal and vertical scaling strategies that protect your margins.", bullets: ["Horizontal & vertical scaling", "CBO & lookalike strategies", "Margin protection at scale", "AI-assisted data analysis"] },
  { title: "AI Operations & Automation", week: "Week 05", description: "Build AI support agents trained on your store policies, FAQs, product details, shipping rules and customer objections. Automate fulfilment, set up email flows and create systems that run without you.", bullets: ["AI support agents for your store", "Email & SMS automation", "Fulfilment & operations SOPs", "AI tools for delegation & ops"] },
  { title: "Long-Term Brand Growth", week: "Week 06", description: "Transition from a product store to a real brand with retention marketing, customer lifetime value and AI-powered content systems.", bullets: ["Retention & repeat customers", "Customer lifetime value", "AI content & influencer strategy", "Building a sellable asset"] },
];

const Check = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>;

export default function CurriculumSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveIndex(Number((visible.target as HTMLElement).dataset.stageIndex ?? 0));
      },
      { rootMargin: "-22% 0px -42% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    rowRefs.current.forEach((row) => row && observer.observe(row));
    return () => observer.disconnect();
  }, []);

  const active = stages[activeIndex];

  return (
    <section id="curriculum" className="home-section relative overflow-visible bg-[#0F0E13]">
      <div className="home-wrap relative">
        <div data-reveal className="mb-[52px] max-w-[760px]">
          <p className="home-kicker">Six-week roadmap</p>
          <h2 className="home-section-title">From Product Research To <em>Repeatable Ecommerce Decisions</em></h2>
          <p className="mt-[22px] max-w-[620px] text-[15px] leading-[1.75] text-white/55 md:text-[16px]">Each stage gives you a clear focus for the week, while your mentor applies the framework to your actual products, store, creatives and data.</p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_360px] xl:gap-20">
          <div className="relative">
            <div className="absolute bottom-0 left-7 top-0 hidden w-px bg-[linear-gradient(180deg,rgba(179,148,242,0.55),rgba(179,148,242,0.08))] lg:block" />
            <div className="space-y-4 lg:space-y-8">
              {stages.map((stage, index) => {
                const activeRow = activeIndex === index;
                return (
                  <article
                    key={stage.title}
                    ref={(node) => { rowRefs.current[index] = node; }}
                    data-stage-index={index}
                    data-reveal
                    className={`group relative grid gap-5 rounded-[24px] border bg-[#17151E] p-5 transition-[opacity,transform,border-color,background] duration-500 lg:grid-cols-[56px_minmax(0,1fr)_84px] lg:items-start lg:bg-transparent lg:p-0 lg:pr-1 ${activeRow ? "border-[#B394F2]/35 lg:opacity-100" : "border-white/[0.08] lg:border-transparent lg:opacity-[0.38]"}`}
                    style={{ "--reveal-delay": `${index * 45}ms` } as React.CSSProperties}
                  >
                    <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-[#17151E] font-serif text-[18px] transition-colors duration-500 ${activeRow ? "border-[#B394F2]/55 text-[#C4A8FF]" : "border-white/15 text-white/55"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="min-w-0 lg:py-1">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <h3 className="max-w-[520px] text-[19px] font-semibold text-white md:text-[21px]">{stage.title}</h3>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#B394F2] lg:hidden">{stage.week}</span>
                      </div>
                      <p className="mt-3 max-w-[610px] text-[14px] leading-[1.7] text-white/58">{stage.description}</p>
                      <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        {stage.bullets.map((bullet) => <div key={bullet} className="flex items-start gap-2.5 text-[12px] leading-[1.55] text-white/65"><span className="mt-0.5 shrink-0 text-[#B394F2]"><Check /></span>{bullet}</div>)}
                      </div>
                    </div>
                    <div className="flex items-start justify-end">
                      <img src={curriculumIcons[index]} alt="" width={480} height={480} loading="lazy" decoding="async" className={`h-auto w-[78px] transition-[transform,opacity] duration-500 ${activeRow ? "scale-100 opacity-100" : "scale-[0.86] opacity-75"}`} />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside data-reveal className="sticky top-[130px] hidden overflow-hidden rounded-[26px] border border-[#B394F2]/20 bg-[linear-gradient(150deg,rgba(88,62,141,0.35),#17151E_62%)] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.38)] lg:block" aria-live="polite">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">You are looking at</p>
            <div className="mt-3 flex items-end justify-between gap-4">
              <div>
                <p className="font-serif text-[44px] leading-none text-[#C4A8FF]">Week {String(activeIndex + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-[18px] font-semibold leading-[1.35] text-white">{active.title}</h3>
              </div>
            </div>
            <div className="relative mt-3 flex min-h-[220px] items-center justify-center">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(123,91,181,0.25),transparent_66%)] blur-xl" />
              <img key={activeIndex} src={curriculumIcons[activeIndex]} alt="" width={480} height={480} decoding="async" className="relative z-10 h-auto w-[190px] [animation:curriculum-icon-in_500ms_cubic-bezier(0.22,1,0.36,1)]" />
            </div>
            <p className="border-t border-white/[0.08] pt-5 text-[13px] leading-[1.65] text-white/55">{active.description}</p>
          </aside>
        </div>

        <p data-reveal className="pt-10 text-center text-[13px] italic text-[#B394F2]/70">AI helps you execute faster. Your mentor helps you decide what deserves to be executed.</p>
      </div>
    </section>
  );
}
