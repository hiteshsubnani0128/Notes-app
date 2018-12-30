console.log("Stating App.js");

//const notes = require('./notes');
//const fs = require('fs');
const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString("Hitesh"));

var a =[1,2,3,1,2,3,3,4,5,6];
console.log(_.uniq(a));
//var result = notes.add(10,20);
//console.log('Result: ',result);

//fs.appendFileSync('greetings.txt', result);