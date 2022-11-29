import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {ThemeContextProvider} from './contexts/ThemeContext'
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <ThemeContextProvider> 
  <App />
  </ThemeContextProvider>
 
  </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


