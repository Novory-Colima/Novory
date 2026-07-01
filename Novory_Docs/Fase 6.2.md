# ======================================================================
# FASE 6
#
# ARQUITECTURA TÉCNICA
#
# CAPÍTULO 6.2
#
# ESTRUCTURA DEL PROYECTO ASTRO
#
# ======================================================================

# Introducción

La estructura del proyecto constituye la representación física de la arquitectura de Novory.

Cada carpeta deberá comunicar claramente su propósito.

La organización del proyecto deberá permitir que cualquier desarrollador pueda comprender la arquitectura general en pocos minutos.

El objetivo principal no es únicamente mantener orden.

El objetivo es reducir la complejidad conforme el proyecto evolucione.

Una buena estructura disminuye el tiempo de desarrollo, facilita el mantenimiento y evita la aparición de dependencias innecesarias.

---

# Filosofía de Organización

El proyecto deberá organizarse por responsabilidad.

Nunca por conveniencia temporal.

Cada carpeta deberá responder claramente una única pregunta:

"¿Qué responsabilidad cumple dentro del sistema?"

Si una carpeta comienza a almacenar elementos sin una responsabilidad definida, deberá reorganizarse.

---

# Arquitectura General

```text
novory/

│

├── public/

├── src/

│

├── astro.config.mjs

├── package.json

├── tsconfig.json

├── tailwind.config.mjs

├── eslint.config.js

├── prettier.config.cjs

└── README.md
```

---

# Carpeta /public

## Responsabilidad

Almacenar únicamente recursos públicos que no requieren procesamiento por Astro.

---

## Contenido permitido

favicon

robots.txt

sitemap.xml

manifest.webmanifest

iconos

fuentes autoalojadas

imágenes estáticas

documentos descargables

---

## No permitido

Componentes.

Archivos TypeScript.

Lógica.

Imágenes optimizadas mediante Astro.

---

# Carpeta /src

Representa el corazón del proyecto.

Todo el código fuente deberá vivir aquí.

---

```text
src/

├── assets/

├── components/

├── content/

├── layouts/

├── pages/

├── styles/

├── animations/

├── system/

├── lib/

├── utils/

├── hooks/

├── config/

├── types/

└── data/
```

---

# assets/

## Responsabilidad

Recursos que Astro procesará automáticamente.

---

## Contenido

Imágenes.

SVG.

Videos pequeños.

Texturas.

Recursos gráficos.

---

## Regla

Toda imagen utilizada dentro de componentes deberá vivir aquí.

---

# components/

## Filosofía

Los componentes representan la interfaz del Ecosistema Inteligente.

Nunca deberán contener lógica compleja.

---

## Organización

```text
components/

atoms/

molecules/

organisms/

sections/

layout/

ui/

forms/

navigation/

portfolio/

blog/

shared/
```

---

## atoms/

Componentes básicos.

Ejemplos

Button

Input

Badge

Icon

Label

Chip

Divider

Spinner

Tooltip

---

## molecules/

Agrupaciones pequeñas.

Ejemplos

CardHeader

Statistic

FeatureList

CTAGroup

PricingItem

TimelineNode

FAQItem

ProjectSummary

---

## organisms/

Componentes grandes.

Ejemplos

Hero

Navbar

Footer

Timeline

Portfolio

ServicesGrid

ContactForm

FAQ

Testimonials

---

## sections/

Cada sección completa de la página principal.

Ejemplo

HeroSection

ProblemSection

ServicesSection

ProcessSection

BenefitsSection

PortfolioSection

AboutSection

ContactSection

---

## layout/

Componentes estructurales.

Container

Grid

Stack

Section

Spacer

---

## ui/

Elementos visuales reutilizables.

Glow

GlassPanel

GradientBackground

ParticlesCanvas

ConnectionLines

FloatingShape

---

## forms/

Todos los componentes relacionados con formularios.

---

## navigation/

Navbar.

Footer.

Breadcrumbs.

Links.

---

## shared/

Componentes utilizados por múltiples módulos.

---

# layouts/

Responsabilidad

Definir la estructura de las páginas.

Ejemplos

BaseLayout

LandingLayout

BlogLayout

LegalLayout

CaseStudyLayout

---

# pages/

Responsabilidad

Rutas del proyecto.

Ejemplo

```text
pages/

index.astro

servicios.astro

blog/

contacto.astro

nosotros.astro

casos/

legal/

api/
```

Las páginas deberán ser ligeras.

Su función será únicamente ensamblar componentes.

---

# content/

Responsabilidad

Content Collections de Astro.

---

## Organización

```text
content/

blog/

services/

case-studies/

legal/

authors/

config.ts
```

