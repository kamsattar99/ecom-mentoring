export default function Footer() {
  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #3d2475 0%, #4a2d8a 20%, #5b3a9e 45%, #6b47b2 65%, #5b3a9e 85%, #4a2d8a 100%)",
      }}
    >
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
      />

      {/* Main footer */}
      <div className="container py-14 md:py-18 relative z-10">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 md:gap-12 max-w-[1100px]">
          {/* Brand column */}
          <div>
            <div className="flex items-center mb-5">
              <img
                src="/manus-storage/ecom-mentoring-footer-logo_6a87be9b.webp"
                alt="eMentoring"
                className="h-[48px] w-auto"
              />
            </div>
            <p className="text-[13px] text-white/70 leading-[1.75] max-w-[260px] mb-7">
              Hands-on e-commerce mentorship for serious founders who want structure, feedback and a clear path to scaling.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2.5">
              {[
                { href: "https://www.youtube.com/@TheEcomKing", label: "YouTube", icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/> },
                { href: "https://www.instagram.com/theecomking/", label: "Instagram", icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/> },
                { href: "https://www.tiktok.com/@theecomking", label: "TikTok", icon: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/> },
                { href: "https://twitter.com/TheEcomKingKam", label: "X", icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/> },
              ].map(({ href, label, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 group"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.2)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)"; }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/80 group-hover:text-white transition-colors duration-300">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Mentorship column */}
          <div>
            <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-[0.12em] mb-5">Mentorship</h4>
            <ul className="space-y-3.5">
              <li><a href="#curriculum" className="text-[13px] text-white/70 hover:text-white transition-colors duration-200">Curriculum</a></li>
              <li><a href="#whats-included" className="text-[13px] text-white/70 hover:text-white transition-colors duration-200">What's Included</a></li>
              <li><a href="#reviews" className="text-[13px] text-white/70 hover:text-white transition-colors duration-200">Student Results</a></li>
              <li><a href="#faqs" className="text-[13px] text-white/70 hover:text-white transition-colors duration-200">FAQs</a></li>
              <li>
                <a href="https://e-commercementoring.com/learn-more"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white hover:text-white/90 transition-colors duration-200"
                >
                  Apply For Mentorship <span className="text-[11px]">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-[0.12em] mb-5">Resources</h4>
            <ul className="space-y-3.5">
              <li><a href="https://www.youtube.com/@TheEcomKing" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/70 hover:text-white transition-colors duration-200">YouTube Channel</a></li>
              <li><a href="#" className="text-[13px] text-white/70 hover:text-white transition-colors duration-200">Free Training</a></li>

            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-[0.12em] mb-5">Legal</h4>
            <ul className="space-y-3.5">
              <li><a href="/privacy-policy" className="text-[13px] text-white/70 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-[13px] text-white/70 hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-[13px] text-white/70 hover:text-white transition-colors duration-200">Earnings Disclaimer</a></li>
              <li><a href="#" className="text-[13px] text-white/70 hover:text-white transition-colors duration-200">Refund Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-[12px] text-white/50">
                © {new Date().getFullYear()} The Ecom King. All rights reserved.
              </p>
              <span className="hidden sm:inline text-[12px] text-white/30">·</span>
              <p className="text-[11px] text-white/40">
                Ecom Mentoring is part of The Ecom King.
              </p>
            </div>
            <p className="text-[11px] text-white/50 max-w-[520px] text-center md:text-right leading-[1.65]">
              Earnings Disclaimer: Results are not guaranteed. Any figures referenced are student-reported and individual outcomes vary based on product selection, budget, execution, skill and market conditions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
