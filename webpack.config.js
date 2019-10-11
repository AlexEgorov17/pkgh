const webpack = require('webpack');

module.exports = {
    entry: './js/app/index.js',
    output: {
        filename: 'bundle.js'
    },
    watch: 'development',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    optimization: {
        minimize: true
    },
    performance: {
        hints: false
    },
    mode: 'development',
    plugins: [
        new webpack.EnvironmentPlugin({  
            NODE_ENV: 'development',
            DEBUG: false
        })
    ]
};