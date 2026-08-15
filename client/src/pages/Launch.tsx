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
  liveCalls: "5 Live Calls",
  applyLink: "/apply",
  premiumLink: "/learn-more",
  credibility: {
    entrepreneurs: "600,000+",
    experience: "7+ Years",
    rating: "4.9/5",
  },
};

const CURRICULUM = [
  {
    week: "01",
    title: "AI Product Research",
    delivery: "1 live call",
    description:
      "Learn to use AI, trend signals, competitor analysis, and validation frameworks to identify products and angles worth testing.",
    outcome:
      "By the end of this week, you will have a validated product shortlist and a clear angle to test — without spending money on ads first.",
  },
  {
    week: "02",
    title: "AI Store Building",
    delivery: "1 live call",
    description:
      "Build a focused Shopify store using AI-assisted structure, copy, product pages, offer logic, and conversion principles.",
    outcome:
      "By the end of this week, you will have a launch-ready Shopify store with optimised product pages, trust elements, and conversion logic in place.",
  },
  {
    week: "03",
    title: "AI Creatives & Ad Launch",
    delivery: "2 live calls",
    description:
      "Create ad concepts, hooks, scripts, and creatives with AI, then turn them into a structured campaign launch plan.",
    outcome:
      "By the end of this week, you will have a library of AI-generated ad creatives and a structured campaign ready to launch on Meta or TikTok.",
  },
  {
    week: "04",
    title: "Scaling Ads Intelligently",
    delivery: "1 live call",
    description:
      "Learn how to read the right signals, improve what is working, control spend, and approach ad scaling with a system.",
    outcome:
      "By the end of this week, you will have a scaling framework to identify winners, cut losers, and allocate budget based on data — not guesswork.",
  },
  {
    week: "05",
    title: "Store Automation Systems",
    delivery: "Implementation week",
    description:
      "Set up the foundations for a less chaotic operation using AI and automation across repetitive store and customer workflows.",
    outcome:
      "By the end of this week, you will have automated order processing, customer support flows, and operational SOPs saving you hours each week.",
  },
  {
    week: "06",
    title: "Building a Real Brand",
    delivery: "Implementation week",
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
    a: "It is designed for beginners and early-stage ecommerce founders who want a structured, live path to build and launch a Shopify store using AI. If you are prepared to implement, test, and take responsibility for execution over six weeks, this program is built for you.",
  },
  {
    q: "Do I need ecommerce experience?",
    a: "No prior ecommerce experience is required. The program is built to take you from zero to a launched, operational store. What matters is your willingness to show up, implement, and follow the system.",
  },
  {
    q: "How are the live calls delivered?",
    a: "Live calls are delivered via Zoom in a small group format. You will receive the schedule and access details after your application is accepted. Calls are recorded for participants who cannot attend live.",
  },
  {
    q: "What happens in Weeks 5 and 6?",
    a: "Weeks 5 and 6 are implementation-focused modules. There are no live calls in these weeks — instead, you will follow structured implementation guides to set up automation systems and build your brand foundations independently.",
  },
  {
    q: "Will I need additional budget for Shopify, apps, products, or advertising?",
    a: "Yes. Beyond the program fee, you should budget for a Shopify subscription (from $39/month), product samples, and an initial advertising budget to test your campaigns. We recommend having at least $500–$1,000 available for ad testing, though this varies by niche and strategy.",
  },
  {
    q: "Is this one-to-one mentoring?",
    a: "No. AI Ecom Command: Launch is a live group implementation program with structured calls and curriculum. For comprehensive one-to-one mentoring with direct operator feedback, store audits, and personalised guidance, explore the advanced mentorship route.",
  },
  {
    q: "What is the difference between Launch and the advanced mentorship route?",
    a: "Launch is a six-week structured group program focused on building and launching your store with AI. The advanced mentorship is a longer, higher-touch engagement with one-to-one operator feedback, store audits, ad reviews, and personalised scaling guidance. Both use AI-integrated methods; the difference is depth of individual support and duration.",
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
      {/* Positioning */}
      <PositioningSection />
      {/* Programme at a glance */}
      <GlanceSection />
      {/* Curriculum */}
      <CurriculumTimeline />
      {/* Deliverables */}
      <DeliverablesSection />
      {/* Who this is for */}
      <QualificationSection />
      {/* Premium route link */}
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
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-center">
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
                Limited spaces — application required
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-white mb-6 leading-[1.08]"
              style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(34px, 5vw, 58px)" }}
            >
              Build, Launch & Automate Your <em className="italic text-[#B394F2]">AI-Powered</em> Ecom Business in 6 Weeks.
            </h1>

            {/* Supporting copy */}
            <p className="text-[16px] md:text-[17px] leading-[1.7] mb-8 max-w-[560px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              {CONFIG.productName} is a live, six-week implementation program for founders who want to use AI to find stronger products, build a Shopify store, create and launch ads, automate the day-to-day, and start building a brand properly.
            </p>

            {/* Stat block */}
            <div className="flex items-center gap-6 mb-8">
              <div className="text-center">
                <p className="text-white text-[28px] md:text-[32px] font-bold tracking-tight">{CONFIG.price}</p>
                <p className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>Investment</p>
              </div>
              <div className="w-px h-12" style={{ background: "rgba(255,255,255,0.12)" }} />
              <div className="text-center">
                <p className="text-white text-[28px] md:text-[32px] font-bold tracking-tight">{CONFIG.duration}</p>
                <p className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>Duration</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href={CONFIG.applyLink} className="btn-primary text-[15px]">
                Apply Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              Application required. Built for people ready to implement.
            </p>
          </div>

          {/* Right: Abstract dashboard visual */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Floating cards simulating a command dashboard */}
              <div className="space-y-4">
                <DashboardCard title="Product Research" value="3 validated" accent />
                <DashboardCard title="Store Build" value="87% complete" />
                <DashboardCard title="Ad Creatives" value="12 concepts" accent />
                <DashboardCard title="Campaign Status" value="Testing phase" />
                <DashboardCard title="Automation" value="4 workflows active" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardCard({ title, value, accent }: { title: string; value: string; accent?: boolean }) {
  return (
    <div
      className="flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-300 hover:translate-x-1"
      style={{
        background: accent ? "linear-gradient(135deg, rgba(88,62,141,0.2) 0%, rgba(23,21,30,0.9) 100%)" : "#17151E",
        border: accent ? "1px solid rgba(155,126,219,0.3)" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <span className="text-[14px]" style={{ color: "rgba(255,255,255,0.7)" }}>{title}</span>
      <span className="text-[14px] font-medium text-white">{value}</span>
    </div>
  );
}

/* ─── POSITIONING ─── */
function PositioningSection() {
  return (
    <section className="section-alt section-gap px-4">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <span className="eyebrow mb-4 block">The AI Advantage</span>
          <h2
            className="text-white mb-5"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.1 }}
          >
            This Is Not Another <em className="italic text-[#B394F2]">AI Tool List.</em>
          </h2>
          <p className="text-body max-w-[620px] mx-auto">
            The program teaches you how to use AI inside an ecommerce operating system: to research faster, build more intelligently, create stronger ads, make better decisions, and automate repeatable work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Build Faster",
              description: "Use AI to move from idea to a credible Shopify store without wasting weeks on random tutorials.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B394F2" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              ),
            },
            {
              title: "Test Smarter",
              description: "Use structured research, creative thinking, and ad testing — not guesswork — to make better launch decisions.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B394F2" strokeWidth="1.5">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              ),
            },
            {
              title: "Systemise Early",
              description: "Build automation and brand foundations before chaos becomes the default operating model.",
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
    <section className="section-gap px-4">
      <div className="max-w-[1100px] mx-auto text-center">
        <span className="eyebrow mb-4 block">Programme Overview</span>
        <h2
          className="text-white mb-5"
          style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.1 }}
        >
          Six Weeks. One <em className="italic text-[#B394F2]">AI Ecommerce Operating System.</em>
        </h2>
        <p className="text-body max-w-[600px] mx-auto mb-12">
          Live calls in Weeks 1–4 give you the system. Weeks 5 and 6 are implementation-focused modules where you build automation and brand foundations independently.
        </p>

        {/* Stat strip */}
        <div
          className="inline-flex items-center gap-8 md:gap-12 px-10 py-6 rounded-2xl mx-auto"
          style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(23,21,30,0.6)" }}
        >
          <div className="text-center">
            <p className="text-white text-[28px] md:text-[36px] font-bold tracking-tight">{CONFIG.duration}</p>
            <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>Duration</p>
          </div>
          <div className="w-px h-12" style={{ background: "rgba(255,255,255,0.12)" }} />
          <div className="text-center">
            <p className="text-white text-[28px] md:text-[36px] font-bold tracking-tight">{CONFIG.liveCalls}</p>
            <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>Live Sessions</p>
          </div>
          <div className="w-px h-12" style={{ background: "rgba(255,255,255,0.12)" }} />
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
            Built For <em className="italic text-[#B394F2]">Serious Founders</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Built for */}
          <div className="card-elevated p-8" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}>
            <h3 className="text-[#9B7EDB] text-[13px] font-bold uppercase tracking-[0.1em] mb-6">Built For</h3>
            <ul className="space-y-4">
              {[
                "Serious beginners ready to commit six weeks of focused effort",
                "Early-stage sellers who need a proper system, not more random content",
                "Founders willing to test, learn, and iterate based on real data",
                "People who want to use AI as an operational advantage, not a shortcut",
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
                "Founders who want to watch videos without implementing",
                "People unwilling to invest time, budget, or effort into testing",
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

/* ─── PREMIUM ROUTE ─── */
function PremiumRouteSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-[700px] mx-auto text-center">
        <p className="text-[14px]" style={{ color: "rgba(255,255,255,0.45)" }}>
          Need more comprehensive operator-level support?{" "}
          <a
            href={CONFIG.premiumLink}
            className="text-[#B394F2] underline underline-offset-4 decoration-[#B394F2]/40 hover:decoration-[#B394F2] transition-colors"
          >
            Explore the advanced mentorship route.
          </a>
        </p>
      </div>
    </section>
  );
}

