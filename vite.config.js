import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['/locales']
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
