import type { ExperienceSectionType } from "@/app/types/experience";
// Données
export const experienceData: ExperienceSectionType[] = [
  {
    sectionTitle: "Formation & Projets collaboratifs",
    experiences: [
      {
        type: "education",
        title: "Concepteur Développeur d’Applications – Titre RNCP Niveau 6",
        company: "Wild Code School",
        period: "Mars - Juin 2025",
        description:
          "Projet Full Stack collaboratif : application de gestion de rendez-vous pour le milieu hospitalier. Compétences pratiquées :",

        learnings: [
          "Conception d'API REST et GraphQL",
          "Architecture Full Stack",
          "Modélisation de bases de données",
          "Travail en équipe, gestion de version avec Git et gestion de projet agile",
          "Déploiement avec Docker",
        ],
        tech: [
          "React",
          "TypeScript",
          "Node.js",
          "GraphQL",
          "SQL",
          "Docker",
          "Pratiques Devops",
        ],
      },
      {
        type: "education",
        title: "Developpeur Web et Web mobile full-stack – Titre RNCP Niveau 5",
        company: "Wild Code School",
        period: "Septembre 2024 Mars 2025",
        description:
          "Projet Full Stack collaboratif : application de géolocalisation de bornes de recharge pour voitures éléctriques (IRVE). Compétences pratiquées :",
        learnings: [
          "Conception d'API REST",
          "Architecture Full Stack",
          "Modélisation de bases de données",
          "Travail en équipe, gestion de version avec Git et gestion de projet agile",
        ],
        tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "SQL"],
      },
    ],
  },

  {
    sectionTitle: "Projets personnels (Post-formation)",
    experiences: [
      {
        type: "project",
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
        type: "project",
        title: "Jeu d’échecs interactif",
        period: "Décembre 2025 - ",
        description:
          "Jeu interactif avec chess.js, gestion des coups légaux, historique et détection échec/échec et mat.",

        tech: ["React", "TypeScript", "chess.js", "Tailwind"],
      },
    ],
  },
  {
    sectionTitle: "Expériences professionnelles récentes",
    experiences: [
      {
        type: "job",
        title: "Administrateur fonctionnel (intranet)",
        company: "Carrefour",
        period: "2007 – 2024",
        description:
          "Administration fonctionnelle d'un intranet et outils métiers.",
        responsibilities: [
          "Assistance et formation utilisateurs (plusieurs centaines)",
          "Gestion des droits.",
          "Coordination avec équipes support pour résolution d’incidents",
          "Participation aux tests et recettes (migrations, nouvelles fonctionnalités)",
          "Rédaction d’expression de besoins (refonte intranet – 2018)",
        ],
      },
    ],
  },
  {
    sectionTitle: "Expériences professionnelles antérieures",
    experiences: [
      {
        type: "job",
        title: "Manager système d'information",
        company: "Carrefour",
        period: "1997 – 2007",
        description: "",
        responsibilities: [
          "Manager du SI back office et du réseau local bureautique et front office (encaissement)",
          "Management d'équipe et organisation opérationnelle",
          "Participation à un projet deploiement organisationnel",
          "Production d'indicateurs de performance commerciale",
        ],
      },
    ],
  },
];
