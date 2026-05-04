import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Finding Winning Products",
    items: [
      "The Product Research Framework — How to spot trends before the crowd",
      "Validation Made Simple — Testing demand without wasting money",
      "Competitor Analysis Secrets — Reverse-engineering the winners",
      "Supplier Sourcing 101 — Finding reliable partners (without scams)",
    ],
  },
  {
    number: "02",
    title: "Store Setup & Branding",
    items: [
      "Shopify Setup Essentials — Building the foundations of a profitable store",
      "Design That Converts — Layouts & themes that make customers trust you",
      "Brand Identity Basics — Picking colours, fonts, and visuals that sell",
      "Essential Apps & Integrations — The tools you actually need",
    ],
  },
  {
    number: "03",
    title: "Paid Ads That Sell",
    items: [
      "Facebook Ads 101 — Campaign structure, budgets & winning ad sets",
      "TikTok Ads 101 — Creating viral short-form ads that drive cheap traffic",
      "Creative That Clicks — Writing copy & making videos that convert",
      "Ad Data Mastery — How to read results and know when to kill, scale, or tweak",
    ],
  },
  {
    number: "04",
    title: "Scaling Strategies",
    items: [
      "Scaling Blueprint — How to grow from a few sales to consistent 4-5 figure months",
      "Retargeting Made Simple — Turning \"almost buyers\" into paying customers",
      "Managing Cash Flow While Scaling — Avoid running out of money as you grow",
      "Automation Hacks — Tools & workflows that make scaling smoother",
    ],
  },
  {
    number: "05",
    title: "Systems & Automation",
    items: [
      "Streamlined Fulfilment — Getting products shipped without headaches",
      "Customer Service That Retains — Turning support into repeat buyers",
      "Hiring & Outsourcing — Training VAs to take over repetitive tasks",
      "KPI Tracking & Dashboards — Knowing your numbers so you can grow with confidence",
    ],
  },
  {
    number: "06",
    title: "Long-Term Brand Building",
    items: [
      "From Dropship to Brand — Making the switch to a lasting business",
      "Email & SMS Marketing — Building customer loyalty & repeat sales",
      "Influencers & UGC Partnerships — Scaling with content beyond ads",
      "Your 12-Month Brand Vision — Mapping out your growth plan beyond the mentorship",
    ],
  },
];

export default function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="curriculum" className="py-[80px] md:py-[120px] bg-[#f9f9fa]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[640px] mx-auto mb-16"
        >
          <p className="text-[13px] text-[#583E8D] font-medium mb-3">Curriculum</p>
          <h2 className="font-serif text-[clamp(36px,4vw,52px)] leading-[1.1] tracking-[-0.015em] text-[#17191c] mb-5">
            Six stages to a profitable store
          </h2>
          <p className="text-[15px] leading-[1.5] text-[#4c4c4c]">
            A structured roadmap that takes you from zero to scaling — with mentorship at every step.
          </p>
        </motion.div>

        <div className="max-w-[720px] mx-auto bg-white rounded-[24px] p-6 md:p-8">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="border-b border-[#f0f0f0] last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[13px] font-medium text-[#583E8D] w-6">
                    {stage.number}
                  </span>
                  <span className="text-[16px] font-medium text-[#17191c] group-hover:text-[#583E8D] transition-colors">
                    {stage.title}
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-[#777b86] transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 pl-10">
                      <ul className="space-y-2.5">
                        {stage.items.map((item) => (
                          <li
                            key={item}
                            className="text-[14px] leading-[1.5] text-[#4c4c4c] flex items-start gap-3"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#583E8D] mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
