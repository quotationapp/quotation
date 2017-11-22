import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import App from './containers/App';
import Home from "./containers/Home";
import Terms from "./containers/Terms";

import './assets/styles/main.css'

ReactDOM.render(
    (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/terms" component={Terms}/>
                </Switch>
            </App>
        </Router>
    )
    , document.getElementById('root'));
