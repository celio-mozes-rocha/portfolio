export interface Experience {
  title: string;
  company?: string;
  period: string;
  description: string;
  tech?: string[];
}

export interface ExperienceSection {
  sectionTitle: string;
  experiences: Experience[];
}

// Données
export const experienceData: ExperienceSection[] = [
  {
    sectionTitle: "Formation & Projets collaboratifs",
    experiences: [
      {
        title: "Concepteur Développeur d’Applications – Titre RNCP Niveau 6",
        company: "(projet de groupe)",
        period: "Mars - Juin 2025",
        description:
          "Projet Full Stack collaboratif : application de gestion de rendez-vous pour le milieu hospitalier.",
        tech: [
          "React",
          "TypeScript",
          "Node.js",
          "GraphQL",
          "PostgreSQL",
          "Docker",
        ],
      },
      {
        title: "Developpeur Web et Web mobile full-stack – Titre RNCP Niveau 5",
        company: "(projet de groupe)",
        period: "Septembre 2024 Mars 2025",
        description:
          "Projet Full Stack collaboratif : application de gestion de rendez-vous pour le milieu hospitalier.",
        tech: [
          "React",
          "TypeScript",
          "Node.js",
          "GraphQL",
          "PostgreSQL",
          "Docker",
        ],
      },
    ],
  },
  {
    sectionTitle: "Projets personnels (Post-formation)",
    experiences: [
      {
        title: "Planétarium",
        period: "Janvier 2026 - ",
        description:
          "Visualisation animée du ciel avec Canvas, optimisation des performances et intégration API OpenStreetMap.",
        tech: [
          "React",
          "TypeScript",
          "Node.js",
          "Canvas API",
          "Tailwind",
          "Docker",
        ],
      },
      {
        title: "Jeu d’échecs interactif",
        period: "Décembre 2025 - ",
        description:
          "Jeu interactif avec chess.js, gestion des coups légaux, historique et détection échec/échec et mat.",
        tech: ["React", "TypeScript", "chess.js", "Tailwind", "Docker"],
      },
    ],
  },
  {
    sectionTitle: "Expériences professionnelles antérieures",
    experiences: [
      {
        title: "Administrateur fonctionnel (intranet)",
        company: "Carrefour",
        period: "2007 – 2024",
        description:
          "Coordination d’équipes, optimisation des processus internes, gestion des relations clients et partenaires.",
      },
    ],
  },
];
