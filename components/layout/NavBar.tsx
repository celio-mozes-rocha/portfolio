import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavBarProps } from "@/app/types/navBarProps";

export default function NavaBar({ isOpen, onClose }: NavBarProps) {
  const pathname = usePathname();

  const links = [
    { href: "/about", label: "A propos de moi" },
    { href: "/experience", label: "Expériences" },
    { href: "/projects", label: "Projets" },
    { href: "/contact", label: "Me contacter" },
  ]

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <nav
        className={`
          flex flex-col text-gray-400
          lg:static lg:translate-x-0 lg:bg-transparent lg:z-auto lg:shadow-none lg:w-auto lg:flex
          fixed top-0 right-0 h-full w-64 bg-slate-900 z-50 shadow-xl p-8 pt-16 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className={`hover:text-white hover:bg-slate-700 tracking-wide flex items-center gap-4 px-4 py-2 border-l-4 transition text-[clamp(0.875rem,1.5vw,1rem)] ${pathname === href
              ? "border-sky-400 text-white bg-slate-700/30"
              : "border-slate-700 text-slate-400 hover:text-white hover:border-slate-400"
              }`}
          >
            {label}
          </Link>
        ))}
      </nav >
    </>
  );
}