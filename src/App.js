import React from 'react'
import NoteContainer from './Components/NoteContainer/NoteContainer';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';

function App() {


  const notes = [
    {
      text: "gsfgfds",
      time: "01:50 AM",
      color: "orange"
    },
    {
      text: "gsgsggs",
      time: "11:11 PM",
      color: "cyan"
    },
    {
      text: "sgjgfkd",
      time: "9:02 AM",
      color: "pink"
    },
    {
      text: "sgmlknn",
      time: "6:12 AM",
      color: "yellow"
    },
    {
      text: "ghweffek",
      time: "3:10 PM",
      color: "cyan"
    },
    {
      text: "all in one",
      time: "9:10 AM",
      color: "grey"

    }


  ]



  return (
    <div className="App">
      <Sidebar />
      <NoteContainer notes={notes} />
    </div>
  );
}

export default App;
