import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How is this different from a normal ecom course or mentorship?",
    answer:
      "Unlike generic courses, this is a true 1:1 mentorship program. You get direct access to your mentor, personalised guidance based on YOUR store, and tailored feedback — not just pre-recorded videos and templates. We work with you, not at you.",
  },
  {
    question: "I'm a complete beginner — is this right for me?",
    answer:
      "Absolutely. Whether you've never launched a store or already have one running, we start at your level and build from there. Beginners get a full foundation, while experienced sellers get advanced scaling strategies. The system adapts to you.",
  },
  {
    question: "Do I need a big budget to start?",
    answer:
      "You don't need tens of thousands — but you do need to be realistic. To properly test products, run ads, and get your store off the ground, you should expect to invest $1–2k into your business. On top of that, there's the mentorship fee, which gives you access to 1:1 guidance, proven systems, and ongoing support so you don't waste money making rookie mistakes.",
  },
  {
    question: "How much time will I need each week?",
    answer:
      "Expect to put in at least 5–10 focused hours weekly. The more you put in, the faster you'll see results. This is real business building, not a \"get rich overnight\" trick. We'll help you structure your time for maximum efficiency.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Most mentees see their first profitable product within weeks, and many hit their first 4-figure month within 90 days. Your results will depend on your effort and execution, but we give you the exact roadmap and accountability to get there faster than going alone.",
  },
  {
    question: "What happens after the mentorship ends?",
    answer:
      "You keep lifetime access to all resources, templates, SOPs, and recordings. Plus, you stay in our private community. The skills and systems you build during mentorship are yours forever — they compound over time.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#06B6D4] mb-4">
            Got Questions?
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                openIndex === i
                  ? "glass-card border-[#2563EB]/30"
                  : "border-border/30 bg-secondary/5 hover:border-border/50"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
              >
                <span className="font-semibold text-sm md:text-base text-foreground">
                  {faq.question}
                </span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  openIndex === i
                    ? "bg-[#2563EB]/20 border border-[#2563EB]/40"
                    : "bg-secondary/30 border border-border/40"
                }`}>
                  {openIndex === i ? (
                    <Minus size={14} className="text-[#06B6D4]" />
                  ) : (
                    <Plus size={14} className="text-muted-foreground" />
                  )}
                </div>
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
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
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
