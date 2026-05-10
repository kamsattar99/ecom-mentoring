import { Check } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "AI Product Research & Validation",
    description:
      "Use AI workflows, trend tools and competitor analysis to find products with real demand before spending money on ads.",
    gradient: "from-[#4a3377] to-[#6B4FA8]",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 8v6M8 11h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "AI Store Build & Conversion",
    description:
      "Build high-converting Shopify stores faster using AI-assisted page building, copywriting and conversion frameworks.",
    gradient: "from-[#583E8D] to-[#7B5EC6]",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 6h18" stroke="white" strokeWidth="2" />
        <path d="M16 10a4 4 0 0 1-8 0" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "AI Creatives & Paid Ads",
    description:
      "Launch, test and scale campaigns using AI creative production, ad angle research and optimisation frameworks.",
    gradient: "from-[#17191c] to-[#2d2f33]",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 3v18h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 14l4-5 4 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="6" r="2" fill="white" opacity="0.6" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Mentorship, Feedback & Accountability",
    description:
      "Get direct operator feedback, store audits and practical next steps so you never build in the wrong direction.",
    gradient: "from-[#4a3377] to-[#6B4FA8]",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const trustPoints = [
  "AI-integrated workflows at every stage",
  "1:1 mentor feedback and accountability",
  "Store, ad and creative reviews",
  "Product validation frameworks",
  "Beginner-to-scaling roadmap",
];

const tools = [
  "Meta Ads",
  "TikTok Ads",
  "Shopify",
  "AI Tools",
  "CRO",
  "Creatives",
];

export default function AtoZSystem() {
  return (
    <section className="py-[80px] md:py-[120px] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #faf9f7 0%, #f9f6fd 50%, #f8f5fc 100%)" }}>
      <div className="container">
        {/* Section header */}
        <div
          className="text-center mb-14"
        >
          <p className="text-[13px] text-[#583E8D] font-medium tracking-wide mb-3">The New AI Ecommerce System</p>
          <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] leading-[1.1] tracking-[-0.02em] text-[#17191c] max-w-[700px] mx-auto mb-5">
            The Mentorship Has Been{" "}
            <span className="italic text-[#583E8D]">Rebuilt</span>{" "}Around The AI Ecommerce Stack
          </h2>
          <p className="text-[16px] md:text-[17px] leading-[1.6] text-[#4c4c4c] max-w-[600px] mx-auto">
            This is not an AI module bolted onto an old course. The entire curriculum has been rebuilt around AI-assisted ecommerce execution — from product research to scaling.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-8 items-start">
          {/* Left — Overview card */}
          <div
            className="relative rounded-[24px] p-7 md:p-9 flex flex-col overflow-hidden"
            style={{
              background: "linear-gradient(155deg, #ffffff 0%, #f8f6fb 40%, #f3eef9 100%)",
              boxShadow: "0 8px 40px rgba(88, 62, 141, 0.08), 0 1px 3px rgba(88, 62, 141, 0.04)",
              border: "1px solid rgba(88, 62, 141, 0.06)",
            }}
          >
            {/* Decorative orbs */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-25 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(88,62,141,0.12) 0%, transparent 70%)" }}
            />

            {/* Badge */}
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#583E8D]/12 bg-white/90 backdrop-blur-sm mb-6 shadow-[0_2px_8px_rgba(88,62,141,0.05)] self-start">
              <div className="w-1.5 h-1.5 rounded-full bg-[#583E8D] mr-2" />
              <span className="text-[12px] font-semibold text-[#583E8D] tracking-wide uppercase">Mentorship Overview</span>
            </div>

            {/* Heading */}
            <h3 className="font-serif text-[clamp(22px,2.8vw,30px)] leading-[1.15] tracking-[-0.01em] text-[#17191c] mb-5">
              A complete system for founders who want to build with AI and operator-level guidance.
            </h3>

            {/* Body */}
            <p className="text-[15px] leading-[1.7] text-[#4c4c4c] mb-7">
              Work 1:1 with experienced ecommerce operators across AI product research, store buildout, creative production, paid ads and operations — so every stage of your business moves faster with better systems.
            </p>

            {/* Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#EDE8F5] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#583E8D]" />
                  </div>
                  <span className="text-[13px] text-[#3a3a3e] font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mb-6">
              <a
                href="https://e-commercementoring.com/learn-more"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-[#583E8D] text-white text-[14px] font-medium px-7 py-3.5 rounded-full hover:bg-[#4a3377] transition-all duration-300 shadow-[0_4px_16px_rgba(88,62,141,0.25)] hover:shadow-[0_6px_24px_rgba(88,62,141,0.35)] hover:-translate-y-0.5"
              >
                Apply For Mentorship
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <p className="text-[12px] text-[#999] font-medium mt-2.5">
                Limited places. Application required.
              </p>
            </div>

            {/* Tools & Channels row */}
            <div className="pt-5 border-t border-[#583E8D]/8">
              <p className="text-[11px] text-[#999] font-medium tracking-[0.08em] uppercase mb-3">
                Tools & Channels Covered
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[12px] font-medium text-[#4c4c4c] bg-white/80 border border-[#e8e8e8]/80 px-3 py-1.5 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Step cards */}
          <div
            className="flex flex-col gap-4"
          >
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`group relative overflow-hidden rounded-[20px] p-6 bg-gradient-to-br ${step.gradient} text-white transition-all duration-300 hover:-translate-y-0.5`}
                style={{
                  boxShadow:
                    step.gradient.includes("17191c")
                      ? "0 8px 32px rgba(23, 25, 28, 0.2), 0 2px 8px rgba(23, 25, 28, 0.1)"
                      : "0 8px 32px rgba(88, 62, 141, 0.18), 0 2px 8px rgba(88, 62, 141, 0.08)",
                }}
              >
                {/* Subtle shine on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)" }}
                />

                <div className="relative z-10 flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/10">
                    {step.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-bold tracking-[0.12em] text-white/50 mb-1.5">
                      STEP {step.step}
                    </p>
                    <h4 className="text-[16px] font-bold text-white mb-2 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-[14px] leading-[1.6] text-white/80">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full opacity-[0.06] pointer-events-none"
                  style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
