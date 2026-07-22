import { useEffect, useId, useState } from "react";
import { Reveal } from "./components/Reveal";

const navItems = [
  { href: "#prestations", label: "Prestations" },
  { href: "#preproduction", label: "Pré-production" },
  { href: "#production", label: "Production" },
  { href: "#ateliers", label: "Ateliers" },
  { href: "#conseil", label: "Conseil" },
  { href: "#persona", label: "Persona" },
  { href: "#experiences", label: "Expériences" },
  { href: "#enseignement", label: "Enseignement" },
  { href: "#contact", label: "Contact" },
] as const;

type Experience = {
  role: string;
  project: string;
  href?: string;
  studio?: string;
  platform: string;
};

const experiences: Experience[] = [
  {
    role: "Narrative Designer",
    project: "Projet non annoncé",
    studio: "Artefacts Studio",
    platform: "PS5, Xbox, PC",
  },
  {
    role: "Game / Narrative Designer",
    project: "The Sandbox",
    href: "https://www.sandbox.game/",
    platform: "PC",
  },
  {
    role: "Narrative Designer",
    project: "Dune: Spice Wars",
    href: "https://www.shirogames.com/dune-spice-wars",
    studio: "Shiro Games",
    platform: "PC",
  },
  {
    role: "Game / Narrative Designer",
    project: "Projet non annoncé",
    studio: "Tap4Fun Paris",
    platform: "F2P mobile",
  },
  {
    role: "Game Designer / Narrative Designer",
    project: "Love Stars",
    href: "https://pocketstory.games/",
    studio: "Pocket Story",
    platform: "F2P mobile",
  },
  {
    role: "Narrative Designer (Game Jams)",
    project: "Projets narratifs en 48h",
    platform: "Conquistador · Space Immo · Utopiales Game Jam",
  },
];

const teaching = [
  "Intervenant à ISART Digital (depuis 2024)",
  "Formateur en Narrative Design (Artwork-VFX)",
  "Professeur en Narrative Design / Scénario (Brassart)",
] as const;

const trustedBrands = [
  { name: "Original Stormtrooper", src: "/images/trusted/original-stormtrooper.svg" },
  { name: "Snoop Dogg", src: "/images/trusted/snoop-dogg.svg" },
  { name: "Shiro Games", src: "/images/trusted/shiro-games.svg" },
  { name: "The Walking Dead", src: "/images/trusted/walking-dead.svg" },
  { name: "tap4fun", src: "/images/trusted/tap4fun.svg" },
  { name: "The Sandbox", src: "/images/trusted/sandbox.svg" },
  { name: "ISART Digital", src: "/images/trusted/isart.svg" },
  { name: "tap4fun", src: "/images/trusted/tap4fun-text.svg", key: "tap4fun-alt" },
  { name: "pocketStory", src: "/images/trusted/pocketstory.svg" },
  { name: "SEPHORA", src: "/images/trusted/sephora.svg" },
  { name: "Warner Music Group", src: "/images/trusted/warner.svg" },
  { name: "Paris Hilton", src: "/images/trusted/paris-hilton.svg" },
  { name: "Artefacts Studio", src: "/images/trusted/artefacts.svg" },
  { name: "Le Téléthon Cinéma", src: "/images/trusted/telethon.svg" },
  { name: ".double2", src: "/images/trusted/double2.svg" },
  { name: "Dune", src: "/images/trusted/dune.svg" },
  { name: "France 2", src: "/images/trusted/france2.svg" },
  { name: "Hellfest", src: "/images/trusted/hellfest.svg" },
  { name: "Atari", src: "/images/trusted/atari.svg" },
  { name: "Le Petit Prince", src: "/images/trusted/petit-prince.svg" },
  { name: "Les Schtroumpfs", src: "/images/trusted/schtroumpfs.svg" },
  { name: "Brassart", src: "/images/trusted/brassart.svg" },
  { name: "Metallica", src: "/images/trusted/metallica.svg" },
  { name: "Nuclear Blast Records", src: "/images/trusted/nuclear-blast.svg" },
] as const;

const creations = [
  {
    title: "Univers & Lore",
    text: "Des mondes imaginaires denses et captivants.",
  },
  {
    title: "Personnages",
    text: "Des figures complexes, nuancées, inoubliables.",
  },
  {
    title: "Architecture narrative",
    text: "Des structures solides et du game design engageant.",
  },
  {
    title: "Licences & Cross-média",
    text: "Adaptation ou création d'IP originales.",
  },
  {
    title: "Dialogues sur mesure",
    text: "Un ton incarné, fluide, pensé pour le joueur.",
  },
  {
    title: "Sur-mesure & Urgences",
    text: "Scriptdoctoring et solutions de crise.",
  },
] as const;

