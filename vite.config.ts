import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Blue Sudoku",
        short_name: "BlueSu",
        background_color: "#0C4A6E",
        categories: ["entertainment", "games"],
        theme_color: "#0C4A6E",
        orientation: "natural",
        description:
          "Sudoku puzzle to challenge yourself and trick a little bit your brain. ",
        icons: [
          {
            src: "/app-icon.png",
            type: "image/png",
            sizes: "512x512",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
