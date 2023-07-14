import React, { useEffect, useState } from 'react'
import NoteContainer from './Components/NoteContainer/NoteContainer';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';

function App() {


  const [notes, setNotes] = useState( // the notes is array where the notes as objects are passed then it will pass to Notecontainer
    // set notes will work as the function and update the notes array when setnotes is called
    JSON.parse(localStorage.getItem('NOTES')) || [] //getting notes from localstorage if no notes then || Empty array 
  );


  const addNote = (color) => { //adding the new notes
    const tempNotes = [...notes] //making temporary new array by copying the notes array

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random()) * 78, //getting the unique id and adding with Math function to add more uniquness
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes); //pushing the new array to notes array
  }

  const deleteNote = (id) => { //deleting the note from the array

    const tempNotes = [...notes] //making copy of notes array

    const index = tempNotes.findIndex(item => item.id == id)  //checking argument id with array's id which is item.id using arrow function

    if (index < 0) return //if the index not found

    tempNotes.splice(index, 1); //deleting the value (starting index, no of index to delete)
    setNotes(tempNotes); //pushing new array to notes after deleting
  }


  useEffect(() => { // it is getting when notes change something and setting it into local storage
    localStorage.setItem('NOTES', JSON.stringify(notes))
  }, [notes])

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      {/* passed addnote as a props to the sidebar and sidebar is imported or included here */}
      <NoteContainer notes={notes} deleteNote={deleteNote} />
      {/* passed notes and deletenote as a props to NoteContainer and notecontainer is imported or included here */}
    </div>
  );
}

export default App;
