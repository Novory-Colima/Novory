# Auditoría Técnica — Novory Studio
### 25 de julio de 2026 · Revisión exhaustiva de proyecto

---

## Resumen Ejecutivo

El proyecto Novory es un sitio web corporativo para una agencia de automatizaciones con IA y desarrollo web, construido con **Astro 5, Tailwind CSS 4 y GSAP**. Está desplegado en Netlify (con un workflow adicional de GitHub Pages).

**Fortalezas claras:**
- Arquitectura Astro bien utilizada: cero JS de frameworks, islas con Custom Elements nativos, limpieza excelente en `disconnectedCallback`.
- Design system con tokens de color, tipografía y spacing bien definidos en `globals.css`.
- Patrón Atomic Design aplicado correctamente (atoms → molecules → sections).
- Animaciones con GSAP integradas al lifecycle de los componentes y con respeto a `prefers-reduced-motion`.
- Contenido de marketing bien redactado y enfocado en conversión.

**Debilidades críticas:**
- Archivos fundamentales de producción ausentes: no hay `robots.txt`, `sitemap.xml`, `manifest.json`, ni página 404.
- Emails inconsistentes entre componentes (`hola@novory.com` vs. `novory.col@gmail.com`).
- Clases `prose` de Tailwind Typography se usan sin que el plugin esté instalado.
- Las navegaciones del Footer generan enlaces rotos a anchors cuando se visitan desde páginas internas.
- `color-scheme: dark` hardcodeado en `:root` entra en conflicto con el modo claro.
- Imágenes de demo de alto peso (~2.4 MB la mayor) sin `sizes` optimizados para mobile.

**Veredicto:** El proyecto tiene una base técnica sólida y una calidad visual por encima del promedio, pero **NO está listo para producción**. Los hallazgos críticos requieren corrección antes de cualquier lanzamiento.

---

## Auditoría Completa

---

### 1. Arquitectura

#### 🟢 Bien resuelto

- Patrón **Atomic Design** correctamente aplicado: `atoms/`, `molecules/`, `sections/`, `layout/`, `navigation/`, `ui/`.
- Cada sección es un **Custom Element** (`<hero-section>`, `<faq-section>`, etc.) con `connectedCallback` / `disconnectedCallback` — patrón idiomático para Astro con View Transitions.
- Utilidades centralizadas en `utils/whatsapp.ts` y `utils/navigation.ts`.
- Content Collections con schemas Zod para `blog` y `case-studies`.
- Un único layout `BaseLayout.astro` con props tipadas.

#### Hallazgos

---

**🟡 H-01 · Componente `Badge.astro` no se usa en ningún archivo**

- **Problema:** `Badge.astro` existe en `atoms/` pero no se importa ni utiliza en ningún otro componente o página.
- **Por qué importa:** Código muerto incrementa la superficie cognitiva y el bundle mental del proyecto.
- **Impacto:** Bajo — no afecta el build, pero ensucia la arquitectura.
- **Archivo(s):** [Badge.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/atoms/Badge.astro)
- **Prioridad:** 🟡 Recomendado
- **Solución:** Eliminar `Badge.astro` o utilizarlo donde sea pertinente (por ejemplo, en tags del blog).
- **Criterio de aceptación:** El archivo no existe o se usa en al menos un componente.

---

**🟡 H-02 · Colección `case-studies` definida pero no consumida**

