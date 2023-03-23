const { merge } = require("webpack-merge");
const base = require("./webpack.base.js");
const path = require('path');
module.exports = merge(base, {
    mode: 'development',
    // 开发工具，开启 source map，编译调试
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        // 当使用 [HTML5 History API] 时，任意的 `404` 响应被替代为 `index.html`
        historyApiFallback: true,
        open: true, // 自动打开浏览器
        // 默认为true
        hot: true,
        // 是否开启代码压缩
        compress: true,
        port: 8080,
        static: {
            directory: path.join(__dirname, "../public")
        }
    }
})