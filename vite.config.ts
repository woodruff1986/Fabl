import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project Pages URL: https://woodruff1986.github.io/Fabl/
const base = process.env.GITHUB_ACTIONS === "true" ? "/Fabl/" : "/";

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
  },
  preview: {
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
