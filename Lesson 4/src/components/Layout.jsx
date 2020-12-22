import React from 'react';
import PropTypes from 'prop-types';

import MessageField from './MessageField';
import Header from './Header';
import ChatList from './ChatList';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    state = {
        chats: {
            1: {title: 'Чат 1', messageList: [1] },
            2: {title: 'Чат 2', messageList: [2] },
            3: {title: 'Чат 3', messageList: [] },
        },
        messages: {
            1: { text: 'Привет', name: 'Робот' },
            2: { text: 'Как дела?', name: 'Робот' }
        },
        inputValue: '',
    };

    handleCLick = e => {
        e.preventDefault();
        this.handleSendMessage(this.state.inputValue, 'Влад');
    };

    handleSendMessage = (message, sender) => {
        const { messages, chats, inputValue } = this.state;
        const { chatId } = this.props;
        
        if (inputValue.length > 0 || sender === 'Робот') {
            const messageId = Object.keys(messages).length + 1;
            this.setState({
                messages: {...messages, [messageId]: {text: message, name: sender}},
                chats: {...chats, [chatId]: {...chats[chatId], messageList: [...chats[chatId]['messageList'], messageId]}}
            })
        }

        if (sender === 'Влад') {
            this.setState({ inputValue: '' });
        }
    };

    handleValue = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    handleCreateChat = () => {
        const { chats } = this.state;
        const newChatId = Object.keys(chats).length + 1;
        this.setState({chats: {...chats, [newChatId]: {title: `Чат ${newChatId}`, messageList: []}}});
    };

    render() {
        return <div className="wrapper">
            <Header chatId={this.props.chatId} />
            <ChatList chats={this.state.chats} createChat={this.handleCreateChat} />
            <MessageField 
            handleValue={this.handleValue}
            handleCLick={this.handleCLick}
            handleSendMessage={this.handleSendMessage}
            chats={this.state.chats}
            messages={this.state.messages}
            input={this.state.inputValue}
            chatId={this.props.chatId} />
        </div>
    }
}