import { motion } from "framer-motion";

const mediaLogos = [
  { name: "Business Insider", style: "italic" },
  { name: "Forbes", style: "normal" },
  { name: "Entrepreneur", style: "normal" },
  { name: "LAD Bible", style: "normal" },
  { name: "Yahoo Finance", style: "normal" },
];

export default function FeaturedIn() {
  return (
    <section className="relative py-16 border-y border-border/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              As Seen In
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
          </div>
          <div className="flex items-center justify-center gap-8 md:gap-14 flex-wrap">
            {mediaLogos.map((logo) => (
              <motion.div
                key={logo.name}
                whileHover={{ scale: 1.05 }}
                className="text-muted-foreground/40 hover:text-muted-foreground/70 transition-all duration-300"
              >
                <span
                  className={`font-display font-bold text-lg md:text-xl tracking-tight ${
                    logo.style === "italic" ? "italic" : ""
                  }`}
                >
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
