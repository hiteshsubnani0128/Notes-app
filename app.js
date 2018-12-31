console.log("Stating App.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
//  var command = process.argv[2];
//  console.log('Command: ',command);
//  console.log('Process: ',process.argv);
//  console.log('Yargs: ',argv);

if(command === 'add'){
    notes.addNote(argv.title, argv.body);
}
else if(command === 'list'){
    notes.getAll();
}
else if(command === 'read'){
    var abc = notes.getNote(argv.title);
    var message = abc ? '' : 'Note not found'; 
    console.log(message);
}
else if(command === 'remove'){
   var noteRemoved = notes.removeNote(argv.title);
   var message = noteRemoved ? 'Note was removed' : 'Note not found';
   console.log(message);

}
else{
    console.log('Cmd not found');
}