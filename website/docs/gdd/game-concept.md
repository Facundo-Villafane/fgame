---
title: Game Concept
sidebar_position: 1
---

# Game Concept: Tag Tails

*Creado: 2026-05-26*
*Estado: Draft*

---

## Elevator Pitch

> Tag Tails es un party battler 1v1 donde cada jugador arma un equipo de 3 personajes furry antes del match y compite en una serie de mini-islas con objetivos rápidos y cambiantes — juntar tokens, capturar zonas, empujar al rival. La estrategia está en el draft y el timing del tag-switch; el caos está en las islas.

---

## Core Identity

| Aspecto | Detalle |
| ---- | ---- |
| **Género** | Party battler / competitive action |
| **Plataforma** | PC (Steam) |
| **Audiencia** | Jugadores casual-competitivos, 16–30, PvP expresivo sin grind pesado |
| **Jugadores** | 1v1 (2 jugadores) |
| **Duración de sesión** | 5–10 min (3 rondas × 90 s + draft) |
| **Monetización** | Ninguna (prototipo) |
| **Scope estimado** | Medium (3–6 meses, solo) — MVP en 2–4 semanas |
| **Referentes** | Mario Party, Towerfall, Marvel Rivals |

---

## Core Fantasy

Sos un táctico que lee el match antes de que empiece. Tu equipo de 3 no es al azar — es una composición construida para el set de islas que viene. Cuando cambiás al Mapache justo cuando spawnan los tokens, o tagueás al Lobo para tomar la zona de empuje en el último segundo, el juego te hace sentir inteligente. No necesitás combos difíciles: necesitás leer la situación más rápido que tu oponente.

---

## Unique Hook

Como la energía caótica de Mario Party, **Y ADEMÁS** tu equipo es una mini composición de hero-shooter que draftaste con estrategia antes del match.

---

## Visual Identity Anchor

**Dirección: Archipiélago Rebelde**

Un mundo de mini-islas urbanas controladas por clanes animales. Los personajes compiten en "retos callejeros" para ganar reputación. Tono: urbano, colorido, caótico, cartoon, furry sin sexualizar.

*"Grafiti + mascotas rebeldes + competencias absurdas + arenas pequeñas."*

| Principio visual | Design test |
| ---- | ---- |
| Personajes legibles como silueta — rol visible en la forma | Si Runner y Bruiser se confunden de lejos, rediseñar |
| Cada isla tiene su propia paleta dominante | Mercado = naranja cálido; Torre = azul/gris; Puente = verde industrial |
| Exageración cartoon — los golpes se sienten grandes | Si una acción no tiene juice visual (squash/stretch), agregarle |

Color philosophy: colores saturados con fondos oscuros para hacer pop a los personajes. Energía de cartel de barrio, no de fantasy épico.

---

## Player Experience (MDA)

### Aesthetics

| Aesthetic | Prioridad | Cómo lo entregamos |
| ---- | ---- | ---- |
| **Sensation** | 3 | Juice en tag-switch, hits con feedback, eventos caóticos |
| **Fantasy** | 2 | Personajes furry con identidad fuerte, habilidades ligadas al animal |
| **Challenge** | 4 | Leer composiciones rivales, timing del tag-switch |
| **Fellowship** | 2 | La rivalidad 1v1, el duelo de lecturas |
| **Discovery** | 5 | Descubrir qué combinaciones funcionan en qué islas |
| **Expression** | 1 | Armar la comp que refleja tu estilo de juego |

### Core Mechanics

1. **Draft Phase** — elegir 3 personajes viendo las islas del set antes del match
2. **Tag-Switch System** — cambiar entre los 3 con cooldown (8 s); el que entra tiene ventana de vulnerabilidad breve
3. **Island Objectives** — cada ronda tiene un objetivo único entendible en 5 segundos
4. **Character Abilities** — activa + pasiva por personaje, ligadas al animal; 4 roles (Runner, Bruiser, Trickster, Support)
5. **Chaos Events** — cada isla tiene un evento periódico que sacude la dinámica

---

## Core Loop

### Momento a momento (30 s)
Moverse, leer el estado de la isla, decidir si atacar o priorizar el objetivo, elegir el momento correcto para tagear. La decisión de *cuándo* y *a quién* tagear es el skill principal.

### Corto plazo (5–10 min)
Una ronda de 90 s en una isla. Gana quien más puntos al final. Un match es mejor de 3 rondas en 3 islas distintas.

### Sesión (15–30 min)
2–5 matches. Termina naturalmente. El hook de vuelta: "Si hubiera llevado Búho en esa isla de tokens, hubiera ganado."

