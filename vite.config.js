import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

const docsInputs = Object.fromEntries(
  ["ru", "eng"].flatMap((lang) =>
    readdirSync(resolve(lang))
      .filter((file) => file.endsWith(".html"))
      .map((file) => [`${lang}/${file.replace(/\.html$/, "")}`, resolve(lang, file)])
  )
);

export default defineConfig({
  base: "./",
  publicDir: false,
  plugins: [svelte()],
  build: {
    chunkSizeWarningLimit: 900,
    outDir: "public",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve("index.html"),
        ...docsInputs
      }
    }
  }
});
