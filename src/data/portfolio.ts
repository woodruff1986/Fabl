import { withBase } from "../lib/base";

export type Experience = {
  role: string;
  project: string;
  href?: string;
  studio?: string;
  platform: string;
  image?: string;
};

export const experiences: Experience[] = [
  {
    role: "Narrative Designer",
    project: "Projet non annoncé",
    studio: "Artefacts Studio",
    platform: "PS5, Xbox, PC",
    image: withBase("/images/experiences/artefacts.png"),
  },
  {
    role: "Game / Narrative Designer",
    project: "The Sandbox",
    href: "https://www.sandbox.game/",
    platform: "PC",
    image: withBase("/images/experiences/sandbox-cover.jpg"),
  },
  {
    role: "Narrative Designer",
    project: "Dune: Spice Wars",
    href: "https://www.shirogames.com/dune-spice-wars",
    studio: "Shiro Games",
    platform: "PC",
    image: withBase("/images/experiences/dune-cover.jpg"),
  },
  {
    role: "Game / Narrative Designer",
    project: "Projet non annoncé",
    studio: "Tap4Fun Paris",
    platform: "F2P mobile",
    image: withBase("/images/experiences/tap4fun.jpg"),
  },
  {
    role: "Game Designer / Narrative Designer",
    project: "Love Stars",
    href: "https://pocketstory.games/",
    studio: "Pocket Story",
    platform: "F2P mobile",
    image: withBase("/images/experiences/pocketstory.png"),
  },
  {
    role: "Narrative Designer (Game Jams)",
    project: "Projets narratifs en 48h",
    platform: "Conquistador · Space Immo · Utopiales Game Jam",
    image: withBase("/images/experiences/gamejams.svg"),
  },
];

export const trustedBrands = [
  { name: "Original Stormtrooper", src: withBase("/images/trusted/original-stormtrooper.png") },
  { name: "Snoop Dogg", src: withBase("/images/trusted/snoop-dogg.png") },
  { name: "Shiro Games", src: withBase("/images/trusted/shiro-games.png") },
  { name: "The Walking Dead", src: withBase("/images/trusted/walking-dead.png") },
  { name: "tap4fun", src: withBase("/images/trusted/tap4fun.jpg") },
  { name: "The Sandbox", src: withBase("/images/trusted/sandbox.png") },
  { name: "ISART Digital", src: withBase("/images/trusted/isart.jpg") },
  { name: "tap4fun", src: withBase("/images/trusted/tap4fun-text.png"), key: "tap4fun-alt" },
  { name: "pocketStory", src: withBase("/images/trusted/pocketstory.png") },
  { name: "SEPHORA", src: withBase("/images/trusted/sephora.png") },
  { name: "Warner Music Group", src: withBase("/images/trusted/warner.png") },
  { name: "Paris Hilton", src: withBase("/images/trusted/paris-hilton.jpg") },
  { name: "Artefacts Studio", src: withBase("/images/trusted/artefacts.png") },
  { name: "Le Téléthon Cinéma", src: withBase("/images/trusted/telethon.png") },
  { name: ".double2", src: withBase("/images/trusted/double2.png") },
  { name: "Dune", src: withBase("/images/trusted/dune.jpg") },
  { name: "France 2", src: withBase("/images/trusted/france2.png") },
  { name: "Hellfest", src: withBase("/images/trusted/hellfest.png") },
  { name: "Atari", src: withBase("/images/trusted/atari.png") },
  { name: "Le Petit Prince", src: withBase("/images/trusted/petit-prince.png") },
  { name: "Les Schtroumpfs", src: withBase("/images/trusted/schtroumpfs.png") },
  { name: "Brassart", src: withBase("/images/trusted/brassart.png") },
  { name: "Metallica", src: withBase("/images/trusted/metallica.png") },
  { name: "Nuclear Blast Records", src: withBase("/images/trusted/nuclear-blast.png") },
] as const;
