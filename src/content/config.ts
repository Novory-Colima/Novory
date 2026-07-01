import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    author: z.string().default('Novory Team'),
    tags: z.array(z.string()).default([]),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    businessName: z.string(),
    problem: z.string(),
    solution: z.string(),
    result: z.string(),
    technologies: z.array(z.string()),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { 
  'blog': blog, 
  'case-studies': caseStudies 
};
