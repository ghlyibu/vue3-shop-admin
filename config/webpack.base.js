const path = require('path');
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const resolve = function (dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    entry: resolve("../src/index.js"),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "js/[name].js",
        clean: true, // webpack 5.x 在生成文件之前清空 output 目录
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../src")
        },
        extensions: [".ts", ".tsx", ".js", ".jsx", ".vue", ".json"]
    },
    plugins: [
        // webpack 4.x 用该插件
        // new CleanWebpackPlugin(), 
        // HTML模板
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../public/index.html")
        }),
        // 配置copy public下的文件
        new CopyPlugin(
            {
              patterns: [
                {
                  from: path.resolve(__dirname, "../public"),
                  to: path.resolve(__dirname, "../dist"),
                  toType: 'dir',
                  noErrorOnMissing: true,
                  globOptions: {
                    // 过滤 index.html
                    ignore: [
                      '**/.DS_Store',
                      path.join(__dirname, "../public/index.html").replace(/\\/g, '/')
                    ]
                  },
                  info: {
                    minimized: true
                  }
                }
              ]
            }
          )
    ],
}