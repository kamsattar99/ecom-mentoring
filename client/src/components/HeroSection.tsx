import { motion } from "framer-motion";
import { ArrowRight, Zap, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523906676/TiCj6Aw4s8ouGZgKX7pWUo/hero-bg-PJw9hRmnJ8xjNAKPX6GNAT.webp"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 backdrop-blur-sm">
              <Zap size={14} className="text-[#06B6D4]" />
              <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-wider">
                Applications Open — Limited Spots
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.08] tracking-tight"
          >
            Build & Scale Your Store to{" "}
            <span className="gradient-text">7‑Figures</span>{" "}
            With Hands‑On Mentorship
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Work 1:1 with mentors who've taken brands from zero to multi-six and seven figures.
            No fluff, no guesswork — just a proven system that delivers results.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row items-start gap-5"
          >
            <a
              href="#apply"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-semibold rounded-md hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 text-base"
            >
              Apply for Mentorship
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#F97316] text-[#F97316]" />
                ))}
                <span className="text-sm font-semibold text-foreground ml-1.5">4.7/5</span>
              </div>
              <span className="text-xs text-muted-foreground font-mono">
                Based on 200+ verified reviews
              </span>
            </div>
          </motion.div>

          {/* Social Proof Avatars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] border-2 border-background flex items-center justify-center">
                <span className="text-white text-xs font-bold">J</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#F97316] to-[#FB923C] border-2 border-background flex items-center justify-center">
                <span className="text-white text-xs font-bold">R</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] border-2 border-background flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#22D3EE] border-2 border-background flex items-center justify-center">
                <span className="text-white text-xs font-bold">E</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">1,000+</span> students already enrolled
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom energy line */}
      <div className="absolute bottom-0 left-0 right-0 energy-line" />
    </section>
  );
}
