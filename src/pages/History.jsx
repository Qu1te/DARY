import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import "./History.css"
const HistoryPage = () => {
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
    <main>
        <div className='HistoryContent'>
            <div className='HistoryConteiner'>
                <div className='HistoryBackButton'>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <button>Back</button>
                    </Link>
                </div>
                <div className='HistoryInfo'>
                {
       notes && notes.map(note=>{
          return(
            <div className='HistoryText'>
                <p>{note}</p>
            </div>
          ) 
        })
      }
                </div>
            </div>
        </div>
    </main>
  );
};

export default HistoryPage;
