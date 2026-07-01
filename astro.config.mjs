// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    icon(),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  ],
  site: "https://NAOT0.github.io",
  base: "/Portfolio_site",
  trailingSlash: "always",
});
