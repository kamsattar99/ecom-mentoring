import { ArrowRight } from "lucide-react";

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

const resultStrip = [
  "$100K+ student wins",
  "First-sale breakthroughs",
  "AI-powered scaling",
  "Ad account guidance",
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-[80px] md:py-[120px] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8f5fc 40%, #f3eef9 70%, #ffffff 100%)" }}>
      {/* Background decorations */}
      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(88,62,141,0.08) 0%, transparent 60%)" }}
      />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(88,62,141,0.06) 0%, transparent 60%)" }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div
          className="text-center max-w-[640px] mx-auto mb-10"
        >
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#583E8D]/10 bg-white/80 backdrop-blur-sm mb-5 shadow-[0_2px_8px_rgba(88,62,141,0.05)]">
            <span className="text-[12px] text-[#583E8D] font-semibold tracking-wide uppercase">Student Results</span>
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,50px)] leading-[1.1] tracking-[-0.015em] text-[#17191c]">
            Results From Founders Using{" "}
            <span className="italic text-[#583E8D]">The AI System</span>
          </h2>
          <p className="text-[14px] text-[#777b86] mt-4 max-w-[520px] mx-auto leading-[1.7]">
            These results come from students who applied the AI-powered system, received feedback, and executed consistently. Results vary, but the process is built to create clarity, accountability and faster decisions.
          </p>
          {/* Trust microcopy */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-5">
            <span className="text-[11px] text-[#583E8D]/60 font-medium flex items-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
              Student-reported results
            </span>
            <span className="text-[11px] text-[#583E8D]/60 font-medium flex items-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
              No inflated claims
            </span>
            <span className="text-[11px] text-[#583E8D]/60 font-medium flex items-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
              Screenshots available on request
            </span>
          </div>
        </div>

        {/* Results strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {resultStrip.map((item) => (
            <div key={item} className="px-4 py-2 rounded-full bg-white border border-[#e8e8e8] shadow-[0_2px_6px_rgba(0,0,0,0.02)]">
              <span className="text-[12px] text-[#3a3a3e] font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Testimonial cards — featured card larger */}
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group relative rounded-[20px] transition-all duration-300 hover:-translate-y-1 ${
                t.featured ? "p-8 md:p-9" : "p-7 md:p-8"
              } ${t.featured ? "text-white" : "bg-white text-[#17191c]"}`}
              style={{
                background: t.featured
                  ? "linear-gradient(145deg, #2d1f50 0%, #583E8D 50%, #6b4fa8 100%)"
                  : undefined,
                boxShadow: t.featured
                  ? "0 16px 48px rgba(88,62,141,0.2), 0 4px 12px rgba(88,62,141,0.1), inset 0 1px 0 rgba(255,255,255,0.06)"
                  : "0 4px 20px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",
                border: t.featured ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(232,232,232,0.7)",
              }}
            >
              {/* Subtle orb on featured cards */}
              {t.featured && (
                <div className="absolute top-[-40px] right-[-40px] w-[140px] h-[140px] rounded-full opacity-20 pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)" }}
                />
              )}

              <div className="relative z-10">
                {/* Top row: badge + verification */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`inline-flex px-3.5 py-1.5 rounded-full ${t.featured ? "" : ""}`}
                    style={{
                      background: t.featured
                        ? "rgba(255,255,255,0.1)"
                        : "linear-gradient(135deg, #f3eef9 0%, #ebe3f5 100%)",
                      border: t.featured ? "1px solid rgba(255,255,255,0.08)" : "none",
                    }}
                  >
                    <span className={`text-[13px] font-bold tracking-tight ${t.featured ? "text-white" : "text-[#583E8D]"}`}>
                      {t.badge}
                    </span>
                  </div>
                  <span className={`text-[10px] font-medium uppercase tracking-wider ${t.featured ? "text-white/40" : "text-[#999]"}`}>
                    Verified
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" opacity={t.featured ? 0.9 : 1}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className={`text-[14px] md:text-[15px] leading-[1.7] mb-7 ${t.featured ? "text-white/85" : "text-[#3a3a3e]"}`}>
                  "{t.quote}"
                </p>

                {/* Author row */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: t.featured
                        ? "rgba(255,255,255,0.12)"
                        : "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
                      border: t.featured ? "1px solid rgba(255,255,255,0.08)" : "none",
                      boxShadow: t.featured ? "none" : "0 3px 8px rgba(88,62,141,0.15)",
                    }}
                  >
                    <span className="text-[13px] font-bold text-white">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className={`text-[13px] font-semibold ${t.featured ? "text-white" : "text-[#17191c]"}`}>
                      {t.name}
                    </p>
                    <p className={`text-[11px] ${t.featured ? "text-white/45" : "text-[#999]"}`}>
                      {t.context}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-[#999] text-center mt-6 max-w-[400px] mx-auto">
          Results vary by product, market and execution. These are student-reported outcomes, not guarantees.
        </p>

        {/* Subtle CTA transition */}
        <div
          className="text-center mt-12"
        >
          <p className="text-[15px] text-[#4c4c4c] mb-5 font-medium">
            Want this level of clarity and AI-powered growth inside your own store?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://e-commercementoring.com/learn-more"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-white text-[14px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(88,62,141,0.25)]"
              style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)" }}
            >
              Apply For Mentorship
              <ArrowRight size={15} />
            </a>
            <a href="#curriculum" className="text-[13px] text-[#583E8D] font-medium hover:underline transition-colors">
              See What's Included
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
