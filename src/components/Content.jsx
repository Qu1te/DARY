import React, { useState, useEffect } from "react";

const Content = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const savedText = localStorage.getItem('myData');
    if (savedText) {
      setText(savedText);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('myData', text);
  };

  return (
    <main className="MainContent">
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
