import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
