import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';
import InputBlock from './InputBlock';

export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.props;
        if (Object.keys(prevProps.messages).length < Object.keys(messages).length && Object.values(messages)[Object.values(messages).length - 1].name === 'Влад') {
            this.timeout = setTimeout(() => this.props.handleSendMessage('Спасибо за ответ!', 'Робот'), 1000);
        }
    };

    componentWillUnmount() {
        clearTimeout(this.timeout);
    };

    render() {
        const { messages, chats, chatId } = this.props;
        const msgElements = chats[chatId].messageList.map((messageId, i) => <Message key={i} text={messages[messageId].text} name={messages[messageId].name} />)
        return <div className="msgFieldWrap">
            <div className="msgField">
                {msgElements}
            </div>
            <InputBlock onChange={this.props.handleValue} value={this.props.input} onClick={this.props.handleCLick} />
        </div>
    }
}