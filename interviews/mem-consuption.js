// Se tiene un conjunto de tareas T = {t₁, t₂, ..., tₙ}.
// Cada tarea tᵢ está caracterizada por:
// un consumo de memoria mᵢ ∈ ℕ⁺
// un tipo cᵢ ∈ ℕ
// Además, se dispone de:
// una capacidad máxima de memoria M ∈ ℕ⁺ disponible en cada unidad de tiempo

// Reglas de ejecución
// El tiempo está dividido en unidades discretas 1, 2, ..., k.
// Cada tarea requiere exactamente una unidad de tiempo para ejecutarse.
// En una misma unidad de tiempo pueden ejecutarse múltiples tareas en paralelo, siempre que:

// Todas las tareas pertenezcan al mismo tipo
// La suma de sus consumos de memoria no exceda maxMemory
// Cada tarea debe ejecutarse exactamente una vez.
// Una tarea no puede dividirse ni ejecutarse parcialmente.

// Objetivo
// Determinar el número mínimo de unidades de tiempo k necesarias para ejecutar todas las tareas respetando las reglas anteriores.

// Tests
// Para correr los tests hacer 

const minExecutionTime = (tasks, maxMemory) => {
  return 2;
};

module.exports = { minExecutionTime };