import { Bench } from 'tinybench';
import {
	minExecutionTime as solA,
	optimizedMinExecutionTime as solOpt
} from './mem-consuption.js';

const tasks = Array.from({ length: 5000 }, (_, i) => ({
	memory: (i % 5) + 1,
	type: i % 3
}));

const maxMemory = 10;

const bench = new Bench({
	time: 1000,
	warmupTime: 500
});

bench
	.add('my solution', () => {
		solA(tasks, maxMemory);
	})
	.add('optimized solution', () => {
		solOpt(tasks, maxMemory);
	});

await bench.run();

console.table(
	bench.tasks.map(t => ({
		name: t.name,
		meanMs: t.result.latency.mean * 1000,
		rme: t.result.latency.rme
	}))
);
