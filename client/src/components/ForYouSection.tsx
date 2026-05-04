import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

const forYou = [
  "You are serious about building an e-commerce business with structure, not guesswork",
  "You want personalised feedback on your actual store, products, ads and strategy",
  "You are ready to test, learn, optimise and keep moving forward",
  "You understand that growth requires investment, consistency and execution",
  "You want a practical roadmap instead of another collection of random tactics",
];

const notForYou = [
  "You are looking for shortcuts instead of doing the work",
  "You want passive content but are not willing to implement",
  "You are not ready to test products, creatives or offers consistently",
  "You prefer generic advice over personalised, direct feedback",
  "You are not currently prepared to invest time, focus or resources into building properly",
];

export default function ForYouSection() {
  return (
    <section className="py-[80px] md:py-[120px] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #faf9f7 0%, #f6f2fb 50%, #f3eef9 100%)" }}>
      {/* Background decorations */}
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(88,62,141,0.06) 0%, transparent 60%)" }}
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
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#583E8D]/10 bg-white/80 backdrop-blur-sm mb-5 shadow-[0_2px_8px_rgba(88,62,141,0.05)]">
            <span className="text-[12px] text-[#583E8D] font-semibold tracking-wide uppercase">Who this is for</span>
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,50px)] leading-[1.1] tracking-[-0.015em] text-[#17191c]">
            Built For Founders Ready To{" "}
            <span className="italic text-[#583E8D]">Execute</span>
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#777b86] mt-4 max-w-[500px] mx-auto leading-[1.7]">
            This is not another passive course. It is a hands-on mentorship for people who are ready to follow a system, take feedback, and build with consistency.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-5 max-w-[920px] mx-auto">
          {/* For You */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-[20px] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
              boxShadow: "0 4px 24px rgba(88,62,141,0.05), 0 1px 4px rgba(0,0,0,0.02)",
              border: "1px solid rgba(232,232,232,0.6)",
            }}
          >
            {/* Top accent glow */}
            <div className="h-[3px] w-full"
              style={{ background: "linear-gradient(90deg, #c8e6c9 0%, #66bb6a 50%, #c8e6c9 100%)" }}
            />

            <div className="p-7 md:p-8">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)" }}
                >
                  <Check size={16} className="text-green-600" strokeWidth={2.5} />
                </div>
                <h3 className="text-[16px] font-bold text-[#17191c]">This is for you if…</h3>
              </div>
              <p className="text-[12px] text-[#999] mb-6 pl-[52px]">
                You are ready to build with structure, feedback and consistency.
              </p>

              {/* Bullet list */}
              <ul className="space-y-4">
                {forYou.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)" }}
                    >
                      <Check size={10} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[13px] md:text-[14px] text-[#3a3a3e] leading-[1.6]">{item}</span>
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
            className="group relative rounded-[20px] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
              boxShadow: "0 4px 20px rgba(0,0,0,0.03), 0 1px 4px rgba(0,0,0,0.02)",
              border: "1px solid rgba(232,232,232,0.6)",
            }}
          >
            {/* Top accent glow — muted rose */}
            <div className="h-[3px] w-full"
              style={{ background: "linear-gradient(90deg, #fce4ec 0%, #ef9a9a 50%, #fce4ec 100%)" }}
            />

            <div className="p-7 md:p-8">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)" }}
                >
                  <X size={16} className="text-red-400" strokeWidth={2.5} />
                </div>
                <h3 className="text-[16px] font-bold text-[#17191c]">This may not be for you if…</h3>
              </div>
              <p className="text-[12px] text-[#999] mb-6 pl-[52px]">
                You are looking for shortcuts instead of hands-on execution.
              </p>

              {/* Bullet list */}
              <ul className="space-y-4">
                {notForYou.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.15 + i * 0.04 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-[#fce4ec]">
                      <X size={10} className="text-red-400" strokeWidth={3} />
                    </div>
                    <span className="text-[13px] md:text-[14px] text-[#5a5a5a] leading-[1.6]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Conversion bridge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-[14px] text-[#4c4c4c] mb-5 font-medium">
            If the left side sounds like you, the next step is to apply.
          </p>
          <a
            href="https://e-commercementoring.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-white text-[14px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(88,62,141,0.25)]"
            style={{ background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)" }}
          >
            Apply For Mentorship
            <ArrowRight size={15} />
          </a>
          <p className="text-[11px] text-[#999] mt-4">
            Applications are reviewed before calls are booked. Limited mentor capacity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
