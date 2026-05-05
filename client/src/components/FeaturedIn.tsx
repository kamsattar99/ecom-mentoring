
export default function FeaturedIn() {
  return (
    <section className="py-[60px] md:py-[80px] bg-white border-y border-[#e8e8e8]">
      <div className="container">
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20"
        >
          <div className="text-center">
            <p className="font-serif text-[clamp(32px,4vw,48px)] leading-[1] tracking-[-0.02em] text-[#17191c]">
              2M+
            </p>
            <p className="text-[13px] text-[#777b86] mt-1">YouTube Subscribers</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-[#e8e8e8]" />
          <div className="text-center">
            <p className="font-serif text-[clamp(32px,4vw,48px)] leading-[1] tracking-[-0.02em] text-[#17191c]">
              500+
            </p>
            <p className="text-[13px] text-[#777b86] mt-1">Free Videos Published</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-[#e8e8e8]" />
          <div className="text-center">
            <p className="font-serif text-[clamp(32px,4vw,48px)] leading-[1] tracking-[-0.02em] text-[#17191c]">
              10+
            </p>
            <p className="text-[13px] text-[#777b86] mt-1">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
