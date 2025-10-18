import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './portfolio'; // <-- you can use Portfolio instead of App

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
