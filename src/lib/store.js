import { writable } from 'svelte/store';

function createMarkdown() {
	const { subscribe, set, update } = writable("");

	return {
		subscribe,
		set: (value) => update(() => value),
		reset: () => set("")
	};
}

export const markdown = createMarkdown();