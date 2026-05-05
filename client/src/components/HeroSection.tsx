import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after hydration
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <section className="relative pt-[90px] pb-[60px] md:pt-[160px] md:pb-[80px] overflow-hidden">
      {/* Background: layered radial glows for premium depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 42%, rgba(245, 229, 210, 0.22), transparent 28%), radial-gradient(circle at 72% 30%, rgba(124, 87, 255, 0.10), transparent 24%), radial-gradient(circle at 22% 72%, rgba(255, 244, 232, 0.18), transparent 22%), linear-gradient(180deg, #fbfaf8 0%, #f6f4f8 100%)" }} />
        <div className="absolute top-[20%] left-[-5%] w-[600px] h-[700px] rounded-full blur-[150px] opacity-40" style={{ background: "radial-gradient(ellipse, rgba(124, 87, 255, 0.35) 0%, rgba(160, 120, 255, 0.15) 40%, transparent 70%)" }} />
        <div className="absolute top-[15%] right-[-5%] w-[600px] h-[700px] rounded-full blur-[150px] opacity-40" style={{ background: "radial-gradient(ellipse, rgba(124, 87, 255, 0.35) 0%, rgba(160, 120, 255, 0.15) 40%, transparent 70%)" }} />
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full blur-[160px] opacity-40" style={{ background: "radial-gradient(ellipse, rgba(248, 240, 228, 0.6) 0%, transparent 70%)" }} />
        <div className="absolute top-[25%] left-[48%] -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[120px] opacity-30" style={{ background: "radial-gradient(ellipse, rgba(138, 100, 220, 0.18) 0%, transparent 70%)" }} />
        <div className="absolute top-[10%] right-[8%] w-[400px] h-[400px] rounded-full blur-[130px] opacity-35" style={{ background: "radial-gradient(circle, rgba(140, 100, 240, 0.35) 0%, transparent 65%)" }} />
        <div className="absolute bottom-[15%] left-[5%] w-[450px] h-[450px] rounded-full blur-[140px] opacity-35" style={{ background: "radial-gradient(circle, rgba(140, 100, 240, 0.3) 0%, transparent 65%)" }} />
        <div className="absolute bottom-[20%] right-[12%] w-[350px] h-[350px] rounded-full blur-[120px] opacity-20" style={{ background: "radial-gradient(circle, rgba(240, 225, 250, 0.25) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
        />
      </div>

      {/* Blur halos behind floating cards for depth integration */}
      <div className="absolute top-[14%] left-[4%] xl:left-[8%] w-[340px] h-[260px] rounded-3xl blur-[50px] opacity-20 hidden lg:block" style={{ background: "radial-gradient(ellipse, rgba(200, 180, 240, 0.4) 0%, transparent 70%)" }} />
      <div className="absolute top-[10%] right-[4%] xl:right-[8%] w-[320px] h-[240px] rounded-3xl blur-[50px] opacity-18 hidden lg:block" style={{ background: "radial-gradient(ellipse, rgba(180, 160, 230, 0.35) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[12%] left-[3%] xl:left-[6%] w-[320px] h-[240px] rounded-3xl blur-[45px] opacity-16 hidden lg:block" style={{ background: "radial-gradient(ellipse, rgba(248, 230, 200, 0.4) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[14%] right-[3%] xl:right-[6%] w-[310px] h-[230px] rounded-3xl blur-[45px] opacity-16 hidden lg:block" style={{ background: "radial-gradient(ellipse, rgba(210, 190, 240, 0.35) 0%, transparent 70%)" }} />

      {/* Floating Analytics Cards - CSS animations instead of framer-motion */}
      {/* Top Left - Total Sales */}
      <div
        className={`absolute top-[14%] left-[4%] xl:left-[8%] hidden lg:block transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{ transitionDelay: "0.8s" }}
      >
        <div className="animate-float-slow">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-total-sales-Rdmh5wtQRyFfGinKfiFvwP.webp"
            alt="Total Sales: $250,000"
            className="w-[320px] rounded-2xl border border-white/70"
            style={{ boxShadow: "0 16px 56px rgba(0,0,0,0.1), 0 4px 12px rgba(88,62,141,0.06)" }}
            width={320}
            height={200}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Top Right - Sessions by Device */}
      <div
        className={`absolute top-[10%] right-[4%] xl:right-[8%] hidden lg:block transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{ transitionDelay: "1.0s" }}
      >
        <div className="animate-float-medium">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-sessions-device-38MypvLYE5mt2H82mSxXPK.webp"
            alt="Sessions by Device"
            className="w-[300px] rounded-2xl border border-white/70"
            style={{ boxShadow: "0 16px 56px rgba(0,0,0,0.1), 0 4px 12px rgba(88,62,141,0.06)" }}
            width={300}
            height={200}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Bottom Left - Customers over Time */}
      <div
        className={`absolute bottom-[12%] left-[3%] xl:left-[6%] hidden lg:block transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{ transitionDelay: "1.2s" }}
      >
        <div className="animate-float-fast">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-customers-time-X3ms7jG8yZk3tc2x3jGNVj.webp"
            alt="Customers over Time"
            className="w-[300px] rounded-2xl border border-white/70"
            style={{ boxShadow: "0 16px 56px rgba(0,0,0,0.1), 0 4px 12px rgba(88,62,141,0.06)" }}
            width={300}
            height={200}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Bottom Right - Sessions by Country */}
      <div
        className={`absolute bottom-[14%] right-[3%] xl:right-[6%] hidden lg:block transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{ transitionDelay: "1.4s" }}
      >
        <div className="animate-float-reverse">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-sales-country-3wvFYXTrqPCU22m66QfsHX.webp"
            alt="Sessions by Country"
            className="w-[290px] rounded-2xl border border-white/70"
            style={{ boxShadow: "0 16px 56px rgba(0,0,0,0.1), 0 4px 12px rgba(88,62,141,0.06)" }}
            width={290}
            height={200}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="container relative">
        {/* Urgency badge */}
        <div
          className={`flex justify-center mb-7 transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e8e8e8]/60"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#583E8D] animate-pulse" />
            <span className="text-[13px] text-[#4c4c4c] font-medium">Limited spaces — application required</span>
          </div>
        </div>

        {/* Headline */}
        <div
          className={`text-center max-w-[820px] mx-auto transition-all duration-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <h1 className="font-serif font-bold text-[clamp(36px,5.5vw,68px)] leading-[1.08] tracking-[-0.02em] text-[#17191c] mb-6">
            Build & Scale Your E‑Commerce Brand With{" "}
            <span className="relative inline-block">
              <span className="italic text-[#583E8D]">Hands‑On</span>
              <span className="absolute inset-0 bg-[#583E8D]/8 blur-[20px] rounded-full -z-10" />
            </span>{" "}
            Mentorship
          </h1>
          <p className="text-[16px] md:text-[17px] leading-[1.6] text-[#4c4c4c] max-w-[620px] mx-auto mb-10">
            Work directly with e-commerce operators who have built, launched and scaled real stores — with guidance across product research, store setup, paid ads, creatives and conversion.
          </p>
        </div>

        {/* CTA */}
        <div
          className={`flex flex-col items-center justify-center mb-12 transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <a
            href="https://e-commercementoring.com/learn-more"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-[2px]"
            style={{
              background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
              boxShadow: "0 8px 24px rgba(88,62,141,0.2), 0 2px 6px rgba(88,62,141,0.1)",
            }}
          >
            Apply For Mentorship
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="mt-3 text-[13px] text-[#999] font-medium">
            Limited spaces available — application required.
          </p>
        </div>

        {/* Proof bar: 3 stats */}
        <div
          className={`flex flex-row items-center justify-center gap-0 mb-10 transition-all duration-600 ${mounted ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "0.5s" }}
        >
          {/* Stat 1 */}
          <div className="flex items-center gap-2 px-3 sm:px-6">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EDE8F5] flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-[#583E8D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] sm:text-[16px] font-bold text-[#17191c] leading-tight">1,000+</p>
              <p className="text-[11px] sm:text-[12px] text-[#777b86]">Entrepreneurs trained</p>
            </div>
          </div>

          <div className="w-px h-8 sm:h-10 bg-[#e8e8e8]" />

          {/* Stat 2 */}
          <div className="flex items-center gap-2 px-3 sm:px-6">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EDE8F5] flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-[#583E8D]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] sm:text-[16px] font-bold text-[#17191c] leading-tight">4.9/5</p>
              <p className="text-[11px] sm:text-[12px] text-[#777b86]">Student rating</p>
            </div>
          </div>

          <div className="w-px h-8 sm:h-10 bg-[#e8e8e8]" />

          {/* Stat 3 */}
          <div className="flex items-center gap-2 px-3 sm:px-6">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EDE8F5] flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-[#583E8D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] sm:text-[16px] font-bold text-[#17191c] leading-tight">7+ Years</p>
              <p className="text-[11px] sm:text-[12px] text-[#777b86]">E-commerce experience</p>
            </div>
          </div>
        </div>

        {/* Founder credibility line */}
        <div
          className={`text-center transition-all duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "0.7s" }}
        >
          <p className="text-[13px] text-[#999] font-medium">
            Led by Kamil Sattar, founder of The Ecom King — trusted by 600k+ e-commerce entrepreneurs.
          </p>
        </div>
      </div>
    </section>
  );
}
