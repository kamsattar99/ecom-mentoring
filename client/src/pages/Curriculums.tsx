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
          <span className="eyebrow mb-4 block">Choose Your Path</span>
          <h1
            className="text-white mb-5"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(32px, 5vw, 54px)", lineHeight: 1.1 }}
          >
            One System. Two Ways To{" "}
            <em className="italic text-[#B394F2]">Learn & Launch.</em>
          </h1>
          <p className="text-[16px] md:text-[17px] leading-[1.7] max-w-[660px] mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Both programmes teach the same AI-powered ecommerce system. The difference is how you get there: an accelerated crash course with done-for-you resources, or a deep-skill mentorship where you learn to build everything yourself.
          </p>
        </div>

        {/* Visual Comparison Strip */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-14 rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* Launch side */}
          <div className="py-7 px-6 text-center" style={{ background: "#17151E" }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-4" style={{ color: "#B394F2" }}>
              AI Ecom Command: Launch
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center justify-center gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B394F2" strokeWidth="2" className="shrink-0">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span className="text-[14px] text-white font-medium">Accelerated & Done-For-You</span>
              </div>
              <div className="flex items-center justify-center gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B394F2" strokeWidth="2" className="shrink-0">
                  <path d="M15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4" />
                </svg>
                <span className="text-[14px] text-white font-medium">1-on-1 Calls + Video Lessons</span>
              </div>
              <div className="flex items-center justify-center gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B394F2" strokeWidth="2" className="shrink-0">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
                <span className="text-[14px] text-white font-medium">Proven Resources Provided</span>
              </div>
            </div>
          </div>

          {/* Mentorship side */}
          <div
            className="py-7 px-6 text-center"
            style={{ background: "linear-gradient(135deg, rgba(88,62,141,0.12) 0%, #17151E 100%)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-4" style={{ color: "#B394F2" }}>
              1-on-1 AI Ecommerce Mentorship
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center justify-center gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B394F2" strokeWidth="2" className="shrink-0">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                <span className="text-[14px] text-white font-medium">Deep Skill-Building</span>
              </div>
              <div className="flex items-center justify-center gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B394F2" strokeWidth="2" className="shrink-0">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="text-[14px] text-white font-medium">Exclusively 1-on-1 Live</span>
              </div>
              <div className="flex items-center justify-center gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B394F2" strokeWidth="2" className="shrink-0">
                  <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                </svg>
                <span className="text-[14px] text-white font-medium">Learn To Do It Yourself</span>
              </div>
            </div>
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
            {/* Badge */}
            <div className="mb-4">
              <span
                className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.08em]"
                style={{ background: "rgba(88,62,141,0.15)", border: "1px solid rgba(155,126,219,0.25)", color: "#c4a8ff" }}
              >
                Best Value — Accelerated Launch
              </span>
            </div>

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
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>How You Learn</p>
              <p className="text-[15px] md:text-[16px] font-semibold text-white">1-on-1 calls + video lessons + done-for-you resources</p>
            </div>

            {/* Description */}
            <p className="text-[14px] leading-[1.7] mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              An accelerated crash course designed to get you launched fast. You receive proven winning products we've found and verified, done-for-you resources, structured video lessons, and weekly 1-on-1 calls for guidance. Everything is built to remove guesswork and compress your path to a live, revenue-generating store.
            </p>

            {/* Ideal for — visual comparison */}
            <div className="mb-6 py-4 px-5 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: "#B394F2" }}>This Is For You If</p>
              <ul className="space-y-2.5">
                {[
                  "You're a complete beginner and want a fast, structured path to launch",
                  "You prefer learning through video lessons with 1-on-1 support alongside",
                  "You want proven resources handed to you so you can move faster",
                  "You want exceptional value at an accessible investment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#9B7EDB] shrink-0 mt-0.5">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[13px] leading-[1.5]" style={{ color: "rgba(255,255,255,0.65)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum */}
            <div className="mb-8 flex-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>The AI Ecommerce System</p>
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
            <div className="mb-4">
              <span
                className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.08em]"
                style={{ background: "rgba(88,62,141,0.25)", border: "1px solid rgba(155,126,219,0.4)", color: "#c4a8ff" }}
              >
                Full Skill Mastery — Exclusively 1-on-1
              </span>
            </div>

            {/* Name */}
            <h2 className="text-white text-[22px] md:text-[24px] font-semibold mb-2">
              1-on-1 AI Ecommerce Mentorship
            </h2>

            {/* Price + Duration */}
            <div className="flex items-center gap-4 mb-5">
              <span className="text-white text-[28px] md:text-[32px] font-bold tracking-tight">$5,000</span>
              <div className="w-px h-7" style={{ background: "rgba(255,255,255,0.15)" }} />
              <span className="text-[14px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>6 Weeks</span>
            </div>

            {/* Delivery — prominent */}
            <div className="mb-5 py-3 px-4 rounded-xl" style={{ background: "rgba(88,62,141,0.15)", border: "1px solid rgba(155,126,219,0.25)" }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>How You Learn</p>
              <p className="text-[15px] md:text-[16px] font-semibold text-white">3 live 1-on-1 calls every week · no video lessons</p>
            </div>

            {/* Description */}
            <p className="text-[14px] leading-[1.7] mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              A deep-skill mentorship built for founders who want to learn how to do everything themselves. No videos, no done-for-you shortcuts — just intensive 1-on-1 live sessions three times a week where you develop the ability to research, build, launch, and scale independently. You leave with skills you own for life.
            </p>

            {/* Ideal for — visual comparison */}
            <div className="mb-6 py-4 px-5 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: "#B394F2" }}>This Is For You If</p>
              <ul className="space-y-2.5">
                {[
                  "You want to develop the skills to run ecommerce independently and confidently",
                  "You learn best through live, direct teaching rather than watching videos",
                  "You want maximum 1-on-1 access — three calls every single week",
                  "You're a beginner, intermediate, or even experienced and want tailored guidance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#9B7EDB] shrink-0 mt-0.5">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[13px] leading-[1.5]" style={{ color: "rgba(255,255,255,0.65)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum */}
            <div className="mb-8 flex-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>The AI Ecommerce System</p>
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
          Not sure which format is right for you? Apply now and we'll help you choose based on your goals, budget, and preferred way of learning.
        </p>
      </div>
    </div>
  );
}
