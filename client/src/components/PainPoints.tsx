
const painPoints = [
  {
    title: "Copying Saturated Products",
    body: "Scrolling TikTok and AliExpress hoping to find a winner instead of using structured AI validation systems.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#583E8D" strokeWidth="1.8" />
        <path d="M9 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="17" r="0.5" fill="#583E8D" stroke="#583E8D" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    title: "Overspending On Weak Creatives",
    body: "Paying for UGC and static ads without testing enough angles or using AI creative tools to reduce costs.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Building Stores Manually",
    body: "Spending weeks on Shopify setup that AI-assisted workflows can compress into days.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 3v18h18" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 17l4-4 4 4 6-6" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Testing Without A System",
    body: "Launching campaigns with no framework for when to kill, scale or iterate — burning budget on guesswork.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="#583E8D" strokeWidth="1.8" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Using AI For Random Prompts",
    body: "Asking ChatGPT to write product descriptions instead of building real AI workflows across the full business.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 7h8M8 11h5" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Following Outdated Strategies",
    body: "Watching 2022 tutorials in a market that moves every quarter — while AI-powered founders pull ahead.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#583E8D" strokeWidth="1.8" />
        <path d="M12 6v6l4 2" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function PainPoints() {
  return (
    <section className="py-[80px] md:py-[120px] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f8f5fc 0%, #f3eef9 50%, #faf9f7 100%)" }}>
      <div className="container">
        {/* Header */}
        <div
          className="text-center mb-14 relative"
        >
          {/* Eyebrow label */}
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#583E8D]/12 bg-white/80 backdrop-blur-sm mb-5 shadow-[0_2px_8px_rgba(88,62,141,0.05)]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#e74c3c] mr-2 animate-pulse" />
            <span className="text-[12px] font-semibold text-[#583E8D] tracking-wide uppercase">The Market Has Shifted</span>
          </div>

          <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] leading-[1.1] tracking-[-0.02em] text-[#17191c] max-w-[720px] mx-auto mb-5">
            Most Dropshippers Are Still Building{" "}
            <span className="text-[#583E8D] italic">The Old Way</span>
          </h2>

          <p className="text-[16px] md:text-[17px] leading-[1.65] text-[#5a5a6a] max-w-[560px] mx-auto">
            Dropshipping in 2026 is no longer won by copying products, building basic stores and hoping your ads work. AI has changed the speed, the tools and the execution — but most people are still stuck doing everything manually.
          </p>
        </div>

        {/* 3x2 Grid of pain points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[960px] mx-auto mb-12">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-[18px] p-6 transition-all duration-300 hover:-translate-y-1 border border-[#f0ecf5]/80"
              style={{
                boxShadow: "0 2px 12px rgba(88, 62, 141, 0.04), 0 1px 3px rgba(0,0,0,0.02)",
              }}
            >
              {/* Hover shadow */}
              <div
                className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{
                  boxShadow: "0 8px 32px rgba(88, 62, 141, 0.1), 0 2px 8px rgba(88, 62, 141, 0.05)",
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #f5f0fb 0%, #ede5f7 100%)",
                  }}
                >
                  {point.icon}
                </div>

                {/* Title */}
                <h4 className="text-[15px] font-bold text-[#17191c] mb-2 leading-tight">
                  {point.title}
                </h4>

                {/* Body */}
                <p className="text-[14px] leading-[1.6] text-[#5a5a6a]">
                  {point.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition line */}
        <div
          className="text-center"
        >
          <p className="text-[16px] md:text-[17px] text-[#583E8D] font-medium italic">
            The advantage now belongs to founders who can use AI properly inside the full business — not just for one-off tasks.
          </p>
        </div>
      </div>
    </section>
  );
}
