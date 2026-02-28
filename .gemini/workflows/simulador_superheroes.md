---
description: Crear y ejecutar simuladores de superhéroes (variables y funciones)
---

# Simulador de Superhéroes y Batallas

Esta skill te permite crear y simular historias y batallas de superhéroes siguiendo un conjunto de reglas estrictas de progreso (Fase 1: solo variables; Fase 2: variables y funciones).

## Fase 1: Simulador de Superhéroe (Solo variables)

1. Crea archivos separados para cada superhéroe (ej. `heroe1.js`, `heroe2.js`).
2. Usa **únicamente** variables (`let` o `const`) y `console.log`.
3. Define al menos las siguientes variables:
   - `nombreHeroe`
   - `poder`
   - `nivelEnergia`
   - `ciudad`
   - `enemigo`
4. Simula una historia imprimiendo por consola el estado del héroe usando las variables. Ejemplo:
   `console.log(nombreHeroe + " tiene " + nivelEnergia + " de energía y está defendiendo " + ciudad + ".");`

## Fase 2: Batalla de Superhéroes (Variables y Funciones)

1. Crea una carpeta `nivel_2_funciones`.
2. Crea el archivo `batalla.js`.
3. Usa **únicamente** variables, funciones y `console.log`.
4. Define las siguientes funciones base:
   - `ataque(atacante, defensor, nivelAtaque)`
   - `defender(defensor, nivelDefensa)`
   - `recargarEnergia(heroe, cantidad)`
5. Define funciones especiales para cada héroe (ej. `superAtaque()`, `escudoMagico()`).
6. Simula una batalla interactuando con las funciones y actualizando las variables de energía.

## Flujo de Trabajo en GitHub (Obligatorio)

- **Fase 1:**
  - 1 commit creando tu héroe.
  - 1 commit modificando el héroe de un compañero (ej. modificando `nivelEnergia`).
- **Fase 2:**
  - 1 commit integrando la función especial del Estudiante A.
  - 1 commit integrando la función especial del Estudiante B.

Ejemplo de comandos útiles:
// turbo

```bash
node nivel_1_variables/heroe1.js
node nivel_1_variables/heroe2.js
node nivel_2_funciones/batalla.js
```
