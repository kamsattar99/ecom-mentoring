import { useEffect } from "react";

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
      <div className="text-center px-4 pb-16 md:pb-24">
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
    </div>
  );
}
