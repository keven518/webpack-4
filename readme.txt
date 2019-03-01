https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack
官方文档 https://www.webpackjs.com/concepts/

cnpm i webpack -D
cnpm i webpack-cli -D

css-loader 支持 import './style/index.css'; 
style-loader 在main.js中生成style标签注入到index.html中

lesson-04 webpack的sass添加c3前缀和sourcemap的处理
cnpm i autoprefixer -D  添加前缀

lesson-05 webpack的CSS提取成单独的文件
cnpm i -D mini-css-extract-plugin
https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=%E6%A0%B7%E5%BC%8F%E8%A1%A8%E6%8A%BD%E7%A6%BB%E6%88%90%E4%B8%93%E9%97%A8%E7%9A%84%E5%8D%95%E7%8B%AC%E6%96%87%E4%BB%B6%E5%B9%B6%E4%B8%94%E8%AE%BE%E7%BD%AE%E7%89%88%E6%9C%AC%E5%8F%B7

lesson-06 webpack的CSS和JS压缩插件使用
cnpm i -D optimize-css-assets-webpack-plugin  css 压缩
cnpm i -D uglifyjs-webpack-plugin  js 压缩
https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=%E5%8E%8B%E7%BC%A9-css

lesson-07 webpack解决文件名带哈希值的问题
https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=%E8%A7%A3%E5%86%B3-css-%E6%96%87%E4%BB%B6%E6%88%96%E8%80%85-js-%E6%96%87%E4%BB%B6%E5%90%8D%E5%AD%97%E5%93%88%E5%B8%8C%E5%8F%98%E5%8C%96%E7%9A%84%E9%97%AE%E9%A2%98
在css，js更新的时候浏览器有缓存所以如果同名的话就会做到无法即时更新，所以要带上哈希即版本的后缀
HtmlWebpackPlugin插件，可以把打包后的 CSS 或者 JS 文件引用直接注入到 HTML 模板中，这样就不用每次手动修改文件引用了。
cnpm i -D html-webpack-plugin