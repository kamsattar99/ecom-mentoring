import { useEffect } from "react";

const mentors = [
  {
    name: "Nail",
    role: "Brand Builder & E-Commerce Mentor",
    image: "https://i.ibb.co/Hf4Z2FjB/Gemini-Generated-Image-c5x4sfc5x4sfc5x4.png",
    credentials: [
      "Built and scaled e-commerce brands using AI tools",
      "Experience across Shopify & international markets",
      "Focuses on brand building & AI-powered operations",
    ],
    specialties: ["Brand strategy", "AI store systems", "Operations"],
    bio: "Nail brings hands-on experience from building multiple Shopify brands across international markets, helping students integrate AI tools into their operational foundations for sustainable e-commerce growth.",
  },
  {
    name: "Kamil Sattar",
    role: "Founder & Lead Mentor",
    image: "https://i.ibb.co/jPTyKVyk/Screenshot-2026-01-12-at-14-04-02.png",
    featured: true,
    credentials: [
      "Founder of The Ecom King",
      "10+ years of e-commerce experience",
      "1,000+ entrepreneurs trained with AI-integrated methods",
    ],
    specialties: ["AI product research", "Paid ads", "Scaling"],
    bio: "Kamil brings over a decade of hands-on e-commerce experience, helping students leverage AI across product validation, store optimisation and profitable scaling.",
  },
  {
    name: "Inders",
    role: "E-Commerce Growth Mentor",
    image: "https://i.ibb.co/gZzwW6Hd/Gemini-Generated-Image-yzo8xlyzo8xlyzo8.png",
    credentials: [
      "Built e-commerce brands across multiple niches",
      "Strong understanding of consumer psychology & AI analytics",
      "Helps founders improve conversions with AI-driven insights",
    ],
    specialties: ["Growth strategy", "AI analytics", "Store optimisation"],
    bio: "Inders helps founders optimise conversion rates, systemise growth with AI tools, and turn underperforming stores into predictable revenue machines through data-driven decisions.",
  },
];

