#!/usr/bin/env node

require('dotenv').config()
require = require('esm')(module /*, options*/);
require('../src/cli').cli(process.argv);
