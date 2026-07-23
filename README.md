# Fabl

Site de présentation du studio de narrative design **Fabl**.

## Développement

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Sortie dans `dist/`.

## Hébergement GitHub Pages

Le site est déployé automatiquement sur GitHub Pages à chaque push sur `main`
(workflow `.github/workflows/deploy-pages.yml`).

URL attendue :

**https://woodruff1986.github.io/Fabl/**

### Première activation

1. Repo → **Settings** → **Pages**
2. Source : **GitHub Actions**
3. Merger sur `main` (ou lancer le workflow manuellement via **Actions**)

> Si le dépôt est **privé**, GitHub Pages nécessite un plan Pro/Team, ou
> passez le dépôt en public.

V2 du site : `/v2` — Podcast : `/podcast` et `/v2/podcast`
