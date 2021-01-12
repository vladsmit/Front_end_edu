import React, { useState, useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import MessageField from './MessageField';
import Header from './Header';
import ChatList from './ChatList';

const Layout = (props) => {
    const [chats, setChats] = useState({
        1: {title: 'Чат 1', messageList: [1]},
        2: {title: 'Чат 2', messageList: [2]},
        3: {title: 'Чат 3', messageList: []},
    });
    
    const [messages, setMessages] = useState({
        1: { text: 'Привет', sender: 'Робот' },
        2: { text: 'Как дела?', sender: 'Робот' },
    });

    const [value, setValue] = useState('');

    useEffect(() => {
        if (Object.values(messages)[Object.values(messages).length - 1].sender === 'Влад') {
            const timeout = setTimeout(() => {
                createMessage('Спасибо за ответ', 'Робот')}, 1000);
            return () => {
                clearTimeout(timeout);
            }
        }
    }, [messages, chats]);

    const createMessage = useCallback((message, sender) => {
        const messageId = Object.keys(messages).length + 1;
        setMessages({...messages, [messageId]: { text: message, sender: sender }});
        setChats({...chats, [props.chatId]: {...chats[props.chatId], messageList: [...chats[props.chatId]['messageList'], messageId]}});
        setValue('');
    }, [messages, chats, value]);

    const sendMessage = useCallback((event) => {
        event.preventDefault();
        createMessage(value, 'Влад');
    }, [value]);

    const changeValue = useCallback((event) => {
        setValue(event.target.value);
    }, [value]);

    const createChat = useCallback(() => {
        let newChat = Object.keys(chats).length + 1;
        setChats({...chats, [newChat]: {title: `Чат ${newChat}`, messageList: []}});
    }, [chats]);

    if(chats[props.chatId] === undefined) {
        return <Redirect to="/chat/1" />
    }

    return (
        <div className="wrapper">
            <Header chatId={props.chatId}/>
            <ChatList chats={chats} createChat={createChat}/>
            <MessageField messages={messages} chats={chats} value={value} chatId={props.chatId} onClick={sendMessage} onChange={changeValue}/>
        </div>
    );
};

Layout.propTypes = {
    chatId: PropTypes.number,
}

export default Layout;