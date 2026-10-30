// Canonical site/brand name used for <title>, og:site_name and application-name.
// Format: "Nombre del atractivo + Ciudad + Guía de Viaje".
export const SITE_NAME = 'Plaza España Córdoba — Guía de Viaje';
export const SITE_URL = 'https://espanasquare.com';

// Hecho comprobado de la plaza (fuente: ficha de Google Maps, revisada el 30 de octubre de 2026).
// No es una puntuación recolectada por este sitio: se muestra como instantánea de un listado de terceros.
export const ATTRACTION = {
  name: 'Plaza España, Córdoba, Argentina',
  alternateName: ['Plaza España Nueva Córdoba', 'España Square Córdoba'],
  ratingValue: 4.1,
  reviewCount: 25420,
  asOf: '30 de octubre de 2026',
  mapsUrl: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8',
  geo: { lat: -31.4285745, lng: -64.1848176 },
  address: 'Pl. España, X5000 Córdoba, Argentina',
  url: 'https://espanasquare.com/',
};

// Fuente municipal de Turismo Córdoba Capital (historia y MMAU).
export const SOURCES = {
  plazaHistoria: 'https://turismo.cordoba.gob.ar/cordoba-a-cielo-abierto-plaza-espana/',
  mmau: 'https://turismo.cordoba.gob.ar/sedes-emblematicas-museo-mmau/',
  plazaYMuseo:
    'https://turismo.cordoba.gob.ar/ya-se-puede-visitar-la-plaza-espana-y-el-nuevo-museo-metropolitano-de-arte-urbano/',
};

// Embed de Google Maps (coordenadas de la plaza) y enlace de direcciones.
export const PLAZA_EMBED = 'https://www.google.com/maps?q=-31.4285745,-64.1848176&output=embed';
export const PLAZA_DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=-31.4285745,-64.1848176';
