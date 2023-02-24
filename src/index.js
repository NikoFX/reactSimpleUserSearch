import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

fetch('https://randomuser.me/api?results=300')
  .then(res => res.json())
  .then(data => {
    let i = 0
    let dataWithId = data.results.map(item => { item.id = ++i; return item })
    const users = [...dataWithId]

    root.render(
      <React.StrictMode>
        <App users={users}/>
      </React.StrictMode>
    )

  })
