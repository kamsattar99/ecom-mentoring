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

          {/* Right - Shopify-style dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Warm gradient glow behind the mockup */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f8e8d4]/60 via-[#ede4f7]/40 to-transparent rounded-[32px] blur-[40px] scale-110" />
            
            {/* Dashboard mockup */}
            <div className="relative bg-white rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden border border-[#e8e8e8]/60">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#f0f0f0]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-[#f7f7f8] text-[11px] text-[#777b86]">
                    mystore.myshopify.com/admin
                  </div>
                </div>
              </div>

              {/* Shopify admin content */}
              <div className="p-5">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-[#96bf48] flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">S</span>
                    </div>
                    <span className="text-[13px] font-medium text-[#17191c]">My Store</span>
                  </div>
                  <div className="text-[11px] text-[#777b86]">Analytics</div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-[#f7f7f8]">
                    <p className="text-[10px] text-[#777b86] mb-1">Total Sales</p>
                    <p className="text-[16px] font-semibold text-[#17191c]">£24,847</p>
                    <p className="text-[10px] text-green-600">↑ 32%</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f7f7f8]">
                    <p className="text-[10px] text-[#777b86] mb-1">Orders</p>
                    <p className="text-[16px] font-semibold text-[#17191c]">384</p>
                    <p className="text-[10px] text-green-600">↑ 18%</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f7f7f8]">
                    <p className="text-[10px] text-[#777b86] mb-1">Conv. Rate</p>
                    <p className="text-[16px] font-semibold text-[#17191c]">4.2%</p>
                    <p className="text-[10px] text-green-600">↑ 0.6%</p>
                  </div>
                </div>

                {/* Chart area */}
                <div className="rounded-xl bg-[#f7f7f8] p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-medium text-[#17191c]">Revenue (7 days)</span>
                    <span className="text-[10px] text-[#777b86]">May 2026</span>
                  </div>
                  <div className="flex items-end gap-[6px] h-[60px]">
                    {[35, 45, 30, 60, 50, 75, 90].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-[#583E8D]"
                        style={{ height: `${h}%`, opacity: 0.3 + (i * 0.1) }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                      <span key={i} className="text-[9px] text-[#a3a6af] flex-1 text-center">{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
