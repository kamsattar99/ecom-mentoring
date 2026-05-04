import { motion } from "framer-motion";

const logos = [
  { name: "Forbes", style: "font-serif italic font-bold text-[22px] md:text-[26px]" },
  { name: "Business Insider", style: "font-sans font-bold text-[17px] md:text-[19px] tracking-tight" },
  { name: "Yahoo Finance", style: "font-sans font-extrabold text-[17px] md:text-[19px]" },
  { name: "Entrepreneur", style: "font-serif italic font-semibold text-[19px] md:text-[22px]" },
  { name: "The Sun", style: "font-sans font-black text-[18px] md:text-[20px] uppercase tracking-wide" },
  { name: "LADbible", style: "font-sans font-extrabold text-[17px] md:text-[19px] tracking-tight" },
];

export default function LogoBar() {
  return (
    <section className="py-14 md:py-16 bg-white relative overflow-hidden">
      {/* Subtle gradient borders */}
      <div className="absolute top-0 left-[5%] right-[5%] h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(88,62,141,0.08) 50%, transparent 100%)" }}
      />
      <div className="absolute bottom-0 left-[5%] right-[5%] h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(88,62,141,0.08) 50%, transparent 100%)" }}
      />

      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[12px] text-[#999] font-medium tracking-[0.08em] uppercase mb-8"
        >
          As featured in
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
        >
          {logos.map((logo, i) => (
            <motion.span
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
              className={`text-[#17191c]/20 hover:text-[#583E8D]/60 transition-all duration-500 cursor-default select-none ${logo.style}`}
            >
              {logo.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
