import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
			fallback: 'index.html',
			prerender: true,
        })
    },
    module: {
        rules: {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }
    }
};