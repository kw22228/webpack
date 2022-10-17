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

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], //뒤에서 부터 앞으로 로더를 실행
            },
            {
                test: /\.(jpg|png|gif|svg)$/i,
                dependency: {
                    not: ['url'], //애셋로더의 URL호출에서 발생한 애셋을 제외
                },
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // publicPath: './dist/',
                            // name: '[name].[ext]?[hash]',
                            limit: 20000, // 20kb 미만은 base64로 변환하고 이상은 file-loader로 돌아감
                        },
                    },
                ],

                // type: 'javascript/auto', //애셋을 중복으로 처리하지 않도록함
            },
        ],
    },
};
