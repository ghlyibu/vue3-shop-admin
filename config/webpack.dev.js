const { merge } =  require("webpack-merge");
const base =  require("./webpack.base.js");
const path = require('path');
module.exports = merge(base,{
    mode: 'development',
    devServer: {
        port: 8080,
        static: {
            directory: path.join(__dirname, "../public")
        }
    }
})