const path = require('path');
const NodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        server: path.join(__dirname, 'src/server/server.js'),
    },
    output: {
        path: path.join(__dirname, 'dist/server'),
        publicPath: '/',
        filename: '[name].js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    externals: [NodeExternals()],
    module: {
        rules: [
            {
               test: /\.js$/,
               exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/server/db',
                    to: 'db/[name].[ext]',
                    toType: 'template'
                }
            ]
        })
    ]
};