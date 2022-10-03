import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/Components/App.js';
import { BrowserRouter } from "react-router-dom";

const port = process.env.PORT || 4000;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

