"use strict";
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config.ts");
new WebpackDevServer(webpack(config), {
    historyApiFallback: true,
    hot: true,
    publicPath: config.output.publicPath
}).listen(3000, "localhost", function (err, result) {
    if (err) {
        return console.log(err);
    }
});
