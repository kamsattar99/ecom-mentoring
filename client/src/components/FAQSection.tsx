import { useState } from "react";

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
    <section id="faqs" className="py-[80px] md:py-[110px] relative overflow-hidden bg-[#0F0E13]">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 max-w-[1080px] mx-auto">
          {/* Left side — header + CTA */}
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <p className="eyebrow mb-4">FAQs</p>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] leading-[1.15] tracking-[-0.015em] text-white mb-4">
              Questions Before You{" "}
              <span className="italic text-[#B394F2]">Apply?</span>
            </h2>
            <p className="text-[14px] text-[rgba(255,255,255,0.5)] leading-[1.7] mb-8">
              Before you apply, here are the questions most serious founders ask about the AI-powered programme, the commitment, and whether it is the right fit.
            </p>

            {/* Need help deciding card */}
            <div
              className="p-5 rounded-[18px] mb-5"
              style={{ background: "#17151E", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="text-[13px] font-semibold text-white mb-3 block">Need help deciding?</span>
              <p className="text-[12px] text-[rgba(255,255,255,0.5)] leading-[1.6] mb-4">
                Apply or contact us and we'll help you understand whether the mentorship is the right fit for where you are now.
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href="/curriculums"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white text-[13px] font-medium transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)", boxShadow: "0 8px 24px rgba(123,91,181,0.35)" }}
                >
                  Apply For Mentorship
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="mailto:support@ecommentoring.com"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[rgba(255,255,255,0.7)] text-[13px] font-medium transition-all duration-200 hover:text-white"
                  style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                >
                  Contact Us
                </a>
              </div>
            </div>
            <p className="text-[11px] text-[rgba(255,255,255,0.3)]">
              Applications are reviewed before calls are booked.
            </p>
          </div>

          {/* Right side — FAQ accordion */}
          <div>
            <div
              className="rounded-[22px] overflow-hidden"
              style={{ background: "#17151E", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    style={{ borderBottom: i < faqs.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 md:px-7 py-5 text-left group"
                    >
                      <span className={`text-[14px] md:text-[15px] font-medium leading-[1.4] transition-colors duration-200 ${isOpen ? "text-[#B394F2]" : "text-white group-hover:text-[#B394F2]"}`}>
                        {faq.question}
                      </span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${isOpen ? "bg-[#7B5BB5]" : "border border-[rgba(255,255,255,0.14)]"}`}>
                        {isOpen ? (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M5 12h14" />
                          </svg>
                        ) : (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 md:px-7 pb-5">
                        <p className="text-[13px] md:text-[14px] text-[rgba(255,255,255,0.55)] leading-[1.7]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Trust reassurance */}
            <div className="flex flex-wrap items-center gap-4 mt-5 px-2">
              <span className="text-[11px] text-[rgba(255,255,255,0.35)] flex items-center gap-1.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                Application required
              </span>
              <span className="text-[11px] text-[rgba(255,255,255,0.35)] flex items-center gap-1.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                No pressure to commit
              </span>
              <span className="text-[11px] text-[rgba(255,255,255,0.35)] flex items-center gap-1.5">
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
