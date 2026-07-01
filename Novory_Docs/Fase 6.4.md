# ======================================================================
# FASE 6
#
# ARQUITECTURA TÉCNICA
#
# CAPÍTULO 6.4
#
# GESTIÓN DE ESTILOS
#
# ======================================================================

# Introducción

El sistema de estilos de Novory tiene como objetivo construir una base visual consistente, escalable y completamente desacoplada de los componentes.

Los estilos no representan únicamente colores o tamaños.

Representan el lenguaje visual del Ecosistema Inteligente.

Todo estilo deberá poder reutilizarse, evolucionar y mantenerse sin afectar la arquitectura del proyecto.

La gestión de estilos deberá facilitar la consistencia, reducir la duplicación y permitir que cualquier modificación global pueda realizarse desde un único lugar.

---

# Filosofía

Los estilos constituyen un sistema.

No una colección de clases.

Cada decisión visual deberá derivar del Design System.

Nunca de preferencias individuales durante el desarrollo.

Todo estilo deberá responder a un token o a una regla previamente definida.

---

# Tecnologías

La implementación utilizará:

• Tailwind CSS como sistema de utilidades.

• Variables CSS para tokens globales.

• CSS Layers para organización.

• CSS Custom Properties para temas.

• Astro para el aislamiento natural de estilos cuando sea conveniente.

Cada herramienta deberá utilizarse para aquello que mejor resuelve.

Nunca duplicar responsabilidades.

---

# Principios Fundamentales

## Los Tokens son la fuente de verdad.

Todo color.

Todo espacio.

Todo radio.

Toda sombra.

Toda transición.

Toda duración.

Toda tipografía.

Toda capa visual.

Deberá definirse mediante tokens.

Nunca mediante valores escritos directamente.

---

## La consistencia tiene prioridad sobre la personalización.

Si un diseño necesita un nuevo color o un nuevo espaciado.

Primero deberá evaluarse si realmente pertenece al sistema.

No crear excepciones innecesarias.

---

## La reutilización reduce la complejidad.

Todo patrón repetido deberá abstraerse.

No repetir grupos largos de utilidades.

No repetir estilos entre componentes.

---

# Organización de Estilos

```text
styles/

├── globals.css

├── tokens/

│   ├── colors.css

│   ├── spacing.css

│   ├── typography.css

│   ├── radius.css

│   ├── shadows.css

│   ├── motion.css

│   ├── layers.css

│   └── z-index.css

│

├── base/

│   ├── reset.css

│   ├── typography.css

│   ├── forms.css

│   └── accessibility.css

│

├── utilities/

│   ├── layout.css

│   ├── glass.css

│   ├── gradients.css

│   ├── glow.css

│   └── effects.css

│

├── components/

│   ├── button.css

│   ├── card.css

│   ├── navbar.css

│   └── form.css

│

└── animations/

    ├── transitions.css

    ├── keyframes.css

    └── reduced-motion.css
```

---

# Tokens

Los tokens representan el contrato visual del proyecto.

Ningún componente deberá utilizar valores arbitrarios.

---

## Tokens de Color

Ejemplos

--color-primary

--color-secondary

--color-surface

--color-background

--color-border

--color-text

--color-text-muted

--color-success

--color-warning

--color-error

---

## Tokens de Espaciado

Ejemplo

--space-1

--space-2

--space-3

...

--space-12

Toda separación utilizará exclusivamente esta escala.

---

## Tokens Tipográficos

Ejemplo

--font-heading

--font-body

--text-xs

--text-sm

--text-md

--text-lg

--text-xl

--text-2xl

...

---

## Tokens de Radio

Ejemplo

--radius-sm

--radius-md

--radius-lg

--radius-xl

--radius-full

---

## Tokens de Sombras

Ejemplo

--shadow-soft

--shadow-floating

--shadow-glow

--shadow-focus

Nunca crear sombras nuevas dentro de componentes.

---

## Tokens de Movimiento

Toda duración y curva deberá vivir aquí.

Ejemplo

--duration-fast

--duration-normal

--duration-slow

--ease-standard

--ease-emphasized

---

# Tailwind CSS

## Filosofía

Tailwind deberá utilizarse como una herramienta de productividad.

No como sustituto del Design System.

Las utilidades deberán respetar siempre los tokens definidos por Novory.

---

## Reglas

