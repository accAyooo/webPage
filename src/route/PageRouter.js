import React from 'react';
import { Switch, Route } from 'react-router-dom';

const One = () => (
    <div>
        <h1>home</h1>
    </div>
)

const Two = () => (
    <div>
        <h1>people</h1>
    </div>
)

const NotFound = () => (
    <div><h1>404</h1></div>
)

const PageRouter = () => (
    <Switch>
        <Route exact path="/" component={One}/>
        <Route path="/user" component={Two}/>
        <Route component={NotFound} />
    </Switch>
)

export default PageRouter;