import { useState } from "react";
import { Plus, Minus, ArrowRight, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How is this different from a normal ecommerce course?",
    answer: "Most courses give you content and leave you to figure out the rest. This is hands-on mentorship with AI-integrated workflows. You get direct support, personalised feedback, AI tools for every stage, and practical guidance based on your store, products, ads and current stage.",
  },
  {
    question: "Do I need AI experience to join?",
    answer: "No. We teach you exactly which AI tools to use and how to use them at each stage. The programme is structured to guide you from zero, but it works best for people who are willing to implement, test and stay consistent.",
  },
  {
    question: "How much budget do I need to start properly?",
    answer: "You do not need a huge budget, but you should be prepared to invest in your store, AI tools, product testing and advertising. Many AI tools we recommend are free or low-cost. The application process helps us understand whether your current budget is realistic for your goals.",
  },
  {
    question: "How much time should I commit each week?",
    answer: "The more consistently you implement, the faster you will learn. As a guideline, you should be able to commit focused weekly time to product research, store improvements, creative testing, calls and execution.",
  },
  {
    question: "How quickly can I expect to see progress?",
    answer: "Results vary depending on your product, budget, execution and market. The AI tools accelerate research, creative production and testing — but the goal is not to promise overnight results. It is to give you a clear system, direct feedback and better decision-making so you can make progress faster with less guesswork.",
  },
  {
    question: "What support do I get during the mentorship?",
    answer: "You get structured guidance, 1:1 calls, direct chat access, AI workflow templates, SOPs, store feedback and ad account reviews depending on your stage and needs.",
  },
  {
    question: "What happens after the mentorship ends?",
    answer: "The aim is to leave you with the AI systems, frameworks and confidence to continue building independently. You will understand how to use AI for product research, store optimisation, creative testing, data analysis and scaling decisions.",
  },
  {
    question: "Is there an application process?",
    answer: "Yes. We review applications to make sure the programme is the right fit before booking calls. This helps us work with people who are serious, realistic and ready to execute.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faqs" className="py-[80px] md:py-[120px] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8f5fc 40%, #f3eef9 70%, #ffffff 100%)" }}>
      {/* Background decoration */}
      <div className="absolute top-[15%] right-[-8%] w-[500px] h-[500px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(88,62,141,0.06) 0%, transparent 60%)" }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 max-w-[1080px] mx-auto">
          {/* Left side — header + CTA */}
          <div
            className="lg:sticky lg:top-[120px] lg:self-start"
          >
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#583E8D]/10 bg-white/80 backdrop-blur-sm mb-5 shadow-[0_2px_8px_rgba(88,62,141,0.05)]">
              <span className="text-[12px] text-[#583E8D] font-semibold tracking-wide uppercase">FAQs</span>
            </div>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] leading-[1.15] tracking-[-0.015em] text-[#17191c] mb-4">
              Questions Before You{" "}
              <span className="italic text-[#583E8D]">Apply?</span>
            </h2>
            <p className="text-[14px] text-[#777b86] leading-[1.7] mb-8">
              Before you apply, here are the questions most serious founders ask about the AI-powered programme, the commitment, and whether it is the right fit.
            </p>

            {/* Need help deciding card */}
            <div className="p-5 rounded-[16px] bg-white border border-[#e8e8e8]/60 mb-5"
              style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #f3eef9 0%, #ebe3f5 100%)" }}
                >
                  <MessageCircle size={14} className="text-[#583E8D]" />
                </div>
                <span className="text-[13px] font-semibold text-[#17191c]">Need help deciding?</span>
              </div>
              <p className="text-[12px] text-[#777b86] leading-[1.6] mb-4">
                Apply or contact us and we'll help you understand whether the mentorship is the right fit for where you are now.
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://e-commercementoring.com/learn-more"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white text-[13px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(88,62,141,0.2)]"
                  style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)" }}
                >
                  Apply For Mentorship
                  <ArrowRight size={13} />
                </a>
                <a
                  href="mailto:support@ecommentoring.com"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-[#583E8D] text-[13px] font-medium border border-[#583E8D]/15 bg-white hover:bg-[#f8f5fc] transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <p className="text-[11px] text-[#999]">
              Applications are reviewed before calls are booked.
            </p>
          </div>

          {/* Right side — FAQ accordion */}
          <div
          >
            <div className="rounded-[20px] bg-white overflow-hidden"
              style={{ boxShadow: "0 4px 24px rgba(88,62,141,0.04), 0 1px 4px rgba(0,0,0,0.02)", border: "1px solid rgba(232,232,232,0.6)" }}
            >
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} className={`border-b border-[#f0f0f0] last:border-b-0 transition-colors duration-200 ${isOpen ? "bg-[#faf8fd]" : "hover:bg-[#fcfbfe]"}`}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 md:px-7 py-5 text-left group"
                    >
                      <span className={`text-[14px] md:text-[15px] font-medium leading-[1.4] transition-colors duration-200 ${isOpen ? "text-[#583E8D]" : "text-[#17191c] group-hover:text-[#583E8D]"}`}>
                        {faq.question}
                      </span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${isOpen ? "bg-[#583E8D]" : "bg-[#f3eef9] group-hover:bg-[#ebe3f5]"}`}>
                        {isOpen ? (
                          <Minus size={13} className="text-white" strokeWidth={2.5} />
                        ) : (
                          <Plus size={13} className="text-[#583E8D]" strokeWidth={2.5} />
                        )}
                      </div>
                    </button>
                    
                      {isOpen && (
                        <div
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-7 pb-5">
                            <p className="text-[13px] md:text-[14px] text-[#555] leading-[1.7]">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    
                  </div>
                );
              })}
            </div>

            {/* Trust reassurance */}
            <div className="flex flex-wrap items-center gap-4 mt-5 px-2">
              <span className="text-[11px] text-[#999] flex items-center gap-1.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                Application required
              </span>
              <span className="text-[11px] text-[#999] flex items-center gap-1.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                No pressure to commit
              </span>
              <span className="text-[11px] text-[#999] flex items-center gap-1.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                Results vary based on execution
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
