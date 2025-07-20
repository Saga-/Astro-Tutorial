// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://incredible-rugelach-8401cf.netlify.app",
  integrations: [preact()],
});