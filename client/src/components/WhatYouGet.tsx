const deliverables = [
  { num: "01", title: "Weekly 1:1 Strategy Calls", description: "Review progress, remove bottlenecks and leave each call with clear next actions — including which AI tools to use next." },
  { num: "02", title: "Direct Mentor Chat", description: "Ask questions as you build, launch and test — get answers in hours, not weeks." },
  { num: "03", title: "AI SOPs, Templates & Frameworks", description: "Use AI-integrated systems for product research, store setup, creative testing, ads and scaling." },
  { num: "04", title: "Store & Ad Account Reviews", description: "Get practical feedback on your actual store, funnels, creatives and campaign data — with AI optimisation suggestions." },
  { num: "05", title: "AI Creative & Offer Feedback", description: "Refine your hooks, offers and product positioning using AI creative workflows before spending more on traffic." },
];

export default function WhatYouGet() {
  return (
    <section className="py-[80px] md:py-[110px] relative overflow-hidden section-alt">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Chat mockup */}
          <div className="relative">
            <div
              className="rounded-[22px] overflow-hidden"
              style={{
                background: "#17151E",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
              }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-5 py-3" style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-lg text-[11px] text-[rgba(255,255,255,0.4)] font-medium" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
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
                    <p className="text-[11px] text-[rgba(255,255,255,0.35)] mb-1">Mentor · 2:34 PM</p>
                    <div className="rounded-2xl rounded-tl-md px-4 py-3" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <p className="text-[13px] text-[rgba(255,255,255,0.8)] leading-[1.55]">Your creative angle is strong, but the hook needs to lead with the pain point. Test 3 variations: problem-led, proof-led and curiosity-led.</p>
                    </div>
                  </div>
                </div>

                {/* Student message */}
                <div className="flex gap-3 justify-end">
                  <div>
                    <p className="text-[11px] text-[rgba(255,255,255,0.35)] mb-1 text-right">You · 2:36 PM</p>
                    <div className="rounded-2xl rounded-tr-md px-4 py-3"
                      style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)" }}
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
                    <p className="text-[11px] text-[rgba(255,255,255,0.35)] mb-1">Mentor · 2:37 PM</p>
                    <div className="rounded-2xl rounded-tl-md px-4 py-3" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <p className="text-[13px] text-[rgba(255,255,255,0.8)] leading-[1.55]">Keep the audience stable first. Isolate the creative variable so the data tells us what is actually working.</p>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex-1 px-4 py-2.5 rounded-full text-[12px] text-[rgba(255,255,255,0.3)]" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    Type a message...
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text content */}
          <div>
            <p className="eyebrow mb-4">What's included</p>

            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.02em] text-white mb-4">
              The AI Tools, Guidance & Feedback You Need To Scale
            </h2>

            <p className="text-[15px] md:text-[16px] leading-[1.65] text-[rgba(255,255,255,0.6)] mb-8 max-w-[460px]">
              No endless theory or generic modules — just direct mentor access, AI-integrated operating systems, store feedback, ad reviews and the practical guidance needed to move faster.
            </p>

            {/* Numbered deliverables list */}
            <div className="space-y-0">
              {deliverables.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-5"
                  style={{ borderBottom: i < deliverables.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}
                >
                  <span className="text-[12px] font-bold text-[#B394F2] mt-1 shrink-0">{item.num}</span>
                  <div>
                    <p className="text-[15px] font-bold text-white mb-1">{item.title}</p>
                    <p className="text-[13px] text-[rgba(255,255,255,0.55)] leading-[1.55]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://e-commercementoring.com/learn-more"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
