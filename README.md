# Fabl-site

Site officiel du studio de narrative design **Fabl**, hébergé via GitHub Pages.

**URL :** https://woodruff1986.github.io/Fabl-site/

## Contenu du dépôt

- `src/` — application Vite + React (V1 + V2)
- `public/` — assets (logos partenaires, vignettes expériences)
- `docs/Fabl-textes-site.docx` — textes sources du site
- `docs/marketing/` — base de connaissance SEO / craft narrative design
- `docs/brand/` — planches logo & typographie
- `docs/screenshots/` — captures de référence

## Développement

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Hébergement

Déploiement automatique sur la branche `gh-pages` à chaque push sur `main`
(`.github/workflows/deploy-pages.yml`).

Activer Pages : Settings → Pages → Source = Deploy from a branch → Branch `gh-pages` / root.

Routes :
- `/` — V1
- `/v2` — V2 (direction visuelle type inodes.ai)
- `/podcast` · `/v2/podcast`
