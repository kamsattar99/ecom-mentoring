import { motion } from "framer-motion";

export default function FeaturedIn() {
  return (
    <section className="py-[60px] md:py-[80px] bg-[#f7f7f8]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[600px] mx-auto"
        >
          <p className="text-[14px] text-[#583E8D] font-medium mb-4">Trusted by the industry</p>
          <h3 className="font-serif text-[clamp(24px,3vw,32px)] leading-[1.2] tracking-[-0.015em] text-[#17191c] mb-3">
            Built by The Ecom King
          </h3>
          <p className="text-[15px] leading-[1.5] text-[#4c4c4c] mb-8">
            With 2M+ YouTube subscribers and features in major publications, our founder has helped thousands of entrepreneurs start and scale profitable stores.
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <p className="font-serif text-[28px] text-[#17191c] tracking-[-0.02em]">2M+</p>
              <p className="text-[13px] text-[#777b86]">YouTube Subscribers</p>
            </div>
            <div className="w-px h-10 bg-[#e8e8e8]" />
            <div className="text-center">
              <p className="font-serif text-[28px] text-[#17191c] tracking-[-0.02em]">500+</p>
              <p className="text-[13px] text-[#777b86]">Free Videos Published</p>
            </div>
            <div className="w-px h-10 bg-[#e8e8e8]" />
            <div className="text-center">
              <p className="font-serif text-[28px] text-[#17191c] tracking-[-0.02em]">10+</p>
              <p className="text-[13px] text-[#777b86]">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
