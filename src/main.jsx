import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5RNdGQenYwFPqadu_5Y-rJwaTTUY816g",
  authDomain: "react-pangea-tadeo-meggiolaro.firebaseapp.com",
  projectId: "react-pangea-tadeo-meggiolaro",
  storageBucket: "react-pangea-tadeo-meggiolaro.appspot.com",
  messagingSenderId: "1012492139303",
  appId: "1:1012492139303:web:cd3b4d582589fa35d14702"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
