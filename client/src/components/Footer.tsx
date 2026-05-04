export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-[#e8e8e8]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#583E8D] flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-[14px] font-medium text-[#17191c]">Ecom Mentor</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#curriculum" className="text-[13px] text-[#777b86] hover:text-[#17191c] transition-colors">
              Product
            </a>
            <a href="#reviews" className="text-[13px] text-[#777b86] hover:text-[#17191c] transition-colors">
              Customers
            </a>
            <a href="#faqs" className="text-[13px] text-[#777b86] hover:text-[#17191c] transition-colors">
              FAQs
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[13px] text-[#a3a6af]">
            © {new Date().getFullYear()} The Ecom King. All rights reserved.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-[#f0f0f0]">
          <p className="text-[12px] text-[#a3a6af] text-center max-w-[600px] mx-auto leading-[1.5]">
            Earnings Disclaimer: Results vary. The figures mentioned on this page are not guaranteed. Your success depends on your effort, skill, and market conditions.
          </p>
        </div>
      </div>
    </footer>
  );
}
