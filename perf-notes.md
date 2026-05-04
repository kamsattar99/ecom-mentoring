# Performance Optimization Notes

## Key Issues from Lighthouse
1. **FCP 3.5s** - Render-blocking Google Fonts stylesheet
2. **LCP 6.9s** - Large hero images from CloudFront CDN, no preload hints
3. **TBT 770ms** - framer-motion heavy, all pages bundled together (no code splitting)
4. **CLS 0.108** - Layout shifts from images without dimensions
5. **Speed Index 5.0s** - Combination of above

## Optimization Plan
1. Font loading: Switch from render-blocking `<link>` to `font-display: swap` + preload key fonts
2. Image optimization: Add `loading="lazy"` to below-fold images, `fetchpriority="high"` to LCP image, add width/height
3. Code splitting: Lazy load non-homepage routes (LearnMore, Apply, PrivacyPolicy, etc.)
4. Reduce JS: framer-motion is used everywhere but could be reduced for initial load
5. Preconnect to CDN domains
6. Add Vite build rollupOptions for manual chunks (framer-motion separate)
