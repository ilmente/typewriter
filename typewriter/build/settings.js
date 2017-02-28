'use strict';

const path = require('path');
const argv = require('yargs').argv;

// cli verbose arg can be invoked:
// $ npm run script-name -- --verbose
const isVerbose = !!argv.verbose;

// paths and directories
const rootDir = process.cwd();
const sourcePath = './typewriter/';
const publicPath = '/';
const sourceDir = path.resolve(sourcePath);
const publicDir = path.resolve('./assets/');

const settings = {
    // options: cli args
    options: {
        isProduction: !!argv.prod,
        isWatching: !!argv.dev
    },

    // paths
    paths: {
        sourcePath,
        publicPath,
        rootDir,
        sourceDir,
        publicDir
    }
};

module.exports = settings;
