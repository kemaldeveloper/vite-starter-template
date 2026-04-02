import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve();

export default defineConfig({
  root: resolve(root, "src"),
  base: "./",
  plugins: [tailwindcss()],
  appType: "mpa",

  build: {
    modulePreload: false,
    outDir: resolve(root, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(root, "src/index.html"),
        components: resolve(root, "src/components.html"),
      },
    },
  },
  css: {
    devSourcemap: true,
  },
});
