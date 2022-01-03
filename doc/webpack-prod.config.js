const path = require('path');
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EventHooksPlugin = require('event-hooks-webpack-plugin');
const fs = require('fs-extra')

module.exports = {
    mode: 'production',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css', ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
              test: /\.css$/,
              exclude: /node_modules/,
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    modules: {
                        localIdentName: "[name]__[local]___[hash:base64:5]",
                    },
                    importLoaders: 1,
                    sourceMap: false,
                  },
                },
              ],
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
            },
        ],
    },
    output: {
        publicPath: ".",
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            PUBLIC_URL: "public",
            BASE_HREF: ".",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new EventHooksPlugin({
          'beforeRun': (compilation, done) => {
            console.log('Copying source files to compiled')
            fs.copy('public', 'dist/public', done);
          }
        }),
    ]
}