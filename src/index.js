import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "",
//   authDomain: "ecomerce-coder-69571.firebaseapp.com",
//   projectId: "ecomerce-coder-69571",
//   storageBucket: "ecomerce-coder-69571.appspot.com",
//   messagingSenderId: "540559076617",
//   appId: "1:540559076617:web:f2aef25cc84539de7537d8"
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
