"""
Replace framer-motion usage with CSS-based IntersectionObserver animations.
This eliminates the 115KB framer-motion bundle from lazy-loaded sections.

Strategy:
- motion.div with whileInView → regular div with CSS class that animates on mount
- Since these sections are already lazy-loaded via IntersectionObserver (LazySection),
  they only render when visible. So we can just use CSS entrance animations on mount.
- AnimatePresence for FAQ/Curriculum accordion → CSS height transitions
"""

import re
import os

files = [
    "client/src/components/AtoZSystem.tsx",
    "client/src/components/CTASection.tsx",
    "client/src/components/ForYouSection.tsx",
    "client/src/components/PainPoints.tsx",
    "client/src/components/TestimonialsSection.tsx",
    "client/src/components/WhatYouGet.tsx",
]

for filepath in files:
    full_path = os.path.join("/home/ubuntu/ecom-mentoring", filepath)
    with open(full_path, "r") as f:
        content = f.read()
    
    # Remove framer-motion import
    content = re.sub(r'import\s*\{[^}]*\}\s*from\s*"framer-motion";\n?', '', content)
    
    # Replace <motion.div with <div and </motion.div> with </div>
    # Also remove initial, whileInView, viewport, transition, animate, exit props
    content = content.replace("<motion.div", "<div")
    content = content.replace("</motion.div>", "</div>")
    content = content.replace("<motion.p", "<p")
    content = content.replace("</motion.p>", "</p>")
    content = content.replace("<motion.span", "<span")
    content = content.replace("</motion.span>", "</span>")
    content = content.replace("<motion.section", "<section")
    content = content.replace("</motion.section>", "</section>")
    
    # Remove motion-specific props (multi-line aware)
    # initial={{ ... }}
    content = re.sub(r'\s*initial=\{\{[^}]*\}\}', '', content)
    content = re.sub(r'\s*initial=\{[^}]*\}', '', content)
    # whileInView={{ ... }}
    content = re.sub(r'\s*whileInView=\{\{[^}]*\}\}', '', content)
    # viewport={{ ... }}
    content = re.sub(r'\s*viewport=\{\{[^}]*\}\}', '', content)
    # transition={{ ... }}  - handle nested objects
    content = re.sub(r'\s*transition=\{\{[^}]*\}\}', '', content)
    # animate={{ ... }}
    content = re.sub(r'\s*animate=\{\{[^}]*\}\}', '', content)
    # exit={{ ... }}
    content = re.sub(r'\s*exit=\{\{[^}]*\}\}', '', content)
    
    with open(full_path, "w") as f:
        f.write(content)
    
    print(f"✓ Processed {filepath}")

print("\nDone! Removed framer-motion from 6 components.")
