import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jack",
    role: "Dropshipping Entrepreneur",
    quote: "I finally broke through and scaled past $100k in sales. The mentorship gave me the structure, accountability, and clarity I was missing.",
    revenue: "$100K+",
    before: "No strategy",
    after: "$100k+ in sales",
  },
  {
    name: "Rivers",
    role: "Dropshipping Entrepreneur",
    quote: "After two products tested, I finally hit $1,000. Thank you so much for the mentoring — this is just the beginning of my ecom journey.",
    revenue: "$1K first month",
    before: "Weeks of failed tests",
    after: "$1k first winning product",
  },
  {
    name: "MB",
    role: "Dropshipping Entrepreneur",
    quote: "Despite Facebook disabling my account right before hitting $100k, I still crossed $98,968 in sales. Forever thankful for the knowledge and support.",
    revenue: "$98,968",
    before: "Couldn't scale past small wins",
    after: "$98,968 in revenue",
  },
  {
    name: "Eric",
    role: "Dropshipping Entrepreneur",
    quote: "Just hit 100k in 2 months — totally crazy. I made 10k profit in 11 days. If I did this, anyone is able. Just keep pushing.",
    revenue: "$100K in 2mo",
    before: "Stuck testing products",
    after: "$100k in 2 months",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-[80px] md:py-[120px] bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[640px] mx-auto mb-16"
        >
          <p className="text-[14px] text-[#583E8D] font-medium mb-4">Student results</p>
          <h2 className="font-serif text-[clamp(36px,4vw,52px)] leading-[1.1] tracking-[-0.015em] text-[#17191c] mb-5">
            Real people, real results
          </h2>
          <p className="text-[16px] leading-[1.5] text-[#4c4c4c]">
            These aren't cherry-picked success stories. They're everyday people who followed the system.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-[24px] bg-white relative"
              style={{
                boxShadow: "rgba(4, 23, 43, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px",
              }}
            >
              {/* Revenue badge */}
              <div className="absolute top-6 right-6">
                <div className="px-3 py-1.5 rounded-full bg-[#EDE8F5]">
                  <span className="text-[13px] font-medium text-[#583E8D]">
                    {t.revenue}
                  </span>
                </div>
              </div>

              {/* Before/After */}
              <div className="flex items-center gap-3 mb-6">
                <div className="px-3 py-1.5 rounded-full bg-[#f7f7f8] text-[13px] text-[#777b86]">
                  {t.before}
                </div>
                <span className="text-[#a3a6af]">→</span>
                <div className="px-3 py-1.5 rounded-full bg-[#EDE8F5] text-[13px] text-[#583E8D] font-medium">
                  {t.after}
                </div>
              </div>

              {/* Quote */}
              <p className="text-[16px] leading-[1.6] text-[#17191c] mb-8">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EDE8F5] flex items-center justify-center">
                  <span className="text-[14px] font-medium text-[#583E8D]">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-[15px] font-medium text-[#17191c]">{t.name}</p>
                  <p className="text-[13px] text-[#777b86]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
