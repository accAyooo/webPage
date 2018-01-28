import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Router from './route/router.js';
import Store from './Store.js';

ReactDOM.render(
    <Provider store={Store}>
        <Router />
    </Provider>,
    document.getElementById('root'));
