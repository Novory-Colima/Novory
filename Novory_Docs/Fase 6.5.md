# ======================================================================
# FASE 6
#
# ARQUITECTURA TÉCNICA
#
# CAPÍTULO 6.5
#
# RENDIMIENTO Y SEO TÉCNICO
#
# ======================================================================

# Introducción

El rendimiento y el SEO no constituyen una etapa final del desarrollo.

Representan principios arquitectónicos presentes desde el primer componente hasta la publicación del proyecto.

Una página rápida transmite profesionalismo.

Una página bien indexada genera oportunidades.

Una página accesible amplía el alcance del negocio.

En Novory, rendimiento, SEO y experiencia de usuario forman parte de una misma estrategia.

Cada decisión técnica deberá favorecer simultáneamente estos tres pilares.

---

# Filosofía

La mejor optimización es aquella que nunca fue necesaria.

Antes de optimizar deberá evitarse el trabajo innecesario.

Reducir código.

Reducir recursos.

Reducir dependencias.

Reducir peticiones.

La simplicidad constituye la optimización más eficiente.

---

# Objetivos Técnicos

Todo proyecto desarrollado por Novory deberá aspirar a:

• Tiempo de carga inicial mínimo.

• Excelente experiencia de navegación.

• Alta capacidad de indexación.

• Excelente accesibilidad.

• Escalabilidad.

• Excelente puntuación en herramientas de auditoría.

---

# Objetivos Lighthouse

Performance

95+

---

Accessibility

100

---

Best Practices

100

---

SEO

100

---

Estos valores representan objetivos de calidad.

No una garantía absoluta.

---

# Core Web Vitals

Toda decisión técnica deberá favorecer las métricas oficiales.

---

## Largest Contentful Paint (LCP)

Objetivo

Menor a 2.5 segundos.

Para lograrlo:

Optimizar imágenes.

Priorizar contenido visible.

Reducir JavaScript.

Optimizar fuentes.

Minimizar bloqueos de renderizado.

---

## Interaction to Next Paint (INP)

Objetivo

Menor a 200 ms.

Para lograrlo:

Reducir trabajo del hilo principal.

Evitar listeners innecesarios.

Optimizar animaciones.

Reducir tareas largas.

---

## Cumulative Layout Shift (CLS)

Objetivo

Menor a 0.1

Para lograrlo:

Reservar espacio para imágenes.

Definir dimensiones.

Evitar inserciones inesperadas.

Mantener estabilidad visual.

---

# Astro como Base de Rendimiento

Astro constituye la base principal de optimización.

Principios:

Enviar únicamente el JavaScript estrictamente necesario.

Priorizar HTML estático.

Reducir hidratación.

Aprovechar Astro Islands únicamente cuando exista interacción real.

---

# Astro Islands

Cada isla interactiva deberá justificar su existencia.

Preguntas obligatorias:

¿El componente necesita JavaScript?

¿Puede resolverse con HTML y CSS?

¿La interacción aporta valor?

Si la respuesta es negativa.

No utilizar una isla.

---

# Estrategia de Hidratación

Preferencia de directivas:

client:visible

↓

client:idle

↓

client:media

↓

client:load

Evitar utilizar `client:load` como opción por defecto.

---

# Optimización de Imágenes

Toda imagen deberá:

Utilizar formatos modernos.

Preferentemente:

AVIF.

WebP.

Optimizar tamaño.

Incluir dimensiones.

Lazy Loading cuando corresponda.

Texto alternativo descriptivo.

No utilizar imágenes mayores al tamaño real de visualización.

---

# Optimización de Video

Utilizar video únicamente cuando aporte valor.

Preferir:

MP4 optimizado.

WebM cuando sea posible.

Poster antes de reproducir.

Carga diferida.

Evitar autoplay innecesario.

---

# Tipografía

Autoalojar las fuentes.

Reducir variantes.

Utilizar font-display: swap.

Precargar únicamente fuentes críticas.

Evitar cargar familias innecesarias.

---

# JavaScript

Enviar únicamente el código necesario.

Eliminar dependencias no utilizadas.

Reducir bundles.

Evitar librerías para funcionalidades simples.

Cada kilobyte enviado deberá justificar su existencia.

---

# CSS

Eliminar reglas sin uso.

