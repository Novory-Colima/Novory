# ESPECIFICACIÓN FUNCIONAL DE CADA SECCIÓN
# CAPÍTULO 3.1
#
# Navbar
# Hero
# Empresas que ayudamos
# ======================================================================

# Introducción

La Fase 3 constituye la especificación funcional completa del sitio web.

Mientras que las fases anteriores definieron la estrategia y la arquitectura general, esta fase describe con precisión el comportamiento esperado de cada sección de la página principal.

El objetivo es eliminar cualquier ambigüedad durante el desarrollo.

Cada componente deberá existir únicamente si aporta valor al recorrido del usuario.

Toda decisión de diseño deberá responder alguna de las siguientes preguntas:

• ¿Genera confianza?
• ¿Facilita la comprensión?
• ¿Aumenta la conversión?
• ¿Refuerza la identidad de Novory?

Si la respuesta es negativa, el componente deberá replantearse.

---

# Navbar

## Objetivo de negocio

Permitir una navegación clara sin distraer al visitante del objetivo principal del sitio: solicitar una asesoría.

La barra de navegación debe transmitir inmediatamente que Novory es una empresa tecnológica moderna.

No debe sentirse pesada ni ocupar demasiado espacio visual.

---

## Objetivo psicológico

El usuario debe sentir orden.

Debe percibir que la empresa está organizada.

La navegación debe reducir la incertidumbre.

---

## Componentes

Logo Novory

Links

- Inicio
- Servicios
- Portafolio
- Blog
- Nosotros
- Contacto

Botón CTA

"Agenda una asesoría"

---

## Jerarquía

Logo

↓

Links

↓

CTA

El botón CTA siempre tendrá mayor peso visual que el resto del menú.

---

## Comportamiento

Inicialmente transparente.

Después de aproximadamente 80 px de scroll:

• fondo glass

• blur

• borde inferior muy sutil

• sombra ligera

Nunca deberá cambiar de tamaño.

---

## Animaciones

Entrada inicial

Fade + TranslateY

300 ms

Hover sobre links

Cambio suave de color

Subrayado animado

Hover del botón

Glow

Scale 1.03

Duración

200 ms

---

## Responsive

Desktop

Logo izquierda

Links centro

CTA derecha

Tablet

Logo

Hamburguesa

CTA oculto

Mobile

Logo

Botón menú

Menú fullscreen

---

## Accesibilidad

Todos los links deben tener estados focus.

Navegable completamente mediante teclado.

Contraste mínimo WCAG AA.

---

## SEO

Utilizar etiqueta

<nav>

No usar JavaScript innecesario.

---

## Componentes Astro

Navbar.astro

NavLink.astro

CTAButton.astro

Logo.astro

MobileMenu.astro

---

# Hero

## Objetivo de negocio

Convencer al visitante de permanecer en el sitio durante los siguientes 20 segundos.

El Hero debe comunicar en menos de cinco segundos:

• Qué hacemos.

• Para quién.

• Qué beneficio obtendrá.

---

## Objetivo psicológico

Provocar tres emociones consecutivas.

1.

Curiosidad.

2.

Confianza.

3.

Deseo de conocer más.

---

## Mensaje principal

Novory ayuda a negocios locales a crecer utilizando tecnología moderna.

No vendemos páginas web.

Creamos herramientas digitales que generan resultados.

---

## Copy principal (propuesta)

# Transformamos negocios locales
## en negocios digitales.

---

## Copy secundario

Creamos sitios web modernos, optimizados para Google y automatizados para ayudarte a conseguir más clientes mientras ahorras tiempo en tu operación diaria.

---

## CTA principal

Agenda una asesoría

---

## CTA secundario

Ver proyectos

---

## Distribución Desktop

┌────────────────────────────────────────────┐

Texto principal

↓

Descripción

↓

Botones

↓

Indicadores de confianza

                                 Visual 3D

└────────────────────────────────────────────┘

La columna izquierda tendrá aproximadamente el 55%.

La derecha el 45%.

---

## Distribución Mobile

Texto

↓

Descripción

↓

CTA Principal

↓

CTA Secundario

↓

Visual

---

## Indicadores de confianza

