import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IngredientsDetail from './js/ingredients'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IngredientsDetail>
    <App />
    </IngredientsDetail>
  </React.StrictMode>
);
reportWebVitals();
