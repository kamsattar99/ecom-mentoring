import { homeAssets } from "@/lib/homeAssets";

/** Homepage visual direction: operator portraits first, oversight made explicit. */
const mentorCards = [
  { name: "Inder", image: homeAssets.inder, imageAlt: "Inder, seven-figure ecommerce operator and mentor", role: "Seven-Figure Ecommerce Operator & Mentor", points: ["Started as a student inside Kamil's mentoring system", "Built a seven-figure dropshipping business", "Trained by Kamil to deliver one-to-one student guidance"] },
  { name: "Nail", image: homeAssets.nail, imageAlt: "Nail, seven-figure ecommerce operator and mentor", role: "Seven-Figure Ecommerce Operator & Mentor", points: ["Started as a student inside Kamil's mentoring system", "Built a seven-figure dropshipping business", "Trained by Kamil to deliver one-to-one student guidance"] },
];

const Check = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>;

export default function MentorSection() {
  return (
    <section id="mentors" className="home-section relative overflow-hidden bg-[#0F0E13]">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-320px] h-[640px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(123,91,181,0.16)_0%,transparent_68%)]" />
      <div className="home-wrap relative">
        <div data-reveal className="mb-[52px] max-w-[780px]">
          <p className="home-kicker">Who actually mentors you</p>
          <h2 className="home-section-title">Meet The Students Who Became <em>The Mentors.</em></h2>
          <p className="mt-[22px] max-w-[650px] text-[16px] leading-[1.75] text-white/55">You are not sold access to a famous founder and then handed to an inexperienced junior coach. Inder and Nail learned the system as students, applied it and each built a seven-figure dropshipping business.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {mentorCards.map((mentor, index) => (
            <article key={mentor.name} data-reveal style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties} className="grid h-full gap-6 rounded-[24px] border border-white/[0.09] bg-[#17151E] p-[22px] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_30px_70px_rgba(0,0,0,0.45)] sm:grid-cols-[minmax(120px,168px)_1fr]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-[#B394F2]/20 shadow-[inset_0_0_0_1px_rgba(179,148,242,0.1)]">
                <img src={mentor.image} alt={mentor.imageAlt} width={720} height={720} loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-[#17151E]/70" />
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="w-fit rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-300">Former student</span>
                <h3 className="mt-4 font-serif text-[36px] leading-none text-white">{mentor.name}</h3>
                <p className="mt-2 text-[13px] font-semibold leading-[1.5] text-[#B394F2]">{mentor.role}</p>
                <ul className="mt-[18px] flex flex-col gap-2.5 border-t border-white/[0.08] pt-4">
                  {mentor.points.map((point) => <li key={point} className="flex gap-2.5 text-[13px] leading-[1.6] text-white/65"><span className="mt-[3px] shrink-0 text-[#B394F2]"><Check /></span>{point}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <article data-reveal className="mt-5 grid items-center gap-6 overflow-hidden rounded-[24px] border border-[#B394F2]/20 bg-[linear-gradient(120deg,rgba(88,62,141,0.36)_0%,#17151E_55%)] p-[clamp(22px,3vw,32px)] md:grid-cols-2 md:gap-10">
          <div className="flex items-center gap-5">
            <img src={homeAssets.kamil} alt="Kamil Sattar, founder and programme director" width={720} height={720} loading="lazy" decoding="async" className="h-[88px] w-[88px] shrink-0 rounded-[22px] border border-white/15 object-cover object-top shadow-[0_16px_40px_rgba(0,0,0,0.4)]" />
            <div>
              <span className="inline-block rounded-full border border-[#B394F2]/30 bg-[#B394F2]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.13em] text-[#C4A8FF]">Programme oversight</span>
              <h3 className="mt-2.5 text-[22px] font-bold text-white">Kamil Sattar</h3>
              <p className="mt-0.5 text-[13px] font-semibold text-[#B394F2]">Founder & Programme Director</p>
            </div>
          </div>
          <div>
            <p className="text-[14px] leading-[1.75] text-white/60">Kamil does not conduct the weekly student calls. He designs and updates the system, trains the mentors and reviews the quality of their work behind the scenes.</p>
            <p className="mt-3 text-[13px] leading-[1.6] text-white/80"><strong className="font-bold text-white">Clear from day one:</strong> your assigned mentor—not Kamil—works directly with you throughout the programme.</p>
          </div>
        </article>
        <p data-reveal className="mx-auto mt-6 max-w-[760px] text-center text-[14px] leading-[1.7] text-white/55"><strong className="text-white">The delivery model is intentionally transparent:</strong> Kamil sets and reviews the standard. Inder or Nail provides your one-to-one support.</p>
      </div>
    </section>
  );
}
