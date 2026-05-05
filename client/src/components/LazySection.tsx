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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
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
