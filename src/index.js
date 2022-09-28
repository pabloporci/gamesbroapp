import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNts1xs0WJZsBP5IFafB3gvvFxyp4sya0",
  authDomain: "gamesbro-react.firebaseapp.com",
  projectId: "gamesbro-react",
  storageBucket: "gamesbro-react.appspot.com",
  messagingSenderId: "867846584030",
  appId: "1:867846584030:web:15cf446966bacf6c85344f"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

