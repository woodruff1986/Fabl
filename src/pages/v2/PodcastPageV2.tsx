import { Link } from "react-router-dom";
import { AcastEmbed, ACAST_SHOW_URL } from "../../components/AcastEmbed";
import { Reveal } from "../../components/Reveal";
import { V2Shell } from "../../components/v2/V2Shell";

const navItems = [
  { href: "/v2", label: "Accueil" },
  { href: "/v2#prestations", label: "Prestations" },
  { href: "/v2/podcast", label: "Podcast" },
  { href: "/v2#contact", label: "Contact" },
] as const;

const coverSrc =
  "https://assets.pippa.io/shows/6a4e3d4581fe1f6460c39de8/1784195893937-a59acb43-bd93-4448-9e65-c22190d05741.jpeg";

export default function PodcastPageV2() {
  return (
    <V2Shell navItems={navItems} cta={{ href: "/v2#contact", label: "Contact" }}>
      <main>
        <section className="v2-section" id="top">
          <p className="v2-kicker">La salle d'écriture au micro</p>
          <h1 className="v2-title">
            Podcast <em>Persona</em>
          </h1>
          <p className="v2-lede">
            PERSONA — Sous les masques des personnages. Le podcast qui
            soulève les masques de vos personnages de fiction préférés.
          </p>
        </section>

        <Reveal as="section" className="v2-section v2-section--soft">
          <div className="v2-persona">
            <div className="podcast-about__cover" style={{ maxWidth: "16rem" }}>
              <img
                src={coverSrc}
                alt="Couverture du podcast PERSONA"
                width={500}
                height={500}
                loading="eager"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 8,
                  border: "1px solid rgba(8,8,8,0.1)",
                }}
              />
            </div>
            <div>
              <h2 className="v2-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                À propos
              </h2>
              <p className="v2-lede">
                Chaque épisode, un personnage. Yohann décortique la mécanique
                narrative et scénaristique. Marie, psychologue de formation,
                plonge dans sa psyché.
              </p>
              <p className="v2-lede">
                Série, film, jeu vidéo : peu importe le format. On décortique
                un personnage — sa fonction dans le récit, ce qu'il révèle de
                nous.
              </p>
              <p className="v2-persona__meta">Écoute · Analyse · Transmission</p>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="v2-section" id="ecouter">
          <p className="v2-kicker">Acast</p>
          <h2 className="v2-title">
            Écouter <em>Persona</em>
          </h2>
          <p className="v2-lede">
            Lecteur officiel du podcast. Un nouvel épisode toutes les deux
            semaines.
          </p>
          <div style={{ marginTop: "2rem", maxWidth: "48rem" }}>
            <AcastEmbed className="acast-embed" height={360} />
          </div>
          <div className="v2-persona__actions">
            <a
              className="v2-btn v2-btn--pulse"
              href={ACAST_SHOW_URL}
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir le profil Acast
            </a>
            <Link className="v2-btn v2-btn--ghost" to="/v2#persona">
              Retour V2
            </Link>
          </div>
        </Reveal>
      </main>
    </V2Shell>
  );
}
