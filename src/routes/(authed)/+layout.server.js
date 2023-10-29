import { redirect } from '@sveltejs/kit';
import { loggedIn } from '$lib/services/stores';
import { onDestroy } from 'svelte';

export function load() {
	let isLoggedIn = false;
	let unsubscribe = loggedIn.subscribe(value => isLoggedIn = value);
	if (!isLoggedIn) {
		throw redirect(303, `/login`);
	}
	onDestroy(unsubscribe);
}