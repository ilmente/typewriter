/**
 *
 * @name: typewriter
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

const gutil = require('gutil')
const webpack = require('webpack')
const yargs = require('yargs').argv
const webpackConfig = require('./webpackfile')

console.log('[webpack] building assets for %s...', yargs.dev ? 'development' : 'production')

webpack(webpackConfig, (error, stats) => {
    if (error) {
        throw new gutil.PluginError('webpack', error)
    }

    if (yargs.dev) {
        gutil.log('[webpack]', stats.toString({
            colors: true
        }))

        console.log('[webpack] watching assets...')
    } else {
        console.log('[webpack] assets built')
    }
})
