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
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <div
        className={`w-full max-w-[1080px] flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)]"
            : "bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.09)]"
        }`}
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "10px 12px 10px 28px",
        }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <img
            src="/manus-storage/ecom-mentoring-logo_b617fdab.webp"
            alt="eMentoring"
            className="h-[36px] w-auto brightness-0 invert"
            width={120}
            height={36}
            fetchPriority="high"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] text-[rgba(255,255,255,0.65)] hover:text-white transition-colors duration-200 px-4 py-2 rounded-full hover:bg-[rgba(255,255,255,0.06)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="https://e-commercementoring.com/learn-more"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-[1px]"
            style={{
              background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
              boxShadow: "0 8px 24px rgba(123,91,181,0.35)",
            }}
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-colors"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-4 right-4 mt-2 overflow-hidden transition-all duration-250 ease-out rounded-2xl ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: "rgba(23,21,30,0.95)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.09)",
        }}
      >
        <div className="px-4 pb-6 pt-4">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] text-[rgba(255,255,255,0.65)] hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all py-3 px-4 rounded-xl"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://e-commercementoring.com/learn-more"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center text-white text-[14px] font-medium px-6 py-3.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #583E8D 0%, #7B5BB5 100%)",
                boxShadow: "0 8px 24px rgba(123,91,181,0.35)",
              }}
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
