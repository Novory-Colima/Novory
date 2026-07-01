# ======================================================================
# FASE 5
#
# FLOW SYSTEM™
#
# CAPÍTULO 5.2
#
# IMPLEMENTACIÓN DEL MOVIMIENTO
#
# ======================================================================

# Introducción

La implementación del movimiento tiene un único objetivo:

Traducir la filosofía del Flow System™ a una arquitectura técnica consistente, escalable y reutilizable.

Las tecnologías utilizadas podrán cambiar con el tiempo.

La filosofía nunca.

Por esa razón este documento define primero responsabilidades y después herramientas.

---

# Arquitectura General

Todo el sistema de movimiento estará organizado en cinco capas.

Usuario

↓

Scroll Engine

↓

Motion Orchestrator

↓

Animation Modules

↓

UI Components

Cada capa tendrá una única responsabilidad.

Nunca mezclar responsabilidades.

---

# Scroll Engine

## Responsabilidad

Controlar completamente el desplazamiento de la experiencia.

Será la fuente principal de sincronización.

---

## Tecnología

Lenis.

---

## Reglas

Una única instancia.

Nunca múltiples inicializaciones.

Nunca manipular scroll manualmente desde componentes.

Todo pasará por el Scroll Engine.

---

# Motion Orchestrator

## Responsabilidad

Coordinar todas las animaciones del sitio.

No contiene animaciones.

Las administra.

---

## Funciones

Inicializar.

Pausar.

Reanudar.

Sincronizar.

Actualizar.

Destruir.

---

## Filosofía

Los componentes nunca deberán conocer el estado global del movimiento.

Únicamente recibirán eventos.

---

# Animation Modules

Cada familia de animaciones vivirá en módulos independientes.

Ejemplo

animations/

hero/

cards/

buttons/

timeline/

faq/

portfolio/

background/

connections/

particles/

forms/

page-transition/

Cada módulo tendrá únicamente una responsabilidad.

---

# GSAP

Será el motor principal para:

Timeline.

ScrollTrigger.

Stagger.

Secuencias.

Animaciones complejas.

Parallax.

Reveal.

---

## Reglas

No crear timelines gigantes.

Preferir múltiples timelines pequeños.

Destruir todos los ScrollTriggers.

Nunca utilizar selectores globales.

Siempre refs.

---

# Motion One

Responsable de:

Hover.

Focus.

Microinteracciones.

Cambios rápidos.

Estados.

---

# CSS

Siempre que una animación pueda resolverse mediante CSS.

Utilizar CSS.

No GSAP.

---

# requestAnimationFrame

Utilizar únicamente para:

Canvas.

Partículas.

Conexiones.

Background.

Nunca para componentes HTML.

---

# Canvas

Responsabilidad

Representar actividad del Ecosistema Inteligente.

Nunca elementos de interfaz.

---

## Permitido

Conexiones.

Partículas.

Glow.

Gradientes vivos.

---

## No permitido

Texto.

Botones.

Cards.

---

# SVG

Utilizar para:

Líneas.

Diagramas.

Iconografía animada.

Timeline.

---

# ScrollTrigger

Permitido únicamente para:

Entradas.

Timeline.

Portafolio.

Secciones.

Nunca para hover.

---

# Tipos de Movimiento

## Reveal

Entrada elegante.

---

## Flow

Movimiento continuo.

---

## Response

Hover.

Focus.

Click.

---

## Ambient

Background.

Glow.

Partículas.

---

## Narrative

Cambios entre secciones.

---

# Timing

Microinteracciones

120–220 ms

---

Componentes

300–600 ms

---

Narrativa

600–1200 ms

---

Background

Continuo.

Muy lento.

---

# Easing

Una única familia.

Nunca mezclar curvas aleatoriamente.

El movimiento debe sentirse consistente.

---

# Stagger

Siempre utilizar stagger natural.

No superior a 120 ms.

---

# Delays

Evitar delays artificiales.

Las animaciones deben depender del flujo.

No del tiempo.

---

# Scroll

Toda animación relacionada con scroll deberá depender de la posición del usuario.

Nunca de temporizadores.

---

# Lazy Animation

Las animaciones deberán inicializarse únicamente cuando exista posibilidad real de interacción.

Nunca cargar todo al inicio.

---

# Performance

Objetivo

60 FPS estables.

---

Nunca animar

width

height

top

left

margin

---

Preferir

transform

opacity

filter (uso moderado)

---

# GPU

Promover únicamente elementos realmente necesarios.

No abusar de:

will-change.

---

# Accesibilidad

Respetar:

prefers-reduced-motion.

Reducir:

Parallax.

Reveal.

Background.

Glow dinámico.

Nunca eliminar completamente el feedback.

---

# Mobile

Reducir:

Cantidad de partículas.

Blur.

Glow.

Canvas.

Nunca eliminar narrativa.

---

# Debug

Todo módulo deberá poder desactivarse individualmente.

Esto facilitará pruebas.

---

# Organización

animations/

core/

engine/

orchestrator/

effects/

modules/

helpers/

config/

tokens/

---

# Configuración

Toda duración.

Curva.

Delay.

Intensidad.

Glow.

Distancia.

Deberá definirse mediante tokens.

Nunca escribir números repetidos.

---

# Testing

Verificar:

60 FPS.

Memoria.

Scroll.

Resize.

Reduced Motion.

Pantallas táctiles.

Desktop.

Tablet.

Mobile.

---

# Errores que debemos evitar

No iniciar múltiples motores.

No animar propiedades costosas.

No bloquear el hilo principal.

No crear animaciones que compitan entre sí.

No convertir el movimiento en espectáculo.

El movimiento siempre debe reforzar la experiencia.

Nunca distraer de ella.

============================================================

💎 PRINCIPIOS DE NOVORY

Las herramientas cambian.

La arquitectura permanece.

Un buen sistema de movimiento se coordina.

No improvisa.

Cada frame debe aportar valor.

El rendimiento también forma parte del diseño.

La mejor optimización es evitar trabajo innecesario.

Un movimiento consistente inspira confianza.

El usuario nunca debería pensar en la animación.

Solo en lo agradable que fue navegar.

============================================================

FIN DEL CAPÍTULO 5.2