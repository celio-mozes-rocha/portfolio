"use client";

import { paragraphs } from "@/data/texts";
import { reverse } from "dns";
import { motion } from "framer-motion";
import Image from "next/image"

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="scroll-mt-24 flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-sky-400">A propos de moi</h2>
      <div className="max-w-full text-[clamp(0.875rem,1.5vw,1rem)] text-gray-400 leading-relaxed space-y-4">
        {/* Photo en coin haut gauche */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1, y: [0, 2, -2, 0] }}
          viewport={{ once: true }}
          className="mb-6 lg:float-left lg:mr-6 lg:mb-0 w-32 h-32 lg:w-40 lg:h-40 overflow-hidden shadow-lg">
          <Image
            src="/images/photo-500x500.png"
            alt="Photo de profil"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </motion.section>
  );
}
