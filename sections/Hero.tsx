"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-linear-to-br from-gray-50 to-white relative">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-bold tracking-tight max-w-3xl"
      >
        Développeur Web & Concepteur d’Applications
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl"
      >
        Je développe des applications web modernes, performantes et centrées sur l’utilisateur.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex gap-4 mt-8 flex-wrap justify-center"
      >
        <a href="#projects" className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-80 transition">
          Voir mes projets
        </a>
        <a href="#contact" className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition">
          Me contacter
        </a>
      </motion.div>
      {/* Indicateur scroll */}
      <motion.div
        className="absolute bottom-8 text-gray-400 animate-bounce"
      >
      </motion.div>
    </section>
  );
}