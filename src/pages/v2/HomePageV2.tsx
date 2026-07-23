import { Link } from "react-router-dom";
import { AcastEmbed } from "../../components/AcastEmbed";
import { Reveal } from "../../components/Reveal";
import { V2Shell } from "../../components/v2/V2Shell";
import { experiences, trustedBrands } from "../../data/portfolio";

const navItems = [
  { href: "#prestations", label: "Prestations" },
  { href: "#services", label: "Services" },
  { href: "#enseignement", label: "Enseignement" },
  { href: "#experiences", label: "Expériences" },
  { href: "#persona", label: "Persona" },
  { href: "/v2/podcast", label: "Podcast" },
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
    text: "Structure globale, arcs narratifs et thématiques universelles pour un voyage inoubliable.",
  },
  {
    title: "Recherches et documentation",
    text: "Références et organisation des informations qui apportent de la crédibilité à votre jeu.",
  },
  {
    title: "Préparation",
    text: "Définir avec votre équipe les étapes clés de l'intégration narrative.",
  },
] as const;

const production = [
  {
    title: "Écriture de contenu",
    text: "Descriptions et dialogues (FR/EN) taillés pour le gameplay.",
  },
  {
    title: "Commando Narrative",
    text: "Un sprint de livraison pour tenir la deadline sans sacrifier la qualité.",
  },
  {
    title: "Scriptdoctoring & Révision",
    text: "Débloquer un scénario, fluidifier les angles morts, éviter les ratés techniques.",
  },
] as const;

const teaching = [
  "Intervenant à ISART Digital (depuis 2024)",
  "Formateur en Narrative Design (Artwork-VFX)",
  "Professeur en Narrative Design / Scénario (Brassart)",
] as const;

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 12 12 4M6.5 4H12v5.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 3v10M4.5 9.5 8 13l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroMark() {
  return (
    <div className="v2-hero__mark" aria-hidden="true">
      <svg viewBox="0 0 420 520" fill="currentColor">
        <path d="M48 40h118c78 0 128 42 128 118 0 52-28 88-74 104l92 218h-92L148 278h42c28 0 46-16 46-42s-18-42-46-42H140v-72h26c30 0 48-14 48-38s-18-36-48-36H140v-50H48Zm92 50v50H140c14 0 22 6 22 16s-8 16-22 16h0Z" />
        <rect x="48" y="40" width="52" height="440" rx="8" />
      </svg>
    </div>
  );
}

