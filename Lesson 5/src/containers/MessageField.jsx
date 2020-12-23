import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import Message from '../components/Message';
import InputBlock from './InputBlock';

class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        handleSendMessage: PropTypes.func.isRequired,
    };

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.props;
        if (Object.keys(prevProps.messages).length < Object.keys(messages).length && Object.values(messages)[Object.values(messages).length - 1].sender === 'Влад') {
            this.timeout = setTimeout(() => this.props.handleSendMessage('Спасибо за ответ!', 'Робот'), 1000);
        }
    };

    componentWillUnmount() {
        clearTimeout(this.timeout);
    };

    render() {
        const { messages, chats, chatId } = this.props;
        const msgElements = chats[chatId].messageList.map((messageId, i) => <Message key={i} text={messages[messageId].text} sender={messages[messageId].sender} />)
        return <div className="msgFieldWrap">
            <div className="msgField">
                {msgElements}
            </div>
            <InputBlock onChange={this.props.handleValue} value={this.props.input} onClick={this.props.handleCLick} />
        </div>
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
    messages: chatReducer.messages,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);