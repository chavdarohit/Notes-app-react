import React, { useState } from "react";
import plusIcon from "../../assets/plus.png"
import "./Sidebar.css"

function Sidebar(props) { //here the props will be recieved from the app which is addNote

    const color = ["#f29b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

    /*
* Created with https://www.css-gradient.com
* Gradient link: https://www.css-gradient.com/?c1=84516c&c2=35e7a7&gt=l&gd=dtl
*/

    const [listOpen, setListOpen] = useState(false); //use state for setting anf updating array of notes

    return (
        <div className="sidebar">
            <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)}/>
            {/* condition when listopen is true it will show active css othervise another css  */}
            <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
                {
                    // taking one one element from color and making the <li></li> of every color
                    color.map((item, index) =>
                        <li
                            key={index}
                            className="sidebar_list_item"
                            style={{ backgroundColor: item }}
                            onClick={() => props.addNote(item)}
                        // by clicking it will call the addnote function in app.js
                        />
                    )}

            </ul>
        </div>

    );
}

export default Sidebar