import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import IngredientsDetail from './js/ingredients'
import reportWebVitals from './reportWebVitals';
import './CSS/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IngredientsDetail>
    <App />
    </IngredientsDetail>
  </React.StrictMode>
);
reportWebVitals();
