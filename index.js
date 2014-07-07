#!/usr/bin/env node
var program = require('commander');

function list(val) {
  return val.split(',').map(Number);
}

program
  .version('0.0.1')
  .option('-c, --clear', 'delete all todo items')

// must be before .parse() since
// node's emit() is immediate

program.on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    $ custom-help --help');
  console.log('    $ custom-help -h');
  console.log('');
});

program.parse(process.argv);

console.log('todo.js');
