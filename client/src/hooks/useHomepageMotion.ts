import { RefObject, useEffect, useState } from "react";

const flag = (value: string | undefined, fallback: boolean) => {
  if (value === undefined) return fallback;
  return value !== "0" && value !== "false";
};

export const HOME_FEATURES = {
  motion: flag(import.meta.env.VITE_HOME_MOTION, true),
  heroTilt: flag(import.meta.env.VITE_HOME_HERO_TILT, true),
  heroObjects: flag(import.meta.env.VITE_HOME_HERO_OBJECTS, true),
  stickyMobileCta: flag(import.meta.env.VITE_HOME_STICKY_MOBILE_CTA, true),
} as const;

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function useHomepageReveals(rootRef: RefObject<HTMLElement | null>, enabled: boolean) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !enabled || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    root.classList.add("home-motion-ready");
    const observed = new WeakSet<Element>();
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    const observe = (scope: ParentNode) => {
      const elements = [
        ...(scope instanceof Element && scope.matches("[data-reveal]") ? [scope] : []),
        ...Array.from(scope.querySelectorAll?.("[data-reveal]") ?? []),
      ];
      elements.forEach((element, index) => {
        if (observed.has(element)) return;
        observed.add(element);
        const node = element as HTMLElement;
        if (!node.style.getPropertyValue("--reveal-delay")) {
          node.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 60}ms`);
        }
        revealObserver.observe(element);
      });
    };

    observe(root);
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) observe(node);
        });
      });
    });
    mutationObserver.observe(root, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
      root.classList.remove("home-motion-ready");
    };
  }, [enabled, rootRef]);
}

