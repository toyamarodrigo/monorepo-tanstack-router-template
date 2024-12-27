import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const ReactCompilerConfig = {
  target: "18",
};

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    TanStackRouterVite({
      routeTreeFileHeader: [
        "/* eslint-disable eslint-comments/no-unlimited-disable */",
        "/* eslint-disable */",
      ],
      generatedRouteTree: "./src/route-tree.gen.ts",
    }),
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
  ],
  optimizeDeps: {
    include: ["react-compiler-runtime"],
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
    },
  },
});
