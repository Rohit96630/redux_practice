import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';   // 
import App from './App.js'; // import functionName from './filename';
import reportWebVitals from './reportWebVitals';

import Mystore from './mystore';
import { Provider } from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Mystore}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  

reportWebVitals();

/*
    npm install bootstrap
    npm install react-router-dom
    npm install redux
*/
