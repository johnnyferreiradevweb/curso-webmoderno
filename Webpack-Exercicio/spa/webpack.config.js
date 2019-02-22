const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // Criar arquivos CSS externos
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // Minificar o JS
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') // Minificar CSS

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/build'
    },
    devServer: {
        contentBase: "./build",
        port: 9000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}