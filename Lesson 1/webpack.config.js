const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        app: './index.jsx',
    },
    context: path.resolve(__dirname, "src"),
    output: {
        path: path.resolve(__dirname, "dist", "build"),
        filename: 'app.js',
        publicPath: '/dist/build/',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
};