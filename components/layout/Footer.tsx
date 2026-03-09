"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12 relative">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-white text-lg font-semibold">Celio.dev</h3>
          <p className="mt-3 text-sm text-gray-400">
            Développeur Web & Concepteur d’Applications spécialisé dans les applications modernes et performantes.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition">À propos</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projets</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Me suivre</h4>
          <div className="flex gap-4">
            <a href="https://github.com/" className="hover:text-white transition"><Github /></a>
            <a href="https://linkedin.com/" className="hover:text-white transition"><Linkedin /></a>
            <a href="mailto:email@email.com" className="hover:text-white transition"><Mail /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Celio.dev — Tous droits réservés
      </div>
      <a
        href="#"
        className="absolute right-6 bottom-6 p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </a>
    </footer>
  );
}