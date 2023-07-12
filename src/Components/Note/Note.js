import React from 'react';
import './Note.css';


function Note(props) {
    return (
        <div className="note" style={{backgroundColor:props.note.color}}>
            <textarea className="note_text" defaultValue={props.note.text}></textarea>
            <p>{props.note.time}</p>
        </div>);

// const props={
//     note:{text:"efsdsv",time:"2:34 AM",color:"red"},
// }
// This looks like the structure of props here

}

export default Note;
