const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',  // Modo desenvolvimento
    entry: './src/principal.js',
    output: { // Configurando a saída
        filename: 'principal.js', // nome do arquivo gerado
        path: __dirname + '/public' // Diretorio do arquivo
    },
    devServer: { // Configurando o servidor web de desenvolvimento
        contentBase: "./public",
        port: 9000
    },
    optimization: { // Funciona como o uglify normal
        minimizer: [
            new UglifyJsPlugin({ // Para js
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({}) // Para CSS
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ // Cria um arquivo externo de CSS
            filename: "estilo.css"
        })
    ],
    module: {
        // Cada objeto dentro de rules é um loader
        rules: [{
            test: /\.s?[ac]ss$/, // Tanto css, quanto scss e sass
            use: [
                MiniCssExtractPlugin.loader, // CSS em um arquivo externo
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader'
            ]
        }, { // Aceita tipos de arquivos determinados
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}