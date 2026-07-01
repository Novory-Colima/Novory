# ======================================================================
# FASE 6
#
# ARQUITECTURA TÉCNICA
#
# CAPÍTULO 6.3
#
# ARQUITECTURA DE COMPONENTES
#
# ======================================================================

# Introducción

Los componentes constituyen la unidad fundamental de construcción de toda la interfaz de Novory.

Su objetivo no consiste únicamente en reutilizar código.

Su verdadero propósito es encapsular responsabilidades claramente definidas, facilitar la evolución del sistema y garantizar una experiencia consistente para el usuario.

Cada componente deberá poder entenderse, mantenerse y reutilizarse de manera independiente.

La arquitectura de componentes deberá favorecer la simplicidad sobre la complejidad y la composición sobre la especialización excesiva.

---

# Filosofía

Los componentes representan piezas de un sistema.

Nunca páginas completas.

Nunca soluciones específicas para un único caso.

Cada componente deberá diseñarse para resolver un único problema de manera excelente.

Si un componente intenta resolver múltiples problemas, deberá dividirse.

---

# Principios Fundamentales

## Responsabilidad Única

Cada componente deberá tener una única responsabilidad claramente identificable.

Ejemplos

✔ Mostrar un botón.

✔ Mostrar una tarjeta de servicio.

✔ Mostrar un formulario.

✘ Mostrar una página completa.

✘ Gestionar navegación, formularios y animaciones al mismo tiempo.

---

## Composición sobre Configuración

Siempre será preferible construir interfaces mediante la composición de componentes pequeños que mediante componentes gigantes con decenas de propiedades.

Ejemplo

Correcto

HeroSection

↓

HeroContent

↓

HeroVisual

↓

CTAGroup

↓

BackgroundGlow

Incorrecto

HeroComponent

props:

variant

size

style

mode

theme

layout

position

animation

background

etc.

---

## Bajo Acoplamiento

Los componentes nunca deberán depender directamente unos de otros.

La comunicación deberá realizarse mediante:

Props.

Slots.

Eventos.

Contexto únicamente cuando sea estrictamente necesario.

---

## Alta Cohesión

Todo el código relacionado con una misma responsabilidad deberá permanecer dentro del mismo componente.

No dividir responsabilidades únicamente por tamaño del archivo.

---

# Clasificación Oficial de Componentes

La arquitectura de Novory utilizará una adaptación del modelo Atomic Design.

Átomos

↓

Moléculas

↓

Organismos

↓

Secciones

↓

Páginas

Cada nivel únicamente podrá depender del nivel inferior.

Nunca al contrario.

---

# Átomos

Representan los componentes más pequeños del sistema.

No contienen lógica compleja.

No conocen el contexto donde serán utilizados.

Ejemplos

Button

Icon

Badge

Input

Label

Chip

Spinner

Divider

Avatar

Tooltip

Los átomos deberán ser completamente reutilizables.

---

# Moléculas

Agrupan varios átomos para resolver una tarea concreta.

Ejemplos

SearchInput

CTAGroup

FeatureItem

StatisticCard

ProjectPreview

TimelineNode

FAQItem

ServiceCardHeader

Las moléculas podrán reutilizarse en distintos organismos.

---

# Organismos

Representan bloques funcionales completos.

Ejemplos

Navbar

Hero

Timeline

Portfolio

FAQ

Footer

ContactForm

BenefitsGrid

ServicesGrid

Cada organismo podrá utilizar múltiples moléculas y átomos.

Nunca deberá depender de una página específica.

---

# Secciones

Representan bloques completos dentro de una página.

Ejemplo

HeroSection

ProblemSection

ServicesSection

ProcessSection

BenefitsSection

PortfolioSection

AboutSection

ContactSection

Las secciones únicamente organizan organismos.

No contienen lógica de negocio.

---

# Páginas

Las páginas representan el punto de entrada de una ruta.

Su única responsabilidad consiste en ensamblar layouts y secciones.

Nunca deberán contener lógica compleja.

---

# Smart vs Presentational Components

## Presentational

Responsabilidad

Mostrar información.

No realizan peticiones.

No contienen reglas de negocio.

Reciben datos mediante Props.

Ejemplos

Card

Badge

TimelineItem

