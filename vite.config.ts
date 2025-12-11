import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// IMPORTANT: Remove Replit-only plugins (they break GitHub Pages)

export default defineConfig({
  plugins: [react()],

  // REQUIRED for GitHub Pages
  base: "/TelcB1SpeakingTest/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  // Use standard Vite project root (not Replit's custom structure)
  root: path.resolve(__dirname, "client"),

  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },

  server: {
    fs: {
      strict: false,
    },
  },
});
