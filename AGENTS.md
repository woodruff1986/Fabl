# Fabl

Static single-page marketing site for a French narrative-design studio. React 19 + TypeScript + Vite. No backend, database, or auth.

## Cursor Cloud specific instructions

- This is a single frontend package at the repo root. Commands are the npm scripts in `package.json`: `npm run dev` (Vite dev server, port 5173), `npm run build` (`tsc -b && vite build` → `dist/`), `npm run lint` (oxlint), `npm run preview` (serves built `dist/`).
- There is no test suite (no test script or test files). Validate changes via `npm run build` (type-checks) and manual browser checks against the dev server.
- The dev server binds to `localhost:5173` by default. Use `npm run dev -- --host` if you need it reachable on the VM network interface.
- The site loads Google Fonts from a CDN at runtime; this is cosmetic only and its absence does not break functionality.
- Product content is entirely hardcoded (in French) in `src/App.tsx`. Navigation is anchor-based (`#forge`, `#persona`, etc.) with scroll-reveal animations via `src/components/Reveal.tsx`.
