import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/* ─── CENTRAL CONFIG ─── */
const CONFIG = {
  productName: "AI Ecom Command: Launch",
  price: "$2,500",
  duration: "6 Weeks",
  liveCalls: "1 Call / Week",
  applyLink: "https://form.typeform.com/to/p3VexUDU",
  premiumLink: "/learn-more",
  credibility: {
    entrepreneurs: "600,000+",
    mentors: "2",
    duration: "6 Weeks",
  },
};

const CURRICULUM = [
  {
    week: "01",
    title: "AI Product Research",
    delivery: "End-of-week review call",
    description:
      "Learn to use AI, trend signals, competitor analysis, and validation frameworks to identify products and angles worth testing.",
    outcome:
      "By the end of this week, you will have a validated product shortlist and a clear angle to test — without spending money on ads first.",
  },
  {
    week: "02",
    title: "AI Store Building",
    delivery: "End-of-week review call",
    description:
      "Build a focused Shopify store using AI-assisted structure, copy, product pages, offer logic, and conversion principles.",
    outcome:
      "By the end of this week, you will have a launch-ready Shopify store with optimised product pages, trust elements, and conversion logic in place.",
  },
  {
    week: "03",
    title: "AI Creatives & Ad Launch",
    delivery: "End-of-week review call",
    description:
      "Create ad concepts, hooks, scripts, and creatives with AI, then turn them into a structured campaign launch plan.",
    outcome:
      "By the end of this week, you will have a library of AI-generated ad creatives and a structured campaign ready to launch on Meta or TikTok.",
  },
  {
    week: "04",
    title: "Scaling Ads Intelligently",
    delivery: "End-of-week review call",
    description:
      "Learn how to read the right signals, improve what is working, control spend, and approach ad scaling with a system.",
    outcome:
      "By the end of this week, you will have a scaling framework to identify winners, cut losers, and allocate budget based on data — not guesswork.",
  },
  {
    week: "05",
    title: "Store Automation Systems",
    delivery: "End-of-week review call",
    description:
      "Set up the foundations for a less chaotic operation using AI and automation across repetitive store and customer workflows.",
    outcome:
      "By the end of this week, you will have automated order processing, customer support flows, and operational SOPs saving you hours each week.",
  },
  {
    week: "06",
    title: "Building a Real Brand",
    delivery: "End-of-week review call",
    description:
      "Move beyond a disposable store by shaping positioning, trust, creative consistency, and the foundations of a brand customers recognise.",
    outcome:
      "By the end of this week, you will have a defined brand direction, visual identity guidelines, and a content plan for long-term customer trust.",
  },
];

