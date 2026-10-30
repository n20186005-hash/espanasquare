import { ATTRACTION, SITE_NAME, SITE_URL, SOURCES } from '../data/site';

// Estructura de datos estructurados. Separa la entidad del atractivo de la
// entidad editora (sitio/Organización) para no presentar el sitio como la
// autoridad oficial del espacio.

export function attractionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${SITE_URL}/#attraction`,
    name: ATTRACTION.name,
    alternateName: ATTRACTION.alternateName,
    url: ATTRACTION.url,
    description:
      'Guía independiente de Plaza España, en Nueva Córdoba, Argentina, y su relación con el Museo Metropolitano de Arte Urbano (MMAU).',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pl. España',
      addressLocality: 'Córdoba',
      addressRegion: 'Córdoba',
      postalCode: 'X5000',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ATTRACTION.geo.lat,
      longitude: ATTRACTION.geo.lng,
    },
    hasMap: ATTRACTION.mapsUrl,
    image: `${SITE_URL}/images/plaza-espana-hero.jpg`,
    sameAs: [SOURCES.plazaHistoria],
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function webPageSchema(opts: {
  title: string;
  description: string;
  url: string;
  aboutAttraction?: boolean;
}) {
  const page: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: opts.title,
    description: opts.description,
    url: opts.url,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  };
  if (opts.aboutAttraction) {
    page.about = { '@type': 'TouristAttraction', '@id': `${SITE_URL}/#attraction` };
  }
  return page;
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  };
}
