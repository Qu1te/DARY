import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import "./History.css"
const HistoryPage = () => {
    const [cookies] = useCookies(['yourCookieName']);
    const savedData = cookies['yourCookieName'] || 'No data saved in the cookie.';
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
                    <p>{savedData}</p>
                </div>
            </div>
        </div>
    </main>
  );
};

export default HistoryPage;
