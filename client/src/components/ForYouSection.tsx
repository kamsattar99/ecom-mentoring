const forYou = [
  "You want to build an ecommerce business using AI tools and proven systems",
  "You want personalised feedback on your actual store, products, ads and strategy",
  "You are ready to test, learn, optimise and keep moving forward",
  "You understand that growth requires investment, consistency and execution",
  "You want an AI-integrated roadmap instead of another collection of random tactics",
];

const notForYou = [
  "You are looking for shortcuts instead of doing the work",
  "You want passive content but are not willing to implement",
  "You are not ready to test products, creatives or offers consistently",
  "You prefer generic advice over personalised, direct feedback",
  "You are not currently prepared to invest time, focus or resources into building properly",
];

export default function ForYouSection() {
  return (
    <section className="py-[80px] md:py-[110px] relative overflow-hidden section-alt">
      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <p className="eyebrow mb-4">Who this is for</p>
          <h2 className="font-serif text-[clamp(32px,4vw,50px)] leading-[1.1] tracking-[-0.015em] text-white">
            Built For Serious Founders,{" "}
            <span className="italic text-[#B394F2]">Not Passive Course Collectors</span>
          </h2>
          <p className="text-[14px] md:text-[15px] text-[rgba(255,255,255,0.5)] mt-4 max-w-[500px] mx-auto leading-[1.7]">
            This is not another passive course you buy and forget about. It is a hands-on mentorship for people ready to build, test, get feedback and execute consistently.
          </p>
        </div>

        {/* Single split card */}
        <div
          className="max-w-[1000px] mx-auto rounded-[24px] overflow-hidden"
          style={{
            background: "#17151E",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="grid md:grid-cols-2">
            {/* Left - For You */}
            <div className="p-7 md:p-9" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-emerald-400 mb-6">
                THIS IS FOR YOU IF…
              </p>
              <ul className="space-y-4">
                {forYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[14px] text-[rgba(255,255,255,0.8)] leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Not For You */}
            <div className="p-7 md:p-9">
              <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[rgba(255,255,255,0.4)] mb-6">
                THIS MAY NOT BE FOR YOU IF…
              </p>
              <ul className="space-y-4">
                {notForYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[rgba(255,255,255,0.3)] mt-0.5 shrink-0">✕</span>
                    <span className="text-[14px] text-[rgba(255,255,255,0.45)] leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Conversion bridge */}
        <div className="text-center mt-12">
          <p className="text-[14px] text-[rgba(255,255,255,0.6)] mb-5 font-medium">
            If the left side sounds like you, the next step is to apply.
          </p>
          <a
            href="/curriculums"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white text-[14px] font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
              boxShadow: "0 12px 40px rgba(123,91,181,0.45)",
            }}
          >
            Apply For 1-on-1 Mentorship
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="text-[11px] text-[rgba(255,255,255,0.3)] mt-4">
            Applications are reviewed before calls are booked. Limited mentor capacity.
          </p>
        </div>
      </div>
    </section>
  );
}
