"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screenb scroll-mt-24 flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-sky-400">Projets</h2>

      {projects.map((proj, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.25 }}
          viewport={{ once: true }}
          className="group flex flex-col md:flex-row gap-6 items-start hover:bg-sky-900/30 p-4 rounded-lg transition"
        >

          <ProjectCard key={idx} proj={proj} />
        </motion.div>
      ))}
    </motion.section>
  );
}
