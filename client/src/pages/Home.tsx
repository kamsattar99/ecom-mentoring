import HeroSection from "@/components/HeroSection";
import LazySection from "@/components/LazySection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0F0E13] pb-[74px] md:pb-0">
      <HeroSection />
      <LazySection component={() => import("@/components/TestimonialsSection")} minHeight="700px" rootMargin="300px" />
      <LazySection component={() => import("@/components/MentorSection")} minHeight="650px" />
      <LazySection component={() => import("@/components/WhatYouGet")} minHeight="700px" />
      <LazySection component={() => import("@/components/CurriculumSection")} minHeight="650px" />
      <LazySection component={() => import("@/components/ForYouSection")} minHeight="500px" />
      <LazySection component={() => import("@/components/FAQSection")} minHeight="650px" />
      <LazySection component={() => import("@/components/CTASection")} minHeight="400px" />

      <a
        href="/apply"
        className="fixed inset-x-3 bottom-3 z-[60] flex items-center justify-center rounded-full bg-[#7B5BB5] px-6 py-4 text-[14px] font-bold text-white shadow-[0_16px_50px_rgba(51,35,78,0.48)] md:hidden"
      >
        Apply For A Fit Call
      </a>
    </div>
  );
}
