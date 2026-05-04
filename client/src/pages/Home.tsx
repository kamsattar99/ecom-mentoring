import HeroSection from "@/components/HeroSection";
import AtoZSystem from "@/components/AtoZSystem";
import LogoBar from "@/components/LogoBar";
import PainPoints from "@/components/PainPoints";
import WhatYouGet from "@/components/WhatYouGet";
import CurriculumSection from "@/components/CurriculumSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ForYouSection from "@/components/ForYouSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <LogoBar />
      <AtoZSystem />
      <PainPoints />
      <WhatYouGet />
      <CurriculumSection />
      <TestimonialsSection />
      <ForYouSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