/* ─── CREDIBILITY ─── */
function CredibilitySection() {
  return (
    <section className="section-alt py-16 md:py-20 px-4">
      <div className="max-w-[900px] mx-auto text-center">
        <span className="eyebrow mb-4 block">Led By</span>
        <h2
          className="text-white mb-4"
          style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(26px, 3.5vw, 40px)", lineHeight: 1.15 }}
        >
          Kamil Sattar / <em className="italic text-[#B394F2]">The Ecom King</em>
        </h2>
        <p className="text-body max-w-[560px] mx-auto mb-10">
          Built from real ecommerce experience. Not theory, not hype — operator-led systems that work.
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
              {CONFIG.credibility.experience}
            </p>
            <p className="text-[12px] mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>Ecommerce Experience</p>
          </div>
          <div className="w-px h-12" style={{ background: "rgba(255,255,255,0.12)" }} />
          <div className="text-center">
            <p
              className="text-white leading-none tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              {CONFIG.credibility.rating}
            </p>
            <p className="text-[12px] mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>Student Rating</p>
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
            Common Questions
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
          Stop Watching AI Change Ecommerce. <em className="italic text-[#B394F2]">Start Using It.</em>
        </h2>
        <p className="text-body max-w-[520px] mx-auto mb-8">
          {CONFIG.productName} is for people ready to build, launch, and operate with a sharper system. Six weeks. One focused implementation path.
        </p>

        {/* Price + duration */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <span className="text-white text-[24px] md:text-[28px] font-bold">{CONFIG.price}</span>
          <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.15)" }} />
          <span className="text-white text-[24px] md:text-[28px] font-bold">{CONFIG.duration}</span>
        </div>

        {/* CTA */}
        <a href={CONFIG.applyLink} className="btn-primary text-[16px] mb-5 inline-flex">
          Apply Now
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <p className="text-[13px] mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>
          Limited spaces — application required.
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
    { label: "Program", href: "#program" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div
        className={`w-full max-w-[1080px] flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(10,10,15,0.85)] border border-[rgba(255,255,255,0.1)]"
            : "bg-[rgba(10,10,15,0.4)] border border-[rgba(255,255,255,0.06)]"
        }`}
        style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", padding: "10px 12px 10px 28px" }}
      >
        <a href="/" className="flex items-center">
          <img
            src="/manus-storage/ecom-mentoring-footer-logo_6a87be9b.webp"
            alt="eMentoring"
            className="h-[40px] w-auto"
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
          Apply Now
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
              <li><a href="#curriculum" className="text-[13px] hover:text-white transition-colors duration-200" style={{ color: "rgba(255,255,255,0.55)" }}>Curriculum</a></li>
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
