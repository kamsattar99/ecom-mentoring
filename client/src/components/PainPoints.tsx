import { motion } from "framer-motion";

const features = [
  { label: "Product Research", active: true },
  { label: "Store Setup", active: false },
  { label: "Paid Ads", active: false },
  { label: "Scaling", active: false },
  { label: "Automation", active: false },
];

export default function PainPoints() {
  return (
    <section className="py-[80px] md:py-[120px] bg-[#f9f9fa] overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text content (like Steep's "Engage everyone" section) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[13px] text-[#583E8D] font-medium mb-3">Product &gt;</p>
            <h2 className="font-serif text-[clamp(36px,4.5vw,56px)] leading-[1.08] tracking-[-0.02em] text-[#17191c] mb-5">
              Stop guessing, start building
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#4c4c4c] mb-8 max-w-[440px]">
              Our mentorship replaces the chaos of YouTube tutorials and conflicting advice with a clear, step-by-step system that actually works.
            </p>
            <a
              href="#curriculum"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-[#17191c] hover:opacity-70 transition-opacity"
            >
              Learn more <span className="text-[#a3a6af]">→</span>
            </a>

            {/* Feature list (like Steep's sidebar nav) */}
            <div className="mt-10 space-y-1 border-l border-[#e8e8e8] pl-4">
              {features.map((f) => (
                <div
                  key={f.label}
                  className={`py-2 px-3 rounded-lg text-[15px] transition-colors ${
                    f.active
                      ? "text-[#17191c] font-medium bg-white border border-[#e8e8e8]"
                      : "text-[#777b86]"
                  }`}
                >
                  {f.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Shopify analytics dashboard images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Warm gradient glow behind */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f8e8d4]/60 via-[#ede4f7]/40 to-transparent rounded-[32px] blur-[40px] scale-110" />
            
            {/* Stacked analytics cards */}
            <div className="relative space-y-4">
              {/* Top row - Total Sales (large) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-total-sales-Rdmh5wtQRyFfGinKfiFvwP.webp"
                  alt="Total Sales - $250,000"
                  className="w-full max-w-[420px] rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                />
              </motion.div>

              {/* Bottom row - Two smaller cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-sessions-device-38MypvLYE5mt2H82mSxXPK.webp"
                    alt="Sessions by Device"
                    className="w-full rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-sales-country-3wvFYXTrqPCU22m66QfsHX.webp"
                    alt="Sessions by Country"
                    className="w-full rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
