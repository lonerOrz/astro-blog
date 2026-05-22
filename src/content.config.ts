import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: baseSchema.extend({
    tags: z.array(z.string()).optional(),
  }),
});

const series = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/series" }),
  schema: baseSchema.extend({
    seriesOrder: z.number().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
  schema: z.object({
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    title: z.string().optional(),
  }),
});

export const collections = { blog, series, notes };
