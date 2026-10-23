# Plaza España, Córdoba — guía independiente

Guía en español de Argentina sobre la plaza de Nueva Córdoba. Astro sirve las páginas y el pronóstico meteorológico desde Cloudflare Workers; el clima se obtiene en el servidor mediante Open-Meteo.

## Desarrollo y validación

Requiere Node.js 24 y pnpm según `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

La salida SSR está en `dist/server`, con recursos públicos en `dist/client`. Usá la configuración generada por el adaptador para ejecutar o desplegar el Worker; un directorio sin HTML estático no acredita por sí solo las rutas SSR. Las páginas públicas son `/`, `/privacidad/`, `/terminos/` y `/cookies/`; los errores devuelven 404.

Las fuentes oficiales se enlazan en la guía. La ficha de Maps para el exterior no establece los horarios del MMAU. Las fotos tienen créditos visibles y documentación en `ATTRIBUTIONS.md`; `pnpm assets:download` descarga los dos originales conservados.

Google Analytics mantiene la autorización opcional en `/cookies/`. La elección no controla mapas, clima ni recursos o registros propios del alojamiento.
