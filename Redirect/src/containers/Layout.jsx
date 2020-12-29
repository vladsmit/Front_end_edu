import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import MessageField from './MessageField';
import Header from './Header';
import ChatList from './ChatList';
import { sendMessage } from '../actions/messageActions';

class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        sendMessage: PropTypes.func.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    state = {
        inputValue: '',
    };

    checker = () => {
        const { chatId, chats } = this.props;
        const chatList = Object.keys(chats);
        const chat = 0;
        for (let i = 0; i < chats.length; i++) {
            if (chatList[i] == chatId) {
                chat = chatList[i];
            }
        }
        if (chat == 0) {
            return <Redirect to='/' />
        }
    }

    handleCLick = e => {
        e.preventDefault();
        this.handleSendMessage(this.state.inputValue, 'Влад');
    };

    handleSendMessage = (message, sender) => {
        const { inputValue } = this.state;
        const { chatId, messages } = this.props;
        const messageId = Object.keys(messages).length + 1;
        //this.props.saveMessage(messageId, message, sender);
        this.props.sendMessage(messageId, message, sender, chatId);

        if (sender === 'Влад') {
            this.setState({ inputValue: '' });
        }
    };

    handleValue = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    render() {
        this.checker();
        return <div className="wrapper">
            <Header chatId={this.props.chatId} />
            <ChatList />
            <MessageField
                handleValue={this.handleValue}
                handleCLick={this.handleCLick}
                handleSendMessage={this.handleSendMessage}
                input={this.state.inputValue}
                chatId={this.props.chatId} />
        </div>
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    messages: chatReducer.messages,
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);