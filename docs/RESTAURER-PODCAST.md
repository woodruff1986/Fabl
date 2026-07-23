# Restaurer le podcast Persona

Le podcast est **masqué** du site (nav, sections home V1/V2, footer, routes) mais le code est conservé.

## Fichiers intact

- `src/components/AcastEmbed.tsx` — embed Acast (`https://embed.acast.com/persona`)
- `src/pages/PodcastPage.tsx` — page V1 `/podcast`
- `src/pages/v2/PodcastPageV2.tsx` — page V2 `/v2/podcast`
- Styles : `.persona`, `.podcast-*` dans `src/index.css` ; `.v2-persona` dans `src/v2.css`

## Réactivation (checklist)

1. **`src/App.tsx`** — décommenter les imports + routes `/podcast` et `/v2/podcast`.
2. **`src/pages/HomePage.tsx`** — remettre le lien nav `#persona` et la section `#persona` (AcastEmbed + CTA vers `/podcast`). Réimporter `Link` et `AcastEmbed`.
3. **`src/pages/v2/HomePageV2.tsx`** — remettre nav `#persona` / `/v2/podcast` et la section `#persona`. Réimporter `AcastEmbed`.
4. **`src/components/v2/V2Shell.tsx`** — footer : liens Podcast + Acast.

Contenu section (rappel) :

- Titre : Podcast Persona
- Eyebrow : La salle d'écriture au micro
- Pitch : désosser un personnage / ping-pong instinctif
- Quote : « Désosser un personnage jusqu'à l'os. »
- Meta : Écoute · Analyse · Transmission
- Acast : `https://shows.acast.com/persona`
