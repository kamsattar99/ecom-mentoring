const oldWay = [
  "Manual product research",
  "Slow store builds",
  "Expensive UGC testing",
  "Guessing ad angles",
  "Generic customer support",
  "Too much trial and error",
];

const newWay = [
  "Faster product validation with AI workflows",
  "AI-assisted competitor research & market analysis",
  "Faster Shopify build workflows with AI tools",
  "More creative testing with less cost",
  "AI-assisted ad hooks, angles and iteration",
  "Support & ops systems built earlier",
  "Direct mentor feedback while you execute",
];

export default function OldVsNew() {
  return (
    <section className="py-[80px] md:py-[110px] relative overflow-hidden bg-[#0F0E13]">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">The Rebuild</p>
          <h2 className="font-serif text-[clamp(30px,4.2vw,50px)] leading-[1.1] tracking-[-0.02em] text-white max-w-[660px] mx-auto mb-5">
            Why The New Version Is{" "}
            <span className="italic text-[#B394F2]">Different</span>
          </h2>
          <p className="text-[15px] md:text-[16px] leading-[1.65] text-[rgba(255,255,255,0.6)] max-w-[560px] mx-auto">
            The mentorship has been completely rebuilt around AI-powered ecommerce execution. Here is what changed.
          </p>
        </div>

        {/* Single split card */}
        <div
          className="max-w-[1000px] mx-auto rounded-[24px] overflow-hidden mb-14"
          style={{
            background: "#17151E",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="grid md:grid-cols-2">
            {/* Left half - Old Way */}
            <div className="p-7 md:p-9" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[rgba(255,255,255,0.45)] mb-6">
                THE OLD WAY
              </p>
              <ul className="space-y-4">
                {oldWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[rgba(255,255,255,0.3)] mt-0.5">✕</span>
                    <span className="text-[14px] text-[rgba(255,255,255,0.4)] leading-[1.6] line-through decoration-[rgba(255,255,255,0.2)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right half - New Way */}
            <div
              className="p-7 md:p-9 relative"
              style={{ background: "linear-gradient(140deg, rgba(88,62,141,0.25) 0%, transparent 70%)" }}
            >
              <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#B394F2] mb-6">
                THE NEW AI-POWERED MENTORSHIP
              </p>
              <ul className="space-y-4">
                {newWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9B7EDB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[14px] text-[rgba(255,255,255,0.85)] leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Founder quote */}
        <div className="max-w-[700px] mx-auto text-center">
          <p className="font-serif text-[24px] md:text-[30px] leading-[1.3] text-[rgba(255,255,255,0.9)] mb-6">
            "I rebuilt this because the old way of teaching dropshipping is no longer enough. The tools have changed, the speed has changed, and serious founders need a mentorship built around what actually works now."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)" }}
            >
              <span className="text-white text-[11px] font-bold">KS</span>
            </div>
            <div className="text-left">
              <p className="text-[13px] font-semibold text-white">Kamil Sattar</p>
              <p className="text-[11px] text-[rgba(255,255,255,0.4)]">Founder, The Ecom King</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
