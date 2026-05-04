import { motion } from "framer-motion";
import { Video, MessageSquare, FileText, Users, BarChart3, Headphones } from "lucide-react";

const deliverables = [
  {
    icon: Video,
    title: "Weekly 1:1 Calls",
    description: "Personal video calls with your mentor to review progress, troubleshoot issues, and plan next moves.",
  },
  {
    icon: MessageSquare,
    title: "Direct Chat Access",
    description: "Message your mentor anytime. Get answers within hours, not days. No waiting for the next group call.",
  },
  {
    icon: FileText,
    title: "Proven SOPs & Templates",
    description: "Plug-and-play standard operating procedures for every stage — from product research to scaling ads.",
  },
  {
    icon: Users,
    title: "Private Community",
    description: "Connect with other serious operators. Share wins, get feedback, and build your network.",
  },
  {
    icon: BarChart3,
    title: "Ad Account Reviews",
    description: "We look at your actual data and tell you exactly what to change. No guessing, just decisions backed by numbers.",
  },
  {
    icon: Headphones,
    title: "Lifetime Access to Resources",
    description: "All recordings, templates, and frameworks — yours forever. Revisit anything as your business evolves.",
  },
];

export default function WhatYouGet() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 energy-line" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#06B6D4] mb-4">
            What's Included
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl">
            Everything You Need to{" "}
            <span className="gradient-text">Win</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            No filler modules. No fluff. Just the tools, access, and guidance that actually move the needle.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deliverables.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-lg border border-border/40 bg-secondary/10 hover:border-[#2563EB]/30 hover:bg-[#2563EB]/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#2563EB]/10 to-[#06B6D4]/10 border border-[#2563EB]/20 flex items-center justify-center mb-4 group-hover:border-[#2563EB]/50 transition-colors">
                <item.icon size={18} className="text-[#06B6D4]" />
              </div>
              <h3 className="font-semibold text-base text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
