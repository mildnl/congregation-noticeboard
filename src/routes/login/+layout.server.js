import { redirect } from '@sveltejs/kit';
import { loggedIn } from '$lib/services/stores';

export function load() {
	let isLoggedIn = false;
	loggedIn.subscribe(value => isLoggedIn = value);
	if (isLoggedIn) {
		throw redirect(303, `/`);
	}
}