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
    image: "/images/experiences/artefacts.png",
  },
  {
    role: "Game / Narrative Designer",
    project: "The Sandbox",
    href: "https://www.sandbox.game/",
    platform: "PC",
    image: "/images/experiences/sandbox-cover.jpg",
  },
  {
    role: "Narrative Designer",
    project: "Dune: Spice Wars",
    href: "https://www.shirogames.com/dune-spice-wars",
    studio: "Shiro Games",
    platform: "PC",
    image: "/images/experiences/dune-cover.jpg",
  },
  {
    role: "Game / Narrative Designer",
    project: "Projet non annoncé",
    studio: "Tap4Fun Paris",
    platform: "F2P mobile",
    image: "/images/experiences/tap4fun.jpg",
  },
  {
    role: "Game Designer / Narrative Designer",
    project: "Love Stars",
    href: "https://pocketstory.games/",
    studio: "Pocket Story",
    platform: "F2P mobile",
    image: "/images/experiences/pocketstory.png",
  },
  {
    role: "Narrative Designer (Game Jams)",
    project: "Projets narratifs en 48h",
    platform: "Conquistador · Space Immo · Utopiales Game Jam",
    image: "/images/experiences/gamejams.svg",
  },
];

export const trustedBrands = [
  { name: "Original Stormtrooper", src: "/images/trusted/original-stormtrooper.png" },
  { name: "Snoop Dogg", src: "/images/trusted/snoop-dogg.png" },
  { name: "Shiro Games", src: "/images/trusted/shiro-games.png" },
  { name: "The Walking Dead", src: "/images/trusted/walking-dead.png" },
  { name: "tap4fun", src: "/images/trusted/tap4fun.jpg" },
  { name: "The Sandbox", src: "/images/trusted/sandbox.png" },
  { name: "ISART Digital", src: "/images/trusted/isart.jpg" },
  { name: "tap4fun", src: "/images/trusted/tap4fun-text.png", key: "tap4fun-alt" },
  { name: "pocketStory", src: "/images/trusted/pocketstory.png" },
  { name: "SEPHORA", src: "/images/trusted/sephora.png" },
  { name: "Warner Music Group", src: "/images/trusted/warner.png" },
  { name: "Paris Hilton", src: "/images/trusted/paris-hilton.jpg" },
  { name: "Artefacts Studio", src: "/images/trusted/artefacts.png" },
  { name: "Le Téléthon Cinéma", src: "/images/trusted/telethon.png" },
  { name: ".double2", src: "/images/trusted/double2.png" },
  { name: "Dune", src: "/images/trusted/dune.jpg" },
  { name: "France 2", src: "/images/trusted/france2.png" },
  { name: "Hellfest", src: "/images/trusted/hellfest.png" },
  { name: "Atari", src: "/images/trusted/atari.png" },
  { name: "Le Petit Prince", src: "/images/trusted/petit-prince.png" },
  { name: "Les Schtroumpfs", src: "/images/trusted/schtroumpfs.png" },
  { name: "Brassart", src: "/images/trusted/brassart.png" },
  { name: "Metallica", src: "/images/trusted/metallica.png" },
  { name: "Nuclear Blast Records", src: "/images/trusted/nuclear-blast.png" },
] as const;
