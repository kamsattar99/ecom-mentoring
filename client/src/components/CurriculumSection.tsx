import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Target, Palette, Megaphone, Rocket, Cog, Crown } from "lucide-react";

const stages = [
  {
    week: "01",
    title: "Finding Winning Products",
    icon: Target,
    items: [
      "The Product Research Framework — How to spot trends before the crowd",
      "Validation Made Simple — Testing demand without wasting money",
      "Competitor Analysis Secrets — Reverse-engineering the winners",
      "Supplier Sourcing 101 — Finding reliable partners (without scams)",
      "Case Study Breakdown — Real examples of products that scaled to 6 figures",
    ],
  },
  {
    week: "02",
    title: "Store Setup & Branding",
    icon: Palette,
    items: [
      "Shopify Setup Essentials — Building the foundations of a profitable store",
      "Design That Converts — Layouts & themes that make customers trust you",
      "Brand Identity Basics — Picking colours, fonts, and visuals that sell",
      "Essential Apps & Integrations — The tools you actually need",
      "Live Store Audit — Reviewing real student stores for quick wins",
    ],
  },
  {
    week: "03",
    title: "Paid Ads That Sell",
    icon: Megaphone,
    items: [
      "Intro to Paid Traffic — Choosing the right platform for your niche",
      "Facebook Ads 101 — Campaign structure, budgets & winning ad sets",
      "TikTok Ads 101 — Creating viral short-form ads that drive cheap traffic",
      "Creative That Clicks — Writing copy & making videos that convert",
      "Ad Data Mastery — How to read results and know when to kill, scale, or tweak",
    ],
  },
  {
    week: "04",
    title: "Scaling Strategies",
    icon: Rocket,
    items: [
      "Scaling Blueprint — How to grow from a few sales to consistent 4-5 figure months",
      "Retargeting Made Simple — Turning \"almost buyers\" into paying customers",
      "Expanding Audiences — Using lookalikes & broad targeting the right way",
      "Managing Cash Flow While Scaling — Avoid running out of money as you grow",
      "Automation Hacks — Tools & workflows that make scaling smoother",
    ],
  },
  {
    week: "05",
    title: "Systems & Automation",
    icon: Cog,
    items: [
      "Streamlined Fulfilment — Getting products shipped without headaches",
      "Customer Service That Retains — Turning support into repeat buyers",
      "Hiring & Outsourcing — Training VAs to take over repetitive tasks",
      "KPI Tracking & Dashboards — Knowing your numbers so you can grow with confidence",
      "Case Study: Automated Store — Real example of a store that scaled through systems",
    ],
  },
  {
    week: "06",
    title: "Long-Term Brand Building",
    icon: Crown,
    items: [
      "From Dropship to Brand — Making the switch to a lasting business",
      "Email & SMS Marketing — Building customer loyalty & repeat sales",
      "Influencers & UGC Partnerships — Scaling with content beyond ads",
      "Expanding Product Lines — How to add new products without killing your margins",
      "Your 12-Month Brand Vision — Mapping out your growth plan beyond the mentorship",
    ],
  },
];

export default function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="curriculum" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 energy-line" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#06B6D4] mb-4">
            Curriculum Overview
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight">
            6 Stages to{" "}
            <span className="gradient-text">Ecom Mastery</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A proven, step-by-step system that takes you from zero to a scalable, profitable brand.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
          {/* Left - Stage List */}
          <div className="space-y-3">
            {stages.map((stage, i) => (
              <motion.button
                key={stage.week}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => setOpenIndex(i)}
                className={`w-full flex items-center gap-4 p-4 rounded-lg text-left transition-all duration-300 ${
                  openIndex === i
                    ? "glass-card border-[#2563EB]/40 glow-blue"
                    : "hover:bg-secondary/30 border border-transparent"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                    openIndex === i
                      ? "bg-gradient-to-br from-[#2563EB] to-[#06B6D4]"
                      : "bg-secondary"
                  }`}
                >
                  <span className="font-mono text-sm font-bold text-white">
                    {stage.week}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Stage {stage.week}
                  </p>
                  <p className={`font-semibold text-sm mt-0.5 ${openIndex === i ? "text-foreground" : "text-muted-foreground"}`}>
                    {stage.title}
                  </p>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-muted-foreground transition-transform ${
                    openIndex === i ? "rotate-180 text-[#06B6D4]" : ""
                  }`}
                />
              </motion.button>
            ))}
          </div>

          {/* Right - Stage Details */}
          <motion.div
            key={openIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-xl p-8 lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-4 mb-6">
              {(() => {
                const Icon = stages[openIndex].icon;
                return (
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2563EB]/20 to-[#06B6D4]/20 border border-[#2563EB]/30 flex items-center justify-center">
                    <Icon size={22} className="text-[#06B6D4]" />
                  </div>
                );
              })()}
              <div>
                <p className="text-xs font-mono text-[#06B6D4] uppercase tracking-wider">
                  Week {stages[openIndex].week}
                </p>
                <h3 className="font-display font-bold text-xl text-foreground">
                  {stages[openIndex].title}
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {stages[openIndex].items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-md bg-secondary/20 border border-border/30"
                >
                  <span className="font-mono text-xs text-[#06B6D4] mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
