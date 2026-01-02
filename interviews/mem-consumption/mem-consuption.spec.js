const { optimizedMinExecutionTime } = require('./mem-consuption');

describe('minExecutionTime', () => {
	test('Edge case 1: una sola tarea', () => {
		const tasks = [{ memory: 5, type: 42 }];

		const maxMemory = 10;

		// Una sola tarea siempre requiere 1 unidad
		expect(optimizedMinExecutionTime(tasks, maxMemory)).toBe(1);
	});

	test('Edge case 2: memoria exacta al límite', () => {
		const tasks = [
			{ memory: 3, type: 1 },
			{ memory: 2, type: 1 },
			{ memory: 5, type: 1 }
		];

		const maxMemory = 5;

		// [5] -> 1 tarea
		// [3,2] -> 2 tareas (límite de paralelismo)
		// Total: 2
		expect(optimizedMinExecutionTime(tasks, maxMemory)).toBe(2);
	});

	test('Edge case 3: cada tarea es de un tipo distinto', () => {
		const tasks = [
			{ memory: 1, type: 1 },
			{ memory: 1, type: 2 },
			{ memory: 1, type: 3 },
			{ memory: 1, type: 4 }
		];

		const maxMemory = 10;

		// No se pueden mezclar tipos, todas van en tiempos distintos
		expect(optimizedMinExecutionTime(tasks, maxMemory)).toBe(4);
	});

	test('Edge case 4: muchas tareas pequeñas del mismo tipo', () => {
		const tasks = [
			{ memory: 1, type: 1 },
			{ memory: 1, type: 1 },
			{ memory: 1, type: 1 },
			{ memory: 1, type: 1 },
			{ memory: 1, type: 1 }
		];

		const maxMemory = 3;

		// Límite de paralelismo: 2 tareas → 2 + 2 + 1
		expect(optimizedMinExecutionTime(tasks, maxMemory)).toBe(3);
	});
	test('Caso 5: tareas del mismo tipo se pueden paralelizar', () => {
		const tasks = [
			{ memory: 2, type: 1 },
			{ memory: 4, type: 1 },
			{ memory: 5, type: 2 }
		];

		const maxMemory = 6;

		// type 1: [2,4] -> juntas en 1 unidad
		// type 2: [5]   -> 1 unidad
		// Total: 2
		expect(optimizedMinExecutionTime(tasks, maxMemory)).toBe(2);
	});

	test('Caso 6: mismo tipo pero la memoria obliga a dividir en varios tiempos', () => {
		const tasks = [
			{ memory: 3, type: 1 },
			{ memory: 3, type: 1 },
			{ memory: 3, type: 1 }
		];

		const maxMemory = 5;

		// No pueden ir más de una por vez (3 + 3 > 5)
		// type 1: 3 tareas -> 3 unidades
		expect(optimizedMinExecutionTime(tasks, maxMemory)).toBe(3);
	});

	test('Caso 7: múltiples tipos con packing no trivial', () => {
		const tasks = [
			{ memory: 2, type: 1 },
			{ memory: 2, type: 1 },
			{ memory: 1, type: 1 },
			{ memory: 4, type: 2 },
			{ memory: 1, type: 2 }
		];

		const maxMemory = 4;

		// type 1: 2 tareas + 1 tarea → 2 unidades
		// type 2: 1 tarea + 1 tarea → 2 unidades
		expect(optimizedMinExecutionTime(tasks, maxMemory)).toBe(4);
	});

	test('Caso 8: packing óptimo requiere ordenar tareas, bin packing', () => {
		const tasks = [
			{ memory: 3, type: 1 },
			{ memory: 1, type: 1 },
			{ memory: 2, type: 1 },
			{ memory: 1, type: 1 }
		];

		const maxMemory = 4;

		// Ordenando bien:
		// [3,1] -> 1 unidad
		// [2,1] -> 1 unidad
		// Total: 2
		expect(optimizedMinExecutionTime(tasks, maxMemory)).toBe(2);
	});
});
