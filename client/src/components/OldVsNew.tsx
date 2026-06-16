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
    <section className="py-[80px] md:py-[100px] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #faf9f7 0%, #f8f5fc 50%, #f3eef9 100%)" }}>
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#583E8D]/12 bg-white/80 backdrop-blur-sm mb-5 shadow-[0_2px_8px_rgba(88,62,141,0.05)]">
            <span className="text-[12px] text-[#583E8D] font-semibold tracking-wide uppercase">The Rebuild</span>
          </div>
          <h2 className="font-serif text-[clamp(30px,4.2vw,50px)] leading-[1.1] tracking-[-0.02em] text-[#17191c] max-w-[660px] mx-auto mb-5">
            Why The New Version Is{" "}
            <span className="italic text-[#583E8D]">Different</span>
          </h2>
          <p className="text-[15px] md:text-[16px] leading-[1.65] text-[#4c4c4c] max-w-[560px] mx-auto">
            The mentorship has been completely rebuilt around AI-powered ecommerce execution. Here is what changed.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-5 max-w-[920px] mx-auto mb-12">
          {/* Old Way */}
          <div className="rounded-[20px] bg-white overflow-hidden border border-[#e8e8e8]/60"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}
          >
            <div className="h-[3px] w-full bg-gradient-to-r from-[#e0e0e0] via-[#bdbdbd] to-[#e0e0e0]" />
            <div className="p-7 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#f5f5f5]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-[16px] font-bold text-[#17191c]">The Old Way</h3>
              </div>
              <ul className="space-y-3.5">
                {oldWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-[#f5f5f5]">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="3" strokeLinecap="round">
                        <path d="M5 12h14" />
                      </svg>
                    </div>
                    <span className="text-[13px] md:text-[14px] text-[#777] leading-[1.6] line-through decoration-[#ccc]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* New AI-Powered Way */}
          <div className="rounded-[20px] bg-white overflow-hidden border border-[#583E8D]/15"
            style={{ boxShadow: "0 8px 32px rgba(88,62,141,0.08), 0 2px 8px rgba(0,0,0,0.02)" }}
          >
            <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg, #c8b8e8 0%, #583E8D 50%, #c8b8e8 100%)" }} />
            <div className="p-7 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-[16px] font-bold text-[#17191c]">The New AI-Powered Mentorship</h3>
              </div>
              <ul className="space-y-3.5">
                {newWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-[13px] md:text-[14px] text-[#3a3a3e] leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Founder quote (#8) */}
        <div className="max-w-[700px] mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-[#1a1225] to-[#0f0a18] p-7 md:p-9 text-center"
            style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4 opacity-40">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="#7B5BB5" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="#7B5BB5" />
            </svg>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-white/85 italic mb-5 max-w-[560px] mx-auto">
              "I rebuilt this because the old way of teaching dropshipping is no longer enough. The tools have changed, the speed has changed, and serious founders need a mentorship built around what actually works now."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)" }}
              >
                <span className="text-white text-[11px] font-bold">KS</span>
              </div>
              <div className="text-left">
                <p className="text-[13px] font-semibold text-white">Kamil Sattar</p>
                <p className="text-[11px] text-white/50">Founder, The Ecom King</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
