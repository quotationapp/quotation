import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from "../containers/Home";
import Terms from "../containers/Terms";
import About from "../containers/About";
import Privacy from "../containers/Privacy";

const Main = () => (
    <main className="container-fluid wrapper">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/terms" component={Terms}/>
            <Route path="/about" component={About}/>
            <Route path="/privacy" component={Privacy}/>
        </Switch>
    </main>
);

export default Main;
