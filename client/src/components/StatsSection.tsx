import { motion } from "framer-motion";

const stats = [
  { value: "£30M+", label: "Student revenue generated" },
  { value: "1,000+", label: "Entrepreneurs mentored" },
  { value: "4.9/5", label: "Average student rating" },
  { value: "90 days", label: "Avg. time to first profit" },
];

export default function StatsSection() {
  return (
    <section className="py-[60px] md:py-[80px] bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center relative">
              <p className="font-serif text-[clamp(28px,4vw,40px)] leading-[1] tracking-[-0.02em] text-[#17191c] mb-2">
                {stat.value}
              </p>
              <p className="text-[13px] text-[#777b86]">{stat.label}</p>
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-[#e8e8e8]" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
