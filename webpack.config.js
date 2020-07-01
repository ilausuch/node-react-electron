const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
      path: __dirname + "/dist",
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      sourceMapFilename :'[name].bundle.js.map'
  },
  module: {
      rules:[
          {
              test: /.js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader'
              }
          },
          {
              test: /.(sa|sc|c)ss$/,
              use: [
                  {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                          publicPath: '../css/'
                        }
                  },
                  'css-loader',
                  'sass-loader',
                ],
          }
      ]
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: 'css/[name].css',
          chunkFilename: 'css/[id].css',
        }),
      new HtmlWebpackPlugin({
          template: './src/index.html'
      })
  ]
}
