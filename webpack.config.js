const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: ["./public/dev/js/script.js", "./public/dev/scss/style.scss"],
    output: {
        path: __dirname + '/public/dist',
        filename: 'app.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {name: "app.css"},
                    }, 'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        }),
    ],
};
