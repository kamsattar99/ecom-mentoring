import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const stats = [
  { value: "1,000+", label: "Students Enrolled" },
  { value: "82%", label: "Hit 5-Figures in 90 Days" },
  { value: "$100K+", label: "Avg. Student Revenue" },
  { value: "10+", label: "Hours Saved Weekly" },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/stats-bg-8Pz5D9xCbdPnRpMfSHTW6W.webp"
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="relative container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#06B6D4]/20 bg-[#06B6D4]/5 mb-4">
            <TrendingUp size={14} className="text-[#06B6D4]" />
            <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-wider">
              Proven Results
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl">
            Real Numbers Beat{" "}
            <span className="gradient-text">Empty Promises</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 md:p-8 text-center group hover:border-[#2563EB]/40 transition-all duration-300"
            >
              <div className="font-display font-bold text-2xl md:text-4xl gradient-text mb-3">
                {stat.value}
              </div>
              <p className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-wider leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="glass-card rounded-xl p-8 md:p-10">
            <blockquote className="text-lg md:text-2xl font-display italic text-foreground/90 leading-relaxed">
              "Two years ago I was a complete beginner. This month my brand has generated over{" "}
              <span className="gradient-text font-bold not-italic">$700,000</span> in total sales."
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Nick S.</p>
                <p className="text-xs text-muted-foreground font-mono">Ecom Brand Owner</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
