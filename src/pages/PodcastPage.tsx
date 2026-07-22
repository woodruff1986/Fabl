import { Link } from "react-router-dom";
import { AcastEmbed, ACAST_SHOW_URL } from "../components/AcastEmbed";
import { Reveal } from "../components/Reveal";
import { SiteShell } from "../components/SiteShell";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/#prestations", label: "Prestations" },
  { href: "/podcast", label: "Podcast" },
  { href: "/#contact", label: "Contact" },
] as const;

const coverSrc =
  "https://assets.pippa.io/shows/6a4e3d4581fe1f6460c39de8/1784195893937-a59acb43-bd93-4448-9e65-c22190d05741.jpeg";

export default function PodcastPage() {
  return (
    <SiteShell navItems={navItems}>
      <main className="podcast-page">
        <section className="section podcast-hero" id="top">
          <p className="section__eyebrow">La salle d'écriture au micro</p>
          <h1 className="section__title podcast-hero__title">Podcast Persona</h1>
          <p className="section__lede section__lede--wide">
            PERSONA — Sous les masques des personnages. Le podcast qui
            soulève les masques de vos personnages de fiction préférés.
          </p>
        </section>

        <Reveal as="section" className="section podcast-about">
          <div className="podcast-about__grid">
            <div className="podcast-about__cover">
              <img
                src={coverSrc}
                alt="Couverture du podcast PERSONA"
                width={500}
                height={500}
                loading="eager"
              />
            </div>
            <div className="podcast-about__copy">
              <h2 className="section__title">À propos</h2>
              <p>
                Chaque épisode, un personnage. Yohann décortique la mécanique
                narrative et scénaristique. Marie, psychologue de formation,
                plonge dans sa psyché.
              </p>
              <p>
                Série, film, jeu vidéo : peu importe le format. On décortique
                un personnage — sa fonction dans le récit, ce qu'il révèle de
                nous.
              </p>
              <p>
                Au programme : structure narrative, archétypes, mécanismes de
                défense, blessures psychologiques, scènes pivots décortiquées
                réplique par réplique — et un verdict à deux voix, toujours en
                tension entre l'écriture et la psyché.
              </p>
              <p className="persona__meta">Écoute · Analyse · Transmission</p>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="section section--muted" id="ecouter">
          <p className="section__eyebrow">Acast</p>
          <h2 className="section__title">Écouter Persona</h2>
          <p className="section__lede section__lede--wide">
            Lecteur officiel du podcast. Un nouvel épisode toutes les deux
            semaines.
          </p>
          <AcastEmbed className="acast-embed acast-embed--page" height={360} />
          <div className="persona__actions">
            <a
              className="btn btn--fill"
              href={ACAST_SHOW_URL}
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir le profil Acast
            </a>
            <Link className="btn btn--ghost" to="/#persona">
              Retour au site
            </Link>
          </div>
        </Reveal>
      </main>
    </SiteShell>
  );
}
