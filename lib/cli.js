#!/usr/bin/env node

const meow = require('meow')
const greenlane = require('.')

const cli = meow(`
	Usage
	  $ greenlane [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ greenlane
	  unicorns & rainbows
	  $ greenlane ponies
	  ponies & rainbows
`)

console.log(greenlane(cli.input[0] || 'unicorns'))