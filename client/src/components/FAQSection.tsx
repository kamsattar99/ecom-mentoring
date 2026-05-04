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
    <section id="faqs" className="py-[80px] md:py-[120px] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f9f6fd 50%, #f5f1fa 100%)" }}>
      {/* Background decorations */}
      <div className="absolute top-[5%] right-[-5%] w-[500px] h-[500px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(88,62,141,0.08) 0%, transparent 60%)" }}
      />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(248,180,120,0.06) 0%, transparent 60%)" }}
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-6"
              style={{ background: "linear-gradient(135deg, #f3eef9 0%, #ebe3f5 100%)", boxShadow: "0 2px 8px rgba(88,62,141,0.06)" }}
            >
              <span className="text-[12px] text-[#583E8D] font-semibold tracking-wide">FAQs</span>
            </div>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.015em] text-[#17191c] mb-5">
              Common questions, <span className="italic text-[#583E8D]">answered</span>
            </h2>
            <p className="text-[15px] leading-[1.6] text-[#4c4c4c] mb-8">
              Everything you need to know before applying. Still have questions? Reach out directly.
            </p>
            <a
              href="https://e-commercementoring.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white text-[14px] font-medium transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #17191c 0%, #2a2a2e 100%)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.06)",
              }}
            >
              Contact us <span>→</span>
            </a>
          </motion.div>

          {/* Right - Accordion */}
          <div className="rounded-[28px] p-6 md:p-8"
            style={{
              background: "linear-gradient(145deg, #faf9f7 0%, #f5f3f0 100%)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.8)",
              border: "1px solid rgba(232,232,232,0.4)",
            }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`border-b border-[#e8e8e8]/60 last:border-b-0 transition-all duration-300 ${
                  openIndex === i ? "bg-white rounded-[18px] -mx-3 px-3 border-transparent my-1" : ""
                }`}
                style={{
                  boxShadow: openIndex === i ? "0 4px 20px rgba(88,62,141,0.06), 0 1px 4px rgba(0,0,0,0.02)" : "none",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 md:py-6 text-left group px-3"
                >
                  <span className={`text-[15px] md:text-[16px] font-medium pr-4 transition-colors duration-200 ${
                    openIndex === i ? "text-[#583E8D]" : "text-[#17191c] group-hover:text-[#583E8D]"
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openIndex === i
                      ? ""
                      : "group-hover:scale-110"
                  }`}
                    style={{
                      background: openIndex === i
                        ? "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)"
                        : "linear-gradient(135deg, #f3eef9 0%, #ebe3f5 100%)",
                      boxShadow: openIndex === i
                        ? "0 4px 12px rgba(88,62,141,0.25)"
                        : "0 2px 6px rgba(88,62,141,0.06)",
                    }}
                  >
                    {openIndex === i ? (
                      <Minus size={13} className="text-white" strokeWidth={2.5} />
                    ) : (
                      <Plus size={13} className="text-[#583E8D]" strokeWidth={2.5} />
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
                      <p className="pb-6 px-3 text-[14px] md:text-[15px] leading-[1.7] text-[#4c4c4c]">
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
