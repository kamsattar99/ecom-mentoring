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
    title: "Lifetime Access",
    description: "All recordings, templates, and frameworks — yours forever. Revisit anything as your business evolves.",
  },
];

export default function WhatYouGet() {
  return (
    <section className="py-[80px] md:py-[120px] bg-[#f7f7f8]">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[640px] mx-auto mb-16"
        >
          <p className="text-[14px] text-[#583E8D] font-medium mb-4">What's included</p>
          <h2 className="font-serif text-[clamp(36px,4vw,52px)] leading-[1.1] tracking-[-0.015em] text-[#17191c] mb-5">
            Everything you need to succeed
          </h2>
          <p className="text-[16px] leading-[1.5] text-[#4c4c4c]">
            No filler modules. No fluff. Just the tools, access, and guidance that actually move the needle.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deliverables.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-7 rounded-[20px] bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300"
              style={{
                boxShadow: "rgba(4, 23, 43, 0.03) 0px 0px 0px 1px",
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#EDE8F5] flex items-center justify-center mb-5">
                <item.icon size={20} className="text-[#583E8D]" />
              </div>
              <h3 className="text-[16px] font-medium text-[#17191c] mb-2">
                {item.title}
              </h3>
              <p className="text-[14px] leading-[1.5] text-[#777b86]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
