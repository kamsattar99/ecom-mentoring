import { motion } from "framer-motion";

const features = [
  {
    label: "PRODUCT FINDER LIBRARY",
    description:
      "Stop guessing. Access our validation frameworks, research sheets, and hand-picked product criteria to find winners fast before the herd.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#583E8D" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="12" cy="10" r="3" />
        <path d="M7 20v-1a5 5 0 0 1 10 0v1" />
      </svg>
    ),
  },
  {
    label: "ADVANCED SCALING PLAYBOOKS",
    description:
      'Go beyond "launch basics." Use our ad blueprints, creative angles, and data rules to know when to kill, tweak, or scale confidently.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#583E8D" strokeWidth="1.8">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-4 4 4 6-6" />
        <path d="M17 10h4v4" />
      </svg>
    ),
  },
  {
    label: "HIGH-CONVERTING SHOPIFY STORES",
    description:
      "Build a store that actually makes sales. We'll show you the exact layouts, product pages, and checkout setups that turn visitors into paying customers.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#583E8D" strokeWidth="1.8">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
];

const platforms = [
  { name: "Meta", style: "font-bold tracking-tight" },
  { name: "TikTok", style: "font-semibold" },
  { name: "Shopify", style: "font-semibold" },
  { name: "Omnisend", style: "font-medium" },
];

export default function AtoZSystem() {
  return (
    <section className="py-[80px] md:py-[120px] bg-white">
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
          {/* Left — Intro card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#f9f9fa] rounded-[24px] p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-[#e8e8e8] bg-white mb-6">
                <span className="text-[13px] font-medium text-[#17191c]">Get Ahead</span>
              </div>
              <h3 className="font-serif text-[clamp(24px,3vw,32px)] leading-[1.15] tracking-[-0.01em] text-[#17191c] mb-5">
                Introducing our mentorship for serious Ecom founders.
              </h3>
              <a
                href="https://e-commercementoring.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#583E8D] text-white text-[14px] font-medium px-6 py-3 rounded-full hover:bg-[#4a3377] transition-all duration-200 mb-8"
              >
                Apply Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <p className="text-[15px] leading-[1.6] text-[#4c4c4c]">
                Build, scale, and systemise your store with a proven roadmap — no fluff, no guesswork. Work 1:1 with mentors who've taken brands from zero to multi-six and seven figures.
              </p>
            </div>

            {/* Platform logos */}
            <div className="flex flex-wrap items-center gap-5 mt-8 pt-6 border-t border-[#e8e8e8]">
              {platforms.map((p) => (
                <span
                  key={p.name}
                  className={`text-[15px] text-[#777b86] ${p.style}`}
                >
                  {p.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Three feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex gap-5 p-6 rounded-[20px] bg-[#f9f9fa] hover:bg-[#f4f2f7] transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EDE8F5] flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.08em] text-[#583E8D] mb-2">
                    {feature.label}
                  </p>
                  <p className="text-[14px] leading-[1.6] text-[#4c4c4c]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
