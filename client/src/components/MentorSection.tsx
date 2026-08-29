const mentorCards = [
  {
    name: "Inder",
    image: "/mentors/inder.webp",
    imageAlt: "Inder, seven-figure ecommerce operator and mentor",
    role: "Seven-Figure Ecommerce Operator & Mentor",
    points: [
      "Started as a student inside Kamil's mentoring system",
      "Built a seven-figure dropshipping business",
      "Trained by Kamil to deliver one-to-one student guidance",
    ],
  },
  {
    name: "Nail",
    image: "/mentors/nail.webp",
    imageAlt: "Nail, seven-figure ecommerce operator and mentor",
    role: "Seven-Figure Ecommerce Operator & Mentor",
    points: [
      "Started as a student inside Kamil's mentoring system",
      "Built a seven-figure dropshipping business",
      "Trained by Kamil to deliver one-to-one student guidance",
    ],
  },
];

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function MentorSection() {
  return (
    <section id="mentors" className="relative overflow-hidden bg-[#0F0E13] py-[82px] md:py-[112px]">
      <div
        className="pointer-events-none absolute left-1/2 top-[-280px] h-[600px] w-[900px] -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(123,91,181,0.19) 0%, transparent 68%)" }}
      />

      <div className="container relative z-10 max-w-[1120px]">
        <div className="mx-auto mb-12 max-w-[760px] text-center">
          <p className="eyebrow mb-4">Who actually mentors you</p>
          <h2 className="font-serif text-[clamp(38px,5vw,60px)] leading-[1.04] tracking-[-0.025em] text-white">
            Meet The Students Who Became <span className="italic text-[#B394F2]">The Mentors.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[650px] text-[15px] leading-[1.75] text-white/55 md:text-[16px]">
            You are not sold access to a famous founder and then handed to an inexperienced junior coach. Inder and Nail learned the system as students, applied it and each built a seven-figure dropshipping business.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1fr_1fr]">
          <article
            className="relative overflow-hidden rounded-[24px] border border-[#B394F2]/25 p-7 md:p-8"
            style={{ background: "linear-gradient(150deg, rgba(88,62,141,0.42) 0%, #17151E 62%)" }}
          >
            <span className="inline-flex rounded-full border border-[#B394F2]/28 bg-[#B394F2]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.13em] text-[#C4A8FF]">
              Programme oversight
            </span>
            <img
              src="/mentors/kamil.webp"
              alt="Kamil Sattar, founder and programme director"
              className="mt-8 h-20 w-20 rounded-[22px] border border-white/15 object-cover object-top shadow-xl"
              width={80}
              height={80}
              loading="lazy"
              decoding="async"
            />
            <h3 className="mt-6 text-[24px] font-bold text-white">Kamil Sattar</h3>
            <p className="mt-1 text-[13px] font-semibold text-[#B394F2]">Founder & Programme Director</p>
            <p className="mt-5 text-[13px] leading-[1.75] text-white/55">
              Kamil does not conduct the weekly student calls. He designs and updates the system, trains the mentors and reviews the quality of their work behind the scenes.
            </p>
            <div className="mt-6 border-t border-white/8 pt-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/35">Clear from day one</p>
              <p className="mt-2 text-[13px] leading-[1.6] text-white/70">Your assigned mentor—not Kamil—works directly with you throughout the programme.</p>
            </div>
          </article>

          {mentorCards.map((mentor) => (
            <article key={mentor.name} className="rounded-[24px] border border-white/9 bg-[#17151E] p-7 transition-transform duration-300 hover:-translate-y-1 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <img
                  src={mentor.image}
                  alt={mentor.imageAlt}
                  className="h-20 w-20 rounded-[22px] border border-white/12 object-cover object-top shadow-lg"
                  width={80}
                  height={80}
                  loading="lazy"
                  decoding="async"
                />
                <span className="rounded-full border border-emerald-400/22 bg-emerald-400/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-300">
                  Former student
                </span>
              </div>
              <h3 className="mt-6 text-[25px] font-bold text-white">{mentor.name}</h3>
              <p className="mt-1 min-h-[42px] text-[13px] font-semibold leading-[1.55] text-[#B394F2]">{mentor.role}</p>
              <ul className="mt-6 space-y-4 border-t border-white/8 pt-6">
                {mentor.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[13px] leading-[1.65] text-white/62">
                    <span className="mt-0.5 text-[#B394F2]"><Check /></span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[20px] border border-white/8 bg-white/[0.035] p-5 text-center md:p-6">
          <p className="text-[14px] leading-[1.7] text-white/62">
            <strong className="text-white">The delivery model is intentionally transparent:</strong> Kamil sets and reviews the standard. Inder or Nail provides your one-to-one support.
          </p>
        </div>
      </div>
    </section>
  );
}
