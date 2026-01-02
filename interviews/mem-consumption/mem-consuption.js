// Se tiene un conjunto de tareas T = {t₁, t₂, ..., tₙ}.
// Cada tarea tᵢ está caracterizada por:
// un consumo de memoria mᵢ ∈ ℕ⁺
// un tipo cᵢ ∈ ℕ
// Además, se dispone de:
// una capacidad máxima de memoria M ∈ ℕ⁺ disponible en cada unidad de tiempo

// Reglas de ejecución
// El tiempo está dividido en unidades discretas 1, 2, ..., k.
// Cada tarea requiere exactamente una unidad de tiempo para ejecutarse.
// En una misma unidad de tiempo pueden ejecutarse como máximo dos tareas en paralelo,
// siempre que:
// - Todas las tareas pertenezcan al mismo tipo.
// - La suma de sus consumos de memoria no exceda M.

// Todas las tareas pertenezcan al mismo tipo
// La suma de sus consumos de memoria no exceda maxMemory
// Cada tarea debe ejecutarse exactamente una vez.
// Una tarea no puede dividirse ni ejecutarse parcialmente.

// Objetivo
// Determinar el número mínimo de unidades de tiempo k necesarias para ejecutar todas las tareas respetando las reglas anteriores.

// Tests
// npm run test

const minExecutionTime = (tasks, maxMemory) => {
	let times = 0;
	let map = new Map();

	for (const task of tasks) {
		const { memory, type } = task;
		let v = map.get(type);
		map.set(type, v ? [...v, memory] : [memory]);
	}

	for (const [, value] of map) {
		const v = value.sort((a, b) => b - a);

		let left = maxMemory;
		let usedSlots = 0;
		for (const t of v) {
			if (left === 0) {
				left = maxMemory;
				if (usedSlots) {
					times++;
					usedSlots++;
				}
			}

			if (left >= t) {
				left -= t;
				usedSlots++;
			} else {
				left = maxMemory - t;
				times++;
				usedSlots = 1;
			}

			// check paralells
			if (usedSlots === 2) {
				usedSlots = 0;
				times++;
			}
		}
		if (usedSlots) {
			times++;
		}
	}
	return times;
};

const optimizedMinExecutionTime = (tasks, maxMemory) => {
	let times = 0;
	const map = new Map();

	for (const { memory, type } of tasks) {
		if (!map.has(type)) map.set(type, []);
		map.get(type).push(memory);
	}

	for (const memories of map.values()) {
		memories.sort((a, b) => b - a);

		let usedMemory = 0;
		let usedSlots = 0;

		for (const m of memories) {
			if (m > maxMemory) {
				throw new Error('Task exceeds max memory');
			}

			const fitsMemory = usedMemory + m <= maxMemory;
			const fitsSlots = usedSlots < 2;

			if (fitsMemory && fitsSlots) {
				usedMemory += m;
				usedSlots++;
			} else {
				times++;
				usedMemory = m;
				usedSlots = 1;
			}
		}

		if (usedSlots > 0) {
			times++;
		}
	}

	return times;
};

module.exports = { minExecutionTime, optimizedMinExecutionTime };
