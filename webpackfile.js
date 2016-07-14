/**
 *
 * @name: typewriter
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer');
const yargs = require('yargs').argv
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cwd = __dirname;
const style = new ExtractTextPlugin('[name].css')

let config = {
    cwd: cwd,
    entry: {
        ilmente: [path.join(cwd, '/theme/entry.js')]
    },
    resolve: {
        root: path.join(cwd, '/theme'),
        extensions: ['', '.js', '.scss'],
        alias: {
            jquery: 'jquery/dist/jquery.slim.js'
        }
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }, {
            test: /\.scss$/,
            loader: style.extract([
                'css' + (yargs.dev ? '?sourceMap' : ''),
                'postcss' + (yargs.dev ? '?sourceMap' : ''),
                'sass'
            ])
        }, {
            test: /\.(ttf|woff2?|eot|svg|otf)\??(\d*\w*=?\.?)+$/i,
            loader: 'file?name=./fonts/[name].[ext]'
        }]
    },
    postcss: () => {
        if (yargs.dev) return []

        return [
            autoprefixer({ 
                browsers: ['last 4 versions'] 
            })
        ] 
    },
    sassLoader: {
        outputStyle: yargs.dev ? 'expanded' : 'compressed',
        sourceMap: yargs.dev
    },
    output: {
        path: path.join(cwd, '/assets'),
        filename: '[name].js'
    },
    plugins: [
        style,
        new webpack.DefinePlugin({
            DEV: yargs.dev,
            'process.env': {
                'NODE_ENV': yargs.dev ? '"development"' : '"production"'
            }
        })
    ],
    progress: true,
    failOnError: false,
    devtool: yargs.dev ? 'eval-source-map' : false,
    watch: yargs.dev
}

if (!yargs.dev) {
    config.plugins = [
        ...config.plugins,
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
                source_map: null
            },
            sourceMap: false,
            mangle: false,
            compress: {
                warnings: false,
                dead_code: true
            }
        })
    ]
}

module.exports = config
