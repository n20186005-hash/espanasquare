# Fotografías reales de Plaza España (Córdoba)

Este directorio contiene fotografías reales de Plaza España, Córdoba, descargadas de Wikimedia Commons. Las fuentes, autores y licencias están documentados en `photo-sources.json` (máquina) y en `../../ATTRIBUTIONS.md` (humano).

## Archivos en uso por el sitio

| Archivo local | Uso en el sitio |
|---|---|
| `plaza-espana-hero.jpg` | Imagen principal de la galería («vista desde altura») e imagen por defecto de Open Graph |
| `plaza-espana-2007.jpg` | Galería — Plaza España en 2007 |
| `plaza-espana-mmau-night.jpg` | Galería — MMAU iluminado de noche |

## Archivos complementarios

- `plaza-espana-mmau-day.jpg` — MMAU de día (sin referencia en el sitio; disponible si se desea ampliar la galería)
- `social-cover.png` / `social-cover.svg` — portada para redes sociales (sin referencia actual)

## Cómo descargar o actualizar

```
bash scripts/download-assets.sh
```

Requiere acceso a Wikimedia Commons. La fuente original de `plaza-espana-hero.jpg` y `plaza-espana-2007.jpg` también se puede obtener desde los enlaces de `photo-sources.json`.
