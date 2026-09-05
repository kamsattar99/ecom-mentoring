import { useState } from "react";

/** Homepage visual direction: direct answers in a quiet editorial accordion. */
const faqs = [
  {
    question: "Will my mentorship calls be with Kamil?",
    answer:
      "No. Your calls are conducted by Inder or Nail. Both are former students of Kamil who went on to build seven-figure dropshipping businesses. Kamil designs and updates the programme, trains the mentors and reviews the quality of their work behind the scenes.",
  },
  {
    question: "Who are Inder and Nail?",
    answer:
      "Inder and Nail are not generic coaches or salespeople. They joined Kamil's mentoring system as students, applied what they learned and each built a seven-figure dropshipping business before being trained to mentor students themselves.",
  },
  {
    question: "How is this different from a course or free YouTube videos?",
    answer:
      "Free content can show you what to do in general. Mentorship gives you feedback on your actual products, store, creatives, advertising and data. The value is not more information; it is having an operator help you identify what matters next and where your own execution is going wrong.",
  },
  {
    question: "What support do I receive during the six weeks?",
    answer:
      "The Launch programme includes one private 1-to-1 review call at the end of every week, Telegram mentor support throughout all six weeks, clear weekly priorities, call recordings, video lessons and practical resources. The intensive Mentorship programme includes three live one-to-one calls every week with Inder or Nail, direct mentor chat, and more frequent practical reviews of your products, store, creatives and advertising.",
  },
  {
    question: "What happens if my first product does not work?",
    answer:
      "No mentor can guarantee that every product will succeed. Your mentor helps you review the evidence, understand whether the problem is the product, offer, creative, store or advertising, and decide whether to improve the test or move on. The goal is a repeatable decision-making process—not dependence on one product pick.",
  },
  {
    question: "How much money do I need beyond the tuition?",
    answer:
      "You should have at least $1,000 available for the business itself. Advertising, Shopify, software, samples and other operating expenses are separate from programme tuition. The application helps us assess whether your available budget is realistic for your goals.",
  },
  {
    question: "Are the case-study numbers revenue or profit?",
    answer:
      "The figures presented as Shopify sales or discussed as sales in the student interviews are revenue, not profit, unless profit is explicitly stated. They show what individual students achieved and are not guarantees of what another student will earn.",
  },
  {
    question: "Do I need previous ecommerce or AI experience?",
    answer:
      "No. Both programmes can support beginners, but you must be willing to implement consistently, learn the tools and make realistic testing decisions. Existing store owners can also use the mentorship to diagnose problems and improve their current operation.",
  },
  {
    question: "How much time should I commit?",
    answer:
      "You need consistent time outside the live calls to research, build, produce creatives, launch tests and act on feedback. The exact workload depends on your stage, but this is not a passive programme that works without implementation.",
  },
  {
    question: "What are the payment, cancellation and refund terms?",
    answer:
      "The programme price and applicable terms are shown before you enrol. Review the Terms of Service before purchasing and use the fit call to ask any questions you have before making a payment.",
    link: "/terms-of-service",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="home-section relative bg-[#0F0E13]">
      <div className="home-wrap-narrow grid items-start gap-10 lg:grid-cols-[360px_1fr] lg:gap-[72px]">
        <div data-reveal className="lg:sticky lg:top-[130px] lg:self-start">
          <p className="home-kicker">Straight answers</p>
          <h2 className="home-section-title text-[clamp(36px,4.4vw,54px)]">
            The Questions You Should Ask <em>Before Paying.</em>
          </h2>
          <p className="mt-5 text-[14.5px] leading-[1.75] text-white/50">
            We would rather answer the uncomfortable questions now than have you
            join with the wrong expectations.
          </p>
          <a
            href="/apply"
            className="btn-primary mt-[30px] min-h-12 justify-center px-[30px] py-4 text-[15px] font-semibold"
          >
            Apply For A Fit Call
          </a>
          <p className="mt-3 text-[11px] leading-[1.6] text-white/30">
            Applications are reviewed before calls are booked.
          </p>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
          className="border-t border-white/10"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div key={faq.question} className="border-b border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex min-h-14 w-full items-center justify-between gap-5 bg-transparent px-1 py-[22px] text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span
                    className={`text-[15px] font-semibold leading-[1.45] transition-colors duration-300 sm:text-[15.5px] ${isOpen ? "text-[#C4A8FF]" : "text-white"}`}
                  >
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border transition-[transform,background,border-color] duration-300 ${isOpen ? "rotate-45 border-[#B394F2]/50 bg-[#7B5BB5] text-white" : "border-white/15 text-white/55"}`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  id={panelId}
                  inert={!isOpen}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[640px] px-1 pb-6 text-[14px] leading-[1.78] text-white/55 sm:text-[14.5px]">
                      {faq.answer}
                    </p>
                    {faq.link && (
                      <a
                        href={faq.link}
                        className="mx-1 -mt-5 mb-3 inline-flex min-h-11 items-center border-b border-[#B394F2]/35 text-[12px] font-bold text-[#B394F2]"
                      >
                        Read the Terms of Service →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
