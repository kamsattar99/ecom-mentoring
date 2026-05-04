import { useEffect } from "react";

const mentors = [
  {
    name: "Nail",
    role: "Brand Builder & E-Commerce Mentor",
    image: "https://i.ibb.co/Hf4Z2FjB/Gemini-Generated-Image-c5x4sfc5x4sfc5x4.png",
    paragraphs: [
      "Nail began his entrepreneurial journey after graduating from university in Poland and working in international trade. Driven by independence, he entered dropshipping in 2018, achieving early success across multiple platforms and investor partnerships.",
      "In September 2023, he launched his first flagship brand, turning a Shopify venture into one of the most recognised brands in his country. He followed with launches in February and December 2025.",
      "Now managing three active brands and approaching 7-figure seller status, Nail focuses on global expansion while mentoring the next generation of founders.",
    ],
  },
  {
    name: "Kamil Sattar",
    role: "The Ecom King — Founder & Lead Mentor",
    image: "https://i.ibb.co/jPTyKVyk/Screenshot-2026-01-12-at-14-04-02.png",
    featured: true,
    paragraphs: [
      'Kamil Sattar is an <strong>8-figure e-commerce entrepreneur</strong> with over <strong>10 years of hands-on experience</strong> building and scaling profitable online brands.',
      "Starting out reselling shoes, he mastered supply, demand, and consumer psychology before transitioning fully into e-commerce in 2017. Through relentless testing, he became an expert in performance marketing, branding, and conversion optimisation.",
      'His mentorship has helped <strong>1,000+ entrepreneurs</strong> scale stores, with hundreds hitting <strong>$100K+ months</strong> and <strong>50+ reaching 7-figure revenue</strong>.',
    ],
  },
  {
    name: "Inders",
    role: "E-Commerce Growth Mentor",
    image: "https://i.ibb.co/gZzwW6Hd/Gemini-Generated-Image-yzo8xlyzo8xlyzo8.png",
    paragraphs: [
      "Starting his entrepreneurial journey by reselling shoes, Inders learned early the fundamentals of supply, demand, and consumer psychology.",
      "What began as flipping sneakers evolved into building and scaling e-commerce brands across multiple niches.",
      "Today, Inders helps founders optimise conversion rates, systemise growth, and turn underperforming stores into predictable revenue machines.",
    ],
  },
];

export default function LearnMore() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://scripts.converteai.net/45323800-eb58-4cdc-8f24-cdf73ac80cfc/players/69d95194d7a6aac50a9b93e2/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      try {
        document.head.removeChild(script);
      } catch (e) {
        // script may already be removed
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6fc] via-white to-[#f8f6fc]">
      {/* Header */}
      <div className="pt-20 md:pt-28 pb-8 md:pb-12 text-center px-4">
        <h1 className="font-serif font-bold text-[clamp(24px,4.5vw,48px)] leading-[1.15] tracking-[-0.02em] text-[#17191c] max-w-[800px] mx-auto">
          The Proven System Our Students Use to Build Profitable Dropshipping
          Brands Step by Step
        </h1>
      </div>

      {/* Video Embed */}
      <div className="max-w-[900px] mx-auto px-4 pb-10 md:pb-14">
        <div
          className="rounded-2xl overflow-hidden shadow-xl"
          dangerouslySetInnerHTML={{
            __html: `<vturb-smartplayer id="vid-69d95194d7a6aac50a9b93e2" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>`,
          }}
        />
      </div>

      {/* Apply Now CTA */}
      <div className="text-center px-4 pb-16 md:pb-20">
        <a
          href="/apply"
          className="inline-flex items-center gap-2 text-white text-[15px] md:text-[16px] font-medium px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-[2px]"
          style={{
            background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
            boxShadow:
              "0 8px 24px rgba(88,62,141,0.25), 0 2px 6px rgba(88,62,141,0.1)",
          }}
        >
          Apply Now
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <p className="mt-4 text-[13px] text-[#999] font-medium">
          Limited spots available — application takes 2 minutes.
        </p>
      </div>

      {/* Meet Our Mentors Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#583E8D]/10 text-[#583E8D] text-[13px] font-medium tracking-wide mb-5">
              Your Mentors
            </span>
            <h2 className="font-serif font-bold text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-[-0.02em] text-[#17191c]">
              Meet The Team Behind Your Growth
            </h2>
            <p className="mt-4 text-[15px] text-[#666] max-w-[550px] mx-auto leading-relaxed">
              Real operators who've built, scaled, and exited e-commerce brands — now dedicated to helping you do the same.
            </p>
          </div>

          {/* Mentor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {mentors.map((mentor) => (
              <div
                key={mentor.name}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  mentor.featured
                    ? "bg-gradient-to-b from-[#1a1225] to-[#0f0a18] ring-2 ring-[#7B5BB5]/60 shadow-[0_0_40px_rgba(123,91,181,0.15)]"
                    : "bg-gradient-to-b from-[#1c1c22] to-[#111114] ring-1 ring-white/10"
                }`}
              >
                {/* Featured badge */}
                {mentor.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#7B5BB5]/20 text-[#c4a8ff] text-[11px] font-medium border border-[#7B5BB5]/30">
                      Lead Mentor
                    </span>
                  </div>
                )}

                {/* Photo */}
                <div className="relative h-[280px] md:h-[300px] overflow-hidden">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c22] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 pt-4">
                  <h3 className="text-white font-bold text-[20px] mb-1">
                    {mentor.name}
                  </h3>
                  <p className="text-[#7B5BB5] text-[13px] font-semibold mb-3">
                    {mentor.role}
                  </p>
                  {/* Purple accent line */}
                  <div className="w-8 h-[3px] rounded-full bg-[#7B5BB5] mb-4" />
                  {/* Bio */}
                  <div className="space-y-3">
                    {mentor.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-[#b0b0b8] text-[13px] leading-[1.7]"
                        dangerouslySetInnerHTML={{ __html: p }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="text-center px-4 pb-20 md:pb-28">
        <a
          href="/apply"
          className="inline-flex items-center gap-2 text-white text-[15px] md:text-[16px] font-medium px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-[2px]"
          style={{
            background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
            boxShadow:
              "0 8px 24px rgba(88,62,141,0.25), 0 2px 6px rgba(88,62,141,0.1)",
          }}
        >
          Apply For Mentorship
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <p className="mt-4 text-[13px] text-[#999] font-medium">
          Applications reviewed within 24 hours. No commitment required.
        </p>
      </div>
    </div>
  );
}
