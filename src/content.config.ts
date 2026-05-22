import { defineCollection, z } from "astro:content";
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

export const collections = { blog, series };
