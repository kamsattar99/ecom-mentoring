
const pillars = [
  {
    title: "Built on results",
    description: "No more guessing. With our system, you follow a proven framework that has generated over $30M+ in student revenue.",
    accent: true,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-total-sales-Rdmh5wtQRyFfGinKfiFvwP.webp",
    imageAlt: "Total Sales Analytics Dashboard",
  },
  {
    title: "Powered by mentors",
    description: "Work directly with experienced operators who actively run profitable stores — not retired theorists.",
    accent: false,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-sessions-device-38MypvLYE5mt2H82mSxXPK.webp",
    imageAlt: "Sessions by Device Analytics",
  },
  {
    title: "Designed for scale",
    description: "From product research to paid ads to scaling — every stage is mapped, measured, and mentored.",
    accent: false,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-gross-sales-ggYth2kABrnUoQD2TbC4bj.webp",
    imageAlt: "Gross Sales by Device Analytics",
  },
];

export default function IntroSection() {
  return (
    <section className="py-[80px] md:py-[120px] bg-white">
      <div className="container">
        {/* Section header */}
        <div
          className="text-center max-w-[640px] mx-auto mb-16"
        >
          <h2 className="font-serif text-[clamp(36px,4vw,52px)] leading-[1.1] tracking-[-0.015em] text-[#17191c]">
            A new kind of ecom mentorship
          </h2>
        </div>

        {/* Three cards — first one larger with accent bg */}
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-5">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`p-7 rounded-[24px] flex flex-col ${
                pillar.accent
                  ? "bg-[#f8ebe0]"
                  : "bg-[#f4f4f5]"
              }`}
            >
              <h3 className="text-[17px] font-medium text-[#17191c] mb-2">
                {pillar.title}
              </h3>
              <div className="flex-1 flex items-center justify-center py-6">
                <img
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  className="w-full max-w-[280px] rounded-xl"
                  width={280}
                  height={180}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="text-[14px] leading-[1.5] text-[#4c4c4c]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
