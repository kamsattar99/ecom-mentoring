export default function HeroSection() {
  return (
    <section className="relative pt-[120px] pb-[80px] md:pt-[180px] md:pb-[110px] overflow-hidden bg-[#0F0E13]">
      {/* Dark radial glows */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(123,91,181,0.28) 0%, transparent 65%)" }} />
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(123,91,181,0.15) 0%, transparent 65%)" }} />
        <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(123,91,181,0.15) 0%, transparent 65%)" }} />
      </div>

      {/* Floating Analytics Cards - hidden on mobile */}
      {/* Top Left - Total Sales */}
      <div className="absolute top-[14%] left-[4%] xl:left-[8%] hidden lg:block">
        <div className="animate-float-slow">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-total-sales-Rdmh5wtQRyFfGinKfiFvwP.webp"
            alt="Total Sales: $250,000"
            className="w-[280px] rounded-[14px]"
            style={{ border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}
            width={280}
            height={175}
            loading="eager"
            decoding="async"
            fetchPriority="low"
          />
        </div>
      </div>

      {/* Top Right - Sessions by Device */}
      <div className="absolute top-[10%] right-[4%] xl:right-[8%] hidden lg:block">
        <div className="animate-float-medium">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-sessions-device-38MypvLYE5mt2H82mSxXPK.webp"
            alt="Sessions by Device"
            className="w-[270px] rounded-[14px]"
            style={{ border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}
            width={270}
            height={175}
            loading="eager"
            decoding="async"
            fetchPriority="low"
          />
        </div>
      </div>

      {/* Bottom Left - Customers over Time */}
      <div className="absolute bottom-[12%] left-[3%] xl:left-[6%] hidden lg:block">
        <div className="animate-float-fast">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-customers-time-X3ms7jG8yZk3tc2x3jGNVj.webp"
            alt="Customers over Time"
            className="w-[280px] rounded-[14px]"
            style={{ border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}
            width={280}
            height={175}
            loading="eager"
            decoding="async"
            fetchPriority="low"
          />
        </div>
      </div>

      {/* Bottom Right - Sessions by Country */}
      <div className="absolute bottom-[14%] right-[3%] xl:right-[6%] hidden lg:block">
        <div className="animate-float-reverse">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-sales-country-3wvFYXTrqPCU22m66QfsHX.webp"
            alt="Sessions by Country"
            className="w-[270px] rounded-[14px]"
            style={{ border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}
            width={270}
            height={175}
            loading="eager"
            decoding="async"
            fetchPriority="low"
          />
        </div>
      </div>

      <div className="container relative">
        {/* Badge */}
        <div className="flex justify-center mb-7">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              border: "1px solid rgba(155,126,219,0.35)",
              background: "rgba(88,62,141,0.15)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#B394F2] animate-pulse" />
            <span className="text-[13px] text-[rgba(255,255,255,0.8)] font-medium">Limited spaces — application required</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-[820px] mx-auto">
          <h1 className="font-serif text-[clamp(40px,5.5vw,74px)] leading-[1.04] tracking-[-0.02em] text-white mb-6">
            Build Faster, Test Smarter & Scale With{" "}
            <span className="italic text-[#B394F2]">AI-Powered Ecommerce Mentorship</span>
          </h1>
          <p className="text-[16px] md:text-[17px] leading-[1.6] text-[rgba(255,255,255,0.65)] max-w-[600px] mx-auto mb-10">
            Work directly with experienced ecommerce operators who show you how to use AI across product research, store building, ad creatives, paid ads and operations — with the structure, feedback and accountability to actually build.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center mb-12">
          <a
            href="/curriculums"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-[2px]"
            style={{
              background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
              boxShadow: "0 12px 40px rgba(123,91,181,0.45)",
            }}
          >
            Apply For 1-on-1 Mentorship
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="mt-3 text-[13px] text-[rgba(255,255,255,0.4)] font-medium">
            Limited spaces available — application required.
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-row items-center justify-center gap-0 mb-10">
          <div className="text-center px-4 sm:px-8">
            <p className="font-serif text-[24px] sm:text-[30px] text-white leading-tight">600k+</p>
            <p className="text-[11px] sm:text-[12px] text-[rgba(255,255,255,0.5)]">Trusted Entrepreneurs</p>
          </div>

          <div className="w-px h-10 bg-[rgba(255,255,255,0.12)]" />

          <div className="text-center px-4 sm:px-8">
            <p className="font-serif text-[24px] sm:text-[30px] text-white leading-tight">4.9/5</p>
            <p className="text-[11px] sm:text-[12px] text-[rgba(255,255,255,0.5)]">Student rating</p>
          </div>

          <div className="w-px h-10 bg-[rgba(255,255,255,0.12)]" />

          <div className="text-center px-4 sm:px-8">
            <p className="font-serif text-[24px] sm:text-[30px] text-white leading-tight">7+ Years</p>
            <p className="text-[11px] sm:text-[12px] text-[rgba(255,255,255,0.5)]">Ecommerce Experience</p>
          </div>
        </div>

        {/* Founder credibility */}
        <div className="text-center">
          <p className="text-[13px] text-[rgba(255,255,255,0.35)] font-medium">
            Led by Kamil Sattar, founder of The Ecom King — trusted by 600,000+ ecommerce entrepreneurs and built from 7+ years of real ecommerce experience.
          </p>
        </div>
      </div>
    </section>
  );
}