const DELIVERABLES = [
  {
    title: "Product Research System",
    description: "A repeatable AI-powered approach to finding and validating products before spending on ads.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: "Launch-Ready Shopify Store",
    description: "A structured, conversion-optimised store built with AI-assisted copy, pages, and offer logic.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "AI Creative & Ad Library",
    description: "A bank of AI-generated hooks, scripts, static ads, and video concepts ready for campaign testing.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect width="18" height="18" x="3" y="3" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
  },
  {
    title: "Ad Launch Framework",
    description: "A structured system for launching, testing, reading signals, and scaling campaigns with confidence.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Automation Foundations",
    description: "AI-powered workflows for order processing, customer support, and repetitive operational tasks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Brand Direction & Identity",
    description: "A defined positioning, visual identity, and content plan that moves you beyond a disposable store.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const FAQS = [
  {
    q: "Who is AI Ecom Command: Launch for?",
    a: "It is designed for beginners and early-stage ecommerce founders who want a structured path to launch without spending $5,000 on three one-to-one calls every week. It is the better-value route if you can follow lessons, implement independently between calls, and use one focused private review at the end of each week.",
  },
  {
    q: "Do I need ecommerce experience?",
    a: "No prior ecommerce experience is required. The program is built to take you from zero to a launched, operational store. What matters is your willingness to show up, implement, and follow the system.",
  },
  {
    q: "How are the live calls delivered?",
    a: "One private 1-to-1 call is delivered via Zoom at the end of every week. The purpose is to review what you implemented, check your progress, resolve blockers and set clear priorities for the following week. Calls are recorded so you can revisit the guidance.",
  },
  {
    q: "What happens in Weeks 5 and 6?",
    a: "Weeks 5 and 6 remain implementation-focused: you follow the structured guides to set up automation systems and build your brand foundations. Telegram support continues, and each week still ends with a private 1-to-1 review call to check the work and set your next priorities.",
  },
  {
    q: "Will I need additional budget for Shopify, apps, products, or advertising?",
    a: "Yes. Tuition does not include the cost of running your business. Beyond the $2,500 programme fee, you should budget for Shopify, apps, product samples and advertising. We recommend keeping at least $500–$1,000 available for initial ad testing, although the amount required varies by product and strategy. If paying the tuition would leave you with no testing budget, you should wait rather than stretch yourself.",
  },
  {
    q: "Is this one-to-one mentoring?",
    a: "Yes. Launch includes one private 1-to-1 review call at the end of every week, Telegram support throughout the six weeks, video lessons, recordings and structured resources. The $5,000 route increases the frequency to three one-to-one calls every week and provides more intensive personalised review and accountability.",
  },
  {
    q: "Why can Launch be the better option than the $5,000 programme?",
    a: "Both routes teach the same core AI ecommerce system over six weeks. Launch costs $2,500 and includes one private end-of-week review every week, Telegram support, lessons and structured resources. Premium costs $5,000 because it increases the frequency to three one-to-one calls every week with more intensive personalised reviews. If budget matters and one focused private call per week is enough for you to keep implementing, Launch can be the smarter first investment because it leaves more capital available for the business itself.",
  },
  {
    q: "What am I giving up by choosing Launch?",
    a: "You are giving up the frequency and privacy of intensive one-to-one mentoring. You will not receive three private calls every week or the same level of ongoing personal review. You are not giving up the six-week roadmap, the implementation curriculum, live guidance, recordings or practical resources.",
  },
  {
    q: "When should I choose the $5,000 Premium programme instead?",
    a: "Choose Premium if you want close one-to-one accountability, frequent personalised feedback and direct reviews—and paying the higher tuition will not reduce the budget you need to operate and test your store. Premium buys more mentor access; it does not buy guaranteed results.",
  },
  {
    q: "Do you guarantee results?",
    a: "No. Results depend entirely on your execution, product selection, budget, skill, and market conditions. We provide the system, structure, and live guidance — but outcomes are determined by what you do with them. We do not make income claims or guarantee profitability.",
  },
];

/* ─── PAGE COMPONENT ─── */
export default function Launch() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Sticky Header */}
      <LaunchHeader />
      {/* Hero */}
      <HeroSection />
      {/* Why Launch */}
      <PositioningSection />
      {/* Programme at a glance */}
      <GlanceSection />
      {/* Curriculum */}
      <CurriculumTimeline />
      {/* Deliverables */}
      <DeliverablesSection />
      {/* Who this is for */}
      <QualificationSection />
      {/* Honest programme comparison */}
      <PremiumRouteSection />
      {/* Credibility */}
      <CredibilitySection />
      {/* FAQs */}
      <FAQsSection />
      {/* Final CTA */}
      <FinalCTASection />
      {/* Footer */}
      <LaunchFooter />
    </div>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 px-4 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] pointer-events-none opacity-60"
        style={{ background: "radial-gradient(ellipse, rgba(123,91,181,0.22) 0%, transparent 60%)" }}
      />
      <div className="relative max-w-[1100px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Pill */}
            <div className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-medium"
                style={{
                  border: "1px solid rgba(155,126,219,0.35)",
                  background: "rgba(88,62,141,0.12)",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#9B7EDB] animate-pulse" />
                The budget-conscious route · $2,500
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-white mb-6 leading-[1.08]"
              style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(34px, 5vw, 58px)" }}
            >
              Get The System. <em className="italic text-[#B394F2]">Keep More Budget</em> For Testing.
            </h1>

            {/* Supporting copy */}
            <p className="text-[16px] md:text-[17px] leading-[1.7] mb-8 max-w-[560px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              Launch gives you the same core six-week AI ecommerce roadmap at half the tuition of Premium. You get one private 1-to-1 review call at the end of every week, Telegram support, video lessons, recordings and practical resources—ideal if you can implement between sessions and want more capital left for the business itself.
            </p>

            {/* Stat block */}
            <div className="flex items-center gap-6 mb-8">
              <div className="text-center">
                <p className="text-white text-[28px] md:text-[32px] font-bold tracking-tight">{CONFIG.price}</p>
                <p className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>Programme tuition</p>
              </div>
              <div className="w-px h-12" style={{ background: "rgba(255,255,255,0.12)" }} />
              <div className="text-center">
                <p className="text-white text-[28px] md:text-[32px] font-bold tracking-tight">{CONFIG.duration}</p>
                <p className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>Duration</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href={CONFIG.applyLink} className="btn-primary w-full justify-center text-[15px] sm:w-auto">
                Apply For Launch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              Tuition is separate from business costs. Keep at least $500–$1,000 available for initial ad testing.
            </p>
          </div>

          {/* Right: Honest price comparison */}
          <div className="relative">
            <div
              className="absolute -inset-5 rounded-[32px] opacity-60 blur-2xl"
              style={{ background: "linear-gradient(145deg, rgba(123,91,181,0.28), transparent 65%)" }}
            />
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#15131B] p-5 sm:p-7 shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#B394F2]">Choose by support level</p>
              <h2 className="mt-3 font-serif text-[30px] leading-[1.05] text-white sm:text-[36px]">What the extra $2,500 actually buys.</h2>

              <div className="mt-7 space-y-3">
                <div className="rounded-[16px] border border-[#9B7EDB]/35 bg-[#583E8D]/18 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#B394F2]">Launch</p>
                      <p className="mt-1 text-[13px] leading-[1.5] text-white/58">Core system + weekly private 1-to-1 review</p>
                    </div>
                    <p className="text-[22px] font-bold text-white">$2,500</p>
                  </div>
                </div>

                <div className="rounded-[16px] border border-white/8 bg-white/[0.025] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/46">Premium</p>
                      <p className="mt-1 text-[13px] leading-[1.5] text-white/46">Intensive one-to-one access and reviews</p>
                    </div>
                    <p className="text-[22px] font-bold text-white/68">$5,000</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-[16px] bg-emerald-400/[0.07] p-4 ring-1 ring-inset ring-emerald-400/15">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-emerald-300">The Launch advantage</p>
                <p className="mt-2 text-[14px] leading-[1.6] text-white/68">
                  You pay $2,500 less in tuition, so more of your available capital can stay reserved for Shopify, samples, software and real ad tests.
                </p>
              </div>

              <p className="mt-4 text-[10px] leading-[1.5] text-white/34">Operating costs are separate from both programme fees. Neither route guarantees revenue or profit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── POSITIONING ─── */
function PositioningSection() {
  return (
    <section className="section-alt section-gap px-4">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <span className="eyebrow mb-4 block">Why Launch Can Be The Smarter Choice</span>
          <h2
            className="text-white mb-5"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.1 }}
          >
            Lower Tuition. <em className="italic text-[#B394F2]">Not A Lower-Quality Roadmap.</em>
          </h2>
          <p className="text-body max-w-[620px] mx-auto">
            The price is lower because the call frequency is leaner. You receive one focused private 1-to-1 review each week, supported by structured lessons, practical resources and Telegram access between calls.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "The Same Core System",
              description: "You still learn product research, store building, creative development, ad testing, automation and brand foundations across six structured weeks.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B394F2" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              ),
            },
            {
              title: "More Capital Stays Available",
              description: "Saving $2,500 on tuition matters when your store still needs samples, software and enough ad budget to generate useful testing data.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B394F2" strokeWidth="1.5">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              ),
            },
            {
              title: "Support Without Dependence",
              description: "A private end-of-week 1-to-1 review plus Telegram support gives you direction and a place to solve blockers, while the lesson-led format builds your ability to make decisions independently.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B394F2" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              ),
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="card-elevated p-8 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(88,62,141,0.15)", border: "1px solid rgba(155,126,219,0.2)" }}>
                {pillar.icon}
              </div>
              <h3 className="text-white text-[20px] font-semibold mb-3">{pillar.title}</h3>
              <p className="text-body text-[14px]">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROGRAMME AT A GLANCE ─── */
