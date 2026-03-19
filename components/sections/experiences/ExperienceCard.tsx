"use client";

import { motion } from "framer-motion";
import type { ExperiencesType } from "@/data/experiencesData";

export default function ExperienceCard({ exp }: { exp: ExperiencesType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-6"
    >
      <div className="w-35 flex shrink-0 text-gray-400 text-[clamp(0.875rem,1.5vw,1rem)] mt-1">
        {exp.period}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-lg">
          {exp.title} {exp.company ? `– ${exp.company}` : ""}
        </h3>
        <p className="text-gray-400 text-[clamp(0.875rem,1.5vw,1rem)]">
          {exp.description}
        </p>

        {exp.type === "job" && (
          <h3 className="list-disc pl-5 space-y-1 text-[clamp(0.875rem,1.5vw,1rem)] text-slate-400">
            <ul>
              {exp.responsibilities.map((r, i) => (
                <li
                  className="relative pl-3 before:content-['⬩'] before:absolute before:left-0 before:text-sky-400 text-[16px]"
                  key={i}
                >
                  {r}
                </li>
              ))}
            </ul>
          </h3>
        )}

        {exp.type === "education" && (
          <h3 className="list-disc pl-5 space-y-1 text-sm text-slate-400">
            <ul>
              {exp.learnings.map((l, i) => (
                <li
                  className="relative pl-3 before:content-['⬩'] before:absolute before:left-0 before:text-sky-400 text-[16px]"
                  key={i}
                >
                  {l}
                </li>
              ))}
            </ul>
          </h3>
        )}

        {exp.type === "project" && (
          <h3 className="list-disc pl-5 space-y-1 text-sm text-slate-400">
            <ul>
              {exp.collaboration?.map((c, i) => (
                <li
                  className="relative pl-3 before:content-['⬩'] before:absolute before:left-0 before:text-sky-400 text-[16px]"
                  key={i}
                >
                  {c}
                </li>
              ))}
            </ul>
          </h3>
        )}

        {exp.tech && (
          <div className="flex flex-wrap gap-2 mt-1 text-xs">
            {exp.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs bg-sky-600/30 text-white/80 px-3 py-1 rounded-2xl"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
