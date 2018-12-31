console.log('starting Notes.js')
const fs = require('fs');

var fetchNotes = () =>{
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }
    catch(e){
        return [];
    }
};

var saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
    
};

var addNote = (title, body) =>{
    var notes = fetchNotes();
    var note ={
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        console.log('Note Added Successfully');
        console.log(`Title: ${title} and body: ${body}`);
    }
    else{
        console.log(`Note adding Fail title \'${title}\' already present`);
    }
    
};

var getAll = () =>{
    console.log("Getting all notes")
}

var getNote = (title) =>{
    console.log("Reading the note with Title: ",title);
};

var removeNote = (title) =>{
    console.log("Removing the note with Title: ",title);
};


module.exports = {
addNote,
getAll,
getNote,
removeNote
};