Preferir utilidades nativas.

Crear clases reutilizables únicamente cuando exista repetición.

Nunca utilizar clases excesivamente largas.

Si una combinación se repite constantemente.

Deberá abstraerse.

---

# Variables CSS

Las variables representan el contrato entre diseño e implementación.

Nunca acceder directamente a colores hexadecimales.

Todo deberá pasar por variables.

---

# CSS Layers

Orden recomendado

Base

↓

Tokens

↓

Utilities

↓

Components

↓

Overrides excepcionales

Esto permitirá mantener una cascada predecible.

---

# Estilos Globales

Los estilos globales deberán limitarse a:

Reset.

Tipografía.

Body.

Selección de texto.

Scrollbars.

Focus.

Temas.

Nunca estilos específicos de componentes.

---

# Estilos de Componentes

Cada componente podrá incluir únicamente estilos exclusivos de su implementación.

Nunca redefinir colores.

Nunca redefinir espaciados globales.

Nunca modificar tipografía global.

---

# Responsive Design

El sistema deberá seguir un enfoque Mobile First.

Las reglas deberán escalar progresivamente.

Nunca crear estilos exclusivos para escritorio ignorando dispositivos móviles.

---

# Breakpoints

Mobile

Base.

Tablet

md

Laptop

lg

Desktop

xl

Wide

2xl

Toda la interfaz deberá responder utilizando la misma escala.

---

# Espaciado

Toda separación visual utilizará la escala oficial.

No utilizar valores arbitrarios.

No utilizar márgenes negativos salvo casos técnicamente justificados.

---

# Z-Index

Los niveles visuales deberán definirse mediante tokens.

Ejemplo

Background

↓

Content

↓

Navbar

↓

Modal

↓

Overlay

↓

Tooltip

Nunca utilizar números aleatorios.

---

# Glassmorphism

Toda superficie glass deberá utilizar:

Blur oficial.

Opacidad oficial.

Borde oficial.

Glow oficial.

Nunca crear variantes improvisadas.

---

# Gradientes

Los gradientes oficiales deberán vivir en un único archivo.

Nunca escribir gradientes manualmente dentro de componentes.

---

# Sombras

Las sombras representan profundidad.

No decoración.

Nunca abusar del desenfoque.

Preferir múltiples sombras suaves frente a una única sombra intensa.

---

# Iconografía

Todo icono deberá respetar:

Color.

Grosor.

Escala.

Separación.

Nunca modificar individualmente cada icono.

---

# Formularios

Todos los formularios compartirán:

Inputs.

Labels.

Errores.

Focus.

Mensajes.

Botones.

Estados.

No existirán variantes independientes.

---

# Modo Oscuro

Novory se diseñará inicialmente con enfoque Dark First.

Toda futura implementación de tema claro deberá reutilizar exactamente los mismos tokens.

Nunca duplicar componentes.

Únicamente cambiar variables.

---

# Accesibilidad

Todo color deberá cumplir contraste AA como mínimo.

Los estados Focus deberán permanecer visibles.

El color nunca será el único indicador visual.

---

# Optimización

Eliminar estilos no utilizados.

Evitar CSS redundante.

Reducir especificidad.

Priorizar clases reutilizables.

Mantener el CSS fácilmente navegable.

---

# Checklist Antes de Crear un Nuevo Estilo

¿Existe ya un token equivalente?

¿Puede resolverse mediante utilidades existentes?

¿Respeta el Design System?

¿Podría afectar otros componentes?

¿Existe una forma más simple?

Si alguna respuesta es negativa.

Replantear la implementación.

---

💎 PRINCIPIOS DE NOVORY

Los estilos representan un sistema.

No una colección de reglas.

Toda decisión visual comienza en los tokens.

La consistencia visual genera confianza.

Las variables representan contratos.

No valores.

La simplicidad facilita el mantenimiento.

Un buen sistema de estilos permite evolucionar sin reescribir.

============================================================

ADR-010

Todo valor visual reutilizable deberá definirse mediante tokens antes de utilizarse en cualquier componente.

---

ADR-011

Tailwind CSS se utilizará como herramienta de implementación, nunca como sustituto del Design System.

---

ADR-012

El sistema de estilos será Mobile First, Dark First y completamente basado en variables CSS para facilitar su evolución futura.

============================================================

FIN DEL CAPÍTULO 6.4