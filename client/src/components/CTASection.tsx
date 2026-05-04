import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-[80px] md:py-[120px] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f5f1fa 0%, #ede8f5 50%, #f5f1fa 100%)" }}>
      {/* Background decorations */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(88,62,141,0.06) 0%, transparent 60%)" }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] px-8 py-16 md:px-16 md:py-24"
          style={{
            boxShadow: "0 24px 80px rgba(88,62,141,0.12), 0 8px 24px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          {/* Rich gradient background */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(145deg, #f8e8d4 0%, #ede4f7 35%, #e4d6f5 55%, #f0e8f8 80%, #f8f0e8 100%)" }}
          />
          {/* Decorative orbs */}
          <div className="absolute top-[-100px] right-[-80px] w-[350px] h-[350px] rounded-full opacity-50"
            style={{ background: "radial-gradient(circle, rgba(88,62,141,0.1) 0%, transparent 70%)" }}
          />
          <div className="absolute bottom-[-80px] left-[-60px] w-[300px] h-[300px] rounded-full opacity-40"
            style={{ background: "radial-gradient(circle, rgba(248,180,120,0.12) 0%, transparent 70%)" }}
          />
          <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(123,91,181,0.08) 0%, transparent 70%)" }}
          />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
          />

          <div className="relative text-center max-w-[640px] mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.5)",
                boxShadow: "0 4px 16px rgba(88,62,141,0.06), 0 1px 3px rgba(0,0,0,0.02)",
              }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.4)]" />
              <span className="text-[13px] font-semibold text-[#17191c]">Limited spots available</span>
            </motion.div>

            <h2 className="font-serif text-[clamp(36px,5vw,56px)] leading-[1.08] tracking-[-0.02em] text-[#17191c] mb-5">
              Ready to build something{" "}
              <span className="italic text-[#583E8D]">real?</span>
            </h2>
            <p className="text-[16px] leading-[1.65] text-[#4c4c4c] mb-10 max-w-[500px] mx-auto">
              Join 1,000+ entrepreneurs who chose execution over theory. Apply now and get matched with a mentor who's been where you want to go.
            </p>

            {/* CTA Button */}
            <motion.a
              href="https://e-commercementoring.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 text-white text-[15px] font-semibold px-10 py-4.5 rounded-full transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #583E8D 0%, #6B4FA8 50%, #7B5BB5 100%)",
                boxShadow: "0 12px 32px rgba(88,62,141,0.3), 0 4px 8px rgba(88,62,141,0.15), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              Apply Now <ArrowRight size={16} />
            </motion.a>

            <p className="text-[13px] text-[#777b86] mt-6">
              Applications reviewed within 24 hours. No commitment required.
            </p>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-[#17191c]/5"
            >
              {[
                { icon: Shield, label: "Proven system" },
                { icon: Clock, label: "24hr response" },
                { icon: Users, label: "1:1 mentorship" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.6)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(255,255,255,0.5)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                    }}
                  >
                    <Icon size={15} className="text-[#583E8D]" />
                  </div>
                  <span className="text-[13px] font-medium text-[#4c4c4c]">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
