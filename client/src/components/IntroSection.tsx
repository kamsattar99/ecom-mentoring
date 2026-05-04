import { motion } from "framer-motion";

const pillars = [
  {
    title: "Built on results",
    description: "No more guessing. With our system, you follow a proven framework that has generated over £30M+ in student revenue.",
    accent: true,
  },
  {
    title: "Powered by mentors",
    description: "Work directly with experienced operators who actively run profitable stores — not retired theorists.",
    accent: false,
  },
  {
    title: "Designed for scale",
    description: "From product research to paid ads to scaling — every stage is mapped, measured, and mentored.",
    accent: false,
  },
];

// Simple line-art style SVG illustrations
function ResultsIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-[140px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bar chart illustration */}
      <rect x="30" y="90" width="20" height="40" rx="4" fill="#583E8D" opacity="0.3" />
      <rect x="60" y="70" width="20" height="60" rx="4" fill="#583E8D" opacity="0.4" />
      <rect x="90" y="50" width="20" height="80" rx="4" fill="#583E8D" opacity="0.6" />
      <rect x="120" y="30" width="20" height="100" rx="4" fill="#583E8D" opacity="0.8" />
      <rect x="150" y="15" width="20" height="115" rx="4" fill="#583E8D" />
      {/* Trend line */}
      <path d="M40 85 L70 65 L100 45 L130 25 L160 12" stroke="#17191c" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
      {/* Arrow */}
      <path d="M155 10 L162 8 L158 15" stroke="#17191c" strokeWidth="2" opacity="0.4" />
    </svg>
  );
}

function MentorIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-[140px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Two people / handshake */}
      <circle cx="70" cy="50" r="18" stroke="#17191c" strokeWidth="1.5" opacity="0.4" />
      <circle cx="70" cy="44" r="7" stroke="#17191c" strokeWidth="1.5" opacity="0.4" />
      <path d="M55 68 C55 58 85 58 85 68" stroke="#17191c" strokeWidth="1.5" opacity="0.4" />
      <circle cx="130" cy="50" r="18" stroke="#17191c" strokeWidth="1.5" opacity="0.4" />
      <circle cx="130" cy="44" r="7" stroke="#17191c" strokeWidth="1.5" opacity="0.4" />
      <path d="M115 68 C115 58 145 58 145 68" stroke="#17191c" strokeWidth="1.5" opacity="0.4" />
      {/* Connection line */}
      <path d="M88 50 L112 50" stroke="#17191c" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
      {/* Chat bubbles */}
      <rect x="55" y="85" width="40" height="20" rx="10" stroke="#17191c" strokeWidth="1.5" opacity="0.3" />
      <rect x="105" y="95" width="40" height="20" rx="10" stroke="#17191c" strokeWidth="1.5" opacity="0.3" />
      <circle cx="68" cy="95" r="2" fill="#17191c" opacity="0.3" />
      <circle cx="75" cy="95" r="2" fill="#17191c" opacity="0.3" />
      <circle cx="82" cy="95" r="2" fill="#17191c" opacity="0.3" />
    </svg>
  );
}

function ScaleIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-[140px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rocket */}
      <path d="M100 30 L108 55 L100 50 L92 55 Z" stroke="#17191c" strokeWidth="1.5" opacity="0.5" />
      <ellipse cx="100" cy="65" rx="10" ry="15" stroke="#17191c" strokeWidth="1.5" opacity="0.5" />
      <path d="M90 70 L85 80" stroke="#17191c" strokeWidth="1.5" opacity="0.3" />
      <path d="M110 70 L115 80" stroke="#17191c" strokeWidth="1.5" opacity="0.3" />
      {/* Stars / sparkles */}
      <path d="M140 40 L142 44 L146 46 L142 48 L140 52 L138 48 L134 46 L138 44 Z" stroke="#17191c" strokeWidth="1" opacity="0.3" />
      <path d="M60 60 L61 63 L64 64 L61 65 L60 68 L59 65 L56 64 L59 63 Z" stroke="#17191c" strokeWidth="1" opacity="0.3" />
      {/* Trail */}
      <path d="M97 80 L95 95 L93 110" stroke="#17191c" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
      <path d="M103 80 L105 95 L107 110" stroke="#17191c" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
      <path d="M100 82 L100 115" stroke="#17191c" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
    </svg>
  );
}

const illustrations = [ResultsIllustration, MentorIllustration, ScaleIllustration];

export default function IntroSection() {
  return (
    <section className="py-[80px] md:py-[120px] bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[640px] mx-auto mb-16"
        >
          <h2 className="font-serif text-[clamp(36px,4vw,52px)] leading-[1.1] tracking-[-0.015em] text-[#17191c]">
            A new kind of ecom mentorship
          </h2>
        </motion.div>

        {/* Three cards — first one larger with accent bg */}
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-5">
          {pillars.map((pillar, i) => {
            const Illustration = illustrations[i];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-7 rounded-[24px] flex flex-col ${
                  pillar.accent
                    ? "bg-[#f8ebe0]"
                    : "bg-[#f4f4f5]"
                }`}
              >
                <h3 className="text-[17px] font-medium text-[#17191c] mb-2">
                  {pillar.title}
                </h3>
                <div className="flex-1 flex items-center justify-center py-6">
                  <Illustration />
                </div>
                <p className="text-[14px] leading-[1.5] text-[#4c4c4c]">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
