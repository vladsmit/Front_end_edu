import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';

import Message from './Message';
import MessageSender from './MessageSender';
import { addMessage } from '../store/actions/messageActions';

const MessageField = (props) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (Object.values(props.messages)[Object.values(props.messages).length - 1].sender === 'Влад') {
            const timeout = setTimeout(() => {
                handleSendMessage('Спасибо за ответ', 'Робот')
            }, 1000);
            return () => {
                clearTimeout(timeout);
            }
        }
    }, [props.messages, props.chats]);

    const handleClick = useCallback(event => {
        event.preventDefault();
        handleSendMessage(value, 'Влад');
        
    }, [props.messages, props.chats, value]);

    const handleSendMessage = useCallback((message, sender) => {
        props.addMessage(message, sender, props.chatId);
        if (sender === 'Влад') {
            setValue('');
        }
    }, [props.messages, props.chats, value]);

    const handleChangeValue = useCallback(event => {
        setValue(event.target.value);
    }, [value]);

    let messageElement = props.chats[props.chatId].messageList.map((messageId, i) => <Message key={i} text={props.messages[messageId].text} sender={props.messages[messageId].sender}/>);

    return (
        <div className="msgFieldWrap">
            <div className="msgField">
                {messageElement}
            </div>
            <MessageSender onClick={handleClick} input={value} onChange={handleChangeValue}/>
        </div>
    );
};

MessageField.propTypes = {
    messages: PropTypes.object,
    chats: PropTypes.object,
    chatId: PropTypes.number.isRequired,
}

const mapStateToProps = ({ chatReducer }) => ({
    messages: chatReducer.messages,
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);