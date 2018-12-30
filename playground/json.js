/*var obj ={
name : "Hitesh"
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);*/
/*
var personString = '{"name" : "Hitesh", "age" : 21}';

var person = JSON.parse(personString);
console.log(person);*/

const fs = require('fs');

var orignalNote = {
    title : 'Hitesh',
    body : 'It is a good boy'
};

var orignalNoteString = JSON.stringify(orignalNote);
fs.writeFileSync("notes.json", orignalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title + " " + note.body);