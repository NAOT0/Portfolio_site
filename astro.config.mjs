// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";
// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), mdx()],
  site: "https://NAOT0.github.io",
  base: "/Portfolio_site",
});
