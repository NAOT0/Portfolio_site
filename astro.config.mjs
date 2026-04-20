// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";
// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), mdx()],
  site: "https://NAOT0.github.io",
  // リポジトリ名が「Portfolio_site」ならその名前を入れます
  // ユーザーページ（ユーザー名.github.io自体）として出すなら不要です
  base: "/Portfolio_site",
});
