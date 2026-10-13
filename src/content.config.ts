import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Obra comentada en cada sección (película, serie o videojuego)
const obra = z.object({
  titulo: z.string(),
  anio: z.number().int(),
  autor: z.string(), // director, creador o estudio
  llaves: z.number().int().min(1).max(5).optional(), // sin nota = pendiente
});

const episodios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodios' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      numero: z.number().int().positive(),
      descripcion: z.string(), // una o dos frases para tarjetas y redes
      fecha: z.coerce.date(),
      duracion: z.string().regex(/^\d{2}:\d{2}:\d{2}$/), // hh:mm:ss
      audio: z.url(),
      portada: image(),
      editorial: z.string(),
      pelicula: obra,
      serie: obra,
      videojuego: obra,
      capitulos: z.array(
        z.object({
          seccion: z.string(),
          tiempo: z.string().regex(/^\d{2}:\d{2}$/), // mm:ss
        }),
      ),
    }),
});

export const collections = { episodios };
