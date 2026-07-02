export default function MentorshipBridge() {
  return (
    <section className="py-[60px] md:py-[90px] relative overflow-hidden bg-[#0F0E13]">
      <div className="container">
        <div className="max-w-[720px] mx-auto text-center">
          {/* Headline */}
          <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] leading-[1.1] tracking-[-0.02em] text-white mb-5">
            AI Gives You Speed.{" "}
            <span className="italic text-[#B394F2]">Mentorship Gives You Direction.</span>
          </h2>

          {/* Body */}
          <p className="text-[15px] md:text-[16px] leading-[1.7] text-[rgba(255,255,255,0.6)] max-w-[600px] mx-auto mb-10">
            AI can help you move faster, but without the right strategy it can also help you move faster in the wrong direction. That is where the 1-on-1 mentorship matters. You get direct feedback on what to build, what to test, what to cut, what to improve and what to focus on next.
          </p>

          {/* Joined two-panel element */}
          <div
            className="inline-flex flex-col sm:flex-row rounded-[18px] overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.12)" }}
          >
            {/* Left panel - AI */}
            <div className="p-6 sm:p-8 text-left sm:min-w-[240px]">
              <p className="font-serif text-[22px] sm:text-[24px] text-white mb-2">AI = Speed</p>
              <p className="text-[13px] text-[rgba(255,255,255,0.55)] leading-[1.6]">
                Faster product validation, creative testing, store builds and ad iteration.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px bg-[rgba(255,255,255,0.12)]" />
            <div className="sm:hidden h-px bg-[rgba(255,255,255,0.12)]" />

            {/* Right panel - Mentorship */}
            <div
              className="p-6 sm:p-8 text-left sm:min-w-[240px]"
              style={{ background: "linear-gradient(140deg, rgba(88,62,141,0.2) 0%, transparent 70%)" }}
            >
              <p className="font-serif text-[22px] sm:text-[24px] text-white mb-2">Mentorship = Direction</p>
              <p className="text-[13px] text-[rgba(255,255,255,0.55)] leading-[1.6]">
                Direct feedback on what to build, what to cut, what to test and what to focus on next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
