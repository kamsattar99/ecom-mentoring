import { motion } from "framer-motion";
import { Target, Users, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Proven System",
    description: "Follow a step-by-step framework that has generated over £30M+ in student revenue across multiple niches.",
  },
  {
    icon: Users,
    title: "1:1 Mentorship",
    description: "Work directly with experienced operators who actively run profitable stores — not retired theorists.",
  },
  {
    icon: TrendingUp,
    title: "Scale With Confidence",
    description: "From product research to paid ads to scaling — every stage is mapped, measured, and mentored.",
  },
];

export default function IntroSection() {
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
          <p className="text-[14px] text-[#583E8D] font-medium mb-4">Introducing Ecom Mentor</p>
          <h2 className="font-serif text-[clamp(36px,4vw,52px)] leading-[1.1] tracking-[-0.015em] text-[#17191c] mb-5">
            The A-to-Z system for high-value ecom results
          </h2>
          <p className="text-[16px] leading-[1.5] text-[#4c4c4c]">
            Everything you need to build, launch, and scale a profitable e-commerce brand — with direct guidance at every step.
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-[24px] bg-[#f7f7f8] hover:bg-[#EDE8F5]/50 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EDE8F5] flex items-center justify-center mb-5">
                <pillar.icon size={20} className="text-[#583E8D]" />
              </div>
              <h3 className="text-[18px] font-medium text-[#17191c] mb-3">
                {pillar.title}
              </h3>
              <p className="text-[15px] leading-[1.5] text-[#4c4c4c]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
