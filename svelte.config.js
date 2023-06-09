import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
			fallback: 'index.js',
			prerender: true,
        })
    }
};