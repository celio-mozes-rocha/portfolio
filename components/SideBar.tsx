"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function SideBar() {

  const pathname = usePathname();

  return (
    <aside className="basis-2/5 h-screen sticky top-0 flex flex-col justify-between px-12 py-16">

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

      <nav className="flex flex-col gap-4 text-sm">
        <Link href="/about" className={`hover:text-white flex items-center gap-3 group ${pathname === "/about" ? "text-white" : "text-gray-400"}`}>
          <span
            className={`h-0.5 transition-all duration-300 ${pathname === "/about"
              ? "w-8 bg-sky-400"
              : "w-0 bg-sky-400 group-hover:w-8"
              }`}
          />
          About
        </Link>
        <Link href="/projects" className={`hover:text-white flex items-center gap-3 group ${pathname === "/projects" ? "text-white" : "text-gray-400"}`}>
          <span
            className={`h-0.5 transition-all duration-300 ${pathname === "/projects"
              ? "w-8 bg-sky-400"
              : "w-0 bg-sky-400 group-hover:w-8"
              }`}
          />
          Projects
        </Link>
        <Link href="/contact" className={`hover:text-white flex items-center gap-3 group ${pathname === "/contact" ? "text-white" : "text-gray-400"}`}>
          <span
            className={`h-0.5 transition-all duration-300 ${pathname === "/contact"
              ? "w-8 bg-sky-400"
              : "w-0 bg-sky-400 group-hover:w-8"
              }`}
          />
          Contact
        </Link>

      </nav>
      <footer className="text-sm text-gray-500">
        <div className="flex gap-4 mb-3">
          <a href="https://github.com">
            <FaGithub size={35} />
          </a>
          <a href="https://linkedin.com">
            <FaLinkedin size={35} />
          </a>
          <a href="mailto:mail@example.com">
            <HiOutlineMail size={35} />
          </a>
        </div>
        <hr /><br />
        <p>
          © {new Date().getFullYear()} Célio MOZES ROCHA
        </p>
      </footer>
    </aside>
  );
}