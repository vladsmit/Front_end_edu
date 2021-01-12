import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ChatList = (props) => {
    const chatElements = Object.keys(props.chats).map((chat, i) => (<Link key={i} to={`/chat/${chat}`} className="chatItem">Чат {chat}</Link>));

    return (
        <div className="chatList">
            {chatElements}
            <input className="sendBtn chatListMargin" type="submit" value="Создать чат" onClick={props.createChat} />
        </div>
    );
};

ChatList.propTypes = {
    chats: PropTypes.object,
    createChat: PropTypes.func.isRequired,
}

export default ChatList;