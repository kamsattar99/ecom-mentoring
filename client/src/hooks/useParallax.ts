import { useEffect, useRef, useState } from "react";

/**
 * Parallax hook: returns a translateY value based on scroll position
 * relative to the element's position in the viewport.
 * @param speed - Parallax speed factor (0.1 = subtle, 0.5 = dramatic)
 */
export function useParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Calculate how far the element is from center of viewport
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;
            const distance = elementCenter - viewportCenter;
            setOffset(distance * speed);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offset };
}
