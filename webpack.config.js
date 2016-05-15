module.exports = {
    entry: './Counter.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
            },
        ],

        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: [
                        'react',
                        'es2015',
                        'stage-0',
                    ],
                },
            },
        ],
    },
};
