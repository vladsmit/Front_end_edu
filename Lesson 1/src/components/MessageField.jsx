import React from 'react';

import MessageComponent from './MessageComponent.jsx';
//import '../styles.css';

const MessageField = (props) => {
    return props.messages.map((message, i) => <MessageComponent key={message.id} text={message.title} />);
}

export default MessageField