import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jack",
    role: "Dropshipping Entrepreneur",
    quote: "I finally broke through and scaled past $100k in sales. The mentorship gave me the structure, accountability, and clarity I was missing.",
    revenue: "$100K+",
    highlight: true,
  },
  {
    name: "Rivers",
    role: "Dropshipping Entrepreneur",
    quote: "After two products tested, I finally hit $1,000. Thank you so much for the mentoring — this is just the beginning of my ecom journey.",
    revenue: "$1K first month",
    highlight: false,
  },
  {
    name: "MB",
    role: "Dropshipping Entrepreneur",
    quote: "Despite Facebook disabling my account right before hitting $100k, I still crossed $98,968 in sales. Forever thankful for the knowledge and support.",
    revenue: "$98,968",
    highlight: false,
  },
  {
    name: "Eric",
    role: "Dropshipping Entrepreneur",
    quote: "Just hit 100k in 2 months — totally crazy. I made 10k profit in 11 days. If I did this, anyone is able. Just keep pushing.",
    revenue: "$100K in 2mo",
    highlight: true,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-[80px] md:py-[120px] bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(88,62,141,0.08) 0%, transparent 60%)" }}
      />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(248,180,120,0.08) 0%, transparent 60%)" }}
      />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[640px] mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6"
            style={{ background: "linear-gradient(135deg, #f3eef9 0%, #ebe3f5 100%)", boxShadow: "0 2px 8px rgba(88,62,141,0.06)" }}
          >
            <span className="text-[12px] text-[#583E8D] font-semibold tracking-wide">Student Results</span>
          </div>
          <h2 className="font-serif text-[clamp(36px,4vw,52px)] leading-[1.1] tracking-[-0.015em] text-[#17191c]">
            Real people, <span className="italic text-[#583E8D]">real results</span>
          </h2>
          <p className="text-[15px] text-[#777b86] mt-4 max-w-[420px] mx-auto leading-[1.6]">
            These are real students who followed the system and put in the work. No fake screenshots. No inflated numbers.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative p-8 md:p-9 rounded-[24px] transition-all duration-400 hover:-translate-y-1.5 ${
                t.highlight
                  ? "text-white"
                  : "bg-white"
              }`}
              style={{
                background: t.highlight
                  ? "linear-gradient(145deg, #3d2a6b 0%, #583E8D 40%, #7B5EC6 100%)"
                  : undefined,
                boxShadow: t.highlight
                  ? "0 20px 60px rgba(88, 62, 141, 0.25), 0 4px 12px rgba(88, 62, 141, 0.15), inset 0 1px 0 rgba(255,255,255,0.1)"
                  : "0 4px 24px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.8)",
                border: t.highlight ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(232,232,232,0.6)",
              }}
            >
              {/* Decorative orb on highlight cards */}
              {t.highlight && (
                <>
                  <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full opacity-30 pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }}
                  />
                  <div className="absolute bottom-[-20px] left-[-20px] w-[100px] h-[100px] rounded-full opacity-20 pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(123,91,181,0.3) 0%, transparent 70%)" }}
                  />
                </>
              )}

              <div className="relative z-10">
                {/* Revenue badge */}
                <div className={`inline-flex px-4 py-2 rounded-full mb-6 ${
                  t.highlight ? "" : ""
                }`}
                  style={{
                    background: t.highlight
                      ? "rgba(255,255,255,0.12)"
                      : "linear-gradient(135deg, #f3eef9 0%, #ebe3f5 100%)",
                    backdropFilter: t.highlight ? "blur(8px)" : undefined,
                    border: t.highlight ? "1px solid rgba(255,255,255,0.1)" : "none",
                    boxShadow: t.highlight ? "none" : "0 2px 6px rgba(88,62,141,0.06)",
                  }}
                >
                  <span className={`text-[14px] font-bold tracking-tight ${
                    t.highlight ? "text-white" : "text-[#583E8D]"
                  }`}>
                    {t.revenue}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill={t.highlight ? "#f59e0b" : "#f59e0b"}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className={`text-[15px] leading-[1.7] mb-8 ${
                  t.highlight ? "text-white/90" : "text-[#2a2a2e]"
                }`}>
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{
                      background: t.highlight
                        ? "rgba(255,255,255,0.15)"
                        : "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
                      backdropFilter: t.highlight ? "blur(8px)" : undefined,
                      border: t.highlight ? "1px solid rgba(255,255,255,0.1)" : "none",
                      boxShadow: t.highlight ? "none" : "0 4px 12px rgba(88,62,141,0.2)",
                    }}
                  >
                    <span className="text-[14px] font-bold text-white">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className={`text-[14px] font-semibold ${
                      t.highlight ? "text-white" : "text-[#17191c]"
                    }`}>{t.name}</p>
                    <p className={`text-[12px] ${
                      t.highlight ? "text-white/55" : "text-[#777b86]"
                    }`}>{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
