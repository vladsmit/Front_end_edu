import React, { useState } from 'react'; 

import Message from './Message';
import MessageButton from './MessageButton';

const MessageField = (props) => {

    const [messages, setMessages] = useState(['Привет', 'Как дела?']);

    let messageElement = messages.map((message, i) => <Message key={i} message={ message } />);

    const addMessage = (event) => {
        setMessages(['Привет', 'Как дела?', 'Нормально']);
    };

    return (
        <div className="wrapper">
            { messageElement }
            <MessageButton onClick={ addMessage } />
        </div>
    );
};

export default MessageField;