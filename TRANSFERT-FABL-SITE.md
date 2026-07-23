# Transfert vers woodruff1986/Fabl-site

Ce dépôt `Fabl` (privé) contient l’export prêt pour le dépôt **public**
[Fabl-site](https://github.com/woodruff1986/Fabl-site).

L’agent Cursor n’a **pas** d’accès write à `Fabl-site` (403). Une action manuelle est nécessaire.

## Option A — depuis cette branche (recommandé)

Sur une machine où votre compte GitHub a les droits sur `Fabl-site` :

```bash
git clone https://github.com/woodruff1986/Fabl.git
cd Fabl
git checkout cursor/export-fabl-site-a9ad
git remote add fabl-site https://github.com/woodruff1986/Fabl-site.git
git push fabl-site cursor/export-fabl-site-a9ad:main --force
```

Puis sur GitHub → **Fabl-site** → Settings → Pages :
- Source : Deploy from a branch
- Branch : `gh-pages` / root

Ensuite : Actions → **Deploy GitHub Pages** → Run workflow  
(ou push un commit vide sur `main` pour déclencher le workflow).

URL attendue : **https://woodruff1986.github.io/Fabl-site/**

## Option B — autoriser Cursor

GitHub → Settings → Applications → **Cursor** → Repository access  
→ ajouter **Fabl-site**, puis relancer l’agent.

## Contenu inclus

- Site Vite/React V1 (`/`) + V2 (`/v2`) + podcast
- `docs/Fabl-textes-site.docx`
- `docs/marketing/`
- `docs/brand/`
- `docs/screenshots/`
- Workflow `.github/workflows/deploy-pages.yml` (base `/Fabl-site/`)
