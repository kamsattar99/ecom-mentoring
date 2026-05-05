import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import LogoBar from "@/components/LogoBar";

// Lazy load below-fold sections to reduce initial bundle on mobile
const AtoZSystem = lazy(() => import("@/components/AtoZSystem"));
const PainPoints = lazy(() => import("@/components/PainPoints"));
const WhatYouGet = lazy(() => import("@/components/WhatYouGet"));
const CurriculumSection = lazy(() => import("@/components/CurriculumSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ForYouSection = lazy(() => import("@/components/ForYouSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <LogoBar />
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <AtoZSystem />
        <PainPoints />
        <WhatYouGet />
        <CurriculumSection />
        <TestimonialsSection />
        <ForYouSection />
        <FAQSection />
        <CTASection />
      </Suspense>
    </div>
  );
}
