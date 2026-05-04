export default function Footer() {
  return (
    <footer className="relative bg-[#0f1012] text-white overflow-hidden">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(88,62,141,0.5) 30%, rgba(123,91,181,0.3) 70%, transparent 100%)" }}
      />
      {/* Background decorations */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(88,62,141,0.3) 0%, transparent 60%)" }}
      />
      <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(123,91,181,0.2) 0%, transparent 60%)" }}
      />

      {/* Main footer */}
      <div className="container py-16 md:py-20 relative z-10">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center mb-5">
              <img
                src="/manus-storage/ecom-mentoring-logo_b617fdab.webp"
                alt="eMentoring"
                className="h-[48px] w-auto brightness-0 invert"
              />
            </div>
            <p className="text-[14px] text-[#6b6f78] leading-[1.7] max-w-[280px] mb-7">
              The proven mentorship system for serious e-commerce founders. Built by operators, not theorists.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a href="https://www.youtube.com/@TheEcomKing" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(88,62,141,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(88,62,141,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-[#6b6f78]">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/theecomking/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(88,62,141,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(88,62,141,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-[#6b6f78]">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://twitter.com/TheEcomKingKam" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(88,62,141,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(88,62,141,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#6b6f78]">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mentorship column */}
          <div>
            <h4 className="text-[12px] font-bold text-white/40 uppercase tracking-[0.1em] mb-6">Mentorship</h4>
            <ul className="space-y-4">
              <li><a href="#curriculum" className="text-[14px] text-[#6b6f78] hover:text-white transition-colors duration-200">Curriculum</a></li>
              <li><a href="#reviews" className="text-[14px] text-[#6b6f78] hover:text-white transition-colors duration-200">Success Stories</a></li>
              <li><a href="#faqs" className="text-[14px] text-[#6b6f78] hover:text-white transition-colors duration-200">FAQs</a></li>
              <li>
                <a href="https://e-commercementoring.com/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium transition-colors duration-200"
                  style={{ color: "#9b7fd4" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#b89ee8"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#9b7fd4"; }}
                >
                  Apply Now <span>→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h4 className="text-[12px] font-bold text-white/40 uppercase tracking-[0.1em] mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="https://www.youtube.com/@TheEcomKing" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#6b6f78] hover:text-white transition-colors duration-200">YouTube Channel</a></li>
              <li><a href="#" className="text-[14px] text-[#6b6f78] hover:text-white transition-colors duration-200">Free Resources</a></li>
              <li><a href="#" className="text-[14px] text-[#6b6f78] hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4 className="text-[12px] font-bold text-white/40 uppercase tracking-[0.1em] mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[14px] text-[#6b6f78] hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-[14px] text-[#6b6f78] hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-[14px] text-[#6b6f78] hover:text-white transition-colors duration-200">Earnings Disclaimer</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container py-7">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-[#444750]">
              © {new Date().getFullYear()} The Ecom King. All rights reserved.
            </p>
            <p className="text-[12px] text-[#444750] max-w-[500px] text-center md:text-right leading-[1.6]">
              Earnings Disclaimer: Results vary. The figures mentioned on this page are not guaranteed. Your success depends on your effort, skill, and market conditions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
