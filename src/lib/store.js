import { get, writable } from 'svelte/store';

function createMarkdown() {
	const store = writable("");

	return {
		subscribe: store.subscribe,
		set: (value) => store.update(() => value),
		reset: () => store.set(""),
        get: () => get(store)
	};
}

function createHtml() {
	const { subscribe, update, set } = writable("");

	return {
		subscribe,
		set: (value) => update(() => value),
		reset: () => set("")
	};
}

function createSettings() {
    const store = writable({
        name: ""
    });

	return {
		subscribe: store.subscribe,
		set: (value) => store.update(() => value),
		reset: () => store.set({
            name: ""
        }),
        get: () => get(store)
	};
}

export const html = createHtml();
export const markdown = createMarkdown();
export const settings = createSettings();