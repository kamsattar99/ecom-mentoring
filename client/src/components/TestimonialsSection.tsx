const caseStudies = [
  {
    outcome: "$886,513.93",
    timeframe: "in 10 months",
    name: "George",
    videoId: "ZfX9pP9USYc",
    duration: "29 min interview",
    featured: true,
  },
  {
    outcome: "$125,393.34",
    timeframe: "in 90 days",
    name: "Student case study",
    videoId: "bIjuWVoDh3c",
    duration: "30 min interview",
  },
  {
    outcome: "€10,183.44",
    timeframe: "in 30 days",
    name: "Kevin",
    videoId: "h1UJkS8wao0",
    duration: "20 min interview",
  },
  {
    outcome: "$5,906.88",
    timeframe: "in 16 days",
    name: "Student case study",
    videoId: "Iflz2wBStEE",
    duration: "14 min interview",
  },
  {
    outcome: "£615.05",
    timeframe: "in 9 days",
    name: "Student case study",
    videoId: "lCtricipmDk",
    duration: "11 min interview",
  },
];

const PlayIcon = () => (
  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#17151E] shadow-xl transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  </span>
);

export default function TestimonialsSection() {
  return (
    <section id="results" className="relative overflow-hidden bg-[#F2EEF8] py-[82px] text-[#17131E] md:py-[112px]">
      <div className="container max-w-[1180px]">
        <div className="mb-12 grid items-end gap-7 md:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#6C4AA9]">Student evidence</p>
            <h2 className="max-w-[700px] font-serif text-[clamp(38px,5vw,62px)] leading-[1.02] tracking-[-0.025em]">
              Watch The Students <span className="italic text-[#6C4AA9]">Tell You Themselves.</span>
            </h2>
          </div>
          <p className="max-w-[470px] text-[15px] leading-[1.75] text-[#514A5B] md:justify-self-end">
            Not anonymous one-line reviews. These are long-form conversations with students at different stages—from their first sales to six-figure growth.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <a
              key={study.videoId}
              href={`https://www.youtube.com/watch?v=${study.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-[24px] bg-[#17151E] shadow-[0_24px_60px_rgba(31,22,45,0.14)] ${index === 0 ? "lg:row-span-2" : ""}`}
              aria-label={`Watch ${study.name}: ${study.outcome} ${study.timeframe}`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? "h-[330px] lg:h-[560px]" : "h-[255px]"}`}>
                <img
                  src={`https://i.ytimg.com/vi/${study.videoId}/hqdefault.jpg`}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17151E] via-[#17151E]/20 to-transparent" />
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-white/75 backdrop-blur-md">
                    Full student interview
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayIcon />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <p className="text-[12px] font-medium text-white/52">{study.name} · {study.duration}</p>
                  <p className="mt-2 font-serif text-[34px] leading-none text-white md:text-[39px]">{study.outcome}</p>
                  <p className="mt-2 text-[14px] font-medium text-[#C4A8FF]">{study.timeframe}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-[18px] border border-[#6C4AA9]/15 bg-white/55 p-5 md:flex-row md:items-center md:justify-between md:px-6">
          <p className="max-w-[800px] text-[12px] leading-[1.7] text-[#645C6C]">
            These videos feature students from Kamil Sattar's ecommerce mentoring programmes. Programme structures have changed over time. Figures discussed are sales unless profit is explicitly stated, and they are not guarantees of future performance.
          </p>
          <a href="/earnings-disclaimer" className="shrink-0 text-[12px] font-bold text-[#6C4AA9] hover:underline">
            Read earnings disclaimer →
          </a>
        </div>
      </div>
    </section>
  );
}
