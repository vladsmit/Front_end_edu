const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './index.jsx'
    },
    context: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'dist', 'build'),
        filename: 'app.js',
        publicPath: '/dist/build'
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'assets',
                    to: 'assets/[name].[ext]',
                    toType: 'template'
                }
            ]
        })
    ],  
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                use: ['url-loader']
            }
        ]
    }
};