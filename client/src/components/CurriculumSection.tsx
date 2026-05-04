import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Check } from "lucide-react";

const stages = [
  {
    title: "Finding Winning Products",
    week: "Week 01",
    content:
      "Learn our proprietary product research framework. Access validation sheets, trend analysis tools, and criteria that separate winners from losers before you spend a penny on ads.",
  },
  {
    title: "Store Setup & Branding",
    week: "Week 02",
    content:
      "Build a high-converting Shopify store from scratch. We cover theme selection, product page optimization, checkout flow, trust signals, and brand identity that makes customers buy.",
  },
  {
    title: "Paid Ads That Sell",
    week: "Week 03",
    content:
      "Master Meta and TikTok ads with our proven creative frameworks, audience targeting strategies, and budget allocation rules. Know exactly when to kill, test, or scale.",
  },
  {
    title: "Scaling Strategies",
    week: "Week 04",
    content:
      "Go from $100/day to $1,000+/day profitably. Learn horizontal and vertical scaling, CBO strategies, lookalike audiences, and how to manage increasing ad spend without losing margins.",
  },
  {
    title: "Systems & Automation",
    week: "Week 05",
    content:
      "Build SOPs, automate fulfillment, set up email flows, and create systems that run without you. This is how you buy back your time and scale without burnout.",
  },
  {
    title: "Long-Term Brand Building",
    week: "Week 06",
    content:
      "Transition from a product store to a real brand. Learn retention marketing, customer lifetime value optimization, influencer partnerships, and building assets you can sell.",
  },
];

const courseOverview = [
  "Direct access to 1-on-1 mentorship",
  "Proven system for finding products, scaling ads, and building brands",
  "Exclusive Tools & Supplier Connections — Shortcuts you won't find on YouTube.",
  "Mindset & Accountability Coaching — Build the discipline and focus to stick with it.",
];

export default function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="curriculum" className="py-[80px] md:py-[120px] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #faf9f7 0%, #f6f2fb 50%, #f3eef9 100%)" }}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(88,62,141,0.06) 0%, transparent 60%)" }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#f3eef9] border border-[#583E8D]/10 mb-5">
            <span className="text-[12px] text-[#583E8D] font-medium">Curriculum Overview</span>
          </div>
          <h2 className="font-serif text-[clamp(36px,4.5vw,56px)] leading-[1.08] tracking-[-0.02em] text-[#17191c]">
            Unlock the secret sauce behind{" "}
            <span className="text-[#583E8D] italic">world-class products.</span>
          </h2>
          <p className="text-[15px] text-[#777b86] mt-4 max-w-[480px] mx-auto">
            A 6-stage system that takes you from zero to a profitable, scalable e-commerce brand.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left — Accordion stages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            {stages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                className={`group rounded-2xl border transition-all duration-300 ${
                  openIndex === i
                    ? "bg-white border-[#583E8D]/15"
                    : "bg-white/60 border-[#e8e8e8] hover:bg-white hover:border-[#d0d0d0]"
                }`}
                style={{
                  boxShadow: openIndex === i
                    ? "0 8px 30px rgba(88,62,141,0.06), 0 2px 6px rgba(0,0,0,0.02)"
                    : "0 2px 8px rgba(0,0,0,0.01)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      openIndex === i
                        ? "text-white"
                        : "bg-[#f3eef9] text-[#583E8D] group-hover:bg-[#ebe3f5]"
                    }`}
                      style={openIndex === i ? {
                        background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
                        boxShadow: "0 4px 12px rgba(88,62,141,0.2)"
                      } : {}}
                    >
                      <span className="text-[13px] font-bold">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <p className={`text-[16px] md:text-[17px] font-medium transition-colors duration-200 ${
                        openIndex === i ? "text-[#583E8D]" : "text-[#17191c]"
                      }`}>
                        Stage {i + 1}: {stage.title}
                      </p>
                      <p className="text-[13px] text-[#777b86] mt-0.5">{stage.week}</p>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${
                    openIndex === i
                      ? "bg-[#583E8D] shadow-[0_2px_8px_rgba(88,62,141,0.2)]"
                      : "border border-[#e8e8e8] group-hover:border-[#583E8D]/20"
                  }`}>
                    {openIndex === i ? (
                      <Minus size={14} className="text-white" strokeWidth={2.5} />
                    ) : (
                      <Plus size={14} className="text-[#777b86]" strokeWidth={2.5} />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[76px] md:pl-[84px]">
                        <p className="text-[14px] leading-[1.65] text-[#4c4c4c]">
                          {stage.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Right — Dark apply card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:sticky lg:top-[100px]"
          >
            <div className="relative bg-[#17191c] rounded-[24px] p-7 md:p-8 text-white overflow-hidden"
              style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)" }}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(88,62,141,0.3) 0%, transparent 70%)" }}
              />

              <div className="relative z-10">
                {/* Header badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[12px] font-medium text-white"
                    style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)", boxShadow: "0 4px 12px rgba(88,62,141,0.3)" }}
                  >
                    The Best Mentoring Guarantee
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/8 border border-white/5 text-[12px] text-white/70">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7z" />
                    </svg>
                    AI
                  </div>
                </div>

                <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2] tracking-[-0.01em] mb-7">
                  Apply for Mentorship Today
                </h3>

                {/* Feature grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: "🎓", label: "Beginner Friendly" },
                    { icon: "🔓", label: "Full Access" },
                    { icon: "👥", label: "1-on-1 Mentorship" },
                    { icon: "✅", label: "Proven System" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-[14px]">{item.icon}</span>
                      <span className="text-[13px] text-white/80">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-white/8 pt-7 mb-7">
                  <p className="text-[11px] font-semibold tracking-[0.08em] text-white/40 uppercase mb-5">
                    A Quick Overview of the Course
                  </p>
                  <div className="space-y-4">
                    {courseOverview.map((item, i) => (
                      <div key={i} className="flex gap-3.5">
                        <div className="w-5.5 h-5.5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)", boxShadow: "0 2px 6px rgba(88,62,141,0.25)" }}
                        >
                          <Check size={11} className="text-white" strokeWidth={3} />
                        </div>
                        <p className="text-[14px] leading-[1.55] text-white/75">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply button */}
                <a
                  href="https://e-commercementoring.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full text-white text-[15px] font-medium px-6 py-4.5 rounded-xl transition-all duration-300 hover:shadow-[0_8px_24px_rgba(88,62,141,0.3)] hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)" }}
                >
                  <span>Apply Now</span>
                  <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
