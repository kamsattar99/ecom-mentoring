import { motion } from "framer-motion";

const features = [
  {
    label: "PRODUCT FINDER LIBRARY",
    description:
      "Stop guessing. Access our validation frameworks, research sheets, and hand-picked product criteria to find winners fast before the herd.",
    gradient: "from-[#583E8D] to-[#7B5EC6]",
    iconBg: "bg-white/20",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 8v6M8 11h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "ADVANCED SCALING PLAYBOOKS",
    description:
      'Go beyond "launch basics." Use our ad blueprints, creative angles, and data rules to know when to kill, tweak, or scale confidently.',
    gradient: "from-[#17191c] to-[#2d2f33]",
    iconBg: "bg-[#583E8D]",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 3v18h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 14l4-5 4 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="6" r="2" fill="white" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: "HIGH-CONVERTING SHOPIFY STORES",
    description:
      "Build a store that actually makes sales. We'll show you the exact layouts, product pages, and checkout setups that turn visitors into paying customers.",
    gradient: "from-[#583E8D] to-[#7B5EC6]",
    iconBg: "bg-white/20",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 6h18" stroke="white" strokeWidth="2" />
        <path d="M16 10a4 4 0 0 1-8 0" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const platforms = [
  { name: "Meta", weight: "font-bold" },
  { name: "TikTok", weight: "font-semibold" },
  { name: "Shopify", weight: "font-semibold" },
  { name: "Omnisend", weight: "font-medium" },
];

export default function AtoZSystem() {
  return (
    <section className="py-[80px] md:py-[120px] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #faf9f7 0%, #f9f6fd 50%, #f8f5fc 100%)" }}>
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[13px] text-[#583E8D] font-medium mb-3">Introducing Ecom Mentor</p>
          <h2 className="font-serif text-[clamp(36px,4.5vw,56px)] leading-[1.08] tracking-[-0.02em] text-[#17191c]">
            The A-to-Z System for<br />High-Value Ecom Results
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left — Intro card with depth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-[28px] p-8 md:p-10 flex flex-col justify-between overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #f8f6fb 0%, #f0ecf5 40%, #ebe5f3 100%)",
              boxShadow: "0 8px 40px rgba(88, 62, 141, 0.08), 0 1px 3px rgba(88, 62, 141, 0.04)",
            }}
          >
            {/* Subtle decorative orb */}
            <div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-30 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(88,62,141,0.15) 0%, transparent 70%)" }}
            />
            <div
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(88,62,141,0.12) 0%, transparent 70%)" }}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#583E8D]/15 bg-white/80 backdrop-blur-sm mb-6 shadow-[0_2px_8px_rgba(88,62,141,0.06)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#583E8D] mr-2" />
                <span className="text-[13px] font-medium text-[#17191c]">Get Ahead</span>
              </div>
              <h3 className="font-serif text-[clamp(24px,3vw,34px)] leading-[1.12] tracking-[-0.01em] text-[#17191c] mb-6">
                Introducing our mentorship for serious Ecom founders.
              </h3>
              <a
                href="https://e-commercementoring.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-[#583E8D] text-white text-[14px] font-medium px-7 py-3.5 rounded-full hover:bg-[#4a3377] transition-all duration-300 mb-8 shadow-[0_4px_16px_rgba(88,62,141,0.25)] hover:shadow-[0_6px_24px_rgba(88,62,141,0.35)] hover:-translate-y-0.5"
              >
                Apply Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <p className="text-[15px] leading-[1.65] text-[#4c4c4c]">
                Build, scale, and systemise your store with a proven roadmap — no fluff, no guesswork. Work 1:1 with mentors who've taken brands from zero to multi-six and seven figures.
              </p>
            </div>

            {/* Platform logos */}
            <div className="relative z-10 flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-[#583E8D]/10">
              {platforms.map((p) => (
                <span
                  key={p.name}
                  className={`text-[15px] text-[#5a5a6a] ${p.weight} hover:text-[#583E8D] transition-colors duration-200`}
                >
                  {p.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Three feature cards with depth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className={`group relative overflow-hidden rounded-[22px] p-6 md:p-7 bg-gradient-to-br ${feature.gradient} text-white transition-all duration-300 hover:-translate-y-0.5`}
                style={{
                  boxShadow:
                    i === 1
                      ? "0 8px 32px rgba(23, 25, 28, 0.2), 0 2px 8px rgba(23, 25, 28, 0.1)"
                      : "0 8px 32px rgba(88, 62, 141, 0.2), 0 2px 8px rgba(88, 62, 141, 0.1)",
                }}
              >
                {/* Subtle shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)" }}
                />

                <div className="relative z-10 flex gap-5">
                  <div className={`w-12 h-12 rounded-2xl ${feature.iconBg} flex items-center justify-center shrink-0 backdrop-blur-sm`}>
                    {feature.icon}
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.1em] text-white/70 mb-2.5">
                      {feature.label}
                    </p>
                    <p className="text-[14px] leading-[1.65] text-white/85">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10 pointer-events-none"
                  style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