function GlanceSection() {
  return (
    <section id="program" className="section-gap px-4">
      <div className="max-w-[1100px] mx-auto text-center">
        <span className="eyebrow mb-4 block">Programme Overview</span>
        <h2
          className="text-white mb-5"
          style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.1 }}
        >
          Six Weeks. One <em className="italic text-[#B394F2]">AI Ecommerce Operating System.</em>
        </h2>
        <p className="text-body max-w-[600px] mx-auto mb-12">
          Every week ends with a private 1-to-1 review call to check your work, resolve blockers and set clear priorities. Telegram support continues throughout all six weeks, including the implementation-focused automation and branding modules.
        </p>

        {/* Stat strip */}
        <div
          className="flex flex-col sm:inline-flex sm:flex-row items-center gap-5 sm:gap-8 md:gap-12 px-8 sm:px-10 py-6 rounded-2xl mx-auto"
          style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(23,21,30,0.6)" }}
        >
          <div className="text-center">
            <p className="text-white text-[28px] md:text-[36px] font-bold tracking-tight">{CONFIG.duration}</p>
            <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>Duration</p>
          </div>
          <div className="h-px w-16 sm:w-px sm:h-12" style={{ background: "rgba(255,255,255,0.12)" }} />
          <div className="text-center">
            <p className="text-white text-[28px] md:text-[36px] font-bold tracking-tight">{CONFIG.liveCalls}</p>
            <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>Live Sessions</p>
          </div>
          <div className="h-px w-16 sm:w-px sm:h-12" style={{ background: "rgba(255,255,255,0.12)" }} />
          <div className="text-center">
            <p className="text-white text-[28px] md:text-[36px] font-bold tracking-tight">{CONFIG.price}</p>
            <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>Investment</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CURRICULUM TIMELINE ─── */
