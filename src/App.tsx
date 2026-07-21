import { Reveal } from "./components/Reveal";

const forgePillars = [
  {
    index: "01",
    title: "L'Architecture",
    subtitle: "Worldbuilding & Lore",
    text: "Construire les fondations d'un univers, ses mythes, son économie et ses tensions politiques, sous forme de bibles narratives claires et directement exploitables par les autres corps de métier.",
  },
  {
    index: "02",
    title: "L'Incarnation",
    subtitle: "Personnages & Dialogues",
    text: "Façonner des arcs narratifs profonds et écrire des dialogues qui sonnent juste, avec cette légère asymétrie propre à l'oralité humaine.",
  },
  {
    index: "03",
    title: "La Mécanique",
    subtitle: "Barks & Arborescences",
    text: "Rédiger ces milliers de petites phrases jetées dans l'action qui donnent l'illusion d'un monde vivant, et structurer les embranchements conditionnels sans perdre le fil émotionnel.",
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
            <a href="#forge">La Forge</a>
          </li>
          <li>
            <a href="#transmission">Transmission</a>
          </li>
          <li>
            <a href="#persona">Persona</a>
          </li>
          <li>
            <a href="#adn">ADN</a>
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
            <a className="btn btn--primary" href="#forge">
              Découvrir l'offre
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
          <div className="duo">
            <article className="duo__voice">
              <p className="duo__label">Sensibilité A</p>
              <p className="duo__text">
                « On n'écrit pas de la littérature — on designe de la
                narration, calée sur le moteur et le gameplay. »
              </p>
            </article>
            <article className="duo__voice duo__voice--b">
              <p className="duo__label">Sensibilité B</p>
              <p className="duo__text">
                « Du macro au micro : la bible, l'arc, puis le bark qui fait
                vivre le monde pendant l'action. »
              </p>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section forge" id="forge">
        <div className="section__inner">
          <p className="section__eyebrow">L'offre de production</p>
          <h2 className="section__title">La Forge</h2>
          <p className="section__lede">
            Artisanat de l'ombre : s'intégrer à l'équipe, absorber la vision
            d'un creative director, livrer ce que le pipeline peut brancher.
          </p>
          <div className="pillars">
            {forgePillars.map((pillar) => (
              <article className="pillar" key={pillar.index}>
                <span className="pillar__index">
                  {pillar.index} — {pillar.subtitle}
                </span>
                <h3 className="pillar__title">{pillar.title}</h3>
                <p className="pillar__text">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section" id="transmission">
        <div className="section__inner">
          <p className="section__eyebrow">L'offre de formation</p>
          <h2 className="section__title">La Transmission</h2>
          <p className="section__lede">
            Un studio qui forme est un studio qui a théorisé sa propre
            pratique — pour les équipes en place et pour la relève.
          </p>
          <div className="audiences">
            <article className="audience">
              <h3 className="audience__title">Les professionnels</h3>
              <p className="audience__text">
                Accompagner les équipes internes d'un studio de développement
                — game designers, producteurs — pour leur donner les clés de
                la narration interactive et fluidifier les processus de
                production.
              </p>
            </article>
            <article className="audience">
              <h3 className="audience__title">La relève</h3>
              <p className="audience__text">
                Former les futurs auteurs et narrative designers, en leur
                évitant les pièges classiques et en les confrontant
                immédiatement à la réalité des outils et des contraintes de
                l'industrie.
              </p>
            </article>
          </div>
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

      <Reveal as="section" className="section adn" id="adn">
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
              Worldbuilding, dialogues, formation d'équipe ou échange autour
              d'un personnage — le duo se rencontre sur les salons et auprès
              des équipes de production.
            </p>
            <a className="btn btn--primary" href="#forge">
              Voir la Forge
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
