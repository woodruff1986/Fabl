const ACAST_SHOW_URL = "https://shows.acast.com/persona";
const ACAST_EMBED_URL = "https://embed.acast.com/persona";

type AcastEmbedProps = {
  title?: string;
  height?: number;
  className?: string;
};

export function AcastEmbed({
  title = "Podcast Persona sur Acast",
  height = 280,
  className = "acast-embed",
}: AcastEmbedProps) {
  return (
    <div className={className}>
      <iframe
        title={title}
        src={ACAST_EMBED_URL}
        loading="lazy"
        allow="autoplay"
        style={{ width: "100%", height, border: 0, borderRadius: 0 }}
      />
      <p className="acast-embed__link">
        <a href={ACAST_SHOW_URL} target="_blank" rel="noreferrer">
          Écouter sur Acast
        </a>
      </p>
    </div>
  );
}

export { ACAST_SHOW_URL };