const propositions = [
  "Des outils",
  "Des solutions",
  "Du scriptdoctoring",
  "Des audits",
] as const;

const preproduction = [
  {
    title: "Construction du monde",
    text: "Des univers cohérents et merveilleux pour que les joueurs y vivent pleinement.",
  },
  {
    title: "Création de personnages",
    text: "Des héros et des PNJ riches et émouvants, portés par une psychologie complexe.",
  },
  {
    title: "Concevoir l'histoire",
    text: "Structure globale, arcs narratifs et thématiques universelles pour un voyage inoubliable — ou une mythologie porteuse de sens.",
  },
  {
    title: "Recherches et documentation",
    text: "Références et organisation des informations qui apportent de la crédibilité à votre jeu vidéo.",
  },
  {
    title: "Préparation",
    text: "Définir avec votre équipe les étapes clés de l'intégration narrative, en respectant budgets, délais et possibilités techniques.",
  },
] as const;

const production = [
  {
    title: "Écriture de contenu",
    text: "Descriptions et dialogues (FR/EN) taillés pour le gameplay, pensés pour optimiser vos coûts de localisation.",
  },
  {
    title: "Commando Narrative",
    text: "Un sprint de livraison pour tenir la deadline de l'éditeur sans sacrifier la qualité.",
  },
  {
    title: "Scriptdoctoring & Révision",
    text: "Débloquer un scénario, fluidifier les angles morts, éviter les ratés techniques.",
  },
] as const;

