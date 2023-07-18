import React from 'react';
import deleteIcon from '../../assets/delete.png';

import './Note.css';


// let timer = 500, timeout
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

    // const debounce = (func) => { //when this is done it will wait for 500ms and then perform tasks
    //                                 //debouncing is used to dealy a function in react 
    //     clearTimeout(timeout) //clear will clear the existing time
    //     timeout = setTimeout(func, timer); //it will set new timeout which is 500 here

    //     //the function which is passed will be call after given debounce
    // }

    const updateText = (text, id) => {
        // debounce(() => props.updateText(text, id)) //this will call the function written in app.js of updatetext
            props.updateText(text,id);
    }

    const updateTitle =(title, id) => {
        // debounce(() => props.updateTitle(title, id)) //this will call the function written in app.js of updatetext
            props.updateTitle(title,id);
    }

    return (
        <div className="note" style={{ backgroundColor: props.note.color }}>
            <textarea className='note_title'
                onChange={(event) => updateTitle(event.target.value, props.note.id)} //event target pointing current tag for here title
                placeholder='Title' maxLength={15} defaultValue={props.note.title}>
            </textarea>
            

            <textarea className="note_text custom-scroll" placeholder='Add Note Here'
                onChange={(event) => updateText(event.target.value, props.note.id)} //onchange activity called when the text is changed everytime
                defaultValue={props.note.text}></textarea>


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
