const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
        historyApiFallback: true
    }
}
