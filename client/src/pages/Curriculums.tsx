export default function Curriculums() {
  const sharedCurriculum = [
    "AI Product Research & Validation",
    "AI Store Build & Conversion",
    "AI Creatives & Ad Launch",
    "Scaling Ads Intelligently",
    "Store Automation Systems",
    "Building a Real Brand",
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-28 md:pt-36 pb-20 md:pb-28 px-4">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="eyebrow mb-4 block">Our Programmes</span>
          <h1
            className="text-white mb-5"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(32px, 5vw, 54px)", lineHeight: 1.1 }}
          >
            One AI Ecommerce System. Choose Your{" "}
            <em className="italic text-[#B394F2]">Level of Live Support.</em>
          </h1>
          <p className="text-[16px] md:text-[17px] leading-[1.7] max-w-[660px] mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Both programmes teach the same AI-powered ecommerce system. The difference is how you learn it: one weekly live call with structured video lessons, or three live 1-on-1 calls every week with no videos.
          </p>
        </div>

        {/* Delivery Comparison Strip */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 mb-12 rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* Launch side */}
          <div className="flex flex-col items-center justify-center py-6 px-6 text-center" style={{ background: "#17151E" }}>
            <p className="text-[12px] font-bold uppercase tracking-[0.1em] mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              AI Ecom Command: Launch
            </p>
            <div className="flex items-center gap-3 mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B394F2" strokeWidth="1.5" className="shrink-0">
                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="text-white text-[16px] md:text-[18px] font-semibold">1 Live Call Every Week</span>
            </div>
            <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>+ Video Lessons</p>
          </div>

          {/* Mentorship side */}
          <div
            className="flex flex-col items-center justify-center py-6 px-6 text-center"
            style={{ background: "linear-gradient(135deg, rgba(88,62,141,0.15) 0%, #17151E 100%)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.1em] mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              1-on-1 AI Ecommerce Mentorship
            </p>
            <div className="flex items-center gap-3 mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B394F2" strokeWidth="1.5" className="shrink-0">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="text-white text-[16px] md:text-[18px] font-semibold">3 Live 1-on-1 Calls Every Week</span>
            </div>
            <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>No Video Lessons — Delivered Live</p>
          </div>
        </div>

        {/* Programme Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* $2,500 Launch Card */}
          <div
            className="relative flex flex-col rounded-[24px] p-8 md:p-10 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "#17151E",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            {/* Name */}
            <h2 className="text-white text-[22px] md:text-[24px] font-semibold mb-2">
              AI Ecom Command: Launch
            </h2>

            {/* Price + Duration */}
            <div className="flex items-center gap-4 mb-5">
              <span className="text-white text-[28px] md:text-[32px] font-bold tracking-tight">$2,500</span>
              <div className="w-px h-7" style={{ background: "rgba(255,255,255,0.15)" }} />
              <span className="text-[14px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>6 Weeks</span>
            </div>

            {/* Delivery — prominent */}
            <div className="mb-5 py-3 px-4 rounded-xl" style={{ background: "rgba(88,62,141,0.1)", border: "1px solid rgba(155,126,219,0.2)" }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>Delivery</p>
              <p className="text-[15px] md:text-[16px] font-semibold text-white">1 live call every week + structured video lessons</p>
            </div>

            {/* Description */}
            <p className="text-[14px] leading-[1.7] mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              A six-week AI ecommerce implementation programme combining structured video lessons with one live call every week. Learn the complete system at your own pace, then use the weekly call for questions, implementation guidance, and accountability.
            </p>

            {/* Ideal for */}
            <div className="mb-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>Ideal For</p>
              <p className="text-[14px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.65)" }}>
                Founders who like learning through video, want a clear system to follow, and need a weekly live touchpoint to stay focused and moving.
              </p>
            </div>

            {/* Curriculum */}
            <div className="mb-8 flex-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>The Six-Week AI Ecommerce System</p>
              <ul className="space-y-2.5">
                {sharedCurriculum.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#9B7EDB] shrink-0 mt-0.5">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[13px] leading-[1.5]" style={{ color: "rgba(255,255,255,0.65)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href="/launch"
              className="btn-primary text-center justify-center w-full text-[15px]"
            >
              Apply for Launch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* $5,000 Mentorship Card */}
          <div
            className="relative flex flex-col rounded-[24px] p-8 md:p-10 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(160deg, rgba(88,62,141,0.2) 0%, rgba(23,21,30,0.95) 50%)",
              border: "1px solid rgba(155,126,219,0.25)",
              boxShadow: "0 24px 64px rgba(88,62,141,0.15)",
            }}
          >
            {/* Badge */}
            <div className="absolute top-6 right-6">
              <span
                className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.08em]"
                style={{ background: "rgba(88,62,141,0.25)", border: "1px solid rgba(155,126,219,0.4)", color: "#c4a8ff" }}
              >
                3 Live 1-on-1 Calls Every Week
              </span>
            </div>

            {/* Name */}
            <h2 className="text-white text-[22px] md:text-[24px] font-semibold mb-2 pr-16 md:pr-0">
              1-on-1 AI Ecommerce Mentorship
            </h2>

            {/* Price + Duration */}
            <div className="flex items-center gap-4 mb-5">
              <span className="text-white text-[28px] md:text-[32px] font-bold tracking-tight">$5,000</span>
              <div className="w-px h-7" style={{ background: "rgba(255,255,255,0.15)" }} />
              <span className="text-[14px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>Ongoing</span>
            </div>

            {/* Delivery — prominent */}
            <div className="mb-5 py-3 px-4 rounded-xl" style={{ background: "rgba(88,62,141,0.15)", border: "1px solid rgba(155,126,219,0.25)" }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>Delivery</p>
              <p className="text-[15px] md:text-[16px] font-semibold text-white">3 live 1-on-1 calls every week · no video lessons</p>
            </div>

            {/* Description */}
            <p className="text-[14px] leading-[1.7] mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              The same AI ecommerce system, delivered live through three 1-on-1 calls every week. Get direct teaching, real-time answers, and consistent accountability without relying on video lessons.
            </p>

            {/* Ideal for */}
            <div className="mb-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>Ideal For</p>
              <p className="text-[14px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.65)" }}>
                Founders who learn best live, want more direct access every week, and prefer to move through the system with real-time guidance rather than video-based learning.
              </p>
            </div>

            {/* Curriculum */}
            <div className="mb-8 flex-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>The Six-Week AI Ecommerce System</p>
              <ul className="space-y-2.5">
                {sharedCurriculum.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#9B7EDB] shrink-0 mt-0.5">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[13px] leading-[1.5]" style={{ color: "rgba(255,255,255,0.65)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href="/learn-more"
              className="btn-primary text-center justify-center w-full text-[15px]"
            >
              Apply for Mentorship
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer helper line */}
        <p className="text-center text-[13px] mt-12" style={{ color: "rgba(255,255,255,0.45)" }}>
          Not sure which learning format fits you? Apply now and we'll help you choose the right level of live support.
        </p>
      </div>
    </div>
  );
}
