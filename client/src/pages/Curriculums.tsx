export default function Curriculums() {
  const programmes = [
    {
      name: "AI Ecom Command: Launch",
      price: "$2,500",
      duration: "6 Weeks",
      description:
        "A live, six-week implementation program for founders who want to use AI to find products, build a Shopify store, launch ads, automate operations, and start building a brand properly.",
      delivery: "5 live group calls + 2 implementation weeks",
      ideal: "Beginners and early-stage founders who want a structured, live path to build and launch.",
      highlights: [
        "AI Product Research & Validation",
        "AI Store Building & Conversion",
        "AI Creatives & Ad Launch (2 calls)",
        "Scaling Ads Intelligently",
        "Store Automation Systems",
        "Building a Real Brand",
      ],
      cta: { label: "Learn More", href: "/launch" },
      accent: false,
    },
    {
      name: "1-on-1 AI Ecommerce Mentorship",
      price: "$5,000",
      duration: "Ongoing",
      description:
        "Comprehensive operator-level mentorship with direct 1:1 feedback, store audits, ad reviews, and personalised scaling guidance. Work directly with experienced ecommerce operators across every stage of your business.",
      delivery: "1:1 mentor sessions, store & ad reviews, direct feedback",
      ideal: "Serious founders who want personalised operator-level support, accountability, and scaling guidance.",
      highlights: [
        "AI Product Research & Validation",
        "AI Store Build & Conversion",
        "AI Creatives & Paid Ads",
        "Scaling & Optimisation",
        "AI Operations & Automation",
        "Long-Term Brand Growth",
      ],
      cta: { label: "Apply For Mentorship", href: "/learn-more" },
      accent: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-28 md:pt-36 pb-20 md:pb-28 px-4">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 block">Our Programmes</span>
          <h1
            className="text-white mb-5"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.1 }}
          >
            Two Routes. One <em className="italic text-[#B394F2]">AI-Powered System.</em>
          </h1>
          <p className="text-[16px] md:text-[17px] leading-[1.7] max-w-[620px] mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Choose the path that matches your stage. Both programmes use AI-integrated ecommerce methods — the difference is depth of support and duration.
          </p>
        </div>

        {/* Programme Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {programmes.map((prog) => (
            <div
              key={prog.name}
              className="relative flex flex-col rounded-[24px] p-8 md:p-10 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: prog.accent
                  ? "linear-gradient(160deg, rgba(88,62,141,0.3) 0%, rgba(23,21,30,0.95) 50%)"
                  : "#17151E",
                border: prog.accent
                  ? "1px solid rgba(155,126,219,0.35)"
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: prog.accent
                  ? "0 24px 64px rgba(88,62,141,0.2)"
                  : "0 8px 32px rgba(0,0,0,0.2)",
              }}
            >
              {/* Badge for premium */}
              {prog.accent && (
                <div className="absolute top-6 right-6">
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-medium"
                    style={{ background: "rgba(88,62,141,0.25)", border: "1px solid rgba(155,126,219,0.35)", color: "#c4a8ff" }}
                  >
                    Most Comprehensive
                  </span>
                </div>
              )}

              {/* Name */}
              <h2 className="text-white text-[22px] md:text-[24px] font-semibold mb-2 pr-28 md:pr-0">
                {prog.name}
              </h2>

              {/* Price + Duration */}
              <div className="flex items-center gap-4 mb-5">
                <span className="text-white text-[28px] md:text-[32px] font-bold tracking-tight">{prog.price}</span>
                <div className="w-px h-7" style={{ background: "rgba(255,255,255,0.15)" }} />
                <span className="text-[14px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>{prog.duration}</span>
              </div>

              {/* Description */}
              <p className="text-[14px] leading-[1.7] mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                {prog.description}
              </p>

              {/* Delivery */}
              <div className="mb-6">
                <p className="text-[12px] font-bold uppercase tracking-[0.1em] mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>Delivery</p>
                <p className="text-[14px]" style={{ color: "rgba(255,255,255,0.7)" }}>{prog.delivery}</p>
              </div>

              {/* Ideal for */}
              <div className="mb-6">
                <p className="text-[12px] font-bold uppercase tracking-[0.1em] mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>Ideal For</p>
                <p className="text-[14px]" style={{ color: "rgba(255,255,255,0.7)" }}>{prog.ideal}</p>
              </div>

              {/* Curriculum highlights */}
              <div className="mb-8 flex-1">
                <p className="text-[12px] font-bold uppercase tracking-[0.1em] mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>Curriculum</p>
                <ul className="space-y-2.5">
                  {prog.highlights.map((item) => (
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
                href={prog.cta.href}
                className="btn-primary text-center justify-center w-full text-[15px]"
              >
                {prog.cta.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[13px] mt-12" style={{ color: "rgba(255,255,255,0.4)" }}>
          Both programmes use AI-integrated ecommerce methods built from 7+ years of real operator experience.
          <br />
          Not sure which is right for you? Start with <a href="/launch" className="text-[#B394F2] underline underline-offset-4 decoration-[#B394F2]/40 hover:decoration-[#B394F2] transition-colors">AI Ecom Command: Launch</a> for a structured 6-week path.
        </p>
      </div>
    </div>
  );
}
