import { useEffect } from "react";

const mentors = [
  {
    name: "Nail",
    role: "Brand Builder & E-Commerce Mentor",
    image: "https://i.ibb.co/Hf4Z2FjB/Gemini-Generated-Image-c5x4sfc5x4sfc5x4.png",
    credentials: [
      "Built and scaled e-commerce brands",
      "Experience across Shopify & international trade",
      "Focuses on brand building & operational growth",
    ],
    specialties: ["Brand strategy", "Store structure", "Operations"],
    bio: "Nail brings hands-on experience from building multiple Shopify brands across international markets, helping students understand the operational foundations behind sustainable e-commerce growth.",
  },
  {
    name: "Kamil Sattar",
    role: "Founder & Lead Mentor",
    image: "https://i.ibb.co/jPTyKVyk/Screenshot-2026-01-12-at-14-04-02.png",
    featured: true,
    credentials: [
      "Founder of The Ecom King",
      "10+ years of e-commerce experience",
      "1,000+ entrepreneurs trained",
    ],
    specialties: ["Product research", "Paid ads", "Scaling"],
    bio: "Kamil brings over a decade of hands-on e-commerce experience, helping students understand the systems behind product validation, store optimisation and profitable scaling.",
  },
  {
    name: "Inders",
    role: "E-Commerce Growth Mentor",
    image: "https://i.ibb.co/gZzwW6Hd/Gemini-Generated-Image-yzo8xlyzo8xlyzo8.png",
    credentials: [
      "Built e-commerce brands across multiple niches",
      "Strong understanding of consumer psychology",
      "Helps founders improve conversions & growth",
    ],
    specialties: ["Growth strategy", "CRO", "Store optimisation"],
    bio: "Inders helps founders optimise conversion rates, systemise growth, and turn underperforming stores into predictable revenue machines through data-driven decisions.",
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
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6fc] via-white to-[#f8f6fc]">
      {/* Video Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4">
        <div className="max-w-[900px] mx-auto">
          {/* Eyebrow Badge */}
          <div className="text-center mb-5">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#583E8D]/8 border border-[#583E8D]/15 text-[#583E8D] text-[12px] font-medium tracking-wide uppercase">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#583E8D]">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch Before Applying
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif font-bold text-[clamp(26px,4.5vw,44px)] leading-[1.15] tracking-[-0.02em] text-[#17191c] text-center max-w-[700px] mx-auto mb-4">
            See How The Ecom Mentorship Works
          </h1>

          {/* Subheading */}
          <p className="text-center text-[15px] md:text-[16px] text-[#555] leading-relaxed max-w-[600px] mx-auto mb-10">
            Watch this short breakdown to understand the roadmap, support and expectations before you apply.
          </p>

          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden border border-[#e8e4f0] shadow-[0_8px_40px_rgba(88,62,141,0.08),0_2px_12px_rgba(0,0,0,0.04)]">

            <div
              dangerouslySetInnerHTML={{
                __html: `<vturb-smartplayer id="vid-69d95194d7a6aac50a9b93e2" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>`,
              }}
            />
          </div>

          {/* Video tip */}
          <p className="text-center text-[12px] text-[#999] mt-4 font-medium">
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e8e4f0] text-[13px] text-[#444] font-medium shadow-sm"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#583E8D] shrink-0">
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
                boxShadow:
                  "0 8px 24px rgba(88,62,141,0.25), 0 2px 6px rgba(88,62,141,0.1)",
              }}
            >
              Apply For Mentorship
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <p className="mt-4 text-[13px] text-[#888] font-medium max-w-[400px] mx-auto">
              Application takes around 2 minutes. We'll review your goals, budget and current stage.
            </p>
          </div>

          {/* Trust Row */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
            {["1:1 mentorship", "Structured roadmap", "Store & ad reviews", "Application required"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 text-[12px] text-[#777] font-medium"
              >
                <span className="w-1 h-1 rounded-full bg-[#583E8D]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Mentors Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14 md:mb-18">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#583E8D]/10 text-[#583E8D] text-[12px] font-medium tracking-wide uppercase mb-5">
              Your Mentors
            </span>
            <h2 className="font-serif font-bold text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-[-0.02em] text-[#17191c]">
              Meet The Operators Behind The Mentorship
            </h2>
            <p className="mt-4 text-[15px] md:text-[16px] text-[#555] max-w-[620px] mx-auto leading-relaxed">
              Work with mentors who have built, scaled and managed real e-commerce businesses — bringing practical feedback, frameworks and accountability to your store.
            </p>
          </div>

          {/* Mentor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
            {mentors.map((mentor) => (
              <div
                key={mentor.name}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                  mentor.featured
                    ? "bg-gradient-to-b from-[#1a1225] to-[#0f0a18] ring-2 ring-[#7B5BB5]/50 shadow-[0_12px_48px_rgba(123,91,181,0.2)]"
                    : "bg-gradient-to-b from-[#1c1c22] to-[#111114] ring-1 ring-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
                }`}
              >
                {/* Featured badge */}
                {mentor.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#7B5BB5]/20 text-[#c4a8ff] text-[11px] font-medium border border-[#7B5BB5]/30">
                      Lead Mentor
                    </span>
                  </div>
                )}

                {/* Photo - brighter with less overlay */}
                <div className="relative h-[260px] md:h-[280px] overflow-hidden">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className={`w-full h-full object-cover object-top ${mentor.featured ? "brightness-110" : "brightness-105"}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c22] via-[#1c1c22]/20 to-transparent" />
                  {/* Purple edge glow for lead mentor */}
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
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#7B5BB5] shrink-0 mt-0.5">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[#d0d0d8] text-[13px] leading-snug">{cred}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Short bio */}
                  <p className="text-[#9a9aa8] text-[13px] leading-[1.7] mb-5 flex-1">
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
          <p className="text-center text-[13px] text-[#777] mt-10 font-medium">
            Apply to see which mentor is best suited to your stage.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="w-full bg-gradient-to-r from-[#4e3580] via-[#583E8D] to-[#6b4fa8] py-12 md:py-16 border-t border-[#7B5BB5]/20">
        <div className="max-w-[900px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 text-center">
          <div>
            <p className="text-white font-bold text-[clamp(32px,4.5vw,48px)] leading-none tracking-tight">1,000+</p>
            <p className="text-white/75 text-[14px] mt-2 font-medium">Students Trained</p>
          </div>
          <div>
            <p className="text-white font-bold text-[clamp(32px,4.5vw,48px)] leading-none tracking-tight">$20M+</p>
            <p className="text-white/75 text-[14px] mt-2 font-medium">Student-Reported Revenue</p>
          </div>
          <div>
            <p className="text-white font-bold text-[clamp(32px,4.5vw,48px)] leading-none tracking-tight">9+</p>
            <p className="text-white/75 text-[14px] mt-2 font-medium">Years Industry Experience</p>
          </div>
        </div>
        {/* Disclaimer */}
        <p className="text-center text-[11px] text-white/40 mt-6 px-4 max-w-[600px] mx-auto">
          Results vary. Figures are based on student-reported outcomes and are not guaranteed. Your success depends on effort, skill and market conditions.
        </p>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-16 md:py-24 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f3eef9] via-[#ede6f5] to-[#f9f5ee] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,170,240,0.3),transparent_60%),radial-gradient(ellipse_at_top_right,rgba(230,200,250,0.25),transparent_60%)]" />

        <div className="relative max-w-[700px] mx-auto rounded-3xl bg-white/60 backdrop-blur-sm border border-white/70 shadow-[0_8px_48px_rgba(88,62,141,0.08)] px-6 md:px-12 py-12 md:py-16">
          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#e8e4f0] text-[13px] font-medium text-[#333] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#583E8D]"></span>
              Limited Mentor Capacity
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif font-bold text-[clamp(28px,4.5vw,44px)] leading-[1.15] tracking-[-0.02em] text-[#17191c] text-center mb-5">
            Ready To Stop Guessing And <em className="italic text-[#583E8D]">Start Building?</em>
          </h2>

          {/* Subtext */}
          <p className="text-center text-[15px] md:text-[16px] text-[#666] leading-relaxed max-w-[560px] mx-auto mb-8">
            Apply to work 1:1 with experienced e-commerce mentors who can help you clarify your next move across product research, store setup, ads, creatives and scaling.
          </p>

          {/* CTA Button */}
          <div className="text-center mb-5">
            <a
              href="/apply"
              className="inline-flex items-center gap-2 text-white text-[15px] md:text-[16px] font-medium px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-[2px]"
              style={{
                background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
                boxShadow: "0 8px 24px rgba(88,62,141,0.25), 0 2px 6px rgba(88,62,141,0.1)",
              }}
            >
              Apply For Mentorship
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Reassurance text */}
          <p className="text-center text-[13px] text-[#888] font-medium mb-4">
            Applications are reviewed before calls are booked. No pressure if it is not the right fit.
          </p>

          {/* View curriculum link */}
          <div className="text-center mb-8">
            <a href="/#curriculum" className="inline-flex items-center gap-1 text-[14px] font-medium text-[#333] underline underline-offset-4 decoration-[#333]/30 hover:decoration-[#333] transition-colors">
              View curriculum
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-[#e8e4f0] mb-8" />

          {/* Trust pills */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e8e4f0] text-[13px] text-[#444] font-medium shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#583E8D" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Proven frameworks
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e8e4f0] text-[13px] text-[#444] font-medium shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#583E8D" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Direct mentor access
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e8e4f0] text-[13px] text-[#444] font-medium shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#583E8D" strokeWidth="2">
                <path d="M18 20V10M12 20V4M6 20v-6" />
              </svg>
              Store & ad reviews
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
