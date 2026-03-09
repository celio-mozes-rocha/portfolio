export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">

        {/* Présentation */}
        <div>
          <h3 className="text-white text-lg font-semibold">
            Ton Nom
          </h3>
          <p className="mt-3 text-sm text-gray-400">
            Développeur Web & Concepteur d’Applications spécialisé dans les
            applications modernes et performantes.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">À propos</a></li>
            <li><a href="#projects" className="hover:text-white">Projets</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Réseaux */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            Me suivre
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://github.com/" className="hover:text-white">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/" className="hover:text-white">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:email@email.com" className="hover:text-white">
                Email
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Ligne de séparation */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ton Nom — Tous droits réservés
      </div>
    </footer>
  );
}