import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import initStore /*{ history }*/ from './utils/store';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from './containers/Router';

const { store, persistor } = initStore();

ReactDOM.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);