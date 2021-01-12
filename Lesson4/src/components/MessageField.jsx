import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';
import MessageSender from './MessageSender';

const MessageField = (props) => {
    let messageElement = props.chats[props.chatId].messageList.map((messageId, i) => <Message key={i} text={props.messages[messageId].text} sender={props.messages[messageId].sender} />);

    return (
        <div className="msgFieldWrap">
            <div className="msgField">
                {messageElement}
            </div>
            <MessageSender onClick={props.onClick} input={props.value} onChange={props.onChange} />
        </div>
    );
};

MessageField.propTypes = {
    messages: PropTypes.object,
    chats: PropTypes.object,
    chatId: PropTypes.number,
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default MessageField;