import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const shows = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/shows' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      image: image(),
      imageAlt: z.string(),
      hero: image(),
      gallery: z.array(image()).default([]),
      facts: z.array(z.object({ label: z.string(), value: z.string() })),
      credits: z.array(z.object({ role: z.string(), name: z.string() })).default([]),
      why: z.array(z.string()).default([]),
      experience: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(99),
    }),
});

const workshops = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/workshops' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      image: image(),
      imageAlt: z.string(),
      gallery: z.array(image()).default([]),
      facts: z.array(z.object({ label: z.string(), value: z.string() })),
      what: z.array(z.string()).default([]),
      why: z.array(z.string()).default([]),
      badge: z.string().optional(),
      order: z.number().default(99),
    }),
});

export const collections = { shows, workshops };
