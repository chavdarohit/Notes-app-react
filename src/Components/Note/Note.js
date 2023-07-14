import React from 'react';
import deleteIcon from '../../assets/delete.png';

import './Note.css';


function Note(props) { // the props will recieved from the notecontainer

    const formatDate = (value) => { //created to format the notes
        if (!value) return ""
        const date = new Date(value)
        const monthname = ['Jan', 'Feb', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let hrs = date.getHours()
        let ampm = hrs > 12 ? "PM" : "AM"
        hrs = hrs ? hrs : "12" //if time is 0 then we will put 12 
        hrs = hrs > 12 ? hrs = hrs - 12 : hrs // of hrs goes greater then 12
        let min = date.getMinutes();
        min = min < 10 ? "0" + min : min //if minutes are in 1 - 9 make it 01 to 09
        let day = date.getDate(); //getting current date
        let month = monthname[date.getMonth() - 1]; //extracting month from array because getmonth return integer

        return `${hrs}:${min} ${ampm} ${day} ${month}`;

    }

    return (
        <div className="note" style={{ backgroundColor: props.note.color }}>
            <textarea className="note_text" placeholder='Add Note Here' defaultValue={props.note.text}></textarea>
            <div className='note_footer'>
                <p>{formatDate(props.note.time)}</p>
                <img
                    src={deleteIcon}
                    alt="DELETE"
                    onClick={() => props.deleteNote(props.note.id)} />

            </div>

        </div>);

    // const props={
    //     note:{text:"efsdsv",time:"2:34 AM",color:"red"},
    // }
    // This looks like the structure of props here

}

export default Note;
