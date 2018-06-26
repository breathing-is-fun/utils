/*
 * @Author: zy9@github.com/zy410419243 
 * @Date: 2018-05-20 13:48:08 
 * @Last Modified by: zy9
 * @Last Modified time: 2018-06-26 14:24:45
 */
const webpack = require('webpack');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TohoLogPlugin = require('toho-log-plugin');
const path = require('path');

const dev = process.argv.includes('development') ? true : false;

// production
const options = {
    mode: 'development',
    devServer: {
        port: 9099
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'source-map',
    entry: {
        DeepClone: __dirname + '/src/lib/DeepClone',
        Serialize: __dirname + '/src/lib/Serialize',
        Store: __dirname + '/src/lib/Store',
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name]/index.js',
    },
    plugins: [
        new TohoLogPlugin({ dev }),
        new CleanWebpackPlugin(['dist'], {
            verbose: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
        ]
    }
}

dev && webpack(options).watch({}, () => { });

!dev && webpack(options).run();