"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:basis-2/5 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between px-6 lg:px-12 py-8 border-b lg:border-b-0 border-slate-700">
      <div>
        <a href="/">
          {/* <img
            src="/images/photo-500x500.png"
            className="w-32 rounded-full mb-1 ml-10 border-5 border-slate-700"
          /> */}
          <h1 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold">
            Célio ROCHA
          </h1>
        </a>

        <h2 className="text-[clamp(0.8rem,2vw,1.2rem)] text-sky-400 mt-1">
          Concepteur d'applications full-stack
        </h2>

        <p className="text-[clamp(0.75rem,2vw,1rem)] text-gray-400 leading-relaxed space-y-4 mt-4 max-w-sm">
          Je développe des applications web modernes avec React, Next.js et
          Node.js.
        </p>
      </div>

      <nav className="w-50 flex flex-col text-gray-400">
        <Link
          href="/about"
          className={`hover:text-white hover:bg-slate-700 tracking-wide flex items-center gap-4 px-4 py-2 border-l-4 transition text-[clamp(0.875rem,1.5vw,1rem)] ${pathname === "/about"
            ? "border-sky-400 text-white bg-slate-700/30"
            : "border-slate-700 text-slate-400 hover:text-white hover:border-slate-400"
            }`}
        >
          A propos de moi
        </Link>
        <Link
          href="/experience"
          className={`hover:text-white hover:bg-slate-700 tracking-wide flex items-center gap-4 px-4 py-2 border-l-4 transition text-[clamp(0.875rem,1.5vw,1rem)] ${pathname === "/experience"
            ? "border-sky-400 text-white  bg-slate-700/30"
            : "border-slate-700 text-slate-400 hover:text-white hover:border-slate-400"
            }`}
        >
          Expériences
        </Link>
        <Link
          href="/projects"
          className={`hover:text-white hover:bg-slate-700 tracking-wide flex items-center gap-4 px-4 py-2 border-l-4 transition text-[clamp(0.875rem,1.5vw,1rem)]${pathname === "/projects"
            ? "border-sky-400 text-white  bg-slate-700/30"
            : "border-slate-700 text-slate-400 hover:text-white hover:border-slate-400"
            }`}
        >
          Projets
        </Link>
        <Link
          href="/contact"
          className={`hover:text-white hover:bg-slate-700 flex items-center gap-4 px-4 py-3 border-l-4 transition text-[clamp(0.875rem,1.5vw,1rem)]  ${pathname === "/contact"
            ? "border-sky-400 text-white bg-slate-700/30"
            : "border-slate-700 text-slate-400 hover:text-white hover:border-slate-400"
            }`}
        >
          Me contacter
        </Link>
      </nav>
      <footer className="text-xs sm:text-sm text-gray-500">
        <div className="flex gap-4 mb-3">
          <a
            href="https://github.com"
            className="hover:text-white"
            target="_blank"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/c%C3%A9lio-mozes-rocha-827480333"
            className="hover:text-white"
            target="_blank"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:celio.rocha@free.fr"
            className="hover:text-white"
            target="_blank"
          >
            <HiOutlineMail size={30} />
          </a>
        </div>
        <hr />
        <br />
        <p>© {new Date().getFullYear()} Célio MOZES ROCHA</p>
        {/*         <p className="text-xs text-gray-500 mt-4">
          Deploy: {process.env.NEXT_PUBLIC_BUILD_DATE}
          {" | "}
          Commit: {process.env.NEXT_PUBLIC_GIT_COMMIT}
        </p> */}
      </footer>
    </aside>
  );
}
