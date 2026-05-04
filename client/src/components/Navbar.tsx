import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Product", href: "#curriculum" },
    { label: "Resources", href: "#reviews" },
    { label: "Customers", href: "#testimonials" },
    { label: "Pricing", href: "#faqs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#ffffff]/95 backdrop-blur-md border-b border-[#e8e8e8]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-[64px]">
        {/* Logo — like Steep's clean wordmark */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#583E8D] flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span className="font-medium text-[#17191c] text-[16px] tracking-[-0.02em]">
            Ecom Mentor
          </span>
        </a>

        {/* Desktop Links — centered */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] text-[#4c4c4c] hover:text-[#17191c] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://e-commercementoring.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#17191c] text-white text-[13px] font-medium px-5 py-2.5 rounded-full hover:bg-[#2d2f33] transition-all duration-200"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#17191c]"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-[#e8e8e8] px-4 pb-6 pt-2"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[15px] text-[#4c4c4c] hover:text-[#17191c] transition-colors py-3 px-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://e-commercementoring.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center bg-[#17191c] text-white text-[14px] font-medium px-6 py-3 rounded-full"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