export default function HomePageV2() {
  const marquee = [...trustedBrands, ...trustedBrands];

  return (
    <V2Shell navItems={navItems}>
      <main>
        <section className="v2-hero" id="top">
          <HeroMark />

          <div className="v2-hero__content">
            <p className="v2-hero__brand">Fabl</p>
            <h1 className="v2-hero__title">
              Deux talents pour <em>votre</em> vision créative
            </h1>
            <p className="v2-hero__lead">
              Studio de narrative design pour le jeu vidéo — du lore à la
              dernière ligne de dialogue.
            </p>
            <div className="v2-hero__actions">
              <a className="v2-btn v2-btn--pulse" href="#prestations">
                <ArrowUpRight />
                Voir les prestations
              </a>
              <a className="v2-btn v2-btn--dark v2-btn--icon" href="#approche" aria-label="Descendre">
                <ArrowDown />
              </a>
            </div>
          </div>
        </section>

        <Reveal as="section" className="v2-section" id="approche">
          <p className="v2-kicker">Studio</p>
          <h2 className="v2-title">
            Une pluralité de <em>regards</em>
          </h2>
          <p className="v2-lede">
            Face aux exigences d'un jeu vidéo, Fabl teste, bouscule, joue les
            scènes à voix haute. On affine en direct pour livrer une matière
            brute, vivante, immédiatement prête à l'intégration.
          </p>
          <p className="v2-lede">
            Pas de théorie hors-sol. On connaît le terrain, la réalité des
            budgets et les contraintes de pipeline. On s'immerge dans votre
            équipe et on livre du concret.
          </p>
        </Reveal>

        <Reveal as="section" className="v2-section v2-section--soft" id="prestations">
          <p className="v2-kicker">Ce que nous créons</p>
          <h2 className="v2-title">
            Des récits qui <em>restent</em>
          </h2>
          <p className="v2-lede">
            Des expériences narratives calées au millimètre sur votre
            gameplay — du World Building à la dernière ligne de dialogue.
          </p>
          <div className="v2-features">
            {creations.map((item, index) => (
              <article key={item.title} className="v2-feature">
                <p className="v2-feature__idx">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="v2-chips" aria-label="Aussi proposés">
            {propositions.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Reveal>

        <section className="v2-section v2-section--flush v2-section--dark" id="services">
          <div className="v2-section">
            <Reveal>
              <p className="v2-kicker">Nos services</p>
              <h2 className="v2-title">
                Présents à chaque <em>étape</em>
              </h2>
              <p className="v2-lede">
                Du relief dans les histoires. Des solutions en prod. De la
                fluidité à l'intégration. En amont ou en aval, on intervient
                au moment où ça compte.
              </p>
            </Reveal>
          </div>
        </section>

        <Reveal as="section" className="v2-section" id="preproduction">
          <p className="v2-kicker">À la pré-production</p>
          <h2 className="v2-title">
            Poser les <em>fondations</em>
          </h2>
          <ol className="v2-rows">
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

        <Reveal as="section" className="v2-section v2-section--soft" id="production">
          <p className="v2-kicker">En production</p>
          <h2 className="v2-title">
            Écrire, soigner, <em>livrer</em>
          </h2>
          <ul className="v2-rows">
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

        <Reveal as="section" className="v2-section" id="ateliers">
          <p className="v2-kicker">Formation</p>
          <h2 className="v2-title">
            Ateliers & <em>Transmission</em>
          </h2>
          <div className="v2-split">
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

        <Reveal as="section" className="v2-section v2-section--soft" id="conseil">
          <p className="v2-kicker">Conseil & Stratégie</p>
          <h2 className="v2-title">
            Cadrage <em>prod</em>
          </h2>
          <p className="v2-lede">
            Détecter les points de friction avant qu'ils ne coûtent cher.
            Méthodes, outils, budgets : des solutions concrètes pour que la
            narrative serve le jeu.
          </p>
        </Reveal>

        <Reveal as="section" className="v2-section" id="enseignement">
          <p className="v2-kicker">Transmission</p>
          <h2 className="v2-title">
            Ensei<em>gnement</em>
          </h2>
          <p className="v2-lede">Interventions & formation en école.</p>
          <ul className="v2-sessions">
            {teaching.map((item, index) => (
              <li key={item} className="v2-session">
                <span className="v2-session__n">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{item}</h3>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <section className="v2-section v2-section--flush v2-section--dark" id="trusted">
          <div className="v2-section">
            <Reveal>
              <p className="v2-kicker">Partenaires</p>
              <h2 className="v2-title">
                They <em>trusted</em> us
              </h2>
              <p className="v2-lede">We worked with</p>
              <div className="v2-marquee" aria-label="Partenaires et licences">
                <div className="v2-marquee__track">
                  {marquee.map((brand, index) => (
                    <div
                      key={`${brand.name}-${index}`}
                      className="v2-marquee__item"
                    >
                      <img src={brand.src} alt={brand.name} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Reveal as="section" className="v2-section" id="experiences">
          <p className="v2-kicker">Parcours</p>
          <h2 className="v2-title">
            <em>Expériences</em>
          </h2>
          <ul className="v2-xp">
            {experiences.map((item) => (
              <li key={`${item.role}-${item.project}`} className="v2-xp__item">
                {item.image ? (
                  <div className="v2-xp__media">
                    <img src={item.image} alt="" loading="lazy" />
                  </div>
                ) : null}
                <div className="v2-xp__body">
                  <p className="v2-xp__role">{item.role}</p>
                  <p className="v2-xp__project">
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.project}
                      </a>
                    ) : (
                      item.project
                    )}
                    {item.studio ? ` · ${item.studio}` : null}
                  </p>
                  <p className="v2-xp__platform">{item.platform}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="section" className="v2-section v2-section--soft" id="persona">
          <p className="v2-kicker">La salle d'écriture au micro</p>
          <h2 className="v2-title">
            Podcast <em>Persona</em>
          </h2>
          <div className="v2-persona">
            <div>
              <p className="v2-lede">
                Chaque épisode, on désosse un personnage de fiction jusqu'à
                l'os. Ses failles, ses biais, sa mécanique intime.
              </p>
              <p className="v2-lede">
                Pas de cours magistral : un ping-pong instinctif, vivant,
                argumenté. Notre façon de vous montrer comment on réfléchit,
                semaine après semaine.
              </p>
              <p className="v2-persona__quote">
                Désosser un personnage jusqu'à l'os.
              </p>
              <p className="v2-persona__meta">Écoute · Analyse · Transmission</p>
              <div className="v2-persona__actions">
                <Link className="v2-btn v2-btn--pulse" to="/v2/podcast">
                  <ArrowUpRight />
                  Page podcast
                </Link>
              </div>
            </div>
            <AcastEmbed className="acast-embed" height={300} />
          </div>
        </Reveal>

        <section className="v2-section v2-section--flush v2-section--dark" id="contact">
          <div className="v2-section v2-contact">
            <Reveal>
              <p className="v2-kicker">Contact</p>
              <h2 className="v2-title">
                Parlons de <em>votre</em> jeu
              </h2>
              <p className="v2-lede">
                Une pré-prod à lancer, un dialogue à affûter, un atelier à
                organiser ? Écrivez-nous.
              </p>
              <div className="v2-contact__actions">
                <a className="v2-btn v2-btn--pulse" href="#prestations">
                  <ArrowUpRight />
                  Revoir les prestations
                </a>
                <Link className="v2-btn v2-btn--ghost-light" to="/">
                  Voir la V1
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </V2Shell>
  );
}
