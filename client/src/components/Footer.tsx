import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-border/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-4 gap-10 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center">
                  <span className="text-white font-bold text-sm font-display">E</span>
                </div>
                <span className="font-display font-bold text-lg text-foreground">
                  Ecom<span className="gradient-text">Mentor</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                Our mentoring aims to deliver 10x the impact of any information product. We believe in execution over theory, proof over hype, and systems over luck.
              </p>
              <p className="mt-4 text-xs text-muted-foreground/60 leading-relaxed max-w-sm">
                Earnings Disclaimer: Results vary. The figures mentioned on this page are not guaranteed. Your success depends on your effort, skill, and market conditions.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Navigate
              </h4>
              <div className="space-y-2.5">
                <a href="#curriculum" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Curriculum
                </a>
                <a href="#testimonials" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Testimonials
                </a>
                <a href="#faq" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                  FAQs
                </a>
                <a href="#apply" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Apply Now
                </a>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Legal
              </h4>
              <div className="space-y-2.5">
                <a href="#" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Earnings Disclaimer
                </a>
                <a href="#" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                support@ecomkingvault.com
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2025 E-commerce Mentoring LTD. All Rights Reserved.
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              Execution beats theory. Proof beats hype. Systems beat luck.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
