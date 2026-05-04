import { motion } from "framer-motion";
import { ArrowRight, Layers, MessageSquare, BarChart3 } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-[80px] md:py-[120px] relative overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f5f1fa 50%, #ede8f5 100%)" }}>
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
          className="relative overflow-hidden rounded-[28px] md:rounded-[36px] px-6 py-14 md:px-16 md:py-20"
          style={{
            boxShadow: "0 24px 80px rgba(88,62,141,0.1), 0 8px 24px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.7)",
            border: "1px solid rgba(255,255,255,0.4)",
          }}
        >
          {/* Rich gradient background */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(155deg, #faf3e8 0%, #f0e8f8 30%, #e8ddf5 55%, #f2ecfa 75%, #faf5ee 100%)" }}
          />
          {/* Radial glow behind headline */}
          <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-40 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(88,62,141,0.06) 0%, transparent 70%)" }}
          />
          {/* Decorative orbs */}
          <div className="absolute top-[-80px] right-[-60px] w-[300px] h-[300px] rounded-full opacity-40"
            style={{ background: "radial-gradient(circle, rgba(88,62,141,0.08) 0%, transparent 70%)" }}
          />
          <div className="absolute bottom-[-60px] left-[-40px] w-[250px] h-[250px] rounded-full opacity-35"
            style={{ background: "radial-gradient(circle, rgba(248,180,120,0.1) 0%, transparent 70%)" }}
          />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
          />
          {/* Noise texture */}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
          />

          <div className="relative text-center max-w-[600px] mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7"
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.5)",
                boxShadow: "0 4px 16px rgba(88,62,141,0.05), 0 1px 3px rgba(0,0,0,0.02)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-[#583E8D] shadow-[0_0_6px_rgba(88,62,141,0.4)]" />
              <span className="text-[12px] font-semibold text-[#17191c] tracking-wide">Limited Mentor Capacity</span>
            </motion.div>

            {/* Headline */}
            <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] leading-[1.1] tracking-[-0.02em] text-[#17191c] mb-5">
              Ready To Stop Guessing And{" "}
              <span className="italic text-[#583E8D]">Start Building?</span>
            </h2>

            {/* Subheading */}
            <p className="text-[15px] md:text-[16px] leading-[1.65] text-[#4c4c4c] mb-9 max-w-[520px] mx-auto">
              Apply to work 1:1 with experienced e-commerce mentors who can help you clarify your next move across product research, store setup, ads, creatives and scaling.
            </p>

            {/* CTA Button */}
            <motion.a
              href="https://e-commercementoring.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 text-white text-[15px] font-semibold px-11 py-[18px] rounded-full transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #583E8D 0%, #6B4FA8 50%, #7B5BB5 100%)",
                boxShadow: "0 14px 36px rgba(88,62,141,0.28), 0 4px 10px rgba(88,62,141,0.12), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              Apply For Mentorship <ArrowRight size={16} />
            </motion.a>

            {/* Microcopy */}
            <p className="text-[13px] text-[#777b86] mt-5 leading-[1.5]">
              Applications are reviewed before calls are booked. No pressure if it is not the right fit.
            </p>

            {/* Secondary link */}
            <a
              href="#curriculum"
              className="inline-block text-[12px] text-[#583E8D] font-medium mt-3 hover:underline transition-all duration-200"
            >
              View curriculum →
            </a>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-10 pt-7 border-t border-[#17191c]/5"
            >
              {[
                { icon: Layers, label: "Proven frameworks" },
                { icon: MessageSquare, label: "Direct mentor access" },
                { icon: BarChart3, label: "Store & ad reviews" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255,255,255,0.5)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                  }}
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #f3eef9 0%, #ebe3f5 100%)" }}
                  >
                    <Icon size={13} className="text-[#583E8D]" />
                  </div>
                  <span className="text-[12px] font-medium text-[#4c4c4c]">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
