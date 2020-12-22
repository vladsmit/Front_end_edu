import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from './components/Router';

ReactDOM.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
    document.getElementById('root'),
);