import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './assets/styles/main.css'

import App from './containers/App';

let apiURL;

if (location.host === 'quotation.feliperego.com') {
    apiURL = 'https://quotation-api.feliperego.com/';
} else {
    apiURL = 'http://localhost:3001/';
}

window.apiURL = apiURL;


ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));
