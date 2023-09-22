var webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    devServer: {
        port: '8080',
        hot: true,
        client: {
            progress: true,
        },
        static: {
            directory: path.join(__dirname),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, options: {
                    presets: [
                        ['@babel/preset-env']
                    ]
                }
            },
            {
                test: /\.pug$/,
                loader: '@webdiscus/pug-loader',
                options: {
                    method: 'compile'
                }
            },
            { test: /\.svg$/, loader: 'file-loader' },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new ExtractTextPlugin("bundle.css",  {allChunks: true})
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "bundle.css",
        })
    ],
    mode: 'development'
}
