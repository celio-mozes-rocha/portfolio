"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projetcts";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <motion.section id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screenb scroll-mt-24 flex flex-col gap-6">

      <h2 className="text-2xl font-bold text-sky-400">
        Projets
      </h2>

      {projects.map((proj, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.25 }}
          viewport={{ once: true, }}
          className="group flex flex-col md:flex-row gap-6 items-start hover:bg-sky-900/30 p-4 rounded-lg transition"
        >

          {/* image */}
          <img
            src={proj.image}
            alt={proj.title}
            className="w-full md:w-2/5 rounded-md opacity-80 group-hover:opacity-100 transition mt-0"
          />

          {/* texte */}
          <div className="flex flex-col gap-3 md:w-3/5">

            <h3 className="text-xl font-semibold group-hover:text-sky-300 transition">
              {proj.title}
            </h3>

            <p className="text-gray-400 text-[17px]">
              {proj.description}
            </p>

            <div className="flex flex-wrap gap-2 text-xs text-gray-500">
              {proj.tech.map((tech, i) => (
                <span key={i} className="text-xs bg-sky-600/30 text-white/80 px-3 py-1 rounded-2xl">
                  {tech}
                </span>
              ))}
            </div>

            <div className="group flex gap-4 text-sm">
              {proj.github !== "#" &&
                <a href={proj.github}
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-sky-400" target="_blank">
                  GitHub
                  <FiExternalLink className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              }
              {proj.demo !== "#" &&
                <a href={proj.demo}
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-sky-400" target="_blank">
                  Demo
                  <FiExternalLink className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              }
            </div>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}