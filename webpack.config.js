var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: 'dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    devServer: {
        port: '8080',
        hot: true,
        inline: true,
        progress: true
    },
    module: {
        loaders:[
        { test: /\.json$/, loader: 'json'},
        { test: /\.pug$/, loader: 'pug' },
        { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader','css!sass')}
//        { test: /\.sass$/, loaders: ["style-loader", "css-loader", "sass-loader"]}
    ]},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("bundle.css",  {allChunks: true})
    ]
}
