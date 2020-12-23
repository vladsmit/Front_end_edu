import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import initStore from './utils/store';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from './containers/Router';

ReactDOM.render(
    <Provider store={initStore()}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);