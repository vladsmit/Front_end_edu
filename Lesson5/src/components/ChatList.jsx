import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';

import { addChat } from '../store/actions/chatActions';

const ChatList = (props) => {
    const [title, setTitle] = useState('');

    const chatElements = Object.entries(props.chats).map(([key, value], i) => (<Link key={i} to={`/chat/${key}`} className="chatItem">{value.title}</Link>));

    const handleChatTitle = useCallback(e => {
        setTitle(e.target.value);
    }, [title]);

    const handleAddChat = useCallback((title) => {
        props.addChat(title);
    }, [props.chats, title]);

    const handleClick = useCallback(e => {
        e.preventDefault();
        handleAddChat(title);
        setTitle('');
    }, [title, props.chats]);

    return (
        <div className="chatList">
            {chatElements}
            <form className="createChatForm" onSubmit={handleClick}>
                <input className="chatTitleInput" type="text" placeholder="Введите имя чата" value={title} onChange={handleChatTitle} />
                <input className="sendBtn" type="submit" value="Создать чат" />
            </form>
        </div>
    );
};

ChatList.propTypes = {
    chats: PropTypes.object,
    addChat: PropTypes.func.isRequired,
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);