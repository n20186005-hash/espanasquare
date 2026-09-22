// Servidor: clima en vivo vía Open-Meteo (sin clave). Se cachea en memoria.
// No comentar en el front-end nada sobre la fuente ni la ausencia de clave.

export interface WeatherNow {
  tempC: number;
  feelsC: number;
  humidity: number;
  windKmh: number;
  windLevel: number;
  code: number;
  isDay: boolean;
}

export interface WeatherDay {
  maxC: number;
  minC: number;
  popMax: number;
  uvMax: number;
  windMaxKmh: number;
  windMaxLevel: number;
  code: number;
  sunrise: string;
  sunset: string;
}

export interface WeatherDaily {
  date: string;
  code: number;
  maxC: number;
  minC: number;
  pop: number;
}

export interface WeatherData {
  now: WeatherNow;
  day: WeatherDay;
  daily: WeatherDaily[];
  alerts: string[];
  fetchedAt: string;
}

export interface WeatherItem {
  emoji: string;
  label: string;
}

export interface WeatherAdvice {
  outfit: string[];
  activity: string[];
  items: WeatherItem[];
  alerts: string[];
}

const LAT = -31.435;
const LON = -64.187;

// Córdoba (inglés neutral para evitar cruces de locale en el servidor).
const URL =
  'https://api.open-meteo.com/v1/forecast' +
  `?latitude=${LAT}&longitude=${LON}` +
  '&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max,sunrise,sunset' +
  '&timezone=America%2FArgentina%2FBuenos_Aires&forecast_days=7';

interface OMCurrent {
  temperature_2m: number;
  apparent_temperature: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  weather_code: number;
  is_day: number;
}
interface OMDaily {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_probability_max: number[];
  wind_speed_10m_max: number[];
  uv_index_max: number[];
  sunrise: string[];
  sunset: string[];
}
interface OMResponse {
  current: OMCurrent;
  daily: OMDaily;
}

export function describeCode(code: number): { label: string; icon: string } {
  const map: Record<number, { label: string; icon: string }> = {
    0: { label: 'Despejado', icon: '☀️' },
    1: { label: 'Mayormente despejado', icon: '🌤️' },
    2: { label: 'Parcialmente nublado', icon: '⛅' },
    3: { label: 'Nublado', icon: '☁️' },
    45: { label: 'Niebla', icon: '🌫️' },
    48: { label: 'Niebla con escarcha', icon: '🌫️' },
    51: { label: 'Llovizna leve', icon: '🌦️' },
    53: { label: 'Llovizna', icon: '🌦️' },
    55: { label: 'Llovizna intensa', icon: '🌧️' },
    56: { label: 'Llovizna helada', icon: '🌧️' },
    57: { label: 'Llovizna helada intensa', icon: '🌧️' },
    61: { label: 'Lluvia leve', icon: '🌦️' },
    63: { label: 'Lluvia', icon: '🌧️' },
    65: { label: 'Lluvia intensa', icon: '🌧️' },
    66: { label: 'Lluvia helada', icon: '🌧️' },
    67: { label: 'Lluvia helada intensa', icon: '🌧️' },
    71: { label: 'Nieve leve', icon: '🌨️' },
    73: { label: 'Nieve', icon: '🌨️' },
    75: { label: 'Nieve intensa', icon: '❄️' },
    77: { label: 'Granizo menudo', icon: '🌨️' },
    80: { label: 'Chaparrones', icon: '🌧️' },
    81: { label: 'Chaparrones', icon: '🌧️' },
    82: { label: 'Chaparrones intensos', icon: '⛈️' },
    85: { label: 'Nieve mezclada', icon: '🌨️' },
    86: { label: 'Nieve mezclada intensa', icon: '🌨️' },
    95: { label: 'Tormenta', icon: '⛈️' },
    96: { label: 'Tormenta con granizo', icon: '⛈️' },
    99: { label: 'Tormenta intensa con granizo', icon: '⛈️' },
  };
  return map[code] ?? { label: 'Condición variable', icon: '🌡️' };
}

