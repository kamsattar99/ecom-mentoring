import { motion } from "framer-motion";
import { Check } from "lucide-react";

const includes = [
  "Weekly 1:1 mentorship calls",
  "Direct chat access to your mentor",
  "Proven SOPs & ad templates",
  "Private community access",
  "Ad account & store reviews",
  "Lifetime access to all resources",
];

export default function CTASection() {
  return (
    <section className="py-[80px] md:py-[120px] bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[800px] mx-auto"
        >
          {/* Accent card */}
          <div className="p-10 md:p-16 rounded-[24px] bg-[#EDE8F5] text-center">
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.015em] text-[#17191c] mb-5">
              Ready to build something real?
            </h2>
            <p className="text-[16px] leading-[1.5] text-[#4c4c4c] max-w-[480px] mx-auto mb-8">
              Join 1,000+ entrepreneurs who chose execution over theory. Apply now and get matched with a mentor who's been where you want to go.
            </p>

            {/* What's included */}
            <div className="grid sm:grid-cols-2 gap-3 max-w-[440px] mx-auto mb-10 text-left">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#583E8D]/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-[#583E8D]" />
                  </div>
                  <span className="text-[14px] text-[#4c4c4c]">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://e-commercementoring.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#17191c] text-white text-[15px] font-medium px-8 py-4 rounded-full hover:bg-[#2d2f33] transition-all duration-200 hover:-translate-y-[1px]"
              >
                Apply Now
                <span>→</span>
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center gap-2 text-[#17191c] text-[15px] font-medium px-8 py-4 rounded-full border border-[#17191c] hover:bg-[#17191c] hover:text-white transition-all duration-200"
              >
                View Curriculum
              </a>
            </div>

            <p className="mt-6 text-[13px] text-[#777b86]">
              Applications reviewed within 24 hours. No commitment required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
