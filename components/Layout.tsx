import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto flex">

        {/* COLONNE GAUCHE */}
        <aside className="basis-2/5 h-screen sticky top-0 flex flex-col justify-between px-12 py-16">

          {/* HAUT */}
          {/* avatar */}
          <div>
            <img
              src="/images/ProfilLinkdin-Moi.png"
              className="w-40 rounded-e-xs mb-6"
            />

            <h1 className="text-4xl font-bold">
              Célio ROCHA
            </h1>

            <h2 className="text-xl text-sky-400 mt-2">
              Développeur Web
            </h2>

            <p className="text-gray-400 mt-4 max-w-sm">
              Je développe des applications web modernes avec React, Next.js et Node.js.
            </p>
          </div>

          {/* NAVIGATION */}
          <nav className="flex flex-col gap-3 text-gray-400 text-sm">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          {/* FOOTER */}
          <footer className="text-sm text-gray-500">
            <div className="flex gap-4 mb-3">
              <a href="https://github.com/" className="hover:text-white transition"><FaGithub size={35} /></a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-white transition" ><FaLinkedin size={35} /></a>
              <a href="mailto:mail@example.com" className="hover:text-white transition"><HiOutlineMail size={35} /></a>
            </div>
            <hr /><br />
            <p>
              © {new Date().getFullYear()} Célio MOZES ROCHA - Tous les droits réservés
            </p>

          </footer>
        </aside>

        {/* COLONNE DROITE */}
        <div className="basis-3/5 px-12 py-24 flex flex-col">
          {children}
        </div>
      </div>
    </main>
  );
}