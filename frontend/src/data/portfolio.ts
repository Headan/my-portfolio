import type { StaticImageData } from "next/image";
import edificeImg from "@/assets/images/edifice.png";
import metaApiImg from "@/assets/images/meta-api.png";
import sncfImg from "@/assets/images/sncf-reseau.png";
import mmcreationImg from "@/assets/images/mmcreation.png";
import franceTvImg from "@/assets/images/france-televiosion-publicite.png";

export const profil = {
  nom: "Lucien Devars du Mayne",
  initiales: "LD",
  role: "Développeur Front-End",
  experience: "6 ans d'expérience",
  titreAccroche:
    "Des interfaces claires, accessibles, qui tiennent en production.",
  accroche:
    "Spécialisé React & TypeScript, refonte UI/UX et tests unitaires — du développement de fonctionnalités à la maintenance, au sein d'équipes produit.",
} as const;

export const contact = {
  email: "devarsdumayne.lucien@hotmail.com",
  telephone: "06 22 68 00 97",
  ville: "Levallois-Perret, 92300",
  linkedin: "https://www.linkedin.com/",
  cv: "/cv-lucien-devars-du-mayne.pdf",
} as const;

export const apropos: string[] = [
  "Développeur front-end spécialisé dans la conception d'interfaces accessibles et performantes, la refonte UI/UX et la mise en place de tests unitaires.",
  "À l'aise sur l'ensemble du cycle produit — du développement de fonctionnalités à la maintenance en production — au sein d'équipes produit chez Edifice, Meta API et SNCF Réseau.",
];

export const competences: string[] = [
  "TypeScript",
  "JavaScript",
  "React",
  "AngularJS",
  "Node.js",
  "Next.js",
  "Vitest",
  "Storybook",
  "Docker",
  "Accessibilité",
];

export type Projet = {
  client: string;
  titre: string;
  description: string;
  tags: string[];
  lien: string;
};

export const projets: Projet[] = [
  {
    client: "Edifice",
    titre: "Système de design & Storybook",
    description:
      "Librairie de composants interne pour les plateformes éducatives ONE et NEO, tests unitaires et documentation technique.",
    tags: ["React", "TypeScript", "Vitest"],
    lien: "#",
  },
  {
    client: "SNCF Réseau",
    titre: "OSRD — Carte ferroviaire temps réel",
    description:
      "Carte interactive de circulation des trains et graphiques modulables pour l'étude d'exploitation du réseau.",
    tags: ["React", "AngularJS", "D3.js"],
    lien: "#",
  },
  {
    client: "Meta API",
    titre: "Refonte d'une plateforme SaaS",
    description:
      "Refonte graphique, amélioration UI/UX et automatisations API entre applications.",
    tags: ["React", "Node.js", "MongoDB"],
    lien: "#",
  },
];

export type Experience = {
  dates: string;
  poste: string;
  organisation: string;
  description: string;
  image: StaticImageData;
  link?: string;
};

export const experiences: Experience[] = [
  {
    dates: "2023 — Aujourd'hui",
    poste: "Développeur Front-End",
    organisation: "Edifice | CDI",
    description:
      "Refonte et maintenance des applications, évolution de la librairie interne (Storybook), mise en place de tests unitaires (Vitest).",
    image: edificeImg,
    link: "https://edifice.io/",
  },
  {
    dates: "2020 — 2023",
    poste: "Développeur Full Stack",
    organisation: "Meta API | CDI",
    description:
      "Développement de fonctionnalités, refonte UI/UX et automatisations API sur une plateforme SaaS d'intégration.",
    image: metaApiImg,
  },
  {
    dates: "2018 — 2020",
    poste: "Développeur Front-End",
    organisation: "SNCF Réseau | Alternance",
    description:
      "Développement de l'outil OSRD : graphiques modulables et carte interactive de circulation des trains.",
    image: sncfImg,
    link: "https://osrd.fr/fr/",
  },
  {
    dates: "2017 — 2018",
    poste: "Développeur Front-End",
    organisation: "MMCréation | Alternance",
    description:
      "A faire",
    image: mmcreationImg,
    link: "https://mmcreation.com/",
  },
  {
    dates: "Janvier 2017 - Mars 2017",
    poste: "Développeur Front-End",
    organisation: "France Télévision Publicité | Stage",
    description:
      "A faire",
    image: franceTvImg,
    link: "https://www.francetvpub.fr/",
  },
];
