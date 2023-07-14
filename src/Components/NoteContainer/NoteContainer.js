import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";

function NoteContainer(props) { //the props will recieve from app notes and delete notes

    const reverseArray = (arr) => { //this function takes an array argument and make it reverse
        const array = []

        for (let i = arr.length - 1; i >= 0; --i) {
            array.push(arr[i])
        }
        return array

    }

    const notes = reverseArray(props.notes) // this is the array of notes coming from app.js

    return (
        <div className="note-container">
            <h2>Notes</h2>
            <div className="note-container_notes custom-scroll">
                {
                    notes.length > 0 ? // ternory operator (condition) if no notes present 
                        notes.map((item) => //reversed array of notes
                            <Note //the notes are included here
                                key={item.id} //unique id for note
                                note={item}
                                deleteNote={props.deleteNote}
                            // passing text,color,time to notes as arfuments
                            />) : <h3>No Notes Present</h3> //if no notes are there then show this

                }
            </div>
        </div>
    );
}
export default NoteContainer;
