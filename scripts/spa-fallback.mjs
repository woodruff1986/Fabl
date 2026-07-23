import { copyFileSync } from "node:fs";

// GitHub Pages serves 404.html for unknown paths — copy index for SPA routes.
copyFileSync("dist/index.html", "dist/404.html");
console.log("SPA fallback: dist/404.html");
