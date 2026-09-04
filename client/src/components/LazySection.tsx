import { useEffect, useRef, useState, ReactNode, ComponentType, lazy, Suspense } from "react";

interface LazySectionProps {
  component: () => Promise<{ default: ComponentType }>;
  rootMargin?: string;
  minHeight?: string;
}

/**
 * Renders a lazy-loaded section only when it enters the viewport.
 * This prevents all sections from loading simultaneously and causing
 * a massive main-thread blocking burst.
 */
export default function LazySection({ component, rootMargin = "200px", minHeight = "200px" }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || isVisible) return;

    let activated = false;
    let frame = 0;
    let observer: IntersectionObserver | null = null;
    const preloadDistance = Number.parseInt(rootMargin, 10) || 0;

    const activate = () => {
      if (activated) return;
      activated = true;
      setIsVisible(true);
      observer?.disconnect();
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("resize", checkPosition);
    };

    const checkPosition = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const rect = el.getBoundingClientRect();

        // IntersectionObserver can miss a short placeholder during a fast jump.
        // Once the viewport has reached or passed it, load it unconditionally.
        if (rect.top <= window.innerHeight + preloadDistance) activate();
      });
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) activate();
      },
      { rootMargin }
    );

    observer.observe(el);
    window.addEventListener("scroll", checkPosition, { passive: true });
    window.addEventListener("resize", checkPosition);
    checkPosition();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("resize", checkPosition);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [isVisible, rootMargin]);

  useEffect(() => {
    if (!isVisible) return;
    // Use requestIdleCallback to avoid blocking main thread
    const load = () => {
      component().then((mod) => {
        setComponent(() => mod.default);
      });
    };

    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(load, { timeout: 100 });
    } else {
      setTimeout(load, 16);
    }
  }, [isVisible, component]);

  if (Component) {
    return <Component />;
  }

  return <div ref={ref} style={{ minHeight }} />;
}
