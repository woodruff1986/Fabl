import { Reveal } from "./components/Reveal";

const creations = [
  "Des expériences de jeu immersives et inoubliables",
  "Des mondes imaginaires et des récits captivants",
  "Des personnages divers, complexes et passionnants",
  "Des game designs riches et engageants",
  "Des adaptations de licences — ou la conception de licences cross-médias",
  "Des dialogues riches, profonds, adaptés au ton du jeu et à son gameplay",
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
    title: "Écriture",
    text: "En tandem, en solo ou avec votre équipe : descriptions et dialogues en français ou en anglais, qui enrichissent l'expérience joueur tout en limitant le budget de traduction. Écrire le contenu narratif du jeu.",
  },
  {
    title: "Écriture d'urgence",
    text: "En cas de besoin urgent, nous sommes deux pour garantir la livraison d'un livrable qu'exige à la dernière minute votre éditeur.",
  },
  {
    title: "Scriptdoctoring",
    text: "Vous accompagner pour construire et concevoir l'histoire que vous avez en tête.",
  },
  {
    title: "Révision",
    text: "Trouver des améliorations, des solutions, et éviter des complications futures.",
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
            Le narrative design comme mécanique de précision.
          </h1>
          <p className="hero__lede">
            Studio bicéphale — un homme, une femme, une caisse de résonance
            pour croiser les sensibilités et éprouver la musicalité des
            dialogues.
          </p>
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
            Face aux exigences d'un jeu vidéo, le binôme limite naturellement
            les angles morts : caractérisation croisée, ping-pong à voix
            haute, et matériau prêt à être implémenté.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="section forge" id="prestations">
        <div className="section__inner">
          <p className="section__eyebrow">Ce que nous créons</p>
          <h2 className="section__title">Nos prestations</h2>
          <p className="section__lede">
            Nous pouvons créer pour vous des expériences narratives calées
            sur le gameplay — du monde au dialogue, de la licence au design.
          </p>

          <ul className="offer-list">
            {creations.map((item) => (
              <li key={item}>{item}</li>
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
          <div className="service-grid service-grid--four">
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
          <h2 className="section__title">Des ateliers</h2>
          <p className="section__lede">
            Forts de notre expérience d'enseignants et d'intervenants à
            l'ISART, Brassart ou ArtworkVFX, nous transmettons à vos équipes
            les théories dramaturgiques et narratives.
          </p>
          <div className="audiences">
            <article className="audience">
              <h3 className="audience__title">Ateliers d'équipe</h3>
              <p className="audience__text">
                Explorer, affiner et structurer la narration de votre projet
                — une occasion concrète de mettre la théorie au service de
                votre production.
              </p>
            </article>
            <article className="audience">
              <h3 className="audience__title">Mentorat</h3>
              <p className="audience__text">
                Un accompagnement bienveillant et pédagogique pour votre
                narrative designer, au plus près des contraintes du pipeline.
              </p>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section adn" id="conseil">
        <div className="section__inner">
          <p className="section__eyebrow">Accompagnement</p>
          <h2 className="section__title">Du conseil</h2>
          <p className="section__lede">
            Avant ou pendant la production, nous vous aidons à construire,
            planifier et budgéter la partie narrative de votre jeu —
            outils, méthodes, et détection des points de friction.
          </p>
          <p className="adn__quote">
            Apporter surtout des solutions, des recommandations, des idées
            et des outils qui facilitent la pré-production comme la
            production.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="section persona" id="persona">
        <div className="section__inner">
          <p className="section__eyebrow">Laboratoire à ciel ouvert</p>
          <h2 className="section__title">Podcast Persona</h2>
          <div className="persona__layout">
            <div className="persona__copy">
              <p>
                À chaque épisode, le duo s'empare d'un personnage de fiction
                pour le désosser minutieusement : psychologie, arc narratif,
                failles, biais, contradictions.
              </p>
              <p>
                L'analyse devient organique — rythmée par l'échange, les
                nuances, les contre-arguments. C'est le ping-pong de la salle
                d'écriture, capturé au micro.
              </p>
              <p>
                Pour les producteurs, directeurs créatifs ou élèves
                potentiels, Persona agit comme une carte de visite : une
                démonstration en temps réel de l'acuité du regard, semaine
                après semaine.
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
                Désosser un protagoniste jusqu'à l'os moral.
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
          <p className="section__lede">
            Structure agile, ancrée dans le réel. Le duo arpente les
            événements de l'industrie, rencontre les producteurs de front,
            et comprend intimement les réalités financières et techniques
            du milieu.
          </p>
          <p className="adn__quote">
            Des partenaires créatifs capables de s'intégrer temporairement à
            une équipe de développement — et de livrer un matériau prêt à
            être implémenté.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="section contact" id="contact">
        <div className="section__inner">
          <p className="section__eyebrow">Prochaine étape</p>
          <h2 className="section__title">Parlons production</h2>
          <div className="contact__panel">
            <p className="contact__note">
              Pré-production, écriture, ateliers ou conseil narratif — le
              duo intervient auprès des équipes de développement à chaque
              étape du projet.
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
