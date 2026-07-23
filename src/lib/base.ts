/** Prefix a site path with Vite's configured base (needed for GitHub Pages). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (!path) return base;
  if (/^https?:\/\//i.test(path)) return path;
  const cleaned = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${cleaned}`;
}

/** Basename for React Router (no trailing slash). */
export function routerBasename(): string | undefined {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return base.length > 0 ? base : undefined;
}
