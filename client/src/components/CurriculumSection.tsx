import { useState } from "react";

const stages = [
  {
    title: "AI Product Research & Validation",
    week: "Week 01",
    description: "Use AI workflows, trend tools and competitor analysis to find products with real demand before spending money on ads.",
    bullets: [
      "AI-powered product validation",
      "Competitor analysis with AI tools",
      "Trend spotting & market timing",
      "Structured research frameworks",
    ],
  },
  {
    title: "AI Store Build & Conversion",
    week: "Week 02",
    description: "Build high-converting Shopify stores faster using AI-assisted page building, copywriting and conversion frameworks.",
    bullets: [
      "AI-assisted store buildout",
      "Product page conversion structure",
      "Trust signals & checkout flow",
      "AI copywriting workflows",
    ],
  },
  {
    title: "AI Creatives & Paid Ads",
    week: "Week 03",
    description: "Launch, test and scale campaigns using AI-assisted UGC scripts, static ad concepts, hook testing, Meta/TikTok ad angles and creative iteration.",
    bullets: [
      "AI-assisted UGC scripts & static ad concepts",
      "Hook testing & ad angle research with AI",
      "Budget allocation & testing rules",
      "When to kill, test or scale",
    ],
  },
  {
    title: "Scaling & Optimisation",
    week: "Week 04",
    description: "Go from $100/day to $1,000+/day profitably with horizontal and vertical scaling strategies that protect your margins.",
    bullets: [
      "Horizontal & vertical scaling",
      "CBO & lookalike strategies",
      "Margin protection at scale",
      "AI-assisted data analysis",
    ],
  },
  {
    title: "AI Operations & Automation",
    week: "Week 05",
    description: "Build AI support agents trained on your store policies, FAQs, product details, shipping rules and customer objections. Automate fulfilment, set up email flows and create systems that run without you.",
    bullets: [
      "AI support agents for your store",
      "Email & SMS automation",
      "Fulfilment & operations SOPs",
      "AI tools for delegation & ops",
    ],
  },
  {
    title: "Long-Term Brand Growth",
    week: "Week 06",
    description: "Transition from a product store to a real brand with retention marketing, customer lifetime value and AI-powered content systems.",
    bullets: [
      "Retention & repeat customers",
      "Customer lifetime value",
      "AI content & influencer strategy",
      "Building a sellable asset",
    ],
  },
];

export default function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="curriculum" className="py-[80px] md:py-[110px] relative overflow-hidden section-alt">
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">Six-week roadmap</p>
          <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] leading-[1.08] tracking-[-0.02em] text-white max-w-[700px] mx-auto">
            From Product Research To{" "}
            <span className="text-[#B394F2] italic">Repeatable Ecommerce Decisions</span>
          </h2>
          <p className="text-[15px] md:text-[16px] text-[rgba(255,255,255,0.6)] mt-5 max-w-[560px] mx-auto leading-[1.6]">
            Each stage gives you a clear focus for the week, while your mentor applies the framework to your actual products, store, creatives and data.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="max-w-[880px] mx-auto relative">
          {/* Vertical gradient line */}
          <div
            className="absolute left-[19px] top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(180deg, rgba(155,126,219,0.5) 0%, rgba(155,126,219,0.1) 100%)" }}
          />

          <div className="space-y-3">
            {stages.map((stage, i) => (
              <div key={i} className="flex gap-4 md:gap-6 items-start">
                {/* Node on the line */}
                <div
                  className="hidden md:flex w-[40px] h-[40px] rounded-full items-center justify-center shrink-0 z-10"
                  style={{
                    background: "#17151E",
                    border: "1px solid rgba(155,126,219,0.4)",
                  }}
                >
                  <span className="text-[12px] font-bold text-[#B394F2]">{String(i + 1).padStart(2, "0")}</span>
                </div>

                {/* Accordion card */}
                <div
                  className="flex-1 rounded-[18px] transition-all duration-300"
                  style={{
                    background: "#17151E",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  >
                    <div>
                      <p className="text-[15px] md:text-[16px] font-semibold text-white">
                        {stage.title}
                      </p>
                      <p className="text-[12px] text-[rgba(255,255,255,0.4)] mt-0.5 font-medium">{stage.week}</p>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${
                      openIndex === i
                        ? "bg-[#7B5BB5]"
                        : "border border-[rgba(255,255,255,0.14)]"
                    }`}>
                      {openIndex === i ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M5 12h14" />
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      )}
                    </div>
                  </button>

                  {openIndex === i && (
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <p className="text-[14px] leading-[1.65] text-[rgba(255,255,255,0.6)] mb-4">
                        {stage.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {stage.bullets.map((bullet, bi) => (
                          <div key={bi} className="flex items-center gap-2.5">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9B7EDB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span className="text-[13px] text-[rgba(255,255,255,0.7)] font-medium">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Trust line below timeline */}
          <p className="text-[13px] text-[rgba(179,148,242,0.7)] italic text-center pt-8">
            AI helps you execute faster. Your mentor helps you decide what deserves to be executed.
          </p>
        </div>
      </div>
    </section>
  );
}
