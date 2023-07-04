import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: ({ name, ext }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(ext)) {
            return `assets/images/[name]-[hash][ext]`;
          }

          if (ext === ".css") {
            return `assets/css/[name]-[hash][ext]`;
          }

          return `assets/[name]-[hash][ext]`;
        },
      },
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
  optimizeDeps: {
    include: ["pdf-lib"],
  },
});
