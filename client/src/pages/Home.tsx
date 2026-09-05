import StickyApplicationCta from "@/components/StickyApplicationCta";
import HeroSection from "@/components/HeroSection";
import { useRef } from "react";
import TestimonialsSection from "@/components/TestimonialsSection";
import MentorSection from "@/components/MentorSection";
import WhatYouGet from "@/components/WhatYouGet";
import CurriculumSection from "@/components/CurriculumSection";
import ForYouSection from "@/components/ForYouSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import {
  HOME_FEATURES,
  useHomepageReveals,
  useReducedMotion,
} from "@/hooks/useHomepageMotion";

export default function Home() {
  const rootRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const motionEnabled = HOME_FEATURES.motion && !reducedMotion;

  useHomepageReveals(rootRef, motionEnabled);

  return (
    <main
      id="main-content"
      ref={rootRef}
      className={`homepage-upgrade min-h-screen overflow-x-clip bg-[#0F0E13] ${
        HOME_FEATURES.stickyMobileCta ? "pb-[74px] md:pb-0" : ""
      } ${motionEnabled ? "home-motion-enabled" : "home-motion-disabled"}`}
      data-home-motion={motionEnabled ? "on" : "off"}
    >
      <HeroSection />
      <TestimonialsSection />
      <MentorSection />
      <WhatYouGet />
      <CurriculumSection />
      <ForYouSection />
      <FAQSection />
      <CTASection />

      {HOME_FEATURES.stickyMobileCta && <StickyApplicationCta />}
    </main>
  );
}
