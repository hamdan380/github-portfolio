// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://hamdan380.github.io",
  base: "/github-portfolio",
  vite: {
    plugins: [tailwindcss()],
    
  },
});