const stats = [
  { value: "2", label: "Talents, une vision" },
  { value: "FR/EN", label: "Écriture bilingue" },
] as const;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="topbar">
        <nav className="topbar__side" aria-label="Navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="topbar__work"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen(true)}
        >
          Menu
        </button>
      </header>

      <div
        className={`menu ${menuOpen ? "menu--open" : ""}`}
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="menu__close"
          aria-label="Fermer le menu"
          onClick={closeMenu}
        >
          <span />
          <span />
        </button>
        <nav className="menu__list">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              <span className="menu__title">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
      {menuOpen ? (
        <button
          type="button"
          className="menu__backdrop"
          aria-label="Fermer"
          onClick={closeMenu}
        />
      ) : null}

      <main>
        <section className="hero" id="top">
          <h1 className="hero__title">Fabl</h1>
          <p className="hero__eyebrow">Studio de narrative design</p>
          <p className="hero__lead">
            Deux talents pour{" "}
            <mark className="hero__mark">votre</mark> vision créative.
          </p>
          <div className="hero__actions">
            <a className="btn btn--fill" href="#prestations">
              Voir les prestations
            </a>
            <a className="btn btn--ghost" href="#contact">
              Entrer en contact
            </a>
          </div>
        </section>

        <Reveal as="section" className="band" id="approche">
          <p className="band__kicker">Approche</p>
          <h2 className="band__title">Une pluralité de regards</h2>
          <p className="band__text">
            Face aux exigences d'un jeu vidéo, Fabl teste, bouscule, joue les
            scènes à voix haute. On affine en direct pour livrer une matière
            brute, vivante, immédiatement prête à l'intégration.
          </p>
          <div className="stats">
            {stats.map((stat) => (
              <article key={stat.label} className="stats__item">
                <p className="stats__value">{stat.value}</p>
                <p className="stats__label">{stat.label}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="section" id="prestations">
          <p className="section__eyebrow">Ce que nous créons</p>
          <h2 className="section__title">Des récits qui restent</h2>
          <p className="section__lede">
            Nous façonnons des expériences narratives calées au millimètre
            sur votre gameplay — du World Building à la dernière ligne de
            dialogue.
          </p>
          <ul className="rows">
            {creations.map((item, index) => (
              <li key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="chips">
            <p className="chips__label">Nous vous proposons aussi</p>
            <ul>
              {propositions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal as="section" className="section section--muted section--center" id="services">
          <p className="section__eyebrow">Nos services</p>
          <h2 className="section__title">Présents à chaque étape</h2>
          <p className="section__lede">
            Du relief dans les histoires. Des solutions en prod. De la
            fluidité à l'intégration.
          </p>
          <p className="section__lede">
            Nous sommes là pour toutes les étapes de votre projet. En amont
            ou en aval de la production, nous pouvons intervenir à tout
            moment.
          </p>
        </Reveal>

        <Reveal as="section" className="section" id="preproduction">
          <p className="section__eyebrow">À la pré-production</p>
          <h2 className="section__title">Poser les fondations</h2>
          <ol className="rows">
            {preproduction.map((item, index) => (
              <li key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal as="section" className="section" id="production">
          <p className="section__eyebrow">En production</p>
          <h2 className="section__title">Écrire, soigner, livrer</h2>
          <ul className="rows">
            {production.map((item, index) => (
              <li key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="section" className="section" id="ateliers">
          <p className="section__title">Formation</p>
          <h2 className="section__title">Ateliers & Transmission</h2>
          <div className="split">
            <article>
              <h3>Ateliers d'équipe</h3>
              <p>
                Explorer, structurer et débloquer la narration directement
                avec vos équipes.
              </p>
            </article>
            <article>
              <h3>Mentorat</h3>
              <p>
                Un accompagnement exigeant et bienveillant pour vos narrative
                designers, ancré dans la réalité de la prod.
              </p>
            </article>
          </div>
        </Reveal>

        <Reveal as="section" className="section section--muted" id="conseil">
          <p className="section__eyebrow">Conseil & Stratégie</p>
          <h2 className="section__title">Cadrage prod</h2>
          <p className="section__lede section__lede--wide">
            Détecter les points de friction avant qu'ils ne coûtent cher.
            Méthodes, outils, budgets : des solutions concrètes pour que la
            narrative serve le jeu.
          </p>
        </Reveal>

        <Reveal as="section" className="section" id="persona">
          <p className="section__eyebrow">La salle d'écriture au micro</p>
          <h2 className="section__title">Podcast Persona</h2>
          <div className="persona">
            <p>
              Chaque épisode, on désosse un personnage de fiction jusqu'à
              l'os. Ses failles, ses biais, sa mécanique intime.
            </p>
            <p>
              Pas de cours magistral : un ping-pong instinctif, vivant,
              argumenté. Notre façon de vous montrer comment on réfléchit,
              semaine après semaine.
            </p>
            <p className="persona__quote">
              Désosser un personnage jusqu'à l'os.
            </p>
            <p className="persona__meta">Écoute · Analyse · Transmission</p>
          </div>
        </Reveal>

        <Reveal as="section" className="band" id="adn">
          <p className="band__kicker">Positionnement</p>
          <h2 className="band__title">ADN</h2>
          <p className="band__text">
            Pas de théorie hors-sol. On connaît le terrain, la réalité des
            budgets et les contraintes de pipeline. On s'immerge dans votre
            équipe, on épouse votre rythme, et on livre du concret : une
            narration sur mesure pour vous et vos joueurs.
          </p>
        </Reveal>

        <Reveal as="section" className="section experiences" id="experiences">
          <p className="section__eyebrow">Parcours</p>
          <h2 className="section__title">Expériences</h2>
          <ul className="xp-list">
            {experiences.map((item) => (
              <li key={`${item.role}-${item.project}`} className="xp-list__item">
                <p className="xp-list__role">{item.role}</p>
                <p className="xp-list__project">
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.project}
                    </a>
                  ) : (
                    item.project
                  )}
                  {item.studio ? ` · ${item.studio}` : null}
                </p>
                <p className="xp-list__platform">{item.platform}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="section" className="section teaching" id="enseignement">
          <h2 className="teaching__title">Enseignement</h2>
          <ul className="teaching__list">
            {teaching.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="section" className="section trusted" id="trusted">
          <h2 className="trusted__title">
            They trusted us
            <span className="trusted__title-sub"> / We worked with</span>
          </h2>
          <ul className="trusted__grid" aria-label="Partenaires et licences">
            {trustedBrands.map((brand) => (
              <li
                key={"key" in brand ? brand.key : brand.name}
                className="trusted__cell"
              >
                <img src={brand.src} alt={brand.name} loading="lazy" />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="section" className="section contact" id="contact">
          <p className="section__eyebrow">Contact</p>
          <h2 className="section__title">Parlons de votre jeu</h2>
          <p className="section__lede">
            Une pré-prod à lancer, un dialogue à affûter, un atelier à
            organiser ? Écrivez-nous.
          </p>
          <a className="btn btn--fill" href="#prestations">
            Revoir les prestations
          </a>
        </Reveal>
      </main>

      <footer className="footer">
        <span className="footer__brand">Fabl</span>
        <span>Studio de narrative design</span>
      </footer>
    </div>
  );
}
