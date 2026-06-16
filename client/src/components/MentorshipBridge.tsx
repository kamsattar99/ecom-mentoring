export default function MentorshipBridge() {
  return (
    <section className="py-[60px] md:py-[80px] relative overflow-hidden">
      {/* AI-generated speed visual as background */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/ai-speed-visual_9aab2274.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,10,24,0.88) 0%, rgba(26,18,37,0.92) 50%, rgba(15,10,24,0.90) 100%)" }} />
        {/* Subtle purple glow at center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-30" style={{ background: "radial-gradient(ellipse, rgba(124, 87, 255, 0.4) 0%, transparent 70%)" }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-[720px] mx-auto text-center">
          {/* Headline */}
          <h2 className="font-serif text-[clamp(28px,4vw,46px)] leading-[1.1] tracking-[-0.02em] text-white mb-5">
            AI Gives You Speed.{" "}
            <span className="italic text-[#c8b8e8]">Mentorship Gives You Direction.</span>
          </h2>

          {/* Body */}
          <p className="text-[15px] md:text-[16px] leading-[1.7] text-white/70 max-w-[600px] mx-auto mb-8">
            AI can help you move faster, but without the right strategy it can also help you move faster in the wrong direction. That is where the 1-on-1 mentorship matters. You get direct feedback on what to build, what to test, what to cut, what to improve and what to focus on next.
          </p>

          {/* Visual divider with two pillars */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-[560px] mx-auto">
            {/* AI pillar */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5 text-left"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: "linear-gradient(135deg, rgba(124,87,255,0.2) 0%, rgba(124,87,255,0.1) 100%)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8b8e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <p className="text-[14px] font-bold text-white mb-1">AI = Speed</p>
              <p className="text-[13px] text-white/60 leading-[1.6]">
                Faster product validation, creative testing, store builds and ad iteration.
              </p>
            </div>

            {/* Mentorship pillar */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5 text-left"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <p className="text-[14px] font-bold text-white mb-1">Mentorship = Direction</p>
              <p className="text-[13px] text-white/60 leading-[1.6]">
                Direct feedback on what to build, what to cut, what to test and what to focus on next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
