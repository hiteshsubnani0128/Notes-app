console.log('starting Notes.js')

var addNote = (title, body) =>{
    console.log(`Adding note to Title \"${title}\" ${body}`);
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