- **Problema:** Existe `src/content/case-studies/dentalcare.md` y su schema en `config.ts`, pero ninguna página genera rutas para case studies ni los renderiza.
- **Por qué importa:** Content Collections sin consumo son artefactos huérfanos; además, el caso de uso ("DentalCare Pro") parece ficticio y podría confundir si alguien encuentra la URL.
- **Impacto:** Medio — no genera rutas porque no hay `getStaticPaths()`, pero el contenido queda en el repositorio sin propósito visible.
- **Archivo(s):** [config.ts](file:///c:/Users/danar/Downloads/Novory-1/src/content/config.ts), [dentalcare.md](file:///c:/Users/danar/Downloads/Novory-1/src/content/case-studies/dentalcare.md)
- **Prioridad:** 🟡 Recomendado
- **Solución:** Eliminar la colección y el archivo, o crear la página `/casos-de-exito/[...slug].astro` que los renderice.
- **Criterio de aceptación:** La colección se usa en producción o se elimina del repositorio.

---

**🟡 H-03 · Función `formatDate` duplicada**

- **Problema:** La misma función `formatDate` aparece definida en [blog.astro](file:///c:/Users/danar/Downloads/Novory-1/src/pages/blog.astro#L13-L18) y en [[...slug].astro](file:///c:/Users/danar/Downloads/Novory-1/src/pages/blog/%5B...slug%5D.astro#L19-L23).
- **Por qué importa:** Lógica duplicada; si se cambia el formato de fecha, hay que recordar hacerlo en dos archivos.
- **Impacto:** Bajo.
- **Archivo(s):** `src/pages/blog.astro`, `src/pages/blog/[...slug].astro`
- **Prioridad:** 🟡 Recomendado
- **Solución:** Extraer a `src/utils/date.ts` y reutilizar.
- **Criterio de aceptación:** Una sola definición de `formatDate` en todo el proyecto.

---

### 2. Código

#### Hallazgos

---

**🔴 H-04 · Emails inconsistentes: `hola@novory.com` vs `novory.col@gmail.com`**

- **Problema:** En [ContactSection.astro L53](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/ContactSection.astro#L53) el enlace `mailto:` apunta a `hola@novory.com`. En la tarjeta de contacto visual (L60) y en el Footer (L7), el email mostrado es `novory.col@gmail.com`.
- **Por qué importa:** Un usuario que hace click en el email y luego ve un Gmail diferente pierde confianza. Es un error de credibilidad para una agencia premium.
- **Impacto:** Alto — confusión directa del usuario; potencial pérdida de correos si `hola@novory.com` no está configurado.
- **Archivo(s):** [ContactSection.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/ContactSection.astro#L53), [Footer.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/navigation/Footer.astro#L7)
- **Prioridad:** 🔴 Crítico
- **Solución:** Unificar a un solo email en todo el proyecto. Idealmente centralizar el valor en un archivo de constantes (por ejemplo `utils/contact.ts`).
- **Criterio de aceptación:** Un solo email consistente en todo el sitio; el dominio `mailto:` es el mismo que el texto visible.

---

**🔴 H-05 · `color-scheme: dark` hardcodeado en `:root` conflicta con modo claro**

- **Problema:** En [globals.css L112](file:///c:/Users/danar/Downloads/Novory-1/src/styles/globals.css#L112), se establece `color-scheme: dark` en `:root`. Esto afecta los controles nativos del navegador (scrollbars, inputs, selects) forzándolos a estilo oscuro **incluso en modo claro**.
- **Por qué importa:** En modo claro, el usuario verá scrollbars oscuras, placeholders con tema dark y otros controles del browser que rompen la coherencia visual.
- **Impacto:** Alto — afecta toda la experiencia en modo claro.
- **Archivo(s):** [globals.css](file:///c:/Users/danar/Downloads/Novory-1/src/styles/globals.css#L112)
- **Prioridad:** 🔴 Crítico
- **Solución:** Cambiar a `color-scheme: light dark;` en `:root` y usar `.dark { color-scheme: dark; }` con la clase de Tailwind.
- **Criterio de aceptación:** Los controles nativos reflejan el tema activo del usuario.

---

**🟠 H-06 · Los estilos base de `body` en `globals.css` usan tokens del modo oscuro, sobrescritos por Tailwind en `BaseLayout`**

- **Problema:** [globals.css L121-129](file:///c:/Users/danar/Downloads/Novory-1/src/styles/globals.css#L121-L129) establece `background-color: var(--color-bg-primary)` y `color: var(--color-text-primary)` (ambos son tokens dark: `#050816` y `#FFFFFF`). Pero en [BaseLayout.astro L105](file:///c:/Users/danar/Downloads/Novory-1/src/layouts/BaseLayout.astro#L105), el `<body>` tiene clases Tailwind `bg-light-base dark:bg-dark-base text-text-dark dark:text-text-light` que sobrescriben estos valores.
- **Por qué importa:** Hay dos capas de estilado compitiendo. En un flash de contenido (FOUC) o si Tailwind tarda en procesarse, el usuario verá el fondo dark por defecto.
- **Impacto:** Medio — causa un FOUC potencial en modo claro.
- **Archivo(s):** [globals.css](file:///c:/Users/danar/Downloads/Novory-1/src/styles/globals.css#L121-L129), [BaseLayout.astro](file:///c:/Users/danar/Downloads/Novory-1/src/layouts/BaseLayout.astro#L105)
- **Prioridad:** 🟠 Importante
- **Solución:** Alinear los estilos base de `body` con el diseño de doble tema, o eliminar las reglas duplicadas de `globals.css` y dejar que Tailwind gobierne.
- **Criterio de aceptación:** No hay estilos conflictivos en body; cero FOUC.

---

**🟠 H-07 · Tokens de diseño duplicados / no usados en `globals.css`**

- **Problema:** Hay dos juegos de tokens: uno superior (`--color-bg-primary`, `--color-accent`, `--color-text-primary`, etc.) orientado al modo oscuro original del "Fase 4.1", y otro inferior (`--color-brand-*`, `--color-dark-*`, `--color-light-*`, `--color-text-dark*`, etc.) que es el sistema dual activo. Los tokens superiores (`--color-bg-primary`, `--color-bg-secondary`, `--color-accent-glow`, `--color-text-muted`, `--color-border-alpha`, `--color-glass-alpha`) se usan solo en `globals.css` pero no en los componentes Astro, donde todo referencia `brand-blue`, `dark-base`, etc.
- **Por qué importa:** Confusión para futuros desarrolladores. Es un vestigio de una iteración anterior que no se limpió.
- **Impacto:** Medio — no causa bugs, pero incrementa la deuda técnica.
- **Archivo(s):** [globals.css](file:///c:/Users/danar/Downloads/Novory-1/src/styles/globals.css#L14-L24)
- **Prioridad:** 🟠 Importante
- **Solución:** Auditar qué tokens del bloque "Fase 4.1" siguen en uso y eliminar los que no se referencien en ningún componente.
- **Criterio de aceptación:** Cada variable CSS en `@theme` se usa en al menos un componente o regla.

---

**🟠 H-08 · Links del Footer generan rutas rotas desde páginas internas**

- **Problema:** En [Footer.astro L16-26](file:///c:/Users/danar/Downloads/Novory-1/src/components/navigation/Footer.astro#L16-L26), los links como `withBase('#nosotros')`, `withBase('#contacto')`, `withBase('#servicios')` generan `/#nosotros`, `/#contacto`, etc. Cuando el usuario está en `/blog` o `/servicios`, estos links apuntan a `/#nosotros` — lo cual navega al index. Pero **el Navbar** distingue `isHome` y usa `#` directo solo si estamos en home. El Footer no hace esta distinción.
- **Por qué importa:** Desde `/blog`, clicar "Nosotros" en el Footer navega a `/#nosotros` (correcto), pero los links de "Servicios" (`/#servicios`) no llevan a una página `/servicios`, sino al anchor en index. Esto es funcionalmente correcto pero **inconsistente con la existencia de una página `/servicios`**. Peor, si el usuario espera navegar a la página independiente `/servicios`, nunca lo hará desde el Footer.
- **Impacto:** Medio — confusión UX suave.
- **Archivo(s):** [Footer.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/navigation/Footer.astro#L11-L28)
- **Prioridad:** 🟠 Importante
- **Solución:** Los links de navegación del Footer deberían apuntar a las páginas dedicadas (`/nosotros`, `/servicios`, `/contacto`) cuando estas existen, y no a anchors del index.
- **Criterio de aceptación:** Cada link del Footer lleva a una URL que siempre funciona independientemente de la página actual.

---

**🟡 H-09 · `gsap.registerPlugin(ScrollTrigger)` ejecutado en múltiples archivos**

- **Problema:** `gsap.registerPlugin(ScrollTrigger)` se llama en [BaseLayout.astro](file:///c:/Users/danar/Downloads/Novory-1/src/layouts/BaseLayout.astro#L122), [blog.astro](file:///c:/Users/danar/Downloads/Novory-1/src/pages/blog.astro#L109), [ServicesSection.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/ServicesSection.astro#L178), [ProcessSection.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/ProcessSection.astro#L93), [BenefitsSection.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/BenefitsSection.astro#L85), [AboutSection.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/AboutSection.astro#L150), [ContactSection.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/ContactSection.astro#L144).
- **Por qué importa:** Aunque `registerPlugin` es idempotente, ejecutarlo 7+ veces es código redundante y demuestra falta de centralización.
- **Impacto:** Bajo — no causa bugs.
- **Archivo(s):** Los 7 archivos listados.
- **Prioridad:** 🟡 Recomendado
- **Solución:** Centralizar el registro en `BaseLayout.astro` (que ya lo hace) y eliminar las llamadas duplicadas en cada sección.
- **Criterio de aceptación:** `gsap.registerPlugin(ScrollTrigger)` aparece una sola vez.

---

### 3. Astro

#### 🟢 Bien resuelto

- Uso correcto de `ClientRouter` (View Transitions) con manejo de `astro:page-load` y `astro:before-swap`.
- Lenis smooth scroll y ScrollTrigger correctamente integrados con cleanup en `astro:before-swap`.
- Custom Elements con `if (!customElements.get('...'))` para evitar re-definiciones.
- Content Collections con `getStaticPaths()` y `render()` correctamente usados.
- `is:inline` aplicado al script de tema para evitar el bundling y ejecutar antes del primer paint.
- Imágenes de demos importadas con `astro:assets` y optimizadas con `<Image>`.

#### Hallazgos

---

**🟡 H-10 · Sección Demos usa `<section>` directamente en vez del componente `<Section>`**

- **Problema:** [DemosSection.astro L60](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/DemosSection.astro#L60) usa `<section>` nativo (aunque importa `Section`, la versión desktop no la usa para el layout principal, solo la usa para el header de móvil).
- **Por qué importa:** Rompe la consistencia del patrón; el padding y container-novory de `Section` no se aplican al layout desktop.
- **Impacto:** Bajo — está hecho intencionalmente para el layout de pantalla completa, pero merece un comentario.
- **Archivo(s):** [DemosSection.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/DemosSection.astro#L60)
- **Prioridad:** 🟡 Recomendado
- **Solución:** Usar `<Section container={false}>` en lugar de `<section>` directamente para mantener los estilos base del componente.
- **Criterio de aceptación:** Todas las secciones usan el componente `Section.astro`.

---

### 4. Rendimiento

#### Hallazgos

---

**🔴 H-11 · Plugin `@tailwindcss/typography` (`prose`) no instalado**

- **Problema:** [blog/[...slug].astro L52-58](file:///c:/Users/danar/Downloads/Novory-1/src/pages/blog/%5B...slug%5D.astro#L52-L58) utiliza extensivamente clases `prose`, `prose-headings:`, `prose-p:`, `prose-li:`, `prose-blockquote:`, `prose-a:` que requieren `@tailwindcss/typography`. Este paquete **no está en `package.json`**.
- **Por qué importa:** **Todo el contenido de los posts del blog se renderiza sin estilos de prosa.** Los headings, párrafos, listas, blockquotes y links del markdown se muestran con estilos genéricos, destruyendo la legibilidad.
- **Impacto:** Crítico — las páginas de blog son ilegibles o severamente degradadas visualmente.
- **Archivo(s):** [package.json](file:///c:/Users/danar/Downloads/Novory-1/package.json), [blog/[...slug].astro](file:///c:/Users/danar/Downloads/Novory-1/src/pages/blog/%5B...slug%5D.astro#L52-L58)
- **Prioridad:** 🔴 Crítico
- **Solución:** Instalar `@tailwindcss/typography` y configurarlo en Tailwind v4.
- **Criterio de aceptación:** Las clases `prose` generan los estilos tipográficos esperados en los posts del blog.

---

**🟠 H-12 · Imágenes de demos excesivamente pesadas**

- **Problema:** Las imágenes en `src/assets/demos/` tienen tamaños muy elevados:
  - `wyw-1.webp`: **2.4 MB**
  - `wyw-3.webp`: **1.9 MB**
  - `wyw-2.webp`: **1.3 MB**
  - `nebula-1.webp`: **936 KB**
  - `mapache-3.webp`: **938 KB**
- **Por qué importa:** El primer demo (Mapache) carga con `loading="eager"`, y los slideshows involucran 3 imágenes por demo. Esto puede resultar en más de **5 MB** de imágenes solo en la sección Demos.
- **Impacto:** Alto — afecta LCP, TTI y data de red especialmente en móviles.
- **Archivo(s):** `src/assets/demos/wyw-*.webp`, `src/assets/demos/nebula-*.webp`, `src/assets/demos/mapache-*.webp`
- **Prioridad:** 🟠 Importante
- **Solución:** Redimensionar y comprimir: las imágenes de desktop no necesitan más de 1600px de ancho ni superar 200-400 KB. Agregar el atributo `sizes` al componente `<Image>` para que Astro genere variantes responsive.
- **Criterio de aceptación:** Ninguna imagen individual supera 500 KB; el atributo `sizes` está presente.

---

**🟡 H-13 · El overlay de ruido (`bg-noise`) con `z-50` cubre toda la UI**

- **Problema:** [BaseLayout.astro L108](file:///c:/Users/danar/Downloads/Novory-1/src/layouts/BaseLayout.astro#L108) aplica un `<div>` fijo con `z-50` y `pointer-events-none` sobre toda la pantalla. El `z-50` es más alto que el navbar (`z-40`).
- **Por qué importa:** Aunque tiene `pointer-events-none`, el elemento con `mix-blend-overlay` a `z-50` se renderiza por encima de todo, incluyendo tooltips del footer y modales potenciales. En ciertos navegadores o dispositivos puede causar problemas de composición GPU.
- **Impacto:** Bajo-medio.
- **Archivo(s):** [BaseLayout.astro](file:///c:/Users/danar/Downloads/Novory-1/src/layouts/BaseLayout.astro#L108)
- **Prioridad:** 🟡 Recomendado
- **Solución:** Reducir a `z-30` o `z-10` para que quede por debajo del navbar y modales.
- **Criterio de aceptación:** El ruido no obstruye visualmente tooltips ni menús overlay.

---

**🟡 H-14 · Animaciones flotantes del HeroVisual no respetan `prefers-reduced-motion`**

- **Problema:** [HeroVisual.astro L118-145](file:///c:/Users/danar/Downloads/Novory-1/src/components/ui/HeroVisual.astro#L118-L145) define animaciones `float`, `float-delayed` y `pulse-slow` sin un bloque `@media (prefers-reduced-motion: reduce)`.
- **Por qué importa:** Usuarios con sensibilidad al movimiento verán animaciones continuas que pueden causar malestar.
- **Impacto:** Medio — afecta accesibilidad.
- **Archivo(s):** [HeroVisual.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/ui/HeroVisual.astro#L118-L145)
- **Prioridad:** 🟡 Recomendado (accesibilidad)
- **Solución:** Agregar `@media (prefers-reduced-motion: reduce)` que detenga las tres animaciones.
- **Criterio de aceptación:** Todas las animaciones CSS del proyecto se detienen con `prefers-reduced-motion: reduce`.

---

### 5. Responsive

#### 🟢 Bien resuelto

- El grid de servicios, beneficios, business y problemas usa `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` correctamente.
- DemosSection tiene dos layouts completamente separados: desktop (grid 2-col) y mobile (cards stack).
- El container `container-novory` tiene padding responsive progresivo.
- El menú mobile es un panel full-screen con transición `translate-x`.

#### Hallazgos

---

**🟡 H-15 · Timeline del proceso puede desbordarse en pantallas muy pequeñas (<375px)**

- **Problema:** [ProcessSection.astro L56-84](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/ProcessSection.astro#L56-L84) tiene un `padding-left: 6` (24px) en el contenedor, y el icono está posicionado con `left-10` (40px). En pantallas menores a 375px el texto con `pl-16` (64px) puede tener muy poco espacio horizontal.
- **Impacto:** Bajo — afecta dispositivos raros, pero un usuario de iPhone SE lo notaría.
- **Archivo(s):** [ProcessSection.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/ProcessSection.astro)
- **Prioridad:** 🟡 Recomendado
- **Solución:** Verificar y ajustar los paddings para viewport < 375px.
- **Criterio de aceptación:** El texto no se corta ni se desborda en 320px de ancho.

---

### 6. Accesibilidad

#### Hallazgos

---

**🟠 H-16 · FAQ: botones sin `aria-controls` y contenido sin `role` ni `id`**

- **Problema:** [FAQSection.astro L72](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/FAQSection.astro#L72) tiene `<button aria-expanded="false">` pero no tiene `aria-controls` apuntando al `id` del panel de contenido. Los paneles `.faq-content` no tienen `id` ni `role="region"`.
- **Por qué importa:** Los lectores de pantalla no pueden asociar programáticamente el botón con el contenido que controla. Es un patrón WAI-ARIA de accordion incompleto.
- **Impacto:** Medio — funcional pero no semántico para tecnologías asistivas.
- **Archivo(s):** [FAQSection.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/FAQSection.astro#L70-L87)
- **Prioridad:** 🟠 Importante
- **Solución:** Agregar `id` únicos a cada panel, `aria-controls` en cada botón, y `role="region"` con `aria-labelledby` en cada panel.
- **Criterio de aceptación:** El accordion cumple con el patrón WAI-ARIA Accordion.

---

**🟠 H-17 · Tabs de Demos: sin soporte de teclado (flechas)**

- **Problema:** [DemosSection.astro L78-94](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/DemosSection.astro#L78-L94) implementa `role="tablist"` y `role="tab"` con `aria-selected` y `tabindex`, pero el script JS solo maneja `mouseenter` y `focus`. No hay un handler de `keydown` que permita navegar entre tabs con flechas (←/→) como exige el patrón WAI-ARIA Tabs.
- **Por qué importa:** Usuarios de teclado no pueden cambiar entre tabs con las teclas de flechas. Solo Tab funciona, pero eso rompe el patrón ARIA esperado.
- **Impacto:** Medio.
- **Archivo(s):** [DemosSection.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/DemosSection.astro#L342-L425)
- **Prioridad:** 🟠 Importante
- **Solución:** Implementar `keydown` handler para `ArrowLeft`, `ArrowRight`, `Home`, `End` que mueva el foco entre tabs.
- **Criterio de aceptación:** Las flechas del teclado navegan correctamente entre tabs de demos.

---

**🟡 H-18 · `<main>` sin landmark accessible name; múltiples `<h1>` en index**

- **Problema:** En [index.astro](file:///c:/Users/danar/Downloads/Novory-1/src/pages/index.astro), las secciones HeroSection, BusinessSection, ProblemsSection, etc. contienen cada una un `<h2>`, lo cual es correcto. Pero el HeroSection contiene un `<h1>` con un `<span class="sr-only">` repetitivo y un `<h1>` visible, lo cual es correcto técnicamente, pero hay que verificar que es el único `<h1>` de la página. También, en la página del blog, el heading es `<h1>`, lo cual es correcto para esa página.
- **Impacto:** Bajo.
- **Archivo(s):** [HeroSection.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/HeroSection.astro#L29-L36)
- **Prioridad:** 🟡 Recomendado
- **Solución:** Verificar que cada página tiene exactamente un `<h1>`.
- **Criterio de aceptación:** Cada ruta tiene un único `<h1>`.

---

**🟡 H-19 · Formulario de contacto: labels no están visualmente asociados a inputs**

- **Problema:** Los `<label>` y `<input>` están correctamente vinculados por `for`/`id`, pero visualmente están separados sin espacio (gap) definido en el contenedor padre directo. Las labels tienen `ml-1` que las desalinea respecto al input.
- **Impacto:** Bajo — funcional, pero la UX es mejorable.
- **Archivo(s):** [ContactSection.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/ContactSection.astro#L85-L124)
- **Prioridad:** 🟡 Recomendado
- **Solución:** Envolver cada par label+input en un `<div class="flex flex-col gap-2">`.
- **Criterio de aceptación:** Cada label tiene un gap visual claro con su input.

---

### 7. SEO

#### 🟢 Bien resuelto

- `<title>` dinámico con sufijo `| Novory`.
- `<meta description>` configurada.
- Open Graph y Twitter Cards presentes.
- `<link rel="canonical">` como prop.
- Schema.org FAQPage implementada con JSON-LD.
- Atributo `lang="es"` en `<html>`.
- Propiedad `site` en `astro.config.mjs`.

#### Hallazgos

---

**🔴 H-20 · No existe `robots.txt`**

- **Problema:** No hay `public/robots.txt`. Los motores de búsqueda no recibirán instrucciones sobre rastreo ni la URL del sitemap.
- **Impacto:** Alto — rastreo desordenado; sin referencia al sitemap.
- **Archivo(s):** (Ausente en `public/`)
- **Prioridad:** 🔴 Crítico
- **Solución:** Crear `public/robots.txt` con reglas de User-agent y referencia al sitemap.
- **Criterio de aceptación:** `robots.txt` accesible en `/robots.txt` con reglas válidas.

---

**🔴 H-21 · No existe `sitemap.xml`**

- **Problema:** No se genera sitemap. No hay `@astrojs/sitemap` en las dependencias ni en la configuración de Astro.
- **Impacto:** Alto — los motores de búsqueda no descubren automáticamente las URLs del sitio.
- **Archivo(s):** [astro.config.mjs](file:///c:/Users/danar/Downloads/Novory-1/astro.config.mjs), [package.json](file:///c:/Users/danar/Downloads/Novory-1/package.json)
- **Prioridad:** 🔴 Crítico
- **Solución:** Instalar `@astrojs/sitemap` y agregarlo como integration en `astro.config.mjs`.
- **Criterio de aceptación:** Se genera `sitemap-index.xml` con todas las URLs al hacer build.

---

**🟠 H-22 · No hay Schema.org LocalBusiness ni Organization**

- **Problema:** Solo existe Schema FAQPage. Falta el marcado `LocalBusiness` u `Organization` que identifique a Novory como entidad ante Google (nombre, dirección, teléfono, logo, redes sociales).
- **Impacto:** Medio — Google no puede generar un Knowledge Panel ni mostrar información enriquecida.
- **Archivo(s):** [BaseLayout.astro](file:///c:/Users/danar/Downloads/Novory-1/src/layouts/BaseLayout.astro)
- **Prioridad:** 🟠 Importante
- **Solución:** Agregar JSON-LD de `Organization` en el `<head>` del BaseLayout.
- **Criterio de aceptación:** Schema Validator muestra `Organization` válida para `novorystudio.com`.

---

**🟠 H-23 · Páginas internas sin `canonical` ni `ogUrl`**

- **Problema:** Las páginas [contacto.astro](file:///c:/Users/danar/Downloads/Novory-1/src/pages/contacto.astro), [nosotros.astro](file:///c:/Users/danar/Downloads/Novory-1/src/pages/nosotros.astro), [servicios.astro](file:///c:/Users/danar/Downloads/Novory-1/src/pages/servicios.astro) y [blog.astro](file:///c:/Users/danar/Downloads/Novory-1/src/pages/blog.astro) no pasan `canonical` ni `ogUrl` al layout. Solo el index los define.
- **Impacto:** Medio — Google podría indexar versiones duplicadas; Open Graph muestra datos incompletos al compartir.
- **Archivo(s):** Las 4 páginas listadas.
- **Prioridad:** 🟠 Importante
- **Solución:** Calcular automáticamente `canonical` y `ogUrl` en `BaseLayout.astro` usando `Astro.url` cuando no se pasen como props.
- **Criterio de aceptación:** Cada página tiene `<link rel="canonical">` y `<meta property="og:url">` con su URL correcta.

---

**🟡 H-24 · `og:image` es un SVG**

- **Problema:** [BaseLayout.astro L22](file:///c:/Users/danar/Downloads/Novory-1/src/layouts/BaseLayout.astro#L22) usa como imagen OG un SVG. Muchas plataformas (Facebook, LinkedIn, WhatsApp, Slack) **no soportan SVG** como imagen de preview.
- **Impacto:** Medio — los shares en redes sociales no mostrarán imagen.
- **Archivo(s):** [BaseLayout.astro](file:///c:/Users/danar/Downloads/Novory-1/src/layouts/BaseLayout.astro#L22)
- **Prioridad:** 🟡 Recomendado
- **Solución:** Crear una imagen PNG/JPG de 1200×630px con el branding de Novory y referenciarla como `og:image`.
- **Criterio de aceptación:** `og:image` apunta a un archivo raster (PNG o JPG) de al menos 1200×630.

---

### 8. UX

#### 🟢 Bien resuelto

- Flujo de conversión claro: Hero CTA → Servicios → Demos → Proceso → Beneficios → FAQ → Contacto.
- CTAs principales redirigen a WhatsApp, reduciendo fricción.
- FAQ con accordion exclusivo (un ítem abierto a la vez).
- Blog post con CTA inferior contextual.

#### Hallazgos

---

**🟠 H-25 · El formulario de contacto no valida antes de enviar y no muestra feedback**

- **Problema:** [ContactSection.astro L168-188](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/ContactSection.astro#L168-L188) previene el submit, recolecta datos y abre WhatsApp. No hay:
  1. Validación de formato de email/teléfono más allá del `required` nativo.
  2. Estado visual de "enviando" o "éxito".
  3. Feedback si la ventana de WhatsApp fue bloqueada por el navegador.
- **Impacto:** Medio — el usuario puede no saber si la acción fue exitosa.
- **Archivo(s):** [ContactSection.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/ContactSection.astro)
- **Prioridad:** 🟠 Importante
- **Solución:** Agregar validación visual personalizada y un estado de confirmación post-submit (toast o mensaje inline).
- **Criterio de aceptación:** El usuario recibe feedback visual claro después de enviar el formulario.

---

**🟡 H-26 · La instrucción "Pasa el cursor sobre cada tarjeta" es poco útil en mobile**

- **Problema:** [ServicesSection.astro L78](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/ServicesSection.astro#L78) dice "Pasa el cursor (o toca en móvil)". En mobile, el flip toggle funciona, pero el texto "Ver beneficios" con el icono de rotación en la ServiceCard no es lo suficientemente claro como para comunicar que hay que tocar.
- **Impacto:** Bajo — algunos usuarios en mobile podrían no descubrir el flip.
- **Archivo(s):** [ServicesSection.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/sections/ServicesSection.astro#L78), [ServiceCard.astro](file:///c:/Users/danar/Downloads/Novory-1/src/components/molecules/ServiceCard.astro)
- **Prioridad:** 🟡 Recomendado
- **Solución:** Agregar una animación sutil inicial al icono de rotación en mobile para indicar interactividad.
- **Criterio de aceptación:** En mobile, el usuario intuitivamente descubre que las cards son interactivas.

---

### 9. UI / Calidad Visual

#### 🟢 Bien resuelto

- Glassmorphism consistente con `backdrop-blur-xl` y bordes translúcidos.
- Gradientes de marca coherentes (`from-brand-cyan via-brand-blue to-brand-purple`).
- Transiciones de hover en todas las cards con duración `500ms`.
- Dark mode integral con clases `dark:` bien aplicadas.
- Tooltips del footer con animación `translateY` y backdrop-blur.
- Shimmer effect en CTAs primarios.

#### Hallazgos

---

**🟡 H-27 · Inconsistencia de radio de borde entre componentes**

- **Problema:** Se usan `rounded-(--radius-xl)` (24px), `rounded-3xl` (24px), `rounded-4xl` (32px), `rounded-[20px]`, `rounded-[24px]`, `rounded-[40px]`, `rounded-[14px]`, `rounded-2xl`, `rounded-xl`, `rounded-lg` en distintos componentes. Hay al menos 8 valores de radio diferentes sin una jerarquía clara.
- **Impacto:** Bajo — visualmente sutil pero rompe la consistencia de un design system premium.
- **Archivo(s):** Múltiples componentes.
- **Prioridad:** 🟡 Recomendado
- **Solución:** Definir una escala de radios en el design system (p.ej. `sm=8, md=12, lg=16, xl=24, 2xl=32`) y usarla consistentemente.
- **Criterio de aceptación:** No más de 4-5 valores de border-radius distintos en todo el proyecto.

---

### 10. Branding

#### 🟢 Bien resuelto

- Sistema de branding completo en `public/assets/`: isotipo, logotipo horizontal, logotipo apilado, en variantes black, white, color-clear, color-dark.
- Favicon SVG con el isotipo de marca.
- Tono de voz consistente: cercano, profesional, orientado a resultados.
- Gradientes de marca (`cyan → blue → purple`) usados consistentemente.

#### Hallazgos

---

**🟡 H-28 · Dos favicons declarados, potencial confusión del navegador**

- **Problema:** [BaseLayout.astro L36-37](file:///c:/Users/danar/Downloads/Novory-1/src/layouts/BaseLayout.astro#L36-L37) declara dos favicons: `<link rel="icon" ... novory-isotipo-color-dark-svg.svg>` y `<link rel="shortcut icon" ... favicon.svg>`. Ambos son SVGs pero son archivos diferentes.
- **Impacto:** Bajo — el navegador seleccionará uno, pero hay ambigüedad.
- **Archivo(s):** [BaseLayout.astro](file:///c:/Users/danar/Downloads/Novory-1/src/layouts/BaseLayout.astro#L36-L37)
- **Prioridad:** 🟡 Recomendado
- **Solución:** Usar un solo `<link rel="icon">` apuntando al isotipo oficial.
- **Criterio de aceptación:** Un solo favicon declarado en `<head>`.

---

### 11. Producción

#### Hallazgos

---

**🔴 H-29 · No existe página 404 personalizada**

- **Problema:** No hay `src/pages/404.astro`. Cuando un usuario accede a una URL inexistente, verá la página 404 genérica de Netlify/GitHub Pages.
- **Impacto:** Alto — rompe la experiencia premium; el usuario sale del branding de Novory.
- **Archivo(s):** (Ausente en `src/pages/`)
- **Prioridad:** 🔴 Crítico
- **Solución:** Crear `src/pages/404.astro` con diseño on-brand y link de retorno al inicio.
- **Criterio de aceptación:** La URL `/cualquier-cosa-inexistente` muestra una 404 con el diseño de Novory.

---

**🔴 H-30 · No existe `manifest.json` (Web App Manifest)**

- **Problema:** No hay web app manifest. El sitio no puede ser instalado como PWA, y las plataformas móviles no pueden mostrar nombre, icono ni colores de tema al agregar a la pantalla de inicio.
- **Impacto:** Medio-alto — afecta percepción de profesionalismo y compatibilidad con mobile.
- **Archivo(s):** (Ausente en `public/`)
- **Prioridad:** 🔴 Crítico
- **Solución:** Crear `public/manifest.json` con nombre, short_name, icons (PNG), theme_color y background_color. Agregar `<link rel="manifest">` en el `<head>`.
- **Criterio de aceptación:** El Lighthouse PWA check pasa los criterios básicos del manifest.

---

**🟠 H-31 · Conflicto de deployment: GitHub Pages workflow + Netlify config coexisten**

- **Problema:** Existen simultáneamente [.github/workflows/deploy.yml](file:///c:/Users/danar/Downloads/Novory-1/.github/workflows/deploy.yml) (GitHub Pages) y [netlify.toml](file:///c:/Users/danar/Downloads/Novory-1/netlify.toml) (Netlify). Si el repo está conectado a ambos, se generan dos deploys a dos URLs diferentes.
- **Impacto:** Medio — potencial contenido duplicado en dos dominios; confusión de cuál es el canónico.
- **Archivo(s):** `.github/workflows/deploy.yml`, `netlify.toml`
- **Prioridad:** 🟠 Importante
- **Solución:** Elegir una plataforma de deployment y eliminar la configuración de la otra.
- **Criterio de aceptación:** Solo existe configuración para una plataforma de hosting.

---

**🟡 H-32 · `simple-icons` en dependencias pero no se usa directamente**

- **Problema:** [package.json L19](file:///c:/Users/danar/Downloads/Novory-1/package.json#L19) incluye `simple-icons` como dependencia, pero ningún archivo del proyecto la importa. Los íconos de redes sociales en el Footer son SVGs inline.
- **Impacto:** Bajo — incrementa el tamaño de `node_modules` innecesariamente.
- **Archivo(s):** [package.json](file:///c:/Users/danar/Downloads/Novory-1/package.json#L19)
- **Prioridad:** 🟡 Recomendado
- **Solución:** Eliminar `simple-icons` de `package.json`.
- **Criterio de aceptación:** La dependencia no aparece en `package.json`.

---

**🟡 H-33 · Archivo de auditoría externa dentro del repo**

- **Problema:** [kombai-accessibility-audit-2026-06-30-11-56.md](file:///c:/Users/danar/Downloads/Novory-1/kombai-accessibility-audit-2026-06-30-11-56.md) está en la raíz del proyecto, no organizado.
- **Impacto:** Bajo — no afecta el build pero ensucia el repo.
- **Archivo(s):** `kombai-accessibility-audit-2026-06-30-11-56.md`
- **Prioridad:** 🟡 Recomendado
- **Solución:** Mover a `Novory_Docs/` o eliminar.
- **Criterio de aceptación:** La raíz solo contiene archivos de configuración del proyecto.

---

## Valoraciones Finales

| Área | Puntuación | Notas |
|---|:---:|---|
| **Arquitectura** | **8 / 10** | Atomic Design bien aplicado, Custom Elements idiomáticos, pero tokens duplicados y código muerto. |
| **Código** | **7 / 10** | Limpio y tipado, pero emails inconsistentes, funciones duplicadas y `color-scheme` roto. |
| **UX** | **8 / 10** | Flujo de conversión bien diseñado, pero formulario sin feedback y discoverability de flip cards mejorable. |
| **SEO** | **5 / 10** | Metadatos básicos presentes, pero faltan `robots.txt`, `sitemap`, Schema Organization, canonical automáticos y OG image válida. |
| **Accesibilidad** | **6 / 10** | ARIA parcial en FAQ y Tabs; falta keyboard navigation en demos; animaciones sin `prefers-reduced-motion` completo. |
| **Rendimiento** | **7 / 10** | Astro + zero-JS framework es excelente base; pero imágenes pesadas, ruido z-50 y prose sin plugin lo degradan. |
| **Calidad Visual** | **9 / 10** | Diseño premium genuino con glassmorphism, gradientes y micro-interacciones consistentes. Excelente dark mode. |
| **Preparación para Producción** | **4 / 10** | Faltan `robots.txt`, `sitemap.xml`, `manifest.json`, página 404, plugin typography, y hay emails inconsistentes. |

---

## ¿Lanzarías este proyecto hoy para un cliente real?

### **No.**

El proyecto tiene una base técnica y visual excepcional — es uno de los sitios de agencia más pulidos que he auditado a nivel de design system y uso de Astro. Sin embargo, tiene **6 hallazgos críticos** (🔴) que impiden un lanzamiento profesional:

1. **Emails inconsistentes** — destruye la confianza inmediatamente.
2. **`color-scheme: dark` roto** — la experiencia en modo claro tiene controles nativos incoherentes.
3. **Plugin `prose` no instalado** — las páginas del blog son visualmente ilegibles.
4. **Sin `robots.txt` ni `sitemap.xml`** — SEO invisible para motores de búsqueda.
5. **Sin página 404** — ruptura del branding en cualquier URL inválida.
6. **Sin `manifest.json`** — experiencia mobile incompleta.

Cada uno de estos es resolvible en horas, no días. Una vez corregidos, el proyecto estaría listo para un lanzamiento de alta calidad.

---

## Plan de Implementación

El plan está ordenado para **minimizar retrabajo**. Las fases deben ejecutarse en orden secuencial.

---

### Fase 1 — Correcciones Críticas (bloquean lanzamiento)
> Estimación: 2-4 horas

1. **Unificar emails** → Decidir email oficial, crear `src/utils/contact.ts` con constantes centralizadas (email, teléfono, etc.), referenciar desde `ContactSection.astro` y `Footer.astro`. *(H-04)*

2. **Corregir `color-scheme`** → En `globals.css`, cambiar `color-scheme: dark` a `color-scheme: light dark` en `:root` y agregar `.dark { color-scheme: dark; }`. *(H-05)*

3. **Instalar `@tailwindcss/typography`** → Ejecutar `npm install @tailwindcss/typography`, configurar en el CSS de Tailwind v4. Verificar que el blog post renderiza correctamente. *(H-11)*

4. **Crear `robots.txt`** → Crear `public/robots.txt` con `User-agent: *`, `Allow: /`, y `Sitemap: https://novorystudio.com/sitemap-index.xml`. *(H-20)*

5. **Instalar y configurar `@astrojs/sitemap`** → `npm install @astrojs/sitemap`, agregar como integration en `astro.config.mjs`. Verificar que el build genera el sitemap. *(H-21)*

6. **Crear página 404** → Crear `src/pages/404.astro` con diseño on-brand: logo, mensaje amigable, botón para volver al inicio. *(H-29)*

7. **Crear `manifest.json`** → Crear `public/manifest.json` con metadata de la app. Agregar `<link rel="manifest">` en `BaseLayout.astro`. Generar íconos PNG desde el isotipo SVG. *(H-30)*

---

### Fase 2 — Correcciones Importantes (mejoran calidad significativamente)
> Estimación: 3-5 horas

8. **Limpiar tokens CSS duplicados** → Auditar `globals.css`, eliminar tokens del bloque "Fase 4.1" que no se usan en componentes. Alinear estilos base de `body`. *(H-06, H-07)*

9. **Corregir links del Footer** → Modificar `Footer.astro` para que los links de "Navegación" y "Servicios" apunten a páginas independientes (`/nosotros`, `/servicios`, `/contacto`) en vez de anchors del index. *(H-08)*

10. **Completar accesibilidad FAQ** → Agregar `id`, `aria-controls`, `role="region"` y `aria-labelledby` al accordion del FAQ. *(H-16)*

11. **Implementar keyboard nav en Demos** → Agregar handler `keydown` para flechas, Home, End en el tablist de demos desktop. *(H-17)*

12. **Agregar Schema Organization** → Insertar JSON-LD de tipo `Organization` en `BaseLayout.astro` con nombre, logo, URL, sameAs (redes sociales). *(H-22)*

13. **Automatizar canonical y ogUrl** → En `BaseLayout.astro`, calcular automáticamente `canonical` y `ogUrl` desde `Astro.url` cuando no se pasen como props. *(H-23)*

14. **Agregar feedback al formulario** → Implementar estado visual de "enviado" (toast o mensaje inline) y validación visual del email y teléfono. *(H-25)*

---

### Fase 3 — Optimizaciones Recomendadas (elevan la calidad a nivel Awwwards)
> Estimación: 2-3 horas

15. **Optimizar imágenes de demos** → Redimensionar a max 1600px de ancho, comprimir a <400 KB, agregar atributo `sizes` en el componente `<Image>`. *(H-12)*

16. **Reemplazar og:image SVG por PNG** → Crear imagen raster 1200×630 con branding de Novory. Actualizar el valor default en BaseLayout. *(H-24)*

17. **Centralizar `gsap.registerPlugin`** → Eliminar las llamadas duplicadas de cada componente de sección, dejar solo la de `BaseLayout.astro`. *(H-09)*

18. **Extraer `formatDate` a utils** → Crear `src/utils/date.ts` con la función y referenciar desde ambas páginas de blog. *(H-03)*

19. **Agregar `prefers-reduced-motion` a HeroVisual** → Detener animaciones `float`, `float-delayed` y `pulse-slow`. *(H-14)*

20. **Reducir z-index del ruido** → Cambiar `z-50` a `z-10` en el overlay de ruido. *(H-13)*

21. **Unificar border-radius** → Definir escala en tokens y aplicar consistentemente. *(H-27)*

22. **Resolver deployment dual** → Elegir Netlify o GitHub Pages; eliminar la configuración de la otra. *(H-31)*

23. **Limpiar código muerto** → Eliminar `Badge.astro` (o usarlo), `simple-icons` del package.json, archivo de auditoría externo de la raíz, y la colección `case-studies` si no se va a usar. *(H-01, H-02, H-32, H-33)*

24. **Unificar favicon** → Declarar un solo `<link rel="icon">`. *(H-28)*

---

### Fase 4 — Verificación Final
> Estimación: 1-2 horas

25. **Build limpio** → Ejecutar `npm run build` y verificar que no hay warnings ni errores.
26. **Lighthouse audit** → Ejecutar en todas las rutas (`/`, `/blog`, `/blog/seo-local`, `/servicios`, `/nosotros`, `/contacto`). Objetivo: Performance ≥90, Accessibility ≥90, SEO ≥95, Best Practices ≥95.
27. **Schema Validator** → Verificar JSON-LD en https://validator.schema.org/.
28. **OG debugger** → Verificar previews en Facebook Sharing Debugger y Twitter Card Validator.
29. **Responsive check** → Verificar en 320px, 375px, 768px, 1024px, 1440px, 1920px.
30. **Test de reducción de movimiento** → Activar `prefers-reduced-motion: reduce` y verificar que ninguna animación reproduce.
