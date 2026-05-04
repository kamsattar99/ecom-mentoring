import { motion } from "framer-motion";

const painPoints = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#583E8D" strokeWidth="1.6">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-1a6 6 0 0 1 12 0v1" />
        <path d="M16 4l1-1M8 4L7 3" />
      </svg>
    ),
    text: "Spending hours guessing which products might sell only to see losses?",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#583E8D" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v0M9.5 10.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5v2" />
        <circle cx="12" cy="17" r="0.5" fill="#583E8D" />
      </svg>
    ),
    text: "Pouring money into ads without knowing if they'll ever pay off?",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#583E8D" strokeWidth="1.6">
        <path d="M4 12h4l3-9 4 18 3-9h4" />
      </svg>
    ),
    text: "Worrying your store will never break past a few sales a week while others scale to six figures?",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#583E8D" strokeWidth="1.6">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h8M8 12h6M8 16h4" />
      </svg>
    ),
    text: "Feeling left behind by competitors who always seem two steps ahead?",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#583E8D" strokeWidth="1.6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    text: 'Overwhelmed by endless "gurus," tools, and conflicting advice on what actually works?',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#583E8D" strokeWidth="1.6">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-4 4 4 6-6" />
      </svg>
    ),
    text: "Tired of rewriting your strategy every month without seeing real traction?",
  },
];

export default function PainPoints() {
  return (
    <section className="py-[80px] md:py-[120px] bg-[#f5f4f2]">
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
          <div className="absolute top-4 right-[10%] hidden lg:block">
            <p className="text-[14px] font-medium tracking-[0.05em] text-[#17191c] uppercase" style={{ fontFamily: "'Caveat', cursive" }}>
              <span className="text-[16px] normal-case tracking-normal" style={{ fontFamily: "'Caveat', cursive" }}>
                Sounds familiar?
              </span>
            </p>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="ml-4 mt-1">
              <path d="M5 5 C 10 15, 15 20, 20 25" stroke="#17191c" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M15 23 L20 25 L18 20" stroke="#17191c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </motion.div>

        {/* 3x2 Grid of pain points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-[960px] mx-auto">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-[#EDE8F5] flex items-center justify-center mx-auto mb-4">
                {point.icon}
              </div>
              <p className="text-[15px] leading-[1.5] text-[#17191c] font-medium max-w-[260px] mx-auto">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