ProjectCard

HeroContent

---

## Smart Components

Responsabilidad

Gestionar comportamiento.

Coordinar datos.

Conectar servicios.

Preparar información para los componentes visuales.

Ejemplos

ContactFormContainer

BlogCollection

SearchController

NewsletterManager

MotionController

La cantidad de Smart Components deberá mantenerse al mínimo.

---

# Comunicación entre Componentes

Orden de preferencia

Props

↓

Slots

↓

Eventos

↓

Context

↓

Estado Global

Siempre utilizar la alternativa más simple.

---

# Props

Las Props deberán ser explícitas.

Nunca ambiguas.

Correcto

title

description

image

variant

Incorrecto

data

config

options

payload

---

# Slots

Los Slots deberán utilizarse para permitir composición.

Nunca para ocultar problemas de arquitectura.

---

# Eventos

Los eventos comunicarán acciones.

Nunca datos completos.

Ejemplo

onSubmit

onClose

onOpen

onSelect

Nunca

onEverythingChanged

---

# Estado

El estado deberá vivir en el nivel más bajo posible.

Nunca elevar estado innecesariamente.

---

# Lógica

La lógica deberá permanecer separada de la presentación.

Siempre que sea posible.

Ejemplo

Correcto

ContactForm

↓

useContactForm()

↓

Validator

↓

API

Incorrecto

Todo dentro del componente.

---

# Animaciones

Los componentes nunca definirán animaciones complejas.

Únicamente expondrán referencias para que el Flow System™ pueda actuar sobre ellas.

Esto mantiene desacoplada la interfaz del sistema de movimiento.

---

# Estilos

Cada componente deberá utilizar exclusivamente los tokens definidos por el Design System.

Nunca valores escritos manualmente.

Ejemplo

Correcto

var(--color-primary)

Incorrecto

#4F7DFF

---

# Accesibilidad

Todo componente deberá incluir desde su creación:

HTML semántico.

ARIA cuando corresponda.

Focus visible.

Estados accesibles.

Compatibilidad con teclado.

La accesibilidad nunca deberá añadirse posteriormente.

---

# Rendimiento

Los componentes deberán evitar:

Renderizados innecesarios.

Dependencias excesivas.

Lógica repetitiva.

Animaciones costosas.

El componente más rápido suele ser el más simple.

---

# Naming

Los nombres deberán describir exactamente la responsabilidad.

Correcto

BenefitCard

PortfolioGrid

ServiceItem

Incorrecto

Card2

FinalCard

NewComponent

ComponentX

---

# Tamaño Máximo

Como guía general.

Un componente no debería superar aproximadamente las 200 líneas de código.

Si comienza a crecer constantemente.

Probablemente deba dividirse.

No es una regla absoluta.

Es una señal arquitectónica.

---

# Documentación

Todo componente reutilizable deberá documentar:

Objetivo.

Props.

Slots.

Eventos.

Dependencias.

Ejemplo de uso.

Limitaciones.

La documentación deberá evolucionar junto con el componente.

---

# Checklist Antes de Crear un Componente

¿Existe ya un componente similar?

¿Tiene una única responsabilidad?

¿Puede componerse utilizando componentes existentes?

¿Su nombre describe claramente su propósito?

¿Respeta el Design System?

¿Respeta el Flow System™?

¿Respeta la arquitectura del proyecto?

Si alguna respuesta es negativa.

Replantear el diseño.

---

💎 PRINCIPIOS DE NOVORY

Los componentes representan responsabilidades.

No tamaños de archivo.

La composición genera flexibilidad.

La simplicidad facilita la evolución.

Los componentes pequeños construyen sistemas grandes.

Todo componente debe poder entenderse de manera aislada.

La interfaz y el comportamiento evolucionan mejor cuando permanecen desacoplados.

============================================================

ADR-007

Los componentes deberán clasificarse utilizando una adaptación de Atomic Design, favoreciendo la composición y la reutilización.

---

ADR-008

La lógica de negocio permanecerá separada de la presentación siempre que sea técnicamente viable.

---

ADR-009

El Flow System™ actuará sobre los componentes desde el exterior. Los componentes nunca conocerán la implementación interna del sistema de movimiento.

============================================================

FIN DEL CAPÍTULO 6.3