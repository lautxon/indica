// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const cancionesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    audio_url: z.string().optional(),
    date: z.date(),
    body: z.string().optional(),
  }),
});

export const collections = {
  'canciones': cancionesCollection,
};