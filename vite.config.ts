import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  server: {
    port: 3000,
    open: true, // This will open the browser automatically
  },
  plugins: [
    react(),
    command === 'serve' &&
    componentTagger(),
  ].filter(Boolean),
  base: mode === 'production' ? '/Nutriscoop-Web/' : '/',
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
    assetsDir: 'assets',
    copyPublicDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name) {
            const info = assetInfo.name.split('.');
            let extType = info[info.length - 1];
            if (/\.(png|jpe?g|svg|gif|bmp|webp)$/i.test(assetInfo.name)) {
              return `images/[name][extname]`;
            }
            return `assets/[name][extname]`;
          }
          return 'assets/[name]-[hash][extname]';
        },
      }
    }
  },
}));
