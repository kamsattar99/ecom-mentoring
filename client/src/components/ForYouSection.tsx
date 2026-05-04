import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forYou = [
  "You want to build a real e-commerce business — not just \"try dropshipping\" for a quick buck",
  "You're ready to follow a proven, step-by-step system from someone who's done it for 10+ years",
  "You know shortcuts and freebies won't get you to six figures — and you're willing to invest",
  "You value 1:1 guidance and personalised feedback over cookie-cutter courses",
  "You want to play the long game and turn your store into a serious brand",
];

const notForYou = [
  "You want a free course or quick hack to \"get rich overnight\"",
  "You're not willing to put in the work or test products consistently",
  "You prefer watching endless YouTube tutorials instead of applying a proven system",
  "You're looking for generic, copy-paste advice instead of personalised mentorship",
  "You just want to \"dabble\" in e-commerce without committing to real results",
];

export default function ForYouSection() {
  return (
    <section className="py-[80px] md:py-[120px] bg-[#faf9f7] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(88,62,141,0.06) 0%, transparent 60%)" }}
      />
      <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(248,180,120,0.08) 0%, transparent 60%)" }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[640px] mx-auto mb-14"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-6"
            style={{ background: "linear-gradient(135deg, #f3eef9 0%, #ebe3f5 100%)", boxShadow: "0 2px 8px rgba(88,62,141,0.06)" }}
          >
            <span className="text-[12px] text-[#583E8D] font-semibold tracking-wide">Who this is for</span>
          </div>
          <h2 className="font-serif text-[clamp(36px,4vw,52px)] leading-[1.1] tracking-[-0.015em] text-[#17191c]">
            We're selective for a <span className="italic text-[#583E8D]">reason</span>
          </h2>
          <p className="text-[15px] text-[#777b86] mt-4 max-w-[420px] mx-auto leading-[1.6]">
            This mentorship isn't for everyone. We only work with people who are serious about building something real.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6 max-w-[920px] mx-auto">
          {/* For You */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative p-8 md:p-9 rounded-[24px] bg-white transition-all duration-400 hover:-translate-y-1"
            style={{
              boxShadow: "0 4px 24px rgba(88, 62, 141, 0.04), 0 1px 4px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.8)",
              border: "1px solid rgba(232,232,232,0.5)",
            }}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-[20%] right-[20%] h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, #583E8D, transparent)" }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)", boxShadow: "0 4px 12px rgba(76,175,80,0.12)" }}
                >
                  <Check size={18} className="text-green-600" strokeWidth={2.5} />
                </div>
                <h3 className="text-[17px] font-bold text-[#17191c]">This is for you if...</h3>
              </div>
              <ul className="space-y-5">
                {forYou.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                    className="flex items-start gap-3.5"
                  >
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)", boxShadow: "0 2px 8px rgba(88,62,141,0.2)" }}
                    >
                      <Check size={11} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[14px] text-[#3a3a3e] leading-[1.6]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Not For You */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative p-8 md:p-9 rounded-[24px] bg-white transition-all duration-400 hover:-translate-y-1"
            style={{
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.03), 0 1px 4px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.8)",
              border: "1px solid rgba(232,232,232,0.5)",
            }}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-[20%] right-[20%] h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, #ef5350, transparent)" }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)", boxShadow: "0 4px 12px rgba(239,83,80,0.12)" }}
                >
                  <X size={18} className="text-red-500" strokeWidth={2.5} />
                </div>
                <h3 className="text-[17px] font-bold text-[#17191c]">This is NOT for you if...</h3>
              </div>
              <ul className="space-y-5">
                {notForYou.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                    className="flex items-start gap-3.5"
                  >
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "linear-gradient(135deg, #fce4ec 0%, #ef9a9a 100%)", boxShadow: "0 2px 8px rgba(239,83,80,0.12)" }}
                    >
                      <X size={11} className="text-red-500" strokeWidth={3} />
                    </div>
                    <span className="text-[14px] text-[#3a3a3e] leading-[1.6]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
