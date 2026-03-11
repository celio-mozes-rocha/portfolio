"use client"
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screenb scroll-mt-24 flex flex-col gap-6">

      <h2 className="text-2xl font-bold text-sky-400">
        Mes expériences
      </h2>

      <p className="text-gray-400">
        Page bientôt disponible ⏰
      </p>
    </motion.section>
  )
}