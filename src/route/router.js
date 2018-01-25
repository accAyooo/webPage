import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PageRouter from './PageRouter.js'

const AppRouter = () => (
    <Router>
        <Route path="/" component={PageRouter} />
    </Router>
)

export default AppRouter;

