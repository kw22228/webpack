const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',

  devtool: 'source-map',

  entry: './src/main.js', //번들될 파일 (입력)

  //번들링 파일 출력 위치 지정(출력)
  output: {
    path: path.resolve(__dirname, 'dist/'), //안전한 경로를 위해 path사용
    filename: '[name].[chunkhash].js', //번들된 파일명
  },

  module: {
    rules: [
      {
        test: /\.(js)$/, // js 파일만 필요시 (js|jsx|ts|tsx)
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], //['@babel/preset-env', '@babel/preset-react']
            // plugins: ['@babel/plugin-proposal-class-properties']
          },
        },
        exclude: /node_modules/, //node modules 제외 (성능적으로 좋지않음)
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
};
