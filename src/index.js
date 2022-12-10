import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import { AppProvider } from './Context';
import { createRoot } from 'react-dom/client';
import React from 'react';



const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
   

    <AppProvider>

        <App tab="home" />
   </AppProvider>

   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
