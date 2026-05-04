import { motion } from "framer-motion";

const deliverables = [
  {
    title: "Weekly 1:1 Calls",
    description: "Personal video calls with your mentor to review progress and plan next moves.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Direct Chat Access",
    description: "Message your mentor anytime. Get answers within hours, not days.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 9h8M8 13h5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Proven SOPs & Templates",
    description: "Plug-and-play procedures for every stage — from research to scaling.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14,2 14,8 20,8" stroke="white" strokeWidth="1.8" />
        <path d="M9 15l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },

  {
    title: "Ad Account Reviews",
    description: "We look at your actual data and tell you exactly what to change.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="white" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.8" />
      </svg>
    ),
  },

];

export default function WhatYouGet() {
  return (
    <section className="py-[80px] md:py-[120px] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f8f5fc 0%, #f3eef9 50%, #faf9f7 100%)" }}>
      {/* Background decorations */}
      <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(88,62,141,0.08) 0%, transparent 60%)" }}
      />
      <div className="absolute bottom-[5%] left-[-5%] w-[350px] h-[350px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(248,180,120,0.1) 0%, transparent 60%)" }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Shopify analytics + chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Warm gradient glow behind */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ede4f7]/60 via-[#f8e8d4]/40 to-transparent rounded-[32px] blur-[50px] scale-110" />

            <div className="relative space-y-5">
              {/* Top - Customers over time chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/shopify-customers-time-X3ms7jG8yZk3tc2x3jGNVj.webp"
                  alt="Customers over Time"
                  className="w-full max-w-[440px] rounded-2xl border border-white/80"
                  style={{ boxShadow: "0 20px 60px rgba(88, 62, 141, 0.12), 0 4px 12px rgba(0,0,0,0.04)" }}
                />
              </motion.div>

              {/* Bottom - Chat mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div
                  className="bg-white rounded-[24px] overflow-hidden border border-[#e8e8e8]/30"
                  style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.08), 0 4px 16px rgba(88, 62, 141, 0.06)" }}
                >
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#f0f0f0] bg-[#fafafa]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="px-4 py-1.5 rounded-lg bg-white text-[11px] text-[#777b86] border border-[#e8e8e8]/60 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                        Mentor Chat
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-5">
                    {/* Mentor message */}
                    <div className="flex gap-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5EC6 100%)", boxShadow: "0 4px 12px rgba(88,62,141,0.25)" }}
                      >
                        <span className="text-white text-[10px] font-bold">EK</span>
                      </div>
                      <div>
                        <p className="text-[11px] text-[#999] mb-1.5">Mentor · 2:34 PM</p>
                        <div className="bg-[#f5f4f7] rounded-2xl rounded-tl-md px-4 py-3">
                          <p className="text-[13px] text-[#17191c] leading-[1.55]">Your ad creative looks solid. I'd test 3 variations with different hooks — lead with the pain point, not the product.</p>
                        </div>
                      </div>
                    </div>

                    {/* Student message */}
                    <div className="flex gap-3 justify-end">
                      <div>
                        <p className="text-[11px] text-[#999] mb-1.5 text-right">You · 2:36 PM</p>
                        <div className="rounded-2xl rounded-tr-md px-4 py-3"
                          style={{ background: "linear-gradient(135deg, #583E8D 0%, #6B4FA8 100%)", boxShadow: "0 4px 16px rgba(88,62,141,0.2)" }}
                        >
                          <p className="text-[13px] text-white leading-[1.55]">Makes sense! Should I keep the same audience or split test that too?</p>
                        </div>
                      </div>
                    </div>

                    {/* Input */}
                    <div className="flex items-center gap-3 pt-3 border-t border-[#f0f0f0]">
                      <div className="flex-1 px-4 py-3 rounded-full bg-[#f7f7f8] text-[12px] text-[#a3a6af] border border-[#e8e8e8]/40">
                        Type a message...
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#17191c] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-6"
              style={{ background: "linear-gradient(135deg, #f3eef9 0%, #ebe3f5 100%)", boxShadow: "0 2px 8px rgba(88,62,141,0.06)" }}
            >
              <span className="text-[12px] text-[#583E8D] font-semibold tracking-wide">What's included</span>
            </div>
            <h2 className="font-serif text-[clamp(36px,4.5vw,52px)] leading-[1.08] tracking-[-0.02em] text-[#17191c] mb-5">
              Everything you need, nothing you don't
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#4c4c4c] mb-10 max-w-[440px]">
              No filler modules. No fluff. Just the tools, access, and guidance that actually move the needle.
            </p>

            {/* Feature list with premium cards */}
            <div className="space-y-3">
              {deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                  className="group flex items-start gap-4 p-4 rounded-[18px] hover:bg-white transition-all duration-300"
                  style={{ boxShadow: "none" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(88,62,141,0.08), 0 2px 8px rgba(0,0,0,0.02)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_6px_20px_rgba(88,62,141,0.25)]"
                    style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-[#17191c] mb-0.5 group-hover:text-[#583E8D] transition-colors duration-300">{item.title}</p>
                    <p className="text-[13px] text-[#777b86] leading-[1.55]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
