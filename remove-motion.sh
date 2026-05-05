#!/bin/bash
# Script to check which files use framer-motion and what patterns they use
cd /home/ubuntu/ecom-mentoring

# Show unique motion patterns used
echo "=== Motion patterns used ==="
grep -ohP 'initial=\{[^}]+\}' client/src/components/AtoZSystem.tsx client/src/components/CTASection.tsx client/src/components/CurriculumSection.tsx client/src/components/FAQSection.tsx client/src/components/ForYouSection.tsx client/src/components/PainPoints.tsx client/src/components/TestimonialsSection.tsx client/src/components/WhatYouGet.tsx | sort -u

echo ""
echo "=== Transition patterns ==="
grep -ohP 'transition=\{[^}]+\}' client/src/components/AtoZSystem.tsx client/src/components/CTASection.tsx client/src/components/CurriculumSection.tsx client/src/components/FAQSection.tsx client/src/components/ForYouSection.tsx client/src/components/PainPoints.tsx client/src/components/TestimonialsSection.tsx client/src/components/WhatYouGet.tsx | sort -u

echo ""
echo "=== AnimatePresence usage ==="
grep -l "AnimatePresence" client/src/components/*.tsx
