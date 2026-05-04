import { motion } from "framer-motion";

const deliverables = [
  { title: "Weekly 1:1 Calls", description: "Personal video calls with your mentor to review progress and plan next moves." },
  { title: "Direct Chat Access", description: "Message your mentor anytime. Get answers within hours, not days." },
  { title: "Proven SOPs & Templates", description: "Plug-and-play procedures for every stage — from research to scaling." },
  { title: "Private Community", description: "Connect with other serious operators. Share wins and build your network." },
  { title: "Ad Account Reviews", description: "We look at your actual data and tell you exactly what to change." },
  { title: "Lifetime Access", description: "All recordings, templates, and frameworks — yours forever." },
];

export default function WhatYouGet() {
  return (
    <section className="py-[80px] md:py-[120px] bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Shopify analytics + chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Warm gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ede4f7]/50 via-[#f8e8d4]/30 to-transparent rounded-[32px] blur-[40px] scale-110" />
            
            <div className="relative space-y-4">
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
                  className="w-full max-w-[440px] rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                />
              </motion.div>

              {/* Bottom - Chat mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-white rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden border border-[#e8e8e8]/60">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#f0f0f0]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="px-4 py-1 rounded-md bg-[#f7f7f8] text-[11px] text-[#777b86]">
                        Mentor Chat
                      </div>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    {/* Mentor message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#583E8D] flex items-center justify-center shrink-0">
                        <span className="text-white text-[10px] font-bold">EK</span>
                      </div>
                      <div>
                        <p className="text-[11px] text-[#777b86] mb-1">Mentor · 2:34 PM</p>
                        <div className="bg-[#f7f7f8] rounded-2xl rounded-tl-sm px-4 py-3">
                          <p className="text-[13px] text-[#17191c] leading-[1.5]">Your ad creative looks solid. I'd test 3 variations with different hooks — lead with the pain point, not the product.</p>
                        </div>
                      </div>
                    </div>

                    {/* Student message */}
                    <div className="flex gap-3 justify-end">
                      <div>
                        <p className="text-[11px] text-[#777b86] mb-1 text-right">You · 2:36 PM</p>
                        <div className="bg-[#583E8D] rounded-2xl rounded-tr-sm px-4 py-3">
                          <p className="text-[13px] text-white leading-[1.5]">Makes sense! Should I keep the same audience or split test that too?</p>
                        </div>
                      </div>
                    </div>

                    {/* Input */}
                    <div className="flex items-center gap-2 pt-2 border-t border-[#f0f0f0]">
                      <div className="flex-1 px-4 py-2.5 rounded-full bg-[#f7f7f8] text-[12px] text-[#a3a6af]">
                        Type a message...
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#17191c] flex items-center justify-center">
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
            <p className="text-[13px] text-[#583E8D] font-medium mb-3">What's included &gt;</p>
            <h2 className="font-serif text-[clamp(36px,4.5vw,56px)] leading-[1.08] tracking-[-0.02em] text-[#17191c] mb-5">
              Everything you need, nothing you don't
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#4c4c4c] mb-8 max-w-[440px]">
              No filler modules. No fluff. Just the tools, access, and guidance that actually move the needle.
            </p>

            {/* Feature list */}
            <div className="space-y-4">
              {deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EDE8F5] flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#583E8D" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-[#17191c]">{item.title}</p>
                    <p className="text-[13px] text-[#777b86] mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
