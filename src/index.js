import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyBaVde3o4-4uleEJ7ioFLrWdIPohZi8iu0",
//   authDomain: "coder-comerce.firebaseapp.com",
//   projectId: "coder-comerce",
//   storageBucket: "coder-comerce.appspot.com",
//   messagingSenderId: "667676078014",
//   appId: "1:667676078014:web:3fdfd41063acfa476413ef",
//   measurementId: "G-G94JH6DM4G"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
