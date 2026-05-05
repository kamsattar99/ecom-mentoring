import { useState, useEffect } from "react";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Curriculum", href: "#curriculum" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[#e8e8e8]/50"
          : "bg-transparent"
      }`}
      style={scrolled ? { boxShadow: "0 1px 12px rgba(0,0,0,0.03)" } : {}}
    >
      <div className="container flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <img
            src="/manus-storage/ecom-mentoring-logo_b617fdab.webp"
            alt="eMentoring"
            className="h-[48px] w-auto"
            width={160}
            height={48}
            fetchPriority="high"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-[14px] text-[#4c4c4c] hover:text-[#17191c] transition-colors duration-200 px-4 py-2 rounded-full hover:bg-[#f5f3f0]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://e-commercementoring.com/learn-more"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_6px_16px_rgba(88,62,141,0.25)]"
            style={{ background: "linear-gradient(135deg, #583E8D 0%, #6B4FA8 100%)" }}
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-[#17191c] hover:bg-[#f5f3f0] transition-colors"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - CSS transitions instead of framer-motion */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-250 ease-out ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="bg-white/95 backdrop-blur-xl border-b border-[#e8e8e8]/50 px-4 pb-6 pt-2"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] text-[#4c4c4c] hover:text-[#17191c] hover:bg-[#f5f3f0] transition-all py-3 px-4 rounded-xl"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://e-commercementoring.com/learn-more"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center text-white text-[14px] font-medium px-6 py-3.5 rounded-full"
              style={{ background: "linear-gradient(135deg, #583E8D 0%, #6B4FA8 100%)", boxShadow: "0 4px 12px rgba(88,62,141,0.2)" }}
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
