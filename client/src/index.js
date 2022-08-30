import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './components/data/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // allowing access to user information throughout the application
  <React.StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
  </React.StrictMode>
);
