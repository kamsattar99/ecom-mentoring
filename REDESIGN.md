# Ecom Mentoring refinement

Based on GitHub main `fccf7ed`, retrieved 5 September 2026. Local branch: `codex/mentoring-redesign`.

The initial light redesign was superseded after feedback. This version preserves the live site's dark purple environment, logo, floating navigation, serif headings, animated hero, Shopify proof card, section order, all five interviews, mentor profiles, pricing and six-week curriculum.

## Improvements

- All homepage sections render immediately, so anchor links and rapid scrolls do not depend on placeholder activation or section downloads. Images below the fold retain their own lazy loading where appropriate.
- Bundled 15 previously missing assets and fixed the development storage proxy to serve local files without hosted-storage credentials.
- Added a main landmark, skip link, descriptive mobile menu button, Escape-to-close and inert hidden menus/FAQ panels.
- Restored browser zoom and responsive hero image preloads.
- Kept the existing application destination with a home link, introductory context and direct Typeform fallback, styled in the dark palette.
- Analytics loads when the existing deployment environment variables are supplied.

## Run

```sh
npx pnpm@10.4.1 install --frozen-lockfile
npm run dev
```

Production: `npm run build`, then `npm start`.

## Validation

TypeScript and full frontend/server production build pass. Compared live and local desktop screenshots. At 390px, checked page width, local images and mobile programme navigation. The Typeform application was verified to render; no application was submitted.

Local review only; not pushed or deployed.

## Refinement pass

Added a concise hero support summary, clearer mentor oversight copy, explicit 6-versus-18 private call totals and USD labels, aligned programme actions, and a full-size Shopify proof dialog with keyboard dismissal. The mobile application shortcut now appears after the hero and hides while the closing application section is visible. Mobile section spacing and entry animation timing were tightened while retaining the original design.

Verified the proof dialog and Escape dismissal, sticky CTA hidden at the hero and visible at the programme section, no horizontal overflow at 390px, and the desktop hero. TypeScript and the production build pass.
