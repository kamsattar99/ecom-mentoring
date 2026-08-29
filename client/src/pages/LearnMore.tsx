import { useEffect } from "react";
import MentorSection from "@/components/MentorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatYouGet from "@/components/WhatYouGet";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function LearnMore() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/45323800-eb58-4cdc-8f24-cdf73ac80cfc/players/69d95194d7a6aac50a9b93e2/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0E13]">
      <section className="relative overflow-hidden px-4 pb-20 pt-28 md:pb-28 md:pt-36">
        <div
          className="pointer-events-none absolute left-1/2 top-[-160px] h-[680px] w-[980px] -translate-x-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(123,91,181,0.27) 0%, transparent 67%)" }}
        />
        <div className="relative mx-auto max-w-[900px]">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-[#B394F2]/28 bg-[#B394F2]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.13em] text-[#C4A8FF]">
              Watch before applying
            </span>
            <h1 className="mx-auto mt-6 max-w-[760px] font-serif text-[clamp(40px,5.6vw,66px)] leading-[1.02] tracking-[-0.03em] text-white">
              Understand The Programme, The Mentors And <span className="italic text-[#B394F2]">What Happens Next.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-[1.75] text-white/55 md:text-[16px]">
              Your weekly calls are with Inder or Nail—former students who each built seven-figure dropshipping businesses. Kamil designs the programme, trains the mentors and reviews their delivery.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[20px] border border-white/12 shadow-[0_34px_90px_rgba(0,0,0,0.52)]">
            <div
              dangerouslySetInnerHTML={{
                __html: '<vturb-smartplayer id="vid-69d95194d7a6aac50a9b93e2" style="display:block;margin:0 auto;width:100%;"></vturb-smartplayer>',
              }}
            />
          </div>

          <div className="mt-9 text-center">
            <a href="/apply" className="btn-primary justify-center px-10">Apply For A Fit Call</a>
            <p className="mt-4 text-[12px] text-white/38">Around 2 minutes to apply · Applications are reviewed before a call is offered</p>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <MentorSection />
      <WhatYouGet />
      <FAQSection />
      <CTASection />
    </div>
  );
}
