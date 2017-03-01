/**
 *
 * @name: typewriter
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const settings = require('./settings');

let devtool = 'cheap-source-map';
let postCssPlugins = [];

if (settings.options.isWatching) {
    devtool = 'cheap-module-eval-source-map';
}

if (settings.options.isProduction) {
    devtool = false;

    postCssPlugins = [
        autoprefixer({
            browsers: ['last 4 versions']
        })
    ];
}

let config = {
    context: settings.paths.rootDir,
    stats: 'errors-only',
    devtool,

    watch: settings.options.isWatching,

    entry: {
        typewriter: path.resolve('./typewriter/index.js')
    },

    output: {
        path: settings.paths.publicDir,
        filename: `/js/[name].js`
    },

    resolve: {
        modules: ['node_modules', settings.paths.sourcePath],
        extensions: ['.js', '.css', '.scss'],
        alias: {
            lib: path.join(settings.paths.sourceDir, 'lib'),
            component: path.join(settings.paths.sourceDir, 'app/components/component')
        }
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/i,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: !settings.options.isProduction,
                        import: false,
                        url: false
                    }
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: !settings.options.isProduction,
                        outputStyle: settings.options.isProduction ? 'compressed' : 'expanded'
                    }
                }]
            })
        }, {
            test: /\.(ttf|woff2?|eot|svg|otf)\??(\d*\w*=?\.?)+$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '/fonts/[name].[ext]',
                    publicPath: settings.paths.publicPath
                }
            }]
        }]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                context: settings.paths.rootDir,
                postcss: postCssPlugins
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': settings.options.isProduction ? '"production"' : '"development"'
            }
        }),
        new ExtractTextPlugin({
            filename: 'css/typewriter.css'
        }),
        new CopyPlugin([{
            from: path.join(settings.paths.sourceDir, 'fonts'),
            to: 'fonts'
        }])
    ]
};

if (settings.options.isProduction) {
    config.plugins = [
        ...config.plugins,
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
                source_map: null
            },
            sourceMap: true,
            mangle: false,
            compress: {
                warnings: false,
                dead_code: true
            }
        })
    ];
}

module.exports = config;
