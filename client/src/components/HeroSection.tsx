import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-[90px] pb-[60px] md:pt-[160px] md:pb-[80px] overflow-hidden">
      {/* Background: soft radial glows + noise texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#faf9f7]" />
        {/* Radial glow behind headline */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#f3eefc] rounded-full blur-[140px] opacity-50" />
        {/* Warm accent glow */}
        <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-[#f8e8d4] rounded-full blur-[120px] opacity-30" />
        <div className="absolute top-[20%] right-[15%] w-[350px] h-[350px] bg-[#ede4f7] rounded-full blur-[100px] opacity-30" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
        />
      </div>

      {/* Floating Analytics Cards - positioned closer to content */}
      {/* Top Left - Total Sales */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="absolute top-[14%] left-[4%] xl:left-[8%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-total-sales-Rdmh5wtQRyFfGinKfiFvwP.webp"
            alt="Total Sales: $250,000"
            className="w-[320px] rounded-2xl border border-white/70"
            style={{ boxShadow: "0 16px 56px rgba(0,0,0,0.1), 0 4px 12px rgba(88,62,141,0.06)" }}
          />
        </motion.div>
      </motion.div>

      {/* Top Right - Sessions by Device */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.9, delay: 1.0 }}
        className="absolute top-[10%] right-[4%] xl:right-[8%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-sessions-device-38MypvLYE5mt2H82mSxXPK.webp"
            alt="Sessions by Device"
            className="w-[300px] rounded-2xl border border-white/70"
            style={{ boxShadow: "0 16px 56px rgba(0,0,0,0.1), 0 4px 12px rgba(88,62,141,0.06)" }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom Left - Customers over Time */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.9, delay: 1.2 }}
        className="absolute bottom-[12%] left-[3%] xl:left-[6%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-customers-time-X3ms7jG8yZk3tc2x3jGNVj.webp"
            alt="Customers over Time"
            className="w-[300px] rounded-2xl border border-white/70"
            style={{ boxShadow: "0 16px 56px rgba(0,0,0,0.1), 0 4px 12px rgba(88,62,141,0.06)" }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom Right - Sessions by Country */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: 10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.9, delay: 1.4 }}
        className="absolute bottom-[14%] right-[3%] xl:right-[6%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-sales-country-3wvFYXTrqPCU22m66QfsHX.webp"
            alt="Sessions by Country"
            className="w-[290px] rounded-2xl border border-white/70"
            style={{ boxShadow: "0 16px 56px rgba(0,0,0,0.1), 0 4px 12px rgba(88,62,141,0.06)" }}
          />
        </motion.div>
      </motion.div>

      <div className="container relative">
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e8e8e8]/60"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#583E8D] animate-pulse" />
            <span className="text-[13px] text-[#4c4c4c] font-medium">Limited spaces — application required</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-[820px] mx-auto"
        >
          <h1 className="font-serif font-bold text-[clamp(36px,5.5vw,68px)] leading-[1.08] tracking-[-0.02em] text-[#17191c] mb-6">
            Build & Scale Your E‑Commerce Brand With{" "}
            <span className="relative inline-block">
              <span className="italic text-[#583E8D]">Hands‑On</span>
              {/* Purple glow behind highlighted word */}
              <span className="absolute inset-0 bg-[#583E8D]/8 blur-[20px] rounded-full -z-10" />
            </span>{" "}
            Mentorship
          </h1>
          <p className="text-[16px] md:text-[17px] leading-[1.6] text-[#4c4c4c] max-w-[620px] mx-auto mb-10">
            Work directly with e-commerce operators who have built, launched and scaled real stores — with guidance across product research, store setup, paid ads, creatives and conversion.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center mb-12"
        >
          <a
            href="/apply"
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
        </motion.div>

        {/* Proof bar: 3 stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-row items-center justify-center gap-0 mb-10"
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
        </motion.div>

        {/* Founder credibility line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <p className="text-[13px] text-[#999] font-medium">
            Led by Kamil Sattar, founder of The Ecom King — trusted by 600k+ e-commerce entrepreneurs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
