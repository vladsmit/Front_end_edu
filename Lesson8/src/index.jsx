import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './styles/styles.css';

import Router from './containers/Router';
import InstallPopup from './components/InstallPopup';
import {store, persistor, history } from './store';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <Router />
                <InstallPopup />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);