export default function LearnMore() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://scripts.converteai.net/45323800-eb58-4cdc-8f24-cdf73ac80cfc/players/69d95194d7a6aac50a9b93e2/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      try {
        document.head.removeChild(script);
      } catch (e) {
        // script may already be removed
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0E13]">
      {/* Video Section */}
      <section className="relative pt-24 md:pt-32 pb-20 md:pb-28 px-4 overflow-hidden">
        {/* Radial purple glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(123,91,181,0.28) 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-[900px] mx-auto">
          {/* Eyebrow Badge */}
          <div className="text-center mb-5">
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wide uppercase"
              style={{
                border: "1px solid rgba(155,126,219,0.35)",
                background: "rgba(88,62,141,0.15)",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#B394F2]">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch Before Applying
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-center max-w-[700px] mx-auto mb-4 leading-[1.15] tracking-[-0.02em] text-white"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(30px,4.5vw,54px)" }}
          >
            See How The <em className="italic text-[#B394F2]">AI-Powered</em> Ecom Mentorship Works
          </h1>

          {/* Subheading */}
          <p className="text-center text-[15px] md:text-[16px] leading-relaxed max-w-[600px] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
            Watch this short breakdown to understand the AI-integrated roadmap, support and expectations before you apply.
          </p>

          {/* Video Container */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "16px",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(155,126,219,0.2)",
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: `<vturb-smartplayer id="vid-69d95194d7a6aac50a9b93e2" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>`,
              }}
            />
          </div>

          {/* Video tip */}
          <p className="text-center text-[12px] mt-4 font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
            Tip: watch at 1.25x–1.5x speed if you're short on time.
          </p>

          {/* What you'll learn points */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 mt-8 mb-10">
            {[
              "How the mentorship is structured",
              "What support you get each week",
              "What we expect from applicants",
            ].map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#9B7EDB] shrink-0">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {point}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/apply"
              className="inline-flex items-center gap-2 text-white text-[15px] md:text-[16px] font-medium px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-[2px]"
              style={{
                background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
                boxShadow: "0 12px 40px rgba(123,91,181,0.45)",
              }}
            >
              Apply For Mentorship
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <p className="mt-4 text-[13px] font-medium max-w-[400px] mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>
              Application takes around 2 minutes. We'll review your goals, budget and current stage.
            </p>
          </div>

          {/* Trust Row */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
            {["1:1 mentorship", "Structured roadmap", "Store & ad reviews", "Application required"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                <span className="w-1 h-1 rounded-full bg-[#9B7EDB]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Mentors Section */}
      <section
        className="py-24 md:py-28 px-4"
        style={{
          background: "#131118",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14 md:mb-18">
            <span className="text-[#B394F2] text-[12px] font-bold tracking-[0.12em] uppercase mb-5 block">
              Your Mentors
            </span>
            <h2
              className="text-white text-center leading-[1.15] tracking-[-0.02em]"
              style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(28px,4vw,50px)" }}
            >
              Meet The Operators Behind The <em className="italic text-[#B394F2]">AI Mentorship</em>
            </h2>
            <p className="mt-4 text-[15px] md:text-[16px] max-w-[620px] mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Work with mentors who have built, scaled and managed real e-commerce businesses using AI — bringing practical feedback, AI-integrated frameworks and accountability to your store.
            </p>
          </div>

          {/* Mentor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
            {mentors.map((mentor) => (
              <div
                key={mentor.name}
                className="relative overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
                style={{
                  background: mentor.featured
                    ? "linear-gradient(160deg, rgba(88,62,141,0.35) 0%, #17151E 60%)"
                    : "#17151E",
                  border: mentor.featured
                    ? "1px solid rgba(155,126,219,0.4)"
                    : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "22px",
                  boxShadow: mentor.featured
                    ? "0 24px 64px rgba(88,62,141,0.3)"
                    : "0 8px 32px rgba(0,0,0,0.15)",
                }}
              >
                {/* Featured badge */}
                {mentor.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#7B5BB5]/20 text-[#c4a8ff] text-[11px] font-medium border border-[#7B5BB5]/30">
                      Lead Mentor
                    </span>
                  </div>
                )}

                {/* Photo */}
                <div className="relative h-[260px] md:h-[280px] overflow-hidden">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className={`w-full h-full object-cover object-top ${mentor.featured ? "brightness-110" : "brightness-105"}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17151E] via-[#17151E]/20 to-transparent" />
                  {mentor.featured && (
                    <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(123,91,181,0.15)]" />
                  )}
                </div>

                {/* Content */}
                <div className="p-6 pt-4 flex flex-col flex-1">
                  <h3 className="text-white font-bold text-[20px] mb-1">
                    {mentor.name}
                  </h3>
                  <p className="text-[#7B5BB5] text-[13px] font-semibold mb-4">
                    {mentor.role}
                  </p>

                  {/* Credibility bullets */}
                  <ul className="space-y-2 mb-4">
                    {mentor.credentials.map((cred, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#9B7EDB] shrink-0 mt-0.5">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[13px] leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>{cred}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Short bio */}
                  <p className="text-[13px] leading-[1.7] mb-5 flex-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {mentor.bio}
                  </p>

                  {/* Specialist area tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {mentor.specialties.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#7B5BB5]/10 text-[#c4a8ff] text-[11px] font-medium border border-[#7B5BB5]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bridge CTA under cards */}
          <p className="text-center text-[13px] mt-10 font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
            Apply to see which mentor is best suited to your stage.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section
        className="py-16 px-4"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 text-center">
          {[
            { number: "1,000+", label: "Students Trained" },
            { number: "$20M+", label: "Student-Reported Revenue" },
            { number: "9+", label: "Years Industry Experience" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`${i < 2 ? "md:border-r" : ""}`}
              style={{ borderColor: "rgba(255,255,255,0.12)" }}
            >
              <p
                className="text-white leading-none tracking-tight"
                style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(32px,4.5vw,44px)" }}
              >
                {stat.number}
              </p>
              <p className="text-[13px] mt-2 font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        {/* Disclaimer */}
        <p className="text-center text-[11px] mt-6 px-4 max-w-[600px] mx-auto" style={{ color: "rgba(255,255,255,0.35)" }}>
          Results vary. Figures are based on student-reported outcomes and are not guaranteed. Your success depends on effort, skill and market conditions.
        </p>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-24 md:py-28 px-4">
        <div
          className="relative max-w-[760px] mx-auto px-6 md:px-16 py-16 md:py-20 overflow-hidden"
          style={{
            border: "1px solid rgba(155,126,219,0.3)",
            borderRadius: "32px",
            background: "linear-gradient(160deg, rgba(88,62,141,0.35) 0%, rgba(15,14,19,0.6) 60%)",
          }}
        >
          {/* Radial glow inside panel */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(123,91,181,0.25) 0%, transparent 65%)",
            }}
          />

          <div className="relative z-10">
            {/* Badge */}
            <div className="text-center mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-medium"
                style={{
                  border: "1px solid rgba(155,126,219,0.35)",
                  background: "rgba(88,62,141,0.15)",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#9B7EDB]"></span>
                Limited Mentor Capacity
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-white text-center mb-5 leading-[1.15] tracking-[-0.02em]"
              style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: "clamp(28px,4.5vw,50px)" }}
            >
              Ready To Build With AI And <em className="italic text-[#B394F2]">Scale Faster?</em>
            </h2>

            {/* Subtext */}
            <p className="text-center text-[15px] md:text-[16px] leading-relaxed max-w-[560px] mx-auto mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
              Apply to work 1:1 with experienced e-commerce mentors who integrate AI into every stage — product research, store setup, ads, creatives and scaling.
            </p>

            {/* CTA Button */}
            <div className="text-center mb-5">
              <a
                href="/apply"
                className="inline-flex items-center gap-2 text-white text-[15px] md:text-[16px] font-medium px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-[2px]"
                style={{
                  background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
                  boxShadow: "0 14px 44px rgba(123,91,181,0.5)",
                }}
              >
                Apply For Mentorship
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Reassurance text */}
            <p className="text-center text-[13px] font-medium mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
              Applications are reviewed before calls are booked. No pressure if it is not the right fit.
            </p>

            {/* View curriculum link */}
            <div className="text-center mb-8">
              <a href="/#curriculum" className="inline-flex items-center gap-1 text-[14px] font-medium text-[#B394F2] underline underline-offset-4 decoration-[#B394F2]/40 hover:decoration-[#B394F2] transition-colors">
                View curriculum
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Divider */}
            <div className="mb-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />

            {/* Trust pills */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-medium"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9B7EDB" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                Proven frameworks
              </span>
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-medium"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9B7EDB" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Direct mentor access
              </span>
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-medium"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9B7EDB" strokeWidth="2">
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
                Store & ad reviews
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