Debajo de los botones aparecerán pequeñas etiquetas.

Ejemplo.

✓ Sitios rápidos

✓ SEO Local

✓ Automatización

✓ Atención personalizada

No utilizar números falsos.

Si todavía no existen clientes suficientes, no mostrar:

"500 clientes"

"100 proyectos"

La confianza debe construirse con honestidad.

---

## Visual principal

NO utilizar una fotografía.

NO utilizar un mockup genérico.

Se desarrollará una composición propia.

Elementos:

Dashboard flotante.

Tarjetas.

Conexiones.

Líneas luminosas.

Pequeños nodos.

Gradientes.

Glow.

Todo representando automatización.

Inspiración:

Vercel

Stripe

Linear

---

## Fondo

Color base muy oscuro.

Gradiente radial azul.

Glow muy tenue.

Ruido muy ligero.

Partículas lentas.

Nunca competir con el contenido.

---

## Jerarquía tipográfica

Título

64–72 px

Peso 700

Subtítulo

20–22 px

Peso 400

Botón

18 px

Badge

14 px

---

## Animaciones

### Entrada inicial

Navbar

↓

Título

↓

Subtítulo

↓

CTA

↓

Badges

↓

Visual derecho

Toda la secuencia debe durar aproximadamente 1.2 segundos.

---

### Texto

SplitText

Palabras apareciendo.

Opacity

Blur

TranslateY

Muy elegante.

---

### Glow

Respiración muy lenta.

Entre 6 y 8 segundos.

---

### Mouse

Parallax ligero.

Máximo

10 px

---

### Scroll

El Hero debe desaparecer lentamente.

No hacer cortes bruscos.

---

## Microinteracciones

Hover botones.

Glow.

Elevación.

Hover badges.

Cambio de color.

Hover visual.

Movimiento muy pequeño.

Nunca exagerado.

---

## Tiempo esperado

Entre

8 y 15 segundos.

---

## Patrón visual

Z Pattern.

---

## Errores prohibidos

No carruseles.

No videos de fondo.

No texto excesivo.

No más de dos botones.

No imágenes de stock.

No efectos exagerados.

No animaciones infinitas distractoras.

---

## Componentes Astro

Hero.astro

HeroText.astro

HeroVisual.astro

CTAGroup.astro

Badge.astro

BackgroundGlow.astro

ParticlesCanvas.astro

---

# Empresas que ayudamos

## Objetivo

Que el visitante se identifique inmediatamente.

Debe pensar:

"Ellos trabajan con negocios como el mío."

---

## Título

Ayudamos a negocios que quieren crecer.

---

## Subtítulo

No importa si apenas estás comenzando o ya tienes años operando.

Creamos soluciones digitales adaptadas a cada negocio.

---

## Empresas

🍽 Restaurantes

🦷 Clínicas Dentales

⚖️ Despachos Jurídicos

🏋 Gimnasios

🛋 Mueblerías

🏪 Comercios Locales

---

## Diseño

Grid

2 filas

3 columnas

Desktop

2 columnas

Tablet

1 columna

Mobile

---

## Cada tarjeta incluye

Icono.

Nombre.

Descripción breve.

Hover.

---

## Ejemplo

🍽 Restaurantes

Reservas, menús digitales, pedidos y atención automatizada.

---

## Hover

Elevación

4 px

Glow azul

Cambio de borde

Movimiento muy sutil

---

## Animación de entrada

Scroll Reveal.

Stagger.

120 ms entre tarjetas.

---

## Objetivo psicológico

Eliminar la duda.

"¿Trabajarán con un negocio como el mío?"

La respuesta debe ser inmediata.

---

## Componentes Astro

BusinessCard.astro

BusinessGrid.astro

BusinessSection.astro

---

## Consideraciones SEO

Los nombres de los tipos de negocio deberán ser texto real.

No imágenes.

Esto permitirá posicionar búsquedas relacionadas.

---

## Accesibilidad

Cada tarjeta deberá poder navegarse mediante teclado.

No depender únicamente del color.

---

## Métrica de éxito

El visitante debe reconocer su tipo de negocio en menos de tres segundos.

Si no ocurre, la sección deberá replantearse.

# Fin del Capítulo 3.1