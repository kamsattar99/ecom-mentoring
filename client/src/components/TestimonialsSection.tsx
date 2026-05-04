import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jack",
    role: "Dropshipping Entrepreneur",
    quote: "I finally broke through and scaled past $100k in sales. The mentorship gave me the structure, accountability, and clarity I was missing.",
    revenue: "$100K+",
  },
  {
    name: "Rivers",
    role: "Dropshipping Entrepreneur",
    quote: "After two products tested, I finally hit $1,000. Thank you so much for the mentoring — this is just the beginning of my ecom journey.",
    revenue: "$1K first month",
  },
  {
    name: "MB",
    role: "Dropshipping Entrepreneur",
    quote: "Despite Facebook disabling my account right before hitting $100k, I still crossed $98,968 in sales. Forever thankful for the knowledge and support.",
    revenue: "$98,968",
  },
  {
    name: "Eric",
    role: "Dropshipping Entrepreneur",
    quote: "Just hit 100k in 2 months — totally crazy. I made 10k profit in 11 days. If I did this, anyone is able. Just keep pushing.",
    revenue: "$100K in 2mo",
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
          <p className="text-[13px] text-[#583E8D] font-medium mb-3">Customers &gt;</p>
          <h2 className="font-serif text-[clamp(36px,4vw,52px)] leading-[1.1] tracking-[-0.015em] text-[#17191c]">
            Real people, real results
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 rounded-[24px] bg-[#f9f9fa] border border-[#e8e8e8]/60"
            >
              {/* Revenue badge */}
              <div className="inline-flex px-3 py-1.5 rounded-full bg-[#EDE8F5] mb-5">
                <span className="text-[12px] font-medium text-[#583E8D]">
                  {t.revenue}
                </span>
              </div>

              {/* Quote */}
              <p className="text-[15px] leading-[1.6] text-[#17191c] mb-6">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EDE8F5] flex items-center justify-center">
                  <span className="text-[13px] font-medium text-[#583E8D]">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#17191c]">{t.name}</p>
                  <p className="text-[12px] text-[#777b86]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
