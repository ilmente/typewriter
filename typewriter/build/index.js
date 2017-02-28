'use strict';

const webpack = require('webpack');
const configuration = require('./webpack.config');

console.log('-> typewriter');
console.log('building assets...');

if (configuration.watch) {
    console.log('watching for changes, press [ctrl+c] to exit');
}

webpack(configuration, (error, stats) => {
    if (error) {
        console.error(error);
        console.error('aborted');
    }

    const output = stats.toString(configuration.stats);

    if (output) {
        console.log('output:\n' + output);
    }

    if (stats.hasErrors()) {
        console.error('done with errors');
    } else {
        console.log('done');
    }

    if (configuration.watch) {
        console.log('watching...');
    }
});
