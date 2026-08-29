const included = [
  "Direct mentor chat throughout the six-week programme",
  "Feedback on your actual products, store, creatives and advertising",
  "AI workflows, SOPs and decision-making frameworks",
  "Clear priorities after every live session",
];

const launchIncluded = [
  "1 private 1-to-1 review call at the end of every week",
  "Telegram mentor support throughout the six-week programme",
  "Clear priorities after every weekly review",
  "Structured video lessons and practical resources",
  "Live-call recordings",
  "AI workflows, SOPs and decision-making frameworks",
];

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function WhatYouGet() {
  return (
    <section id="program" className="relative overflow-hidden bg-[#F2EEF8] py-[82px] text-[#17131E] md:py-[112px]">
      <div className="container max-w-[1120px]">
        <div className="mx-auto mb-12 max-w-[720px] text-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#6C4AA9]">Programme and pricing</p>
          <h2 className="font-serif text-[clamp(38px,5vw,60px)] leading-[1.04] tracking-[-0.025em]">
            Know Exactly What <span className="italic text-[#6C4AA9]">You Are Buying.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-[1.75] text-[#5D5665]">
            Both options teach the same six-stage AI ecommerce system. The difference is how much live support you receive and how the material is delivered.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex flex-col rounded-[26px] border border-[#2A203A]/10 bg-white p-7 shadow-[0_20px_55px_rgba(50,35,70,0.08)] md:p-9">
            <span className="w-fit rounded-full bg-[#6C4AA9]/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#6C4AA9]">Guided launch</span>
            <h3 className="mt-6 text-[23px] font-bold">AI Ecom Command: Launch</h3>
            <div className="mt-4 flex items-end gap-3">
              <p className="font-serif text-[42px] leading-none">$2,500</p>
              <p className="pb-1 text-[13px] font-medium text-[#6C6570]">6 weeks</p>
            </div>
            <p className="mt-5 text-[14px] leading-[1.7] text-[#5D5665]">
              One private 1-to-1 review call at the end of every week, with Telegram support, structured video lessons and practical resources throughout the six-week roadmap.
            </p>
            <ul className="mt-7 space-y-3 border-t border-[#2A203A]/8 pt-6">
              {launchIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] leading-[1.55] text-[#4F4758]">
                  <span className="mt-0.5 text-[#6C4AA9]"><Check /></span>{item}
                </li>
              ))}
            </ul>
            <a href="https://form.typeform.com/to/p3VexUDU" className="mt-8 inline-flex items-center justify-center rounded-full border border-[#6C4AA9]/22 px-6 py-3.5 text-[14px] font-bold text-[#6C4AA9] transition-colors hover:bg-[#6C4AA9] hover:text-white">
              Apply For Launch
            </a>
          </article>

          <article className="relative flex flex-col overflow-hidden rounded-[26px] bg-[#17151E] p-7 text-white shadow-[0_28px_65px_rgba(35,24,50,0.2)] md:p-9">
            <div
              className="pointer-events-none absolute right-[-120px] top-[-130px] h-[350px] w-[350px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(123,91,181,0.35), transparent 67%)" }}
            />
            <div className="relative z-10 flex h-full flex-col">
              <span className="w-fit rounded-full border border-[#B394F2]/28 bg-[#B394F2]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#C4A8FF]">Maximum live support</span>
              <h3 className="mt-6 text-[23px] font-bold">1-to-1 AI Ecommerce Mentorship</h3>
              <div className="mt-4 flex items-end gap-3">
                <p className="font-serif text-[42px] leading-none">$5,000</p>
                <p className="pb-1 text-[13px] font-medium text-white/48">6 weeks</p>
              </div>
              <p className="mt-5 text-[14px] leading-[1.7] text-white/58">
                Three live one-to-one calls every week with Inder or Nail. No passive video library—your time is focused on direct teaching, implementation and feedback.
              </p>
              <ul className="mt-7 space-y-3 border-t border-white/8 pt-6">
                {["3 live 1-to-1 mentor calls every week", "No passive video lessons", ...included].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] leading-[1.55] text-white/68">
                    <span className="mt-0.5 text-[#B394F2]"><Check /></span>{item}
                  </li>
                ))}
              </ul>
              <a href="/apply" className="btn-primary mt-8 justify-center">
                Apply For A Fit Call
              </a>
            </div>
          </article>
        </div>

        <div className="mt-7 rounded-[20px] border border-[#6C4AA9]/14 bg-white/60 p-5 md:flex md:items-center md:justify-between md:gap-8 md:px-7">
          <div>
            <p className="text-[13px] font-bold text-[#2A203A]">Budget beyond tuition</p>
            <p className="mt-1 text-[12px] leading-[1.65] text-[#655D6E]">
              You should have at least $1,000 available for the business itself. Advertising, Shopify, software, samples and other operating costs are separate from programme tuition.
            </p>
          </div>
          <a href="/curriculums" className="mt-4 inline-flex shrink-0 text-[12px] font-bold text-[#6C4AA9] hover:underline md:mt-0">
            Compare both programmes →
          </a>
        </div>
      </div>
    </section>
  );
}
