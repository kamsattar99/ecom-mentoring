import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-[80px] md:py-[120px] bg-[#f9f9fa]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[32px] px-8 py-16 md:px-16 md:py-20"
        >
          {/* Warm gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8e8d4] via-[#ede4f7] to-[#f0e8f8]" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/30 rounded-full blur-[80px]" />
          
          <div className="relative text-center max-w-[600px] mx-auto">
            <h2 className="font-serif text-[clamp(36px,5vw,56px)] leading-[1.08] tracking-[-0.02em] text-[#17191c] mb-5">
              Ready to build something real?
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#4c4c4c] mb-10">
              Join 1,000+ entrepreneurs who chose execution over theory. Apply now and get matched with a mentor who's been where you want to go.
            </p>

            <div className="flex items-center justify-center">
              <a
                href="https://e-commercementoring.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#17191c] text-white text-[15px] font-medium px-8 py-4 rounded-full hover:bg-[#2d2f33] transition-all duration-200 hover:-translate-y-[1px]"
              >
                Apply Now
              </a>
            </div>

            <p className="text-[13px] text-[#777b86] mt-6">
              Applications reviewed within 24 hours. No commitment required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
