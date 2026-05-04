import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Jack",
    role: "Dropshipping Entrepreneur",
    before:
      "I had no idea how to build a proper system or strategy. I kept spinning my wheels without seeing results.",
    after:
      "I finally broke through and scaled past $100k in sales. The mentorship gave me the structure, accountability, and clarity I was missing.",
    revenue: "$100K+",
    color: "from-[#2563EB] to-[#06B6D4]",
  },
  {
    name: "Rivers",
    role: "Dropshipping Entrepreneur",
    before:
      "I'd been testing products for weeks with little success. It felt like I was wasting money without a clear direction.",
    after:
      "After two products tested, I finally hit $1,000. Thank you so much for the mentoring — this is just the beginning of my ecom journey.",
    revenue: "$1K first month",
    color: "from-[#F97316] to-[#FB923C]",
  },
  {
    name: "MB",
    role: "Dropshipping Entrepreneur",
    before:
      "I struggled to get past small wins, and every time I tried scaling ads, something broke. I couldn't cross into serious revenue.",
    after:
      "Despite Facebook disabling my account right before hitting $100k, I still crossed $98,968 in sales. Forever thankful for the knowledge and support.",
    revenue: "$98,968",
    color: "from-[#8B5CF6] to-[#A78BFA]",
  },
  {
    name: "Eric",
    role: "Dropshipping Entrepreneur",
    before:
      "I was stuck testing products and struggling to generate consistent profits. Nothing seemed to scale.",
    after:
      "Just hit 100k in 2 months — totally crazy. I made 10k profit in 11 days. If I did this, anyone is able. Just keep pushing.",
    revenue: "$100K in 2mo",
    color: "from-[#06B6D4] to-[#22D3EE]",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/testimonial-bg-KasBXYLKeNk9Z4JJeAQdp9.webp"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#06B6D4] mb-4">
            Student Results
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl">
            Real People, Real{" "}
            <span className="gradient-text">Transformations</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            These aren't cherry-picked success stories. They're everyday people who followed the system.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 md:p-8 relative group hover:border-[#2563EB]/30 transition-all duration-300"
            >
              {/* Revenue Badge */}
              <div className="absolute top-6 right-6">
                <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${t.color} bg-opacity-10`}>
                  <span className="font-mono text-xs font-bold text-white">
                    {t.revenue}
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} className="fill-[#F97316] text-[#F97316]" />
                ))}
              </div>

              {/* Before */}
              <div className="mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#F97316]/80 font-bold">
                  Before
                </span>
                <p className="mt-1.5 text-sm text-muted-foreground italic leading-relaxed">
                  "{t.before}"
                </p>
              </div>

              {/* Divider */}
              <div className="energy-line my-4" />

              {/* After */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#06B6D4] font-bold">
                  After
                </span>
                <p className="mt-1.5 text-sm text-foreground/90 leading-relaxed">
                  "{t.after}"
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
