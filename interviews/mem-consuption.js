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
	// const tasks = [
	//   { memory: 2, type: 1 },
	//   { memory: 4, type: 1 },
	//   { memory: 5, type: 2 }
	// ];

	// const maxMemory = 6;

	// type 1: [2,4] -> juntas en 1 unidad
	// type 2: [5]   -> 1 unidad
	// Total: 2

	const times = 0;
	let map = new Map();

	for (const task of tasks) {
		const { memory, type } = task;
		let v = map.get(type);
		map.set(type, v ? [...v, memory] : [memory]);
	}

	for (const [key, value] of map) {
		const v = value.sort((a, b) => b - a); // ordenados descendente

		// aca debería primero
		// chequear no pasarme de maxMemory con un count
		// cuando me paso de parallels o count > maxMemory => time ++ , lo que pase primero
	}

	return times;
};

module.exports = { minExecutionTime };
