import { Reveal } from "../components/Reveal";
import { SiteShell } from "../components/SiteShell";
import { CONTACT_EMAIL, contactMailto } from "../data/contact";
import { experiences, trustedBrands } from "../data/portfolio";

const navItems = [
  { href: "#prestations", label: "Prestations" },
  { href: "#preproduction", label: "Pré-production" },
  { href: "#production", label: "Production" },
  { href: "#ateliers", label: "Ateliers" },
  { href: "#conseil", label: "Conseil" },
  { href: "#enseignement", label: "Enseignement" },
  { href: "#trusted", label: "They trusted us" },
  { href: "#experiences", label: "Expériences" },
  { href: "#contact", label: "Contact" },
] as const;

const teaching = [
  "Intervenant à ISART Digital (depuis 2024)",
  "Formateur en Narrative Design (Artwork-VFX)",
  "Professeur en Narrative Design / Scénario (Brassart)",
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

export default function HomePage() {
  return (
    <SiteShell navItems={navItems}>
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

        <Reveal as="section" className="band" id="adn">
          <h2 className="band__title">ADN</h2>
          <p className="band__text">
            Pas de théorie hors-sol. On connaît le terrain, la réalité des
            budgets et les contraintes de pipeline. On s'immerge dans votre
            équipe, on épouse votre rythme, et on livre du concret : une
            narration sur mesure pour vous et vos joueurs.
          </p>
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

        <Reveal as="section" className="section teaching" id="enseignement">
          <p className="section__eyebrow">Transmission</p>
          <h2 className="section__title">Enseignement</h2>
          <ol className="rows">
            {teaching.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item}</h3>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal as="section" className="section trusted" id="trusted">
          <p className="section__eyebrow">Partenaires</p>
          <h2 className="section__title">They trusted us</h2>
          <p className="section__lede">We worked with</p>
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

        <Reveal as="section" className="section experiences" id="experiences">
          <p className="section__eyebrow">Parcours</p>
          <h2 className="section__title">Expériences</h2>
          <ul className="xp-list">
            {experiences.map((item) => (
              <li key={`${item.role}-${item.project}`} className="xp-list__item">
                {item.image ? (
                  <div className="xp-list__media">
                    <img src={item.image} alt="" loading="lazy" />
                  </div>
                ) : null}
                <div className="xp-list__body">
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
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="section" className="section contact" id="contact">
          <p className="section__eyebrow">Contact</p>
          <h2 className="section__title">Parlons de votre jeu</h2>
          <p className="section__lede">
            Une pré-prod à lancer, un dialogue à affûter, un atelier à
            organiser ? Écrivez-nous à{" "}
            <a href={contactMailto}>{CONTACT_EMAIL}</a>.
          </p>
          <div className="persona__actions">
            <a className="btn btn--fill" href={contactMailto}>
              Écrire à Fabl
            </a>
            <a className="btn btn--ghost" href="#prestations">
              Revoir les prestations
            </a>
          </div>
        </Reveal>
      </main>
    </SiteShell>
  );
}
