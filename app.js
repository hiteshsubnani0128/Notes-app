console.log("Stating App.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes').default;

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ',command);
console.log('Process: ',process.argv);
console.log('Yargs: ',argv);

if(command === 'add'){
    notes.addNote(argv.title, argv.body);
}
else if(command === 'list'){
    notes.getAll();
}
else if(command === 'read'){
    console.log('Reading note');
}
else if(command === 'remove'){
    console.log('removing note');
}
else{
    console.log('Cmd not found');
}
