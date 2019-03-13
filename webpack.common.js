const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const devMode = process.env.NODE_ENV !== 'production'; // 判断当前环境是开发环境还是 部署环境，主要是 mode属性的设置值。
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// console.log("process: ", process)
// console.log("process.env.NODE_ENV: ", process.env.NODE_ENV)
// console.log("devMode: ", devMode)

module.exports = {
  entry: './src/index.js',
  resolve: {
    alias: {   
      '@': path.resolve(__dirname, 'src/')
    },
    extensions: [".js", ".vue",".json"]   // 默认值: [".js",".json"]   
  },
  externals: {    // 把一个模块做成外部依赖，不会打包到js中
    jquery: 'jQuery',
    lodash: '_'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,  //  加快编译速度，不包含node_modules文件夹内容
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }, {
          loader: "eslint-loader",
          options: {
          // eslint options (if necessary)
          fix: true
          }
        }
      ]},
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '柯文 万岁', // 默认值：Webpack App
      filename: 'index.html', // 默认值： 'index.html'
      template: path.resolve(__dirname, 'src/index.html'),
      minify: {
        collapseWhitespace: true,   // 是否压缩, 是否把空白去掉
        removeComments: true,       // 是否移除注释
        removeAttributeQuotes: true // 移除属性的双引号
      }
    }),
    new CleanWebpackPlugin(['dist'])
  ]
}