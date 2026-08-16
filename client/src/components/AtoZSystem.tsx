const steps = [
  {
    step: "01",
    title: "AI Product Research & Validation",
    description:
      "Use AI workflows, trend tools and competitor analysis to find products with real demand before spending money on ads.",
  },
  {
    step: "02",
    title: "AI Store Build & Conversion",
    description:
      "Build high-converting Shopify stores faster using AI-assisted page building, copywriting and conversion frameworks.",
  },
  {
    step: "03",
    title: "AI Creatives & Paid Ads",
    description:
      "Launch, test and scale campaigns using AI-assisted UGC scripts, static ad concepts, hook testing, Meta/TikTok ad angles and creative iteration.",
  },
  {
    step: "04",
    title: "Mentorship, Feedback & Accountability",
    description:
      "Get direct operator feedback, store audits and practical next steps so you never build in the wrong direction.",
  },
];

const trustPoints = [
  "AI workflows for product validation, competitor research, offer creation, landing page copy, creative testing, ad angles, customer support and fulfilment",
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
    <section className="py-[80px] md:py-[110px] relative overflow-hidden bg-[#0F0E13]">
      <div className="container max-w-[1180px]">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">The New AI Ecommerce System</p>
          <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] leading-[1.1] tracking-[-0.02em] text-white max-w-[700px] mx-auto mb-5">
            The Mentorship Has Been{" "}
            <span className="italic text-[#B394F2]">Rebuilt</span>{" "}Around The AI Ecommerce Stack
          </h2>
          <p className="text-[16px] md:text-[17px] leading-[1.6] text-[rgba(255,255,255,0.6)] max-w-[600px] mx-auto">
            This is not an AI module bolted onto an old course. The entire curriculum has been rebuilt around AI-assisted ecommerce execution — from product research to scaling.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 gap-[18px]">
          {/* Row 1: Full-width overview card */}
          <div
            className="md:col-span-2 rounded-[22px] p-8 md:p-11"
            style={{
              background: "linear-gradient(140deg, rgba(88,62,141,0.35) 0%, rgba(23,21,30,0.9) 55%)",
              border: "1px solid rgba(155,126,219,0.25)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Left: overview */}
              <div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full mb-6" style={{ border: "1px solid rgba(155,126,219,0.35)", background: "rgba(88,62,141,0.15)" }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B394F2] mr-2" />
                  <span className="text-[11px] font-bold text-[#B394F2] tracking-[0.12em] uppercase">Mentorship Overview</span>
                </div>

                <h3 className="font-serif text-[clamp(22px,2.8vw,30px)] leading-[1.15] tracking-[-0.01em] text-white mb-5">
                  A complete system for founders who want to build with AI and operator-level guidance.
                </h3>

                <p className="text-[15px] leading-[1.7] text-[rgba(255,255,255,0.6)] mb-7">
                  Work 1:1 with experienced ecommerce operators across AI product research, store buildout, creative production, paid ads and operations — so every stage of your business moves faster with better systems.
                </p>

                {/* CTA */}
                <a
                  href="/curriculums"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white text-[14px] font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
                    boxShadow: "0 12px 40px rgba(123,91,181,0.45)",
                  }}
                >
                  Apply For 1-on-1 Mentorship
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <p className="text-[12px] text-[rgba(255,255,255,0.4)] font-medium mt-2.5">
                  Limited places. Application required.
                </p>

                {/* Tools row */}
                <div className="mt-7 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="text-[11px] text-[rgba(255,255,255,0.4)] font-medium tracking-[0.08em] uppercase mb-3">
                    Tools & Channels Covered
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[12px] font-medium text-[rgba(255,255,255,0.7)] px-3 py-1.5 rounded-full"
                        style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: trust points */}
              <div className="flex flex-col justify-center gap-4">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#7B5BB5] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-[14px] text-[rgba(255,255,255,0.8)] leading-[1.5]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rows 2-3: Step cards in 2x2 grid */}
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-[22px] p-8 md:p-9 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "#17151E",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="text-[11px] font-bold tracking-[0.12em] text-[#B394F2] mb-3">
                STEP {step.step}
              </p>
              <h4 className="text-[19px] font-bold text-white mb-3 leading-tight">
                {step.title}
              </h4>
              <p className="text-[14px] leading-[1.6] text-[rgba(255,255,255,0.6)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
