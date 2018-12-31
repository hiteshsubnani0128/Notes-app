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
    var notes = fetchNotes();
    if(notes.length===0){
        console.log('Node not Found');
    }
    else{
    console.log(`Printing ${notes.length} Notes`);
    for(let i of notes){
        console.log('--');
        console.log('Note Title:',i.title,'\n'+'Note Body:',i.body);
    }
    }
}

var getNote = (title) =>{
    var notes = fetchNotes();
    var rem = notes.filter((note) => note.title === title);
    if(rem.length!==0){
    console.log('Title:',rem[0].title);
    console.log('body:',rem[0].body);
    return(rem.length!==0)
    }
    else{
        return(rem.length!==0)

    }

};

var removeNote = (title) =>{
    //console.log("Removing the note with Title:",title);
    var notes = fetchNotes();
    var rem = notes.filter((note) => note.title !== title);
    saveNotes(rem);

    return notes.length !== rem.length;
};


module.exports = {
addNote,
getAll,
getNote,
removeNote
};