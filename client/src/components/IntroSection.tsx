import { motion } from "framer-motion";
import { Search, TrendingUp, Store } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Product Finder Library",
    description:
      "Stop guessing. Access our validation frameworks, research sheets, and hand-picked product criteria to find winners fast — before the herd.",
    accent: "from-[#2563EB] to-[#06B6D4]",
  },
  {
    icon: TrendingUp,
    title: "Advanced Scaling Playbooks",
    description:
      "Go beyond launch basics. Use our ad blueprints, creative angles, and data rules to know when to kill, tweak, or scale confidently.",
    accent: "from-[#06B6D4] to-[#22D3EE]",
  },
  {
    icon: Store,
    title: "High-Converting Stores",
    description:
      "Build a store that actually makes sales. We show you the exact layouts, product pages, and checkout setups that turn visitors into paying customers.",
    accent: "from-[#8B5CF6] to-[#A78BFA]",
  },
];

export default function IntroSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#06B6D4] mb-4">
            The System
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight">
            A Complete Operating System for{" "}
            <span className="gradient-text">Ecom Success</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Not another course. A full mentorship system built for serious founders who want a proven roadmap and personal guidance.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-xl p-8 group transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient accent line at top */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${pillar.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />
              
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2563EB]/15 to-[#06B6D4]/15 border border-[#2563EB]/25 flex items-center justify-center mb-6 group-hover:border-[#2563EB]/50 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.15)] transition-all duration-300">
                <pillar.icon size={22} className="text-[#06B6D4]" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
