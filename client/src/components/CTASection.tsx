import { ArrowRight, Layers, MessageSquare, BarChart3 } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-[80px] md:py-[120px] relative overflow-hidden">
      {/* AI-generated growth visual as background */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/growth-scaling-visual_1ae06fc4.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        {/* Dark overlay for premium feel and text legibility */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,10,24,0.85) 0%, rgba(26,18,37,0.90) 50%, rgba(15,10,24,0.88) 100%)" }} />
        {/* Radial glow at center */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[120px] opacity-25" style={{ background: "radial-gradient(ellipse, rgba(124, 87, 255, 0.4) 0%, transparent 70%)" }} />
      </div>

      <div className="container relative z-10">
        <div
          className="relative overflow-hidden rounded-[28px] md:rounded-[36px] px-6 py-14 md:px-16 md:py-20"
          style={{
            boxShadow: "0 24px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Subtle inner glow */}
          <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(124,87,255,0.3) 0%, transparent 70%)" }}
          />

          <div className="relative text-center max-w-[600px] mx-auto">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-[#c8b8e8] shadow-[0_0_6px_rgba(200,184,232,0.6)]" />
              <span className="text-[12px] font-semibold text-white/90 tracking-wide">Limited Mentor Capacity</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] leading-[1.1] tracking-[-0.02em] text-white mb-5">
              Ready To Build With AI And{" "}
              <span className="italic text-[#c8b8e8]">Scale Faster?</span>
            </h2>

            {/* Subheading */}
            <p className="text-[15px] md:text-[16px] leading-[1.65] text-white/70 mb-9 max-w-[520px] mx-auto">
              Apply to work 1:1 with experienced ecommerce mentors who integrate AI into every stage — product research, store setup, ads, creatives and scaling.
            </p>

            {/* CTA Button */}
            <a
              href="https://e-commercementoring.com/learn-more"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white text-[15px] font-semibold px-11 py-[18px] rounded-full transition-all duration-300 hover:-translate-y-[2px]"
              style={{
                background: "linear-gradient(135deg, #583E8D 0%, #6B4FA8 50%, #7B5BB5 100%)",
                boxShadow: "0 14px 36px rgba(88,62,141,0.4), 0 4px 10px rgba(88,62,141,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              Apply For 1-on-1 Mentorship <ArrowRight size={16} />
            </a>

            {/* Microcopy */}
            <p className="text-[13px] text-white/50 mt-5 leading-[1.5]">
              Applications are reviewed before calls are booked. No pressure if it is not the right fit.
            </p>

            {/* Secondary link */}
            <a
              href="#curriculum"
              className="inline-block text-[12px] text-[#c8b8e8] font-medium mt-3 hover:underline transition-all duration-200"
            >
              View curriculum →
            </a>

            {/* Trust indicators */}
            <div
              className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-10 pt-7 border-t border-white/10"
            >
              {[
                { icon: Layers, label: "AI-powered frameworks" },
                { icon: MessageSquare, label: "Direct mentor access" },
                { icon: BarChart3, label: "Store & ad reviews" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, rgba(124,87,255,0.2) 0%, rgba(124,87,255,0.1) 100%)" }}
                  >
                    <Icon size={13} className="text-[#c8b8e8]" />
                  </div>
                  <span className="text-[12px] font-medium text-white/70">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
