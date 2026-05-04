import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoBar from "@/components/LogoBar";
import IntroSection from "@/components/IntroSection";
import PainPoints from "@/components/PainPoints";
import StatsSection from "@/components/StatsSection";
import WhatYouGet from "@/components/WhatYouGet";
import CurriculumSection from "@/components/CurriculumSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ForYouSection from "@/components/ForYouSection";
import FeaturedIn from "@/components/FeaturedIn";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <LogoBar />
      <IntroSection />
      <PainPoints />
      <StatsSection />
      <WhatYouGet />
      <CurriculumSection />
      <TestimonialsSection />
      <FeaturedIn />
      <ForYouSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
