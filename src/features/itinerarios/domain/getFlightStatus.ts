// Clasifica horario por franja para leyenda visual
export type Franja = "mañana" | "tarde" | "noche";

export function getFlightStatus(hhmm: string): Franja {
  // Espera "HH:mm" 24h
  const [h, m] = hhmm.split(":").map(Number);
  const mins = h * 60 + m;
  if (mins >= 360 && mins < 720) return "mañana"; // 06:00–11:59
  if (mins >= 720 && mins < 1080) return "tarde"; // 12:00–17:59
  return "noche";                                  // 18:00–05:59
}

// Colores sugeridos (puedes mapearlos a theme.palette si quieres)
export const FRANJA_COLORS: Record<Franja, string> = {
  "mañana": "#2ecc71",
  "tarde": "#3b82f6",
  "noche": "#8b5cf6",
};
