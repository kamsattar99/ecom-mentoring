# GTmetrix Report Findings - May 5, 2026

## Scores
- Performance: 31% (Grade E)
- Structure: 95%
- LCP: 4.8s (target: <1.2s)
- TBT: 5.4s (target: <150ms) - CRITICAL
- FCP: 2.5s (target: <0.9s)  
- CLS: 0.04 (Good)
- Speed Index: 3.3s
- Time to Interactive: 11.2s
- Fully Loaded: 11.2s

## Page Details
- Total Page Size: 688KB (1.36MB uncompressed)
- Total Requests: 38
- Breakdown: IMG 205KB, JS 146KB, Font 107KB, Other 105KB, HTML 103KB

## Top Issues (Priority Order)
1. **HIGH: Avoid long main-thread tasks (TBT)** - 8 long tasks found
   - Main-thread busy for 7.2s
   - 315ms spent executing JavaScript
2. **MED-LOW: Avoid excessive DOM size (TBT)** - 997 elements
3. **MED-LOW: Serve static assets with efficient cache policy** - 141KB savings
4. **LOW: Allow back/forward cache restoration** - 1 failure
5. **LOW: Reduce unused JavaScript (LCP)** - 104KB savings
6. **LOW: Reduce JavaScript execution time (TBT)** - 315ms
7. **LOW: Avoid chaining critical requests (FCP/LCP)** - 2 chains
8. **LOW: Properly size images** - 117KB savings
9. **N/A: Reduce impact of third-party code (TBT)** - 419KB total

## Waterfall Key Observations
- vendor-react takes 1.3s to load (59.2KB)
- vendor-motion takes 387ms (37.1KB) - loaded lazily but still contributes to TBT
- All lazy chunks (PainPoints, WhatYouGet, Curriculum, Testimonials, ForYou, FAQ, CTA) load 330-467ms each
- 4 Shopify dashboard images from CloudFront (26-35KB each)
- 3 font files from fonts.gstatic.com (21-61KB)
- favicon returns 307 redirect twice (ecom-mentoring-footer-lo... 307, favicon-300x300_400b856... 307)
- sonner.js 33.8KB loaded

## Root Causes of TBT 5.4s
1. All lazy-loaded sections trigger simultaneously on scroll → massive JS execution burst
2. 997 DOM elements = too many nodes being created at once
3. vendor-react 59KB + all section chunks = heavy main-thread work
4. framer-motion animations in lazy sections still execute on main thread

## Action Plan
1. Use requestIdleCallback or staggered IntersectionObserver to load sections one at a time
2. Reduce DOM nodes - simplify component markup
3. Remove framer-motion entirely from remaining sections or replace with CSS
4. Fix favicon 307 redirects
5. Properly size images (117KB savings)
