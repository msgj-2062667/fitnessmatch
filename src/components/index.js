import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dis/css/bootstrap.css';
import '../../src/style.css';
import App from './App';
import { initializeApp } from "firebase/app";


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv-XNbZ7Mw_zSRk2Urxj7w-6RpRHDhNFA",
  authDomain: "fitness-match-c1670.firebaseapp.com",
  projectId: "fitness-match-c1670",
  storageBucket: "fitness-match-c1670.appspot.com",
  messagingSenderId: "31679865627",
  appId: "1:31679865627:web:c63227eac63b39163469be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
