import { motion } from "framer-motion";

const logos = [
  { name: "Forbes", style: "font-serif italic text-[20px] md:text-[22px]" },
  { name: "Business Insider", style: "font-sans font-bold text-[16px] md:text-[18px] tracking-tight" },
  { name: "Yahoo Finance", style: "font-sans font-semibold text-[16px] md:text-[18px]" },
  { name: "Entrepreneur", style: "font-serif text-[18px] md:text-[20px]" },
  { name: "The Sun", style: "font-sans font-black text-[17px] md:text-[19px] uppercase tracking-wide" },
  { name: "LADbible", style: "font-sans font-extrabold text-[16px] md:text-[18px] tracking-tight" },
];

export default function LogoBar() {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <p className="text-center text-[13px] text-[#777b86] mb-8">
          Trusted by teams at
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {logos.map((logo) => (
            <span
              key={logo.name}
              className={`text-[#17191c]/30 hover:text-[#17191c]/60 transition-colors duration-300 ${logo.style}`}
            >
              {logo.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
