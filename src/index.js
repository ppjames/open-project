#!/usr/bin/env node

require = require('esm')(module /*, options*/);
require('../src/cli').cli(process.argv);

// import { getProyects } from './src/directories'
const { getProyects } = require('./src/directories')


;(async () => {
	let directories = getProyects()
	console.log(directories)
})()

