const testimonials = [
  {
    name: "Jack",
    context: "Dropshipping entrepreneur · Product-led store",
    quote: "I finally broke through and scaled past $100K in sales. The biggest difference was having structure, accountability and a clear plan instead of guessing every week.",
    badge: "$100K+ In Sales",
    featured: true,
  },
  {
    name: "Rivers",
    context: "Dropshipping entrepreneur · First store",
    quote: "After testing two products, I finally hit my first $1,000 month. The mentoring helped me understand what to fix and what to focus on next.",
    badge: "First $1K Month",
    featured: false,
  },
  {
    name: "MB",
    context: "Dropshipping entrepreneur · Scaling phase",
    quote: "Even after Facebook disabled my account right before $100K, I still crossed $98,968 in sales. The knowledge and support helped me keep going when things got difficult.",
    badge: "$98,968 In Sales",
    featured: false,
  },
  {
    name: "Eric",
    context: "Dropshipping entrepreneur · High-ticket store",
    quote: "I hit $100K in two months and made $10K profit in 11 days. The biggest win was knowing what to test, what to cut and when to scale.",
    badge: "$100K In 2 Months",
    featured: true,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-[80px] md:py-[110px] relative overflow-hidden bg-[#0F0E13]">
      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <p className="eyebrow mb-4">Student Results</p>
          <h2 className="font-serif text-[clamp(32px,4vw,50px)] leading-[1.1] tracking-[-0.015em] text-white">
            Results From Founders Using{" "}
            <span className="italic text-[#B394F2]">The AI System</span>
          </h2>
          <p className="text-[14px] text-[rgba(255,255,255,0.5)] mt-4 max-w-[520px] mx-auto leading-[1.7]">
            These results come from students who applied the AI-powered system, received feedback, and executed consistently. Results vary, but the process is built to create clarity, accountability and faster decisions.
          </p>
          {/* Trust microcopy */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-5">
            <span className="text-[11px] text-[rgba(179,148,242,0.6)] font-medium flex items-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
              Student-reported results
            </span>
            <span className="text-[11px] text-[rgba(179,148,242,0.6)] font-medium flex items-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
              No inflated claims
            </span>
            <span className="text-[11px] text-[rgba(179,148,242,0.6)] font-medium flex items-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
              Screenshots available on request
            </span>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid md:grid-cols-2 gap-5 max-w-[960px] mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative rounded-[22px] p-7 md:p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: t.featured
                  ? "linear-gradient(140deg, rgba(88,62,141,0.35) 0%, rgba(23,21,30,0.9) 55%)"
                  : "#17151E",
                border: t.featured
                  ? "1px solid rgba(155,126,219,0.25)"
                  : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Badge */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="inline-flex px-3.5 py-1.5 rounded-full"
                  style={{
                    background: t.featured ? "rgba(155,126,219,0.15)" : "rgba(255,255,255,0.05)",
                    border: t.featured ? "1px solid rgba(155,126,219,0.3)" : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span className={`text-[13px] font-bold tracking-tight ${t.featured ? "text-[#B394F2]" : "text-white"}`}>
                    {t.badge}
                  </span>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider text-[rgba(255,255,255,0.3)]">
                  Verified
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" opacity={0.9}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[14px] md:text-[15px] leading-[1.7] text-[rgba(255,255,255,0.75)] mb-7">
                "{t.quote}"
              </p>

              {/* Author row */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: t.featured
                      ? "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)"
                      : "rgba(255,255,255,0.08)",
                    border: t.featured ? "none" : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span className="text-[13px] font-bold text-white">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-white">{t.name}</p>
                  <p className="text-[11px] text-[rgba(255,255,255,0.4)]">{t.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-[rgba(255,255,255,0.3)] text-center mt-6 max-w-[400px] mx-auto">
          Results vary by product, market and execution. These are student-reported outcomes, not guarantees.
        </p>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[15px] text-[rgba(255,255,255,0.6)] mb-5 font-medium">
            Want this level of clarity and AI-powered growth inside your own store?
          </p>
          <a
            href="https://e-commercementoring.com/learn-more"
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
        </div>
      </div>
    </section>
  );
}
