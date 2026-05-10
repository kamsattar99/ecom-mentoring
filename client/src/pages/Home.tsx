import HeroSection from "@/components/HeroSection";
import LogoBar from "@/components/LogoBar";
import LazySection from "@/components/LazySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <LogoBar />
      <LazySection component={() => import("@/components/AtoZSystem")} minHeight="400px" rootMargin="300px" />
      <LazySection component={() => import("@/components/PainPoints")} minHeight="400px" />
      <LazySection component={() => import("@/components/OldVsNew")} minHeight="400px" />
      <LazySection component={() => import("@/components/WhatYouGet")} minHeight="400px" />
      <LazySection component={() => import("@/components/MentorshipBridge")} minHeight="200px" />
      <LazySection component={() => import("@/components/CurriculumSection")} minHeight="500px" />
      <LazySection component={() => import("@/components/TestimonialsSection")} minHeight="400px" />
      <LazySection component={() => import("@/components/ForYouSection")} minHeight="400px" />
      <LazySection component={() => import("@/components/FAQSection")} minHeight="400px" />
      <LazySection component={() => import("@/components/CTASection")} minHeight="300px" />
    </div>
  );
}
