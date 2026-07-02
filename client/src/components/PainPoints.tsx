const painPoints = [
  {
    num: "01",
    title: "Copying Saturated Products",
    body: "Scrolling TikTok and AliExpress hoping to find a winner instead of using structured AI validation systems.",
  },
  {
    num: "02",
    title: "Overspending On Weak Creatives",
    body: "Paying for UGC and static ads without testing enough angles or using AI creative tools to reduce costs.",
  },
  {
    num: "03",
    title: "Building Stores Manually",
    body: "Spending weeks on Shopify setup that AI-assisted workflows can compress into days.",
  },
  {
    num: "04",
    title: "Testing Without A System",
    body: "Launching campaigns with no framework for when to kill, scale or iterate — burning budget on guesswork.",
  },
  {
    num: "05",
    title: "Using AI For Random Prompts",
    body: "Asking ChatGPT to write product descriptions instead of building real AI workflows across the full business.",
  },
  {
    num: "06",
    title: "Following Outdated Strategies",
    body: "Watching 2022 tutorials in a market that moves every quarter — while AI-powered founders pull ahead.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-[80px] md:py-[110px] relative overflow-hidden section-alt">
      <div className="container max-w-[1180px]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-[72px]">
          {/* Left column - sticky */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            {/* Badge */}
            <div
              className="inline-flex items-center px-3.5 py-1.5 rounded-full mb-6"
              style={{
                border: "1px solid rgba(231,76,60,0.3)",
                background: "rgba(231,76,60,0.08)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#e74c3c] mr-2 animate-pulse" />
              <span className="text-[12px] font-bold text-[#f0a396] tracking-[0.12em] uppercase">The Market Has Shifted</span>
            </div>

            <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] leading-[1.1] tracking-[-0.02em] text-white mb-5">
              Most Dropshippers Are Still Building{" "}
              <span className="text-[#B394F2] italic">The Old Way</span>
            </h2>

            <p className="text-[16px] md:text-[17px] leading-[1.65] text-[rgba(255,255,255,0.6)] mb-6">
              Dropshipping in 2026 is no longer won by copying products, building basic stores and hoping your ads work. AI has changed the speed, the tools and the execution — but most people are still stuck doing everything manually.
            </p>

            <p className="font-serif text-[17px] italic text-[#B394F2]">
              The advantage now belongs to founders who can use AI properly inside the full business — not just for one-off tasks.
            </p>
          </div>

          {/* Right column - ledger list */}
          <div className="flex flex-col">
            {painPoints.map((point, i) => (
              <div
                key={point.num}
                className="grid grid-cols-[64px_1fr] gap-4 py-6"
                style={{
                  borderBottom: i < painPoints.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                <span className="font-serif text-[32px] text-[rgba(255,255,255,0.25)] leading-none pt-1">
                  {point.num}
                </span>
                <div>
                  <h4 className="text-[16px] font-bold text-white mb-2 leading-tight">
                    {point.title}
                  </h4>
                  <p className="text-[14px] leading-[1.6] text-[rgba(255,255,255,0.55)]">
                    {point.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