Reducir especificidad.

Evitar duplicación.

Agrupar tokens.

Priorizar estilos críticos.

---

# SEO Técnico

Toda página deberá incluir:

Title único.

Meta Description.

Canonical.

Open Graph.

Twitter Card.

Favicons.

Robots.

Sitemap.

Idioma.

Viewport.

Metadata estructurada.

---

# Schema.org

Implementar datos estructurados cuando corresponda.

Ejemplos

Organization

LocalBusiness

Service

BreadcrumbList

Article

FAQPage

WebSite

ContactPage

Los datos estructurados deberán mantenerse sincronizados con el contenido real.

---

# URLs

Principios

Cortas.

Descriptivas.

Legibles.

Permanentes.

Sin parámetros innecesarios.

Ejemplo

servicios/desarrollo-web

Correcto.

No

page?id=7&type=service

---

# Sitemap

Generación automática.

Actualizar en cada despliegue.

Excluir contenido irrelevante.

---

# Robots

Permitir indexación únicamente del contenido público.

Bloquear recursos internos cuando corresponda.

---

# Enlaces

Todo enlace deberá tener un propósito claro.

Evitar enlaces rotos.

Utilizar textos descriptivos.

No abusar de "Haz clic aquí".

---

# Accesibilidad

Utilizar HTML semántico.

Jerarquía correcta de encabezados.

Alt en imágenes.

Labels en formularios.

Focus visible.

Compatibilidad con teclado.

Contraste adecuado.

Compatibilidad con lectores de pantalla.

---

# Rendimiento del Flow System™

El sistema de movimiento nunca deberá comprometer la experiencia.

Toda animación deberá:

Mantener 60 FPS.

Evitar Layout Thrashing.

Reducir trabajo del CPU.

Desactivarse parcialmente cuando el dispositivo lo requiera.

La experiencia siempre tendrá prioridad sobre el efecto visual.

---

# Carga Diferida

Aplicar Lazy Loading a:

Imágenes.

Videos.

Componentes secundarios.

Contenido fuera del viewport.

Nunca retrasar contenido crítico.

---

# Caché

Configurar correctamente:

Imágenes.

Fuentes.

Archivos estáticos.

Recursos inmutables.

Favorecer el uso de CDN cuando sea posible.

---

# Seguridad SEO

No indexar:

Páginas privadas.

Borradores.

Contenido duplicado.

Rutas temporales.

Utilizar Canonical cuando existan contenidos relacionados.

---

# Analítica

Toda integración deberá ser ligera.

Respetar la privacidad del usuario.

Evitar herramientas que degraden significativamente el rendimiento.

Priorizar métricas útiles sobre cantidad de datos.

---

# Monitoreo

Revisar periódicamente:

Core Web Vitals.

Errores 404.

Enlaces rotos.

Indexación.

Cobertura.

Rendimiento.

Accesibilidad.

El mantenimiento forma parte del desarrollo.

---

# Checklist Antes de Publicar

Performance superior al objetivo establecido.

Accessibility validada.

SEO técnico completo.

Metadata revisada.

Open Graph validado.

Schema.org correcto.

Imágenes optimizadas.

Fuentes optimizadas.

Sin errores de consola.

Sin enlaces rotos.

Sin recursos innecesarios.

Compatibilidad móvil verificada.

Core Web Vitals dentro del objetivo.

---

💎 PRINCIPIOS DE NOVORY

La velocidad transmite profesionalismo.

El mejor JavaScript es el que nunca fue enviado.

La optimización comienza con una buena arquitectura.

Cada recurso debe aportar valor.

La accesibilidad mejora la experiencia de todos.

El SEO técnico facilita que el contenido correcto llegue a las personas correctas.

El rendimiento también forma parte del diseño.

============================================================

ADR-013

Astro será la tecnología principal para minimizar el JavaScript enviado al cliente y priorizar el contenido estático.

---

ADR-014

Toda funcionalidad interactiva deberá justificar la necesidad de hidratación antes de convertirse en una Astro Island.

---

ADR-015

El rendimiento, el SEO y la accesibilidad serán considerados requisitos arquitectónicos desde el inicio del proyecto y no tareas de optimización posteriores.

============================================================

FIN DEL CAPÍTULO 6.5