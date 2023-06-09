import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
			fallback: 'index.html',
            hydrate: false,
            pages: 'build',
            assets: 'build',
			prerender: {
                concurrency: 1,
                crawl: true,
                entries: 'pages'
        }
        })
    },
    files: {
      assets: 'src/locales',
    },
    module: {
        rules: {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }
    }
};