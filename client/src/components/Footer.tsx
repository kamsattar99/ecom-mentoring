export default function Footer() {
  return (
    <footer className="py-12 border-t border-[#e8e8e8] bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#583E8D] flex items-center justify-center">
              <span className="text-white font-bold text-xs">E</span>
            </div>
            <span className="text-[15px] font-medium text-[#17191c]">
              Ecom<span className="text-[#583E8D]">Mentor</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#curriculum" className="text-[14px] text-[#4c4c4c] hover:text-[#17191c] transition-colors">
              Curriculum
            </a>
            <a href="#reviews" className="text-[14px] text-[#4c4c4c] hover:text-[#17191c] transition-colors">
              Reviews
            </a>
            <a href="#faqs" className="text-[14px] text-[#4c4c4c] hover:text-[#17191c] transition-colors">
              FAQs
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[13px] text-[#a3a6af]">
            © {new Date().getFullYear()} The Ecom King. All rights reserved.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-[#e8e8e8]">
          <p className="text-[12px] text-[#a3a6af] text-center max-w-[600px] mx-auto leading-[1.6]">
            Earnings Disclaimer: Results vary. The figures mentioned on this page are not guaranteed. Your success depends on your effort, skill, and market conditions.
          </p>
        </div>
      </div>
    </footer>
  );
}
