import { PLAZA_EMBED, PLAZA_DIRECTIONS, SOURCES } from './site';

// Registro de páginas temáticas independientes. Cada entrada resuelve una
// necesidad concreta de visitante, se vincula con otras páginas y cita fuentes
// verificables. No se copian reseñas ni se inventan horarios o tarifas: donde
// falta certeza, se indica "confirmar".

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicSource {
  name: string;
  url: string;
}

export interface TopicContent {
  kicker: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  updated: string;
  mapEmbed: string;
  mapDirections: string;
  sections: TopicSection[];
  faq: TopicFaq[];
  sources: TopicSource[];
}

export interface Topic {
  slug: string;
  group: TopicGroup;
  content: TopicContent;
  related: string[];
}

export type TopicGroup = 'llegar' | 'cultura' | 'museos' | 'comer' | 'cercanos';

export const TOPIC_GROUP_LABELS: Record<TopicGroup, string> = {
  llegar: 'Cómo llegar y estacionamiento',
  cultura: 'Historia y MMAU',
  museos: 'Museos cercanos',
  comer: 'Cafés y comida',
  cercanos: 'Qué ver cerca',
};

const embed = (q: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
const directions = (q: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;

export const TOPICS: Topic[] = [
  {
    slug: 'como-llegar-plaza-espana-cordoba',
    group: 'llegar',
    related: [
      'estacionamiento-cerca-plaza-espana',
      'historia-plaza-espana-cordoba',
      'que-ver-cerca-plaza-espana-cordoba',
      'museo-metropolitano-arte-urbano-mmau',
      'transporte-publico-plaza-espana-cordoba',
      'taxi-remis-plaza-espana-cordoba',
      'llegar-en-bicicleta-plaza-espana',
      'llegar-desde-terminal-de-omnibus-cordoba',
      'plaza-espana-cordoba-distancia-centro',
    ],
    content: {
      kicker: 'Ubicación y llegada',
      title:
        'Cómo llegar a Plaza España, Córdoba: mapa, transporte y consejos',
      description:
        'Cómo llegar a Plaza España en Nueva Córdoba, Argentina. Indicá el destino correcto en el mapa, compará transporte y usá cruces peatonales seguros alrededor de la rotonda.',
      h1: 'Cómo llegar a Plaza España, Córdoba',
      lead: 'Plaza España está en el barrio Nueva Córdoba, al sur del centro de la ciudad de Córdoba, Argentina. El nombre se repite en otras ciudades: confirmá que el destino del mapa diga Córdoba, Argentina antes de salir.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'El destino correcto en el mapa',
          paragraphs: [
            'Buscá “Plaza España, Nueva Córdoba, Argentina”. La dirección de la ficha de Maps es Pl. España, X5000 Córdoba. No es la Plaza de España de Sevilla ni la de Madrid: ambas aparecen en búsquedas generales y confunden el viaje.',
            'La plaza funciona como nodo entre el barrio Nueva Córdoba, el Parque Sarmiento y la Ciudad Universitaria. Elegirla como punto de referencia ayuda a planificar el resto del recorrido a pie.',
          ],
        },
        {
          heading: 'A pie o en bicicleta',
          paragraphs: [
            'Desde el centro histórico (Plaza San Martín) se llega caminando por la avenida Hipólito Yrigoyen en unos 20 a 30 minutos, dependiendo del ritmo. Usá cruces peatonales habilitados y respetá la señalización de la rotonda: no cruces los carriles por el centro.',
          ],
          bullets: [
            'La rotonda tiene anillo de circulación vehicular: acordá el descenso junto a un acceso peatonal.',
            'No se ha verificado una ruta continua sin escalones entre el centro y la plaza.',
          ],
        },
        {
          heading: 'Transporte público',
          paragraphs: [
            'Córdoba tiene recorridos de colectivos que pasan cerca de la avenida Hipólito Yrigoyen. Consultá las líneas, paradas y frecuencias en los canales oficiales de movilidad el mismo día, porque cambian.',
            'Esta guía no publica números de línea ni tarifas sin verificar. Confirmalos antes de viajar para no depender de información desactualizada.',
          ],
        },
        {
          heading: 'Auto, taxi o remís',
          paragraphs: [
            'Indicá el punto de llegada exacto al conductor y consultá dónde deixar el vehículo. El estacionamiento y su costo se tratan en la guía de estacionamiento cercano, porque no se presume disponibilidad ni precio.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Dónde queda Plaza España en Córdoba?',
          a: 'En Nueva Córdoba, ciudad de Córdoba, Argentina. La dirección de la ficha de Maps es Pl. España, X5000 Córdoba. No es la Plaza de España de España.',
        },
        {
          q: '¿Cómo sé que llegué al lugar correcto?',
          a: 'Confirmá en el mapa que la ubicación dice Córdoba, Argentina, y que el entorno es la rotonda con la composición de hormigón y el acceso al MMAU, no una plaza de otro país.',
        },
        {
          q: '¿Puedo ir en transporte público?',
          a: 'Sí, varias líneas pasan cerca de la avenida Hipólito Yrigoyen, pero consultá líneas y frecuencias en los canales oficiales el mismo día de la visita.',
        },
        {
          q: '¿Es seguro cruzar la rotonda?',
          a: 'Usá los cruces peatonales habilitados y evitá cruzar los carriles por el centro del anillo de circulación. Planificá el descenso antes de llegar.',
        },
        {
          q: '¿La plaza está lejos del centro?',
          a: 'Está a unos 20–30 minutos a pie del centro histórico (Plaza San Martín) por la avenida Hipólito Yrigoyen, en el barrio Nueva Córdoba.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: historia de Plaza España', url: SOURCES.plazaHistoria },
        { name: 'Google Maps: ubicación y ficha de la plaza', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },

  {
    slug: 'museo-metropolitano-arte-urbano-mmau',
    group: 'cultura',
    related: [
      'horarios-y-entrada-plaza-espana-mmau',
      'historia-plaza-espana-cordoba',
      'que-es-plaza-espana-cordoba',
      'arquitectura-plaza-espana-miguel-angel-roca',
      'mmau-arte-urbano-cordoba',
      'mmau-accesibilidad-cordoba',
      'mejor-momento-visitar-plaza-espana',
      'museo-emilio-caraffa-desde-plaza-espana',
      'que-ver-cerca-plaza-espana-cordoba',
    ],
    content: {
      kicker: 'Cultura en el subsuelo',
      title: 'MMAU: Museo Metropolitano de Arte Urbano en Plaza España',
      description:
        'Qué es el MMAU de Plaza España, Córdoba: un museo integrado al subsuelo de la plaza, con arte urbano. Horarios y entrada gratuita según Turismo Córdoba, y cómo distinguirlo del espacio exterior.',
      h1: 'Museo Metropolitano de Arte Urbano (MMAU)',
      lead: 'El MMAU es un espacio cultural integrado al subsuelo de Plaza España. Es distinto de la plaza exterior: su programación, ingreso y horarios se gestionan por separado y deben confirmarse antes de ir.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Qué es el MMAU',
          paragraphs: [
            'Turismo municipal identifica al Museo Metropolitano de Arte Urbano como parte del conjunto Plaza España, con arte urbano en el subsuelo del espacio. La plaza exterior y las salas del museo se recorren bajo condiciones distintas.',
            'No apliques el horario de la plaza al museo. El MMAU tiene su propia agenda, entrada y horarios.',
          ],
        },
        {
          heading: 'Horario y entrada (según Turismo Córdoba)',
          paragraphs: [
            'La carta de turismo municipal lista al MMAU con entrada gratuita. Como referencia, indica martes a viernes de 10:00 a 20:00, y sábados, domingos y feriados de 12:00 a 20:00.',
            'Estos datos se toman de la fuente municipal y pueden cambiar. Verificá la agenda del día en los canales oficiales antes de ir; esta guía no garantiza la apertura.',
          ],
          bullets: [
            'Martes a viernes: 10:00–20:00 (referencia municipal).',
            'Sábados, domingos y feriados: 12:00–20:00 (referencia municipal).',
            'Entrada: gratuita, según la carta de Turismo Córdoba.',
          ],
        },
        {
          heading: 'Antes de salir',
          paragraphs: [
            'Consultá el pronóstico, llevá agua y adaptá la visita al tránsito y a tu grupo. El acceso a baños, rampas, ascensores y salas depende de la apertura del museo, no de la plaza exterior.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Qué es el MMAU?',
          a: 'El Museo Metropolitano de Arte Urbano, integrado al subsuelo de Plaza España, con arte urbano. Es un espacio distinto de la plaza exterior.',
        },
        {
          q: '¿Cuál es el horario del MMAU?',
          a: 'Como referencia, Turismo Córdoba lista martes a viernes 10:00–20:00 y fines de semana y feriados 12:00–20:00. Confirmalo en los canales oficiales antes de ir.',
        },
        {
          q: '¿La entrada es gratuita?',
          a: 'La carta municipal indica entrada gratuita. Verificá cualquier cambio en la fuente oficial.',
        },
        {
          q: '¿El MMAU abre las 24 horas?',
          a: 'No. El horario de la plaza exterior no se aplica al museo. El MMAU tiene su propia agenda y horarios.',
        },
        {
          q: '¿Cómo llego al MMAU?',
          a: 'Está integrado a Plaza España, en Nueva Córdoba. Usá la guía de cómo llegar y confirmá el acceso peatonal al subsuelo.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: MMAU y su integración', url: SOURCES.mmau },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'historia-plaza-espana-cordoba',
    group: 'cultura',
    related: [
      'museo-metropolitano-arte-urbano-mmau',
      'como-llegar-plaza-espana-cordoba',
      'que-ver-cerca-plaza-espana-cordoba',
    ],
    content: {
      kicker: 'Arquitectura e historia',
      title: 'Historia de Plaza España, Córdoba: de rotonda a espacio cultural',
      description:
        'Historia de Plaza España en Córdoba, Argentina: su nombre desde 1926, el proyecto de Parque Sarmiento, el diseño de Miguel Ángel Roca y la integración del MMAU.',
      h1: 'Historia de Plaza España, Córdoba',
      lead: 'La historia municipal vincula la plaza con el proyecto de Parque Sarmiento y registra su nombre desde marzo de 1926. El concurso de Miguel Ángel Roca, ganado en 1973 e inaugurado en 1980, le dio la composición de hormigón que hoy la identifica.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Del parque a la plaza',
          paragraphs: [
            'La historia municipal relaciona la plaza con el proyecto de Parque Sarmiento y registra su nombre desde marzo de 1926. Antes de la intervención moderna, el sitio formaba parte de esa idea de espacio público verde y de paseo.',
          ],
        },
        {
          heading: 'El diseño de Miguel Ángel Roca',
          paragraphs: [
            'Miguel Ángel Roca ganó en 1973 el concurso para un nuevo diseño de la plaza, inaugurado en 1980. Su composición de hormigón, con la rotonda y el juego de planos, se volvió parte del paisaje de Nueva Córdoba.',
            'La obra es leída como arquitectura del movimiento moderno local: una plaza dura, para caminar y mirar, más que un parque soleado tradicional.',
          ],
        },
        {
          heading: 'La integración del MMAU',
          paragraphs: [
            'La incorporación del Museo Metropolitano de Arte Urbano al subsuelo dio un nuevo uso cultural a la plaza. La plaza exterior y las salas del museo se recorren bajo condiciones distintas, y el horario del museo no es el de la plaza.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Desde cuándo se llama Plaza España?',
          a: 'La historia municipal registra el nombre desde marzo de 1926. Antes, el sitio se relacionaba con el proyecto de Parque Sarmiento.',
        },
        {
          q: '¿Quién diseñó la plaza actual?',
          a: 'Miguel Ángel Roca ganó el concurso en 1973 e inauguró el diseño en 1980. Su composición de hormigón es la que identifica a la plaza hoy.',
        },
        {
          q: '¿La plaza y el MMAU son lo mismo?',
          a: 'No. El MMAU es un museo integrado al subsuelo; la plaza exterior es el espacio público. Se visitan bajo condiciones distintas.',
        },
        {
          q: '¿Es un parque o una plaza dura?',
          a: 'Es una plaza de composición de hormigón, para caminar y observar la arquitectura, no un parque soleado tradicional.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: historia de Plaza España', url: SOURCES.plazaHistoria },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'horarios-y-entrada-plaza-espana-mmau',
    group: 'cultura',
    related: [
      'museo-metropolitano-arte-urbano-mmau',
      'como-llegar-plaza-espana-cordoba',
    ],
    content: {
      kicker: 'Planificar la visita',
      title: 'Horarios y entrada de Plaza España y el MMAU, Córdoba',
      description:
        'Horarios y entrada de Plaza España y el MMAU en Córdoba. La plaza exterior y el museo subterráneo tienen condiciones distintas; el MMAU lista entrada gratuita según Turismo Córdoba.',
      h1: 'Horarios y entrada: plaza y MMAU',
      lead: 'La plaza exterior y el museo subterráneo MMAU son espacios distintos. No apliques el horario de uno al otro: la plaza es un espacio público y el museo tiene agenda propia.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Plaza exterior',
          paragraphs: [
            'La ficha de Google Maps mostraba acceso las 24 horas al revisarla el 30 de octubre de 2026. Es un dato del listado de terceros: obras, actividades o medidas locales pueden modificar el acceso.',
            'Como espacio público, la plaza no cobra entrada. Los servicios (baños, etc.) no se confirman como permanentes.',
          ],
        },
        {
          heading: 'Museo MMAU',
          paragraphs: [
            'Turismo municipal lista al MMAU con entrada gratuita. Como referencia, indica martes a viernes 10:00–20:00 y sábados, domingos y feriados 12:00–20:00.',
            'El horario y la entrada pueden cambiar. Confirmalos en los canales oficiales antes de ir; esta guía no garantiza la apertura ni la gratuidad en el día de la visita.',
          ],
          bullets: [
            'Martes a viernes: 10:00–20:00 (referencia municipal).',
            'Sábados, domingos y feriados: 12:00–20:00 (referencia municipal).',
            'Entrada gratuita según la carta municipal; confirmá antes de ir.',
          ],
        },
        {
          heading: 'Antes de salir',
          paragraphs: [
            'Consultá el pronóstico y el estado de los accesos. El ingreso a salas, baños y servicios de accesibilidad depende de la apertura del museo, no de la plaza exterior.',
          ],
        },
      ],
      faq: [
        {
          q: '¿La plaza abre las 24 horas?',
          a: 'La ficha de Maps mostraba acceso las 24 horas al 30 de octubre de 2026. Es una referencia del listado, no una garantía durante obras o eventos.',
        },
        {
          q: '¿El MMAU es gratuito?',
          a: 'La carta municipal indica entrada gratuita. Confirmá cualquier cambio en la fuente oficial antes de la visita.',
        },
        {
          q: '¿El horario del MMAU es el de la plaza?',
          a: 'No. El museo tiene agenda y horarios propios; no uses el horario de la plaza exterior para el MMAU.',
        },
        {
          q: '¿Hay baños en la plaza?',
          a: 'Esta guía no confirma baños permanentes en la plaza. Consultá los servicios de cada museo según su apertura.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: MMAU y su integración', url: SOURCES.mmau },
        { name: 'Google Maps: ficha de la plaza', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },

  {
    slug: 'estacionamiento-cerca-plaza-espana',
    group: 'llegar',
    related: [
      'como-llegar-plaza-espana-cordoba',
      'transporte-publico-plaza-espana-cordoba',
      'taxi-remis-plaza-espana-cordoba',
      'llegar-en-bicicleta-plaza-espana',
      'llegar-desde-terminal-de-omnibus-cordoba',
      'cafes-cerca-plaza-espana-cordoba',
    ],
    content: {
      kicker: 'Llegar en auto',
      title: 'Estacionamiento cerca de Plaza España, Córdoba: dónde dejar el auto',
      description:
        'Dónde estacionar cerca de Plaza España en Nueva Córdoba. No se presumen plazas ni precios: consultá señalización, playas de estacionamiento y tarifas el mismo día.',
      h1: 'Estacionamiento cerca de Plaza España',
      lead: 'Plaza España está sobre una rotonda con anillo de circulación vehicular en Nueva Córdoba. No se confirma disponibilidad ni costo de estacionamiento: la zona combina estacionamiento regulado en la vía pública y playas privadas.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'La rotonda y el descenso',
          paragraphs: [
            'Llegá con el destino exacto en el mapa y acordá el descenso junto a un acceso peatonal, sin detenerte sobre el anillo de circulación. La rotonda no es un punto de parada.',
            'Evitá dejar el vehículo en lugares que obstruyan el tránsito o estén señalizados como prohibidos.',
          ],
        },
        {
          heading: 'Opciones a considerar',
          paragraphs: [
            'En Nueva Córdoba suele haber estacionamiento regulado (medido) en la vía pública y playas de estacionamiento privadas a pocas cuadras. Las tarifas y el horario de medición cambian y se controlan en la vía.',
            'Esta guía no publica precios ni cantidad de plazas porque varían. Confirmalos en la señalización y en los carteles de cada playa el día de la visita.',
          ],
          bullets: [
            'Revisá la señalización de estacionamiento regulado antes de dejar el auto.',
            'Consultá tarifa y horario en la playa privada, no asumas disponibilidad.',
            'Caminá el último tramo a la plaza por cruces peatonales habilitados.',
          ],
        },
        {
          heading: 'Alternativa sin auto',
          paragraphs: [
            'Si venís de otro barrio, considerá colectivo o remís y caminar el último tramo. Reduce el problema de dónde dejar el vehículo justo en la rotonda.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Hay estacionamiento gratuito en la plaza?',
          a: 'No se confirma. La zona combina estacionamiento regulado y playas privadas; consultá señalización y tarifas el día de la visita.',
        },
        {
          q: '¿Dónde puedo dejar el auto?',
          a: 'Buscá playas de estacionamiento privadas a pocas cuadras o estacionamiento regulado en la vía pública. Confirmá disponibilidad y costo en el lugar.',
        },
        {
          q: '¿Puedo parar en la rotonda?',
          a: 'No. Es un anillo de circulación vehicular. Acordá el descenso junto a un acceso peatonal y no detengas el auto sobre la rotonda.',
        },
        {
          q: '¿Conviene ir en auto?',
          a: 'Depende de tu punto de salida. Si evitás el auto, reducís el problema de estacionamiento justo en la plaza.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: historia de Plaza España', url: SOURCES.plazaHistoria },
        { name: 'Google Maps: alrededores de la plaza', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },

  {
    slug: 'museo-emilio-caraffa-desde-plaza-espana',
    group: 'museos',
    related: [
      'museo-evita-palacio-ferreyra-desde-plaza-espana',
      'paseo-del-buen-pastor-desde-plaza-espana',
      'que-ver-cerca-plaza-espana-cordoba',
      'museo-metropolitano-arte-urbano-mmau',
    ],
    content: {
      kicker: 'Museo cercano',
      title: 'Museo Caraffa desde Plaza España: cómo llegar y qué visitar',
      description:
        'Cómo ir del Museo Provincial de Bellas Artes Emilio Caraffa a Plaza España, Córdoba. Distancia a pie, qué ver y cómo encadenarlo con el MMAU y otros museos.',
      h1: 'Museo Caraffa desde Plaza España',
      lead: 'El Museo Provincial de Bellas Artes Emilio Caraffa está sobre la avenida Hipólito Yrigoyen, a pocas cuadras al norte de Plaza España. Es una parada natural del recorrido cultural de Nueva Córdoba.',
      updated: '30 de octubre de 2026',
      mapEmbed: embed('Museo Caraffa, Córdoba, Argentina'),
      mapDirections: directions('Museo Provincial de Bellas Artes Emilio Caraffa, Córdoba'),
      sections: [
        {
          heading: 'Dónde está y cómo llegar',
          paragraphs: [
            'El Caraffa se ubica en la avenida Hipólito Yrigoyen, en el tramo que sube desde Plaza España hacia el centro. A pie, la caminata es de unos 10 a 15 minutos por la misma avenida; los tiempos reales dependen de tu ritmo y de las cuadras.',
            'No se confirma una ruta accesible continua. Si tu visita depende de rampas o ascensores, consultalos antes de salir.',
          ],
        },
        {
          heading: 'Qué visitar',
          paragraphs: [
            'Es el museo provincial de bellas artes, con pintura y escultura de artistas cordobeses y argentinos. El edificio y las salas son parte de la propuesta.',
            'Encadenalo con el MMAU (en la plaza) y, más al norte, con Palacio Ferreyra y el Paseo del Buen Pastor para armar un recorrido de museos a pie.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Confirmá horarios y entrada en la web oficial o en la ficha de Maps. Esta guía no lista horarios ni tarifas del Caraffa porque cambian.',
          ],
          bullets: [
            'Caminata aproximada: 10–15 min desde Plaza España por Av. Hipólito Yrigoyen.',
            'Horario y entrada: confirmar en la fuente oficial.',
            'Accesibilidad: consultar antes de salir.',
          ],
        },
      ],
      faq: [
        {
          q: '¿A cuánto queda el Museo Caraffa de Plaza España?',
          a: 'A unas 10–15 minutos a pie por la avenida Hipólito Yrigoyen, hacia el centro. Los tiempos dependen de tu ritmo.',
        },
        {
          q: '¿Se puede ir caminando?',
          a: 'Sí, por la Av. Hipólito Yrigoyen. No se verificó una ruta accesible continua; si necesitás rampas, consultalas antes.',
        },
        {
          q: '¿Cuánto cuesta la entrada?',
          a: 'Confirmá horarios y entrada en la web oficial o en la ficha de Maps. Esta guía no publica tarifas porque cambian.',
        },
        {
          q: '¿Cómo lo sumo a un recorrido?',
          a: 'Encadenalo con el MMAU en la plaza, Palacio Ferreyra y el Paseo del Buen Pastor para un paseo de museos a pie.',
        },
      ],
      sources: [
        { name: 'Google Maps: Museo Caraffa', url: 'https://www.google.com/maps?q=Museo%20Caraffa%20C%C3%B3rdoba' },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'museo-evita-palacio-ferreyra-desde-plaza-espana',
    group: 'museos',
    related: [
      'museo-emilio-caraffa-desde-plaza-espana',
      'paseo-del-buen-pastor-desde-plaza-espana',
      'que-ver-cerca-plaza-espana-cordoba',
    ],
    content: {
      kicker: 'Museo cercano',
      title: 'Palacio Ferreyra (Museo Evita) desde Plaza España: cómo llegar',
      description:
        'Cómo ir de Palacio Ferreyra / Museo Evita a Plaza España, Córdoba. El edificio, la colección y cómo encadenarlo con Caraffa y el Buen Pastor.',
      h1: 'Palacio Ferreyra desde Plaza España',
      lead: 'Palacio Ferreyra, sede del Museo Superior de Bellas Artes, está sobre la avenida Hipólito Yrigoyen, más al norte que el Caraffa. Es un edificio histórico que combina arquitectura y colección de arte.',
      updated: '30 de octubre de 2026',
      mapEmbed: embed('Palacio Ferreyra, Córdoba, Argentina'),
      mapDirections: directions('Palacio Ferreyra, Córdoba'),
      sections: [
        {
          heading: 'Dónde está y cómo llegar',
          paragraphs: [
            'Palacio Ferreyra se ubica en la Av. Hipólito Yrigoyen, en el tramo norte del recorrido que sube desde Plaza España. A pie son unos 20 a 25 minutos; también podés combinar con colectivo o remís para acortar.',
            'No se confirma una ruta accesible continua. Consultá accesibilidad antes de salir si tu visita depende de ella.',
          ],
        },
        {
          heading: 'El edificio y la colección',
          paragraphs: [
            'El palacio es una construcción de interés arquitectónico que aloja un museo superior de bellas artes. Es útil para extender la temática de arquitectura y arte que empezás en Plaza España.',
            'Confirmá horarios y entrada en la web oficial o en la ficha de Maps antes de ir; esta guía no lista tarifas porque cambian.',
          ],
        },
        {
          heading: 'Cómo encadenarlo',
          paragraphs: [
            'Propone un recorrido: Plaza España (MMAU) → Caraffa → Palacio Ferreyra → Paseo del Buen Pastor, bajando y subiendo por la Av. Hipólito Yrigoyen según el tiempo disponible.',
          ],
          bullets: [
            'Caminata aproximada: 20–25 min desde Plaza España.',
            'Horario y entrada: confirmar en la fuente oficial.',
            'Accesibilidad: consultar antes de salir.',
          ],
        },
      ],
      faq: [
        {
          q: '¿A cuánto queda Palacio Ferreyra de Plaza España?',
          a: 'A unos 20–25 minutos a pie por la Av. Hipólito Yrigoyen. Podés acortar con transporte público o remís.',
        },
        {
          q: '¿Qué es el Museo Evita en Ferreyra?',
          a: 'Palacio Ferreyra aloja un museo superior de bellas artes, en un edificio histórico de interés arquitectónico.',
        },
        {
          q: '¿Cuánto cuesta la entrada?',
          a: 'Confirmá en la web oficial o en la ficha de Maps. Esta guía no publica tarifas porque cambian.',
        },
        {
          q: '¿Cómo lo sumo a un recorrido?',
          a: 'Encadenalo con el MMAU, el Caraffa y el Paseo del Buen Pastor por la Av. Hipólito Yrigoyen.',
        },
      ],
      sources: [
        { name: 'Google Maps: Palacio Ferreyra', url: 'https://www.google.com/maps?q=Palacio%20Ferreyra%20C%C3%B3rdoba' },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'paseo-del-buen-pastor-desde-plaza-espana',
    group: 'museos',
    related: [
      'museo-emilio-caraffa-desde-plaza-espana',
      'museo-evita-palacio-ferreyra-desde-plaza-espana',
      'cafes-cerca-plaza-espana-cordoba',
      'que-ver-cerca-plaza-espana-cordoba',
    ],
    content: {
      kicker: 'Espacio cultural',
      title: 'Paseo del Buen Pastor desde Plaza España: cómo llegar y qué hacer',
      description:
        'Cómo ir del Paseo del Buen Pastor a Plaza España, Córdoba. Exposiciones, espacio público y gastronomía, y cómo unirlo al recorrido de museos.',
      h1: 'Paseo del Buen Pastor desde Plaza España',
      lead: 'El Paseo del Buen Pastor combina exposiciones, espacio público y gastronomía en un antiguo complejo adaptado. Está sobre la avenida Hipólito Yrigoyen, entre la plaza y los museos del norte.',
      updated: '30 de octubre de 2026',
      mapEmbed: embed('Paseo del Buen Pastor, Córdoba, Argentina'),
      mapDirections: directions('Paseo del Buen Pastor, Córdoba'),
      sections: [
        {
          heading: 'Dónde está y cómo llegar',
          paragraphs: [
            'El Paseo del Buen Pastor se ubica en la Av. Hipólito Yrigoyen, a unos 15 a 20 minutos a pie desde Plaza España. Es un tramo intermedio entre la plaza, el Caraffa y Palacio Ferreyra.',
            'No se confirma una ruta accesible continua; consultá accesibilidad antes de salir si tu visita depende de ella.',
          ],
        },
        {
          heading: 'Qué hacer',
          paragraphs: [
            'Además de las exposiciones, tiene espacio público con agua y locales de comida y bebida. Sirve como pausa del recorrido a pie o como punto de encuentro.',
            'Confirmá la programación y el horario de los locales en el día de la visita; esta guía no lista horarios porque cambian.',
          ],
        },
        {
          heading: 'Cómo encadenarlo',
          paragraphs: [
            'Unilo al MMAU, el Caraffa y Palacio Ferreyra para un recorrido cultural con pausas de comida. Desde la plaza, bajá o subí por la Av. Hipólito Yrigoyen según el tiempo.',
          ],
          bullets: [
            'Caminata aproximada: 15–20 min desde Plaza España.',
            'Programación y locales: confirmar el día de la visita.',
            'Accesibilidad: consultar antes de salir.',
          ],
        },
      ],
      faq: [
        {
          q: '¿A cuánto queda el Buen Pastor de Plaza España?',
          a: 'A unos 15–20 minutos a pie por la Av. Hipólito Yrigoyen. Es un tramo intermedio entre la plaza y los museos del norte.',
        },
        {
          q: '¿Qué se hace en el Buen Pastor?',
          a: 'Exposiciones, espacio público con agua y locales de comida y bebida. Confirmá la programación en el día de la visita.',
        },
        {
          q: '¿Es gratis?',
          a: 'El espacio público suele ser de acceso libre; las exposiciones y locales pueden tener condiciones propias. Confirmá en el lugar.',
        },
        {
          q: '¿Cómo lo sumo a un recorrido?',
          a: 'Encadenalo con el MMAU, el Caraffa y Palacio Ferreyra por la Av. Hipólito Yrigoyen.',
        },
      ],
      sources: [
        { name: 'Google Maps: Paseo del Buen Pastor', url: 'https://www.google.com/maps?q=Paseo%20del%20Buen%20Pastor%20C%C3%B3rdoba' },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'cafes-cerca-plaza-espana-cordoba',
    group: 'comer',
    related: [
      'estacionamiento-cerca-plaza-espana',
      'paseo-del-buen-pastor-desde-plaza-espana',
      'que-ver-cerca-plaza-espana-cordoba',
      'restaurantes-cerca-plaza-espana-cordoba',
      'donde-comer-nueva-cordoba',
      'heladerias-cerca-plaza-espana',
      'bares-cerca-plaza-espana-cordoba',
      'desayuno-nueva-cordoba',
      'merienda-nueva-cordoba',
      'cafeterias-nueva-cordoba',
    ],
    content: {
      kicker: 'Cafés y descanso',
      title: 'Cafés cerca de Plaza España, Córdoba: dónde tomar algo',
      description:
        'Cafés y opciones de comida cerca de Plaza España en Nueva Córdoba. Salida, caminata y cuándo ir, sin recomendar comercios concretos como únicos.',
      h1: 'Cafés cerca de Plaza España',
      lead: 'La avenida Hipólito Yrigoyen, que pasa por Plaza España, tiene varias opciones de café y comida a pocas cuadras. Esta guía describe el recorrido y los usos, no rankea comercios.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Por dónde caminar',
          paragraphs: [
            'Salí de la plaza por la Av. Hipólito Yrigoyen y caminá el tramo norte. En un radio de unas 10 a 15 minutos a pie encontrás cafeterías, confiterías y locales de comida sobre la misma avenida y calles aledañas como Estrada y Chacabuco.',
            'No se confirma el estado de cada local ni sus horarios. Confirmalos antes de ir; un comercio puede haber cambiado de horario o cerrado.',
          ],
          bullets: [
            'Salida sugerida: Av. Hipólito Yrigoyen (lado norte de la plaza).',
            'Radio aproximado: 10–15 min a pie.',
            'Calles con opciones: Av. Hipólito Yrigoyen, Estrada, Chacabuco.',
          ],
        },
        {
          heading: 'Qué tipo de parada elegir',
          paragraphs: [
            'Para desayuno o merienda, buscá cafeterías con mesas. Para llevar, muchos locales de la avenida permiten pedir para take away. Para almuerzo o cena, hay opciones de comida y restobares en el mismo tramo.',
            'Si venís del Paseo del Buen Pastor o de Palacio Ferreyra, coincidís en la misma avenida y podés cerrar el recorrido con una pausa de comida.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Esta guía no recomienda un comercio concreto como el mejor ni publica precios. Confirmá horarios y disponibilidad en el lugar o en la ficha de Maps el día de la visita.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Hay cafés cerca de Plaza España?',
          a: 'Sí, sobre la Av. Hipólito Yrigoyen y calles aledañas (Estrada, Chacabuco) hay cafeterías y locales de comida a 10–15 min a pie.',
        },
        {
          q: '¿Por dónde salgo de la plaza?',
          a: 'Por la Av. Hipólito Yrigoyen (lado norte) y caminá el tramo hacia el centro. Es el eje donde se concentran las opciones.',
        },
        {
          q: '¿Puedo comprar para llevar?',
          a: 'Varios locales de la avenida permiten take away. Confirmá en el local; esta guía no lista cuáles.',
        },
        {
          q: '¿Están abiertos siempre?',
          a: 'No se confirma. Confirmá horarios en el lugar o en la ficha de Maps el día de la visita.',
        },
      ],
      sources: [
        { name: 'Google Maps: cafés cerca de Plaza España', url: 'https://www.google.com/maps?q=caf%C3%A9s%20cerca%20Plaza%20Espa%C3%B1a%20C%C3%B3rdoba' },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'que-ver-cerca-plaza-espana-cordoba',
    group: 'cercanos',
    related: [
      'museo-emilio-caraffa-desde-plaza-espana',
      'museo-evita-palacio-ferreyra-desde-plaza-espana',
      'museo-metropolitano-arte-urbano-mmau',
      'museos-cerca-plaza-espana-cordoba',
      'nueva-cordoba-barrio-cordoba',
      'parque-sarmiento-cordoba',
      'ciudad-universitaria-cordoba-desde-plaza-espana',
      'costanera-rio-suquia-cordoba',
      'que-hacer-nueva-cordoba',
      'historia-nueva-cordoba-cordoba',
      'paseo-a-pie-nueva-cordoba',
      'como-llegar-plaza-espana-cordoba',
    ],
    content: {
      kicker: 'Qué ver cerca',
      title: 'Qué ver cerca de Plaza España, Córdoba: museos y paseos',
      description:
        'Qué ver cerca de Plaza España en Nueva Córdoba: MMAU, Museo Caraffa, Palacio Ferreyra, Paseo del Buen Pastor y Parque Sarmiento, con cómo llegar desde la plaza.',
      h1: 'Qué ver cerca de Plaza España',
      lead: 'Desde Plaza España podés armar un recorrido cultural a pie por Nueva Córdoba: el MMAU en la misma plaza y, hacia el norte, el Caraffa, Palacio Ferreyra y el Paseo del Buen Pastor. Más lejos, el Parque Sarmiento cierra el paseo al aire libre.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'En la misma plaza',
          paragraphs: [
            'El MMAU (Museo Metropolitano de Arte Urbano) está integrado al subsuelo. Es el punto de partida y tiene su propio horario y entrada gratuita según Turismo Córdoba.',
          ],
        },
        {
          heading: 'Hacia el norte, por Av. Hipólito Yrigoyen',
          paragraphs: [
            'A pocas cuadras: Museo Caraffa (10–15 min a pie), Paseo del Buen Pastor (15–20 min) y Palacio Ferreyra (20–25 min). Todos quedan sobre o cerca de la misma avenida que sube desde la plaza.',
            'Cada uno tiene horarios y entrada propios; confirmalos antes de ir. No se presume una ruta accesible continua.',
          ],
          bullets: [
            'Museo Caraffa: ~10–15 min a pie.',
            'Paseo del Buen Pastor: ~15–20 min a pie.',
            'Palacio Ferreyra: ~20–25 min a pie.',
          ],
        },
        {
          heading: 'Más lejos: Parque Sarmiento',
          paragraphs: [
            'La historia municipal vincula la plaza con el proyecto de Parque Sarmiento. El parque quedó al sur/continuación del eje y conviene ir en transporte o con tiempo, porque la caminata es mayor que la de los museos del norte.',
          ],
        },
        {
          heading: 'Cómo armar el recorrido',
          paragraphs: [
            'Empezá en la plaza (MMAU), subí por la Av. Hipólito Yrigoyen visitando Caraffa, Buen Pastor y Ferreyra, y dejá el Parque Sarmiento para otro tramo con transporte. Ajustá a los horarios de cada museo.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Qué hay cerca de Plaza España?',
          a: 'En la plaza, el MMAU. Hacia el norte, por Av. Hipólito Yrigoyen: Museo Caraffa, Paseo del Buen Pastor y Palacio Ferreyra. Más lejos, Parque Sarmiento.',
        },
        {
          q: '¿Se puede hacer a pie?',
          a: 'Sí, los museos del norte quedan a 10–25 min a pie por la misma avenida. El Parque Sarmiento conviene con transporte.',
        },
        {
          q: '¿Cuánto tiempo necesito?',
          a: 'Un paseo de museos del norte más la plaza lleva media jornada si confirmás horarios. El parque suma tiempo aparte.',
        },
        {
          q: '¿Los horarios son iguales?',
          a: 'No. Cada museo tiene horario y entrada propios; confirmalos en la fuente oficial antes de ir.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
        { name: 'Google Maps: Plaza España, Córdoba', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },

  // ===== Bloque 2: 30 guías temáticas adicionales (total 40) =====

  {
    slug: 'transporte-publico-plaza-espana-cordoba',
    group: 'llegar',
    related: [
      'como-llegar-plaza-espana-cordoba',
      'estacionamiento-cerca-plaza-espana',
      'taxi-remis-plaza-espana-cordoba',
      'llegar-en-bicicleta-plaza-espana',
    ],
    content: {
      kicker: 'Transporte público',
      title: 'Colectivos y transporte público a Plaza España, Córdoba',
      description:
        'Cómo ir a Plaza España en colectivo y transporte público desde el centro y otros barrios de Córdoba. Líneas, paradas y frecuencias: confirmá los canales oficiales el día de la visita.',
      h1: 'Transporte público a Plaza España',
      lead: 'Plaza España está sobre la avenida Hipólito Yrigoyen, en Nueva Córdoba, con recorridos de colectivos que pasan cerca. Esta guía no publica números de línea ni tarifas porque cambian: confirmalos en los canales oficiales de movilidad el mismo día.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Dónde bajar',
          paragraphs: [
            'Los recorridos que recorren la avenida Hipólito Yrigoyen pasan a pocas cuadras de la plaza. No se confirma una parada exacta ni su disponibilidad: consultala con el chofer o en la app oficial de movilidad al subir.',
            'Si venís de otro barrio, podés combinar colectivo con una caminata corta por la avenida. La rotonda no es un punto de descenso: acordá la bajada junto a un acceso peatonal.',
          ],
        },
        {
          heading: 'Antes de viajar',
          paragraphs: [
            'Confirmá líneas, paradas y frecuencias en los canales oficiales de la ciudad el mismo día, porque la oferta de transporte cambia.',
            'Esta guía no lista tarifas ni horarios del transporte público porque varían y no se verifican de forma permanente.',
          ],
          bullets: [
            'Llevá el destino exacto en el mapa: “Plaza España, Nueva Córdoba, Córdoba”.',
            'Consultá frecuencias el día de la visita, no te bases en datos viejos.',
            'Caminá el último tramo por cruces peatonales habilitados.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Qué colectivo va a Plaza España?',
          a: 'Varios recorridos pasan por la Av. Hipólito Yrigoyen, pero esta guía no publica números de línea porque cambian. Confirmalos en los canales oficiales de movilidad el día de la visita.',
        },
        {
          q: '¿Cuánto cuesta el colectivo?',
          a: 'La tarifa cambia y no se verifica de forma permanente. Consultala en la fuente oficial antes de viajar.',
        },
        {
          q: '¿Se puede combinar con caminata?',
          a: 'Sí: bajate a pocas cuadras y caminá por la Av. Hipólito Yrigoyen hasta la plaza por cruces habilitados.',
        },
        {
          q: '¿Dónde bajo si voy en colectivo?',
          a: 'No se confirma una parada exacta. Consultala con el chofer o en la app oficial al subir, y acordá la bajada junto a un acceso peatonal, no sobre la rotonda.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
        { name: 'Google Maps: alrededores de Plaza España', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },

  {
    slug: 'taxi-remis-plaza-espana-cordoba',
    group: 'llegar',
    related: [
      'como-llegar-plaza-espana-cordoba',
      'estacionamiento-cerca-plaza-espana',
      'transporte-publico-plaza-espana-cordoba',
    ],
    content: {
      kicker: 'Taxi y remís',
      title: 'Taxi y remís a Plaza España, Córdoba: cómo indicar el destino',
      description:
        'Cómo ir a Plaza España en taxi o remís desde el centro o la terminal. Indicá el destino exacto y bajá en un acceso peatonal, no sobre la rotonda.',
      h1: 'Taxi y remís a Plaza España',
      lead: 'El taxi o remís es cómodo si venís de lejos o con grupo. Indicá “Plaza España, Nueva Córdoba” y acordá la bajada junto a un acceso peatonal: la rotonda es un anillo de circulación, no un punto de parada.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Cómo indicar el destino',
          paragraphs: [
            'Decile al conductor “Plaza España, Nueva Córdoba, Córdoba”. El nombre se repite en otras ciudades, así que confirmá que el mapa del vehículo dice Córdoba, Argentina.',
            'Acordá la bajada antes de llegar. No te detengas sobre el anillo de circulación de la rotonda: usá un acceso peatonal habilitado a pocos metros.',
          ],
        },
        {
          heading: 'Antes de salir',
          paragraphs: [
            'Consultá tarifa y disponibilidad en la aplicación o la parada oficial. Esta guía no publica precios porque cambian.',
            'Si venís con niños, mascotas o movilidad reducida, confirmá el acceso más conveniente antes de coordinar el viaje.',
          ],
          bullets: [
            'Destino: Plaza España, Nueva Córdoba, Córdoba.',
            'Bajada: acceso peatonal, no la rotonda.',
            'Tarifa: confirmar en la app o parada oficial.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cuánto cuesta un taxi a Plaza España?',
          a: 'La tarifa cambia según el punto de salida y la app. Esta guía no publica precios; confirmalos antes de viajar.',
        },
        {
          q: '¿Dónde me bajo?',
          a: 'En un acceso peatonal cerca de la plaza, no sobre la rotonda. Acordalo con el conductor antes de llegar.',
        },
        {
          q: '¿El remís es mejor que el colectivo?',
          a: 'Depende de tu punto de salida y grupo. El remís evita el problema de dónde dejar el auto y la búsqueda de parada de colectivo.',
        },
        {
          q: '¿Llego directo desde la terminal?',
          a: 'Sí, podés coordinar taxi o remís desde la terminal. Confirmá el destino “Nueva Córdoba” para no ir a otra Plaza España.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
        { name: 'Google Maps: Plaza España, Córdoba', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },

  {
    slug: 'llegar-en-bicicleta-plaza-espana',
    group: 'llegar',
    related: [
      'como-llegar-plaza-espana-cordoba',
      'transporte-publico-plaza-espana-cordoba',
      'estacionamiento-cerca-plaza-espana',
    ],
    content: {
      kicker: 'En bicicleta',
      title: 'Llegar a Plaza España en bicicleta, Córdoba',
      description:
        'Cómo ir en bicicleta a Plaza España por Nueva Córdoba. Ciclovías, dónde cerrar la bici y precauciones al cruzar la rotonda.',
      h1: 'Plaza España en bicicleta',
      lead: 'La avenida Hipólito Yrigoyen es un eje de tránsito donde también circulan bicicletas, pero no se confirma una ciclovía continua ni un punto de estacionamiento para bicicletas en la plaza. Planificá el último tramo a pie si hace falta.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'El recorrido',
          paragraphs: [
            'Desde el centro histórico podés acercarte por la Av. Hipólito Yrigoyen, que sube hacia la plaza. No se verificó una ciclovía continua, así que andá por carril permitido y respetá la señalización.',
          ],
          bullets: [
            'Caminá el último tramo si la rotonda complica el cruce en bici.',
            'No dejes la bicicleta sobre el anillo de circulación.',
            'Cerrala en un punto habilitado a pocas cuadras; no se confirma uno en la plaza.',
          ],
        },
        {
          heading: 'Antes de salir',
          paragraphs: [
            'Revisá el pronóstico y llevá agua. Confirmá las condiciones de la vía el día de la visita: esta guía no garantiza rutas ciclistas.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Hay ciclovía hasta Plaza España?',
          a: 'No se verificó una ciclovía continua. Andá por carril permitido por la Av. Hipólito Yrigoyen y respetá la señalización.',
        },
        {
          q: '¿Dónde dejo la bicicleta?',
          a: 'No se confirma un punto de estacionamiento para bicicletas en la plaza. Buscá un lugar habilitado a pocas cuadras y cerrala con candado.',
        },
        {
          q: '¿Puedo cruzar la rotonda en bici?',
          a: 'Es un anillo de circulación vehicular. Mejor bajá y cruzalo por los cruces peatonales habilitados.',
        },
        {
          q: '¿Cuánto tardo desde el centro?',
          a: 'Depende de tu ritmo y las cuadras; en bici es similar a la caminata de 20–30 min desde Plaza San Martín, pero sujeto al tránsito.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
        { name: 'Google Maps: Plaza España, Córdoba', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },

  {
    slug: 'plaza-espana-cordoba-distancia-centro',
    group: 'llegar',
    related: [
      'como-llegar-plaza-espana-cordoba',
      'que-ver-cerca-plaza-espana-cordoba',
      'nueva-cordoba-barrio-cordoba',
    ],
    content: {
      kicker: 'Distancias',
      title: 'A qué distancia queda Plaza España del centro de Córdoba',
      description:
        'Distancia y tiempo a pie de Plaza España al centro, la Universidad y Parque Sarmiento. Tiempos aproximados según el ritmo; no se confirma ruta accesible continua.',
      h1: 'Distancia de Plaza España al centro',
      lead: 'Plaza España está en Nueva Córdoba, al sur del centro histórico. Las distancias que siguen son aproximadas a pie por la Av. Hipólito Yrigoyen; los tiempos reales dependen de tu ritmo y de las cuadras.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Hasta el centro histórico',
          paragraphs: [
            'Desde Plaza San Martín, el centro tradicional, son unos 20 a 30 minutos a pie por la Av. Hipólito Yrigoyen hacia el norte. Es el tramo más directo y plano.',
          ],
          bullets: [
            'Plaza San Martín: ~20–30 min a pie.',
            'Av. Hipólito Yrigoyen: eje directo norte–sur.',
            'No se confirmó ruta accesible continua sin desniveles.',
          ],
        },
        {
          heading: 'Hasta otros puntos',
          paragraphs: [
            'Hacia el norte, los museos Caraffa, Buen Pastor y Palacio Ferreyra quedan a 10–25 min a pie. Hacia el sur, Parque Sarmiento conviene con transporte por la distancia mayor.',
          ],
          bullets: [
            'Museo Caraffa: ~10–15 min.',
            'Paseo del Buen Pastor: ~15–20 min.',
            'Palacio Ferreyra: ~20–25 min.',
            'Parque Sarmiento: recomendado con transporte.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Plaza España está lejos del centro?',
          a: 'Está a unos 20–30 minutos a pie de Plaza San Martín por la Av. Hipólito Yrigoyen, en el barrio Nueva Córdoba.',
        },
        {
          q: '¿Se llega caminando a los museos?',
          a: 'Sí, Caraffa, Buen Pastor y Ferreyra quedan a 10–25 min a pie por la misma avenida.',
        },
        {
          q: '¿Y a Parque Sarmiento?',
          a: 'Es más lejos que los museos del norte; conviene ir en transporte o con tiempo extra.',
        },
        {
          q: '¿Hay ruta sin escalones?',
          a: 'No se verificó una ruta accesible continua. Si tu visita depende de rampas, consultalas antes de salir.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
        { name: 'Google Maps: Plaza España, Córdoba', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },

  {
    slug: 'llegar-desde-terminal-de-omnibus-cordoba',
    group: 'llegar',
    related: [
      'como-llegar-plaza-espana-cordoba',
      'taxi-remis-plaza-espana-cordoba',
      'transporte-publico-plaza-espana-cordoba',
    ],
    content: {
      kicker: 'Desde la terminal',
      title: 'Cómo ir de la Terminal de Ómnibus a Plaza España, Córdoba',
      description:
        'Opciones para ir de la Terminal de Ómnibus de Córdoba a Plaza España: colectivo, taxi o remís. La terminal queda alejada del centro; confirmá rutas el día de la visita.',
      h1: 'De la Terminal de Ómnibus a Plaza España',
      lead: 'La Terminal de Ómnibus de Córdoba está a varios kilómetros del centro y de Nueva Córdoba. Para llegar a Plaza España podés combinar transporte público o tomar taxi/remís; esta guía no publica la distancia exacta ni tarifas porque cambian.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Opciones de viaje',
          paragraphs: [
            'Desde la terminal podés tomar un colectivo que conecte con el centro y bajar a pocas cuadras de la plaza, o coordinar un taxi/remís directo a “Plaza España, Nueva Córdoba”.',
            'No se confirma una línea directa ni su frecuencia. Consultala en los canales oficiales de movilidad el mismo día.',
          ],
          bullets: [
            'Indicá “Plaza España, Nueva Córdoba” para no ir a otra plaza.',
            'Confirmá línea y frecuencia en la fuente oficial.',
            'El taxi/remís acorta el tramo final y evita buscar parada.',
          ],
        },
        {
          heading: 'Antes de salir',
          paragraphs: [
            'Llevá el destino en el mapa y revisá el pronóstico. Esta guía no lista tarifas ni recorridos desde la terminal porque varían.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cómo llego de la terminal a Plaza España?',
          a: 'Podés tomar colectivo hasta el centro y caminar, o taxi/remís directo a “Plaza España, Nueva Córdoba”. Confirmá la línea el día de la visita.',
        },
        {
          q: '¿Cuánto tardo?',
          a: 'Depende del tránsito y la combinación. Esta guía no publica un tiempo exacto porque varía.',
        },
        {
          q: '¿Conviene taxi o colectivo?',
          a: 'Si venís con equipaje o grupo, el taxi/remís es más directo. Si querés ahorrar, el colectivo hasta el centro y caminar por la Av. Hipólito Yrigoyen.',
        },
        {
          q: '¿La terminal está cerca de la plaza?',
          a: 'No; queda alejada del centro. Confirmá la ruta antes de viajar.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
        { name: 'Google Maps: Plaza España, Córdoba', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },

  {
    slug: 'que-es-plaza-espana-cordoba',
    group: 'cultura',
    related: [
      'historia-plaza-espana-cordoba',
      'arquitectura-plaza-espana-miguel-angel-roca',
      'museo-metropolitano-arte-urbano-mmau',
      'rotonda-plaza-espana-cordoba',
    ],
    content: {
      kicker: 'Qué es',
      title: 'Qué es Plaza España en Córdoba: plaza, rotonda y MMAU',
      description:
        'Qué es Plaza España en Córdoba, Argentina: un espacio público de Nueva Córdoba con rotonda de hormigón y el museo subterráneo MMAU. No es la plaza de España.',
      h1: '¿Qué es Plaza España en Córdoba?',
      lead: 'Plaza España es un espacio público de Nueva Córdoba, al sur del centro de la ciudad de Córdoba, Argentina. Su nombre se repite en otras ciudades: esta guía describe el espacio de Córdoba, no el de España.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Una plaza, no un parque soleado',
          paragraphs: [
            'Es una plaza de composición de hormigón, para caminar y mirar la arquitectura, más que un parque con césped y sombra. La historia municipal la vincula con el proyecto de Parque Sarmiento.',
            'El nombre está registrado desde marzo de 1926. El diseño actual es de Miguel Ángel Roca, ganador de un concurso en 1973 e inaugurado en 1980.',
          ],
        },
        {
          heading: 'El MMAU integrado',
          paragraphs: [
            'El Museo Metropolitano de Arte Urbano (MMAU) está integrado al subsuelo. Es un espacio distinto de la plaza exterior, con agenda y horarios propios.',
          ],
          bullets: [
            'Plaza exterior: espacio público, sin entrada.',
            'MMAU: museo subterráneo, entrada según fuente municipal.',
            'No apliques el horario de uno al otro.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Plaza España está en España?',
          a: 'No. Esta guía es sobre Plaza España en Nueva Córdoba, ciudad de Córdoba, Argentina. El nombre se repite en otras ciudades, pero el destino del mapa debe decir Córdoba, Argentina.',
        },
        {
          q: '¿Es un parque o una plaza dura?',
          a: 'Es una plaza de hormigón para caminar y observar la arquitectura, no un parque soleado tradicional.',
        },
        {
          q: '¿El MMAU es la plaza?',
          a: 'No. El MMAU es un museo integrado al subsuelo; la plaza exterior es el espacio público. Se visitan bajo condiciones distintas.',
        },
        {
          q: '¿Es gratis?',
          a: 'La plaza exterior es un espacio público sin entrada. El MMAU lista entrada gratuita según Turismo Córdoba; confirmalo antes de ir.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: historia de Plaza España', url: SOURCES.plazaHistoria },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'arquitectura-plaza-espana-miguel-angel-roca',
    group: 'cultura',
    related: [
      'que-es-plaza-espana-cordoba',
      'historia-plaza-espana-cordoba',
      'rotonda-plaza-espana-cordoba',
      'museo-metropolitano-arte-urbano-mmau',
    ],
    content: {
      kicker: 'Arquitectura',
      title: 'Arquitectura de Plaza España: Miguel Ángel Roca y el hormigón',
      description:
        'La arquitectura de Plaza España en Córdoba: el concurso de Miguel Ángel Roca (1973), la inauguración (1980) y la composición de hormigón que la identifica.',
      h1: 'La arquitectura de Plaza España',
      lead: 'El diseño actual de Plaza España es de Miguel Ángel Roca, ganador de un concurso en 1973 e inaugurado en 1980. Su composición de hormigón, con la rotonda y el juego de planos, se volvió parte del paisaje de Nueva Córdoba.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'El concurso y la obra',
          paragraphs: [
            'Miguel Ángel Roca ganó en 1973 el concurso para un nuevo diseño de la plaza, inaugurado en 1980. La obra es leída como arquitectura del movimiento moderno local.',
          ],
          bullets: [
            'Concurso ganado: 1973.',
            'Inauguración: 1980.',
            'Autor: Miguel Ángel Roca.',
          ],
        },
        {
          heading: 'La composición',
          paragraphs: [
            'La plaza se organiza en torno a una rotonda y un juego de planos de hormigón. Es un espacio para caminar y observar la arquitectura, más que un parque tradicional con césped.',
            'La incorporación del MMAU al subsuelo sumó un uso cultural a esa composición, pero el museo mantiene su propio acceso y horarios.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Quién diseñó Plaza España?',
          a: 'Miguel Ángel Roca, que ganó el concurso en 1973 e inauguró el diseño en 1980.',
        },
        {
          q: '¿De qué material es?',
          a: 'Es una composición de hormigón, con rotonda y planos. Por eso se la describe como plaza dura, para caminar y mirar.',
        },
        {
          q: '¿Cuándo se inauguró?',
          a: 'El diseño actual se inauguró en 1980, tras el concurso ganado por Roca en 1973.',
        },
        {
          q: '¿El diseño incluye al MMAU?',
          a: 'El MMAU se integró al subsuelo después. La composición exterior es de Roca; el museo tiene acceso y horarios propios.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: historia de Plaza España', url: SOURCES.plazaHistoria },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'rotonda-plaza-espana-cordoba',
    group: 'cultura',
    related: [
      'que-es-plaza-espana-cordoba',
      'arquitectura-plaza-espana-miguel-angel-roca',
      'como-llegar-plaza-espana-cordoba',
      'estacionamiento-cerca-plaza-espana',
    ],
    content: {
      kicker: 'La rotonda',
      title: 'La rotonda de Plaza España, Córdoba: cómo cruzarla',
      description:
        'La rotonda de Plaza España en Córdoba: un anillo de circulación vehicular. Cómo cruzarla a pie y dónde descender en vehículo.',
      h1: 'La rotonda de Plaza España',
      lead: 'Plaza España se organiza en torno a una rotonda con anillo de circulación vehicular. No es un punto de parada ni de cruce libre: usá los cruces peatonales habilitados y acordá la bajada junto a un acceso peatonal.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Circular a pie',
          paragraphs: [
            'La rotonda tiene anillo de circulación vehicular. No cruces los carriles por el centro: usá los cruces peatonales habilitados y respetá la señalización.',
          ],
          bullets: [
            'No cruces por el centro del anillo.',
            'Usá cruces peatonales habilitados.',
            'Acordá el descenso junto a un acceso peatonal.',
          ],
        },
        {
          heading: 'En vehículo',
          paragraphs: [
            'Llegá con el destino exacto en el mapa y no detengas el auto sobre la rotonda. Buscá estacionamiento regulado o playas privadas a pocas cuadras; no se confirma disponibilidad ni costo.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Se puede cruzar la rotonda a pie?',
          a: 'Sí, por los cruces peatonales habilitados. No cruces los carriles por el centro del anillo de circulación.',
        },
        {
          q: '¿Puedo parar el auto en la rotonda?',
          a: 'No. Es un anillo de circulación vehicular. Acordá el descenso junto a un acceso peatonal y buscá estacionamiento a pocas cuadras.',
        },
        {
          q: '¿Es peligrosa?',
          a: 'Lo es si no se respetan los cruces. Planificá el descenso y usá pasos habilitados; esta guía no garantiza seguridad absoluta.',
        },
        {
          q: '¿Por qué la plaza tiene rotonda?',
          a: 'Forma parte de la composición de hormigón de Miguel Ángel Roca, donde la rotonda articula el tránsito y el espacio peatonal.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
        { name: 'Google Maps: Plaza España, Córdoba', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },

  {
    slug: 'mmau-arte-urbano-cordoba',
    group: 'cultura',
    related: [
      'museo-metropolitano-arte-urbano-mmau',
      'horarios-y-entrada-plaza-espana-mmau',
      'que-es-plaza-espana-cordoba',
      'arquitectura-plaza-espana-miguel-angel-roca',
    ],
    content: {
      kicker: 'Arte urbano',
      title: 'MMAU y el arte urbano en Plaza España, Córdoba',
      description:
        'El MMAU de Plaza España como museo de arte urbano integrado al subsuelo. Qué ver y cómo se diferencia de la plaza exterior.',
      h1: 'MMAU: arte urbano bajo la plaza',
      lead: 'El Museo Metropolitano de Arte Urbano (MMAU) es un espacio cultural integrado al subsuelo de Plaza España, con arte urbano. Es distinto de la plaza exterior: su programación, ingreso y horarios se gestionan por separado.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Arte urbano en el subsuelo',
          paragraphs: [
            'Turismo municipal identifica al MMAU como parte del conjunto Plaza España, con arte urbano en el subsuelo. La plaza exterior y las salas del museo se recorren bajo condiciones distintas.',
          ],
          bullets: [
            'MMAU: arte urbano en el subsuelo.',
            'Plaza exterior: espacio público.',
            'No apliques el horario de la plaza al museo.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Consultá la programación y el acceso en los canales oficiales antes de ir. Esta guía no garantiza la apertura ni lista horarios del MMAU más allá de la referencia municipal.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Qué es el MMAU?',
          a: 'El Museo Metropolitano de Arte Urbano, integrado al subsuelo de Plaza España, con arte urbano. Es un espacio distinto de la plaza exterior.',
        },
        {
          q: '¿El arte urbano está en la plaza o en el museo?',
          a: 'Está en el subsuelo del MMAU. La plaza exterior es el espacio público; el museo tiene su propio acceso.',
        },
        {
          q: '¿Cuál es el horario?',
          a: 'Como referencia, Turismo Córdoba lista martes a viernes 10:00–20:00 y fines de semana y feriados 12:00–20:00. Confirmalo en la fuente oficial.',
        },
        {
          q: '¿La entrada es gratuita?',
          a: 'La carta municipal indica entrada gratuita. Verificá cualquier cambio en la fuente oficial antes de la visita.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: MMAU y su integración', url: SOURCES.mmau },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'mmau-accesibilidad-cordoba',
    group: 'cultura',
    related: [
      'museo-metropolitano-arte-urbano-mmau',
      'horarios-y-entrada-plaza-espana-mmau',
      'rotonda-plaza-espana-cordoba',
    ],
    content: {
      kicker: 'Accesibilidad',
      title: 'Accesibilidad en el MMAU y Plaza España, Córdoba',
      description:
        'Accesibilidad en Plaza España y el MMAU: rampas, ascensores y baños no se confirman como permanentes. Consultá según las necesidades de tu grupo.',
      h1: 'Accesibilidad en la plaza y el MMAU',
      lead: 'No se confirma una ruta accesible continua ni servicios permanentes de baños, rampas o ascensores en la plaza exterior. El acceso al MMAU depende de la apertura del museo, no de la plaza.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'En la plaza exterior',
          paragraphs: [
            'La plaza es una composición de hormigón con desniveles. No se verificó un itinerario accesible continuo sin escalones, así que si tu visita depende de rampas o superficies planas, consultalas antes de salir.',
            'Esta guía no confirma baños permanentes en la plaza. Los servicios dependen de cada espacio y su apertura.',
          ],
        },
        {
          heading: 'En el MMAU',
          paragraphs: [
            'El acceso a salas, baños y servicios de accesibilidad del MMAU depende de la apertura del museo. Confirmalo en la fuente oficial antes de ir; no uses el horario de la plaza exterior.',
          ],
          bullets: [
            'Rampas/ascensores: consultar antes de salir.',
            'Baños: no se confirman permanentes en la plaza.',
            'MMAU: acceso según su apertura.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Hay rampas en la plaza?',
          a: 'No se verificó una ruta accesible continua. Si tu visita depende de rampas, consultalas antes de salir.',
        },
        {
          q: '¿Hay baños?',
          a: 'Esta guía no confirma baños permanentes en la plaza. Consultá los servicios de cada museo según su apertura.',
        },
        {
          q: '¿El MMAU es accesible?',
          a: 'El acceso depende de la apertura del museo. Confirmalo en la fuente oficial antes de visitar.',
        },
        {
          q: '¿Puedo ir con silla de ruedas?',
          a: 'La plaza tiene desniveles y no se confirmó ruta continua. Planificá con antelación y consultá accesibilidad en cada espacio.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: MMAU y su integración', url: SOURCES.mmau },
        { name: 'Google Maps: Plaza España, Córdoba', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },

  {
    slug: 'mejor-momento-visitar-plaza-espana',
    group: 'cultura',
    related: [
      'que-es-plaza-espana-cordoba',
      'horarios-y-entrada-plaza-espana-mmau',
      'como-llegar-plaza-espana-cordoba',
    ],
    content: {
      kicker: 'Cuándo ir',
      title: 'Mejor momento para visitar Plaza España, Córdoba',
      description:
        'Cuándo visitar Plaza España en Córdoba según el pronóstico: sol y calor, lluvia o viento, y tiempo fresco. Sugerencias de preparación, no promedios climatológicos.',
      h1: '¿Cuándo visitar Plaza España?',
      lead: 'Para caminar y observar la arquitectura, buscá un momento cómodo según el calor, la lluvia y tu disponibilidad. Estas son sugerencias de preparación, no promedios climatológicos ni garantías de acceso.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Con sol y calor',
          paragraphs: [
            'Llevá agua y protección solar, hacé pausas y reducí el tiempo de exposición según las condiciones. La plaza es de hormigón y tiene poca sombra.',
          ],
          bullets: [
            'Agua y protector solar.',
            'Pausas a la sombra de los edificios cercanos.',
            'Menos exposición en las horas centrales.',
          ],
        },
        {
          heading: 'Con lluvia o viento',
          paragraphs: [
            'Revisá avisos oficiales y mantené flexible el recorrido. No des por abierto un museo como alternativa sin consultar sus horarios.',
          ],
        },
        {
          heading: 'Con tiempo fresco',
          paragraphs: [
            'Considerá una capa de abrigo y revisá las condiciones a la hora prevista de regreso. La plaza queda al aire libre.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cuál es la mejor época?',
          a: 'Depende del pronóstico y tu disponibilidad. Esta guía sugiere preparación según calor, lluvia o frío, no promedios climatológicos.',
        },
        {
          q: '¿Hay sombra en la plaza?',
          a: 'Es una plaza de hormigón con poca sombra propia. La buscás en los edificios y calles aledañas.',
        },
        {
          q: '¿En qué horario voy?',
          a: 'La plaza exterior es un espacio público; el MMAU tiene horario propio. Confirmalo en la fuente oficial.',
        },
        {
          q: '¿Llueve mucho en Córdoba?',
          a: 'No se dan promedios aquí. Revisá el pronóstico del día y mantené el recorrido flexible.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
        { name: 'Google Maps: Plaza España, Córdoba', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },

  {
    slug: 'museos-cerca-plaza-espana-cordoba',
    group: 'museos',
    related: [
      'museo-metropolitano-arte-urbano-mmau',
      'museo-emilio-caraffa-desde-plaza-espana',
      'museo-evita-palacio-ferreyra-desde-plaza-espana',
      'paseo-del-buen-pastor-desde-plaza-espana',
      'ruta-museos-nueva-cordoba',
    ],
    content: {
      kicker: 'Museos cercanos',
      title: 'Museos cerca de Plaza España, Córdoba: MMAU, Caraffa, Ferreyra y Buen Pastor',
      description:
        'Museos cerca de Plaza España en Nueva Córdoba: el MMAU en la plaza y, hacia el norte, Caraffa, Paseo del Buen Pastor y Palacio Ferreyra. Cada uno con horario y entrada propios.',
      h1: 'Museos cerca de Plaza España',
      lead: 'Desde Plaza España podés armar un recorrido cultural a pie por Nueva Córdoba: el MMAU en la misma plaza y, hacia el norte por la Av. Hipólito Yrigoyen, el Museo Caraffa, el Paseo del Buen Pastor y Palacio Ferreyra. Cada uno tiene horario y entrada propios.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'En la plaza',
          paragraphs: [
            'El MMAU (Museo Metropolitano de Arte Urbano) está integrado al subsuelo. Es el punto de partida y lista entrada gratuita según Turismo Córdoba.',
          ],
        },
        {
          heading: 'Hacia el norte',
          paragraphs: [
            'A pocas cuadras por la Av. Hipólito Yrigoyen: Museo Caraffa (~10–15 min), Paseo del Buen Pastor (~15–20 min) y Palacio Ferreyra (~20–25 min). Cada uno tiene horarios y entrada propios; confirmalos antes de ir.',
          ],
          bullets: [
            'MMAU: en la plaza, entrada gratuita según municipal.',
            'Caraffa: ~10–15 min a pie.',
            'Buen Pastor: ~15–20 min.',
            'Palacio Ferreyra: ~20–25 min.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Qué museos hay cerca de Plaza España?',
          a: 'En la plaza, el MMAU. Hacia el norte: Museo Caraffa, Paseo del Buen Pastor y Palacio Ferreyra, todos por la Av. Hipólito Yrigoyen.',
        },
        {
          q: '¿Se puede hacer a pie?',
          a: 'Sí, los del norte quedan a 10–25 min a pie por la misma avenida. El MMAU está en la plaza.',
        },
        {
          q: '¿Los horarios son iguales?',
          a: 'No. Cada museo tiene horario y entrada propios; confirmalos en la fuente oficial antes de ir.',
        },
        {
          q: '¿Cuál es gratuito?',
          a: 'El MMAU lista entrada gratuita según Turismo Córdoba. Los otros pueden tener condiciones propias; confirmalo.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
        { name: 'Turismo Córdoba: MMAU y su integración', url: SOURCES.mmau },
      ],
    },
  },

  {
    slug: 'ruta-museos-nueva-cordoba',
    group: 'museos',
    related: [
      'museos-cerca-plaza-espana-cordoba',
      'museo-metropolitano-arte-urbano-mmau',
      'museo-emilio-caraffa-desde-plaza-espana',
      'paseo-del-buen-pastor-desde-plaza-espana',
      'museo-evita-palacio-ferreyra-desde-plaza-espana',
    ],
    content: {
      kicker: 'Ruta de museos',
      title: 'Ruta de museos por Nueva Córdoba: de Plaza España al Buen Pastor',
      description:
        'Ruta de museos a pie por Nueva Córdoba desde Plaza España: MMAU, Caraffa, Buen Pastor y Palacio Ferreyra. Tiempos aproximados y cómo encadenarlos.',
      h1: 'Ruta de museos por Nueva Córdoba',
      lead: 'Propone un recorrido: Plaza España (MMAU) → Caraffa → Paseo del Buen Pastor → Palacio Ferreyra, bajando y subiendo por la Av. Hipólito Yrigoyen según el tiempo disponible.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'El orden sugerido',
          paragraphs: [
            'Empezá en la plaza con el MMAU. Subí por la Av. Hipólito Yrigoyen hasta el Museo Caraffa, seguí al Paseo del Buen Pastor y cerrá en Palacio Ferreyra.',
          ],
          bullets: [
            'Plaza España (MMAU): punto de partida.',
            'Caraffa: ~10–15 min a pie.',
            'Buen Pastor: ~15–20 min.',
            'Palacio Ferreyra: ~20–25 min.',
          ],
        },
        {
          heading: 'Antes de salir',
          paragraphs: [
            'Confirmá horarios y entrada de cada museo en la fuente oficial; ajustá el recorrido a sus horarios. No se presume una ruta accesible continua.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Qué orden conviene?',
          a: 'MMAU en la plaza, luego Caraffa, Buen Pastor y Ferreyra por la Av. Hipólito Yrigoyen hacia el norte.',
        },
        {
          q: '¿Cuánto tardo?',
          a: 'Un paseo de museos del norte más la plaza lleva media jornada si confirmás horarios. Los tiempos a pie son de 10–25 min entre puntos.',
        },
        {
          q: '¿Se hace todo a pie?',
          a: 'Sí, los museos del norte quedan a 10–25 min a pie por la misma avenida. Podés acortar con transporte.',
        },
        {
          q: '¿El MMAU es gratis?',
          a: 'La carta municipal indica entrada gratuita. Confirmalo en la fuente oficial antes de la visita.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
        { name: 'Google Maps: Plaza España, Córdoba', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },

  {
    slug: 'mmau-y-museos-cercanos',
    group: 'museos',
    related: [
      'museo-metropolitano-arte-urbano-mmau',
      'museos-cerca-plaza-espana-cordoba',
      'ruta-museos-nueva-cordoba',
      'museos-gratuitos-nueva-cordoba',
    ],
    content: {
      kicker: 'Elegir visita',
      title: 'MMAU vs museos cercanos: qué visitar desde Plaza España',
      description:
        'Cómo elegir entre el MMAU y los museos cercanos (Caraffa, Ferreyra, Buen Pastor) desde Plaza España. Diferencias de entrada, tema y acceso.',
      h1: 'MMAU y los museos cercanos: cómo elegir',
      lead: 'El MMAU es gratuito según la carta municipal y está en la plaza. Caraffa, Ferreyra y el Buen Pastor son museos y espacios distintos, con temáticas y condiciones propias. Elegí según tu interés, tiempo y accesibilidad.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Si querés lo más directo',
          paragraphs: [
            'El MMAU está en la plaza y lista entrada gratuita según Turismo Córdoba. Es la opción más rápida si no querés caminar mucho.',
          ],
        },
        {
          heading: 'Si querés más recorrido',
          paragraphs: [
            'Caraffa (bellas artes), Palacio Ferreyra (museo superior de bellas artes) y el Paseo del Buen Pastor (exposiciones y gastronomía) quedan a 10–25 min a pie por la Av. Hipólito Yrigoyen.',
            'Cada uno tiene horario y entrada propios; confirmalos antes de ir. No se presume que el MMAU y ellos compartan condiciones.',
          ],
          bullets: [
            'MMAU: en la plaza, gratuito según municipal.',
            'Caraffa: bellas artes, ~10–15 min.',
            'Buen Pastor: exposiciones y comida, ~15–20 min.',
            'Ferreyra: museo de bellas artes, ~20–25 min.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cuál museo es gratuito?',
          a: 'El MMAU lista entrada gratuita según Turismo Córdoba. Los otros pueden tener condiciones propias; confirmalo en la fuente oficial.',
        },
        {
          q: '¿Vale la pena caminar a los otros?',
          a: 'Si te interesa bellas artes o un recorrido más largo, sí. Quedan a 10–25 min a pie por la Av. Hipólito Yrigoyen.',
        },
        {
          q: '¿Puedo hacer todos en un día?',
          a: 'Media jornada si confirmás horarios. El MMAU está en la plaza; los demás, al norte.',
        },
        {
          q: '¿El MMAU y Ferreyra son lo mismo?',
          a: 'No. El MMAU es arte urbano en el subsuelo de la plaza; Ferreyra es un museo de bellas artes en un palacio, a unas 20–25 min a pie.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: MMAU y su integración', url: SOURCES.mmau },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'museos-gratuitos-nueva-cordoba',
    group: 'museos',
    related: [
      'museos-cerca-plaza-espana-cordoba',
      'museo-metropolitano-arte-urbano-mmau',
      'ruta-museos-nueva-cordoba',
      'mmau-y-museos-cercanos',
    ],
    content: {
      kicker: 'Entrada gratuita',
      title: 'Museos gratuitos cerca de Plaza España, Córdoba',
      description:
        'Museos gratuitos cerca de Plaza España: el MMAU lista entrada gratuita según Turismo Córdoba. Otros museos pueden tener días u horarios gratuitos; confirmalo.',
      h1: 'Museos gratuitos cerca de Plaza España',
      lead: 'El MMAU (en la plaza) lista entrada gratuita según la carta municipal de Turismo Córdoba. Otros museos cercanos pueden tener días u horarios con entrada gratuita, pero esta guía no confirma esos detalles: consultalos en la fuente oficial.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Lo confirmado',
          paragraphs: [
            'Turismo municipal identifica al MMAU con entrada gratuita. Es la referencia más clara de esta guía sobre gratuidad en la zona.',
          ],
        },
        {
          heading: 'Lo que no se confirma',
          paragraphs: [
            'Para Caraffa, Ferreyra y el Buen Pastor, las condiciones de entrada cambian y pueden incluir días gratuitos. No se publican aquí para no desactualizar; confirmalos en la web oficial o la ficha de Maps.',
          ],
          bullets: [
            'MMAU: gratuito según municipal.',
            'Otros: consultar días/horarios en fuente oficial.',
            'No asumas gratuidad sin confirmar.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cuál museo es gratis?',
          a: 'El MMAU lista entrada gratuita según Turismo Córdoba. Los otros pueden tener días gratuitos; confirmalo en la fuente oficial.',
        },
        {
          q: '¿El MMAU es siempre gratuito?',
          a: 'La carta municipal indica entrada gratuita. Verificá cualquier cambio en la fuente oficial antes de la visita.',
        },
        {
          q: '¿Caraffa es gratis?',
          a: 'No se confirma. Consultá horarios y entrada en la web oficial o en la ficha de Maps.',
        },
        {
          q: '¿Dónde confirmo?',
          a: 'En la web oficial de cada museo o en su ficha de Google Maps; esta guía no lista tarifas porque cambian.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: MMAU y su integración', url: SOURCES.mmau },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'museos-centro-cordoba',
    group: 'museos',
    related: [
      'museos-cerca-plaza-espana-cordoba',
      'ruta-museos-nueva-cordoba',
      'museo-emilio-caraffa-desde-plaza-espana',
    ],
    content: {
      kicker: 'Más allá de Nueva Córdoba',
      title: 'Museos en el centro de Córdoba cerca de Plaza España',
      description:
        'Otros museos del centro de Córdoba cerca de Plaza España: cómo extender el recorrido más allá de Nueva Córdoba y qué confirmar antes de ir.',
      h1: 'Otros museos del centro desde Plaza España',
      lead: 'Esta guía se centra en los museos de Nueva Córdoba (MMAU, Caraffa, Ferreyra, Buen Pastor). El centro de Córdoba tiene más museos municipales a mayor distancia; podés extender el recorrido, pero confirmá horarios y entrada de cada uno.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Extender el recorrido',
          paragraphs: [
            'El circuito de museos de la ciudad incluye sedes en distintos barrios. Desde Nueva Córdoba podés sumar las del centro histórico, pero la distancia y el transporte varían.',
          ],
          bullets: [
            'Confirmá ubicación y horario en la fuente oficial.',
            'No asumas que comparten entrada con el MMAU.',
            'Considerá transporte para los más lejanos.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Esta guía no lista los museos del centro más allá de los de Nueva Córdoba. Consultalos en la web oficial de turismo o cultura de la municipalidad.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Hay más museos cerca?',
          a: 'Sí, el centro de Córdoba tiene más sedes municipales. Esta guía se enfoca en los de Nueva Córdoba; para los demás, consultá la fuente oficial.',
        },
        {
          q: '¿Cómo llego a los del centro?',
          a: 'Dependiendo de la distancia, a pie o en transporte. Confirmá la ubicación en la fuente oficial antes de salir.',
        },
        {
          q: '¿Comparten entrada con el MMAU?',
          a: 'No se asume. Cada museo tiene condiciones propias; confirmalos antes de ir.',
        },
        {
          q: '¿Vale extender el recorrido?',
          a: 'Si tenés tiempo, sí. Pero planificá con los horarios reales y el transporte; esta guía no garantiza tiempos.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
        { name: 'Google Maps: Plaza España, Córdoba', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },

  {
    slug: 'restaurantes-cerca-plaza-espana-cordoba',
    group: 'comer',
    related: [
      'cafes-cerca-plaza-espana-cordoba',
      'donde-comer-nueva-cordoba',
      'heladerias-cerca-plaza-espana',
      'bares-cerca-plaza-espana-cordoba',
    ],
    content: {
      kicker: 'Restaurantes',
      title: 'Restaurantes cerca de Plaza España, Córdoba',
      description:
        'Restaurantes y opciones de comida cerca de Plaza España en Nueva Córdoba. Salida, caminata y cuándo ir, sin recomendar comercios concretos como únicos.',
      h1: 'Restaurantes cerca de Plaza España',
      lead: 'La Av. Hipólito Yrigoyen y las calles aledañas (Estrada, Chacabuco) tienen restaurantes y locales de comida a pocas cuadras de la plaza. Esta guía describe el recorrido y los usos, no rankea comercios.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Por dónde caminar',
          paragraphs: [
            'Salí de la plaza por la Av. Hipólito Yrigoyen y caminá el tramo norte y las calles aledañas. En un radio de 10 a 15 min a pie encontrás opciones de almuerzo y cena.',
          ],
          bullets: [
            'Salida sugerida: Av. Hipólito Yrigoyen.',
            'Radio aproximado: 10–15 min a pie.',
            'Calles con opciones: Av. Hipólito Yrigoyen, Estrada, Chacabuco.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Esta guía no recomienda un restaurante concreto como el mejor ni publica precios. Confirmá horarios y disponibilidad en el lugar o en la ficha de Maps el día de la visita.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Hay restaurantes cerca de Plaza España?',
          a: 'Sí, sobre la Av. Hipólito Yrigoyen y calles aledañas (Estrada, Chacabuco) hay opciones de comida a 10–15 min a pie.',
        },
        {
          q: '¿Cuál es el mejor?',
          a: 'Esta guía no rankea comercios. Confirmá horarios y disponibilidad en el lugar o en Maps el día de la visita.',
        },
        {
          q: '¿Están abiertos siempre?',
          a: 'No se confirma. Confirmá horarios en el lugar o en la ficha de Maps el día de la visita.',
        },
        {
          q: '¿Puedo reservar?',
          a: 'Depende de cada local; esta guía no lista cuáles aceptan reserva.',
        },
      ],
      sources: [
        { name: 'Google Maps: restaurantes cerca de Plaza España', url: 'https://www.google.com/maps?q=restaurantes%20cerca%20Plaza%20Espa%C3%B1a%20C%C3%B3rdoba' },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'donde-comer-nueva-cordoba',
    group: 'comer',
    related: [
      'restaurantes-cerca-plaza-espana-cordoba',
      'cafes-cerca-plaza-espana-cordoba',
      'heladerias-cerca-plaza-espana',
      'bares-cerca-plaza-espana-cordoba',
    ],
    content: {
      kicker: 'Dónde comer',
      title: 'Dónde comer en Nueva Córdoba cerca de Plaza España',
      description:
        'Dónde comer en Nueva Córdoba cerca de Plaza España: restaurantes, cafés y locales de comida a pocas cuadras. Sin recomendar comercios concretos.',
      h1: 'Dónde comer en Nueva Córdoba',
      lead: 'Nueva Córdoba concentra opciones de comida en la Av. Hipólito Yrigoyen y calles aledañas, a pocas cuadras de Plaza España. Esta guía describe el recorrido, no rankea comercios.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'El radio de opciones',
          paragraphs: [
            'Desde la plaza, en unos 10 a 15 minutos a pie por la Av. Hipólito Yrigoyen y calles como Estrada y Chacabuco encontrás restaurantes, cafés y locales de comida.',
          ],
          bullets: [
            'Eje: Av. Hipólito Yrigoyen.',
            'Radio: 10–15 min a pie.',
            'Tipos: restaurantes, cafés, comida y restobares.',
          ],
        },
        {
          heading: 'Cómo elegir',
          paragraphs: [
            'Para almuerzo o cena, hay opciones de comida y restobares en el mismo tramo. Si venís del Buen Pastor o Ferreyra, coincidís en la misma avenida y cerrás el recorrido con una pausa de comida.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Dónde comer cerca de la plaza?',
          a: 'Por la Av. Hipólito Yrigoyen y calles aledañas (Estrada, Chacabuco) hay restaurantes y cafés a 10–15 min a pie.',
        },
        {
          q: '¿Hay opciones para llevar?',
          a: 'Varios locales de la avenida permiten pedir para take away. Confirmá en el local; esta guía no lista cuáles.',
        },
        {
          q: '¿Recomiendan alguno?',
          a: 'No. Esta guía no rankea comercios; confirmá horarios y disponibilidad en el lugar o en Maps.',
        },
        {
          q: '¿Se come bien en Nueva Córdoba?',
          a: 'Hay variedad a pocas cuadras de la plaza. Confirmá lo que buscás (precio, tipo de cocina) en el lugar.',
        },
      ],
      sources: [
        { name: 'Google Maps: comer en Nueva Córdoba', url: 'https://www.google.com/maps?q=comer%20Nueva%20C%C3%B3rdoba%20C%C3%B3rdoba' },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'heladerias-cerca-plaza-espana',
    group: 'comer',
    related: [
      'cafes-cerca-plaza-espana-cordoba',
      'restaurantes-cerca-plaza-espana-cordoba',
      'donde-comer-nueva-cordoba',
    ],
    content: {
      kicker: 'Heladerías',
      title: 'Heladerías cerca de Plaza España, Córdoba',
      description:
        'Heladerías y helado cerca de Plaza España en Nueva Córdoba. Dónde buscarlas y cuándo, sin recomendar un comercio concreto.',
      h1: 'Heladerías cerca de Plaza España',
      lead: 'En Nueva Córdoba, sobre la Av. Hipólito Yrigoyen y calles aledañas, hay heladerías a pocas cuadras de la plaza. Esta guía describe el recorrido, no rankea comercios.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Dónde buscar',
          paragraphs: [
            'Salí de la plaza por la Av. Hipólito Yrigoyen y caminá el tramo norte. En un radio de 10 a 15 min a pie encontrás heladerías sobre la avenida y calles como Estrada y Chacabuco.',
          ],
          bullets: [
            'Eje: Av. Hipólito Yrigoyen.',
            'Radio: 10–15 min a pie.',
            'Confirmá horario en el local o Maps.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Esta guía no recomienda una heladería concreta ni publica precios. Confirmá horarios y disponibilidad en el día de la visita; un local puede haber cambiado de horario.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Hay heladerías cerca de Plaza España?',
          a: 'Sí, sobre la Av. Hipólito Yrigoyen y calles aledañas hay heladerías a 10–15 min a pie.',
        },
        {
          q: '¿Cuál recomiendan?',
          a: 'Esta guía no rankea comercios. Confirmá horarios y disponibilidad en el local o en Maps.',
        },
        {
          q: '¿Están abiertas siempre?',
          a: 'No se confirma. Confirmá en el local o en la ficha de Maps el día de la visita.',
        },
        {
          q: '¿En qué época conviene?',
          a: 'El helado es popular con calor, pero las heladerías pueden abrir todo el año; confirmá horarios.',
        },
      ],
      sources: [
        { name: 'Google Maps: heladerías cerca de Plaza España', url: 'https://www.google.com/maps?q=helader%C3%ADas%20cerca%20Plaza%20Espa%C3%B1a%20C%C3%B3rdoba' },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'bares-cerca-plaza-espana-cordoba',
    group: 'comer',
    related: [
      'cafes-cerca-plaza-espana-cordoba',
      'restaurantes-cerca-plaza-espana-cordoba',
      'donde-comer-nueva-cordoba',
    ],
    content: {
      kicker: 'Bares',
      title: 'Bares cerca de Plaza España, Córdoba',
      description:
        'Bares y opciones nocturnas cerca de Plaza España en Nueva Córdoba. Dónde buscarlos y cuándo, sin recomendar un comercio concreto.',
      h1: 'Bares cerca de Plaza España',
      lead: 'Nueva Córdoba tiene bares y locales nocturnos sobre la Av. Hipólito Yrigoyen y calles aledañas, a pocas cuadras de la plaza. Esta guía describe el recorrido, no rankea comercios.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Dónde buscar',
          paragraphs: [
            'Salí de la plaza por la Av. Hipólito Yrigoyen y explorá el tramo norte y las calles aledañas. En un radio de 10 a 15 min a pie hay bares y opciones nocturnas.',
          ],
          bullets: [
            'Eje: Av. Hipólito Yrigoyen.',
            'Radio: 10–15 min a pie.',
            'Confirmá horario en el local o Maps.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Esta guía no recomienda un bar concreto ni publica precios. Confirmá horarios y disponibilidad en el día de la visita.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Hay bares cerca de Plaza España?',
          a: 'Sí, sobre la Av. Hipólito Yrigoyen y calles aledañas hay bares a 10–15 min a pie.',
        },
        {
          q: '¿Cuál recomiendan?',
          a: 'Esta guía no rankea comercios. Confirmá horarios y disponibilidad en el local o en Maps.',
        },
        {
          q: '¿Hasta qué hora abren?',
          a: 'No se confirma. Confirmá en el local o en la ficha de Maps el día de la visita.',
        },
        {
          q: '¿Es seguro de noche?',
          a: 'Usá cruces habilitados y zonas iluminadas. Esta guía no garantiza seguridad; prevení como en cualquier ciudad.',
        },
      ],
      sources: [
        { name: 'Google Maps: bares cerca de Plaza España', url: 'https://www.google.com/maps?q=bares%20cerca%20Plaza%20Espa%C3%B1a%20C%C3%B3rdoba' },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'desayuno-nueva-cordoba',
    group: 'comer',
    related: [
      'cafes-cerca-plaza-espana-cordoba',
      'donde-comer-nueva-cordoba',
      'cafeterias-nueva-cordoba',
    ],
    content: {
      kicker: 'Desayuno',
      title: 'Dónde desayunar en Nueva Córdoba cerca de Plaza España',
      description:
        'Dónde desayunar en Nueva Córdoba cerca de Plaza España: cafeterías con mesas y opciones de desayuno a pocas cuadras. Sin recomendar un comercio concreto.',
      h1: 'Desayuno en Nueva Córdoba',
      lead: 'La Av. Hipólito Yrigoyen y calles aledañas tienen cafeterías con mesas donde desayunar, a pocas cuadras de Plaza España. Esta guía describe el recorrido, no rankea comercios.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Dónde buscar',
          paragraphs: [
            'Salí de la plaza por la Av. Hipólito Yrigoyen y caminá el tramo norte. En un radio de 10 a 15 min a pie encontrás cafeterías con opciones de desayuno.',
          ],
          bullets: [
            'Eje: Av. Hipólito Yrigoyen.',
            'Radio: 10–15 min a pie.',
            'Confirmá horario en el local o Maps.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Esta guía no recomienda una cafetería concreta ni publica precios. Confirmá horarios y disponibilidad en el día de la visita; un comercio puede haber cambiado de horario.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Dónde desayunar cerca de Plaza España?',
          a: 'Sobre la Av. Hipólito Yrigoyen y calles aledañas hay cafeterías con mesas a 10–15 min a pie.',
        },
        {
          q: '¿Cuál recomiendan?',
          a: 'Esta guía no rankea comercios. Confirmá horarios y disponibilidad en el local o en Maps.',
        },
        {
          q: '¿Abren temprano?',
          a: 'No se confirma. Confirmá en el local o en la ficha de Maps el día de la visita.',
        },
        {
          q: '¿Hay opciones para llevar?',
          a: 'Varios locales de la avenida permiten take away. Confirmá en el local.',
        },
      ],
      sources: [
        { name: 'Google Maps: desayuno en Nueva Córdoba', url: 'https://www.google.com/maps?q=desayuno%20Nueva%20C%C3%B3rdoba%20C%C3%B3rdoba' },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'merienda-nueva-cordoba',
    group: 'comer',
    related: [
      'cafes-cerca-plaza-espana-cordoba',
      'desayuno-nueva-cordoba',
      'cafeterias-nueva-cordoba',
    ],
    content: {
      kicker: 'Merienda',
      title: 'Merienda en Nueva Córdoba cerca de Plaza España',
      description:
        'Merienda en Nueva Córdoba cerca de Plaza España: confiterías y cafeterías con opciones de tarde. Sin recomendar un comercio concreto.',
      h1: 'Merienda en Nueva Córdoba',
      lead: 'Para la merienda, la Av. Hipólito Yrigoyen y calles aledañas tienen confiterías y cafeterías a pocas cuadras de Plaza España. Esta guía describe el recorrido, no rankea comercios.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Dónde buscar',
          paragraphs: [
            'Salí de la plaza por la Av. Hipólito Yrigoyen y caminá el tramo norte. En un radio de 10 a 15 min a pie encontrás locales de merienda.',
          ],
          bullets: [
            'Eje: Av. Hipólito Yrigoyen.',
            'Radio: 10–15 min a pie.',
            'Confirmá horario en el local o Maps.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Esta guía no recomienda un local concreto ni publica precios. Confirmá horarios y disponibilidad en el día de la visita.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Dónde merendar cerca de Plaza España?',
          a: 'Sobre la Av. Hipólito Yrigoyen y calles aledañas hay confiterías y cafeterías a 10–15 min a pie.',
        },
        {
          q: '¿Cuál recomiendan?',
          a: 'Esta guía no rankea comercios. Confirmá horarios y disponibilidad en el local o en Maps.',
        },
        {
          q: '¿Abren en la tarde?',
          a: 'No se confirma. Confirmá en el local o en la ficha de Maps el día de la visita.',
        },
        {
          q: '¿Hay opciones sin gluten o especiales?',
          a: 'Depende de cada local; esta guía no lista opciones dietarias.',
        },
      ],
      sources: [
        { name: 'Google Maps: merienda en Nueva Córdoba', url: 'https://www.google.com/maps?q=merienda%20Nueva%20C%C3%B3rdoba%20C%C3%B3rdoba' },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'cafeterias-nueva-cordoba',
    group: 'comer',
    related: [
      'cafes-cerca-plaza-espana-cordoba',
      'desayuno-nueva-cordoba',
      'merienda-nueva-cordoba',
    ],
    content: {
      kicker: 'Cafeterías',
      title: 'Cafeterías en Nueva Córdoba cerca de Plaza España',
      description:
        'Cafeterías en Nueva Córdoba cerca de Plaza España: café, para llevar y pausas. Sin recomendar un comercio concreto.',
      h1: 'Cafeterías en Nueva Córdoba',
      lead: 'La Av. Hipólito Yrigoyen y calles aledañas tienen cafeterías a pocas cuadras de Plaza España, muchas con opción para llevar. Esta guía describe el recorrido, no rankea comercios.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Dónde buscar',
          paragraphs: [
            'Salí de la plaza por la Av. Hipólito Yrigoyen y caminá el tramo norte. En un radio de 10 a 15 min a pie encontrás cafeterías.',
          ],
          bullets: [
            'Eje: Av. Hipólito Yrigoyen.',
            'Radio: 10–15 min a pie.',
            'Muchas permiten take away.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Esta guía no recomienda una cafetería concreta ni publica precios. Confirmá horarios y disponibilidad en el día de la visita.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Hay cafeterías cerca de Plaza España?',
          a: 'Sí, sobre la Av. Hipólito Yrigoyen y calles aledañas hay cafeterías a 10–15 min a pie.',
        },
        {
          q: '¿Venden para llevar?',
          a: 'Varios locales de la avenida permiten take away. Confirmá en el local; esta guía no lista cuáles.',
        },
        {
          q: '¿Cuál recomiendan?',
          a: 'No rankeamos comercios. Confirmá horarios y disponibilidad en el local o en Maps.',
        },
        {
          q: '¿Abren los domingos?',
          a: 'No se confirma. Confirmá en el local o en la ficha de Maps el día de la visita.',
        },
      ],
      sources: [
        { name: 'Google Maps: cafeterías Nueva Córdoba', url: 'https://www.google.com/maps?q=cafeter%C3%ADas%20Nueva%20C%C3%B3rdoba%20C%C3%B3rdoba' },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'nueva-cordoba-barrio-cordoba',
    group: 'cercanos',
    related: [
      'que-ver-cerca-plaza-espana-cordoba',
      'historia-nueva-cordoba-cordoba',
      'que-hacer-nueva-cordoba',
      'paseo-a-pie-nueva-cordoba',
    ],
    content: {
      kicker: 'El barrio',
      title: 'Nueva Córdoba: el barrio de Plaza España',
      description:
        'Nueva Córdoba, el barrio de Plaza España en Córdoba: ubicación, características y por qué es base para recorrer la zona.',
      h1: 'Nueva Córdoba, el barrio de la plaza',
      lead: 'Nueva Córdoba es el barrio al sur del centro de la ciudad de Córdoba donde está Plaza España. Funciona como base para recorrer museos, cafés y la costanera.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Dónde está',
          paragraphs: [
            'Nueva Córdoba queda al sur del centro histórico, entre el centro y la costanera del río Suquía. Plaza España es uno de sus nodos principales, sobre la Av. Hipólito Yrigoyen.',
          ],
        },
        {
          heading: 'Por qué recorrerlo',
          paragraphs: [
            'El barrio concentra el MMAU (en la plaza), museos como Caraffa, Ferreyra y el Buen Pastor a pocas cuadras, y variedad de cafés y restaurantes.',
          ],
          bullets: [
            'MMAU en la plaza.',
            'Museos a 10–25 min a pie.',
            'Cafés y comida en la Av. Hipólito Yrigoyen.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Dónde queda Nueva Córdoba?',
          a: 'Al sur del centro histórico de Córdoba, entre el centro y la costanera del Suquía. Plaza España está en su interior.',
        },
        {
          q: '¿Plaza España está en Nueva Córdoba?',
          a: 'Sí. Plaza España es un nodo de Nueva Córdoba, sobre la Av. Hipólito Yrigoyen.',
        },
        {
          q: '¿Qué hay en el barrio?',
          a: 'El MMAU en la plaza, museos a pocas cuadras (Caraffa, Ferreyra, Buen Pastor) y variedad de cafés y restaurantes.',
        },
        {
          q: '¿Es seguro caminar?',
          a: 'Usá cruces habilitados, sobre todo en la rotonda de la plaza. Prevení como en cualquier ciudad; esta guía no garantiza seguridad.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
        { name: 'Google Maps: Nueva Córdoba, Córdoba', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },

  {
    slug: 'parque-sarmiento-cordoba',
    group: 'cercanos',
    related: [
      'historia-plaza-espana-cordoba',
      'nueva-cordoba-barrio-cordoba',
      'que-hacer-nueva-cordoba',
    ],
    content: {
      kicker: 'Parque Sarmiento',
      title: 'Parque Sarmiento y Plaza España, Córdoba',
      description:
        'Parque Sarmiento y su relación con Plaza España: la historia municipal vincula la plaza al proyecto de parque. Cómo llegar y qué considerar.',
      h1: 'Parque Sarmiento desde Plaza España',
      lead: 'La historia municipal vincula a Plaza España con el proyecto de Parque Sarmiento. El parque quedó al sur/continuación del eje y conviene ir en transporte o con tiempo, porque la caminata es mayor que la de los museos del norte.',
      updated: '30 de octubre de 2026',
      mapEmbed: embed('Parque Sarmiento, Córdoba, Argentina'),
      mapDirections: directions('Parque Sarmiento, Córdoba, Argentina'),
      sections: [
        {
          heading: 'La relación histórica',
          paragraphs: [
            'La historia municipal relaciona la plaza con el proyecto de Parque Sarmiento y registra su nombre desde marzo de 1926. El parque es parte de esa idea de espacio público verde y de paseo.',
          ],
        },
        {
          heading: 'Cómo llegar',
          paragraphs: [
            'El parque conviene visitarlo con transporte o con tiempo extra, porque la caminata desde la plaza es mayor que la de los museos del norte. No se confirma una ruta accesible continua.',
          ],
          bullets: [
            'Recomendado con transporte o tiempo extra.',
            'No se confirmó ruta sin escalones.',
            'Confirmá accesos y horarios de servicios.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Qué relación hay entre la plaza y el parque?',
          a: 'La historia municipal vincula a Plaza España con el proyecto de Parque Sarmiento y registra el nombre de la plaza desde 1926.',
        },
        {
          q: '¿Se llega caminando?',
          a: 'Es más lejos que los museos del norte; conviene transporte o tiempo extra.',
        },
        {
          q: '¿Es accesible?',
          a: 'No se confirmó una ruta accesible continua. Consultá accesibilidad antes de salir.',
        },
        {
          q: '¿Cuánto tardo?',
          a: 'Depende del transporte. Esta guía no publica un tiempo exacto porque varía.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: historia de Plaza España', url: SOURCES.plazaHistoria },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'ciudad-universitaria-cordoba-desde-plaza-espana',
    group: 'cercanos',
    related: [
      'nueva-cordoba-barrio-cordoba',
      'que-ver-cerca-plaza-espana-cordoba',
      'que-hacer-nueva-cordoba',
    ],
    content: {
      kicker: 'Universidad',
      title: 'Ciudad Universitaria desde Plaza España, Córdoba',
      description:
        'Cómo ir de Plaza España a la Ciudad Universitaria de Córdoba: distancia, opciones de transporte y qué considerar.',
      h1: 'Ciudad Universitaria desde Plaza España',
      lead: 'La Ciudad Universitaria de la UNC está a varios kilómetros de Plaza España. Podés acercarte en transporte público o taxi/remís; esta guía no publica la distancia exacta ni frecuencias porque cambian.',
      updated: '30 de octubre de 2026',
      mapEmbed: embed('Ciudad Universitaria, Universidad Nacional de Córdoba'),
      mapDirections: directions('Ciudad Universitaria, Universidad Nacional de Córdoba'),
      sections: [
        {
          heading: 'Opciones de viaje',
          paragraphs: [
            'Desde la plaza podés tomar transporte público hacia el oeste, donde están los campus principales, o coordinar taxi/remís. No se confirma una línea directa ni su frecuencia.',
          ],
          bullets: [
            'Indicá “Ciudad Universitaria, UNC” en el mapa.',
            'Confirmá línea y frecuencia en la fuente oficial.',
            'El taxi/remís acorta el tramo final.',
          ],
        },
        {
          heading: 'Antes de salir',
          paragraphs: [
            'Revisá el pronóstico y llevá agua. Esta guía no garantiza rutas ni tiempos porque varían con el tránsito.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cómo llego a la Ciudad Universitaria?',
          a: 'En transporte público hacia el oeste o taxi/remís desde la plaza. Confirmá la línea el día de la visita.',
        },
        {
          q: '¿Está lejos de la plaza?',
          a: 'Sí, a varios kilómetros. Esta guía no publica la distancia exacta porque varía.',
        },
        {
          q: '¿Conviene taxi o colectivo?',
          a: 'Si tenés prisa o equipaje, taxi/remís. Si querés ahorrar, colectivo y caminar el tramo final.',
        },
        {
          q: '¿Se visita la universidad?',
          a: 'Los campus son espacios públicos, pero confirmá accesos y horarios de cada facultad antes de ir.',
        },
      ],
      sources: [
        { name: 'Google Maps: Ciudad Universitaria, UNC', url: 'https://www.google.com/maps?q=Ciudad%20Universitaria%20Universidad%20Nacional%20de%20C%C3%B3rdoba' },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'costanera-rio-suquia-cordoba',
    group: 'cercanos',
    related: [
      'nueva-cordoba-barrio-cordoba',
      'que-hacer-nueva-cordoba',
      'parque-sarmiento-cordoba',
    ],
    content: {
      kicker: 'Costanera',
      title: 'Costanera del río Suquía cerca de Plaza España, Córdoba',
      description:
        'La costanera del río Suquía cerca de Plaza España: cómo llegar, distancia y qué considerar para un paseo al aire libre.',
      h1: 'La costanera del Suquía desde Plaza España',
      lead: 'El río Suquía cruza Córdoba y tiene su costanera a algunos kilómetros de Plaza España, en Nueva Córdoba. Podés acercarte a pie o en transporte; esta guía no publica la distancia exacta porque varía.',
      updated: '30 de octubre de 2026',
      mapEmbed: embed('Costanera del río Suquía, Córdoba, Argentina'),
      mapDirections: directions('Costanera del río Suquía, Córdoba, Argentina'),
      sections: [
        {
          heading: 'El río y la costanera',
          paragraphs: [
            'La costanera es un paseo al aire libre junto al Suquía. Desde Nueva Córdoba podés acercarte, pero la distancia es mayor que la de los museos del norte de la plaza.',
          ],
          bullets: [
            'Paseo al aire libre junto al río.',
            'Recomendado con transporte o tiempo extra.',
            'Confirmá accesos y servicios.',
          ],
        },
        {
          heading: 'Antes de ir',
          paragraphs: [
            'Revisá el pronóstico: con lluvia el paseo puede complicarse. No se confirma una ruta accesible continua.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Cómo llego a la costanera?',
          a: 'A pie o en transporte desde Nueva Córdoba. Esta guía no publica la distancia exacta porque varía.',
        },
        {
          q: '¿Está cerca de Plaza España?',
          a: 'A algunos kilómetros; conviene transporte o tiempo extra, más que para los museos del norte.',
        },
        {
          q: '¿Es accesible?',
          a: 'No se confirmó ruta continua. Consultá accesibilidad antes de salir.',
        },
        {
          q: '¿Qué hacer allí?',
          a: 'Caminar junto al río y descansar al aire libre. Confirmá servicios y horarios en el día de la visita.',
        },
      ],
      sources: [
        { name: 'Google Maps: Costanera del Suquía, Córdoba', url: 'https://www.google.com/maps?q=Costanera%20r%C3%ADo%20Suqu%C3%ADa%20C%C3%B3rdoba' },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'que-hacer-nueva-cordoba',
    group: 'cercanos',
    related: [
      'nueva-cordoba-barrio-cordoba',
      'que-ver-cerca-plaza-espana-cordoba',
      'museos-cerca-plaza-espana-cordoba',
      'paseo-a-pie-nueva-cordoba',
    ],
    content: {
      kicker: 'Qué hacer',
      title: 'Qué hacer en Nueva Córdoba cerca de Plaza España',
      description:
        'Qué hacer en Nueva Córdoba cerca de Plaza España: plaza y MMAU, museos, cafés y un paseo al aire libre. Ideas de itinerario sin inventar horarios.',
      h1: 'Qué hacer en Nueva Córdoba',
      lead: 'En Nueva Córdoba podés combinar la plaza y el MMAU, los museos del norte (Caraffa, Buen Pastor, Ferreyra), una pausa de café y, si tenés tiempo, la costanera del Suquía. Confirmá horarios de cada museo antes de armar el recorrido.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'Una pausa o un recorrido',
          paragraphs: [
            'Para una visita breve, observá la arquitectura de la plaza desde un punto peatonal. Para un recorrido más largo, sumá el MMAU y los museos del norte por la Av. Hipólito Yrigoyen.',
          ],
          bullets: [
            'Plaza y MMAU: en la plaza.',
            'Caraffa, Buen Pastor, Ferreyra: 10–25 min a pie.',
            'Cafés y comida: en la Av. Hipólito Yrigoyen.',
          ],
        },
        {
          heading: 'Si tenés más tiempo',
          paragraphs: [
            'Podés extender hacia Parque Sarmiento o la costanera del Suquía, pero conviene transporte o tiempo extra. No se confirma una ruta accesible continua.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Qué se hace en Nueva Córdoba?',
          a: 'La plaza y el MMAU, los museos del norte (Caraffa, Buen Pastor, Ferreyra) y cafés sobre la Av. Hipólito Yrigoyen. Con tiempo, Parque Sarmiento o la costanera.',
        },
        {
          q: '¿Cuánto tiempo necesito?',
          a: 'Una pausa en la plaza lleva poco; un recorrido de museos del norte más la plaza, media jornada si confirmás horarios.',
        },
        {
          q: '¿Se hace a pie?',
          a: 'Los museos del norte quedan a 10–25 min a pie por la misma avenida. El parque y la costanera convienen con transporte.',
        },
        {
          q: '¿Los horarios son iguales?',
          a: 'No. Cada museo tiene horario y entrada propios; confirmalos en la fuente oficial.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
        { name: 'Google Maps: Nueva Córdoba, Córdoba', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },

  {
    slug: 'historia-nueva-cordoba-cordoba',
    group: 'cercanos',
    related: [
      'historia-plaza-espana-cordoba',
      'nueva-cordoba-barrio-cordoba',
      'que-es-plaza-espana-cordoba',
    ],
    content: {
      kicker: 'Historia del barrio',
      title: 'Historia de Nueva Córdoba y Plaza España',
      description:
        'Historia de Nueva Córdoba y Plaza España: el barrio, el nombre de la plaza desde 1926 y el diseño de Miguel Ángel Roca (1980).',
      h1: 'Historia de Nueva Córdoba',
      lead: 'Nueva Córdoba es uno de los barrios de la ciudad de Córdoba donde se ubica Plaza España. La historia municipal registra el nombre de la plaza desde marzo de 1926 y el diseño actual de Miguel Ángel Roca, inaugurado en 1980.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'El barrio',
          paragraphs: [
            'Nueva Córdoba se desarrolló al sur del centro histórico. Su trazado y equipamiento lo volvieron un área de paseo y cultura, con la plaza como uno de sus nodos.',
          ],
        },
        {
          heading: 'La plaza y su nombre',
          paragraphs: [
            'La historia municipal vincula la plaza con el proyecto de Parque Sarmiento y registra su nombre desde marzo de 1926. El concurso de Miguel Ángel Roca, ganado en 1973 e inaugurado en 1980, le dio la composición de hormigón que hoy la identifica.',
          ],
          bullets: [
            'Nombre de la plaza desde 1926.',
            'Concurso de Roca: 1973.',
            'Inauguración del diseño: 1980.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Desde cuándo se llama Plaza España?',
          a: 'La historia municipal registra el nombre desde marzo de 1926.',
        },
        {
          q: '¿Quién diseñó la plaza actual?',
          a: 'Miguel Ángel Roca, que ganó el concurso en 1973 e inauguró el diseño en 1980.',
        },
        {
          q: '¿Nueva Córdoba es el centro?',
          a: 'No; está al sur del centro histórico de Córdoba, entre el centro y la costanera del Suquía.',
        },
        {
          q: '¿La plaza y el MMAU son lo mismo?',
          a: 'No. El MMAU es un museo en el subsuelo; la plaza exterior es el espacio público.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: historia de Plaza España', url: SOURCES.plazaHistoria },
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
      ],
    },
  },

  {
    slug: 'paseo-a-pie-nueva-cordoba',
    group: 'cercanos',
    related: [
      'que-hacer-nueva-cordoba',
      'nueva-cordoba-barrio-cordoba',
      'ruta-museos-nueva-cordoba',
      'que-ver-cerca-plaza-espana-cordoba',
    ],
    content: {
      kicker: 'Paseo a pie',
      title: 'Paseo a pie por Nueva Córdoba desde Plaza España',
      description:
        'Paseo a pie por Nueva Córdoba desde Plaza España: plaza, museos y cafés por la Av. Hipólito Yrigoyen. Tiempos y precauciones en la rotonda.',
      h1: 'Paseo a pie por Nueva Córdoba',
      lead: 'Desde Plaza España podés caminar por Nueva Córdoba: la plaza y el MMAU están en el punto de partida, y los museos Caraffa, Buen Pastor y Ferreyra quedan a 10–25 min por la Av. Hipólito Yrigoyen.',
      updated: '30 de octubre de 2026',
      mapEmbed: PLAZA_EMBED,
      mapDirections: PLAZA_DIRECTIONS,
      sections: [
        {
          heading: 'El recorrido a pie',
          paragraphs: [
            'Empezá en la plaza (MMAU), subí por la Av. Hipólito Yrigoyen hasta Caraffa (~10–15 min), seguí al Buen Pastor (~15–20 min) y cerrá en Ferreyra (~20–25 min).',
          ],
          bullets: [
            'MMAU: en la plaza.',
            'Caraffa: ~10–15 min.',
            'Buen Pastor: ~15–20 min.',
            'Ferreyra: ~20–25 min.',
          ],
        },
        {
          heading: 'Precauciones',
          paragraphs: [
            'Usá cruces peatonales habilitados en la rotonda de la plaza y no cruces por el centro del anillo. No se confirmó una ruta accesible continua; consultá accesibilidad antes de salir.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Se puede recorrer Nueva Córdoba a pie?',
          a: 'Sí. La plaza y los museos del norte quedan a 10–25 min a pie por la Av. Hipólito Yrigoyen.',
        },
        {
          q: '¿Cuánto tardo?',
          a: 'Media jornada si sumás los museos y confirmás sus horarios; los tiempos a pie son de 10–25 min entre puntos.',
        },
        {
          q: '¿Es accesible?',
          a: 'No se confirmó ruta continua sin escalones. Consultá accesibilidad antes de salir.',
        },
        {
          q: '¿Cómo cruzo la rotonda?',
          a: 'Por cruces peatonales habilitados; no cruces los carriles por el centro del anillo.',
        },
      ],
      sources: [
        { name: 'Turismo Córdoba: plaza y entorno cultural', url: SOURCES.plazaYMuseo },
        { name: 'Google Maps: Plaza España, Córdoba', url: 'https://maps.app.goo.gl/X9yWEsdhueB3VuZG8' },
      ],
    },
  },
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function topicSlugs(): string[] {
  return TOPICS.map((t) => t.slug);
}

export function topicsByGroup(): Record<TopicGroup, Topic[]> {
  const out = {} as Record<TopicGroup, Topic[]>;
  (Object.keys(TOPIC_GROUP_LABELS) as TopicGroup[]).forEach((g) => {
    out[g] = TOPICS.filter((t) => t.group === g);
  });
  return out;
}

export function getTopicTitle(slug: string): string {
  const t = getTopic(slug);
  return t ? t.content.h1 : '';
}
