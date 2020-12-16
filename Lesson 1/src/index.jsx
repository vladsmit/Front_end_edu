import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import MessageForm from './components/MessageForm.jsx';

ReactDOM.render(
    <MessageForm className="form" />,
    document.getElementById('root'),
);