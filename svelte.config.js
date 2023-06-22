import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			fallback: 'index.html',
			hydrate: false,
			prerender: {
				concurrency: 1,
				crawl: true
			}
		})
	},

	module: {
		rules: {
			test: /\.(png|svg|jpg|gif)$/,
			use: ['file-loader']
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};