function CurriculumTimeline() {
  const [openWeek, setOpenWeek] = useState<string | null>("01");

  return (
    <section id="curriculum" className="section-alt section-gap px-4">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-14">
          <span className="eyebrow mb-4 block">Curriculum</span>
          <h2
            className="text-white mb-5"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.1 }}
          >
            The Six-Week <em className="italic text-[#B394F2]">Implementation Roadmap</em>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-[rgba(255,255,255,0.08)]" />

          <div className="space-y-4">
            {CURRICULUM.map((week) => {
              const isOpen = openWeek === week.week;
              return (
                <div key={week.week} className="relative pl-14">
                  {/* Node */}
                  <div
                    className="absolute left-[14px] top-6 w-[18px] h-[18px] rounded-full border-2 transition-colors duration-300"
                    style={{
                      borderColor: isOpen ? "#B394F2" : "rgba(255,255,255,0.2)",
                      background: isOpen ? "rgba(179,148,242,0.2)" : "transparent",
                    }}
                  />

                  <button
                    onClick={() => setOpenWeek(isOpen ? null : week.week)}
                    className="w-full text-left rounded-xl p-6 transition-all duration-300"
                    style={{
                      background: isOpen ? "#17151E" : "transparent",
                      border: isOpen ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
                    }}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-[#B394F2] text-[12px] font-bold tracking-wider">WEEK {week.week}</span>
                        <h3 className="text-white text-[17px] md:text-[19px] font-semibold">{week.title}</h3>
                      </div>
                      <span
                        className="shrink-0 px-3 py-1 rounded-full text-[11px] font-medium"
                        style={{
                          background: week.delivery.includes("live") ? "rgba(88,62,141,0.2)" : "rgba(255,255,255,0.06)",
                          border: week.delivery.includes("live") ? "1px solid rgba(155,126,219,0.3)" : "1px solid rgba(255,255,255,0.1)",
                          color: week.delivery.includes("live") ? "#c4a8ff" : "rgba(255,255,255,0.5)",
                        }}
                      >
                        {week.delivery}
                      </span>
                    </div>

                    {isOpen && (
                      <div className="mt-4 space-y-3">
                        <p className="text-[14px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.6)" }}>
                          {week.description}
                        </p>
                        <p className="text-[13px] leading-[1.6] pl-4" style={{ color: "rgba(255,255,255,0.45)", borderLeft: "2px solid rgba(155,126,219,0.3)" }}>
                          {week.outcome}
                        </p>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── DELIVERABLES ─── */
function DeliverablesSection() {
  return (
    <section className="section-gap px-4">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <span className="eyebrow mb-4 block">What You Build</span>
          <h2
            className="text-white mb-5"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.1 }}
          >
            What You Will Build Over <em className="italic text-[#B394F2]">6 Weeks</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DELIVERABLES.map((item) => (
            <div key={item.title} className="card-elevated p-6 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(88,62,141,0.15)", border: "1px solid rgba(155,126,219,0.2)" }}>
                {item.icon}
              </div>
              <h3 className="text-white text-[16px] font-semibold mb-2">{item.title}</h3>
              <p className="text-[13px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.55)" }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── QUALIFICATION ─── */
function QualificationSection() {
  return (
    <section className="section-alt section-gap px-4">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-14">
          <span className="eyebrow mb-4 block">Is This For You?</span>
          <h2
            className="text-white"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.1 }}
          >
            Built For <em className="italic text-[#B394F2]">Budget-Conscious Implementers</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Built for */}
          <div className="card-elevated p-8" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}>
            <h3 className="text-[#9B7EDB] text-[13px] font-bold uppercase tracking-[0.1em] mb-6">Built For</h3>
            <ul className="space-y-4">
              {[
                "Beginners who want structure but do not need three private calls every week",
                "Self-starters who can implement lessons and arrive at calls with focused questions",
                "Founders who would rather keep more capital available for testing and operations",
                "People ready to commit six weeks of focused effort—not passively watch content",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#9B7EDB] shrink-0 mt-0.5">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[14px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.65)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for */}
          <div className="card-elevated p-8" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>Not For</h3>
            <ul className="space-y-4">
              {[
                "People looking for passive income or overnight results",
                "Anyone expecting a done-for-you store or guaranteed profits",
                "People who need daily one-to-one accountability to take action",
                "Anyone whose tuition payment would leave no money to operate or test the store",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[14px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.5)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HONEST PROGRAMME COMPARISON ─── */
function PremiumRouteSection() {
  return (
    <section id="comparison" className="section-gap px-4">
      <div className="max-w-[1050px] mx-auto">
        <div className="text-center mb-12">
          <span className="eyebrow mb-4 block">Launch vs Premium</span>
          <h2
            className="text-white mb-5"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.1 }}
          >
            Choose Based On The Support You Need. <em className="italic text-[#B394F2]">Not The Highest Price.</em>
          </h2>
          <p className="text-body max-w-[670px] mx-auto">
            Premium is not automatically the better decision. Both routes cover the core six-week system; the meaningful difference is how much direct access, personal review and accountability you want.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="relative overflow-hidden rounded-[24px] border border-[#9B7EDB]/40 bg-gradient-to-br from-[#241B34] to-[#15131B] p-6 sm:p-8 shadow-[0_24px_70px_rgba(72,47,112,0.22)]">
            <span className="inline-flex rounded-full bg-[#B394F2] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#17111F]">Better value for self-starters</span>
            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-[13px] font-semibold text-white/54">AI Ecom Command: Launch</p>
                <p className="mt-1 font-serif text-[42px] leading-none text-white">$2,500</p>
              </div>
              <p className="text-right text-[12px] leading-[1.5] text-[#C7AFF8]">6 weeks<br />1 private call / week</p>
            </div>

            <ul className="mt-7 space-y-3.5">
              {[
                "The core AI ecommerce operating system",
                "1 private 1-to-1 review call at the end of every week",
                "Telegram mentor support throughout all 6 weeks",
                "Clear priorities set after every weekly review",
                "Video lessons, recordings and practical resources",
                "Best when you can implement independently between calls",
                "$2,500 less tuition than Premium",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] leading-[1.55] text-white/68">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B394F2]/15 text-[#C7AFF8]">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a href={CONFIG.applyLink} className="btn-primary mt-8 w-full justify-center text-[15px]">
              Apply For Launch
            </a>
          </div>

          <div className="rounded-[24px] border border-white/8 bg-[#15131B] p-6 sm:p-8">
            <span className="inline-flex rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/44">Higher-touch support</span>
            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-[13px] font-semibold text-white/44">Premium 1-to-1 Mentorship</p>
                <p className="mt-1 font-serif text-[42px] leading-none text-white/72">$5,000</p>
              </div>
              <p className="text-right text-[12px] leading-[1.5] text-white/38">6 weeks<br />3 private calls / week</p>
            </div>

            <ul className="mt-7 space-y-3.5">
              {[
                "Three private one-to-one calls every week",
                "Direct operator chat and personalised reviews",
                "Closer accountability and more frequent feedback",
                "Best when you need high-touch guidance",
                "Higher tuition does not guarantee a better result",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] leading-[1.55] text-white/52">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-white/45">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={CONFIG.premiumLink}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/10 px-6 py-4 text-[14px] font-semibold text-white/58 transition-colors hover:border-white/20 hover:text-white"
            >
              See Premium Details
            </a>
          </div>
        </div>

        <div className="mt-5 rounded-[18px] border border-amber-300/15 bg-amber-300/[0.05] p-5 text-center">
          <p className="text-[13px] leading-[1.65] text-white/58">
            <strong className="text-amber-200/85">Important:</strong> if the $2,500 tuition would leave you without money for Shopify, samples, software and advertising, neither programme is the right move yet. Build your operating budget first.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── CREDIBILITY ─── */
function CredibilitySection() {
  return (
    <section className="section-alt py-16 md:py-20 px-4">
      <div className="max-w-[900px] mx-auto text-center">
        <span className="eyebrow mb-4 block">Programme leadership</span>
        <h2
          className="text-white mb-4"
          style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(26px, 3.5vw, 40px)", lineHeight: 1.15 }}
        >
          Designed By Kamil Sattar / <em className="italic text-[#B394F2]">Delivered By Proven Former Students</em>
        </h2>
        <p className="text-body max-w-[560px] mx-auto mb-10">
          Kamil builds the system, trains the mentors and reviews the quality of their work. Live calls are delivered by the mentor team, including Inder and Nail—former students who each went on to build seven-figure dropshipping businesses.
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 md:gap-12">
          <div className="text-center">
            <p
              className="text-white leading-none tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              {CONFIG.credibility.entrepreneurs}
            </p>
            <p className="text-[12px] mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>Ecommerce Entrepreneurs</p>
          </div>
          <div className="w-px h-12" style={{ background: "rgba(255,255,255,0.12)" }} />
          <div className="text-center">
            <p
              className="text-white leading-none tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              {CONFIG.credibility.mentors}
            </p>
            <p className="text-[12px] mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>Seven-Figure Mentors</p>
          </div>
          <div className="w-px h-12" style={{ background: "rgba(255,255,255,0.12)" }} />
          <div className="text-center">
            <p
              className="text-white leading-none tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              {CONFIG.credibility.duration}
            </p>
            <p className="text-[12px] mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>Programme Duration</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQS ─── */
function FAQsSection() {
  return (
    <section id="faqs" className="section-gap px-4">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-14">
          <span className="eyebrow mb-4 block">FAQs</span>
          <h2
            className="text-white"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.1 }}
          >
            Price, Support & Fit Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-0 rounded-xl overflow-hidden"
              style={{ background: "#17151E", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <AccordionTrigger className="px-6 py-5 text-[15px] text-white font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-[14px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.6)" }}>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTASection() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(123,91,181,0.2) 0%, transparent 60%)" }}
      />

      <div className="relative max-w-[700px] mx-auto text-center">
        <h2
          className="text-white mb-5"
          style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.1 }}
        >
          Start With The System. <em className="italic text-[#B394F2]">Keep Capital For The Business.</em>
        </h2>
        <p className="text-body max-w-[520px] mx-auto mb-8">
          Choose Launch if you want a complete six-week implementation path and live guidance without paying for intensive one-to-one access you may not need.
        </p>

        {/* Price + duration */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <span className="text-white text-[24px] md:text-[28px] font-bold">{CONFIG.price}</span>
          <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.15)" }} />
          <span className="text-white text-[24px] md:text-[28px] font-bold">{CONFIG.duration}</span>
        </div>

        {/* CTA */}
        <a href={CONFIG.applyLink} className="btn-primary text-[16px] mb-5 inline-flex">
          Apply For Launch
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <p className="text-[13px] mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>
          Application required · Tuition is separate from operating and advertising costs
        </p>
      </div>
    </section>
  );
}

/* ─── LAUNCH HEADER ─── */
function LaunchHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Programme", href: "#program" },
    { label: "Compare", href: "#comparison" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div
        className={`w-full max-w-[1080px] flex items-center justify-between rounded-full px-3 py-2 sm:py-2.5 sm:pl-7 sm:pr-3 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(10,10,15,0.85)] border border-[rgba(255,255,255,0.1)]"
            : "bg-[rgba(10,10,15,0.4)] border border-[rgba(255,255,255,0.06)]"
        }`}
        style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      >
        <a href="/" className="flex items-center">
          <img
            src="/manus-storage/ecom-mentoring-footer-logo_6a87be9b.webp"
            alt="eMentoring"
            className="h-[32px] w-auto sm:h-[40px]"
            width={140}
            height={40}
          />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] text-[rgba(255,255,255,0.65)] hover:text-white transition-colors duration-200 px-4 py-2 rounded-full hover:bg-[rgba(255,255,255,0.06)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={CONFIG.applyLink}
          className="inline-flex items-center text-white text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-[1px]"
          style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)", boxShadow: "0 8px 24px rgba(123,91,181,0.35)" }}
        >
          <span className="sm:hidden">Apply</span>
          <span className="hidden sm:inline">Apply For Launch</span>
        </a>
      </div>
    </nav>
  );
}

/* ─── LAUNCH FOOTER ─── */
function LaunchFooter() {
  return (
    <footer className="relative text-white overflow-hidden bg-[#0A0A0F]" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1100px] mx-auto px-4 py-14 md:py-18">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 md:gap-12">
          <div>
            <a href="/" className="inline-block mb-5">
              <img src="/manus-storage/ecom-mentoring-footer-logo_6a87be9b.webp" alt="eMentoring" className="h-[48px] w-auto" width={160} height={48} loading="lazy" />
            </a>
            <p className="text-[13px] leading-[1.75] max-w-[260px] mb-7" style={{ color: "rgba(255,255,255,0.5)" }}>
              AI-powered ecommerce implementation for serious founders who want structure, live guidance, and a clear path to launch.
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { href: "https://www.youtube.com/@TheEcomKing", label: "YouTube", d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                { href: "https://www.instagram.com/e_commercementoring/", label: "Instagram", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                { href: "https://x.com/kamil_sattar", label: "X", d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              ].map(({ href, label, d }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "rgba(255,255,255,0.5)" }}><path d={d} /></svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>Program</h4>
            <ul className="space-y-3.5">
              <li><a href="/curriculums" className="text-[13px] hover:text-white transition-colors duration-200" style={{ color: "rgba(255,255,255,0.55)" }}>Curriculums</a></li>
              <li><a href="#faqs" className="text-[13px] hover:text-white transition-colors duration-200" style={{ color: "rgba(255,255,255,0.55)" }}>FAQs</a></li>
              <li><a href={CONFIG.applyLink} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#B394F2] hover:text-white transition-colors duration-200">Apply Now <span className="text-[11px]">→</span></a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>Resources</h4>
            <ul className="space-y-3.5">
              <li><a href="https://www.youtube.com/@TheEcomKing" target="_blank" rel="noopener noreferrer" className="text-[13px] hover:text-white transition-colors duration-200" style={{ color: "rgba(255,255,255,0.55)" }}>YouTube Channel</a></li>
              <li><a href="https://youtu.be/TNuXk8TI1Ac" target="_blank" rel="noopener noreferrer" className="text-[13px] hover:text-white transition-colors duration-200" style={{ color: "rgba(255,255,255,0.55)" }}>Free Training</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>Legal</h4>
            <ul className="space-y-3.5">
              <li><a href="/privacy-policy" className="text-[13px] hover:text-white transition-colors duration-200" style={{ color: "rgba(255,255,255,0.55)" }}>Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-[13px] hover:text-white transition-colors duration-200" style={{ color: "rgba(255,255,255,0.55)" }}>Terms of Service</a></li>
              <li><a href="/earnings-disclaimer" className="text-[13px] hover:text-white transition-colors duration-200" style={{ color: "rgba(255,255,255,0.55)" }}>Earnings Disclaimer</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1100px] mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>© {new Date().getFullYear()} The Ecom King. All rights reserved.</p>
            <p className="text-[11px] max-w-[520px] text-center md:text-right leading-[1.65]" style={{ color: "rgba(255,255,255,0.35)" }}>Earnings Disclaimer: Results are not guaranteed. Any figures referenced are student-reported and individual outcomes vary based on product selection, budget, execution, skill and market conditions.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
