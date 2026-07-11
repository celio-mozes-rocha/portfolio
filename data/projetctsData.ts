export const projects = [
  {
    title: "Application Météo Android",
    description:
      "Application mobile météo développée en Kotlin avec Jetpack Compose. Elle récupère les données météorologiques via l’API OpenWeather et affiche les conditions actuelles ainsi que les prévisions. Architecture MVVM avec gestion du timezone local, recherche de villes via Nominatim et interface dynamique avec icônes météo personnalisées.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Retrofit",
      "OpenWeather API",
      "Nominatim API",
    ],
    github: "https://github.com/celio-mozes-rocha/AppMeteo",
    demo: "#",
    image: "/images/weather-app.png",
  },
  {
    title: "Planétarium Interactif",
    description:
      "Application de visualisation animée du ciel développée avec Canvas. Elle calcule et affiche en temps réel la position des astres selon la localisation de l’utilisateur. Carte interactive OpenStreetMap avec recherche via l’API Nominatim.",
    tech: ["React", "TypeScript", "Node.js", "Canvas API"],
    github: "https://github.com/celio-mozes-rocha/planetarium-2D",
    demo: "https://planetarium.celio-mozes.fr",
    image: "/images/planetarium2.png",
  },
  {
    title: "Jeu d'échecs en ligne",
    description:
      "Projet personnel d’implémentation d'un jeu d’échecs interactif avec validation des règles via chess.js. Version multijoueur en temps réel utilisant WebSockets pour synchroniser les coups entre joueurs (en cours).",
    tech: ["React", "TypeScript", "Node.js", "chess.js", "Socket.io"],
    github: "https://github.com/celio-mozes-rocha/ChessLite",
    demo: "#",
    image: "/images/Chess.png",
  },
  {
    title: "Application gestion de rendez-vous",
    description:
      "Application Full Stack dédiée au milieu hospitalier. Développée en équipe dans le cadre du titre Concepteur Développeur d’Applications (niveau 6), l’application repose sur une architecture en micro-services et permet la gestion des patients, des praticiens et des plannings.",
    tech: ["React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "Docker"],
    github:
      "https://github.com/celio-mozes-rocha/CDA-Projet-2-Fork-Doctoplan/tree/main",
    demo: "#",
    image: "/images/doctoplan.png",
  },
];
