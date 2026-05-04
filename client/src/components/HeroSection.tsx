import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-[140px] pb-[80px] md:pt-[180px] md:pb-[120px] overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#faf9f7]" />
        <div className="absolute top-[15%] left-[25%] w-[600px] h-[600px] bg-[#f8e8d4] rounded-full blur-[120px] opacity-45" />
        <div className="absolute top-[25%] right-[15%] w-[500px] h-[500px] bg-[#ede4f7] rounded-full blur-[120px] opacity-35" />
        <div className="absolute bottom-[5%] left-[50%] -translate-x-1/2 w-[700px] h-[350px] bg-[#fce4d6] rounded-full blur-[140px] opacity-25" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
        />
      </div>

      {/* Floating Shopify Analytics Cards */}
      {/* Top Left - Total Sales */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="absolute top-[12%] left-[10%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-total-sales-Rdmh5wtQRyFfGinKfiFvwP.webp"
            alt="Total Sales Analytics"
            className="w-[240px] rounded-2xl border border-white/60"
            style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.08), 0 2px 8px rgba(88,62,141,0.04)" }}
          />
        </motion.div>
      </motion.div>

      {/* Top Right - Sessions by Device (Donut) */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.9, delay: 1.0 }}
        className="absolute top-[8%] right-[10%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-sessions-device-38MypvLYE5mt2H82mSxXPK.webp"
            alt="Sessions by Device"
            className="w-[220px] rounded-2xl border border-white/60"
            style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.08), 0 2px 8px rgba(88,62,141,0.04)" }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom Left - Customers over Time */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.9, delay: 1.2 }}
        className="absolute bottom-[15%] left-[8%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-customers-time-X3ms7jG8yZk3tc2x3jGNVj.webp"
            alt="Customers over Time"
            className="w-[220px] rounded-2xl border border-white/60"
            style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.08), 0 2px 8px rgba(88,62,141,0.04)" }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom Right - Sessions by Country */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: 10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.9, delay: 1.4 }}
        className="absolute bottom-[18%] right-[8%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-sales-country-3wvFYXTrqPCU22m66QfsHX.webp"
            alt="Sessions by Country"
            className="w-[210px] rounded-2xl border border-white/60"
            style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.08), 0 2px 8px rgba(88,62,141,0.04)" }}
          />
        </motion.div>
      </motion.div>

      <div className="container relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-[#e8e8e8]/60"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#583E8D] animate-pulse" />
            <span className="text-[14px] text-[#4c4c4c]">Applications closing soon</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-[800px] mx-auto"
        >
          <h1 className="font-serif font-bold text-[clamp(40px,6vw,72px)] leading-[1.08] tracking-[-0.02em] text-[#17191c] mb-6">
            Scale your store to{" "}
            <span className="italic text-[#583E8D]">7‑figures</span> with
            hands‑on mentorship
          </h1>
          <p className="text-[17px] leading-[1.55] text-[#4c4c4c] max-w-[560px] mx-auto mb-10">
            A proven system built by operators, not theorists. Get direct access to mentors
            who have built and scaled real e-commerce businesses.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://e-commercementoring.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white text-[15px] font-medium px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-[2px]"
            style={{
              background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
              boxShadow: "0 8px 24px rgba(88,62,141,0.2), 0 2px 6px rgba(88,62,141,0.1)",
            }}
          >
            Apply Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Social proof row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {[
                { letter: "K", bg: "from-[#583E8D] to-[#7B5BB5]" },
                { letter: "J", bg: "from-[#6B4FA8] to-[#9B7FD0]" },
                { letter: "M", bg: "from-[#7B5BB5] to-[#A88DD4]" },
                { letter: "A", bg: "from-[#8B6BC0] to-[#B89FDB]" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.bg} border-2 border-white flex items-center justify-center`}
                  style={{ boxShadow: "0 2px 6px rgba(88,62,141,0.15)" }}
                >
                  <span className="text-[10px] text-white font-semibold">{item.letter}</span>
                </div>
              ))}
            </div>
            <span className="text-[14px] text-[#4c4c4c] font-medium">
              1k+ entrepreneurs enrolled
            </span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-[#e0ddd8]" />
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[14px] text-[#4c4c4c] font-medium">4.9/5 rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
