// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [
      icon(),
      sanity({
          projectId: "tsbiqnoe",
          dataset: "production",
          // Set useCdn to false if you're building statically.
          useCdn: false,
          studioBasePath: "/admin",
      }),
      ,
      react(),
	],

  adapter: netlify(),
});