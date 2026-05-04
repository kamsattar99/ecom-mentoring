import { motion } from "framer-motion";

const painPoints = [
  "Spending hours guessing which products might sell — only to see losses",
  "Pouring money into ads without knowing if they'll ever pay off",
  "Feeling left behind by competitors who always seem two steps ahead",
  "Overwhelmed by endless \"gurus,\" tools, and conflicting advice",
  "Tired of rewriting your strategy every month without seeing real traction",
];

export default function PainPoints() {
  return (
    <section className="py-[80px] md:py-[120px] bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[14px] text-[#583E8D] font-medium mb-4">Sound familiar?</p>
            <h2 className="font-serif text-[clamp(32px,4vw,44px)] leading-[1.1] tracking-[-0.015em] text-[#17191c] mb-5">
              You've tried everything — but nothing sticks
            </h2>
            <p className="text-[16px] leading-[1.5] text-[#4c4c4c]">
              Most people fail at e-commerce not because they lack motivation — but because they lack a system and someone to hold them accountable.
            </p>
          </motion.div>

          {/* Right - Pain points list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-[16px] bg-[#f7f7f8]"
              >
                <span className="text-[14px] font-medium text-[#a3a6af] mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-[1.5] text-[#4c4c4c]">{point}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
