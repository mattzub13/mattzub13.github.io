import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // applyBaseStyles: false porque global.css ya incluye las directivas @tailwind
  integrations: [tailwind({ applyBaseStyles: false }), react()],
  site: "https://mattzub13.github.io",
  base: "/",
});