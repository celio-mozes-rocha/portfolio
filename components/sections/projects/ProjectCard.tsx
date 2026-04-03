"use client";

import { FiExternalLink } from "react-icons/fi";
import { ProjectsType } from "@/app/types/projects";

export default function ProjectCard({ proj }: { proj: ProjectsType }) {
  return (<>
    {/* image */}
    <img
      src={proj.image}
      alt={proj.title}
      className="w-full md:w-50 rounded-md opacity-80 group-hover:opacity-100 transition mt-0"
    />

    {/* texte */}
    <div className="flex flex-col gap-3 md:w-142">
      <h3 className="text-xl font-semibold group-hover:text-sky-300 transition">
        {proj.title}
      </h3>

      <p className="text-gray-400 text-[clamp(0.875rem,1.5vw,1rem)]">
        {proj.description}
      </p>

      <div className="flex flex-wrap gap-2 text-xs text-gray-500">
        {proj.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-sky-600/30 text-white/80 px-3 py-1 rounded-2xl"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="group flex gap-4 text-sm">
        {proj.github !== "#" && (
          <a
            href={proj.github}
            rel="noopener noreferrer"
            className="flex items-center hover:text-sky-400"
            target="_blank"
          >
            GitHub
            <FiExternalLink className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        )}
        {proj.demo !== "#" && (
          <a
            href={proj.demo}
            rel="noopener noreferrer"
            className="flex items-center hover:text-sky-400"
            target="_blank"
          >
            Demo
            <FiExternalLink className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        )}
      </div>
    </div>
  </>
  )
}