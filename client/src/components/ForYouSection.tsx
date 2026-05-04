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
    <section className="py-[80px] md:py-[120px] bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[640px] mx-auto mb-16"
        >
          <p className="text-[14px] text-[#583E8D] font-medium mb-4">Is this for you?</p>
          <h2 className="font-serif text-[clamp(36px,4vw,52px)] leading-[1.1] tracking-[-0.015em] text-[#17191c]">
            We're selective for a reason
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {/* For You */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-[24px] bg-[#f7f7f8]"
          >
            <h3 className="text-[18px] font-medium text-[#17191c] mb-6">This is for you if...</h3>
            <ul className="space-y-4">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EDE8F5] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-[#583E8D]" />
                  </div>
                  <span className="text-[15px] text-[#4c4c4c] leading-[1.4]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For You */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-[24px] bg-[#f7f7f8]"
          >
            <h3 className="text-[18px] font-medium text-[#17191c] mb-6">This is NOT for you if...</h3>
            <ul className="space-y-4">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={12} className="text-red-400" />
                  </div>
                  <span className="text-[15px] text-[#4c4c4c] leading-[1.4]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
