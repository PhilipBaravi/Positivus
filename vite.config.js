import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/Positivus/" : "/",
  plugins: [react(), svgr()],
});
