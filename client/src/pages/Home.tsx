import HeroSection from "@/components/HeroSection";
import { useRef } from "react";
import LazySection from "@/components/LazySection";
import { HOME_FEATURES, useHomepageReveals, useReducedMotion } from "@/hooks/useHomepageMotion";

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const motionEnabled = HOME_FEATURES.motion && !reducedMotion;

  useHomepageReveals(rootRef, motionEnabled);

  return (
    <div
      ref={rootRef}
      className={`homepage-upgrade min-h-screen overflow-x-clip bg-[#0F0E13] ${
        HOME_FEATURES.stickyMobileCta ? "pb-[74px] md:pb-0" : ""
      } ${motionEnabled ? "home-motion-enabled" : "home-motion-disabled"}`}
      data-home-motion={motionEnabled ? "on" : "off"}
    >
      <HeroSection />
      <LazySection component={() => import("@/components/TestimonialsSection")} minHeight="700px" rootMargin="300px" />
      <LazySection component={() => import("@/components/MentorSection")} minHeight="650px" />
      <LazySection component={() => import("@/components/WhatYouGet")} minHeight="700px" />
      <LazySection component={() => import("@/components/CurriculumSection")} minHeight="650px" />
      <LazySection component={() => import("@/components/ForYouSection")} minHeight="500px" />
      <LazySection component={() => import("@/components/FAQSection")} minHeight="650px" />
      <LazySection component={() => import("@/components/CTASection")} minHeight="400px" />

      {HOME_FEATURES.stickyMobileCta && (
        <a
          href="/apply"
          className="home-sticky-cta fixed inset-x-3 bottom-3 z-[60] flex min-h-12 items-center justify-center rounded-full bg-[#7B5BB5] px-6 py-3.5 text-[14px] font-bold text-white shadow-[0_16px_50px_rgba(51,35,78,0.48)] md:hidden"
        >
          Apply For A Fit Call
        </a>
      )}
    </div>
  );
}
