# Guía Plaza España Córdoba

Micrositio informativo independiente y sin fines de lucro sobre Plaza España, Córdoba, Argentina.

## Stack
- Astro 7.2.6
- Tailwind CSS 4.3.3
- TypeScript 6.0.3
- @astrojs/cloudflare 14.2.3
- @astrojs/sitemap 3.7.3
- pnpm 11.24.0
- Node.js 24.19.0
- Cloudflare Workers

## Configuración del dominio
El origen de producción se configura **solo** en `astro.config.ts`, constante `SITE`. Puede permanecer vacío: el proyecto no inventa dominios y el sitemap solo se activa cuando `SITE` tiene valor.

## Imágenes
El sitio espera tres fotografías reales en `public/images/`. El script `pnpm assets:download` las descarga desde Wikimedia Commons y mantiene las páginas de atribución en `ATTRIBUTIONS.md`.

> Nota del paquete generado en esta sesión: el entorno de ejecución no pudo resolver `commons.wikimedia.org`/`upload.wikimedia.org`, por lo que no fue posible descargar los binarios de las fotografías en este contenedor. No se sustituyeron por imágenes generadas artificialmente ni por archivos falsos.

## Instalación y validación
```bash
corepack enable
pnpm assets:download
CI=1 corepack pnpm install
pnpm check
pnpm build
pnpm audit:dist
```

Para la validación final exigida:
```bash
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm audit:dist
```

## Fuentes informativas principales
- Turismo de la Municipalidad de Córdoba: ficha de Plaza España.
- Cultura de la Municipalidad de Córdoba: Museo Metropolitano de Arte Urbano.
- Turismo de Córdoba: circuito Centro Histórico y Nueva Córdoba.
- Google Maps: dirección, puntuación y cantidad de reseñas aportadas por el solicitante.

## Privacidad
Google Analytics 4 (`G-HXM22WWPKP`) solo se carga después de que el visitante habilita cookies analíticas en `/cookies/`.
