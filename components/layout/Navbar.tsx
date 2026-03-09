import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/" className="text-xl font-bold tracking-tight">
          Celio.dev
        </Link>

        <ul className="flex gap-8 text-sm font-medium text-gray-600">
          <li>
            <Link href="#about" className="hover:text-black transition-colors">
              À propos
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-black transition-colors">
              Projets
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-black transition-colors">
              Contact
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}