import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavaBar() {
  const pathname = usePathname();

  return (
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
  )
}