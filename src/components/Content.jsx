import React, { useState, useEffect } from "react";

const Content = () => {
  const [text, setText] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem('notes')));
  }, []);

  const handleSave = () => {
    console.log("notes:", notes);
    if(notes){

      localStorage.setItem('notes', JSON.stringify([...notes, text]));
      setNotes(JSON.parse(localStorage.getItem('notes')));
    }
    else{
      
    localStorage.setItem('notes', JSON.stringify([text]));
    setNotes(JSON.parse(localStorage.getItem('notes')));
    }
  };


  return (
    <main className="MainContent">
      {
       notes && notes.map(note=>{
          return <p>{note}</p>
        })
      }
      <div className="Title">
        <h1>Deary</h1>
      </div>
      <div className="TEXT">
        <textarea 
          cols="30" 
          rows="10"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className="Save">
        <div className="SaveButton">
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </main>
  );
}

export default Content;
