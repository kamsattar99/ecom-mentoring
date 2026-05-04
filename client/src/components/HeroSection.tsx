import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-[140px] pb-[80px] md:pt-[180px] md:pb-[120px] bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EDE8F5] rounded-full blur-[120px] opacity-40 -translate-y-1/3 translate-x-1/3" />

      <div className="container relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f7f7f8] border border-[#e8e8e8]">
            <span className="w-2 h-2 rounded-full bg-[#583E8D] animate-pulse" />
            <span className="text-[14px] text-[#4c4c4c]">Applications closing soon</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-[800px] mx-auto"
        >
          <h1 className="font-serif text-[clamp(40px,6vw,72px)] leading-[1.08] tracking-[-0.02em] text-[#17191c] mb-6">
            Scale your store to{" "}
            <span className="text-[#583E8D] italic">7‑figures</span> with
            hands‑on mentorship
          </h1>
          <p className="text-[17px] leading-[1.5] text-[#4c4c4c] max-w-[560px] mx-auto mb-10">
            A proven system built by operators, not theorists. Get direct access to mentors
            who have built and scaled real e-commerce businesses.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://e-commercementoring.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#17191c] text-white text-[15px] font-medium px-8 py-4 rounded-full hover:bg-[#2d2f33] transition-all duration-200 hover:-translate-y-[1px]"
          >
            Apply Now
            <span>→</span>
          </a>
          <a
            href="#curriculum"
            className="inline-flex items-center gap-2 bg-transparent text-[#17191c] text-[15px] font-medium px-8 py-4 rounded-full border border-[#17191c] hover:bg-[#17191c] hover:text-white transition-all duration-200"
          >
            View Curriculum
          </a>
        </motion.div>

        {/* Social proof row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-[#EDE8F5] border-2 border-white flex items-center justify-center"
                >
                  <span className="text-[10px] text-[#583E8D] font-medium">
                    {["K", "J", "M", "A"][i - 1]}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-[14px] text-[#4c4c4c]">
              1k+ entrepreneurs enrolled
            </span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-[#e8e8e8]" />
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-[#583E8D]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[14px] text-[#4c4c4c]">4.9/5 rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
