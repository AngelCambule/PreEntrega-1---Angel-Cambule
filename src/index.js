import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClHUej1CBwHAgL4dKYnLolWxSs2cd-sMU",
  authDomain: "decosill.firebaseapp.com",
  projectId: "decosill",
  storageBucket: "decosill.appspot.com",
  messagingSenderId: "297283045456",
  appId: "1:297283045456:web:fdba7f11dbbc6245b82955",
  measurementId: "G-HWL1ZZDFJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
