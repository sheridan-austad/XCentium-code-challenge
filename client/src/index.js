import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// setting up helper components to allow for a fluid application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);