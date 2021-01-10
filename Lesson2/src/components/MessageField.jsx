import React, { useState, useEffect, useCallback } from 'react';

import Message from './Message';
import MessageSender from './MessageSender';

const MessageField = (props) => {

    const [messages, setMessages] = useState([{ text: 'Привет', sender: 'Робот' }, { text: 'Как дела?', sender: 'Робот' }]);
    const [value, setValue] = useState('');

    let messageElement = messages.map((message, i) => <Message key={i} message={message} />);

    const sendMessage = useCallback((e) => {
        e.preventDefault();
        setMessages([...messages, { text: value, sender: 'Влад' }]);
        setValue('');
    }, [messages, value]);

    const changeValue = useCallback((event) => {
        setValue(event.target.value);
    }, [value]);

    useEffect(() => {
        if (messages[messages.length - 1].sender === 'Влад') {
            const timeout = setTimeout(() => {
                setMessages([...messages, { text: 'Спасибо за ответ!', sender: 'Робот' }]);
            }, 1000);
            return () => {
                clearTimeout(timeout);
            }
        }
    }, [messages]);

    return (
        <div className="msgField">
            {messageElement}
            <MessageSender onClick={sendMessage} input={value} onChange={changeValue} />
        </div>
    );
};

export default MessageField;