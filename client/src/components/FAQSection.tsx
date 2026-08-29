import { useState } from "react";

const faqs = [
  {
    question: "Will my mentorship calls be with Kamil?",
    answer: "No. Your calls are conducted by Inder or Nail. Both are former students of Kamil who went on to build seven-figure dropshipping businesses. Kamil designs and updates the programme, trains the mentors and reviews the quality of their work behind the scenes.",
  },
  {
    question: "Who are Inder and Nail?",
    answer: "Inder and Nail are not generic coaches or salespeople. They joined Kamil's mentoring system as students, applied what they learned and each built a seven-figure dropshipping business before being trained to mentor students themselves.",
  },
  {
    question: "How is this different from a course or free YouTube videos?",
    answer: "Free content can show you what to do in general. Mentorship gives you feedback on your actual products, store, creatives, advertising and data. The value is not more information; it is having an operator help you identify what matters next and where your own execution is going wrong.",
  },
  {
    question: "What support do I receive during the six weeks?",
    answer: "The Launch programme includes one private 1-to-1 review call at the end of every week, Telegram mentor support throughout all six weeks, clear weekly priorities, call recordings, video lessons and practical resources. The intensive Mentorship programme includes three live one-to-one calls every week with Inder or Nail, direct mentor chat, and more frequent practical reviews of your products, store, creatives and advertising.",
  },
  {
    question: "What happens if my first product does not work?",
    answer: "No mentor can guarantee that every product will succeed. Your mentor helps you review the evidence, understand whether the problem is the product, offer, creative, store or advertising, and decide whether to improve the test or move on. The goal is a repeatable decision-making process—not dependence on one product pick.",
  },
  {
    question: "How much money do I need beyond the tuition?",
    answer: "You should have at least $1,000 available for the business itself. Advertising, Shopify, software, samples and other operating expenses are separate from programme tuition. The application helps us assess whether your available budget is realistic for your goals.",
  },
  {
    question: "Are the case-study numbers revenue or profit?",
    answer: "The figures presented as Shopify sales or discussed as sales in the student interviews are revenue, not profit, unless profit is explicitly stated. They show what individual students achieved and are not guarantees of what another student will earn.",
  },
  {
    question: "Do I need previous ecommerce or AI experience?",
    answer: "No. Both programmes can support beginners, but you must be willing to implement consistently, learn the tools and make realistic testing decisions. Existing store owners can also use the mentorship to diagnose problems and improve their current operation.",
  },
  {
    question: "How much time should I commit?",
    answer: "You need consistent time outside the live calls to research, build, produce creatives, launch tests and act on feedback. The exact workload depends on your stage, but this is not a passive programme that works without implementation.",
  },
  {
    question: "What are the payment, cancellation and refund terms?",
    answer: "The programme price and applicable terms are shown before you enrol. Review the Terms of Service before purchasing and use the fit call to ask any questions you have before making a payment.",
    link: "/terms-of-service",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faqs" className="relative overflow-hidden bg-[#0F0E13] py-[82px] md:py-[112px]">
      <div className="container max-w-[1080px]">
        <div className="grid gap-11 lg:grid-cols-[360px_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <p className="eyebrow mb-4">Straight answers</p>
            <h2 className="font-serif text-[clamp(36px,4.6vw,54px)] leading-[1.04] tracking-[-0.025em] text-white">
              The Questions You Should Ask <span className="italic text-[#B394F2]">Before Paying.</span>
            </h2>
            <p className="mt-5 text-[14px] leading-[1.75] text-white/50">
              We would rather answer the uncomfortable questions now than have you join with the wrong expectations.
            </p>
            <a href="/apply" className="btn-primary mt-8 justify-center">
              Apply For A Fit Call
            </a>
            <p className="mt-3 text-[11px] leading-[1.6] text-white/32">Applications are reviewed before calls are booked.</p>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-white/8 bg-[#17151E]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="border-b border-white/7 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-7 md:py-6"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-[14px] font-semibold leading-[1.45] transition-colors md:text-[15px] ${isOpen ? "text-[#C4A8FF]" : "text-white"}`}>
                      {faq.question}
                    </span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[20px] transition-colors ${isOpen ? "bg-[#7B5BB5] text-white" : "border border-white/13 text-white/45"}`} aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 md:px-7">
                      <p className="max-w-[660px] text-[13px] leading-[1.78] text-white/55 md:text-[14px]">{faq.answer}</p>
                      {faq.link && (
                        <a href={faq.link} className="mt-3 inline-flex text-[12px] font-bold text-[#B394F2] hover:underline">
                          Read the Terms of Service →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
