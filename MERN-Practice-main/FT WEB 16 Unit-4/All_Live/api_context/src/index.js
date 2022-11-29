import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CartContextProvider} from "./contexts/CartContext.jsx"
import {ThemeContextProvider} from "./contexts/ThemeContext.jsx"
ReactDOM.render(
  
  <React.StrictMode>
  <CartContextProvider>   
  <ThemeContextProvider>
  <App />
  </ThemeContextProvider>
   
    </CartContextProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);


