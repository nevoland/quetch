import { resolve } from "path";

import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import moduleList from "vite-plugin-module-list";

export default defineConfig({
  plugins: [
    moduleList({
      mode: "named-static-no-extension",
      rootPath: resolve("lib/tools"),
      outputPath: resolve("lib/tools.ts"),
    }),
    moduleList({
      mode: "named-static-no-extension",
      rootPath: resolve("lib/middlewares"),
      outputPath: resolve("lib/middlewares.ts"),
    }),
    moduleList({
      mode: "named-static-no-extension",
      rootPath: resolve("lib/errors"),
      outputPath: resolve("lib/errors.ts"),
    }),
    moduleList({
      mode: "named-static-no-extension",
      rootPath: resolve("src/components"),
      outputPath: resolve("src/components.ts"),
    }),
    preact(),
  ],
  clearScreen: false,
  build: {
    outDir: "dist/demo",
  },
});