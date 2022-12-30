const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
    },

    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.jsx', '.js'], //뒤에 확장자를 생략해도댐
    },
};