// Escala de Beaufort a partir de km/h.
export function windLevel(kmh: number): number {
  const t = [1, 5, 11, 19, 28, 38, 49, 61, 74, 88, 102, 117];
  let level = 0;
  for (let i = 0; i < t.length; i++) {
    if (kmh > t[i]) level = i + 1;
  }
  return level;
}

export function uvLabel(uv: number): string {
  if (uv >= 8) return 'muy alta';
  if (uv >= 5) return 'alta';
  if (uv >= 3) return 'moderada';
  return 'baja';
}

export function windTextEs(level: number): string {
  if (level <= 1) return 'viento en calma';
  if (level <= 3) return 'brisa';
  if (level <= 5) return 'viento leve';
  if (level <= 6) return 'viento moderado';
  if (level <= 7) return 'viento fuerte';
  return 'viento muy fuerte';
}

const isRain = (c: number) => (c >= 51 && c <= 67) || (c >= 80 && c <= 82);
const isStorm = (c: number) => c >= 95;
const isDrizzle = (c: number) => (c >= 51 && c <= 57) || (c >= 61 && c <= 63);
const isHeavy = (c: number) => (c >= 65 && c <= 67) || (c >= 80 && c <= 82);
const isClear = (c: number) => c === 0 || c === 1;
const isOvercast = (c: number) => c === 3;
const isFog = (c: number) => c === 45 || c === 48;

// Motor de recomendaciones: convierte datos en consejos accionables para el visitante.
// Plaza España es un entorno urbano (sin mar ni montaña); se priorizan caminatas,
// museos cubiertos (MMAU, Caraffa, Ferreyra) y el Parque Sarmiento cercano.
export function computeAdvice(d: WeatherData): WeatherAdvice {
  const outfit: string[] = [];
  const activity: string[] = [];
  const items: WeatherItem[] = [];
  const alerts: string[] = [];

  const nowCode = d.now.code;
  const dayCode = d.day.code;
  const max = d.day.maxC;
  const min = d.day.minC;
  const pop = d.day.popMax;
  const uv = d.day.uvMax;
  const windMax = d.day.windMaxLevel;

  // --- Precipitación ---
  if (pop >= 60 || isRain(nowCode)) {
    if (isStorm(nowCode)) {
      alerts.push('Tormenta eléctrica: cuidado con los rayos; no te refugies bajo árboles ni en zonas descubiertas.');
      activity.push('Los paseos acuáticos y al aire libre probablemente estén cerrados; preferí espacios cubiertos.');
    } else if (isHeavy(nowCode)) {
      alerts.push('Lluvia intensa: evitá zonas bajas y encharcadas.');
      activity.push('No conviene estar mucho rato afuera; los paseos acuáticos pueden suspenderse. Priorizá museos y salas cubiertas (MMAU, Museo Caraffa).');
      items.push({ emoji: '🧥', label: 'Impermeable (mejor sin paraguas de mango largo si hay viento)' });
    } else if (isDrizzle(nowCode)) {
      activity.push('Llovizna: el piso resbala, caminá con cuidado; las actividades al aire libre se disfrutan menos.');
      items.push({ emoji: '☂️', label: 'Paraguas plegable' });
    } else {
      outfit.push(`Probabilidad de lluvia alta (≈${pop}%). Llevá paraguas o impermeable por las dudas.`);
      activity.push('Dejá flexible el plan al aire libre y priorizá espacios cubiertos (MMAU, Museo Caraffa).');
      items.push({ emoji: '🌂', label: 'Paraguas / impermeable' });
    }
  }

  // --- Calor y ultravioleta ---
  if (max >= 32) {
    outfit.push('Hace calor: evitá salir a la hora pico del mediodía.');
    activity.push('Acortá el tiempo seguido al aire libre y entrá a descansar a sitios cubiertos.');
    items.push({ emoji: '🥤', label: 'Agua suficiente' });
    items.push({ emoji: '🧴', label: 'Protector solar' });
  }
  if (uv >= 5) {
    outfit.push('Radiación UV alta: cuidate del sol.');
    items.push({ emoji: '🕶️', label: 'Anteojos de sol y gorra' });
  }

  // --- Frío y amplitud térmica ---
  if (max - min > 8) {
    outfit.push('Amplitud térmica marcada entre el día y la noche: llevá una chaqueta ligera para abrigarte.');
  }
  if (max <= 10) {
    outfit.push('Temperatura baja: abrigate bien.');
    items.push({ emoji: '🧣', label: 'Abrigo y bufanda' });
  }

  // --- Viento ---
  if (windMax >= 7) {
    alerts.push('Viento fuerte: alejate de carteles y estructuras que puedan caer.');
    activity.push('Las actividades al aire libre expuestas probablemente se vean afectadas.');
  } else if (windMax >= 5) {
    outfit.push('Viento notable: la sensación térmica se siente más fresca.');
    activity.push('Algunas actividades al aire libre pueden ajustarse.');
    items.push({ emoji: '🧢', label: 'Asegurate el gorro o la gorra' });
  }

  // --- Cielo (se usa el código del día) ---
  if (isClear(dayCode)) {
    outfit.push('Buen clima despejado: ideal para recorrer y fotografiar al aire libre.');
    activity.push('Luz nítida: buen momento para fotos de arquitectura y del amanecer/atardecer.');
    items.push({ emoji: '🌞', label: 'Protección solar' });
  }
  if (isOvercast(dayCode)) {
    outfit.push('Cielo cubierto y luz suave: muy cómodo para caminar mucho rato.');
    activity.push('Sin sol fuerte, recorrer barrios y el Parque Sarmiento es más agradable.');
  }
  if (isFog(dayCode)) {
    alerts.push('Niebla: visibilidad reducida, la vista lejana y los miradores se aprecian menos.');
    items.push({ emoji: '😷', label: 'Barbijo' });
  }

  // --- Ciudad: sensación térmica (isla de calor) ---
  if (d.now.feelsC >= 33) {
    outfit.push('Sensación térmica bochornosa: hidratate y evitá el exceso de sol.');
  }

  return {
    outfit: [...new Set(outfit)],
    activity: [...new Set(activity)],
    items: dedupeItems(items),
    alerts: [...new Set(alerts)],
  };
}

