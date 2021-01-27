import React, { useState, useCallback } from 'react';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';

import { addChat, removeChat } from '../store/actions/chatActions';
import ChatCreator from '../components/ChatCreator';

const ChatList = (props) => {
    const [title, setTitle] = useState(() => {
        return '';
    });

const chatElements = Object.entries(props.chats).map(([key, value], i) => (<li key={i} className={props.chats[key].blink ? "chatBlock__list__item chatBlock__list__item--animation" : "chatBlock__list__item"} onClick={() => handleNavigate(`/chat/${key}`)}>{value.title}</li>));

    const handleChatTitle = useCallback(e => {
        setTitle(() => {
            return e.target.value;
        });
    }, [title]);

    const handleClick = useCallback(e => {
        e.preventDefault();
        handleAddChat(title);
        setTitle(() => {
            return '';
        });
    }, [title, props.chats]);

    const handleAddChat = useCallback((title) => {
        props.addChat(title);
    }, [props.chats, title]);

    const handleRemoveChat = useCallback(() => {
        props.removeChat(props.chatId);
    }, [props.chats, props.chatId]);

    const handleNavigate = useCallback(link => {
        props.push(link);
    }, []);

    return (
        <section className="chatBlock">
            <nav className="chatBlock__list">
                {chatElements}
            </nav>
            <ChatCreator title={title} onChange={handleChatTitle} onClick={handleClick} removeChat={handleRemoveChat} />
        </section>
    );
};

ChatList.propTypes = {
    chatId: PropTypes.number.isRequired,
    chats: PropTypes.object,
    addChat: PropTypes.func.isRequired,
    removeChat: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
};

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, removeChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);