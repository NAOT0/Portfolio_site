// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    category: z.enum(["Tech", "Activity", "Novel", "Other"]),
    description: z.string().max(160),
  }),
});

// Projects用のコレクション定義を追加
const projects = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()), // 配列として定義
    category: z.enum(["Web", "Convention", "Research", "Column"]),
    date: z.string(), // "2025-11" などの文字列
    github: z.string().url().optional(),
    site: z.string().url().optional(),
    kakuyomu: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { news, projects }; // 両方をエクスポート
