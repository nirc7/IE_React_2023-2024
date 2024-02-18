import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import AppOpt2 from './Pages/AppOpt2.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  //opt1
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>

  //opt2
  <AppOpt2/>
)
