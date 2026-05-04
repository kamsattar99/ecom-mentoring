import { useEffect } from "react";

export default function Apply() {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6fc] via-white to-[#f8f6fc]">
      {/* Header */}
      <div className="pt-24 pb-8 text-center px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e8e8e8]/60 mb-6"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[13px] text-[#4c4c4c] font-medium">Applications open</span>
        </div>
        <h1 className="font-serif font-bold text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-0.02em] text-[#17191c] mb-4">
          Apply For Mentorship
        </h1>
        <p className="text-[15px] md:text-[16px] text-[#666] max-w-[500px] mx-auto leading-[1.6]">
          Fill out the short application below. We review every submission within 24 hours and will reach out if it's a good fit.
        </p>
      </div>

      {/* Typeform Embed */}
      <div className="max-w-[720px] mx-auto px-4 pb-16">
        <div
          data-tf-widget="mimJCUN0"
          data-tf-opacity="100"
          data-tf-inline-on-mobile
          data-tf-iframe-props="title=Mentorship Application"
          style={{ width: "100%", height: "600px" }}
        />
      </div>

      {/* Trust footer */}
      <div className="text-center pb-12 px-4">
        <p className="text-[12px] text-[#999]">
          Your information is kept private. No spam, no commitment required.
        </p>
      </div>
    </div>
  );
}
