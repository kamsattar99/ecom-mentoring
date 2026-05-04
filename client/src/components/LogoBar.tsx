import { motion } from "framer-motion";

export default function LogoBar() {
  const logos = [
    "Forbes", "Business Insider", "Yahoo Finance", "Entrepreneur", "The Sun"
  ];

  return (
    <section className="py-12 border-y border-[#e8e8e8] bg-[#f7f7f8]">
      <div className="container">
        <p className="text-center text-[14px] text-[#777b86] mb-8">
          As featured in
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-[16px] md:text-[18px] font-medium text-[#a3a6af] tracking-[-0.01em]"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
