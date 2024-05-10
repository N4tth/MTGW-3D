import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Monigote from './components/pages/ms/monigote';
import Room from './components/pages/ms/room';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Monigote />
    <Room />
  </React.StrictMode>
);

reportWebVitals();