Todo contenido dinámico deberá vivir aquí.

---

# animations/

Responsabilidad

Implementar el Flow System™.

Nunca componentes.

---

## Organización

```text
animations/

core/

modules/

effects/

helpers/

tokens/

presets/
```

---

## core/

Motion Engine.

Motion Orchestrator.

Scroll Engine.

---

## modules/

Hero.

Cards.

Timeline.

Buttons.

Portfolio.

FAQ.

Forms.

---

## effects/

Glow.

Particles.

Parallax.

Reveal.

Magnetic.

Cursor.

---

## helpers/

Funciones reutilizables.

---

## presets/

Animaciones reutilizables.

Fade.

Slide.

Scale.

Stagger.

Reveal.

---

## tokens/

Duraciones.

Curvas.

Intensidades.

Offsets.

---

# system/

## Filosofía

Representa el núcleo técnico del proyecto.

Todo aquello que define el comportamiento global del sistema deberá vivir aquí.

Nunca componentes visuales.

---

## Organización

```text
system/

seo/

analytics/

events/

motion/

performance/

theme/

config/
```

---

## seo/

Configuración SEO.

Schema.

Metadata.

Open Graph.

Robots.

Sitemap.

---

## analytics/

Integraciones futuras.

---

## events/

Sistema de eventos globales.

---

## motion/

Configuración compartida del Motion System.

---

## performance/

Optimizaciones globales.

---

## theme/

Variables compartidas.

Tokens.

Modo oscuro.

---

# lib/

Responsabilidad

Integraciones con servicios externos.

Ejemplos

Resend.

Supabase.

Cloudflare.

Google APIs.

---

# utils/

Funciones puras.

Nunca dependientes de Astro.

Ejemplos

formatDate

slugify

readingTime

validators

math

strings

---

# hooks/

Lógica reutilizable.

Ejemplos

useScroll

useIntersection

useReducedMotion

useTheme

---

# config/

Toda configuración del proyecto.

Ejemplos

navigation.ts

seo.ts

services.ts

company.ts

social.ts

motion.ts

---

# data/

Información estructurada.

Ejemplos

FAQs

Servicios

Estadísticas

Testimonios

Partners

---

# styles/

Organización

```text
styles/

base/

tokens/

utilities/

components/

animations/

globals.css
```

---

# types/

Interfaces.

Tipos globales.

Enums.

---

# Convenciones de Nombres

Componentes

PascalCase

HeroSection.astro

BenefitCard.astro

---

Archivos utilitarios

camelCase

formatDate.ts

slugify.ts

---

Colecciones

kebab-case

case-studies

---

Variables

camelCase

---

Constantes

UPPER_SNAKE_CASE

---

# Flujo de Desarrollo

Nueva funcionalidad

↓

Analizar

↓

Buscar reutilización

↓

Crear componente

↓

Crear animación

↓

Documentar

↓

Probar

↓

Optimizar

↓

Publicar

---

# Reglas Fundamentales

Las páginas nunca contendrán lógica compleja.

Los componentes nunca realizarán peticiones innecesarias.

Toda configuración deberá centralizarse.

Toda animación deberá vivir fuera de los componentes.

Todo contenido deberá separarse de la presentación.

Toda lógica reutilizable deberá abstraerse.

---

# Escalabilidad

La estructura deberá permitir añadir:

Nuevos servicios.

Nuevo blog.

Panel administrativo.

Portal de clientes.

Documentación.

Landing pages.

Sin modificar la organización principal.

---

# Checklist para Nuevas Carpetas

Antes de crear una nueva carpeta responder:

¿Existe una carpeta con la misma responsabilidad?

¿Será utilizada por más de un módulo?

¿Su propósito permanecerá en el tiempo?

¿Podría resolverse reorganizando la estructura existente?

Si alguna respuesta es negativa.

No crear una nueva carpeta.

---

💎 PRINCIPIOS DE NOVORY

Cada carpeta comunica una intención.

Una estructura clara reduce errores.

El proyecto debe ser fácil de recorrer.

La organización también forma parte de la experiencia del desarrollador.

Todo módulo debe tener un lugar evidente.

La escalabilidad comienza con una buena estructura.

============================================================

ADR-004

Toda la lógica global del proyecto deberá concentrarse dentro del directorio "system", evitando su dispersión entre componentes o utilidades.

---

ADR-005

Las páginas actuarán únicamente como ensambladores de componentes. La lógica de negocio y la presentación permanecerán desacopladas.

---

ADR-006

El Flow System™ tendrá su propia arquitectura independiente dentro de "animations", permitiendo evolucionar o sustituir su implementación sin afectar la interfaz.

============================================================

FIN DEL CAPÍTULO 6.2