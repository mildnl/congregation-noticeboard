import { redirect } from '@sveltejs/kit';
import { store } from '$lib/services/auth/amplifyFunctions';

export function load() {
	if (store.user == null) {
		throw redirect(303, `/login?redirectTo=${url.pathname}`);
	}
}