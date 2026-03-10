"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col gap-6 scroll-mt-24"
    >
      <h2 className="text-2xl font-bold text-sky-400">
        A propos de moi
      </h2>

      <p className="text-gray-400">
        Développeur web passionné par la création d'applications modernes
        avec React, Next.js et Node.js.
      </p>
    </motion.section>
  );
}