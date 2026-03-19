"use client";

import { paragraphs } from "@/data/texts";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screenb scroll-mt-24 flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-sky-400">A propos de moi</h2>
      <div className="max-w-full text-[clamp(0.875rem,1.5vw,1rem)] text-gray-400 leading-relaxed space-y-4">
        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </motion.section>
  );
}
