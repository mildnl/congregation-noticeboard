import { redirect } from '@sveltejs/kit';
import { loggedIn } from '$lib/services/stores';

export function load() {
	if (!loggedIn) {
		throw redirect(303, `/login`);
	}
}