import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    // Allow the Emergent preview proxy host
    allowedHosts: true,
    hmr: {
      clientPort: 443,
      protocol: "wss",
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
  },
  build: {
    outDir: "build",
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
  },
  // Accept both VITE_* and legacy REACT_APP_* env vars in source code
  envPrefix: ["VITE_", "REACT_APP_"],
});
