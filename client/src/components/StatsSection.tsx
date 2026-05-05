
const stats = [
  { value: "2M+", label: "YouTube Subscribers" },
  { value: "500+", label: "Free Videos Published" },
  { value: "10+", label: "Years Experience" },
];

export default function StatsSection() {
  return (
    <section className="py-[48px] md:py-[64px] bg-white border-b border-[#f0f0f0]">
      <div className="container">
        <div
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-[680px] mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center relative">
              <p className="font-serif text-[clamp(32px,5vw,48px)] leading-[1] tracking-[-0.02em] text-[#17191c] mb-2">
                {stat.value}
              </p>
              <p className="text-[13px] md:text-[14px] text-[#777b86]">{stat.label}</p>
              {i < stats.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-[#e8e8e8]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
