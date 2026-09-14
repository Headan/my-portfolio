import type { StaticImageData } from "next/image";
import edificeImg from "@/assets/images/edifice.png";
import metaApiImg from "@/assets/images/meta-api.png";
import sncfImg from "@/assets/images/sncf-reseau.png";
import mmcreationImg from "@/assets/images/mmcreation.png";
import franceTvImg from "@/assets/images/france-televiosion-publicite.png";
import nolifeImg from "@/assets/images/nolifeImg.png";

export const profil = {
  nom: "Lucien Devars du Mayne",
  initiales: "LD",
  role: "Développeur Front-End",
  experience: "6 ans d'expérience",
  accroche:
    "Spécialisé React & TypeScript, refonte UI/UX et tests unitaires — du développement de fonctionnalités à la maintenance, au sein d'équipes produit.",
} as const;

export const contact = {
  email: "devarsdumayne.lucien@hotmail.com",
  ville: "Levallois-Perret, 92300",
  linkedin: "https://www.linkedin.com/",
  cv: "/cv-lucien-devars-du-mayne.pdf",
} as const;

export const apropos: string[] = [
  "Passionné de nouvelles technologies depuis toujours, ma curiosité m'a naturellement porté vers l'informatique — une passion qui s'est confirmée dès le début de mes études en école. Depuis, je n'ai cessé d'apprendre et de me perfectionner sur l'écosystème front-end moderne (React, TypeScript, JavaScript, HTML/CSS), à travers des projets aussi bien en environnement produit qu'en environnement plus technique.",
  "Ces 6 années d'expérience m'ont permis de toucher à toutes les facettes du métier : développement de fonctionnalités, refontes d'interfaces, mise en place de tests automatisés (Vitest, Storybook) et accompagnement d'équipes produit au quotidien. Je poursuis aujourd'hui cette montée en compétences en me formant sur Next.js, avec l'objectif d'élargir mon champ d'action côté back-end.",
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
  lien?: string;
};

export const projets: Projet[] = [
  {
    client: "Project_T - en cours de développement",
    titre: "Application React Native",
    description:
      "Application mobile développée avec React Native, projet personnel actuellement en cours de développement.",
    tags: ["React Native", "TypeScript", "Expo"],
  },
  {
    client: "Project_TL - en cours de développement",
    titre: "Développement d'un jeu style RPG",
    description:
      "Développement d'un jeu style RPG en coopération avec un graphiste indépendant, actuellement en cours de développement.",
    tags: ["GDScript", "Photoshop"],
  },
];

export type Experience = {
  dates: string;
  poste: string;
  organisation: string;
  description: string;
  image: StaticImageData;
  link?: string;
  stack: string[];
  missions?: string[];
};

export const experiences: Experience[] = [
  {
    dates: "2023 — Aujourd'hui",
    poste: "Développeur Front-End",
    organisation: "Edifice | CDI",
    description:
      "Édifice développe des plateformes numériques éducatives (ONE, NEO) pour faciliter la communication et l’apprentissage.",
    image: edificeImg,
    link: "https://edifice.io/",
    stack: ["React", "TypeScript", "Storybook", "Vitest", "AngularJS"],
    missions: [
      "Refonte et maintenance des applications de la plateforme.",
      "Évolution et maintien d'une librairie interne (Storybook).",
      "Mise en place et exécution de tests unitaires front (Vitest).",
      "Rédaction des documentations techniques sur différents projets.",
      "Débogage et amélioration de la plateforme.",
    ],
  },
  {
    dates: "2020 — 2023",
    poste: "Développeur Full Stack",
    organisation: "Meta API | CDI",
    description:
      "Plateforme SaaS permettant l’intégration d’API et facilitant la création d’automatisation entre plusieurs applications.",
    image: metaApiImg,
    stack: ["React", "Node.js", "JavaScript", "MongoDB"],
    missions: [
      "Développement de nouvelles fonctionnalités.",
      "Refonte graphique et amélioration de l’UI/UX de la plateforme.",
      "Développement d’automatisations API sur la plateforme.",
      "Débogage et amélioration de la plateforme.",
    ],
  },
  {
    dates: "2018 — 2020",
    poste: "Développeur Front-End",
    organisation: "SNCF Réseau | Alternance",
    description:
      "Organisation spécialisée dans la gestion du réseau ferré national français.",
    image: sncfImg,
    link: "https://osrd.fr/fr/",
    stack: ["React", "TypeScript", "D3.js", "AngularJS"],
    missions: [
      "Développement de l’outil OSRD permettant de mener des études d’exploitation.",
      "Création de graphiques modulables.",
      "Création d’une carte interactive avec circulation des trains en temps réel.",
    ],
  },
  {
    dates: "2017 — 2018",
    poste: "Développeur Front-End",
    organisation: "MMCréation | Alternance",
    description:
      "Agence spécialisée dans la création de sites web pour le secteur hôtelier.",
    image: mmcreationImg,
    link: "https://mmcreation.com/",
    stack: ["JavaScript", "HTML/CSS", "jQuery", "WordPress"],
    missions: [
      "Gestion des domaines web et des hébergements associés.",
      "Intervention sur les évolutions des sites en étroite collaboration avec le web designer : création de modules, résolution des problèmes techniques rencontrés.",
      "Intervention sur des sites clients développés sous WordPress.",
    ],
  },
  {
    dates: "Janvier 2017 - Mars 2017",
    poste: "Développeur Front-End",
    organisation: "France Télévision Publicité | Stage",
    description:
      "Stage de développement front-end au sein de France Télévision Publicité.",
    image: franceTvImg,
    link: "https://www.francetvpub.fr/",
    stack: ["JavaScript", "HTML/CSS", "AngularJS"],
     missions: [
      "Conception de maquettes et développement de quelques fonctionnalités front-end sur des outils internes.",
    ],
  },
  {
    dates: "Mai 2016 - Juillet 2016",
    poste: "Développeur Front-End",
    organisation: "Nolife | Stage",
    description:
      "Stage de développement front-end au sein de la chaîne Nolife.",
    image: nolifeImg,
    link: "https://fr.wikipedia.org/wiki/Nolife_(cha%C3%AEne_de_t%C3%A9l%C3%A9vision)",
    stack: ["JavaScript", "PHP", "MySQL"],
    missions: [
      "Développement d'un système de recherche fluide au sein d'une importante base de données vidéo d'émissions.",
    ],
  }
];
