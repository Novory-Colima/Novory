// ============================================================================
// Novory Studio — Utilidad de Formato de Fechas
// ============================================================================
// Función centralizada para formatear fechas en español (es-ES).
// Usada en blog.astro y blog/[...slug].astro
// ============================================================================

/**
 * Formatea un objeto Date a una cadena legible en español.
 * Ejemplo: "25 de julio de 2026"
 */
export const formatDate = (date: Date): string =>
  date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
