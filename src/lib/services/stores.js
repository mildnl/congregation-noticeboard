import { writable } from 'svelte/store';

export const loggedIn = writable(false);
export const registering = writable(false);
export const language = writable('de');