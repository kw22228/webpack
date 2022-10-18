const path = require('path');
const webpack = require('webpack');
const childProcess = require('child_process'); //터미널 명령을 실행할 수 있음.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',

    entry: {
        main: './src/app.js', //key가 filename의 [name]으로
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].[chunkhash].js',
        assetModuleFilename: 'assets/[name][ext]?[hash]', // aaset파일 공통 filename설정
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV === 'production'
                        ? MiniCssExtractPlugin.loader //자체 플러그인 로더를 써야함
                        : 'style-loader',
                    'css-loader',
                ], //뒤에서 부터 앞으로 로더를 실행
            },
            {
                test: /\.(jpg|png|gif|svg)$/i,
                type: 'asset', //maxSize에 따라 asset/resource 또는 asset/inline으로 처리된다.
                generator: {
                    filename: 'assets/images/[name][ext][query]?[hash]', // asset에 대한 파일 설정 (공통 보다 우선순위 높음)
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 10000,
                    },
                },

                // dependency: {
                //     not: ['url'], //애셋로더의 URL호출에서 발생한 애셋을 제외
                // },
                // use: [
                //     {
                //         loader: 'url-loader',
                //         options: {
                //             // publicPath: './dist/',
                //             // name: '[name].[ext]?[hash]',
                //             limit: 20000, // 20kb 미만은 base64로 변환하고 이상은 file-loader로 돌아감
                //         },
                //     },
                // ],
                // type: 'javascript/auto', //애셋을 중복으로 처리하지 않도록함
            },
        ],
    },

    plugins: [
        new webpack.BannerPlugin({
            banner: `
                Build Date: ${new Date().toLocaleString()}
                Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')}
                Author: ${childProcess.execSync('git config user.name')}
            `,
        }),
        new webpack.DefinePlugin({
            TWO: '1+1', //2
            API_DOMAIN: JSON.stringify('http://dev.api.domain.com'), //문자열로 쓰기위해서 JSON.stringify 해야함.
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            templateParameters: {
                env: process.env.NODE_ENV === 'development' ? '(개발용)' : '',
            },
            minify:
                process.env.NODE_ENV === 'production'
                    ? {
                          collapseWhitespace: true, //빈칸 제거
                          removeComments: true, //주석 제거
                      }
                    : false,
        }),
        new CleanWebpackPlugin(),

        ...(process.env.NODE_ENV === 'production'
            ? [
                  new MiniCssExtractPlugin({
                      filename: '[name].[hash].css',
                  }),
              ]
            : []),
    ],
};
