import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';

const Body = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
        </Switch>
    </BrowserRouter>
);

export default Body;
