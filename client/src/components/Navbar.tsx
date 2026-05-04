import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Curriculum", href: "#curriculum" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQs", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/40 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center group-hover:shadow-[0_0_12px_rgba(37,99,235,0.4)] transition-shadow duration-300">
            <span className="text-white font-bold text-sm font-display">E</span>
          </div>
          <span className="font-display font-bold text-lg text-foreground">
            Ecom<span className="gradient-text">Mentor</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            className="px-5 py-2.5 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white text-sm font-semibold rounded-md hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border/40"
          >
            <div className="container py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-muted-foreground hover:text-foreground transition-colors py-3 px-2 rounded-md hover:bg-secondary/30"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#apply"
                onClick={() => setMobileOpen(false)}
                className="mt-3 px-5 py-3.5 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white text-sm font-semibold rounded-md text-center"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
