
const deliverables = [
  {
    title: "Weekly 1:1 Strategy Calls",
    description: "Review progress, remove bottlenecks and leave each call with clear next actions — including which AI tools to use next.",
    tag: "Personal guidance",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Direct Mentor Chat",
    description: "Ask questions as you build, launch and test — get answers in hours, not weeks.",
    tag: "Fast feedback",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 9h8M8 13h5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI SOPs, Templates & Frameworks",
    description: "Use AI-integrated systems for product research, store setup, creative testing, ads and scaling.",
    tag: "AI-powered systems",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="1.8" />
        <path d="M9 15l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Store & Ad Account Reviews",
    description: "Get practical feedback on your actual store, funnels, creatives and campaign data — with AI optimisation suggestions.",
    tag: "Real business review",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="white" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "AI Creative & Offer Feedback",
    description: "Refine your hooks, offers and product positioning using AI creative workflows before spending more on traffic.",
    tag: "Conversion support",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WhatYouGet() {
  return (
    <section className="py-[80px] md:py-[120px] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #faf9f7 0%, #f8f5fc 50%, #f3eef9 100%)" }}>
      {/* Background decorations */}
      <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(88,62,141,0.08) 0%, transparent 60%)" }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Mockups */}
          <div
            className="relative order-2 lg:order-1"
          >
            {/* Warm gradient glow behind */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ede4f7]/60 via-[#f8e8d4]/30 to-transparent rounded-[32px] blur-[50px] scale-110" />

            <div className="relative space-y-5">
              {/* Top - Customer Growth chart */}
              <div
                className="relative"
              >
                <div className="bg-white rounded-[20px] p-5 border border-[#e8e8e8]/40"
                  style={{ boxShadow: "0 20px 60px rgba(88, 62, 141, 0.1), 0 4px 12px rgba(0,0,0,0.03)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-[14px] font-semibold text-[#17191c]">Customer Growth Snapshot</h4>
                    <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">+38% repeat customers</span>
                  </div>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-customers-time-X3ms7jG8yZk3tc2x3jGNVj.webp"
                    alt="Customer Growth Trend"
                    className="w-full rounded-xl"
                    width={400}
                    height={250}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Bottom - Chat mockup */}
              <div
              >
                <div
                  className="bg-white rounded-[20px] overflow-hidden border border-[#e8e8e8]/30"
                  style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.07), 0 4px 16px rgba(88, 62, 141, 0.05)" }}
                >
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-[#f0f0f0] bg-[#fafafa]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="px-4 py-1 rounded-lg bg-white text-[11px] text-[#777b86] font-medium border border-[#e8e8e8]/60">
                        Mentor Chat
                      </div>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    {/* Mentor message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5EC6 100%)" }}
                      >
                        <span className="text-white text-[9px] font-bold">EK</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-[11px] text-[#999] mb-1">Mentor · 2:34 PM</p>
                        <div className="bg-[#f5f4f7] rounded-2xl rounded-tl-md px-4 py-3">
                          <p className="text-[13px] text-[#17191c] leading-[1.55]">Your creative angle is strong, but the hook needs to lead with the pain point. Test 3 variations: problem-led, proof-led and curiosity-led.</p>
                        </div>
                      </div>
                    </div>

                    {/* Student message */}
                    <div className="flex gap-3 justify-end">
                      <div>
                        <p className="text-[11px] text-[#999] mb-1 text-right">You · 2:36 PM</p>
                        <div className="rounded-2xl rounded-tr-md px-4 py-3"
                          style={{ background: "linear-gradient(135deg, #583E8D 0%, #6B4FA8 100%)" }}
                        >
                          <p className="text-[13px] text-white leading-[1.55]">Makes sense. Should I keep the same audience or split test each creative angle?</p>
                        </div>
                      </div>
                    </div>

                    {/* Mentor reply */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5EC6 100%)" }}
                      >
                        <span className="text-white text-[9px] font-bold">EK</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-[11px] text-[#999] mb-1">Mentor · 2:37 PM</p>
                        <div className="bg-[#f5f4f7] rounded-2xl rounded-tl-md px-4 py-3">
                          <p className="text-[13px] text-[#17191c] leading-[1.55]">Keep the audience stable first. Isolate the creative variable so the data tells us what is actually working.</p>
                        </div>
                      </div>
                    </div>

                    {/* Input */}
                    <div className="flex items-center gap-3 pt-3 border-t border-[#f0f0f0]">
                      <div className="flex-1 px-4 py-2.5 rounded-full bg-[#f7f7f8] text-[12px] text-[#a3a6af] border border-[#e8e8e8]/40">
                        Type a message...
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#17191c] flex items-center justify-center">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text content */}
          <div
            className="order-1 lg:order-2"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#583E8D]/12 bg-white/80 backdrop-blur-sm mb-6 shadow-[0_2px_8px_rgba(88,62,141,0.05)]">
              <span className="text-[12px] text-[#583E8D] font-semibold tracking-wide uppercase">What's included</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.02em] text-[#17191c] mb-4">
              The AI Tools, Guidance & Feedback You Need To Scale
            </h2>

            {/* Subheading */}
            <p className="text-[15px] md:text-[16px] leading-[1.65] text-[#4c4c4c] mb-5 max-w-[460px]">
              No endless theory or generic modules — just direct mentor access, AI-integrated operating systems, store feedback, ad reviews and the practical guidance needed to move faster.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["AI workflows at every stage", "Built around your store", "Frameworks you can implement today"].map((pill) => (
                <span key={pill} className="text-[11px] font-medium text-[#583E8D] bg-[#f3eef9] border border-[#583E8D]/8 px-3 py-1.5 rounded-full">
                  {pill}
                </span>
              ))}
            </div>

            {/* Benefits list */}
            <div
              className="rounded-[20px] p-1 space-y-0.5"
              style={{ background: "linear-gradient(155deg, #ffffff 0%, #faf8fd 100%)", border: "1px solid rgba(88,62,141,0.06)", boxShadow: "0 4px 24px rgba(88,62,141,0.05)" }}
            >
              {deliverables.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 p-4 rounded-[16px] hover:bg-white/80 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)", boxShadow: "0 4px 12px rgba(88,62,141,0.2)" }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-[14px] font-bold text-[#17191c] group-hover:text-[#583E8D] transition-colors duration-300">{item.title}</p>
                      <span className="text-[10px] font-medium text-[#583E8D]/70 bg-[#f3eef9] px-2 py-0.5 rounded-full hidden sm:inline-block">{item.tag}</span>
                    </div>
                    <p className="text-[13px] text-[#5a5a6a] leading-[1.55]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
              <a href="#curriculum" className="text-[13px] font-medium text-[#583E8D] hover:text-[#4a3377] transition-colors underline underline-offset-4 decoration-[#583E8D]/30">
                See Curriculum
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