function dedupeItems(items: WeatherItem[]): WeatherItem[] {
  const seen = new Set<string>();
  const out: WeatherItem[] = [];
  for (const it of items) {
    if (!seen.has(it.label)) {
      seen.add(it.label);
      out.push(it);
    }
  }
  return out;
}

let cache: { data: WeatherData; ts: number } | null = null;
const TTL = 10 * 60 * 1000;

export async function getWeather(): Promise<WeatherData | null> {
  const now = Date.now();
  if (cache && now - cache.ts < TTL) return cache.data;
  try {
    const res = await fetch(URL, { signal: AbortSignal.timeout(4000) });
    if (!res.ok) throw new Error('bad status ' + res.status);
    const json = (await res.json()) as OMResponse;
    const c = json.current;
    const dd = json.daily;

    const data: WeatherData = {
      now: {
        tempC: c.temperature_2m,
        feelsC: c.apparent_temperature,
        humidity: c.relative_humidity_2m,
        windKmh: c.wind_speed_10m,
        windLevel: windLevel(c.wind_speed_10m),
        code: c.weather_code,
        isDay: c.is_day === 1,
      },
      day: {
        maxC: dd.temperature_2m_max[0],
        minC: dd.temperature_2m_min[0],
        popMax: dd.precipitation_probability_max[0],
        uvMax: dd.uv_index_max[0],
        windMaxKmh: dd.wind_speed_10m_max[0],
        windMaxLevel: windLevel(dd.wind_speed_10m_max[0]),
        code: dd.weather_code[0],
        sunrise: dd.sunrise[0],
        sunset: dd.sunset[0],
      },
      daily: dd.time.slice(0, 7).map((date, i) => ({
        date,
        code: dd.weather_code[i],
        maxC: dd.temperature_2m_max[i],
        minC: dd.temperature_2m_min[i],
        pop: dd.precipitation_probability_max[i],
      })),
      alerts: [],
      fetchedAt: new Date().toISOString(),
    };

    cache = { data, ts: now };
    return data;
  } catch {
    return cache ? cache.data : null;
  }
}
