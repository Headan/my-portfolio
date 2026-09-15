import type { StaticImageData } from "next/image";
import edificeImg from "@/assets/images/edifice.png";
import metaApiImg from "@/assets/images/meta-api.png";
import sncfImg from "@/assets/images/sncf-reseau.png";
import mmcreationImg from "@/assets/images/mmcreation.png";
import franceTvImg from "@/assets/images/france-televiosion-publicite.png";
import nolifeImg from "@/assets/images/nolifeImg.png";

// Les textes (rôle, accroche, descriptions, missions...) vivent dans les
// fichiers de traduction (src/messages/{locale}.json), indexés par les `id`
// ci-dessous. Ce fichier ne garde que les données non-textuelles.
export const profil = {
  nom: "Lucien Devars du Mayne",
  initiales: "LD",
} as const;

export const contact = {
  email: "devarsdumayne.lucien@hotmail.com",
  ville: "Levallois-Perret, 92300",
  linkedin: "https://www.linkedin.com/in/lucien-devars-du-mayne-2711a112a/",
  cv: "/cv-lucien-devars-du-mayne.pdf",
} as const;

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
  id: "reactNative" | "rpgGame";
  tags: string[];
};

export const projets: Projet[] = [
  {
    id: "reactNative",
    tags: ["React Native", "TypeScript", "Expo"],
  },
  {
    id: "rpgGame",
    tags: ["GDScript", "Photoshop"],
  },
];

export type Experience = {
  id: "edifice" | "metaApi" | "sncf" | "mmcreation" | "francetv" | "nolife";
  image: StaticImageData;
  link?: string;
  stack: string[];
};

export const experiences: Experience[] = [
  {
    id: "edifice",
    image: edificeImg,
    link: "https://edifice.io/",
    stack: ["React", "TypeScript", "Storybook", "Vitest", "AngularJS"],
  },
  {
    id: "metaApi",
    image: metaApiImg,
    stack: ["React", "Node.js", "JavaScript", "MongoDB"],
  },
  {
    id: "sncf",
    image: sncfImg,
    link: "https://osrd.fr/fr/",
    stack: ["React", "TypeScript", "D3.js", "AngularJS"],
  },
  {
    id: "mmcreation",
    image: mmcreationImg,
    link: "https://mmcreation.com/",
    stack: ["JavaScript", "HTML/CSS", "jQuery", "WordPress"],
  },
  {
    id: "francetv",
    image: franceTvImg,
    link: "https://www.francetvpub.fr/",
    stack: ["JavaScript", "HTML/CSS", "AngularJS"],
  },
  {
    id: "nolife",
    image: nolifeImg,
    link: "https://fr.wikipedia.org/wiki/Nolife_(cha%C3%AEne_de_t%C3%A9l%C3%A9vision)",
    stack: ["JavaScript", "PHP", "MySQL"],
  },
];
