import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

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
    <section id="apply" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/cta-bg-YRaM7zPXJzGm4BLaE2yfcq.webp"
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#F97316] mb-4">
              Limited Spots Available
            </p>
            <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl leading-tight">
              Ready to Build a{" "}
              <span className="gradient-text">Profitable</span> Store?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop watching from the sidelines. Apply now and get the mentorship, systems, and accountability you need to finally make ecommerce work.
            </p>
          </motion.div>

          {/* What's included summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto"
          >
            {includes.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-[#06B6D4]" />
                </div>
                <span className="text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="https://e-commercementoring.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-bold text-lg rounded-md hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all duration-300"
            >
              Apply for Mentorship
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-5 text-sm text-muted-foreground">
              Applications reviewed within 24 hours. No commitment required.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
