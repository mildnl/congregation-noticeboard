import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
			fallback: 'app.html',
			prerender: true
        })
    }
};