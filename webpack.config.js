const webpack       = require('webpack');
const path          = require('path');

const buildPath     = path.resolve(__dirname, 'dist');
const srcPath       = path.resolve(__dirname, 'src');

module.exports = {
    entry: srcPath + '/index.js',
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, include: srcPath, exclude: /(node_modules)/, use: 'babel-loader' }
        ]
    }
}
