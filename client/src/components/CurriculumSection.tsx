import { useState } from "react";
import { Plus, Minus, Check } from "lucide-react";

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

const courseOverview = [
  "Direct access to 1:1 mentorship with AI-integrated workflows",
  "A complete roadmap covering AI product research, stores, ads and scaling",
  "Proven frameworks, templates and AI operating systems",
  "Accountability and feedback tailored to your business",
];

export default function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="curriculum" className="py-[80px] md:py-[120px] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #faf9f7 0%, #f6f2fb 50%, #f3eef9 100%)" }}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(88,62,141,0.06) 0%, transparent 60%)" }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#583E8D]/12 bg-white/80 backdrop-blur-sm mb-5 shadow-[0_2px_8px_rgba(88,62,141,0.05)]">
            <span className="text-[12px] text-[#583E8D] font-semibold tracking-wide uppercase">Curriculum Overview</span>
          </div>
          <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] leading-[1.08] tracking-[-0.02em] text-[#17191c] max-w-[700px] mx-auto">
            The 6-Stage AI System Behind{" "}
            <span className="text-[#583E8D] italic">Profitable Ecommerce Growth</span>
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#5a5a6a] mt-5 max-w-[560px] mx-auto leading-[1.6]">
            A structured AI-powered framework designed to help you validate products, build your store, launch ads, scale profitably, and create a business with long-term potential.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-start">
          {/* Left — Accordion stages */}
          <div
            className="space-y-3"
          >
            {stages.map((stage, i) => (
              <div
                key={i}
                className={`group rounded-2xl border transition-all duration-300 ${
                  openIndex === i
                    ? "bg-white border-[#583E8D]/15"
                    : "bg-white/60 border-[#e8e8e8] hover:bg-white hover:border-[#d0d0d0]"
                }`}
                style={{
                  boxShadow: openIndex === i
                    ? "0 8px 30px rgba(88,62,141,0.06), 0 2px 6px rgba(0,0,0,0.02)"
                    : "0 2px 8px rgba(0,0,0,0.01)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      openIndex === i
                        ? "text-white"
                        : "bg-[#f3eef9] text-[#583E8D] group-hover:bg-[#ebe3f5]"
                    }`}
                      style={openIndex === i ? {
                        background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
                        boxShadow: "0 4px 12px rgba(88,62,141,0.2)"
                      } : {}}
                    >
                      <span className="text-[13px] font-bold">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <p className={`text-[15px] md:text-[16px] font-semibold transition-colors duration-200 ${
                        openIndex === i ? "text-[#583E8D]" : "text-[#17191c]"
                      }`}>
                        {stage.title}
                      </p>
                      <p className="text-[12px] text-[#777b86] mt-0.5 font-medium">{stage.week}</p>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${
                    openIndex === i
                      ? "bg-[#583E8D] shadow-[0_2px_8px_rgba(88,62,141,0.2)]"
                      : "border border-[#e8e8e8] group-hover:border-[#583E8D]/20"
                  }`}>
                    {openIndex === i ? (
                      <Minus size={14} className="text-white" strokeWidth={2.5} />
                    ) : (
                      <Plus size={14} className="text-[#777b86]" strokeWidth={2.5} />
                    )}
                  </div>
                </button>
                
                  {openIndex === i && (
                    <div
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[76px] md:pl-[84px]">
                        <p className="text-[14px] leading-[1.65] text-[#4c4c4c] mb-4">
                          {stage.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {stage.bullets.map((bullet, bi) => (
                            <div key={bi} className="flex items-center gap-2.5">
                              <div className="w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 bg-[#f3eef9]">
                                <Check size={10} className="text-[#583E8D]" strokeWidth={3} />
                              </div>
                              <span className="text-[13px] text-[#3a3a3e] font-medium">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                
              </div>
            ))}

            {/* Trust line below accordion */}
            <p className="text-[13px] text-[#583E8D]/70 italic text-center pt-4">
              AI-powered systems at every stage. No guesswork.
            </p>
          </div>

          {/* Right — Dark apply card */}
          <div
            className="lg:sticky lg:top-[100px]"
          >
            <div className="relative bg-[#17191c] rounded-[24px] p-7 md:p-8 text-white overflow-hidden"
              style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)" }}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(88,62,141,0.3) 0%, transparent 70%)" }}
              />

              <div className="relative z-10">
                {/* Header badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide text-white uppercase"
                    style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)", boxShadow: "0 4px 12px rgba(88,62,141,0.3)" }}
                  >
                    Limited Mentorship Spots
                  </span>
                </div>

                <h3 className="text-[22px] md:text-[26px] font-semibold leading-[1.2] tracking-[-0.01em] mb-3">
                  Apply For Ecom Mentoring
                </h3>

                <p className="text-[13px] text-white/55 leading-[1.6] mb-7">
                  This is for founders who want hands-on support, not more guesswork.
                </p>

                {/* Feature grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-7">
                  {[
                    { label: "1:1 Mentorship" },
                    { label: "Beginner Friendly" },
                    { label: "Proven Frameworks" },
                    { label: "Practical Support" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/5 border border-white/6">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7B5BB5]" />
                      <span className="text-[12px] text-white/75 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-white/8 pt-6 mb-7">
                  <p className="text-[11px] font-semibold tracking-[0.08em] text-white/40 uppercase mb-4">
                    What you get
                  </p>
                  <div className="space-y-3.5">
                    {courseOverview.map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)" }}
                        >
                          <Check size={10} className="text-white" strokeWidth={3} />
                        </div>
                        <p className="text-[13px] leading-[1.55] text-white/70">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply button */}
                <a
                  href="https://e-commercementoring.com/learn-more"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full text-white text-[15px] font-medium px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_8px_24px_rgba(88,62,141,0.3)] hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)" }}
                >
                  <span>See If You Qualify</span>
                  <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>

                {/* Micro trust */}
                <p className="text-[11px] text-white/35 text-center mt-4">
                  Applications reviewed within 24 hours. No commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
