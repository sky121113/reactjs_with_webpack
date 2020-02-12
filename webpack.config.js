/* eslint-disable no-undef */

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/index.html`,
  filename: 'index.html',
  inject: 'body',
});
module.exports = {
// 這個webpack打包的對象，這裡面加上剛剛建立的index.js
  entry: ['./app/index.js', './app/app.jsx', './app/message.jsx'],
  output: {
    // publicPath: '/dist/',
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  // 將loader的設定寫在module的rules屬性中
  module: {
  // rules的值是一個陣列可以存放多個loader物件
    rules: [
      { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-flow'], plugins: ['@babel/proposal-class-properties'] } } },
      { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-flow'], plugins: ['@babel/proposal-class-properties'] } } },
    ],
  },
  devServer: {
    // 指定開啟port為9000
    port: 9000,
  },
  plugins: [HTMLWebpackPluginConfig],
  resolve: {
    extensions: ['.js', '.jsx'], // 字尾名自動補全
  },

};
