import { Reveal } from "./components/Reveal";

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

const waveHeights = [42, 68, 55, 88, 36, 74, 60, 92, 48, 70, 58, 80];

export default function App() {
  return (
    <div className="site">
      <nav className="nav" aria-label="Navigation principale">
        <a className="nav__brand" href="#top">
          Fabl
        </a>
        <ul className="nav__links">
          <li>
            <a href="#prestations">Prestations</a>
          </li>
          <li>
            <a href="#preproduction">Pré-production</a>
          </li>
          <li>
            <a href="#production">Production</a>
          </li>
          <li>
            <a href="#ateliers">Ateliers</a>
          </li>
          <li>
            <a href="#conseil">Conseil</a>
          </li>
          <li>
            <a href="#persona">Persona</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <header className="hero" id="top">
        <div className="hero__media" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__brand">Fabl</p>
          <h1 className="hero__headline">
            Deux talents pour une vision : celle de votre jeu.
          </h1>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#prestations">
              Voir les prestations
            </a>
            <a className="btn btn--ghost" href="#contact">
              Entrer en contact
            </a>
          </div>
        </div>
      </header>

      <Reveal as="section" className="section section--tight" id="approche">
        <div className="section__inner">
          <p className="section__eyebrow">Approche</p>
          <h2 className="section__title">Une pluralité de regards</h2>
          <p className="section__lede">
            Face aux exigences d'un jeu vidéo, Fabl teste, bouscule, joue les
            scènes à voix haute. On affine en direct pour livrer une matière
            brute, vivante, immédiatement prête à l'intégration.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="section forge" id="prestations">
        <div className="section__inner">
          <p className="section__eyebrow">Ce que nous créons</p>
          <h2 className="section__title">Des récits qui restent</h2>
          <p className="section__lede">
            Nous façonnons des expériences narratives calées au millimètre
            sur votre gameplay — du World Building à la dernière ligne de
            dialogue.
          </p>

          <ul className="offer-list offer-list--titled">
            {creations.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="propose">
            <p className="propose__label">Nous vous proposons aussi</p>
            <ul className="propose__list">
              {propositions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section section--tight" id="services">
        <div className="section__inner">
          <p className="section__eyebrow">Nos services</p>
          <h2 className="section__title">Présents à chaque étape</h2>
          <p className="section__lede section__lede--wide">
            Du relief dans les histoires. Des solutions en prod. De la
            fluidité à l'intégration.
          </p>
          <p className="section__lede">
            Nous sommes là pour toutes les étapes de votre projet. En amont
            ou en aval de la production, nous pouvons intervenir à tout
            moment.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="section" id="preproduction">
        <div className="section__inner">
          <p className="section__eyebrow">À la pré-production</p>
          <h2 className="section__title">Poser les fondations</h2>
          <div className="service-grid">
            {preproduction.map((item, index) => (
              <article className="service-item" key={item.title}>
                <span className="service-item__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="service-item__title">{item.title}</h3>
                <p className="service-item__text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section forge" id="production">
        <div className="section__inner">
          <p className="section__eyebrow">En production</p>
          <h2 className="section__title">Écrire, soigner, livrer</h2>
          <div className="service-grid service-grid--three">
            {production.map((item, index) => (
              <article className="service-item" key={item.title}>
                <span className="service-item__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="service-item__title">{item.title}</h3>
                <p className="service-item__text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section" id="ateliers">
        <div className="section__inner">
          <p className="section__eyebrow">Formation</p>
          <h2 className="section__title">Ateliers & Transmission</h2>
          <div className="audiences">
            <article className="audience">
              <h3 className="audience__title">Ateliers d'équipe</h3>
              <p className="audience__text">
                Explorer, structurer et débloquer la narration directement
                avec vos équipes.
              </p>
            </article>
            <article className="audience">
              <h3 className="audience__title">Mentorat</h3>
              <p className="audience__text">
                Un accompagnement exigeant et bienveillant pour vos narrative
                designers, ancré dans la réalité de la prod.
              </p>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section adn" id="conseil">
        <div className="section__inner">
          <p className="section__eyebrow">Conseil & Stratégie</p>
          <h2 className="section__title">Cadrage prod</h2>
          <p className="section__lede section__lede--wide">
            Détecter les points de friction avant qu'ils ne coûtent cher.
            Méthodes, outils, budgets : des solutions concrètes pour que la
            narrative serve le jeu.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="section persona" id="persona">
        <div className="section__inner">
          <p className="section__eyebrow">La salle d'écriture au micro</p>
          <h2 className="section__title">Podcast Persona</h2>
          <div className="persona__layout">
            <div className="persona__copy">
              <p>
                Chaque épisode, on désosse un personnage de fiction jusqu'à
                l'os. Ses failles, ses biais, sa mécanique intime.
              </p>
              <p>
                Pas de cours magistral : un ping-pong instinctif, vivant,
                argumenté. Notre façon de vous montrer comment on réfléchit,
                semaine après semaine.
              </p>
            </div>
            <aside className="persona__stage" aria-label="Aperçu Persona">
              <div className="persona__wave" aria-hidden="true">
                {waveHeights.map((height, index) => (
                  <span
                    key={index}
                    className="persona__bar"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <p className="persona__caption">
                Désosser un personnage jusqu'à l'os.
              </p>
              <p className="persona__meta">Écoute · Analyse · Transmission</p>
            </aside>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section" id="adn">
        <div className="section__inner">
          <p className="section__eyebrow">Positionnement</p>
          <h2 className="section__title">ADN</h2>
          <p className="section__lede section__lede--wide">
            Pas de théorie hors-sol. On connaît le terrain, la réalité des
            budgets et les contraintes de pipeline. On s'immerge dans votre
            équipe, on épouse votre rythme, et on livre du concret : une
            narration sur mesure pour vous et vos joueurs.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="section contact" id="contact">
        <div className="section__inner">
          <p className="section__eyebrow">Contact</p>
          <h2 className="section__title">Parlons de votre jeu</h2>
          <div className="contact__panel">
            <p className="contact__note">
              Une pré-prod à lancer, un dialogue à affûter, un atelier à
              organiser ? Écrivez-nous.
            </p>
            <a className="btn btn--primary" href="#prestations">
              Revoir les prestations
            </a>
          </div>
        </div>
      </Reveal>

      <footer className="footer">
        <div className="footer__inner">
          <span className="footer__brand">Fabl</span>
          <span>Studio de narrative design</span>
        </div>
      </footer>
    </div>
  );
}
