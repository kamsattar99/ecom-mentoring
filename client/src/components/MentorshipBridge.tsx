export default function MentorshipBridge() {
  return (
    <section className="py-[60px] md:py-[80px] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f3eef9 0%, #faf9f7 100%)" }}>
      <div className="container">
        <div className="max-w-[720px] mx-auto text-center">
          {/* Headline */}
          <h2 className="font-serif text-[clamp(28px,4vw,46px)] leading-[1.1] tracking-[-0.02em] text-[#17191c] mb-5">
            AI Gives You Speed.{" "}
            <span className="italic text-[#583E8D]">Mentorship Gives You Direction.</span>
          </h2>

          {/* Body */}
          <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#4c4c4c] max-w-[600px] mx-auto mb-8">
            AI can help you move faster, but without the right strategy it can also help you move faster in the wrong direction. That is where the 1-on-1 mentorship matters. You get direct feedback on what to build, what to test, what to cut, what to improve and what to focus on next.
          </p>

          {/* Visual divider with two pillars */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-[560px] mx-auto">
            {/* AI pillar */}
            <div className="rounded-2xl bg-white border border-[#e8e4f0] p-5 text-left"
              style={{ boxShadow: "0 4px 20px rgba(88,62,141,0.05)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: "linear-gradient(135deg, #f3eef9 0%, #ebe3f5 100%)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#583E8D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <p className="text-[14px] font-bold text-[#17191c] mb-1">AI = Speed</p>
              <p className="text-[13px] text-[#5a5a6a] leading-[1.6]">
                Faster product validation, creative testing, store builds and ad iteration.
              </p>
            </div>

            {/* Mentorship pillar */}
            <div className="rounded-2xl bg-white border border-[#e8e4f0] p-5 text-left"
              style={{ boxShadow: "0 4px 20px rgba(88,62,141,0.05)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <p className="text-[14px] font-bold text-[#17191c] mb-1">Mentorship = Direction</p>
              <p className="text-[13px] text-[#5a5a6a] leading-[1.6]">
                Direct feedback on what to build, what to cut, what to test and what to focus on next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
