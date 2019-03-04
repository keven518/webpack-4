const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const devMode = process.env.NODE_ENV !== 'production'; // 判断当前环境是开发环境还是 部署环境，主要是 mode属性的设置值。
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');

// console.log("devMode: ", devMode)

let prodConfig = {
  mode: 'production',
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: loader => [
                require('autoprefixer')({ browsers: ['> 0.15% in CN'] }) // 添加前缀
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css', // 设置最终输出的文件名
      chunkFilename: '[id].[hash].css'
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
}

module.exports = merge(common, prodConfig);