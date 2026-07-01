# FASE 4
#
# DESIGN SYSTEM
#
# CAPÍTULO 4.2
#
# BIBLIOTECA DE COMPONENTES
#
# ======================================================================

# Introducción

Los componentes constituyen el lenguaje físico del Ecosistema Inteligente.

Cada componente deberá poder reutilizarse sin perder coherencia visual, funcional o narrativa.

No existen componentes "bonitos".

Existen componentes útiles.

Cada módulo debe resolver un único problema.

Nunca más de uno.

---

# Filosofía

Los componentes deben sentirse vivos.

No mediante animaciones exageradas.

Sino mediante pequeños detalles que transmitan calidad.

El usuario debe percibir que todo responde de manera natural.

---

# Clasificación

El sistema se divide en cuatro niveles.

Nivel 1

Átomos

↓

Nivel 2

Moléculas

↓

Nivel 3

Organismos

↓

Nivel 4

Plantillas

Esta organización facilitará el mantenimiento del proyecto.

---

# ÁTOMOS

Los elementos más pequeños.

Nunca dependen de otros componentes.

------------------------------------------------------------

## Botones

### Filosofía

Los botones representan decisiones.

No deben gritar.

Deben invitar.

---

### Variantes

Primary

Secondary

Ghost

Outline

Text

Danger (uso interno)

---

### Primary

Color

Azul Principal

Texto blanco

Glow azul muy ligero

Radius

16 px

Padding

16 x 28

Hover

Elevación

Glow

Scale

1.02

Active

Scale

0.98

Focus

Outline accesible.

---

### Secondary

Glass

Borde

Texto blanco

Hover

Fondo ligeramente iluminado.

---

### Ghost

Sin fondo.

Solo texto.

Hover

Color azul.

---

### Tamaños

Small

Medium

Large

Hero

---

### Iconos

Opcionales.

Siempre alineados.

Nunca superiores.

---

### Estados

Default

Hover

Focus

Pressed

Disabled

Loading

Success

Error

---

### Reglas

Nunca utilizar más de un botón primario por sección.

Nunca utilizar colores diferentes para acciones similares.

============================================================

## Badges

Uso

Tecnologías.

Etiquetas.

Categorías.

Estado.

---

Radius

999 px

Glass

Muy ligeros.

---

Hover

Cambio de borde.

Nunca glow fuerte.

============================================================

## Inputs

Borde

Muy sutil.

Focus

Glow azul.

Label siempre visible.

Nunca placeholders como único indicador.

---

Estados

Error

Success

Disabled

Loading

============================================================

## Iconos

Todos los iconos deberán compartir:

Tamaño.

Grosor.

Familia.

Nunca mezclar estilos.

============================================================

# MOLÉCULAS

Agrupan varios átomos.

------------------------------------------------------------

## Card

Será probablemente el componente más utilizado.

---

Tipos

BusinessCard

BenefitCard

ProblemCard

ProjectCard

BlogCard

ServiceCard

FounderCard

---

Reglas

Padding

32 px

Radius

24 px

Glass ligero.

Borde.

Glow únicamente durante hover.

---

Hover

TranslateY

-6 px

Scale

1.01

Sombra

Incremento ligero.

---

Nunca utilizar rotaciones.

============================================================

## CTA Group

Botón principal.

↓

Botón secundario.

↓

Badges.

Se utilizará en Hero y CTA Final.

============================================================

## Feature List

Lista de beneficios.

Cada elemento incluye:

Icono.

Texto.

Separación consistente.

============================================================

## Statistic

Número.

Descripción.

Animación.

No utilizar estadísticas falsas.

============================================================

# ORGANISMOS

Agrupan múltiples moléculas.

------------------------------------------------------------

## Navbar

Componentes

Logo.

Links.

CTA.

Menú móvil.

Glass.

Blur.

============================================================

## Hero

Texto.

Visual.

Glow.

Badges.

CTA Group.

Particles.

============================================================

## Timeline

Nodo.

Conector.

Título.

Descripción.

Animación.

============================================================

## FAQ

Accordion.

Pregunta.

Respuesta.

Animación.

============================================================

## Contact Form

Inputs.

Textarea.

Botón.

Panel de confianza.

============================================================

## Footer

Logo.

Links.

Redes.

Legal.

============================================================

# PLANTILLAS

Combinación de organismos.

------------------------------------------------------------

Página Inicio

Página Servicios

Página Blog

Página Caso de Éxito

Página Contacto

Página Nosotros

============================================================

# Tokens

Todos los componentes utilizarán exclusivamente variables.

Nunca valores escritos directamente.

Ejemplo

--color-primary

--space-lg

--radius-xl

--shadow-glow

Nunca

#4477ff

24 px

box-shadow...

============================================================

# Espaciado

Cada componente respetará:

Padding interno.

Separación externa.

Altura mínima.

Área táctil.

============================================================

# Sombras

Una única familia.

Glow

Depth

Floating

Nunca crear sombras nuevas.

============================================================

# Animaciones

Los componentes no contienen animaciones.

Reciben animaciones.

Esto evita acoplamiento.

============================================================

# Responsive

Todo componente deberá existir en:

Desktop.

Tablet.

Mobile.

Nunca crear componentes exclusivos para móvil.

============================================================

# Accesibilidad

Todos los componentes deberán incluir:

Focus.

ARIA.

Navegación teclado.

Contraste.

============================================================

# Naming

Button

ButtonPrimary

FeatureCard

BenefitCard

TimelineItem

Nunca

Button2

CardFinal

CardNuevo

============================================================

# Regla Fundamental

Antes de crear un componente nuevo preguntar:

¿Realmente necesitamos otro componente?

Si puede reutilizarse uno existente.

Siempre reutilizar.

============================================================

💎 PRINCIPIOS DE NOVORY

Un buen componente desaparece.

El usuario recuerda la experiencia.

No el componente.

Cada píxel debe justificar su existencia.

Todo componente debe resolver exactamente un problema.

Los componentes son herramientas.

No decoración.

La consistencia es una forma de elegancia.

La reutilización es una forma de inteligencia.

============================================================

FIN DEL CAPÍTULO 4.2