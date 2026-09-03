import { useEffect, useState } from "react";

/**
 * Homepage visual direction: a compact floating glass pill that becomes more
 * substantial over light sections, while shared subpages retain the same links.
 */
export default function Navbar({ variant = "default" }: { variant?: "home" | "default" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = variant === "home";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Results", href: "/#results" },
    { label: "Mentors", href: "/#mentors" },
    { label: "Programmes", href: "/#program" },
    { label: "FAQs", href: "/#faqs" },
  ];

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-[padding] duration-500 ${isHome ? (scrolled ? "pt-3" : "pt-[18px]") : "pt-6"}`}>
      <div
        className={`flex w-full items-center justify-between rounded-full border transition-all duration-500 ${
          isHome ? "max-w-[1100px]" : "max-w-[1080px]"
        } ${
          scrolled
            ? "border-white/12 bg-[#0F0E13]/72 shadow-[0_18px_60px_rgba(0,0,0,0.32)]"
            : "border-white/[0.08] bg-white/[0.03]"
        }`}
        style={{
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          padding: isHome ? (scrolled ? "7px 10px 7px 22px" : "10px 12px 10px 26px") : "10px 12px 10px 28px",
          transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <a href="/" aria-label="eMentoring home" className="flex items-center">
          <img
            src="/manus-storage/ecom-mentoring-footer-logo_6a87be9b.webp"
            alt="eMentoring"
            className={`w-auto transition-[height] duration-500 ${isHome ? (scrolled ? "h-10" : "h-11") : "h-12"}`}
            width={160}
            height={48}
            fetchPriority="high"
          />
        </a>

        <div className="hidden items-center gap-0.5 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-[14px] text-white/65 transition-colors duration-200 hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/apply"
          className="hidden items-center rounded-full bg-[#7B5BB5] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_rgba(123,91,181,0.35)] transition-[transform,background] duration-200 hover:-translate-y-px hover:bg-[#8A6BC4] active:scale-[0.97] md:inline-flex"
        >
          Apply For A Fit Call
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white md:hidden"
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></svg>
          )}
        </button>
      </div>

      <div
        className={`absolute left-4 right-4 top-full mt-2 overflow-hidden rounded-[20px] border border-white/10 bg-[#131118]/95 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-200 md:hidden ${
          mobileOpen ? "max-h-[430px] translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-0.5 p-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[52px] items-center rounded-xl px-4 text-[16px] text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/apply"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex min-h-[52px] items-center justify-center rounded-full bg-[#7B5BB5] px-5 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(123,91,181,0.35)]"
          >
            Apply For A Fit Call
          </a>
        </div>
      </div>
    </nav>
  );
}
