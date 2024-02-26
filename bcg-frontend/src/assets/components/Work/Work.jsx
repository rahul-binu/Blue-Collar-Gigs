import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorkDetails from './WorkDetails';
import Home from '../Home';

function Work() {
    return (
        <Router>
            <Switch>
                <Route path="/workdetails/:id" component={WorkDetails} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default Work;
