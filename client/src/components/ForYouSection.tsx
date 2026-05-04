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
    <section className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 energy-line" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#06B6D4] mb-4">
            Qualification
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl">
            Is This Mentorship{" "}
            <span className="gradient-text">Right For You?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't work with everyone. This program is designed for people who are serious about results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* For You */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-xl p-7 md:p-8 relative overflow-hidden"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#06B6D4] to-[#22D3EE]" />
            
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center">
                <Check size={18} className="text-[#06B6D4]" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">
                This IS For You If:
              </h3>
            </div>
            <div className="space-y-4">
              {forYou.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={10} className="text-[#06B6D4]" />
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Not For You */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-xl p-7 md:p-8 relative overflow-hidden"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F97316] to-[#FB923C]" />
            
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-lg bg-[#F97316]/10 border border-[#F97316]/30 flex items-center justify-center">
                <X size={18} className="text-[#F97316]" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">
                This Is NOT For You If:
              </h3>
            </div>
            <div className="space-y-4">
              {notForYou.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F97316]/10 border border-[#F97316]/25 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={10} className="text-[#F97316]" />
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
