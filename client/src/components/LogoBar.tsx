import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function LogoBar() {
  return (
    <section className="relative py-10 border-y border-border/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Trustpilot Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#00B67A] text-[#00B67A]" />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-semibold text-foreground">4.7/5</span>
              <span className="text-muted-foreground ml-1">on Trustpilot</span>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="flex items-center gap-6 md:gap-10 flex-wrap justify-center">
            {["Shopify", "Meta", "TikTok", "Google Ads"].map((name) => (
              <div
                key={name}
                className="text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors"
              >
                <span className="font-display font-bold text-sm md:text-base tracking-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Student Count */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-background bg-gradient-to-br from-[#2563EB] to-[#06B6D4]"
                  style={{ opacity: 1 - i * 0.15 }}
                />
              ))}
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              1,000+ active students
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
