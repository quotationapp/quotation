import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './assets/styles/main.css'

import App from './containers/App';
import Home from "./containers/Home";
import Terms from "./containers/Terms";
import About from "./containers/About";
import Privacy from "./containers/Privacy";

ReactDOM.render(
    (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/terms" component={Terms}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/privacy" component={Privacy}/>
                </Switch>
            </App>
        </Router>
    )
    , document.getElementById('root'));
