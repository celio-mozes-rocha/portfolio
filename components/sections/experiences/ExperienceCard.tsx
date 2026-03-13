"use client";

import { motion } from "framer-motion";
import { Experience } from "@/data/experiencesData";

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-6"
    >
      <div className="w-35 flex shrink-0 text-gray-400 text-[18px] mt-1">{exp.period}</div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-lg">
          {exp.title} {exp.company ? `– ${exp.company}` : ""}
        </h3>
        <p className="text-gray-400 leading-relaxed space-y-4 text-[18px]" >{exp.description}</p>
        {exp.tech && (
          <div className="flex flex-wrap gap-2 mt-1 text-xs">
            {exp.tech.map((t, i) => (
              <span key={i} className="text-xs bg-sky-600/30 text-white/80 px-3 py-1 rounded-2xl">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};