### Retención
- **Curiosidad**: "¿Qué pasa si llevo los 3 Tricksters?"
- **Mastery**: Timing del tag-switch, lectura del draft rival
- **Competencia**: El duelo 1v1 directo

---

## Pillars

### 1. Equipos chicos, decisiones rápidas
Cada jugador tiene exactamente 3 personajes y debe cambiar entre ellos según el objetivo y el momento.

*Design test*: Si una feature requiere más de 3 personajes activos o ralentiza el ritmo de decisión, se corta.

### 2. Islas pequeñas, reglas claras
Cada mapa tiene un único objetivo entendible en 5 segundos.

*Design test*: Si hay que explicar el objetivo en más de una oración, rediseñar la isla.

### 3. Caos controlado
Hay empujones, robos, eventos y sabotaje — pero siempre se entiende qué hay que hacer.

*Design test*: Si un evento de isla se siente injusto (sin chance de reaccionar), necesita señal anticipada o cooldown más largo.

### 4. Furry funcional
Cada animal tiene habilidades relacionadas con su cuerpo, instinto o personalidad.

*Design test*: Si una habilidad pudiera pertenecer a cualquier personaje genérico, no pertenece a este juego.

### Anti-Pillars

- **NO combos tipo fighting game** — compromete accesibilidad y decisiones rápidas
- **NO más de 2 habilidades por personaje en prototipo** — compromete velocidad de decisión
- **NO sistema de vida profundo** — el castigo es penalización party, no muerte
- **NO online en prototipo** — valida el core loop local primero
- **NO más de 4 personajes en MVP** — el MVP valida si el tag-switch es divertido

---

## Referentes

| Referente | Qué tomamos | Qué hacemos diferente |
| ---- | ---- | ---- |
| **Mario Party** | Objetivos de mini-juegos rápidos y cambiantes | No es por turnos; tag-switch agrega estrategia |
| **Marvel Rivals** | Identidad fuerte de personajes, team comp como estrategia | 1v1, sin vida, sin mapa grande |
| **Towerfall** | Acción rápida, legible, 2D, profundidad emergente | Objetivos variados por ronda; tag-switch como layer táctico |

---

## Perfil del jugador objetivo

| Atributo | Detalle |
| ---- | ---- |
| **Edad** | 16–30 |
| **Experiencia gaming** | Casual-to-midcore |
| **Disponibilidad** | Sesiones 15–30 min |
| **Juega actualmente** | Marvel Rivals, juegos cozy, party games con amigos |
| **Busca** | PvP expresivo y rápido sin curva de fighting game |
| **Lo alejaría** | Grind de poder, combos complejos, partidas largas |

---

## Consideraciones técnicas

| Aspecto | Evaluación |
| ---- | ---- |
| **Engine** | Godot 4.6 |
| **Desafíos clave** | Feel del tag-switch (transición + vulnerabilidad); sincronización de eventos de isla |
| **Arte** | 2D stylized — cartoon colorido, urban furry |
| **Complejidad arte** | Medium — personajes custom animados 2D |
| **Audio** | Moderate — SFX por personaje, música por isla |
| **Networking** | Local primero; P2P post-prototipo |
| **Contenido MVP** | 4 personajes, 3 islas |

---

## Riesgos principales

- **El feel del tag-switch**: Si la ventana de vulnerabilidad está mal calibrada, la mecánica central no funciona
- **Balance 70/30 caos/táctico**: Demasiado caos → la skill no importa; demasiado táctico → pierde energía party
- **Draft ignorado por casuals**: Si 3 personajes al azar es igual de efectivo que una comp pensada, se pierde el hook estratégico

---

## MVP

**Hipótesis**: El loop de draft + tag-switch + islas con objetivos distintos es divertido en un match de 3 rondas.

**Incluido:**
1. 4 personajes (Zorro, Lobo, Mapache, Conejo) con 1 habilidad activa cada uno
2. 3 islas — tokens, captura de punto, empuje
3. Draft: elegir 3 de 4 con islas visibles antes del match
4. Tag-switch con cooldown y ventana de vulnerabilidad
5. Rondas de 90 s, mejor de 3

**Excluido del MVP:** online, habilidades pasivas, chaos events, audio completo, progresión, skins

### Tiers de scope

| Tier | Contenido | Timeline |
| ---- | ---- | ---- |
| **MVP** | 4 personajes, 3 islas | 2–4 semanas |
| **Vertical Slice** | 6–8 personajes, 5 islas, chaos events | 2–3 meses |
| **Alpha** | 8–12 personajes, 7 islas, online P2P | 4–6 meses |
| **Full Vision** | 12+ personajes, 8+ islas, cosméticos, online estable | 6–12 meses (solo) |
