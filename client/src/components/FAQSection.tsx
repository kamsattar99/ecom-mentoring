import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How is this different from a normal ecom course or mentorship?",
    a: "Unlike generic courses, this is a true 1:1 mentorship program. You get direct access to your mentor, personalised guidance based on YOUR store, and tailored feedback — not just pre-recorded videos and templates. We work with you, not at you.",
  },
  {
    q: "I'm a complete beginner — is this right for me?",
    a: "Absolutely. Whether you've never launched a store or already have one running, we start at your level and build from there. Beginners get a full foundation, while experienced sellers get advanced scaling strategies. The system adapts to you.",
  },
  {
    q: "Do I need a big budget to start?",
    a: "You don't need tens of thousands — but you do need to be realistic. To properly test products, run ads, and get your store off the ground, you should expect to invest $1–2k into your business. On top of that, there's the mentorship fee, which gives you access to 1:1 guidance, proven systems, and ongoing support so you don't waste money making rookie mistakes.",
  },
  {
    q: "How much time will I need each week?",
    a: "Expect to put in at least 5–10 focused hours weekly. The more you put in, the faster you'll see results. This is real business building, not a \"get rich overnight\" trick. We'll help you structure your time for maximum efficiency.",
  },
  {
    q: "How long before I see results?",
    a: "Most mentees see their first profitable product within weeks, and many hit their first 4-figure month within 90 days. Your results will depend on your effort and execution, but we give you the exact roadmap and accountability to get there faster than going alone.",
  },
  {
    q: "What happens after the mentorship ends?",
    a: "You keep lifetime access to all resources, templates, SOPs, and recordings. Plus, you stay in our private community. The skills and systems you build during mentorship are yours forever — they compound over time.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-[80px] md:py-[120px] bg-[#f7f7f8]">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-[14px] text-[#583E8D] font-medium mb-4">FAQs</p>
            <h2 className="font-serif text-[clamp(36px,4vw,44px)] leading-[1.1] tracking-[-0.015em] text-[#17191c] mb-5">
              Common questions, answered
            </h2>
            <p className="text-[16px] leading-[1.5] text-[#4c4c4c] mb-8">
              Everything you need to know before applying. Still have questions? Reach out directly.
            </p>
            <a
              href="https://e-commercementoring.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#17191c] text-white text-[15px] font-medium px-6 py-3 rounded-full hover:bg-[#2d2f33] transition-all duration-200"
            >
              Apply Now →
            </a>
          </motion.div>

          {/* Right - Accordion */}
          <div>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="border-b border-[#e8e8e8] last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-[16px] font-medium text-[#17191c] pr-4 group-hover:text-[#583E8D] transition-colors">
                    {faq.q}
                  </span>
                  {openIndex === i ? (
                    <Minus size={18} className="text-[#583E8D] shrink-0" />
                  ) : (
                    <Plus size={18} className="text-[#777b86] shrink-0" />
                  )}
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
                      <p className="pb-6 text-[15px] leading-[1.6] text-[#4c4c4c]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
