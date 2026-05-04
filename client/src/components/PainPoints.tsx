import { motion } from "framer-motion";

const painPoints = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3.5" stroke="#583E8D" strokeWidth="1.8" />
        <path d="M5 20c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15.5 3.5l1.5 1.5M8.5 3.5L7 5" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 3V1.5" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    text: "Spending hours guessing which products might sell only to see losses?",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#583E8D" strokeWidth="1.8" />
        <path d="M12 8v4l2.5 2.5" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6v0.5" stroke="#583E8D" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    text: "Pouring money into ads without knowing if they'll ever pay off?",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M3 12h3l3-8 4 16 3-8h5" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Worrying your store will never break past a few sales a week while others scale to six figures?",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="#583E8D" strokeWidth="1.8" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    text: "Feeling left behind by competitors who always seem two steps ahead?",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: 'Overwhelmed by endless "gurus," tools, and conflicting advice on what actually works?',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M3 3v18h18" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 14l4-4 4 4 6-6" stroke="#583E8D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="21" cy="8" r="1.5" fill="#583E8D" opacity="0.4" />
      </svg>
    ),
    text: "Tired of rewriting your strategy every month without seeing real traction?",
  },
];

export default function PainPoints() {
  return (
    <section className="py-[80px] md:py-[120px] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f8f5fc 0%, #f3eef9 50%, #faf9f7 100%)" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <p className="text-[14px] text-[#777b86] font-medium mb-4">Is this you?</p>
          <h2 className="font-serif text-[clamp(36px,4.5vw,56px)] leading-[1.1] tracking-[-0.02em] text-[#17191c] max-w-[700px] mx-auto">
            Does Growing Your Ecom Store Feel More{" "}
            <span className="text-[#583E8D] italic">Draining Than Rewarding?</span>
          </h2>

          {/* Handwritten annotation */}
          <div className="absolute top-4 right-[8%] hidden lg:block">
            <p className="text-[18px] text-[#17191c]" style={{ fontFamily: "'Caveat', cursive" }}>
              Sounds familiar?
            </p>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="ml-6 mt-1">
              <path d="M5 5 C 10 15, 15 20, 20 25" stroke="#17191c" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M15 23 L20 25 L18 20" stroke="#17191c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </motion.div>

        {/* 3x2 Grid of pain points — cards with depth */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative bg-white rounded-[20px] p-7 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: "0 2px 12px rgba(88, 62, 141, 0.04), 0 1px 3px rgba(0,0,0,0.03)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{
                  boxShadow: "0 8px 32px rgba(88, 62, 141, 0.1), 0 2px 8px rgba(88, 62, 141, 0.06)",
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, #f3eef9 0%, #ebe3f5 100%)",
                    boxShadow: "0 4px 12px rgba(88, 62, 141, 0.08)",
                  }}
                >
                  {point.icon}
                </div>
                <p className="text-[15px] leading-[1.55] text-[#2a2a2e] font-medium max-w-[240px] mx-auto">
                  {point.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
