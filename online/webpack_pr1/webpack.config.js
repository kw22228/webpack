const path = require('path');

module.exports = {
    mode: 'development',

    entry: {
        main: './src/app.js', //key가 filename의 [name]으로
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js',
    },
};
