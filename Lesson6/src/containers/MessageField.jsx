import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';

import Message from '../components/Message';
import MessageSender from '../components/MessageSender';
import { addMessage, removeMessage } from '../store/actions/messageActions';

const MessageField = (props) => {
    const [value, setValue] = useState(() => {
        return '';
    });

    useEffect(() => {
        updateScroll();
    }, [props.messages, props.chats]);

    const handleClick = useCallback(event => {
        event.preventDefault();
        handleSendMessage(value, 'Влад');
    }, [props.messages, props.chats, value]);

    const handleSendMessage = useCallback((message, sender) => {
        props.addMessage(message, sender, props.chatId, false);
        if (sender === 'Влад') {
            setValue(() => {
                return '';
            });
        };
    }, [props.messages, props.chats, value]);

    const handleChangeValue = useCallback(e => {
        setValue(() => {
            return e.target.value;
        });
    }, [value]);

    const handleRemoveMessage = useCallback((messageId) => {
        props.removeMessage(props.chatId, messageId);
    }, [props.chats, props.chatId]);

    const updateScroll = () => {
        let messageList = document.querySelector('.msgField');
        messageList.scrollTop = messageList.scrollHeight;
    };

    let messageElement = props.chats[props.chatId].messageList.map((messageId, i) => <Message key={i} text={props.messages[messageId].text} sender={props.messages[messageId].sender} removeMessage={() => handleRemoveMessage(messageId)} />);

    return (
        <main className="msgField--wrapper">
            <div className="msgField">
                {messageElement}
            </div>
            <MessageSender onClick={handleClick} input={value} onChange={handleChangeValue} />
        </main>
    );
};

MessageField.propTypes = {
    messages: PropTypes.object,
    chats: PropTypes.object,
    chatId: PropTypes.number.isRequired,
    addMessage: PropTypes.func.isRequired,
    removeMessage: PropTypes.func.isRequired,
};

const mapStateToProps = ({ chatReducer }) => ({
    messages: chatReducer.messages,
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addMessage, removeMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);