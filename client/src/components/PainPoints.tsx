import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const painPoints = [
  "Spending hours guessing which products might sell — only to see losses?",
  "Pouring money into ads without knowing if they'll ever pay off?",
  "Worrying your store will never break past a few sales a week?",
  "Feeling left behind by competitors who always seem two steps ahead?",
  "Overwhelmed by endless \"gurus,\" tools, and conflicting advice?",
  "Tired of rewriting your strategy every month without seeing real traction?",
];

export default function PainPoints() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Angular divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Question */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#F97316] mb-4">
              Sound Familiar?
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
              Does Growing Your Ecom Store Feel More{" "}
              <span className="gradient-text-orange">Draining</span> Than Rewarding?
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              If any of these sound familiar, you're not alone — and you're in the right place. Most people fail because they lack a system, not because they lack talent.
            </p>
          </motion.div>

          {/* Right - Pain Points List */}
          <div className="space-y-3">
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-[#F97316]/[0.03] border border-[#F97316]/10 hover:border-[#F97316]/25 hover:bg-[#F97316]/[0.05] transition-all duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle size={12} className="text-[#F97316]" />
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
