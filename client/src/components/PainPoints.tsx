
const painPoints = [
  {
    title: "Product Guesswork",
    body: "You spend hours researching products, but still feel unsure what will actually sell.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#583E8D" strokeWidth="1.8" />
        <path d="M9 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="17" r="0.5" fill="#583E8D" stroke="#583E8D" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    title: "Ad Spend Anxiety",
    body: "You put money into ads without confidence that the numbers will ever make sense.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Stuck At Low Sales",
    body: "Your store makes some sales, but never seems to break through into real momentum.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 3v18h18" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 17l4-4 4 4 6-6" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Falling Behind",
    body: "Competitors always seem ahead while you are still trying to figure out the next move.",
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
    title: "Advice Overload",
    body: 'You are bombarded by gurus, tools, and conflicting opinions — and none of it feels clear.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 7h8M8 11h5" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "No Clear Traction",
    body: "You keep changing strategy, but the business still does not feel stable or scalable.",
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
            <span className="text-[12px] font-semibold text-[#583E8D] tracking-wide uppercase">Why most stores stay stuck</span>
          </div>

          <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] leading-[1.1] tracking-[-0.02em] text-[#17191c] max-w-[720px] mx-auto mb-5">
            Does Building Your Store Feel More{" "}
            <span className="text-[#583E8D] italic">Draining Than Rewarding?</span>
          </h2>

          <p className="text-[16px] md:text-[17px] leading-[1.65] text-[#5a5a6a] max-w-[560px] mx-auto">
            If you are stuck guessing, second-guessing, and spinning your wheels — you are not alone. Most founders do not need more noise, they need a clear roadmap.
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
            You do not need more noise — you need a proven system.
          </p>
        </div>
      </div>
    </section>
  );
}
