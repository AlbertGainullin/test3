import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: "/src/api",
      components: "/src/components",
      hooks: "/src/hooks",
      store: "/src/store",
    },
  },
});
