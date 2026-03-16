"use client"
import { motion } from "framer-motion";
import { experienceData } from "@/data/experiencesData";
import ExperienceCard from "./ExperienceCard";

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
        Expériences
      </h2>
      {experienceData.map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.25 }}
          viewport={{ once: true, }}
        >
          <h3 className="ml-6 text-xl  text-sky-300 mb-6">{section.sectionTitle}</h3>
          <div className="ml-6 flex flex-wrap gap-8 mt-1 text-xs">
            {section.experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  )
}