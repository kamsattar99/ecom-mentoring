import { useEffect, useRef, useState } from "react";

/** Keep an application shortcut available after the hero without covering its CTA. */
export default function StickyApplicationCta() {
  const [visible, setVisible] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const hero = document.querySelector(".home-hero");
    const closing = document.querySelector("[data-closing-cta]");
    if (!hero) return;
    const visibility = new Map<Element, boolean>([[hero, true]]);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry =>
        visibility.set(entry.target, entry.isIntersecting)
      );
      const heroPassed = hero.getBoundingClientRect().bottom <= 0;
      const show =
        heroPassed &&
        !visibility.get(hero) &&
        (!closing || !visibility.get(closing));
      setVisible(show);
    });
    observer.observe(hero);
    if (closing) observer.observe(closing);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`home-mobile-apply md:hidden ${visible ? "is-visible" : ""}`}
      inert={!visible}
      aria-hidden={!visible}
    >
      <a ref={linkRef} href="/apply" className="home-sticky-cta">
        <span>
          Apply For A Fit Call
          <small>About 2 minutes · Application reviewed first</small>
        </span>
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
