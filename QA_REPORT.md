# QA report

## Completado
- Idioma del sitio: español de Argentina (`es-AR`).
- No se incluyen textos de interfaz en chino ni mezcla de idiomas en las páginas visibles.
- Página principal de una sola página con historia, arquitectura, costos, horarios recomendados, duración, transporte, aeropuerto, bus, taxi/remís, estacionamiento, WC, accesibilidad, alimentación, alojamiento, compras, combustible/carga, entorno, mapa y FAQ.
- Política de privacidad, términos y cookies son páginas independientes.
- JSON-LD `TouristAttraction` y `FAQPage` incluidos.
- Google Maps configurado con español latinoamericano/región Argentina.
- GA4 condicionado al consentimiento.
- Logo y favicons locales coherentes.
- `SITE` centralizado en `astro.config.ts`; sitemap condicional.
- No existe `pnpm-workspace.yaml`.

## Bloqueos del entorno
1. El contenedor no pudo resolver `registry.npmjs.org`, por lo que no se pudo generar un `pnpm-lock.yaml` auténtico ni ejecutar la cadena `pnpm install --frozen-lockfile -> pnpm check -> pnpm build`.
2. El contenedor tampoco pudo resolver `commons.wikimedia.org` ni `upload.wikimedia.org`, por lo que las fotografías reales no pudieron descargarse a `public/images/` en esta sesión.

No se ha falsificado ningún resultado de build ni se han creado imágenes artificiales presentándolas como fotografías reales.
