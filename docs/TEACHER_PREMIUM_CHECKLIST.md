# Profesora — objetivo visual premium

> Referencia aprobada: concept sheet generado en esta conversación (profesora 3D/2.5D con vistas, expresiones y poses pedagógicas). Este documento convierte esa referencia en criterios verificables para implementación.

## Objetivo
Crear una profesora original que alcance el nivel visual de la referencia: personaje infantil premium, cálido, expresivo, volumétrico y capaz de enseñar mediante actuación, mirada y gesto.

## Checklist

### 1. Diseño del personaje
- [ ] Silueta original y reconocible.
- [ ] Proporciones coherentes de cabeza, torso, brazos, manos, piernas y pies.
- [ ] Cabello con volumen, mechones y lectura clara.
- [ ] Rostro con ojos completos, pupilas, brillo, cejas, nariz, mejillas y boca.
- [ ] Ropa por capas: camisa/blusa, chaqueta, pantalón, cinturón y calzado.
- [ ] Manos reales y legibles; eliminar brazos/manos geométricos provisionales.
- [ ] Paleta cálida rosa/morado/blanco coherente con LénaLand.

### 2. Calidad 2.5D
- [ ] Luz principal coherente con la ventana.
- [ ] Sombras suaves en cara, cabello, cuello y ropa.
- [ ] Rim light sutil.
- [ ] Sombra de contacto en suelo.
- [ ] Separación de planos: cabello trasero/cabeza/cara/torso/brazos/manos.
- [ ] Volumen visible sin perder legibilidad infantil.

### 3. Expresiones
- [ ] Joyeuse.
- [ ] Surprise.
- [ ] Encourageante.
- [ ] Réfléchit.
- [ ] Explique.
- [ ] Erreur douce.
- [ ] Félicitations.
- [ ] Attention.
- [ ] Transiciones suaves entre expresiones.

### 4. Estados de animación
- [ ] idle.
- [ ] explain.
- [ ] point.
- [ ] count.
- [ ] think.
- [ ] hint.
- [ ] encourage.
- [ ] retry.
- [ ] correct.
- [ ] celebrate.
- [ ] wait-for-Léna.

### 5. Animación base
- [ ] Respiración sutil.
- [ ] Parpadeo natural.
- [ ] Micro movimiento de cabeza.
- [ ] Cambio de peso corporal.
- [ ] Movimiento secundario del cabello.
- [ ] Mirada independiente hacia objetivos.
- [ ] Reduced-motion respetado.

### 6. Pedagogía animada — 3 × 5
- [ ] Presenta el ejercicio mirando a Léna.
- [ ] Mira y señala el primer grupo.
- [ ] Manzanas 1–5 reaccionan secuencialmente.
- [ ] Cambia mirada/mano al segundo grupo.
- [ ] Manzanas 6–10 reaccionan secuencialmente.
- [ ] Cambia al tercer grupo.
- [ ] Manzanas 11–15 reaccionan secuencialmente.
- [ ] Resume visualmente 5 + 5 + 5 = 15.
- [ ] Vuelve la mirada a Léna y espera su respuesta.
- [ ] Un error produce ayuda, no castigo.
- [ ] Un acierto produce celebración breve y clara.

### 7. Poses clave
- [ ] Presenta el ejercicio.
- [ ] Cuenta primer grupo.
- [ ] Cuenta segundo grupo.
- [ ] Cuenta tercer grupo.
- [ ] Resume con ambas manos.
- [ ] Espera respuesta.
- [ ] Celebra.
- [ ] Ayuda tras error.

### 8. Integración en juego
- [ ] Profesora no tapa tablero ni respuestas.
- [ ] Punto de señalamiento coincide con el objeto pedagógico.
- [ ] Ojos/cabeza/mano apuntan al mismo objetivo.
- [ ] Escala correcta en desktop/tablet/móvil.
- [ ] 60 fps objetivo en hardware razonable.
- [ ] Interacción por ratón, touch y teclado.
- [ ] aria-live conserva instrucciones esenciales.

## Definition of Done
La profesora deja de parecer un conjunto de primitivas. En captura estática debe tener calidad de personaje premium; en movimiento debe comunicar intención mediante ojos, cabeza, manos y postura; y durante un error debe ser capaz de enseñar 3 × 5 visualmente sin depender únicamente del texto.

## Prioridad de implementación
1. Silueta + proporciones + rostro.
2. Brazos/manos articulados y pointing.
3. Ojos/mirada + expresiones.
4. Sombreado y volumen 2.5D.
5. Estados pedagógicos.
6. Animación secundaria.
7. Pulido, rendimiento y accesibilidad.
