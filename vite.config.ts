import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  server: {
    port: 3000,
    open: true, // This will open the browser automatically
  },
  plugins: [
    react(),
    command === 'serve' &&
    componentTagger(),
  ].filter(Boolean),
  base: command === 'build' ? '/Nutriscoop-Web/' : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    emptyOutDir: true,
  },
}));
